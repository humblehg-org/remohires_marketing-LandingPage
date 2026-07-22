"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export function TeamBNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 10);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={`nav-shell${scrolled ? " scrolled" : ""}`}>
      <nav>
        <Image
          src="/teamb-logo.png"
          alt="RemoHires"
          className="brand-logo"
          width={116}
          height={32}
          priority
        />
        <div className="nav-links">
          <a className="link" href="#build">What you can build</a>
          <a className="link" href="#cost">Cost</a>
          <a className="link" href="#paths">How it works</a>
          <a className="nav-cta" href="#signup-section">Get matched</a>
        </div>
      </nav>
    </div>
  );
}
