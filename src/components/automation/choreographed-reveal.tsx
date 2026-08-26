"use client";

import { useEffect, useRef, type ReactNode } from "react";

/**
 * Generic multi-child staged-reveal wrapper. Ports the repeated
 * `.js-*-anim` pattern from the source (add "ready" on mount, flip to
 * "visible" on intersection, with a 3s fallback so content never stays
 * hidden if the observer never fires). Mutates `data-anim-state` directly
 * on the DOM node (no React state) so there's nothing to synchronize
 * during the mount effect. The actual per-section keyframes, delays, and
 * child selectors live in page.module.css, keyed off that attribute.
 */
export function ChoreographedReveal({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.dataset.animState = "ready";

    if (!("IntersectionObserver" in window)) {
      el.dataset.animState = "visible";
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.dataset.animState = "visible";
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 },
    );
    io.observe(el);

    const fallback = window.setTimeout(() => {
      el.dataset.animState = "visible";
    }, 3000);

    return () => {
      io.disconnect();
      window.clearTimeout(fallback);
    };
  }, []);

  return (
    <div ref={ref} className={className} data-anim-state="idle">
      {children}
    </div>
  );
}
