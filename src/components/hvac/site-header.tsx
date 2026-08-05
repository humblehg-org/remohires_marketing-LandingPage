"use client";

import { useEffect, useState } from "react";
import { IconMenu, IconXFilled } from "./icons";

const navLinks = [
  { href: "#pain", label: "The Problem" },
  { href: "#how", label: "How It Works" },
  { href: "#offer", label: "The Offer" },
  { href: "#faq", label: "FAQ" },
];

export function SiteHeader({ ctaLabel = "Get Started" }: { ctaLabel?: string }) {
  const [scrolled, setScrolled] = useState(false);
  const [showCta, setShowCta] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [fabVisible, setFabVisible] = useState(false);

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

  // FAB stays hidden over the Hero, appears once the user scrolls past it,
  // and tucks away again while the bottom "Get Started" section is in view.
  useEffect(() => {
    const hero = document.getElementById("hero");
    const book = document.getElementById("book");
    if (!hero || !book || !("IntersectionObserver" in window)) return;

    let heroVisible = true;
    let bookVisible = false;

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.target === hero) heroVisible = entry.isIntersecting;
          if (entry.target === book) bookVisible = entry.isIntersecting;
        }
        setFabVisible(!heroVisible && !bookVisible);
      },
      { threshold: 0 },
    );
    io.observe(hero);
    io.observe(book);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setMenuOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
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
          <button
            type="button"
            className="mobile-menu-btn"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <IconXFilled /> : <IconMenu />}
          </button>
        </div>
        <nav
          className={`mobile-menu${menuOpen ? " open" : ""}`}
          aria-label="Mobile"
        >
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={closeMenu}>
              {l.label}
            </a>
          ))}
        </nav>
      </header>
      {menuOpen && (
        <div
          className="mobile-menu-backdrop"
          aria-hidden="true"
          onClick={closeMenu}
        />
      )}
      <a
        href="#book"
        className={`mobile-fab btn primary${fabVisible ? " show" : ""}`}
        onClick={closeMenu}
      >
        {ctaLabel}
      </a>
    </>
  );
}
