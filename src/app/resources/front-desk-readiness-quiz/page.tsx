import type { Metadata } from "next";
import { CleaningResourceShell } from "@/app/_shared-lp/cleaning-resource-shell";
import ReadinessQuizClient from "./readiness-quiz-client";

export const metadata: Metadata = {
  title: "Front-Desk Readiness Quiz | RemoHires for Cleaning Companies",
  description:
    "A 2-minute check: is your cleaning business ready to hand off the front desk to a remote hire? Get a score and a tailored next step.",
  formatDetection: { telephone: false, email: false },
};

export default function FrontDeskReadinessQuizPage() {
  return (
    <CleaningResourceShell>
      <ReadinessQuizClient />
    </CleaningResourceShell>
  );
}
