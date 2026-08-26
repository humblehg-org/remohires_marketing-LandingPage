"use client";

import { useEffect } from "react";

/** Ports the source's "Nav link active state" inline script: highlights
 * the `.js-nav-link` whose href matches whichever `section[id]` is
 * currently in view. Uses a `data-active` attribute (not a class) so this
 * generic component never needs the page's hashed CSS-module class names —
 * page.module.css keys off `[data-nav-link][data-active="true"]` instead. */
export function NavActive() {
  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;

    const sections = Array.from(document.querySelectorAll<HTMLElement>("section[id]"));
    if (sections.length === 0) return;

    const links = Array.from(document.querySelectorAll<HTMLAnchorElement>("[data-nav-link]"));

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          links.forEach((link) => {
            link.setAttribute(
              "data-active",
              link.getAttribute("href") === `#${entry.target.id}` ? "true" : "false",
            );
          });
        });
      },
      { rootMargin: "-20% 0px -60% 0px" },
    );

    sections.forEach((sec) => io.observe(sec));
    return () => io.disconnect();
  }, []);

  return null;
}
