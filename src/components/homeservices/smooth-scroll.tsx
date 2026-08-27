"use client";

import { useEffect } from "react";

/** Enables smooth scrolling for the in-page nav anchors (#why, #how,
 * #pricing) while this route is mounted, restoring the previous value on
 * unmount so other routes are unaffected. */
export function SmoothScroll() {
  useEffect(() => {
    const previous = document.documentElement.style.scrollBehavior;
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = previous;
    };
  }, []);

  return null;
}
