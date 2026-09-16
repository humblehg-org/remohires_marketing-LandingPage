import type { MouseEvent } from "react";
import { sendGTMEvent } from "@next/third-parties/google";

/** Every "Book A Free Call" entry point (nav, hero, mid-page, final CTA, mobile
 * FAB) dispatches this instead of holding its own copy of the open/close
 * state — <LeadModal> is the only thing that listens. Mirrors the
 * OPEN_CALLBACK_MODAL_EVENT pattern used on /virtual-assistant and
 * /appointment-setter. */
export const OPEN_LEAD_MODAL_EVENT = "customer-services:open-lead-modal";

/**
 * Shared click handler for every booking CTA on /customer-services. Replaces
 * the static HTML's `.openform` click listener (which called
 * `modal.classList.add('open')` directly): this fires the open event for
 * <LeadModal> and records which CTA was clicked, plus a GTM click event using
 * the same event name other landing pages already use so existing GTM
 * triggers keep working. GTM itself is already loaded sitewide via
 * <GoogleTagManager> in the root layout — this only pushes the click event.
 */
export function handleOpenLeadModal(ctaName: string) {
  return (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    sendGTMEvent({ event: "booking_cta_click", cta_name: ctaName, page_path: "/customer-services" });
    window.dispatchEvent(new CustomEvent(OPEN_LEAD_MODAL_EVENT, { detail: { ctaName } }));
  };
}
