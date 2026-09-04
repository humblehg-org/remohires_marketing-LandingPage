"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { OPEN_CALLBACK_MODAL_EVENT } from "./callback-cta";
import { trackLeadSubmit } from "@/lib/gtm";

const ACCESS_KEY = "3ed3305a-37b5-4075-8151-f2fb6b838b18";
const PAGE_PATH = "/insurance-automation";

const TIMEZONES = [
  "Eastern Time (ET)",
  "Central Time (CT)",
  "Mountain Time (MT)",
  "Pacific Time (PT)",
  "Alaska Time (AKT)",
  "Hawaii Time (HT)",
  "Atlantic Time (AT)",
  "UK Time (GMT/BST)",
  "Central European Time (CET)",
  "India Standard Time (IST)",
  "Philippine Time (PHT)",
  "Other",
];

type Step = "details" | "callback";
type CallbackType = "asap" | "scheduled";

/**
 * Replaces the Cal.com booking embed on /insurance-automation with a phone
 * callback request. Renders nothing until a BookCta dispatches
 * OPEN_CALLBACK_MODAL_EVENT (see callback-cta.ts) — mount once near the page
 * root, same pattern as the automation-engineer StartModal.
 *
 * The lead-details fields and the callback-type fields live in the same
 * <form> the whole time (never unmounted) so a single Web3Forms submission
 * covers both steps. The "details" step is hidden via inline style rather
 * than removed — hidden (not-rendered) form fields are barred from
 * constraint validation per the HTML spec, so reportValidity() on submit only
 * checks whichever fields are currently visible.
 */
