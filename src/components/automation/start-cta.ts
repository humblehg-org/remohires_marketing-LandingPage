import type { MouseEvent } from "react";
import { sendGTMEvent } from "@next/third-parties/google";

/** Every "Start" entry point (nav, hero, mobile menu, sticky bar, repeat
 * CTA, footer) dispatches this instead of holding its own copy of the
 * open/close state — <StartModal> is the only thing that listens. */
export const OPEN_START_MODAL_EVENT = "automation:open-start-modal";

/**
 * Shared handler for every CTA on the /automation landing page. GTM itself
 * is already loaded once, sitewide, via <GoogleTagManager> in the root
 * layout — this only pushes the event, it does not re-init GTM.
 */
export function handleStartClick(e: MouseEvent<HTMLAnchorElement>) {
  e.preventDefault();
  sendGTMEvent({ event: "cta_click", location: "button", page_path: location.pathname });
  window.dispatchEvent(new Event(OPEN_START_MODAL_EVENT));
}
