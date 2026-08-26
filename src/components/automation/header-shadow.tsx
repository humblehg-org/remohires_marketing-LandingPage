"use client";

import { useEffect } from "react";
import styles from "@/app/automation/page.module.css";

export function HeaderShadow() {
  useEffect(() => {
    const hdr = document.getElementById("automation-header");
    if (!hdr) return;

    function onScroll() {
      hdr!.classList.toggle(styles.headerShadow, window.scrollY > 20);
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return null;
}
