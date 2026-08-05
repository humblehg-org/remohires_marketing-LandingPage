"use client";

import { useEffect, useRef, type ReactNode } from "react";

export function Reveal({
  direction,
  className,
  style,
  delay,
  children,
}: {
  direction?: "l" | "r";
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
  children: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) {
      el.classList.add("in");
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const classes = ["reveal", direction, className].filter(Boolean).join(" ");
  const combinedStyle =
    delay !== undefined ? { ...style, transitionDelay: `${delay}s` } : style;

  return (
    <div ref={ref} className={classes} style={combinedStyle}>
      {children}
    </div>
  );
}
