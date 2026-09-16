"use client";

import { useEffect } from "react";

/**
 * Ports the static HTML's inline reveal-on-scroll <script> into a client
 * component: adds the `js` class to <html> (gates the `.anim`/`.rv`/`.stagger`
 * CSS so nothing is hidden for no-JS/pre-hydration users) and observes every
 * `.rv`/`.stagger` element, adding `in` once it scrolls into view. Renders
 * nothing — mount once near the page root, same pattern as on
 * /appointment-setter.
 */
export function ScrollReveal() {
  useEffect(() => {
    document.documentElement.classList.add("js");

    const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const revs = document.querySelectorAll<HTMLElement>(".rh .rv, .rh .stagger");

    if (!("IntersectionObserver" in window) || reduce) {
      revs.forEach((el) => el.classList.add("in"));
      return () => document.documentElement.classList.remove("js");
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
      { threshold: 0.16 },
    );
    revs.forEach((el) => io.observe(el));

    return () => {
      io.disconnect();
      document.documentElement.classList.remove("js");
    };
  }, []);

  return null;
}
