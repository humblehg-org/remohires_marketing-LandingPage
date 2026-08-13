"use client";

import { useEffect, useRef, type ElementType, type ReactNode } from "react";

/**
 * Adds `.in-view` to the element once it enters the viewport, then stops
 * observing. Used directly by leaf elements; the <Reveal> wrapper below
 * uses it for elements rendered from a server component (page.tsx), where
 * hooks can't be called directly.
 */
export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (!("IntersectionObserver" in window)) {
      el.classList.add("in-view");
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return ref;
}

/**
 * Renders as the given tag (default div) with a ref wired to useReveal, so
 * it can drop into markup as a plain replacement for that element — no
 * extra wrapper node, no layout impact. Pass any of the reveal-* / stagger
 * classes via className.
 */
export function Reveal({
  as: Tag = "div",
  className,
  children,
  ...rest
}: {
  as?: ElementType;
  className?: string;
  children?: ReactNode;
} & Record<string, unknown>) {
  const ref = useReveal<HTMLElement>();

  return (
    <Tag ref={ref} className={className} {...rest}>
      {children}
    </Tag>
  );
}
