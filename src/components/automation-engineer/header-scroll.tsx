"use client";

import { useEffect } from "react";

export function HeaderScroll() {
  useEffect(() => {
    const hdr = document.getElementById("hdr");
    if (!hdr) return;

    function onScroll() {
      hdr!.classList.toggle("scrolled", window.scrollY > 20);
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return null;
}
