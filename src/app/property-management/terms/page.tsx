import type { Metadata } from "next";
import { TermsPage } from "@/app/_shared-lp/terms-page";

export const metadata: Metadata = {
  title: "Terms of Service | RemoHires",
};

export default function PropertyManagementTermsPage() {
  return <TermsPage home="/property-management" />;
}
