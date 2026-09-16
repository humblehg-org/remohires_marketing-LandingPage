"use client";

import { useEffect } from "react";

/**
 * Classic loadCSS technique, ported from the optimized static HTML: the
 * Satoshi stylesheet <link> renders with `media="print"` so the browser
 * fetches it without blocking first paint, then this swaps it to
 * `media="all"` once loaded (or immediately if it's already cached/loaded by
 * the time this runs). The <noscript> fallback in page.tsx covers no-JS.
 * Renders nothing.
 */
export function FontLoader() {
  useEffect(() => {
    const link = document.querySelector<HTMLLinkElement>('link[data-font-swap="satoshi"]');
    if (!link || link.media === "all") return;
    if (link.sheet) {
      link.media = "all";
      return;
    }
    const onLoad = () => {
      link.media = "all";
    };
    link.addEventListener("load", onLoad);
    return () => link.removeEventListener("load", onLoad);
  }, []);

  return null;
}