export function CallbackModal() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<Step>("details");
  const [callbackType, setCallbackType] = useState<CallbackType | null>(null);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<CallbackType | null>(null);
  const [ctaSource, setCtaSource] = useState("cta");
  const formRef = useRef<HTMLFormElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onOpen(e: Event) {
      const detail = (e as CustomEvent<{ ctaName?: string }>).detail;
      setCtaSource(detail?.ctaName ?? "cta");
      setStep("details");
      setCallbackType(null);
      setError(null);
      setSuccess(null);
      setOpen(true);
    }
    window.addEventListener(OPEN_CALLBACK_MODAL_EVENT, onOpen);
    return () => window.removeEventListener(OPEN_CALLBACK_MODAL_EVENT, onOpen);
  }, []);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKeyDown);

    const focusTimer = window.setTimeout(() => {
      panelRef.current?.querySelector<HTMLInputElement>('input[name="name"]')?.focus();
    }, 50);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
      window.clearTimeout(focusTimer);
    };
  }, [open]);

  function handleContinue() {
    if (!formRef.current?.reportValidity()) return;
    setStep("callback");
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (pending || !callbackType) return;
    const form = e.currentTarget;
    if (!form.reportValidity()) return;
    setPending(true);
    setError(null);
    try {
      const formData = new FormData(form);
      if (callbackType === "asap") {
        formData.set("submitted_at", new Date().toISOString());
      }
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });
      const data = await res.json();
      if (data && data.success) {
        trackLeadSubmit(ctaSource);
        setSuccess(callbackType);
      } else {
        throw new Error((data && data.message) || "Submission failed");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setPending(false);
    }
  }

  if (!open) return null;

  return (
    <div className="callback-overlay" role="presentation" onMouseDown={() => setOpen(false)}>
      <div
        className="callback-panel"
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Request a call"
        onMouseDown={(e) => e.stopPropagation()}
      >
        <button type="button" className="callback-close" aria-label="Close" onClick={() => setOpen(false)}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {success ? (
          <div className="callback-success">
            <h2 className="callback-title">Request received</h2>
            <p>
              {success === "asap"
                ? "Thanks — we received your request. A member of the RemoHires team will call the number you provided as soon as possible during business hours."
                : "Thanks — we received your preferred call time. A member of the RemoHires team will call the number you provided at the requested time."}
            </p>
            <button type="button" className="btn primary callback-submit" onClick={() => setOpen(false)}>
              Close
            </button>
          </div>
        ) : (
          <form ref={formRef} noValidate onSubmit={handleSubmit}>
            <input type="hidden" name="access_key" value={ACCESS_KEY} />
            <input type="hidden" name="subject" value="New phone callback request — RemoHires" />
            <input type="hidden" name="from_name" value="RemoHires Landing Page" />
            <input type="checkbox" name="botcheck" tabIndex={-1} style={{ display: "none" }} aria-hidden="true" />
            <input type="hidden" name="page" value={PAGE_PATH} />
            <input type="hidden" name="cta_source" value={ctaSource} />
            <input type="hidden" name="callback_type" value={callbackType ?? ""} />

            <div style={step === "details" ? undefined : { display: "none" }}>
              <h2 className="callback-title">Talk to Our Team</h2>
              <p className="callback-subtitle">Tell us how to reach you and we&rsquo;ll take it from there.</p>
              <div className="callback-field">
                <label htmlFor="ia-cb-name">Name *</label>
                <input id="ia-cb-name" type="text" name="name" required disabled={pending} />
              </div>
              <div className="callback-field">
                <label htmlFor="ia-cb-company">Company *</label>
                <input id="ia-cb-company" type="text" name="company" required disabled={pending} />
              </div>
              <div className="callback-field">
                <label htmlFor="ia-cb-email">Work Email *</label>
                <input id="ia-cb-email" type="email" name="email" required disabled={pending} />
              </div>
              <div className="callback-field">
                <label htmlFor="ia-cb-phone">Phone Number *</label>
                <input id="ia-cb-phone" type="tel" name="phone" required disabled={pending} />
              </div>
              <button type="button" className="btn primary callback-submit" onClick={handleContinue}>
                Continue
              </button>
            </div>

            {step === "callback" && (
              <div>
                <h2 className="callback-title">How Should We Reach You?</h2>
                <div className="callback-options">
                  <button
                    type="button"
                    className={`callback-option${callbackType === "asap" ? " selected" : ""}`}
                    onClick={() => setCallbackType("asap")}
                  >
                    <strong>Call Me ASAP</strong>
                    <span>Have someone from RemoHires call me as soon as possible.</span>
                  </button>
                  <button
                    type="button"
                    className={`callback-option${callbackType === "scheduled" ? " selected" : ""}`}
                    onClick={() => setCallbackType("scheduled")}
                  >
                    <strong>Schedule a Phone Call</strong>
                    <span>Pick a date, time, and timezone that works for you.</span>
                  </button>
                </div>

                {callbackType === "scheduled" && (
                  <div className="callback-schedule-fields">
                    <div className="callback-field">
                      <label htmlFor="ia-cb-date">Preferred Date *</label>
                      <input id="ia-cb-date" type="date" name="preferred_date" required disabled={pending} />
                    </div>
                    <div className="callback-field">
                      <label htmlFor="ia-cb-time">Preferred Time *</label>
                      <input id="ia-cb-time" type="time" name="preferred_time" required disabled={pending} />
                    </div>
                    <div className="callback-field">
                      <label htmlFor="ia-cb-tz">Timezone *</label>
                      <select id="ia-cb-tz" name="timezone" required disabled={pending} defaultValue="">
                        <option value="" disabled>
                          Choose your timezone
                        </option>
                        {TIMEZONES.map((tz) => (
                          <option key={tz} value={tz}>
                            {tz}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                )}

                {callbackType && (
                  <button type="submit" className="btn primary callback-submit" disabled={pending}>
                    {pending ? "Sending…" : callbackType === "asap" ? "Request My Call" : "Schedule My Call"}
                  </button>
                )}

                <button type="button" className="callback-back" onClick={() => setStep("details")}>
                  ← Back
                </button>
              </div>
            )}

            {error && (
              <p className="callback-error" role="alert">
                {error}
              </p>
            )}
          </form>
        )}
      </div>
    </div>
  );
}
