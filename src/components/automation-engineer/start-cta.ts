import type { MouseEvent } from "react";
import { sendGTMEvent } from "@next/third-parties/google";

/** Every "Start for $49" entry point (nav, hero, mobile menu, sticky bar,
 * repeat CTA, footer) dispatches this instead of holding its own copy of
 * the open/close state — <StartModal> is the only thing that listens. */
export const OPEN_START_MODAL_EVENT = "automation-engineer:open-start-modal";

/**
 * Shared handler for every "Start for $49" entry point on the
 * /automation-engineer landing page. Previously scrolled to an inline
 * #start section; the form now lives in a modal (see start-modal.tsx),
 * so this just fires the open event and the cta_click tracking.
 *
 * GTM itself is already loaded once, sitewide, via <GoogleTagManager> in
 * the root layout — this only pushes the event, it does not re-init GTM.
 */
export function handleStartClick(e: MouseEvent<HTMLAnchorElement>) {
  e.preventDefault();
  sendGTMEvent({ event: "cta_click", location: "button", page_path: location.pathname });
  window.dispatchEvent(new Event(OPEN_START_MODAL_EVENT));
}
