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
 * updating the GTM triggers. Team B covers /ai-engineer and /ai-automation (previously
 * /aitalent, /ai-talent, /ai-talent2 — all retired).
 *
 * Also fires the Meta Pixel Lead event directly for Team B, instead of
 * relying on a GTM Custom Event trigger on signup_complete_B (that trigger
 * was unreliable — swap this for a GTM-side call only if that gets fixed).
 * fbq is expected to already be loaded globally by the GTM Meta Pixel base
 * tag, not loaded here.
 */
export function trackSignupComplete(variant: SignupVariant, email: string) {
  sendGTMEvent({
    event: `signup_complete_${variant}`,
    email,
    page_path: location.pathname,
  });

  if (variant === "B" && typeof window.fbq === "function") {
    window.fbq("set", "userData", { em: email });
    window.fbq("track", "Lead");
  }
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
