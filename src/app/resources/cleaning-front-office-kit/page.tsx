import type { Metadata } from "next";
import { CleaningResourceShell } from "@/app/_shared-lp/cleaning-resource-shell";
import FrontOfficeKitClient from "./front-office-kit-client";

export const metadata: Metadata = {
  title: "The Cleaning Front-Office Kit | RemoHires",
  description:
    "A free kit of call scripts, quote follow-up templates, and SOPs that turn missed calls into booked cleaning jobs.",
  formatDetection: { telephone: false, email: false },
};

export default function CleaningFrontOfficeKitPage() {
  return (
    <CleaningResourceShell>
      <FrontOfficeKitClient />
    </CleaningResourceShell>
  );
}
