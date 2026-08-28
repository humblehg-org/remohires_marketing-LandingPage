"use client";

import { useEffect, useRef, type ReactNode } from "react";

export function Reveal({
  className,
  style,
  children,
  ...rest
}: {
  className?: string;
  style?: React.CSSProperties;
  children: ReactNode;
} & React.HTMLAttributes<HTMLDivElement>) {
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
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const classes = ["reveal", className].filter(Boolean).join(" ");

  return (
    <div ref={ref} className={classes} style={style} {...rest}>
      {children}
    </div>
  );
}
