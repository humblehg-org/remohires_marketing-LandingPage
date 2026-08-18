"use client";

import { useState } from "react";

export function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="q" data-open={open}>
      <button type="button" aria-expanded={open} onClick={() => setOpen((v) => !v)}>
        {q}
      </button>
      <div className="a">
        <div className="a-inner">
          <p>{a}</p>
        </div>
      </div>
    </div>
  );
}
