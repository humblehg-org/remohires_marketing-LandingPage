import type { Metadata } from "next";
import { PrivacyPage } from "@/app/_shared-lp/privacy-page";

export const metadata: Metadata = {
  title: "Privacy Policy | RemoHires",
};

export default function CleaningPrivacyPage() {
  return <PrivacyPage home="/cleaning" />;
}
