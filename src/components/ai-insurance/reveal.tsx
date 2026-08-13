"use client";

import { useEffect, useRef, type ReactNode } from "react";

export function Reveal({
  index = 0,
  className,
  style,
  children,
}: {
  index?: number;
  className?: string;
  style?: React.CSSProperties;
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
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={["rev", className].filter(Boolean).join(" ")}
      style={{ ...style, transitionDelay: `${(index % 4) * 70}ms` }}
    >
      {children}
    </div>
  );
}
