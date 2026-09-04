"use client";

import type { ReactNode } from "react";
import { handleCallbackClick } from "./callback-cta";

/**
 * Booking CTA — every "Request a Call" button on the page. Clicking opens
 * the phone-callback modal (see callback-modal.tsx) instead of the previous
 * Cal.com booking embed, plus a GTM click event so intent still shows up in
 * the dataLayer like before. GTM is already loaded sitewide in the root
 * layout — not re-initialized here.
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
    <a href="#" className={className} style={style} onClick={handleCallbackClick(ctaName)}>
      {children}
    </a>
  );
}
