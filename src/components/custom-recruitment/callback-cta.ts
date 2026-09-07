import type { MouseEvent } from "react";
import { sendGTMEvent } from "@next/third-parties/google";

/** Every "Request a Call" entry point (header, hero, mobile menu, mobile FAB,
 * final CTA) dispatches this instead of holding its own copy of the open/close
 * state — <CallbackModal> is the only thing that listens. */
export const OPEN_CALLBACK_MODAL_EVENT = "custom-recruitment:open-callback-modal";

/**
 * Shared click handler for every booking CTA on /custom-recruitment. Replaces
 * the previous Cal.com element-click embed: instead of data-cal-* attributes,
 * this fires the open event for <CallbackModal> and passes along which CTA was
 * clicked so the Web3Forms submission can record it.
 *
 * GTM itself is already loaded sitewide via <GoogleTagManager> in the root
 * layout — this only pushes the click event, it does not re-init GTM. The
 * event name (booking_cta_click) is unchanged from the Cal.com implementation
 * so existing GTM triggers keep working.
 */
export function handleCallbackClick(ctaName: string) {
  return (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    sendGTMEvent({ event: "booking_cta_click", cta_name: ctaName, page_path: "/custom-recruitment" });
    window.dispatchEvent(new CustomEvent(OPEN_CALLBACK_MODAL_EVENT, { detail: { ctaName } }));
  };
}
