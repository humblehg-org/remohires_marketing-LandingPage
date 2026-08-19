"use client";

import { useEffect, useRef, type ReactNode, type Ref } from "react";

export function Reveal({
  as: Tag = "div",
  className,
  children,
  id,
}: {
  as?: "div" | "section";
  className?: string;
  children: ReactNode;
  id?: string;
}) {
  const ref = useRef<HTMLElement>(null);

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
    <Tag
      ref={ref as Ref<HTMLDivElement>}
      id={id}
      className={["rev", className].filter(Boolean).join(" ")}
    >
      {children}
    </Tag>
  );
}
