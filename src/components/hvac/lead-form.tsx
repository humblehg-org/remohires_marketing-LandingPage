"use client";

import { useEffect, useRef, useState, type SubmitEvent } from "react";
import { IconCheck } from "./icons";
import { submitLead, type LeadPath } from "@/lib/submit-lead";
import { trackSignupComplete, trackLeadSubmit } from "@/lib/gtm";
import { identifySignup } from "@/lib/posthog";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function LeadForm({
  source,
  qualifier,
  center,
  focusToken,
  path = "home",
  submitLabel = "Get One Reply From A Real Person",
}: {
  source: string;
  qualifier?: string;
  center?: boolean;
  focusToken?: number;
  path?: LeadPath;
  submitLabel?: string;
}) {
  const [invalid, setInvalid] = useState(false);
  const [pending, setPending] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const doneRef = useRef<HTMLDivElement>(null);
  const sentRef = useRef(false);

  useEffect(() => {
    if (focusToken) nameRef.current?.focus();
  }, [focusToken]);

  async function handleSubmit(e: SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    if (pending) return;
    const name = nameRef.current?.value.trim() ?? "";
    const email = emailRef.current?.value.trim() ?? "";
    if (!name || !EMAIL_RE.test(email)) {
      setInvalid(true);
      setServerError(null);
      (name ? emailRef : nameRef).current?.focus();
      return;
    }
    setInvalid(false);
    setServerError(null);
    setPending(true);
    try {
      await submitLead({ path, name, email, source, qualifier });
      if (!sentRef.current) {
        sentRef.current = true;
        trackSignupComplete("A", email);
        trackLeadSubmit(source);
        identifySignup("A", email, { name }, { form_source: source, qualifier });
      }
      setSubmitted(true);
      requestAnimationFrame(() => doneRef.current?.focus());
    } catch (err) {
      setServerError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again.",
      );
    } finally {
      setPending(false);
    }
  }

  function handleInput() {
    if (invalid) setInvalid(false);
    if (serverError) setServerError(null);
  }

  return (
    <>
      <form
        className={`lead-form${center ? " centerform" : ""}${invalid || serverError ? " invalid" : ""}`}
        noValidate
        hidden={submitted}
        onSubmit={handleSubmit}
        onInput={handleInput}
      >
        <input
          type="text"
          name="name"
          placeholder="First name"
          required
          ref={nameRef}
          disabled={pending}
          suppressHydrationWarning
        />
        <input
          type="email"
          name="email"
          placeholder="Work email"
          required
          ref={emailRef}
          disabled={pending}
          suppressHydrationWarning
        />
        <input type="hidden" name="qualifier" value={qualifier ?? ""} readOnly />
        <input type="hidden" name="source" value={source} readOnly />
        <button className="btn primary glow" type="submit" disabled={pending}>
          {pending ? "Sending…" : submitLabel}
        </button>
        {invalid && (
          <p className="lead-error" role="alert">
            Enter your name and a valid work email so we can reach you.
          </p>
        )}
        {!invalid && serverError && (
          <p className="lead-error" role="alert">
            {serverError}
          </p>
        )}
      </form>
      <p
        className={`microcopy${center ? " centerform" : ""}`}
        style={center ? { textAlign: "center" } : undefined}
        hidden={submitted}
      >
        We will email you back once, from a real person here. No spam, no
        card, no obligation, and no call unless you ask for one.
      </p>
      <div className="cdone" role="status" hidden={!submitted} tabIndex={-1} ref={doneRef}>
        <span className="ic">
          <IconCheck />
        </span>
        <div>
          <b>Thanks &mdash; we&rsquo;ll be in touch within one business day.</b>
          <span>Watch for an email from remohires.com.</span>
        </div>
      </div>
    </>
  );
}
