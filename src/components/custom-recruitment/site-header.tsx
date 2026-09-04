"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { BookCta } from "./book-cta";
import { IconMenu } from "./icons";
import { Logo } from "./logo";

const NAV_LINKS = [
  { href: "#why", label: "Why Us" },
  { href: "#how", label: "How It Works" },
  { href: "#roles", label: "Roles" },
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
    <header className={`header${scrolled ? " scrolled" : ""}`} id="site-header">
      <div className="container header-inner">
        <Link href="/" aria-label="RemoHires - home">
          <Logo className="logo-img" />
        </Link>
        <nav className="nav-links" aria-label="Primary">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
          <BookCta ctaName="header" className="btn btn-primary">
            Find My Next Hire
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
          <IconMenu />
        </button>
      </div>
      <div className={`mobile-menu${menuOpen ? " open" : ""}`} id="mobile-menu">
        {NAV_LINKS.map((l) => (
          <a key={l.href} href={l.href} onClick={closeMenu}>
            {l.label}
          </a>
        ))}
        <BookCta ctaName="mobile-menu" className="btn btn-primary">
          Find My Next Hire
        </BookCta>
      </div>
    </header>
  );
}
