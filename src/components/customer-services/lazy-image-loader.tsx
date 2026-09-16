"use client";

import { useEffect } from "react";

/**
 * Ports the optimized static HTML's lazy-image script: every `<img
 * class="lazyimg">` shows a skeleton-shimmer placeholder (see .lazyimg CSS)
 * until it finishes loading, then gets `.loaded` added to fade the real
 * image in and stop the shimmer. Renders nothing — mount once near the page
 * root.
 */
export function LazyImageLoader() {
  useEffect(() => {
    const images = document.querySelectorAll<HTMLImageElement>(".rh img.lazyimg");

    function markLoaded(this: HTMLImageElement) {
      this.classList.add("loaded");
    }

    images.forEach((img) => {
      if (img.complete && img.naturalWidth) {
        img.classList.add("loaded");
        return;
      }
      img.addEventListener("load", markLoaded);
      img.addEventListener("error", markLoaded);
    });

    return () => {
      images.forEach((img) => {
        img.removeEventListener("load", markLoaded);
        img.removeEventListener("error", markLoaded);
      });
    };
  }, []);

  return null;
}
