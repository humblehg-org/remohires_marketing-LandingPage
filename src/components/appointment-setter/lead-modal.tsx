"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { OPEN_LEAD_MODAL_EVENT } from "./lead-cta";
import { trackLeadSubmit } from "@/lib/gtm";

const ACCESS_KEY = "8326652c-ecb6-4130-8f8b-5a477deaae3d";
const PAGE_PATH = "/appointment-setter";

/**
 * Replaces the static HTML's #leadmodal + rhLead() handler, which only faked
 * a local success message and never actually sent the lead anywhere. Same
 * fields, copy, and "Call me within 15 minutes" toggle as the source HTML,
 * now posted to Web3Forms. Renders nothing until a LeadCta dispatches
 * OPEN_LEAD_MODAL_EVENT — mount once near the page root.
 */
export function LeadModal() {
  const [open, setOpen] = useState(false);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [callNow, setCallNow] = useState(true);
  const [ctaSource, setCtaSource] = useState("cta");
  const formRef = useRef<HTMLFormElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onOpen(e: Event) {
      const detail = (e as CustomEvent<{ ctaName?: string }>).detail;
      setCtaSource(detail?.ctaName ?? "cta");
      setError(null);
      setSuccessMessage(null);
      setCallNow(true);
      setOpen(true);
    }
    window.addEventListener(OPEN_LEAD_MODAL_EVENT, onOpen);
    return () => window.removeEventListener(OPEN_LEAD_MODAL_EVENT, onOpen);
  }, []);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKeyDown);

    const focusTimer = window.setTimeout(() => {
      panelRef.current?.querySelector<HTMLInputElement>('input[name="fullname"]')?.focus();
    }, 60);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
      window.clearTimeout(focusTimer);
    };
  }, [open]);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (pending) return;
    const form = e.currentTarget;

    // Mirrors the static HTML's rhLead() validation exactly: name required,
    // phone must have at least 7 digits. Silently refocuses the offending
    // field instead of showing an error, same as the source.
    const nameField = form.elements.namedItem("fullname") as HTMLInputElement;
    const phoneField = form.elements.namedItem("phone") as HTMLInputElement;
    const name = nameField.value.trim();
    const phone = phoneField.value.trim();
    if (!name) {
      nameField.focus();
      return;
    }
    if (phone.replace(/[^0-9]/g, "").length < 7) {
      phoneField.focus();
      return;
    }

    setPending(true);
    setError(null);
    try {
      const formData = new FormData(form);
      formData.set("call_preference", callNow ? "Within 15 minutes" : "No rush");
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });
      const data = await res.json();
      if (data && data.success) {
        trackLeadSubmit(ctaSource);
        const first = name.split(" ")[0];
        setSuccessMessage(
          callNow
            ? `Thanks, ${first}. A RemoHires specialist will call you within 15 minutes during business hours.`
            : `Thanks, ${first}. A RemoHires specialist will call you shortly to start the search.`,
        );
      } else {
        throw new Error((data && data.message) || "Submission failed");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setPending(false);
    }
  }

  if (!open) return null;

  return (
    <div className="modal open" role="presentation">
      <div className="scrim" onClick={() => setOpen(false)} />
      <div className="box" ref={panelRef} role="dialog" aria-modal="true" aria-labelledby="lm-title">
        <button className="x" type="button" aria-label="Close" onClick={() => setOpen(false)}>
          &times;
        </button>

        {successMessage ? (
          <div className="lf-done" style={{ display: "block" }}>
            <div className="ck">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3}>
                <path d="M20 6 9 17l-5-5" />
              </svg>
            </div>
            <div className="dt">You Are On The List</div>
            <div className="lf-done-msg">{successMessage}</div>
          </div>
        ) : (
          <form ref={formRef} noValidate onSubmit={handleSubmit}>
            <input type="hidden" name="access_key" value={ACCESS_KEY} />
            <input type="hidden" name="subject" value="New appointment setter lead — RemoHires" />
            <input type="hidden" name="from_name" value="RemoHires Landing Page" />
            <input type="checkbox" name="botcheck" tabIndex={-1} style={{ display: "none" }} aria-hidden="true" />
            <input type="hidden" name="page" value={PAGE_PATH} />
            <input type="hidden" name="cta_source" value={ctaSource} />

            <div className="lf-eyebrow">Free Consultation, No Obligation</div>
            <h4 id="lm-title">Get Someone On Your Leads</h4>
            <p className="lf-sub">Leave your number and here is exactly what happens next:</p>
            <ul className="whatnext">
              <li>A real RemoHires person calls you within 15 minutes, during business hours</li>
              <li>You map out your leads, hours, and the role together, at no cost</li>
              <li>You approve the person before anyone dials on your behalf</li>
            </ul>
            <div className="fields">
              <input type="text" name="fullname" placeholder="Your name" autoComplete="name" required disabled={pending} />
              <input type="tel" name="phone" placeholder="Mobile number" autoComplete="tel" required disabled={pending} />
              <input type="email" name="email" placeholder="Email (optional)" autoComplete="email" disabled={pending} />
            </div>
            <div className="contact-method-note">
              <svg className="cmn-icon" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <circle cx="10" cy="10" r="8.5" stroke="currentColor" strokeWidth="1.5" />
                <path d="M10 9v5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <circle cx="10" cy="6.5" r="1" fill="currentColor" />
              </svg>
              <span className="cmn-text">
                <span>US: phone call available</span>
                <span>UK &amp; Australia: WhatsApp or Telegram</span>
              </span>
            </div>
            <label className="toggle">
              <input type="checkbox" checked={callNow} onChange={(e) => setCallNow(e.target.checked)} disabled={pending} />
              <span>
                <span className="tl">Contact me within 15 minutes</span>
                <span className="ts">A real person, during business hours</span>
              </span>
            </label>
            <button className="btn" type="submit" disabled={pending}>
              {pending ? "Sending…" : "Book A Free Call"}
            </button>
            <p className="note">Free to start. You pay when you hire, and the hire is full time.</p>

            {error && (
              <p className="form-error" role="alert">
                {error}
              </p>
            )}
          </form>
        )}
      </div>
    </div>
  );
}
