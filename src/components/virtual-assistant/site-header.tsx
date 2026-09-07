"use client";

import { useEffect, useState } from "react";
import { BookCta } from "./book-cta";
import { IconMenu, IconX } from "./icons";
import { Logo } from "./logo";

const NAV_LINKS = [
  { href: "#who-its-for", label: "Who It's For" },
  { href: "#services", label: "Services" },
  { href: "#how-it-works", label: "How It Works" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`nav${scrolled ? " scrolled" : ""}`} id="site-header">
      <div className="wrap nav-row">
        <a href="#top" aria-label="RemoHires - home">
          <Logo className="logo-img" />
        </a>
        <nav className="nav-links" aria-label="Primary">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
          <BookCta ctaName="header" className="btn primary cta js-book-cta">
           Book Your Discovery Call
          </BookCta>
        </nav>
        <button
          type="button"
          id="mobile-menu-btn"
          className="mobile-menu-btn"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? <IconX /> : <IconMenu />}
        </button>
      </div>
      <div className={`mobile-menu${menuOpen ? " open" : ""}`} id="mobile-menu">
        {NAV_LINKS.map((l) => (
          <a key={l.href} href={l.href} onClick={closeMenu}>
            {l.label}
          </a>
        ))}
        <BookCta
          ctaName="mobile-menu"
          className="btn primary js-book-cta"
          style={{ margin: "14px 24px", width: "calc(100% - 48px)" }}
        >
          Book Your Discovery Call
        </BookCta>
      </div>
    </header>
  );
}
