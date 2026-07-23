"use client";

import { useState, type FormEvent } from "react";
import { submitLead } from "@/lib/submit-lead";

export function LeadForm({ variant }: { variant: "hero" | "footer" }) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    setError(null);
    try {
      await submitLead({ path: "teamb", email, source: variant });
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again or email info@remohires.com.");
    } finally {
      setSending(false);
    }
  }

  return (
    <>
      {!submitted && (
        <form
          className={variant === "hero" ? "inline-signup" : "signup-form centered"}
          onSubmit={handleSubmit}
        >
          <input
            type="email"
            placeholder="you@company.com"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit" className="btn-primary" disabled={sending}>
            {sending ? "Sending…" : "Get matched free"}
          </button>
          {error && (
            <p role="alert" style={{ color: "#ff9bab", fontSize: 13, marginTop: 8 }}>
              {error}
            </p>
          )}
        </form>
      )}
      <div className={`confirm-msg${submitted ? " show" : ""}`}>
        ✓ Got it — we&apos;ll email you a matched professional shortly.
      </div>
    </>
  );
}
