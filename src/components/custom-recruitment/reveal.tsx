"use client";

import { useEffect, useRef, type ReactNode } from "react";

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
    if (!("IntersectionObserver" in window)) {
      el.classList.add("visible");
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const base = variant === "scale" ? "reveal-scale" : "reveal";
  const classes = [base, className].filter(Boolean).join(" ");

  return (
    <div ref={ref} className={classes} style={style} {...rest}>
      {children}
    </div>
  );
}
