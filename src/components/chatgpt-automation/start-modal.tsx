"use client";

import { useEffect, useRef, useState } from "react";
import { OPEN_START_MODAL_EVENT } from "./start-cta";
import { MatchForm } from "./match-form";
import styles from "@/app/chatgpt-automation/page.module.css";

/**
 * Renders nothing until any "Start for $49" CTA on the page dispatches
 * OPEN_START_MODAL_EVENT (see start-cta.ts) — mount once near the page
 * root. Owns the open/close state so every CTA can stay a plain link
 * without prop-drilling a shared modal state through page.tsx.
 */
export function StartModal() {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onOpen() {
      setOpen(true);
    }
    window.addEventListener(OPEN_START_MODAL_EVENT, onOpen);
    return () => window.removeEventListener(OPEN_START_MODAL_EVENT, onOpen);
  }, []);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKeyDown);

    const focusTimer = window.setTimeout(() => {
      panelRef.current
        ?.querySelector<HTMLInputElement>('input[type="text"], input[type="email"]')
        ?.focus();
    }, 100);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
      window.clearTimeout(focusTimer);
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className={styles.modalOverlay} role="presentation" onMouseDown={() => setOpen(false)}>
      <div
        className={styles.modalPanel}
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Start your 14-day sprint"
        onMouseDown={(e) => e.stopPropagation()}
      >
        <MatchForm onClose={() => setOpen(false)} />
      </div>
    </div>
  );
}
