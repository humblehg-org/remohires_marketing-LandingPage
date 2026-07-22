"use client";

import { useEffect, useState } from "react";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      const y = window.pageYOffset || document.documentElement.scrollTop || 0;
      setScrolled(y > 8);
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
          <a href="#start" className="btn primary cta">
            Get Started
          </a>
        </nav>
      </div>
    </header>
  );
}
