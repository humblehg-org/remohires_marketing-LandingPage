"use client";

import { useEffect, useState } from "react";

const MESSAGES = [
  "Stop doing insurance paperwork by hand.",
  "Automate the busywork. Keep your team focused on clients.",
  "We'll show you exactly what's worth automating first.",
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
