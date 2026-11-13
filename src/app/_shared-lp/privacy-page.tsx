import { LegalPage, type LegalSection } from "./legal-page";

/* Copied unchanged from https://remohires.com/privacy. Shared by
   /cleaning/privacy and /property-management/privacy. */
const PRIVACY_SECTIONS: LegalSection[] = [
  {
    id: "what-this-covers",
    title: "What This Covers",
    body: (
      <>
        <p>{"This policy explains what information we collect when you visit our websites or submit a form, how we use it, and the choices you have."}</p>
      </>
    ),
  },
  {
    id: "information-we-collect",
    title: "Information We Collect",
    body: (
      <>
        <ul>
          <li>{"Information you give us. When you submit a form (for example the custom quote or contact form), we collect your name, email address, and any details you provide about your business or hiring needs."}</li>
          <li>{"Information collected automatically. When you visit our site we collect standard technical and usage data such as IP address, device and browser type, pages viewed, and referring links, through cookies and similar technologies."}</li>
          <li>{"Advertising and analytics identifiers. We use tools such as Google Analytics, Google Ads, and the Meta (Facebook) Pixel, which may set cookies and collect identifiers to measure and improve our advertising."}</li>
        </ul>
      </>
    ),
  },
  {
    id: "how-we-use-information",
    title: "How We Use Information",
    body: (
      <>
        <ul>
          <li>{"To respond to your inquiry and follow up about our services."}</li>
          <li>{"To provide, operate, and improve our recruitment services and the employment we handle for hires you make."}</li>
          <li>{"To measure and improve our marketing and website performance."}</li>
          <li>{"To send you relevant communications you have asked for or that relate to your inquiry. You can opt out at any time (see Section 7)."}</li>
        </ul>
      </>
    ),
  },
  {
    id: "how-we-share-information",
    title: "How We Share Information",
    body: (
      <>
        <p>{"We do not sell your personal information. We share it only with:"}</p>
        <ul>
          <li>{"Service providers who help us operate, such as email and outreach tools (for example Google Workspace and our CRM/outreach platform), analytics, advertising platforms, and our payment providers (for example Zenit and Midtrans), and only as needed to provide their service to us."}</li>
          <li>{"Advertising measurement. Hashed identifiers such as your email or phone number may be shared in hashed form with advertising platforms such as Meta for advertising measurement and attribution (sometimes called advanced matching). This advertising measurement does not authorize or include the sharing of mobile phone numbers, SMS opt-in information, or SMS consent information with third parties or affiliates for their own marketing or promotional purposes."}</li>
          <li>{"Legal reasons, if required by law or to protect our rights."}</li>
        </ul>
      </>
    ),
  },
  {
    id: "cookies-and-tracking",
    title: "Cookies and Tracking",
    body: (
      <>
        <p>{"We use cookies and similar technologies for site functionality, analytics, and advertising (including Google Ads and the Meta Pixel). You can control cookies through your browser settings. Where required, we will ask for your consent before setting non-essential cookies."}</p>
      </>
    ),
  },
  {
    id: "data-retention",
    title: "Data Retention and International Transfer",
    body: (
      <>
        <p>{"We keep your information only as long as needed for the purposes above or as required by law. RemoHires operates from Indonesia and works with clients and providers in the United States and other countries, so your information may be processed in those locations."}</p>
      </>
    ),
  },
  {
    id: "your-choices-and-rights",
    title: "Your Choices and Rights",
    body: (
      <>
        <ul>
          <li>{"Opt out of emails. Reply \"stop\" to any email, or use the unsubscribe option, and we will stop sending marketing messages."}</li>
          <li>{"Access, correct, or delete. You may ask us to access, correct, or delete your personal information by emailing info@remohires.com."}</li>
          <li>{"Depending on where you live, you may have additional rights under laws such as the GDPR or US state privacy laws. Contact us and we will honor applicable rights."}</li>
        </ul>
      </>
    ),
  },
  {
    id: "children",
    title: "Children",
    body: (
      <>
        <p>{"Our services are for businesses and are not directed to children. We do not knowingly collect information from anyone under 16."}</p>
      </>
    ),
  },
  {
    id: "changes",
    title: "Changes",
    body: (
      <>
        <p>{"We may update this policy. The \"last updated\" date above shows the latest version. Material changes will be posted on this page."}</p>
      </>
    ),
  },
  {
    id: "contact",
    title: "Contact",
    body: (
      <>
        <p>{"Questions about this policy or your data: info@remohires.com"}</p>
      </>
    ),
  },
  {
    id: "sms-text",
    title: "SMS / Text Messaging",
    body: (
      <>
        <ul>
          <li>{"If you provide your mobile phone number and separately opt in to receive text messages from RemoHires, we may send you SMS/text messages related to your interactions with RemoHires and the services you request. These messages may include recruitment and hiring updates, interview or scheduling communications, account or service notifications, support communications, and other service-related information"}</li>
          <li>{"Message frequency varies based on your interactions with RemoHires and the services you request. Message and data rates may apply."}</li>
          <li>{"You may opt out of SMS messages at any time by replying STOP to a RemoHires text message. For help, reply HELP or contact us at info@remohires.com."}</li>
          <li>{"Your consent to receive SMS messages is voluntary and is not a condition of purchasing or using RemoHires services."}</li>
          <li>{"RemoHires does not sell, rent, or share your mobile phone number, SMS opt-in information, or SMS consent information with third parties or affiliates for their own marketing or promotional purposes. Mobile information may be shared with service providers only as reasonably necessary to provide, operate, and support RemoHires' messaging services."}</li>
          <li>{"SMS messages are delivered through mobile network providers, and RemoHires cannot guarantee that every message will be delivered without delay or interruption."}</li>
        </ul>
      </>
    ),
  },
];

export function PrivacyPage({ home }: { home: string }) {
  return (
    <LegalPage
      home={home}
      eyebrow="Privacy & Security"
      title="Privacy Policy"
      intro="We believe transparency builds trust. Learn how we collect, use and safeguard your personal information when you use RemoHires."
      meta={[
        { label: "Who we are", value: "REMOHIRES.COM LLC" },
        { label: "Contact", value: <a href="mailto:info@remohires.com">info@remohires.com</a> },
      ]}
      sections={PRIVACY_SECTIONS}
    />
  );
}
