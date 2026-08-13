"use client";

import { useEffect, useRef, useState } from "react";

const TARGET = 12;

export function LossCounter() {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) {
      const raf = requestAnimationFrame(() => setValue(TARGET));
      return () => cancelAnimationFrame(raf);
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          io.unobserve(entry.target);
          const step = TARGET / 40;
          let cur = 0;
          const t = setInterval(() => {
            cur += step;
            if (cur >= TARGET) {
              cur = TARGET;
              clearInterval(t);
            }
            setValue(Math.round(cur));
          }, 30);
        });
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return <span ref={ref}>{value} hrs</span>;
}
