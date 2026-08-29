"use client";

import { useEffect, useRef, useState } from "react";

const COUNTER_PATTERN = /^([^0-9]*)([0-9]+(?:\.[0-9]+)?)([^0-9]*)$/;

/**
 * Animated stat value, ported from the source's `[data-counter]` IntersectionObserver
 * script. Only values matching a single leading/trailing non-numeric run around one
 * number actually animate (e.g. "0%", "1") — values like "5-10" or "Free" don't match
 * the pattern and fall back to rendering as static text immediately, exactly like the
 * original.
 */
export function StatCounter({ value }: { value: string }) {
  const [display, setDisplay] = useState(value);
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // `display` is already initialized to `value` above, so a non-matching value or a
    // missing IntersectionObserver just means: render the static value and stop here.
    const match = value.match(COUNTER_PATTERN);
    if (!match || !("IntersectionObserver" in window)) return;

    const prefix = match[1] || "";
    const numStr = match[2];
    const suffix = match[3] || "";
    const numeric = parseFloat(numStr);
    const isInt = Number.isInteger(numeric);
    const duration = 1200;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const start = performance.now();
          const tick = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = numeric * eased;
            setDisplay(prefix + (isInt ? Math.round(current).toString() : current.toFixed(1)) + suffix);
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          io.unobserve(entry.target);
        });
      },
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [value]);

  return (
    <p className="stat-value" ref={ref}>
      {display}
    </p>
  );
}
