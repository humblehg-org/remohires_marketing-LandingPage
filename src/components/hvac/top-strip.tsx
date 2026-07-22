"use client";

import { useEffect, useState } from "react";

const WORDS = ["HVAC", "Plumbing", "Electrical", "Roofing", "Remodeling"];

export function TopStrip() {
  const [word, setWord] = useState(WORDS[0]);

  useEffect(() => {
    const pinned = new URLSearchParams(window.location.search).get("vertical");
    if (pinned) {
      const id = setTimeout(() => setWord(pinned), 0);
      return () => clearTimeout(id);
    }
    const reduce = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduce) return;
    let i = 0;
    const id = setInterval(() => {
      i = (i + 1) % WORDS.length;
      setWord(WORDS[i]);
    }, 2600);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="topstrip">
      Built for <span className="rot">{word}</span> owners across the US
    </div>
  );
}
