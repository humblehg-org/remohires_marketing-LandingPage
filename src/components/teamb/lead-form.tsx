"use client";

import { useState, type FormEvent } from "react";

export function LeadForm({ variant }: { variant: "hero" | "footer" }) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // NOTE: dummy capture for concept-testing.
    // TODO: point this at a real endpoint (Google Form action URL, Formspree,
    // or a webhook into ClickUp/email) before this goes live.
    console.log("Lead captured (wire this to real backend):", email);
    setSubmitted(true);
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
          <button type="submit" className="btn-primary">
            Get matched free
          </button>
        </form>
      )}
      <div className={`confirm-msg${submitted ? " show" : ""}`}>
        ✓ Got it — we&apos;ll email you a matched professional shortly.
      </div>
    </>
  );
}
