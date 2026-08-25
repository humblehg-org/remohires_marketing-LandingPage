"use client";

import { useId, useRef, useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { trackSignupComplete } from "@/lib/gtm";
import { identifySignup } from "@/lib/posthog";

const ACCESS_KEY = "3ed3305a-37b5-4075-8151-f2fb6b838b18";

const INDUSTRIES = [
  "Marketing / Creative Agency",
  "E-commerce & Retail",
  "Real Estate",
  "Construction & Trades",
  "Professional Services",
  "SaaS & Software",
  "Logistics & Supply Chain",
  "Healthcare & Clinics",
  "Other",
];

const COUNTRY_CODES = [
  { code: "+1", flag: "🇺🇸", label: "United States" },
  { code: "+1", flag: "🇨🇦", label: "Canada" },
  { code: "+44", flag: "🇬🇧", label: "United Kingdom" },
  { code: "+61", flag: "🇦🇺", label: "Australia" },
  { code: "+64", flag: "🇳🇿", label: "New Zealand" },
  { code: "+353", flag: "🇮🇪", label: "Ireland" },
  { code: "+65", flag: "🇸🇬", label: "Singapore" },
  { code: "+63", flag: "🇵🇭", label: "Philippines" },
  { code: "+62", flag: "🇮🇩", label: "Indonesia" },
  { code: "+91", flag: "🇮🇳", label: "India" },
  { code: "+49", flag: "🇩🇪", label: "Germany" },
  { code: "+33", flag: "🇫🇷", label: "France" },
];

/** Shrinks/colors the Industry field's floating label from JS. Its
 * `<select>` has no `required` attribute (it's optional), so it's always
 * `:valid` — the CSS-only trick the other fields use can't tell
 * "untouched" from "a real option chosen" without this. */
function toggleHasValue(target: HTMLSelectElement) {
  target.closest(".fgroup")?.classList.toggle("has-value", target.value.length > 0);
}

export function MatchForm({ onClose }: { onClose: () => void }) {
  const idPrefix = useId();
  const router = useRouter();
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const trackedRef = useRef(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    setSending(true);
    setError(null);
    try {
      const formData = new FormData(form);

      // Combine the country-code select + number input into one "phone"
      // value (e.g. "+1 5551234567") before it goes anywhere — Web3Forms,
      // tracking, and the notification email should all see a single,
      // already-formatted phone field, not two separate raw inputs.
      const countryCode = String(formData.get("phone_country_code") ?? "");
      const phoneNumber = String(formData.get("phone") ?? "").trim();
      formData.delete("phone_country_code");
      if (countryCode && phoneNumber) {
        formData.set("phone", `${countryCode} ${phoneNumber}`);
      }

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });
      const data = await res.json();
      if (data && data.success) {
        if (!trackedRef.current) {
          trackedRef.current = true;
          const email = String(formData.get("email") ?? "");
          window.dataLayer = window.dataLayer || [];
          window.dataLayer.push({ event: "lead_submit", form_location: "automation-engineer" });
          trackSignupComplete("B", email);
          identifySignup(
            "B",
            email,
            {
              name: String(formData.get("name") ?? "") || undefined,
              industry: String(formData.get("industry") ?? "") || undefined,
            },
            { form_source: "New RemoHires Lead" },
          );
        }
        router.push("/automation-engineer/thank-you");
        return;
      } else {
        throw new Error((data && data.message) || "Submission failed");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setSending(false);
    }
  }

  return (
    <div className="form-shell">
      <div className="form-card">
        <button type="button" className="modal-close" aria-label="Close" onClick={onClose}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
        <h2 className="modal-title">Start your 14-day sprint</h2>

        <form noValidate onSubmit={handleSubmit} className="form-grid">
          <input type="hidden" name="access_key" value={ACCESS_KEY} />
          <input type="hidden" name="subject" value="New RemoHires Lead" />
          <input type="hidden" name="from_name" value="RemoHires Landing Page" />
          <input
            type="checkbox"
            name="botcheck"
            tabIndex={-1}
            style={{ display: "none" }}
            aria-hidden="true"
          />

          <div className="form-row-2">
            <div className="fgroup">
              <input
                id={`${idPrefix}-name`}
                type="text"
                name="name"
                className="finput"
                placeholder="John Doe"
                required
                suppressHydrationWarning
              />
              <label htmlFor={`${idPrefix}-name`} className="flabel">
                Your Name *
              </label>
            </div>

            <div className="fgroup fgroup-phone">
              <div className="phone-inner">
                <select
                  name="phone_country_code"
                  className="phone-code"
                  defaultValue="+1"
                  aria-label="Country code"
                  suppressHydrationWarning
                >
                  {COUNTRY_CODES.map((c) => (
                    <option key={c.label} value={c.code}>
                      {c.flag} {c.code}
                    </option>
                  ))}
                </select>
                <span className="phone-divider" aria-hidden="true" />
                <label htmlFor={`${idPrefix}-phone`} className="sr-only">
                  Phone Number
                </label>
                <input
                  id={`${idPrefix}-phone`}
                  type="tel"
                  name="phone"
                  className="phone-number"
                  placeholder="Phone Number *"
                  required
                  suppressHydrationWarning
                />
              </div>
            </div>
          </div>

          <div className="fgroup">
            <input
              id={`${idPrefix}-email`}
              type="email"
              name="email"
              className="finput"
              placeholder="you@company.com"
              required
              suppressHydrationWarning
            />
            <label htmlFor={`${idPrefix}-email`} className="flabel">
              Work Email *
            </label>
          </div>

          <div className="fgroup">
            <select
              id={`${idPrefix}-industry`}
              name="industry"
              className="fselect"
              defaultValue=""
              onChange={(e) => toggleHasValue(e.currentTarget)}
              suppressHydrationWarning
            >
              <option value="" disabled></option>
              {INDUSTRIES.map((industry) => (
                <option key={industry}>{industry}</option>
              ))}
            </select>
            <label htmlFor={`${idPrefix}-industry`} className="flabel">
              Industry (Optional)
            </label>
          </div>

          <button type="submit" className="btn btn-primary form-submit" disabled={sending}>
            {sending ? "Sending…" : "Submit Request"}
          </button>
          <p
            className={`form-status${error ? " is-error" : ""}`}
            role="status"
            aria-live="polite"
          >
            {error ?? "🔒 No credit card required to start. We'll email you."}
          </p>
        </form>
      </div>
    </div>
  );
}
