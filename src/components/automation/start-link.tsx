"use client";

import type { ReactNode } from "react";
import { handleStartClick } from "./start-cta";

export function StartLink({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <a href="#start" className={className} onClick={handleStartClick}>
      {children}
    </a>
  );
}
