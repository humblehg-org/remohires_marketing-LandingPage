import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage, type LegalSection } from "../legal-page";

export const metadata: Metadata = {
  title: "Terms of Service | RemoHires",
};

/* Copied from https://remohires.com/terms. Section 5 differs from the
   source: it is titled "Replacement Guarantee (First [30] Days)", the
   numbered list is replaced by a single "Replacement first" paragraph, and
   the "Money back..." item is removed. */
const TERMS_SECTIONS: LegalSection[] = [
  {
    id: "what-remohires-does",
    title: "What RemoHires Does",
    body: (
      <>
        <p>{"RemoHires offers Custom Recruitment: we source and screen remote professionals from Indonesia for your business, then present a shortlist matched to your role. You choose who to hire. Once you hire someone, we handle the employment for you, including payroll, taxes, statutory compliance, benefits, and HR, so you can focus on the work. You direct the hire's day-to-day tasks. Employment can be full-time, part-time, or project based, and project work is mostly billed hourly."}</p>
      </>
    ),
  },
  {
    id: "custom-recruitment-is-free",
    title: "Custom Recruitment Is Free",
    body: (
      <>
        <p>{"Custom Recruitment is free. There is no recruitment fee, no placement fee, and no sourcing fee. You only pay once you decide to hire someone. There is no upfront cost, and pricing is provided on request as a custom quote for each role. You can request a quote at any time, and we confirm the price in writing before you commit."}</p>
      </>
    ),
  },
  {
    id: "how-billing-works",
    title: "How Billing Works",
    body: (
      <>
        <ul>
          <li>{"You pay only when you hire. Billing starts once your employee begins work."}</li>
          <li>{"Initial payment before start. An initial payment is required before the employee starts. We confirm the amount in writing with your quote."}</li>
          <li>{"Weekly invoices. After the employee starts, billing is weekly. Each weekly invoice covers the employee's salary, payroll, compliance, benefits, and a RemoHires service fee."}</li>
          <li>{"Custom pricing. Pricing is quoted per role rather than published as a fixed number, because it depends on the role, the skills, and whether the work is full-time, part-time, or project based."}</li>
          <li>{"Third-party costs. Any third-party costs you request (for example equipment) are billed separately if applicable."}</li>
        </ul>
      </>
    ),
  },
  {
    id: "cancellation",
    title: "Cancellation",
    body: (
      <>
        <p>{"You may cancel with [7] days written notice by emailing info@remohires.com. When you cancel, we stop future weekly billing at the end of the notice period. You remain responsible for amounts already earned up to that point, such as salary, payroll, and service fees for work already performed, and for the initial payment where the employee has started. Cancellation does not by itself trigger a refund, except under the guarantee in Section 5."}</p>
      </>
    ),
  },
  {
    id: "replacement-guarantee",
    title: "Replacement Guarantee (First [30] Days)",
    body: (
      <>
        <p>{"Our first commitment is to make the hire work, so replacement is the primary remedy and comes before any refund."}</p>
        <p>{"Replacement first. If the first person we place is not the right fit, we replace them free. If you are not satisfied in the first [30] days, you agree to let RemoHires resolve the issue and, where needed, place a suitable replacement hire. We work to place a replacement promptly."}</p>
        <p>{"Conditions (all apply):"}</p>
        <ul>
          <li>{"Engagement. You provided the role details and onboarding the hire needed, and you responded to the hire and to RemoHires within [2] business days when input was requested."}</li>
          <li>{"Timely notice. You raised the issue in writing within the first [30] days."}</li>
          <li>{"Cooperated with replacement. You engaged with at least one good-faith replacement attempt before requesting a refund."}</li>
          <li>{"Scope. The refund covers the RemoHires service fee for the first [30] days only. It excludes third-party costs and any shortfall caused by information, access, or responsiveness the hire needed but did not receive."}</li>
          <li>{"Once per client."}</li>
        </ul>
        <p>{"This keeps the guarantee genuinely reassuring for you while making replacement the default path and keeping the offer fair for everyone."}</p>
      </>
    ),
  },
  {
    id: "your-responsibilities",
    title: "Your Responsibilities",
    body: (
      <>
        <p>{"You agree to provide accurate role requirements, reasonable onboarding, lawful direction of the hire's work, and timely responses. You are responsible for how you direct and use the hire's work."}</p>
      </>
    ),
  },
  {
    id: "confidentiality",
    title: "Confidentiality",
    body: (
      <>
        <p>{"Each party keeps the other's non-public information confidential and uses it only to perform this engagement."}</p>
      </>
    ),
  },
  {
    id: "no-guarantee-of-specific-results",
    title: "No Guarantee of Specific Results",
    body: (
      <>
        <p>{"Beyond the remedy in Section 5, RemoHires does not promise specific business outcomes (for example a number of booked jobs or a revenue figure). Any example results shared in our marketing are illustrative unless stated otherwise."}</p>
      </>
    ),
  },
  {
    id: "limitation-of-liability",
    title: "Limitation of Liability",
    body: (
      <>
        <p>{"To the extent allowed by law, RemoHires' total liability for any claim relating to the service is limited to the fees you paid to RemoHires in the one month before the claim. RemoHires is not liable for indirect or consequential losses."}</p>
      </>
    ),
  },
  {
    id: "changes",
    title: "Changes",
    body: (
      <>
        <p>{"RemoHires may update these terms. Material changes will be communicated to active clients. Continued use after an update means acceptance of the updated terms."}</p>
      </>
    ),
  },
  {
    id: "sms-program",
    title: "SMS Program",
    body: (
      <>
        <p>{"RemoHires may provide SMS/text messaging communications to users who separately and expressly opt in to receive them. By opting in, you authorize RemoHires to send text messages related to recruitment, hiring, interviews, scheduling, account or service updates, support, and other services or communications you have requested from RemoHires. Message frequency varies based on your interactions with RemoHires and the services you request. Message and data rates may apply."}</p>
      </>
    ),
  },
  {
    id: "how-to-opt-out",
    title: "How to Opt Out",
    body: (
      <>
        <p>{"You may stop receiving SMS messages at any time by replying "}<b>{"STOP"}</b>{" to a RemoHires text message. After you send STOP, you may receive a confirmation message and will no longer receive SMS messages from the applicable messaging program unless you subsequently opt in again."}</p>
      </>
    ),
  },
  {
    id: "help",
    title: "Help",
    body: (
      <>
        <p>{"For help with RemoHires SMS messages, reply "}<b>{"HELP"}</b>{" to the message or contact us at info@remohires.com."}</p>
      </>
    ),
  },
  {
    id: "consent",
    title: "Consent",
    body: (
      <>
        <p>{"SMS consent is voluntary and is "}<b>{"not a condition of purchasing or using RemoHires services"}</b>{". Your consent to receive SMS messages applies only to the RemoHires messaging program for which you provided consent."}</p>
      </>
    ),
  },
  {
    id: "mobile-number",
    title: "Mobile Number",
    body: (
      <>
        <p>{"You are responsible for providing an accurate mobile phone number and updating it if your number changes. You represent that you are authorized to provide the mobile number you use to opt in to RemoHires SMS communications."}</p>
      </>
    ),
  },
  {
    id: "carriers",
    title: "Carriers",
    body: (
      <>
        <p><b>{"Carriers are not liable for any delayed or undelivered messages"}</b>{". SMS delivery may be affected by your mobile carrier, network availability, device, or other factors outside RemoHires' control. For information about how RemoHires collects and uses personal information and SMS consent information, please see our "}<Link href="/cleaning/privacy">{"Privacy Policy"}</Link>{"."}</p>
      </>
    ),
  },
];

export default function CleaningTermsPage() {
  return (
    <LegalPage
      eyebrow="Legal & Agreement"
      title="Terms of Service"
      intro="These Terms of Service govern your access to and use of RemoHires platform and services. Please read them carefully."
      meta={[
        { label: "Company", value: "REMOHIRES.COM LLC" },
        { label: "Contact", value: <a href="mailto:info@remohires.com">info@remohires.com</a> },
      ]}
      sections={TERMS_SECTIONS}
    />
  );
}
