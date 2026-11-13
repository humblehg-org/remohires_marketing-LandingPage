"use client";

import { useEffect, useRef, useState, type MouseEvent } from "react";

type TocItem = { id: string; title: string };

const GAP_BELOW_NAV = 24;
const MIN_MS = 450;
const MAX_MS = 750;

const easeInOutCubic = (t: number) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

function navHeight() {
  return document.querySelector(".rh-lp > header")?.getBoundingClientRect().height ?? 0;
}

/* Page Y that puts the section's heading GAP_BELOW_NAV px below the sticky navbar. */
function targetY(id: string) {
  const section = document.getElementById(id);
  if (!section) return null;
  const heading = section.querySelector("h2") ?? section;
  const y = heading.getBoundingClientRect().top + window.scrollY - navHeight() - GAP_BELOW_NAV;
  const maxY = document.documentElement.scrollHeight - window.innerHeight;
  return Math.max(0, Math.min(y, maxY));
}

/* "In this page" list for the legal pages: animated scroll to a section and
   highlighting of the section currently in view. */
export function LegalToc({ items }: { items: TocItem[] }) {
  const [active, setActive] = useState(items[0]?.id ?? "");
  const animating = useRef(false);
  const locked = useRef(false);
  const frame = useRef(0);

  // Active section: the first section (in page order) inside a band that
  // starts just under the navbar and covers the upper part of the viewport.
  useEffect(() => {
    const visible = new Set<string>();
    const top = Math.round(navHeight() + GAP_BELOW_NAV + 1);
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) visible.add(e.target.id);
          else visible.delete(e.target.id);
        }
        if (locked.current) return;
        const inView = items.filter((it) => visible.has(it.id));
        if (!inView.length) return;
        // At the very bottom the last sections can't reach the top band, so
        // the last one in view wins there.
        const atBottom =
          window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2;
        setActive((atBottom ? inView[inView.length - 1] : inView[0]).id);
      },
      { rootMargin: `-${top}px 0px -55% 0px`, threshold: 0 },
    );
    for (const it of items) {
      const el = document.getElementById(it.id);
      if (el) io.observe(el);
    }
    return () => io.disconnect();
  }, [items]);

  // After a click (or a deep link) the chosen item stays highlighted until the
  // visitor scrolls by hand, even if the page can't bring that section to the top.
  useEffect(() => {
    const unlock = () => {
      if (!animating.current) locked.current = false;
    };
    const opts = { passive: true } as const;
    window.addEventListener("wheel", unlock, opts);
    window.addEventListener("touchstart", unlock, opts);
    window.addEventListener("keydown", unlock);
    window.addEventListener("pointerdown", unlock, opts);
    return () => {
      window.removeEventListener("wheel", unlock);
      window.removeEventListener("touchstart", unlock);
      window.removeEventListener("keydown", unlock);
      window.removeEventListener("pointerdown", unlock);
    };
  }, []);

  // Arriving with a hash: line the heading up with the same offset as a click.
  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1));
    if (!id || !items.some((it) => it.id === id)) return;
    const y = targetY(id);
    if (y !== null) window.scrollTo({ top: y, behavior: "instant" });
    locked.current = true;
    setActive(id);
  }, [items]);

  useEffect(() => () => cancelAnimationFrame(frame.current), []);

  function onClick(e: MouseEvent<HTMLAnchorElement>, id: string) {
    if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    const to = targetY(id);
    if (to === null) return;
    e.preventDefault();
    cancelAnimationFrame(frame.current);
    locked.current = true;
    setActive(id);

    const done = () => {
      animating.current = false;
      window.removeEventListener("wheel", stop);
      window.removeEventListener("touchstart", stop);
      history.replaceState(history.state, "", `#${id}`);
    };
    // The visitor scrolling by hand takes over from the animation.
    const stop = () => {
      cancelAnimationFrame(frame.current);
      done();
      locked.current = false;
    };

    const from = window.scrollY;
    const distance = to - from;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || Math.abs(distance) < 1) {
      window.scrollTo({ top: to, behavior: "instant" });
      done();
      return;
    }

    const duration = Math.min(MAX_MS, MIN_MS + Math.abs(distance) / 10);
    const start = performance.now();
    animating.current = true;
    window.addEventListener("wheel", stop, { passive: true });
    window.addEventListener("touchstart", stop, { passive: true });

    const step = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      window.scrollTo({ top: from + distance * easeInOutCubic(t), behavior: "instant" });
      if (t < 1) frame.current = requestAnimationFrame(step);
      else done();
    };
    frame.current = requestAnimationFrame(step);
  }

  return (
    <aside className="legal-toc" aria-label="In this page">
      <p className="legal-toc-label">In this page</p>
      <ol>
        {items.map((s, i) => (
          <li key={s.id}>
            <a
              href={`#${s.id}`}
              className={active === s.id ? "is-active" : undefined}
              aria-current={active === s.id ? "location" : undefined}
              onClick={(e) => onClick(e, s.id)}
            >
              <span className="legal-num">{i + 1}</span>
              <span>{s.title}</span>
            </a>
          </li>
        ))}
      </ol>
    </aside>
  );
}
