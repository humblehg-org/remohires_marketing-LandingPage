"use client";

import { useEffect, useState, type FormEvent } from "react";
import styles from "@/app/calculator/page.module.css";

export function CalculatorCTA() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (!isModalOpen) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setIsModalOpen(false);
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isModalOpen]);

  function openModal() {
    setIsSubmitted(false);
    setIsModalOpen(true);
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    window.dataLayer?.push({ event: "calculator_form_submit" });

    if (typeof window !== "undefined") {
      if (window.fbq) {
        window.fbq("track", "Lead", { content_name: "Calculator Form Submit" });
      }
      if (window.dataLayer) {
        window.dataLayer.push({ event: "generate_lead", form_name: "calculator_form" });
      }
    }

    setIsSubmitted(true);
  }

  return (
    <>
      <button type="button" className={styles.cta} onClick={openModal}>
        Get The Real Number, Free Audit
      </button>

      {isModalOpen && (
        <div className={styles.modalOverlay} role="presentation" onMouseDown={() => setIsModalOpen(false)}>
          <div
            className={styles.modalBox}
            role="dialog"
            aria-modal="true"
            aria-label="Get your free estimate audit"
            onMouseDown={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className={styles.modalClose}
              onClick={() => setIsModalOpen(false)}
              aria-label="Close"
            >
              &times;
            </button>

            {isSubmitted ? (
              <div className={styles.successWrap}>
                <div className={styles.successIcon}>
                  <CheckIcon />
                </div>
                <h3 className={styles.modalHeading}>Thanks, We&rsquo;ve Got It.</h3>
                <p className={styles.modalDesc}>
                  A real person will reach out shortly to book your free 10-minute audit. Want to grab a
                  time yourself instead?
                </p>
                <a
                  className={styles.modalSubmit}
                  href="https://calendar.app.google/opczJKFLUCcXyLN26"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book On Google Calendar
                </a>
              </div>
            ) : (
              <div>
                <h3 className={styles.modalHeading}>Get Your Free Estimate Audit</h3>
                <p className={styles.modalDesc}>
                  Leave your details and a real person books your 10-minute audit. No card, no spam.
                </p>
                <form onSubmit={handleSubmit}>
                  <label htmlFor="calc-audit-name" className={styles.formLabel}>
                    Full Name
                  </label>
                  <input
                    id="calc-audit-name"
                    name="fullName"
                    className={styles.formInput}
                    required
                    placeholder="Your name"
                  />
                  <label htmlFor="calc-audit-email" className={styles.formLabel}>
                    Work Email
                  </label>
                  <input
                    id="calc-audit-email"
                    name="workEmail"
                    type="email"
                    className={styles.formInput}
                    required
                    placeholder="you@company.com"
                  />
                  <label htmlFor="calc-audit-phone" className={styles.formLabel}>
                    Phone
                  </label>
                  <input
                    id="calc-audit-phone"
                    name="phone"
                    type="tel"
                    className={styles.formInput}
                    required
                    placeholder="(555) 000-0000"
                  />
                  <label htmlFor="calc-audit-company" className={styles.formLabel}>
                    Company
                  </label>
                  <input
                    id="calc-audit-company"
                    name="company"
                    className={styles.formInput}
                    required
                    placeholder="Your business"
                  />
                  <button type="submit" className={styles.modalSubmit}>
                    Book My Free Audit
                  </button>
                  <p className={styles.modalFine}>By submitting you agree to be contacted about your audit.</p>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

function CheckIcon() {
  return (
    <svg className={styles.successSvg} viewBox="0 0 24 24" fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.03 7.97c.29.29.29.77 0 1.06l-7 7c-.29.29-.77.29-1.06 0l-4-4a.75.75 0 1 1 1.06-1.06l3.47 3.47 6.47-6.47c.29-.29.77-.29 1.06 0Z"
        fill="currentColor"
      />
    </svg>
  );
}
