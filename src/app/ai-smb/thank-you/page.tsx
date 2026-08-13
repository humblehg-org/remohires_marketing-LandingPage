import type { Metadata } from "next";
import "../ai-smb.css";

const BOOKING_URL = "https://calendar.app.google/opcyzJKFLUCcXyLN26";
// Google Calendar's short link (calendar.app.google/...) sends
// X-Frame-Options: SAMEORIGIN and can't be put in an <iframe>. This is the
// long-form scheduling URL it redirects to, which Google does allow to be
// embedded. Re-resolve BOOKING_URL's redirect target if the schedule ever
// changes and this embed goes blank.
const BOOKING_EMBED_URL =
  "https://calendar.google.com/calendar/appointments/schedules/AcZssZ3q29yVNyePP8DQDgwpl_2DfSCwd602bQR0uaNY3ENUqgTbR1bJN6JNpsdNj6HcTdDmunkAHNMl?gv=true";

export const metadata: Metadata = {
  title: "Thanks — RemoHires",
  description: "We've received your request. Book a free 15-minute call to speed things up.",
  robots: { index: false, follow: false },
};

const perks = [
  "15-Minute Call",
  "Google Meet",
  "No obligation",
  "Discuss your business's bottlenecks",
  "See how the automation would run for you",
];

export default function AiSmbThankYouPage() {
  return (
    <>
      <header>
        <div className="wrap nav">
          <a className="brand" href="https://remohires.com" target="_blank" rel="noopener">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img alt="RemoHires" src="/ai-smb-mark.png" />
            <span>
              <span className="r">Remo</span>
              <span className="h">Hires</span>
            </span>
          </a>
        </div>
      </header>

      <section className="ty-section">
        <div className="wrap ty-wrap">
          <span className="chip">Request received</span>
          <h1 style={{ marginTop: 16 }}>✅ Thanks! We&rsquo;ve received your request.</h1>
          <p className="ty-sub">Our team will review your business&rsquo;s bottlenecks shortly.</p>
          <p className="ty-sub">
            To speed up the process, book a free 15-minute call with our team using the calendar
            below.
          </p>

          <div className="booking">
            <div className="booking-head">
              <span className="chip">Free call</span>
              <h2>Book your call — no obligation</h2>
            </div>
            <ul className="booking-list">
              {perks.map((perk) => (
                <li key={perk}>{perk}</li>
              ))}
            </ul>

            <div className="booking-embed">
              <iframe src={BOOKING_EMBED_URL} title="Book a Call" loading="lazy" />
            </div>

            <a href={BOOKING_URL} target="_blank" rel="noopener" className="btn booking-cta">
              Open booking page in a new tab →
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
      </section>

      <footer className="foot">
        <div className="wrap nav">
          <a className="brand" href="https://remohires.com" target="_blank" rel="noopener">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img alt="RemoHires" src="/ai-smb-mark.png" style={{ width: 26, height: 26 }} />
          </a>
          <span>
            RemoHires — a dedicated AI developer building custom automation for small
            businesses.{" "}
            <a href="mailto:info@remohires.com">info@remohires.com</a>
          </span>
        </div>
      </footer>
    </>
  );
}
