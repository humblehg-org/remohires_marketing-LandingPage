"use client";

import { useEffect, useState, type FormEvent } from "react";
import styles from "@/app/homeservices/page.module.css";
import { OPEN_AUDIT_MODAL_EVENT } from "./audit-cta";

export function AuditModal() {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    function onOpen() {
      setSubmitted(false);
      setOpen(true);
    }
    window.addEventListener(OPEN_AUDIT_MODAL_EVENT, onOpen);
    return () => window.removeEventListener(OPEN_AUDIT_MODAL_EVENT, onOpen);
  }, []);

  useEffect(() => {
    if (!open) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  if (!open) return null;

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Static mockup: shows a success state only. Production wires this POST
    // to a backend; the Meta Lead event below is already handled by GTM
    // (container GTM-K736CCFP) on the live site.
    if (typeof window.fbq === "function") {
      window.fbq("track", "Lead", {
        content_name: "Home Service Estimate Audit",
        content_category: "homeservices",
      });
    }
    setSubmitted(true);
  }

  return (
    <div className={styles.overlay} role="presentation" onMouseDown={() => setOpen(false)}>
      <div
        className={styles.modal}
        role="dialog"
        aria-modal="true"
        aria-label="Get your free estimate audit"
        onMouseDown={(e) => e.stopPropagation()}
      >
        <button type="button" className={styles.x} onClick={() => setOpen(false)} aria-label="Close">
          &times;
        </button>

        {submitted ? (
          <div className={styles.ok}>
            <div className={styles.big}>
              <CheckIcon />
            </div>
            <h3>Thanks, We&rsquo;ve Got It.</h3>
            <p className={styles.d}>A real person will reach out shortly to book your free 10-minute audit.</p>
          </div>
        ) : (
          <div>
            <h3>Get Your Free Estimate Audit</h3>
            <p className={styles.d}>
              Leave your details and a real person books your 10-minute audit. No card, no spam.
            </p>
            <form onSubmit={handleSubmit}>
              <label htmlFor="hs-audit-name">Full Name</label>
              <input id="hs-audit-name" name="fullName" required placeholder="Your name" />
              <label htmlFor="hs-audit-email">Work Email</label>
              <input id="hs-audit-email" name="workEmail" type="email" required placeholder="you@company.com" />
              <label htmlFor="hs-audit-phone">Phone</label>
              <input id="hs-audit-phone" name="phone" type="tel" required placeholder="(555) 000-0000" />
              <label htmlFor="hs-audit-company">Company</label>
              <input id="hs-audit-company" name="company" required placeholder="Your business" />
              <button
                type="submit"
                className={`${styles.btn} ${styles.btnGrad} ${styles.btnBlock} ${styles.btnLg}`}
                style={{ marginTop: 16 }}
              >
                Book My Free Audit
              </button>
              <p className={styles.fine}>By submitting you agree to be contacted about your audit.</p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

function CheckIcon() {
  return (
    <svg className={styles.svg} viewBox="0 0 24 24" fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.03 7.97c.29.29.29.77 0 1.06l-7 7c-.29.29-.77.29-1.06 0l-4-4a.75.75 0 1 1 1.06-1.06l3.47 3.47 6.47-6.47c.29-.29.77-.29 1.06 0Z"
        fill="currentColor"
      />
    </svg>
  );
}
