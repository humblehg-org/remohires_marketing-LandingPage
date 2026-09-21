"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import posthog from "posthog-js";
import { OPEN_LEAD_MODAL_EVENT } from "./lead-cta";
import { trackLeadSubmit } from "@/lib/gtm";

const ACCESS_KEY = "8326652c-ecb6-4130-8f8b-5a477deaae3d";
const PAGE_PATH = "/custom-recruitment";

const CONTACT_METHODS = [
  { key: "phone", label: "Phone Call", sub: "US only", value: "phone_call", channel: "phone", placeholder: "Mobile number", inputType: "tel" },
  { key: "whatsapp", label: "WhatsApp", sub: "UK, AU & global", value: "whatsapp", channel: "WhatsApp", placeholder: "WhatsApp number", inputType: "tel" },
  { key: "telegram", label: "Telegram", sub: "UK, AU & global", value: "telegram", channel: "Telegram", placeholder: "Telegram username / number", inputType: "text" },
] as const;

type ContactMethodKey = (typeof CONTACT_METHODS)[number]["key"];

/**
 * Replaces the phone-callback CallbackModal on /custom-recruitment with the
 * contact-method lead form shared across the RemoHires landing pages (name,
 * email, Phone Call / WhatsApp / Telegram picker, one dynamic contact field).
 * Renders nothing until a BookCta dispatches OPEN_LEAD_MODAL_EVENT — mount
 * once near the page root, same pattern as LeadModal on /appointment-setter.
 *
 * PostHog event names (appt_setter_form_opened / appt_setter_lead_submitted)
 * are unchanged from the previous CallbackModal so existing dashboards keep
 * counting this page's funnel correctly.
 */
