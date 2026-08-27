"use client";

import { useEffect, useState } from "react";
import styles from "@/app/homeservices/page.module.css";
import { openAuditModal } from "./audit-cta";

/**
 * Mobile navbar "Get Free Audit" button. Hides once the user scrolls past
 * 50px, reappears once they scroll back to the very top. A plain passive
 * scroll listener toggling one class is all this needs — no observer, no
 * animation loop. The desktop nav button is a separate element entirely
 * (see page.tsx) and is never touched by this.
 */
export function MobileNavCta() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    function onScroll() {
      setHidden((prev) => {
        const next = window.scrollY > 50;
        return prev === next ? prev : next;
      });
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      className={`${styles.btn} ${styles.navMobile} ${hidden ? styles.navMobileHidden : ""}`}
      onClick={openAuditModal}
      aria-hidden={hidden}
      tabIndex={hidden ? -1 : 0}
    >
      Get Free Audit
    </button>
  );
}
