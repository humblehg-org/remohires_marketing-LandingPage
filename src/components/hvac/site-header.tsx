"use client";

import { useEffect, useState } from "react";
import { IconCalendarCheck } from "./icons";

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
          <a href="#pain">Where Money Leaks</a>
          <a href="#role">What You Get</a>
          <a href="#why">Why RemoHires</a>
          <a href="#faq">FAQ</a>
          <a href="#book" className="btn primary navcta">
            <span className="ic">
              <IconCalendarCheck />
            </span>
            Book a free call
          </a>
        </nav>
      </div>
    </header>
  );
}
