import type { Metadata } from "next";
import styles from "../page.module.css";

const BOOKING_URL = "https://calendar.app.google/opczJKFLUCcXyLN26";
// Google Calendar's short link sends X-Frame-Options: SAMEORIGIN and can't
// be put in an <iframe>. This is the long-form scheduling URL it redirects
// to, which Google does allow embedded. Re-resolve BOOKING_URL's redirect
// target if the schedule ever changes and this embed goes blank.
const BOOKING_EMBED_URL =
  "https://calendar.google.com/calendar/appointments/schedules/AcZssZ3q29yVNyePP8DQDgwpl_2DfSCwd602bQR0uaNY3ENUqgTbR1bJN6JNpsdNj6HcTdDmunkAHNMl?gv=true";

export const metadata: Metadata = {
  title: "Thanks — RemoHires",
  description: "We've received your request. Book a free fit call to speed things up.",
  robots: { index: false, follow: false },
};

const perks = [
  "15-Minute Fit Call",
  "Google Meet",
  "No obligation",
  "Discuss your workflows",
  "Get matched with the right professional",
];

export default function AutomationThankYouPage() {
  return (
    <div id="automation-page" className={styles.page}>
      <header className={`${styles.header} ${styles.headerShadow}`}>
        <div className={styles.headerBar}>
          <a href="https://remohires.com" target="_blank" rel="noopener">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className={styles.logo} src="/logo-remohires-color.svg" alt="RemoHires" />
          </a>
        </div>
      </header>

      <section className={styles.faqSection}>
        <div className={styles.faqHead}>
          <span className={styles.eyebrow}>Request received</span>
          <h2 className={styles.guaranteeCardTitle}>
            ✅ Thanks! We&rsquo;ve received your request.
          </h2>
          <p className={styles.sectionLead} style={{ margin: "0.75rem auto 0" }}>
            Our team will review your workflows shortly. To speed up the process, book a free
            15-minute fit call using the calendar below.
          </p>

          <div className={styles.guaranteeCard} style={{ marginTop: "2rem", textAlign: "left" }}>
            <span className={styles.eyebrow}>Free fit call</span>
            <h2 className={styles.guaranteeCardTitle}>Book your call — no obligation</h2>
            <ul style={{ margin: "0 0 1.5rem", paddingLeft: "1.25rem", color: "hsl(var(--muted-foreground))" }}>
              {perks.map((perk) => (
                <li key={perk} style={{ marginBottom: "0.375rem" }}>
                  {perk}
                </li>
              ))}
            </ul>

            <div style={{ borderRadius: "0.75rem", overflow: "hidden", border: "1px solid hsl(var(--border))" }}>
              <iframe
                src={BOOKING_EMBED_URL}
                title="Book a Discovery Call"
                loading="lazy"
                style={{ width: "100%", height: "600px", border: "none", display: "block" }}
              />
            </div>

            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener"
              className={`${styles.btn} ${styles.btnPrimary} ${styles.btnLg}`}
              style={{ width: "100%", marginTop: "1.5rem" }}
            >
              Open booking page in a new tab <span className={styles.arrow}>&rarr;</span>
            </a>
            <p className={styles.sectionLead} style={{ marginTop: "1rem", textAlign: "center", maxWidth: "none" }}>
              Booking is optional — we&rsquo;ve already got your request and will follow up either
              way.
            </p>
          </div>

          <a
            href="https://remohires.com"
            target="_blank"
            rel="noopener"
            className={styles.navLink}
            style={{ display: "inline-block", marginTop: "2rem" }}
          >
            &larr; Back to RemoHires
          </a>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <div className={styles.footerBrand}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className={styles.footerLogo} src="/logo-remohires-color.svg" alt="RemoHires" style={{ marginBottom: 8 }} />
            <div className={styles.footerTagline}>
              A dedicated remote team member for the work you can&rsquo;t afford to hire for
              locally.
            </div>
          </div>
          <nav className={styles.footerNav}>
            <a href="/privacypolicy" className={styles.footerLink}>Privacy</a>
            <a href="/termsofservice" className={styles.footerLink}>Terms</a>
            <a href="mailto:info@remohires.com" className={styles.footerLink}>info@remohires.com</a>
          </nav>
          <div className={styles.footerBottom}>© 2026 RemoHires. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}
