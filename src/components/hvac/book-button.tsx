"use client";

const BOOKING_URL = "https://calendar.app.google/opczJKFLUCcXyLN26";

// Booking button. All CTAs on this page point to the calendar link (books a call, no card).
// Deo: restyle via the .bookbtn class in hvac.css if you want it to match the site button exactly.
export function BookButton({ label = "Book 10 Minutes" }: { label?: string }) {
  return (
    <a
      className="bookbtn"
      href={BOOKING_URL}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "inline-block",
        background: "#0F2170",
        color: "#ffffff",
        fontWeight: 700,
        padding: "15px 30px",
        borderRadius: 9999,
        textDecoration: "none",
        fontSize: 16,
        lineHeight: 1,
      }}
      onClick={() => {
        if (typeof window !== "undefined" && window.fbq) {
          window.fbq("track", "Lead", {
            content_name: "HVAC Book 10 Minutes",
            content_category: "hvac",
          });
        }
      }}
    >
      {label}
    </a>
  );
}