export function LeadModal() {
  const [open, setOpen] = useState(false);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [callNow, setCallNow] = useState(true);
  const [contactMethod, setContactMethod] = useState<ContactMethodKey>("phone");
  const [ctaSource, setCtaSource] = useState("cta");
  const formRef = useRef<HTMLFormElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onOpen(e: Event) {
      const detail = (e as CustomEvent<{ ctaName?: string }>).detail;
      setCtaSource(detail?.ctaName ?? "cta");
      setError(null);
      setSuccessMessage(null);
      setCallNow(true);
      setContactMethod("phone");
      setOpen(true);
      posthog.capture("appt_setter_form_opened");
    }
    window.addEventListener(OPEN_LEAD_MODAL_EVENT, onOpen);
    return () => window.removeEventListener(OPEN_LEAD_MODAL_EVENT, onOpen);
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
      panelRef.current?.querySelector<HTMLInputElement>('input[name="fullname"]')?.focus();
    }, 60);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
      window.clearTimeout(focusTimer);
    };
  }, [open]);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (pending) return;
    const form = e.currentTarget;

    // Name required, contact value required; phone/WhatsApp must have at
    // least 7 digits, Telegram only needs a non-empty value since usernames
    // aren't numeric. Silently refocuses the offending field instead of
    // showing an error, matching the other RemoHires lead forms.
    const nameField = form.elements.namedItem("fullname") as HTMLInputElement;
    const contactValueField = form.elements.namedItem("contact_value") as HTMLInputElement;
    const name = nameField.value.trim();
    const contactValue = contactValueField.value.trim();
    if (!name) {
      nameField.focus();
      return;
    }
    if (!contactValue) {
      contactValueField.focus();
      return;
    }
    if (contactMethod !== "telegram" && contactValue.replace(/[^0-9]/g, "").length < 7) {
      contactValueField.focus();
      return;
    }

    setPending(true);
    setError(null);
    try {
      const formData = new FormData(form);
      formData.set("call_preference", callNow ? "Within 15 minutes" : "No rush");
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });
      const data = await res.json();
      if (data && data.success) {
        trackLeadSubmit(ctaSource);
        posthog.capture("appt_setter_lead_submitted");
        const first = name.split(" ")[0];
        const activeMethod = CONTACT_METHODS.find((m) => m.key === contactMethod) ?? CONTACT_METHODS[0];
        setSuccessMessage(
          `Thanks, ${first}. A RemoHires recruiter will contact you via ${activeMethod.channel}${
            callNow ? " within 15 minutes during business hours." : "."
          }`,
        );
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

  const activeMethod = CONTACT_METHODS.find((m) => m.key === contactMethod) ?? CONTACT_METHODS[0];

  return (
    <div className="modal open" role="presentation">
      <div className="scrim" onClick={() => setOpen(false)} />
      <div className="box" ref={panelRef} role="dialog" aria-modal="true" aria-labelledby="lm-title">
        <button className="x" type="button" aria-label="Close" onClick={() => setOpen(false)}>
          &times;
        </button>

        {successMessage ? (
          <div className="lf-done" style={{ display: "block" }}>
            <div className="ck">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3}>
                <path d="M20 6 9 17l-5-5" />
              </svg>
            </div>
            <div className="dt">You Are On The List</div>
            <div className="lf-done-msg">{successMessage}</div>
          </div>
        ) : (
          <form ref={formRef} noValidate onSubmit={handleSubmit}>
            <input type="hidden" name="access_key" value={ACCESS_KEY} />
            <input type="hidden" name="subject" value="New custom recruitment lead — RemoHires" />
            <input type="hidden" name="from_name" value="RemoHires Landing Page" />
            <input type="checkbox" name="botcheck" tabIndex={-1} style={{ display: "none" }} aria-hidden="true" />
            <input type="hidden" name="page" value={PAGE_PATH} />
            <input type="hidden" name="cta_source" value={ctaSource} />

            <div className="lf-eyebrow">Free Consultation, No Obligation</div>
            <h4 id="lm-title">Start Your Free Candidate Search</h4>
            <p className="lf-sub">
              Tell us how you want us to contact you. We will use that channel to discuss the role and hours you need
              covered.
            </p>
            <div className="fields">
              <input type="text" name="fullname" placeholder="Your name" autoComplete="name" required disabled={pending} />
              <input type="email" name="email" placeholder="Email (optional)" autoComplete="email" disabled={pending} />
            </div>

            <div className="contact-label">How should we contact you?</div>
            <div className="contact-methods" role="radiogroup" aria-label="Contact method">
              {CONTACT_METHODS.map((m) => (
                <label key={m.key} className={`method-card${contactMethod === m.key ? " selected" : ""}`}>
                  <input
                    type="radio"
                    name="contact_method"
                    value={m.value}
                    checked={contactMethod === m.key}
                    onChange={() => setContactMethod(m.key)}
                    disabled={pending}
                  />
                  <span className="method-title">{m.label}</span>
                  <span className="method-sub">{m.sub}</span>
                </label>
              ))}
            </div>

            <div className="fields" style={{ marginTop: 12 }}>
              <input
                key={contactMethod}
                id="contact-value"
                type={activeMethod.inputType}
                name="contact_value"
                placeholder={activeMethod.placeholder}
                autoComplete={activeMethod.inputType === "tel" ? "tel" : "off"}
                required
                disabled={pending}
              />
            </div>

            <div className="region-note">
              <span className="info-ic">!</span>
              <div>
                <b>US:</b> phone call available
                <br />
                <b>UK &amp; Australia:</b> WhatsApp or Telegram
              </div>
            </div>

            <label className="toggle">
              <input type="checkbox" checked={callNow} onChange={(e) => setCallNow(e.target.checked)} disabled={pending} />
              <span>
                <span className="tl">Contact me within 15 minutes</span>
                <span className="ts">A real person, during business hours</span>
              </span>
            </label>
            <button className="btn" type="submit" disabled={pending}>
              {pending ? "Sending…" : "Book A Free Call"}
            </button>
            <p className="note">No recruitment fee to start. You decide after you see the shortlist.</p>

            {error && (
              <p className="form-error" role="alert">
                {error}
              </p>
            )}
          </form>
        )}
      </div>
    </div>
  );
}
