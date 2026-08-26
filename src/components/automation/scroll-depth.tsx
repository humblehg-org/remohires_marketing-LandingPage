"use client";

import { useEffect } from "react";
import { sendGTMEvent } from "@next/third-parties/google";

const THRESHOLDS = [25, 50, 75, 100];

/** Ports the original inline scroll-depth tracking script. Renders nothing. */
export function ScrollDepth() {
  useEffect(() => {
    const fired = new Set<number>();

    function onScroll() {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      const pct = max > 0 ? (h.scrollTop / max) * 100 : 100;
      for (const mark of THRESHOLDS) {
        if (!fired.has(mark) && pct >= mark) {
          fired.add(mark);
          sendGTMEvent({ event: "scroll_depth", percent: mark, page_path: location.pathname });
        }
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return null;
}
