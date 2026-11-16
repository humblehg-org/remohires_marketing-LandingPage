"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { CountryPhoneField } from "@/app/_shared-lp/country-phone-field";
import { submitLeadMagnet, trackLeadMagnetSubmit } from "@/app/_shared-lp/lead-magnet-submit";

/* Lead form for the /resources lead magnets: the same fields, input style,
   phone picker, error text, and consent line as the /cleaning lead form.
   On success it fires the lead events and redirects to
   /resources/thank-you?lm=<thankYouLm>. */
export function LeadMagnetForm({
  idPrefix,
  buttonText,
  tone,
  kitFormId,
  subject,
  source,
  eventBase,
  thankYouLm,
  getExtra,
}: {
  /** Unique per page, used for the input ids. */
  idPrefix: string;
  buttonText: string;
  /** "dark" when the form sits on a dark panel. */
  tone: "dark" | "light";
  kitFormId: string;
  subject: string;
  source: string;
  /** Tracking name, e.g. "cleaning_front_office_kit". */
  eventBase: string;
  thankYouLm: "kit" | "calculator" | "quiz";
  /** Readable extra fields for the team email, read at submit time. */
  getExtra?: () => Record<string, string>;
}) {
  const router = useRouter();
  const [sending, setSending] = useState(false);
  const [formError, setFormError] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    setFormError(false);
    setSending(true);
    const data = new FormData(form);
    const ok = await submitLeadMagnet({
      kitFormId,
      subject,
      source,
      fullName: String(data.get("fullname") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      phone: String(data.get("phone") ?? ""),
      country: String(data.get("country") ?? ""),
      extra: getExtra?.(),
    });
    if (ok) {
      trackLeadMagnetSubmit(eventBase);
      router.push(`/resources/thank-you?lm=${thankYouLm}`);
      return;
    }
    setFormError(true);
    setSending(false);
  }

  return (
    <form className={`res-leadform res-leadform--${tone}`} noValidate onSubmit={handleSubmit}>
      <label htmlFor={`${idPrefix}-fn`}>Full name</label>
      <input className="res-inp" id={`${idPrefix}-fn`} name="fullname" type="text" autoComplete="name" placeholder="Enter your full name" required />
      <label htmlFor={`${idPrefix}-em`}>Email address</label>
      <input className="res-inp" id={`${idPrefix}-em`} name="email" type="email" autoComplete="email" placeholder="you@company.com" required />
      <label htmlFor={`${idPrefix}-ph`}>Phone number</label>
      <CountryPhoneField id={`${idPrefix}-ph`} />
      <button className="btn btn-primary" type="submit" disabled={sending}>{sending ? "Sending..." : buttonText}</button>
      <p className={formError ? "form-error show" : "form-error"} role="alert">Something went wrong. Please try again, or email info@remohires.com.</p>
      <p className="form-consent">By submitting this form, you agree to our <a href="/cleaning/terms" target="_blank" rel="noopener">Terms of Service</a> and <a href="/cleaning/privacy" target="_blank" rel="noopener">Privacy Policy</a>.</p>
    </form>
  );
}
