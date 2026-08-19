"use client";

import { useState } from "react";
import { handleStartClick } from "./start-cta";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        className="mobile-btn"
        aria-label="Toggle menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="4" x2="20" y1="12" y2="12" />
          <line x1="4" x2="20" y1="6" y2="6" />
          <line x1="4" x2="20" y1="18" y2="18" />
        </svg>
      </button>

      <div className={`mobile-menu${open ? " open" : ""}`}>
        <div className="wrap">
          <a href="#how" onClick={() => setOpen(false)}>
            How it works
          </a>
          <a href="#why" onClick={() => setOpen(false)}>
            What it costs
          </a>
          <a
            href="#start"
            className="btn btn-primary"
            onClick={(e) => {
              setOpen(false);
              handleStartClick(e);
            }}
          >
            Start for $49
          </a>
        </div>
      </div>
    </>
  );
}
