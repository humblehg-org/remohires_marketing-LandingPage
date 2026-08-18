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

export function MatchForm({ subject }: { subject: string }) {
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
            { form_source: subject },
          );
        }
        router.push("/automation-engineer/thank-you");
        return;
      } else {
        throw new Error((data && data.message) || "Submission failed");
      }
    } catch {
      setError(
        "Something went wrong. Please email info@remohires.com and we’ll get right back to you.",
      );
    } finally {
      setSending(false);
    }
  }

  return (
    <div className="formcard">
      <form noValidate onSubmit={handleSubmit}>
        <input type="hidden" name="access_key" value={ACCESS_KEY} />
        <input type="hidden" name="subject" value={subject} />
        <input type="hidden" name="from_name" value="RemoHires Landing - Automation Engineer" />
        <input
          type="checkbox"
          name="botcheck"
          tabIndex={-1}
          style={{ display: "none" }}
          aria-hidden="true"
        />
        <div className="badge">
          <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="#22e6cb" strokeWidth={2}>
            <path d="M5 3l1.5 3L10 7 6.5 8.5 5 12 3.5 8.5 0 7l3.5-1zM18 9l1 2 2 1-2 1-1 2-1-2-2-1 2-1z" />
          </svg>{" "}
          Get matched free
        </div>
        <h3>Find your automation expert</h3>
        <p className="hint">
          Book a free fit call and we&rsquo;ll follow up to scope the workflows worth handing
          off.
        </p>

        <div className="field">
          <label htmlFor={`${idPrefix}-name`}>Name</label>
          <input
            id={`${idPrefix}-name`}
            name="name"
            type="text"
            placeholder="Your name"
            required
            suppressHydrationWarning
          />
        </div>
        <div className="field">
          <label htmlFor={`${idPrefix}-email`}>Work email</label>
          <input
            id={`${idPrefix}-email`}
            name="email"
            type="email"
            placeholder="you@company.com"
            required
            suppressHydrationWarning
          />
        </div>
        <div className="field">
          <label htmlFor={`${idPrefix}-phone`}>Phone</label>
          <input
            id={`${idPrefix}-phone`}
            name="phone"
            type="tel"
            placeholder="+1 555 000 0000"
            required
            suppressHydrationWarning
          />
        </div>
        <div className="field">
          <label htmlFor={`${idPrefix}-industry`}>Industry</label>
          <select
            id={`${idPrefix}-industry`}
            name="industry"
            required
            defaultValue=""
            suppressHydrationWarning
          >
            <option value="" disabled>
              Select your industry
            </option>
            {INDUSTRIES.map((industry) => (
              <option key={industry}>{industry}</option>
            ))}
          </select>
        </div>
        <div className="field">
          <label htmlFor={`${idPrefix}-message`}>What would you want automated first?</label>
          <input
            id={`${idPrefix}-message`}
            name="message"
            type="text"
            placeholder="e.g. invoicing, CRM updates, lead routing, reporting"
            required
            suppressHydrationWarning
          />
        </div>
        <div className="field">
          <label htmlFor={`${idPrefix}-heard`}>How did you hear about us?</label>
          <select
            id={`${idPrefix}-heard`}
            name="heard_about"
            required
            defaultValue=""
            suppressHydrationWarning
          >
            <option value="" disabled>
              Select an option...
            </option>
            {HEARD_ABOUT_OPTIONS.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </div>

        <button type="submit" className="btn btn-primary" disabled={sending}>
          {sending ? (
            "Sending…"
          ) : (
            <>
              Book your free fit call <span className="arw">→</span>
            </>
          )}
        </button>
        <div className="reassure">
          <svg fill="none" viewBox="0 0 24 24" strokeWidth={2}>
            <path d="M12 3l8 3v6c0 5-3.5 7.5-8 9-4.5-1.5-8-4-8-9V6z" />
          </svg>{" "}
          Free to start — we&rsquo;ll follow up to scope your needs.
        </div>
        {error && (
          <div className="err show" role="status" aria-live="polite">
            {error}
          </div>
        )}
      </form>
    </div>
  );
}
