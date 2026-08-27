"use client";

import type { ReactNode } from "react";
import { openAuditModal } from "./audit-cta";

export function AuditTrigger({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <button type="button" className={className} onClick={openAuditModal}>
      {children}
    </button>
  );
}
