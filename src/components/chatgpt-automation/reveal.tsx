"use client";

import { useEffect, useRef, type ReactNode, type Ref } from "react";

/** Ports the source's `.rev` whole-section fade/slide-up-on-scroll reveal.
 * Uses a `data-visible` attribute rather than a class so this generic
 * component never needs the page's hashed CSS-module class names. */
export function Reveal({
  as: Tag = "div",
  className,
  id,
  children,
}: {
  as?: "div" | "section";
  className?: string;
  id?: string;
  children: ReactNode;
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) {
      el.setAttribute("data-visible", "true");
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.setAttribute("data-visible", "true");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag ref={ref as Ref<HTMLDivElement>} id={id} className={className}>
      {children}
    </Tag>
  );
}
