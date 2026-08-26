"use client";

import { useEffect } from "react";
import styles from "@/app/business-automation/page.module.css";

const SECTION_IDS = ["how-it-works", "what-it-costs"];

/** Highlights the matching desktop nav link while its section is in view. */
export function NavActive() {
  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;

    const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => el !== null,
    );
    if (sections.length === 0) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          document.querySelectorAll<HTMLAnchorElement>("[data-nav-link]").forEach((link) => {
            link.classList.toggle(
              styles.navLinkActive,
              link.dataset.navLink === entry.target.id,
            );
          });
        });
      },
      { rootMargin: "-20% 0px -60% 0px" },
    );

    sections.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return null;
}
