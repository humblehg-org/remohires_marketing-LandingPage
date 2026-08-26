"use client";

import { useEffect, useRef, type ReactNode } from "react";

/**
 * Shared wrapper for the source's `.js-<name>-anim` choreographed,
 * multi-child, staged-entrance sections ("what are you still doing
 * manually", "business impact", "process/discovery" in this template).
 * Cycles `data-anim-state` idle → ready (on mount) → visible (on
 * intersection, same threshold/rootMargin/fallback-timeout as the
 * source), letting each section's own CSS in page.module.css key its
 * per-child keyframes/timings off `[data-anim-state="visible"] .child`.
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
    if (!el || !("IntersectionObserver" in window)) return;

    el.setAttribute("data-anim-state", "ready");

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.setAttribute("data-anim-state", "visible");
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 },
    );
    io.observe(el);

    const fallback = window.setTimeout(() => {
      if (el.getAttribute("data-anim-state") !== "visible") {
        el.setAttribute("data-anim-state", "visible");
      }
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
