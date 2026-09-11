import type { Metadata } from "next";
import HvacNewVersusClient from "./hvac-new-versus-client";

export const metadata: Metadata = {
  title: "Same Job. Two Invoices. — RemoHires",
};

export default function HvacNewVersusPage() {
  return <HvacNewVersusClient />;
}
