import type { Metadata } from "next";
import HvacNewClient from "./hvac-new-client";

export const metadata: Metadata = {
  title: "Outbound For HVAC Contractors",
};

export default function HvacNewPage() {
  return <HvacNewClient />;
}
