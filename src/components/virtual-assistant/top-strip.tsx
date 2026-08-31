"use client";

import { useEffect, useState } from "react";

const MESSAGES = [
  "One dedicated assistant. Not a marketplace of freelancers.",
  "Works inside the tools you already use - no migration.",
  "Book a free 15-minute discovery call.",
];

export function TopStrip() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % MESSAGES.length);
    }, 4200);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="topstrip">
      <span className="rot" aria-live="polite">
        <span key={index}>{MESSAGES[index]}</span>
      </span>
    </div>
  );
}
