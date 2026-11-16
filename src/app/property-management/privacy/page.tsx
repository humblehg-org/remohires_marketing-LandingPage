import type { Metadata } from "next";
import { PrivacyPage } from "@/app/_shared-lp/privacy-page";

export const metadata: Metadata = {
  title: "Privacy Policy | RemoHires",
  formatDetection: { telephone: false, email: false },
};

export default function PropertyManagementPrivacyPage() {
  return <PrivacyPage home="/property-management" />;
}
