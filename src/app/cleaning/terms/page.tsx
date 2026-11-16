import type { Metadata } from "next";
import { TermsPage } from "@/app/_shared-lp/terms-page";

export const metadata: Metadata = {
  title: "Terms of Service | RemoHires",
  formatDetection: { telephone: false, email: false },
};

export default function CleaningTermsPage() {
  return <TermsPage home="/cleaning" />;
}
