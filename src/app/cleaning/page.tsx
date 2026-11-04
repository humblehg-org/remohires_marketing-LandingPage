import type { Metadata } from "next";
import CleaningClient from "./cleaning-client";

export const metadata: Metadata = {
  title: "Hire Vetted Remote Staff for Your Cleaning Business | RemoHires",
  description:
    "RemoHires finds, screens, and employs full-time remote staff for cleaning companies: appointment setting, customer service, scheduling, and admin. Shortlist in 5 to 10 days, no shortlist cost.",
};

export default function CleaningPage() {
  return <CleaningClient />;
}
