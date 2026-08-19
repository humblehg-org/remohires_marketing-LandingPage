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

const HEARD_ABOUT_OPTIONS = [
  "Google search",
  "Google ad",
  "Facebook / Instagram",
  "LinkedIn",
  "Referral from a friend",
  "Other",
];

export function MatchForm() {
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
                Your Name
              </label>
            </div>
            <div className="fgroup">
              <input
                id={`${idPrefix}-phone`}
                type="tel"
                name="phone"
                className="finput"
                placeholder="+1 555 000 0000"
                required
                suppressHydrationWarning
              />
              <label htmlFor={`${idPrefix}-phone`} className="flabel">
                Phone Number
              </label>
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
              Work Email
            </label>
          </div>

          <div className="fgroup">
            <select
              id={`${idPrefix}-industry`}
              name="industry"
              className="fselect"
              required
              defaultValue=""
              suppressHydrationWarning
            >
              <option value="" disabled></option>
              {INDUSTRIES.map((industry) => (
                <option key={industry}>{industry}</option>
              ))}
            </select>
            <label htmlFor={`${idPrefix}-industry`} className="flabel">
              Industry
            </label>
          </div>

          <div className="fgroup">
            <input
              id={`${idPrefix}-message`}
              type="text"
              name="message"
              className="finput"
              placeholder="e.g. invoicing, lead routing"
              required
              suppressHydrationWarning
            />
            <label htmlFor={`${idPrefix}-message`} className="flabel">
              What do you want to automate first?
            </label>
          </div>

          <div className="fgroup">
            <select
              id={`${idPrefix}-heard`}
              name="heard_about"
              className="fselect"
              required
              defaultValue=""
              suppressHydrationWarning
            >
              <option value="" disabled></option>
              {HEARD_ABOUT_OPTIONS.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
            <label htmlFor={`${idPrefix}-heard`} className="flabel">
              How did you hear about us?
            </label>
          </div>

          <button type="submit" className="btn btn-primary form-submit" disabled={sending}>
            {sending ? "Sending…" : "Start My 14-Day Sprint for $49"}
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
