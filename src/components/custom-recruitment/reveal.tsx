"use client";

import { useEffect, useRef, type ReactNode } from "react";

/**
 * One shared IntersectionObserver for every <Reveal> on the page, instead of
 * one per instance (this page mounts 10+ of them) — same trigger behavior,
 * far less client-side JS overhead. Both the "translate" and "scale" variants
 * use the same observer; the variant only changes which CSS class name is
 * used as the base, not the reveal trigger.
 */
let sharedObserver: IntersectionObserver | null = null;

function getSharedObserver(): IntersectionObserver | null {
  if (typeof IntersectionObserver === "undefined") return null;
  if (!sharedObserver) {
    sharedObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            sharedObserver?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 },
    );
  }
  return sharedObserver;
}

/**
 * Scroll-reveal wrapper. `variant="scale"` matches the source's separate
 * `.reveal-scale` class (fades in with a scale instead of a translateY).
 */
export function Reveal({
  variant = "translate",
  className,
  style,
  children,
  ...rest
}: {
  variant?: "translate" | "scale";
  className?: string;
  style?: React.CSSProperties;
  children: ReactNode;
} & React.HTMLAttributes<HTMLDivElement>) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = getSharedObserver();
    if (!observer) {
      el.classList.add("visible");
      return;
    }
    observer.observe(el);
    return () => observer.unobserve(el);
  }, []);

  const base = variant === "scale" ? "reveal-scale" : "reveal";
  const classes = [base, className].filter(Boolean).join(" ");

  return (
    <div ref={ref} className={classes} style={style} {...rest}>
      {children}
    </div>
  );
}
