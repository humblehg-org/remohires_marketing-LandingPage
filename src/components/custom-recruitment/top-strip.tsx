"use client";

import { useEffect, useState } from "react";

const MESSAGES = [
  "Stop paying recruiter fees. Get your next hire for free.",
  "5-10 business days to your first screened shortlist.",
  "No fee to start. Free replacement if the fit is wrong.",
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
