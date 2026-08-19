"use client";

import type { ReactNode } from "react";
import { handleStartClick } from "./start-cta";

/**
 * Replaces every `<a href="#start" class="js-start">` in the original HTML.
 * Client-only because it needs the click handler; kept tiny and reused
 * everywhere instead of duplicating the scroll/focus/track logic.
 */
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
