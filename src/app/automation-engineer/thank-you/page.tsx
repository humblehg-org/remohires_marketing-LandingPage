import type { Metadata } from "next";
import "../automation-engineer.css";

const BOOKING_URL = "https://calendar.app.google/opczJKFLUCcXyLN26";
// Google Calendar's short link (calendar.app.google/...) sends
// X-Frame-Options: SAMEORIGIN and can't be put in an <iframe>. This is the
// long-form scheduling URL it redirects to, which Google does allow to be
// embedded. Re-resolve BOOKING_URL's redirect target if the schedule ever
// changes and this embed goes blank.
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

export default function AutomationEngineerThankYouPage() {
  return (
    <>
      <header id="hdr" className="scrolled">
        <div className="wrap bar">
          <a href="https://remohires.com" target="_blank" rel="noopener">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="logo" src="/logo-remohires-color.svg" alt="RemoHires" />
          </a>
        </div>
      </header>

      <section className="final">
        <div className="wrap">
          <div className="box">
            <span className="eyebrow">Request received</span>
            <h2 style={{ marginTop: 16 }}>✅ Thanks! We&rsquo;ve received your request.</h2>
            <p style={{ marginTop: 12 }}>
              Our team will review your workflows shortly. To speed up the process, book a free
              15-minute fit call using the calendar below.
            </p>

            <div className="booking-card">
              <div className="booking-head">
                <span className="eyebrow">Free fit call</span>
                <h2>Book your call — no obligation</h2>
              </div>
              <ul className="booking-list">
                {perks.map((perk) => (
                  <li key={perk}>{perk}</li>
                ))}
              </ul>

              <div className="booking-embed">
                <iframe src={BOOKING_EMBED_URL} title="Book a Discovery Call" loading="lazy" />
              </div>

              <a href={BOOKING_URL} target="_blank" rel="noopener" className="btn btn-primary booking-cta">
                Open booking page in a new tab <span className="arw">→</span>
              </a>
              <p className="booking-note">
                Booking is optional — we&rsquo;ve already got your request and will follow up
                either way.
              </p>
            </div>

            <a href="https://remohires.com" className="ty-back" target="_blank" rel="noopener">
              ← Back to RemoHires
            </a>
          </div>
        </div>
      </section>

      <footer>
        <div className="wrap foot">
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="logo" src="/logo-remohires-color.svg" alt="RemoHires" style={{ marginBottom: 8 }} />
            <div className="tag">
              A dedicated remote team member for the work you can&rsquo;t afford to hire for
              locally.
            </div>
          </div>
          <div className="links">
            <a href="/privacypolicy">Privacy</a>
            <a href="/termsofservice">Terms</a>
            <a href="mailto:info@remohires.com">info@remohires.com</a>
          </div>
          <div className="cc">© 2026 RemoHires. All rights reserved.</div>
        </div>
      </footer>
    </>
  );
}
