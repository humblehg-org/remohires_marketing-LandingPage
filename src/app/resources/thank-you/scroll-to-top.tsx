"use client";

import { useEffect } from "react";

/* The kit form redirects here with router.push. Next.js only scrolls to a new
   page when its top is out of view, and this page's wrapper is still partly
   in view after a phone-sized form submit, so it would open mid-page. */
export function ScrollToTop() {
  useEffect(() => {
    if (!location.hash) window.scrollTo(0, 0);
  }, []);
  return null;
}
