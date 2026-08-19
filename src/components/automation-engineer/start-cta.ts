import type { MouseEvent } from "react";
import { sendGTMEvent } from "@next/third-parties/google";

/**
 * Shared handler for every "Start for $49" entry point on the
 * /automation-engineer landing page (nav, hero, mobile menu, sticky bar,
 * repeat CTA, footer). Mirrors the original static HTML's `.js-start`
 * inline script: smooth-scrolls to the form, focuses the name field, and
 * fires a cta_click event.
 *
 * GTM itself is already loaded once, sitewide, via <GoogleTagManager> in
 * the root layout — this only pushes the event, it does not re-init GTM.
 */
export function handleStartClick(e: MouseEvent<HTMLAnchorElement>) {
  e.preventDefault();
  document.getElementById("start")?.scrollIntoView({ behavior: "smooth" });
  sendGTMEvent({ event: "cta_click", location: "button", page_path: location.pathname });
  window.setTimeout(() => {
    document.getElementById("f-name")?.focus();
  }, 500);
}
