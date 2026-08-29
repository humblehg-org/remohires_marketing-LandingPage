"use client";

import { sendGTMEvent } from "@next/third-parties/google";
import type { ReactNode } from "react";

const CAL_CONFIG = JSON.stringify({
  layout: "month_view",
  useSlotsViewOnSmallScreen: "true",
  theme: "auto",
});

/**
 * Booking CTA — every "Book an Automation Call" button on the page. Clicking opens
 * the Cal.com element-click embed (wired up globally by the script in page.tsx);
 * this component only adds the data-cal-* attributes Cal's embed.js looks for, plus
 * a GTM click event so booking intent shows up in the dataLayer like other CTAs on
 * the site. GTM is already loaded sitewide in the root layout — not re-initialized here.
 */
export function BookCta({
  ctaName,
  className,
  style,
  children,
}: {
  ctaName: string;
  className?: string;
  style?: React.CSSProperties;
  children: ReactNode;
}) {
  return (
    <a
      href="#"
      data-cal-link="team/remohires/15mins"
      data-cal-namespace="15mins"
      data-cal-config={CAL_CONFIG}
      className={className}
      style={style}
      onClick={(e) => {
        e.preventDefault();
        sendGTMEvent({ event: "booking_cta_click", cta_name: ctaName, page_path: "/insurance-automation" });
      }}
    >
      {children}
    </a>
  );
}
