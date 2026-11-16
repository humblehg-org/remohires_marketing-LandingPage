import posthog from "posthog-js";
import { trackLeadSubmit } from "@/lib/gtm";

/* Lead-magnet signups (/resources pages). Every signup goes to two places at once:
   - Kit.com, through the PUBLIC form endpoint (the same one Kit's own embed code
     posts to). Only the public Form ID is needed. Never put a Kit API key or any
     other secret in this file: it ships to the browser.
   - Web3Forms, so the team still gets an email for every lead.

   One Form ID per lead magnet. Kit.com only receives the email address.
   While a Form ID below is empty, that lead magnet skips Kit.com and only
   sends to Web3Forms. */
export const KIT_FORM_ID_FRONT_OFFICE_KIT = "10198030";
// Fill these in once the Kit.com forms exist.
export const KIT_FORM_ID_READINESS_QUIZ = "";
export const KIT_FORM_ID_MISSED_CALL_CALCULATOR = "";

/* Web3Forms production key, same as /cleaning. */
const WEB3FORMS_ACCESS_KEY = "8326652c-ecb6-4130-8f8b-5a477deaae3d";
const WEB3FORMS_URL = "https://api.web3forms.com/submit";

function kitFormUrl(formId: string) {
  return `https://app.kit.com/forms/${encodeURIComponent(formId)}/subscriptions`;
}

export type LeadMagnetSubmission = {
  /** Public Kit.com Form ID, e.g. KIT_FORM_ID_FRONT_OFFICE_KIT. Empty = skip Kit.com. */
  kitFormId: string;
  /** Subject line of the Web3Forms team email. */
  subject: string;
  /** Hidden "source" field in the Web3Forms email, e.g. "cleaning-front-office-kit". */
  source: string;
  fullName: string;
  email: string;
  /** Phone with dial code, e.g. "+1 5551234567". */
  phone: string;
  country: string;
  /** Extra readable fields for the team email only (e.g. quiz answers). Not sent to Kit.com. */
  extra?: Record<string, string>;
};

async function sendToKit(s: LeadMagnetSubmission) {
  const body = new FormData();
  body.append("email_address", s.email);
  const res = await fetch(kitFormUrl(s.kitFormId), {
    method: "POST",
    body,
    headers: { Accept: "application/json" },
  });
  if (!res.ok) throw new Error(`Kit.com responded ${res.status}`);
  const json = await res.json().catch(() => null);
  if (json && typeof json.status === "string" && json.status !== "success") {
    throw new Error(`Kit.com status "${json.status}"`);
  }
}

async function sendToWeb3Forms(s: LeadMagnetSubmission) {
  const body = new FormData();
  body.append("access_key", WEB3FORMS_ACCESS_KEY);
  body.append("subject", s.subject);
  body.append("from_name", "RemoHires Cleaning Resources");
  body.append("source", s.source);
  body.append("fullname", s.fullName);
  body.append("email", s.email);
  body.append("phone", s.phone);
  body.append("country", s.country);
  for (const [k, v] of Object.entries(s.extra ?? {})) body.append(k, v);
  const res = await fetch(WEB3FORMS_URL, { method: "POST", body });
  const json = await res.json().catch(() => null);
  if (!res.ok || !json?.success) {
    throw new Error(`Web3Forms responded ${res.status}${json?.message ? `: ${json.message}` : ""}`);
  }
}

/**
 * Sends one lead-magnet signup to Kit.com and Web3Forms in parallel (Kit.com
 * is skipped while kitFormId is empty). Resolves true when at least one of
 * them accepted it (the caller then redirects to the thank-you page), false
 * only when every request failed. Each failure is logged as a console warning
 * so it can be debugged.
 */
export async function submitLeadMagnet(s: LeadMagnetSubmission): Promise<boolean> {
  const useKit = s.kitFormId.trim() !== "";
  const [kit, web3] = await Promise.allSettled([
    useKit ? sendToKit(s) : Promise.reject(new Error("skipped: no Kit.com Form ID")),
    sendToWeb3Forms(s),
  ]);
  if (useKit && kit.status === "rejected") {
    console.warn(`[lead-magnet] Kit.com submission failed (form ${s.kitFormId}, ${s.source}):`, kit.reason);
  }
  if (web3.status === "rejected") {
    console.warn(`[lead-magnet] Web3Forms submission failed (${s.source}):`, web3.reason);
  }
  return (useKit && kit.status === "fulfilled") || web3.status === "fulfilled";
}

/**
 * Fires the lead events for a successful lead-magnet signup, using the same
 * setup as /cleaning: the GTM lead_submit event (+ Meta Pixel Lead) with
 * form_source = eventBase, and a PostHog "<eventBase>_submitted" event.
 * Only call from a confirmed-success code path.
 */
export function trackLeadMagnetSubmit(eventBase: string) {
  trackLeadSubmit(eventBase);
  try {
    posthog.capture(`${eventBase}_submitted`, { form_source: eventBase });
  } catch {
    // Analytics must never break the signup flow.
  }
}
