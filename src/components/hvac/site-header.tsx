"use client";

import { useEffect, useState } from "react";

export function SiteHeader({ ctaLabel = "Get Started" }: { ctaLabel?: string }) {
  const [scrolled, setScrolled] = useState(false);
  const [showCta, setShowCta] = useState(false);

  useEffect(() => {
    function onScroll() {
      const y = window.pageYOffset || document.documentElement.scrollTop || 0;
      setScrolled(y > 8);
      setShowCta(y > 600);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav${scrolled ? " scrolled" : ""}`}>
      <div className="wrap row">
        <a className="logo" href="#top" aria-label="RemoHires home" />
        <nav className="links" aria-label="Primary">
          <a href="#pain">The Problem</a>
          <a href="#how">How It Works</a>
          <a href="#offer">The Offer</a>
          <a href="#faq">FAQ</a>
          <span className={`cta-wrap${showCta ? " show" : ""}`}>
            <a href="#book" className="btn primary cta">
              {ctaLabel}
            </a>
          </span>
        </nav>
      </div>
    </header>
  );
}
