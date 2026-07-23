// Shared helper that sends landing-page form submissions to the marketing
// backend (https://frm-v1.remohires.com). Override the base URL per env with
// NEXT_PUBLIC_FORMS_API_URL.
const API_BASE =
  process.env.NEXT_PUBLIC_FORMS_API_URL ?? "https://frm-v1.remohires.com";

// Shared key sent with every submission. Set NEXT_PUBLIC_FORMS_API_KEY to the
// same value as API_KEY on the backend. Note: this is shipped to the browser,
// so it is a gate (paired with the Origin allowlist), not a true secret.
const API_KEY = process.env.NEXT_PUBLIC_FORMS_API_KEY ?? "";

// Note: /aitalent is not here — that page uses its own (web3forms) form.
export type LeadPath = "home" | "quotes" | "teamb";

export type LeadPayload = {
  path: LeadPath;
  email: string;
  name?: string;
  source?: string;
  qualifier?: string;
  industry?: string;
  message?: string;
  subject?: string;
};

export async function submitLead(payload: LeadPayload): Promise<void> {
  const res = await fetch(`${API_BASE}/api/submit`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...(API_KEY ? { "x-api-key": API_KEY } : {}),
    },
    body: JSON.stringify(payload),
  });
  const data = await res.json().catch(() => null);
  if (!res.ok || !data?.success) {
    throw new Error(data?.message || "Submission failed");
  }
}
