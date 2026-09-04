"use client";

import { useEffect, useState } from "react";
import { BookCta } from "./book-cta";

/**
 * Mobile-only floating "Talk to Our Team" button (hidden on desktop via CSS —
 * see .mobile-book-fab in virtual-assistant.css). Visible once the hero's own CTA
 * (#hero-cta) has scrolled out of view, hidden again once the final CTA section
 * (#final-cta) comes into view, so it never duplicates a CTA already on screen.
 */
export function MobileBookFab() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const heroCta = document.getElementById("hero-cta");
    const finalCta = document.getElementById("final-cta");
    if (!heroCta || !finalCta || !("IntersectionObserver" in window)) return;

    let heroCtaVisible = true;
    let finalCtaVisible = false;

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.target === heroCta) heroCtaVisible = entry.isIntersecting;
          if (entry.target === finalCta) finalCtaVisible = entry.isIntersecting;
        }
        setVisible(!heroCtaVisible && !finalCtaVisible);
      },
      { threshold: 0 },
    );
    io.observe(heroCta);
    io.observe(finalCta);
    return () => io.disconnect();
  }, []);

  return (
    <div className={`mobile-book-fab${visible ? " show" : ""}`}>
      <BookCta ctaName="mobile-fab" className="btn primary bookbtn block js-book-cta">
        Book Your Discovery Call
      </BookCta>
    </div>
  );
}
