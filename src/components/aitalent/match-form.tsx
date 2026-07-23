"use client";

import { useId, useState, type FormEvent } from "react";

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

export function MatchForm({ subject }: { subject: string }) {
  const idPrefix = useId();
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

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
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      const data = await res.json();
      if (data && data.success) {
        setSent(true);
      } else {
        throw new Error((data && data.message) || "Submission failed");
      }
    } catch {
      setError(
        "Something went wrong. Please email resti@remohires.com and we’ll get right back to you.",
      );
    } finally {
      setSending(false);
    }
  }

  return (
    <div className={`formcard${sent ? " is-sent" : ""}`}>
      <form className="matchform form-body" noValidate onSubmit={handleSubmit}>
        <input type="hidden" name="access_key" value={ACCESS_KEY} />
        <input type="hidden" name="subject" value={subject} />
        <input type="hidden" name="from_name" value="RemoHires Landing Page" />
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
        <h3>Start with one hire</h3>
        <p className="hint">
          Tell us who you are and we&rsquo;ll follow up to scope your needs and find your
          match.
        </p>
        <div className="field">
          <label htmlFor={`${idPrefix}-name`}>Name</label>
          <input id={`${idPrefix}-name`} name="name" type="text" placeholder="Your name" required />
        </div>
        <div className="field">
          <label htmlFor={`${idPrefix}-email`}>Work email</label>
          <input
            id={`${idPrefix}-email`}
            name="email"
            type="email"
            placeholder="you@company.com"
            required
          />
        </div>
        <div className="field">
          <label htmlFor={`${idPrefix}-industry`}>Industry</label>
          <select id={`${idPrefix}-industry`} name="industry" required defaultValue="">
            <option value="" disabled>
              Select your industry
            </option>
            {INDUSTRIES.map((industry) => (
              <option key={industry}>{industry}</option>
            ))}
          </select>
        </div>
        <div className="field">
          <label htmlFor={`${idPrefix}-message`}>
            What do you need help with?{" "}
            <span style={{ color: "var(--muted)", fontWeight: 400 }}>(optional)</span>
          </label>
          <input
            id={`${idPrefix}-message`}
            name="message"
            type="text"
            placeholder="e.g. automate our client onboarding"
          />
        </div>
        <button type="submit" className="btn" disabled={sending}>
          {sending ? (
            "Sending…"
          ) : (
            <>
              Get matched — free{" "}
              <svg fill="none" viewBox="0 0 24 24" strokeWidth={2.2}>
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
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
          <div className="err" style={{ display: "block" }}>
            {error}
          </div>
        )}
      </form>
      <div className="success">
        <div className="ic">
          <svg fill="none" viewBox="0 0 24 24" strokeWidth={2.4}>
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </div>
        <h3>Got it.</h3>
        <p>Thanks — we&rsquo;ll reach out to book a quick discovery call and find your match.</p>
      </div>
    </div>
  );
}
