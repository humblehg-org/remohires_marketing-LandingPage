import type { Metadata } from "next";
import PropertyManagementClient from "./property-management-client";

export const metadata: Metadata = {
  title: "Hire Vetted Remote Staff for Property Management | RemoHires",
  description:
    "RemoHires finds, screens, and employs full-time remote staff for property management companies: bookkeeping, document processing, leasing coordination, and tenant support. Shortlist in 5 to 10 days, no shortlist cost.",
};

export default function PropertyManagementPage() {
  return <PropertyManagementClient />;
}
