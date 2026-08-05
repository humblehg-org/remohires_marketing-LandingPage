"use client";

import { useState } from "react";

export function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`faqitem${open ? " open" : ""}`}>
      <button
        type="button"
        className="faqitem-summary"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        {q}
        <span className="faqitem-icon" aria-hidden="true" />
      </button>
      <div className="faqitem-body">
        <div className="faqitem-inner">
          <p>{a}</p>
        </div>
      </div>
    </div>
  );
}
