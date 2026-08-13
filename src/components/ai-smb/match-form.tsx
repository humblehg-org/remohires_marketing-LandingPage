"use client";

import { useEffect, useId, useRef, useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { trackSignupComplete } from "@/lib/gtm";
import { identifySignup } from "@/lib/posthog";

const ACCESS_KEY = "3ed3305a-37b5-4075-8151-f2fb6b838b18";

export function MatchForm({ subject }: { subject: string }) {
  const idPrefix = useId();
  const router = useRouter();
  const cardRef = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const trackedRef = useRef(false);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) {
      const raf = requestAnimationFrame(() => setRevealed(true));
      return () => cancelAnimationFrame(raf);
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setRevealed(true);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

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
          window.dataLayer.push({ event: "lead_submit", form_location: "ai-smb" });
          trackSignupComplete("B", email);
          identifySignup(
            "B",
            email,
            {
              name: String(formData.get("name") ?? "") || undefined,
              industry: "Small business",
            },
            { form_source: subject },
          );
        }
        router.push("/ai-smb/thank-you");
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
    <div ref={cardRef} className={`formcard rev${revealed ? " in" : ""}`}>
      <form noValidate onSubmit={handleSubmit}>
        <input type="hidden" name="access_key" value={ACCESS_KEY} />
        <input type="hidden" name="subject" value={subject} />
        <input type="hidden" name="from_name" value="RemoHires Landing - AI SMB Automation" />
        <input
          type="checkbox"
          name="botcheck"
          className="hp"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
        />
        <div className="grid2">
          <div>
            <label htmlFor={`${idPrefix}-name`}>Your name *</label>
            <input id={`${idPrefix}-name`} name="name" type="text" required suppressHydrationWarning />
          </div>
          <div>
            <label htmlFor={`${idPrefix}-business`}>Business name *</label>
            <input id={`${idPrefix}-business`} name="business" type="text" required suppressHydrationWarning />
          </div>
        </div>
        <div className="grid2">
          <div>
            <label htmlFor={`${idPrefix}-email`}>Work email *</label>
            <input id={`${idPrefix}-email`} name="email" type="email" required suppressHydrationWarning />
          </div>
          <div>
            <label htmlFor={`${idPrefix}-phone`}>Phone *</label>
            <input id={`${idPrefix}-phone`} name="phone" type="tel" required suppressHydrationWarning />
          </div>
        </div>
        <label htmlFor={`${idPrefix}-tools`}>Your main tools (QuickBooks, HubSpot, Google Workspace, …)</label>
        <input id={`${idPrefix}-tools`} name="tools" type="text" suppressHydrationWarning />
        <label htmlFor={`${idPrefix}-message`}>Your biggest bottleneck right now</label>
        <textarea
          id={`${idPrefix}-message`}
          name="message"
          rows={2}
          placeholder="e.g. leads going cold, hours of data entry, invoices by hand…"
          suppressHydrationWarning
        />
        <button type="submit" disabled={sending}>
          {sending ? "Sending…" : "Book my call →"}
        </button>
        {error && (
          <p className="err" role="alert">
            {error}
          </p>
        )}
      </form>
      <div className="alt">
        Prefer to book directly?{" "}
        <a href="https://calendar.app.google/opcyzJKFLUCcXyLN26" target="_blank" rel="noopener">
          Pick a time on the calendar →
        </a>
      </div>
    </div>
  );
}
