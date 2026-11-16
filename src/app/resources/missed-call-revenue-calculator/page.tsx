import type { Metadata } from "next";
import { CleaningResourceShell } from "@/app/_shared-lp/cleaning-resource-shell";
import MissedCallCalculatorClient from "./missed-call-calculator-client";

export const metadata: Metadata = {
  title: "Missed-Call Revenue Calculator | RemoHires for Cleaning Companies",
  description:
    "See what unanswered calls cost your cleaning business in a year, and how much a remote front-office hire could recover.",
  formatDetection: { telephone: false, email: false },
};

export default function MissedCallRevenueCalculatorPage() {
  return (
    <CleaningResourceShell>
      <MissedCallCalculatorClient />
    </CleaningResourceShell>
  );
}
