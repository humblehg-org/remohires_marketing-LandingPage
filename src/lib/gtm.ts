import { sendGTMEvent } from "@next/third-parties/google";

export type SignupVariant = "A" | "B";

/**
 * Fires exactly once per successful signup. Callers must only invoke this
 * from a confirmed-success code path (never on validation errors, duplicate
 * emails, or failed submissions).
 */
export function trackSignupComplete(variant: SignupVariant, email: string) {
  sendGTMEvent({ event: `signup_complete_${variant}`, email });
}
