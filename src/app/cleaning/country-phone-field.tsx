"use client";

import {
  useEffect,
  useId,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
  type KeyboardEvent as ReactKeyboardEvent,
} from "react";
import { getCountries, getCountryCallingCode } from "react-phone-number-input/min";
import en from "react-phone-number-input/locale/en";

/* Phone field with a searchable country-code picker for the /cleaning lead
   form. Country names and dial codes come from react-phone-number-input (the
   library /hvac-new already uses), and flags from the same URL that library
   loads them from by default.

   Form contract: the visible number input carries `required` (so the
   form's checkValidity/reportValidity still covers it) but no name. What
   gets submitted is two hidden fields: `phone` ("+1 5551234567") and
   `country` ("United States"). */

const FLAG_URL = "https://purecatamphetamine.github.io/country-flag-icons/3x2/{XX}.svg";

type Country = { iso: string; name: string; dial: string };

const COUNTRIES: Country[] = getCountries()
  .map((iso) => ({ iso, name: en[iso] ?? iso, dial: "+" + getCountryCallingCode(iso) }))
  .sort((a, b) => a.name.localeCompare(b.name));

const DEFAULT_ISO = "US";

function flagSrc(iso: string) {
  return FLAG_URL.replace("{XX}", iso);
}

export function CountryPhoneField({ id }: { id: string }) {
  const [iso, setIso] = useState(DEFAULT_ISO);
  const [number, setNumber] = useState("");
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const [placement, setPlacement] = useState<{ up: boolean; listMax: number }>({ up: false, listMax: 240 });

  const wrapRef = useRef<HTMLDivElement>(null);
  const numberRef = useRef<HTMLInputElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const listId = useId();

  const country = COUNTRIES.find((c) => c.iso === iso) ?? COUNTRIES[0];

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return COUNTRIES;
    const digits = q.replace(/[^0-9]/g, "");
    return COUNTRIES.filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        c.iso.toLowerCase() === q ||
        (digits !== "" && c.dial.slice(1).startsWith(digits)),
    );
  }, [query]);

  function openPanel() {
    setQuery("");
    setActive(Math.max(0, COUNTRIES.findIndex((c) => c.iso === iso)));
    setOpen(true);
  }

  function closePanel(refocus: "button" | "number" | null) {
    setOpen(false);
    if (refocus === "button") buttonRef.current?.focus();
    if (refocus === "number") numberRef.current?.focus();
  }

  function choose(c: Country) {
    setIso(c.iso);
    closePanel("number");
  }

  // Keep the panel inside the modal: open downward when there is room below
  // the field, otherwise upward, and cap the list to the space available.
  useLayoutEffect(() => {
    if (!open) return;
    const wrap = wrapRef.current;
    if (!wrap) return;
    const field = wrap.getBoundingClientRect();
    const bounds = wrap.closest(".modal")?.getBoundingClientRect() ?? {
      top: 0,
      bottom: window.innerHeight,
    };
    const searchBlock = 70; // panel padding + search box + gap
    const below = bounds.bottom - field.bottom - 12;
    const above = field.top - bounds.top - 12;
    const up = below < 220 && above > below;
    const room = (up ? above : below) - searchBlock;
    setPlacement({ up, listMax: Math.max(120, Math.min(260, Math.floor(room))) });
    searchRef.current?.focus();
  }, [open]);

  // Scroll the highlighted option into view as it moves.
  useEffect(() => {
    if (!open) return;
    const el = listRef.current?.querySelector<HTMLElement>(`[data-index="${active}"]`);
    el?.scrollIntoView({ block: "nearest" });
  }, [active, open]);

  // Close when clicking anywhere outside the field.
  useEffect(() => {
    if (!open) return;
    function onPointerDown(e: PointerEvent) {
      if (!wrapRef.current?.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [open]);

  // The page calls form.reset() after a successful send; clear the number
  // with it (the hidden fields are React-controlled, so reset alone would
  // leave them stale).
  useEffect(() => {
    const form = numberRef.current?.form;
    if (!form) return;
    function onReset() {
      setNumber("");
      setOpen(false);
    }
    form.addEventListener("reset", onReset);
    return () => form.removeEventListener("reset", onReset);
  }, []);

  function onSearchKeyDown(e: ReactKeyboardEvent<HTMLInputElement>) {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((i) => Math.min(filtered.length - 1, i + 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((i) => Math.max(0, i - 1));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (filtered[active]) choose(filtered[active]);
    } else if (e.key === "Escape") {
      // Close just the picker. preventDefault() is the signal the page's
      // Escape handler checks so it doesn't also close the whole modal.
      e.preventDefault();
      closePanel("button");
    } else if (e.key === "Tab") {
      setOpen(false);
    }
  }

  const trimmed = number.trim();

  return (
    <div className="cphone-wrap" ref={wrapRef}>
      <div className="cphone">
        <button
          type="button"
          className="cphone-btn"
          ref={buttonRef}
          aria-haspopup="listbox"
          aria-expanded={open}
          aria-label={`Country code: ${country.name} ${country.dial}`}
          onClick={() => (open ? closePanel(null) : openPanel())}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="cphone-flag" src={flagSrc(country.iso)} alt="" width={21} height={14} />
          <span className="cphone-dial">{country.dial}</span>
          <svg className="cphone-chev" viewBox="0 0 12 12" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 4.5 6 7.5 9 4.5" /></svg>
        </button>
        <input
          id={id}
          ref={numberRef}
          className="cphone-input"
          type="tel"
          autoComplete="tel-national"
          placeholder="Phone number"
          required
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
      </div>
      <input type="hidden" name="phone" value={trimmed ? `${country.dial} ${trimmed}` : ""} />
      <input type="hidden" name="country" value={country.name} />

      {open && (
        <div className={placement.up ? "cphone-panel up" : "cphone-panel"}>
          <input
            ref={searchRef}
            className="cphone-search"
            type="text"
            placeholder="Search country..."
            aria-label="Search country"
            role="combobox"
            aria-expanded="true"
            aria-controls={listId}
            aria-activedescendant={filtered[active] ? `${listId}-${filtered[active].iso}` : undefined}
            autoComplete="off"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setActive(0);
            }}
            onKeyDown={onSearchKeyDown}
          />
          <ul className="cphone-list" id={listId} role="listbox" aria-label="Countries" ref={listRef} style={{ maxHeight: placement.listMax }}>
            {filtered.length === 0 && <li className="cphone-empty">No countries found</li>}
            {filtered.map((c, i) => (
              <li
                key={c.iso}
                id={`${listId}-${c.iso}`}
                data-index={i}
                role="option"
                aria-selected={c.iso === iso}
                className={i === active ? "cphone-opt active" : "cphone-opt"}
                onMouseMove={() => setActive(i)}
                onClick={() => choose(c)}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className="cphone-flag" src={flagSrc(c.iso)} alt="" width={21} height={14} loading="lazy" />
                <span className="cphone-name">{c.name}</span>
                <span className="cphone-code">{c.dial}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
