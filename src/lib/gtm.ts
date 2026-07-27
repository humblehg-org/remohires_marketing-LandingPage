import { sendGTMEvent } from "@next/third-parties/google";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

export type SignupVariant = "A" | "B";

/**
 * Fires exactly once per successful signup. Callers must only invoke this
 * from a confirmed-success code path (never on validation errors, duplicate
 * emails, or failed submissions).
 *
 * Emits `signup_complete_A` / `signup_complete_B` — the exact Custom Event
 * names the GTM Google Ads conversion triggers listen for (see the
 * "Google Ads Conversion B" tag in GTM-K736CCFP). Do not rename without
 * updating the GTM triggers. Team B covers /teamb and /aitalent.
 */
export function trackSignupComplete(variant: SignupVariant, email: string) {
  sendGTMEvent({
    event: `signup_complete_${variant}`,
    email,
    page_path: location.pathname,
  });
}

/**
 * Fires the lead_submit dataLayer event and Meta Pixel Lead event for Team A
 * forms. Callers must only invoke this from a confirmed-success code path
 * (never on click or a failed submission). fbq is expected to already be
 * available globally via the GTM container, not loaded here.
 */
export function trackLeadSubmit(formSource: string) {
  window.dataLayer?.push({
    event: "lead_submit",
    page_path: location.pathname,
    form_source: formSource || "lp",
  });
  if (typeof window.fbq === "function") {
    window.fbq("track", "Lead");
  }
}
