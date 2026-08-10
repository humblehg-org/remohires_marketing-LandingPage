"use client";

import { useEffect, useRef, useState, type SubmitEvent } from "react";
import { useRouter } from "next/navigation";
import { type LeadPath } from "@/lib/submit-lead";
import { trackSignupComplete } from "@/lib/gtm";
import { identifySignup } from "@/lib/posthog";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const WEB3FORMS_ACCESS_KEY = "f04a7958-62eb-40ef-a36a-82094388363a";

const PATH_SUBJECT_LABELS: Partial<Record<LeadPath, string>> = {
  hvac: "HVAC",
};

const HEAR_ABOUT_OPTIONS = [
  "Google",
  "Facebook/Instagram",
  "LinkedIn",
  "Referral",
  "Other",
];

function flagEmoji(iso: string): string {
  return iso
    .toUpperCase()
    .replace(/./g, (char) => String.fromCodePoint(127397 + char.charCodeAt(0)));
}

const COUNTRIES: { iso: string; name: string; dial: string }[] = [
  { iso: "US", name: "United States", dial: "+1" },
  { iso: "DZ", name: "Algeria", dial: "+213" },
  { iso: "AR", name: "Argentina", dial: "+54" },
  { iso: "AM", name: "Armenia", dial: "+374" },
  { iso: "AU", name: "Australia", dial: "+61" },
  { iso: "AT", name: "Austria", dial: "+43" },
  { iso: "AZ", name: "Azerbaijan", dial: "+994" },
  { iso: "BH", name: "Bahrain", dial: "+973" },
  { iso: "BD", name: "Bangladesh", dial: "+880" },
  { iso: "BE", name: "Belgium", dial: "+32" },
  { iso: "BO", name: "Bolivia", dial: "+591" },
  { iso: "BR", name: "Brazil", dial: "+55" },
  { iso: "BN", name: "Brunei", dial: "+673" },
  { iso: "BG", name: "Bulgaria", dial: "+359" },
  { iso: "KH", name: "Cambodia", dial: "+855" },
  { iso: "CA", name: "Canada", dial: "+1" },
  { iso: "CL", name: "Chile", dial: "+56" },
  { iso: "CN", name: "China", dial: "+86" },
  { iso: "CO", name: "Colombia", dial: "+57" },
  { iso: "CR", name: "Costa Rica", dial: "+506" },
  { iso: "HR", name: "Croatia", dial: "+385" },
  { iso: "CY", name: "Cyprus", dial: "+357" },
  { iso: "CZ", name: "Czech Republic", dial: "+420" },
  { iso: "DK", name: "Denmark", dial: "+45" },
  { iso: "DO", name: "Dominican Republic", dial: "+1" },
  { iso: "EC", name: "Ecuador", dial: "+593" },
  { iso: "EG", name: "Egypt", dial: "+20" },
  { iso: "EE", name: "Estonia", dial: "+372" },
  { iso: "ET", name: "Ethiopia", dial: "+251" },
  { iso: "FI", name: "Finland", dial: "+358" },
  { iso: "FR", name: "France", dial: "+33" },
  { iso: "GE", name: "Georgia", dial: "+995" },
  { iso: "DE", name: "Germany", dial: "+49" },
  { iso: "GH", name: "Ghana", dial: "+233" },
  { iso: "GR", name: "Greece", dial: "+30" },
  { iso: "GT", name: "Guatemala", dial: "+502" },
  { iso: "HK", name: "Hong Kong", dial: "+852" },
  { iso: "HU", name: "Hungary", dial: "+36" },
  { iso: "IS", name: "Iceland", dial: "+354" },
  { iso: "IN", name: "India", dial: "+91" },
  { iso: "ID", name: "Indonesia", dial: "+62" },
  { iso: "IR", name: "Iran", dial: "+98" },
  { iso: "IQ", name: "Iraq", dial: "+964" },
  { iso: "IE", name: "Ireland", dial: "+353" },
  { iso: "IL", name: "Israel", dial: "+972" },
  { iso: "IT", name: "Italy", dial: "+39" },
  { iso: "JM", name: "Jamaica", dial: "+1" },
  { iso: "JP", name: "Japan", dial: "+81" },
  { iso: "JO", name: "Jordan", dial: "+962" },
  { iso: "KZ", name: "Kazakhstan", dial: "+7" },
  { iso: "KE", name: "Kenya", dial: "+254" },
  { iso: "KW", name: "Kuwait", dial: "+965" },
  { iso: "LA", name: "Laos", dial: "+856" },
  { iso: "LV", name: "Latvia", dial: "+371" },
  { iso: "LB", name: "Lebanon", dial: "+961" },
  { iso: "LT", name: "Lithuania", dial: "+370" },
  { iso: "LU", name: "Luxembourg", dial: "+352" },
  { iso: "MY", name: "Malaysia", dial: "+60" },
  { iso: "MT", name: "Malta", dial: "+356" },
  { iso: "MX", name: "Mexico", dial: "+52" },
  { iso: "MN", name: "Mongolia", dial: "+976" },
  { iso: "MA", name: "Morocco", dial: "+212" },
  { iso: "MM", name: "Myanmar", dial: "+95" },
  { iso: "NP", name: "Nepal", dial: "+977" },
  { iso: "NL", name: "Netherlands", dial: "+31" },
  { iso: "NZ", name: "New Zealand", dial: "+64" },
  { iso: "NG", name: "Nigeria", dial: "+234" },
  { iso: "NO", name: "Norway", dial: "+47" },
  { iso: "OM", name: "Oman", dial: "+968" },
  { iso: "PK", name: "Pakistan", dial: "+92" },
  { iso: "PA", name: "Panama", dial: "+507" },
  { iso: "PY", name: "Paraguay", dial: "+595" },
  { iso: "PE", name: "Peru", dial: "+51" },
  { iso: "PH", name: "Philippines", dial: "+63" },
  { iso: "PL", name: "Poland", dial: "+48" },
  { iso: "PT", name: "Portugal", dial: "+351" },
  { iso: "PR", name: "Puerto Rico", dial: "+1" },
  { iso: "QA", name: "Qatar", dial: "+974" },
  { iso: "RO", name: "Romania", dial: "+40" },
  { iso: "RU", name: "Russia", dial: "+7" },
  { iso: "SA", name: "Saudi Arabia", dial: "+966" },
  { iso: "RS", name: "Serbia", dial: "+381" },
  { iso: "SG", name: "Singapore", dial: "+65" },
  { iso: "SK", name: "Slovakia", dial: "+421" },
  { iso: "SI", name: "Slovenia", dial: "+386" },
  { iso: "ZA", name: "South Africa", dial: "+27" },
  { iso: "KR", name: "South Korea", dial: "+82" },
  { iso: "ES", name: "Spain", dial: "+34" },
  { iso: "LK", name: "Sri Lanka", dial: "+94" },
  { iso: "SE", name: "Sweden", dial: "+46" },
  { iso: "CH", name: "Switzerland", dial: "+41" },
  { iso: "TW", name: "Taiwan", dial: "+886" },
  { iso: "TZ", name: "Tanzania", dial: "+255" },
  { iso: "TH", name: "Thailand", dial: "+66" },
  { iso: "TT", name: "Trinidad and Tobago", dial: "+1" },
  { iso: "TN", name: "Tunisia", dial: "+216" },
  { iso: "TR", name: "Turkey", dial: "+90" },
  { iso: "UG", name: "Uganda", dial: "+256" },
  { iso: "UA", name: "Ukraine", dial: "+380" },
  { iso: "AE", name: "United Arab Emirates", dial: "+971" },
  { iso: "GB", name: "United Kingdom", dial: "+44" },
  { iso: "UY", name: "Uruguay", dial: "+598" },
  { iso: "UZ", name: "Uzbekistan", dial: "+998" },
  { iso: "VE", name: "Venezuela", dial: "+58" },
  { iso: "VN", name: "Vietnam", dial: "+84" },
  { iso: "ZW", name: "Zimbabwe", dial: "+263" },
];

