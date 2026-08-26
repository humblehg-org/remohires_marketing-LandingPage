"use client";

import { useEffect, useRef, type ReactNode, type Ref } from "react";
import styles from "@/app/business-automation/page.module.css";

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
      el.classList.add(styles.revealIn);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.revealIn);
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
    <Tag
      ref={ref as Ref<HTMLDivElement>}
      id={id}
      className={[styles.reveal, className].filter(Boolean).join(" ")}
    >
      {children}
    </Tag>
  );
}
