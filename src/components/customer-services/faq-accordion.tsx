"use client";

import { useEffect } from "react";

/**
 * Ports the static HTML's inline FAQ <script>: opening one `<details>` in
 * .faq closes any other one that was open, so only one answer shows at a
 * time. Native <details> has no built-in exclusivity, hence the listener.
 * Renders nothing — mount once near the page root.
 */
export function FaqAccordion() {
  useEffect(() => {
    const items = document.querySelectorAll<HTMLDetailsElement>(".rh .faq details");

    function onToggle(this: HTMLDetailsElement) {
      if (this.open) {
        items.forEach((other) => {
          if (other !== this) other.open = false;
        });
      }
    }

    items.forEach((d) => d.addEventListener("toggle", onToggle));
    return () => items.forEach((d) => d.removeEventListener("toggle", onToggle));
  }, []);

  return null;
}