const COUNTRY_CODE_OPTIONS = COUNTRIES.map((country) => ({
  key: country.iso,
  value: `${country.iso} (${country.dial})`,
  dial: country.dial,
  label: `${flagEmoji(country.iso)} ${country.name} (${country.dial})`,
}));

const DEFAULT_COUNTRY_VALUE =
  COUNTRY_CODE_OPTIONS.find((option) => option.key === "US")?.value ?? "US (+1)";

export function LeadForm({
  source,
  qualifier,
  center,
  focusToken,
  path = "home",
  ctaText,
  microcopyText,
}: {
  source: string;
  qualifier?: string;
  center?: boolean;
  focusToken?: number;
  path?: LeadPath;
  ctaText?: string;
  microcopyText?: string;
}) {
  const router = useRouter();
  const [invalid, setInvalid] = useState(false);
  const [pending, setPending] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const countryCodeRef = useRef<HTMLSelectElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const heardRef = useRef<HTMLSelectElement>(null);
  const sentRef = useRef(false);

  useEffect(() => {
    if (focusToken) nameRef.current?.focus();
  }, [focusToken]);

  async function handleSubmit(e: SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    if (pending) return;
    const name = nameRef.current?.value.trim() ?? "";
    const email = emailRef.current?.value.trim() ?? "";
    const heardAbout = heardRef.current?.value ?? "";
    if (!name || !EMAIL_RE.test(email) || !heardAbout) {
      setInvalid(true);
      setServerError(null);
      (!name ? nameRef : !EMAIL_RE.test(email) ? emailRef : heardRef).current?.focus();
      return;
    }
    setInvalid(false);
    setServerError(null);
    setPending(true);
    try {
      const data = new FormData();
      data.append("access_key", WEB3FORMS_ACCESS_KEY);
      data.append("path", path);
      data.append("name", name);
      data.append("email", email);
      const phoneNumber = phoneRef.current?.value.trim() ?? "";
      const dialCode = countryCodeRef.current?.value.match(/\+\d+/)?.[0] ?? "";
      data.append("phone", phoneNumber ? `${dialCode} ${phoneNumber}` : "");
      data.append("how_heard", heardAbout);
      data.append("source", source);
      data.append("qualifier", qualifier ?? "");
      data.append("subject", `New lead from ${PATH_SUBJECT_LABELS[path] ?? path} page`);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      const res = await response.json();

      if (res.success) {
        if (!sentRef.current) {
          sentRef.current = true;
          window.dataLayer?.push({
            event: "lead_submit",
            page_path: location.pathname,
            form_source: source || "lp",
          });
          if (typeof window.fbq === "function") {
            window.fbq("track", "Lead");
          }
          trackSignupComplete("A", email);
          identifySignup("A", email, { name }, { form_source: source, qualifier });
        }
        router.push("/thank-you");
      } else {
        throw new Error(res.message || "Submission failed");
      }
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
        <div className="flex gap-3">
          <select
            name="country_code"
            ref={countryCodeRef}
            disabled={pending}
            defaultValue={DEFAULT_COUNTRY_VALUE}
            suppressHydrationWarning
            className="w-[132px] truncate"
            style={{ width: "132px" }}
          >
            {COUNTRY_CODE_OPTIONS.map((option) => (
              <option key={option.key} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <input
            type="tel"
            name="phone"
            placeholder="Phone number"
            ref={phoneRef}
            disabled={pending}
            suppressHydrationWarning
            className="flex-1"
          />
        </div>
        <select
          name="how_heard"
          required
          defaultValue=""
          ref={heardRef}
          disabled={pending}
          suppressHydrationWarning
        >
          <option value="" disabled>
            Select an option...
          </option>
          {HEAR_ABOUT_OPTIONS.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <input type="hidden" name="qualifier" value={qualifier ?? ""} readOnly />
        <input type="hidden" name="source" value={source} readOnly />
        <button className="btn primary glow" type="submit" disabled={pending}>
          {pending
            ? "Sending…"
            : ctaText || "Get One Reply From A Real Person"}
        </button>
        {invalid && (
          <p className="lead-error" role="alert">
            Enter your name, a valid work email, and how you heard about us.
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
      >
        {microcopyText ||
          "We will email you back once, from a real person here. No spam, no card, no obligation, and no call unless you ask for one."}
      </p>
    </>
  );
}
