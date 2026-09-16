"use client";

import { useEffect, useRef, type ReactNode } from "react";

/**
 * One shared IntersectionObserver for every <Reveal> on the page, instead of
 * one per instance (this page mounts 10+ of them) — same trigger behavior,
 * far less client-side JS overhead.
 */
let sharedObserver: IntersectionObserver | null = null;

function getSharedObserver(): IntersectionObserver | null {
  if (typeof IntersectionObserver === "undefined") return null;
  if (!sharedObserver) {
    sharedObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            sharedObserver?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
    );
  }
  return sharedObserver;
}

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
    const observer = getSharedObserver();
    if (!observer) {
      el.classList.add("in");
      return;
    }
    observer.observe(el);
    return () => observer.unobserve(el);
  }, []);

  const classes = ["reveal", className].filter(Boolean).join(" ");

  return (
    <div ref={ref} className={classes} style={style} {...rest}>
      {children}
    </div>
  );
}
