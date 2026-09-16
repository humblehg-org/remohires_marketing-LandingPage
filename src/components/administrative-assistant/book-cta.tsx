"use client";

import type { ReactNode, CSSProperties } from "react";
import { handleOpenLeadModal } from "./lead-cta";

/**
 * Every "Book A Free Call" button on the page. Clicking opens the lead-capture
 * modal (see lead-modal.tsx) instead of the static HTML's `href="#"` no-op,
 * mirroring the BookCta pattern used on /virtual-assistant and
 * /appointment-setter.
 */
export function BookCta({
  ctaName,
  className,
  style,
  children,
}: {
  ctaName: string;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
}) {
  return (
    <a href="#" className={className} style={style} onClick={handleOpenLeadModal(ctaName)}>
      {children}
    </a>
  );
}
