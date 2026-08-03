import type { Metadata } from "next";
import "../ai-talent2.css";

const BOOKING_URL = "https://calendar.app.google/opczJKFLUCcXyLN26";

export const metadata: Metadata = {
  title: "Thanks — RemoHires",
  description: "We've received your request. Book a free 15-minute discovery call to speed things up.",
  robots: { index: false, follow: false },
};

const perks = [
  "15-Minute Discovery Call",
  "Google Meet",
  "No obligation",
  "Discuss your hiring needs",
  "Get personalized recommendations",
];

export default function AiTalent2ThankYouPage() {
  return (
    <>
      <header>
        <div className="wrap nav">
          <a href="https://remohires.com" target="_blank" rel="noopener">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="logo" src="https://remohires.com/assets/logo-ClPCTLmH.svg" alt="RemoHires" />
          </a>
        </div>
      </header>

      <section className="ty-section">
        <div className="wrap ty-wrap">
          <span className="eyebrow">Request received</span>
          <h1 style={{ marginTop: 16 }}>✅ Thanks! We&rsquo;ve received your request.</h1>
          <p className="ty-sub">Our team will review your workflow needs shortly.</p>
          <p className="ty-sub">
            To speed up the process, book a free 15-minute Discovery Call with our team using the
            calendar below.
          </p>

          <div className="booking">
            <div className="booking-head">
              <span className="eyebrow">Free discovery call</span>
              <h2>Book your call — no obligation</h2>
            </div>
            <ul className="booking-list">
              {perks.map((perk) => (
                <li key={perk}>{perk}</li>
              ))}
            </ul>
            <a href={BOOKING_URL} target="_blank" rel="noopener" className="btn booking-cta">
              Book Your Discovery Call{" "}
              <svg fill="none" viewBox="0 0 24 24" strokeWidth={2.2}>
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
            <p className="booking-note">
              Booking is optional — we&rsquo;ve already got your request and will follow up either
              way.
            </p>
          </div>

          <a href="https://remohires.com" className="ty-back" target="_blank" rel="noopener">
            ← Back to RemoHires
          </a>
        </div>
      </section>

      <footer>
        <div className="wrap nav">
          <a href="https://remohires.com" target="_blank" rel="noopener">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="logo" src="https://remohires.com/assets/logo-ClPCTLmH.svg" alt="RemoHires" />
          </a>
          <span>
            © 2026 RemoHires · Dedicated AI-ready remote professionals ·{" "}
            <a href="mailto:info@remohires.com">info@remohires.com</a>
          </span>
        </div>
      </footer>
    </>
  );
}
