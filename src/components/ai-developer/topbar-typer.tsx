"use client";

import { useEffect, useRef } from "react";

export function TopbarTyper({ text }: { text: string }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    let i = 0;
    el.textContent = "";

    function typeNext() {
      if (!el) return;
      el.textContent = text.slice(0, i);
      if (i < text.length) {
        i++;
        setTimeout(typeNext, 28);
      }
    }

    typeNext();
  }, [text]);

  return (
    <span className="topbar-text" ref={ref} suppressHydrationWarning>
      {text}
    </span>
  );
}
