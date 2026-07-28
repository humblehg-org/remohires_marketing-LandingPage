import posthog from "posthog-js";

export type SignupTeam = "A" | "B";

/**
 * Resolves the anonymous PostHog visitor to the lead who just signed up
 * (merging their pre-signup pageview history into the identified person)
 * and records the signup event. Callers must only invoke this from a
 * confirmed-success code path, mirroring trackSignupComplete in ./gtm.
 */
export function identifySignup(
  team: SignupTeam,
  email: string,
  personProps: { name?: string; industry?: string } = {},
  eventProps: Record<string, string | undefined> = {},
) {
  try {
    const id = email.trim().toLowerCase();
    if (!id) return;
    posthog.identify(id, { email: id, ...personProps });
    posthog.capture("signup_submitted", {
      team,
      page_path: location.pathname,
      ...personProps,
      ...eventProps,
    });
  } catch {
    // Analytics must never break the signup flow.
  }
}
