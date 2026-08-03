import type { Metadata } from "next";
import "../hvac.css";
import {
  IconCheckFilled,
  IconClock,
  IconVideo,
  IconShieldCheck,
  IconMessageCircle,
  IconStar,
} from "@/components/hvac/icons";

export const metadata: Metadata = {
  title: "Thanks! | RemoHires",
  description: "We've received your request. Book a free 15-minute Discovery Call.",
};

const BOOKING_URL = "https://calendar.app.google/opczJKFLUCcXyLN26?hl=en";
const BOOKING_POINTS = [
  { label: "15-Minute Discovery Call", icon: IconClock },
  { label: "Google Meet", icon: IconVideo },
  { label: "No obligation", icon: IconShieldCheck },
  { label: "Discuss your needs", icon: IconMessageCircle },
  { label: "Get personalized recommendations", icon: IconStar },
];

export default function ThankYouPage() {
  return (
    <main
      className="thankyou-page"
      style={{
        minHeight: "100dvh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "48px 22px",
      }}
    >
      <div className="thankyou-wrap">
        <a className="logo thankyou-logo" href="/" aria-label="RemoHires home" />
        <div className="thankyou" style={{ margin: "0 auto" }}>
          <div className="cdone">
            <span className="ic">
              <IconCheckFilled />
            </span>
            <div>
              <b>Thanks! We&rsquo;ve received your request.</b>
              <span>
                Our team will review your needs shortly. To speed up the
                process, book a free 15-minute Discovery Call with our team
                using the calendar below.
              </span>
            </div>
          </div>
          <div className="thankyou-booking">
            <div className="thankyou-list">
              {BOOKING_POINTS.map(({ label, icon: Icon }) => (
                <span key={label}>
                  <span className="ic">
                    <Icon />
                  </span>
                  {label}
                </span>
              ))}
            </div>
            <a
              className="btn thankyou-cta"
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Book Your Discovery Call ➔
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
