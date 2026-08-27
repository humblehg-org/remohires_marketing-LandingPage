import type { Metadata, Viewport } from "next";
import styles from "./page.module.css";
import { Logo } from "@/components/calculator/logo";
import { EstimateCalculator } from "@/components/calculator/estimate-calculator";

export const metadata: Metadata = {
  title: "Dead Estimate Calculator | RemoHires",
  description:
    "Move the sliders with your own numbers to see how much is sitting in the quotes you already sent. Illustrative estimate, not a promise.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function CalculatorPage() {
  return (
    <div className={styles.page}>
      <div className={styles.wrap}>
        <Logo className={styles.logo} />

        <span className={styles.eyebrow}>Free Tool</span>
        <h1 className={styles.heading}>How Much Is Sitting In The Quotes You Already Sent?</h1>
        <p className={styles.sub}>
          Move the sliders with your own numbers. This is an estimate from your inputs, not a promise. We
          pull the real number from your system on a free 10-minute audit.
        </p>

        <EstimateCalculator />

        <p className={styles.note}>
          Illustrative, based on the numbers you enter. Every quote you sent already cost you a truck roll
          and an hour, so that money is spent whether the job books or not. On a free audit we count the
          real pile from your system, sort it by value and age, and hand you the list. You keep it either
          way.
        </p>
      </div>

      <footer className={styles.footer}>
        <div className={styles.footerBrand}>RemoHires</div>
        <div className={styles.footerLinks}>
          <a href="/termsofservice">Terms</a> &middot; <a href="/privacypolicy">Privacy</a>
        </div>
        <div className={styles.footerBottom}>
          &copy; 2026 RemoHires &middot; PT Sentra Talenta Unggul &middot; (504) 265-1063
        </div>
      </footer>
    </div>
  );
}
