import type { Metadata } from "next";
import Script from "next/script";
import "./insurance-automation.css";
import { TopStrip } from "@/components/insurance-automation/top-strip";
import { SiteHeader } from "@/components/insurance-automation/site-header";
import { Reveal } from "@/components/insurance-automation/reveal";
import { BookCta } from "@/components/insurance-automation/book-cta";
import { MobileBookFab } from "@/components/insurance-automation/mobile-book-fab";
import { FlowCard, type FlowStepData } from "@/components/insurance-automation/flow-card";
import { Logo } from "@/components/insurance-automation/logo";
import {
  IconCheck,
  IconMail,
  IconCalendar,
  IconPhone,
  IconSearch,
  IconClock,
  IconUser,
  IconDoc,
  IconEdit,
  IconLayers,
  IconRepeat,
  IconMailCheck,
  IconZap,
} from "@/components/insurance-automation/icons";

export const metadata: Metadata = {
  title: "Insurance Agency Automation | Automate Repetitive Work",
  description:
    "Automate repetitive insurance agency workflows, from lead follow-ups and CRM updates to client communication and internal processes.",
};

const FLOW_STEPS: FlowStepData[] = [
  { icon: <IconUser />, label: "New Lead", tag: { text: "Trigger", pulse: true } },
  { icon: <IconCheck />, label: "Lead Captured" },
  { icon: <IconLayers />, label: "CRM Updated" },
  { icon: <IconMail />, label: "Follow-Up Sent" },
  { icon: <IconDoc />, label: "Quote Request Created" },
  { icon: <IconCheck />, label: "Agent Notified", tag: { text: "Done", variant: "good" }, done: true },
];

const PROBLEM_ITEMS = [
  { icon: <IconEdit />, label: "Manually entering leads" },
  { icon: <IconMail />, label: "Sending follow-up emails" },
  { icon: <IconLayers />, label: "Updating CRM records" },
  { icon: <IconSearch />, label: "Checking quote status" },
  { icon: <IconMailCheck />, label: "Requesting missing information" },
  { icon: <IconClock />, label: "Sending reminders" },
  { icon: <IconRepeat />, label: "Moving data between systems" },
  { icon: <IconPhone />, label: "Notifying agents" },
  { icon: <IconCalendar />, label: "Scheduling appointments" },
  { icon: <IconDoc />, label: "Generating repetitive reports" },
];

const AUTOMATIONS = [
  {
    icon: <IconUser />,
    title: "Lead Follow-Up",
    body: "A new lead comes in and everything moves on its own: the CRM updates, the right person gets assigned, and follow-up goes out before the lead has a chance to go cold.",
  },
  {
    icon: <IconDoc />,
    title: "Quote Workflow",
    body: "No more chasing missing paperwork or checking quote status by hand. Requests move forward on their own, and your team hears about it the moment something needs their attention.",
  },
  {
    icon: <IconMail />,
    title: "Client Communication",
    body: "Reminders, confirmations, follow-ups, and document requests go out right on schedule, in your agency's voice, without anyone having to remember to send them.",
  },
];

const AUTOMATION_CHIPS = [
  "CRM updates",
  "Email automation",
  "Renewal reminders",
  "Appointment scheduling",
  "Document collection",
  "Internal notifications",
  "Reporting",
  "Data synchronization",
  "Lead routing",
  "Task creation",
];

const HOW_IT_WORKS = [
  { num: "01", title: "Identify", body: "We sit down with your team and find out exactly what's eating their time." },
  { num: "02", title: "Automate", body: "We build it right into the tools you already use. No new software, no retraining." },
  { num: "03", title: "Improve", body: "We keep an eye on it and sharpen it as your agency grows and changes." },
];

const TOOL_CHIPS = [
  "CRM",
  "Email",
  "Calendar",
  "Forms",
  "Spreadsheets",
  "Communication Tools",
  "Insurance Management Systems",
  "Lead Sources",
  "APIs",
];

export default function InsuranceAutomationPage() {
  return (
    <div className="ia">
      {/* Cal element-click embed init — attaches click handling to every element with
          data-cal-link/data-cal-namespace (see BookCta). GTM itself is already loaded
          sitewide in the root layout, so it's not re-initialized here. */}
      <Script id="cal-embed-insurance-automation" strategy="afterInteractive">
        {`
          (function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if (typeof namespace === "string") { cal.ns[namespace] = cal.ns[namespace] || api; p(cal.ns[namespace], ar); p(cal, ["initNamespace", namespace]); } else p(cal, ar); return; } p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
          Cal("init", "15mins", { origin: "https://app.cal.com" });
          Cal.config = Cal.config || {};
          Cal.config.forwardQueryParams = true;
          Cal.ns["15mins"]("ui", { "cssVarsPerTheme": { "light": { "cal-brand": "#0F2170" }, "dark": { "cal-brand": "#00F7DF" } }, "hideEventTypeDetails": false, "layout": "month_view" });
        `}
      </Script>

      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <TopStrip />
      <SiteHeader />
      <MobileBookFab />

      <main id="main">
        <div className="hero-shell">
          <section id="top" className="hero" aria-labelledby="hero-heading">
            <div className="wrap">
              <div className="grid">
                <div>
                  <span className="eyebrow">Insurance Agency Automation</span>
                  <h1 id="hero-heading">Automate The Work That Slows Your Insurance Agency Down.</h1>
                  <p className="sub">
                    Your team loses hours every week to lead follow-ups, quote paperwork, client emails, and data
                    entry that never stops piling up. We build automations that take that work off their plate, so
                    they can focus on selling and taking care of clients.
                  </p>
                  <div id="hero-cta" style={{ marginTop: 8 }}>
                    <BookCta ctaName="hero" className="btn primary bookbtn">
                      Book an Automation Call
                    </BookCta>
                  </div>
                  <p className="hero-microcopy">We&rsquo;ll identify the processes worth automating first.</p>
                </div>

                <div className="visualcol">
                  <Reveal className="callcard">
                    <div className="bar">
                      <div className="dot">
                        <span className="ic" aria-hidden="true">
                          <IconZap />
                        </span>
                      </div>
                      <div>
                        <b>Automation In Motion</b>
                        <small>What happens without anyone lifting a finger</small>
                      </div>
                      <span className="live-badge">
                        <span className="live-dot" aria-hidden="true" />
                        Live
                      </span>
                    </div>

                    <FlowCard steps={FLOW_STEPS} />

                    <p className="illus">This work happens automatically, in the tools your team already uses.</p>
                  </Reveal>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* ===== The Problem ===== */}
        <section id="problem" aria-labelledby="problem-heading">
          <div className="wrap">
            <Reveal className="sec-head">
              <span className="eyebrow">The Problem</span>
              <h2 id="problem-heading">Your Team Shouldn&rsquo;t Have To Do The Same Work Over And Over.</h2>
              <p>
                Every lead, every quote, every policy moves through the same manual steps. None of that time gets
                you closer to a sale or a happier client. It just gets repeated, over and over, week after week.
              </p>
            </Reveal>
            <div className="problem-grid">
              {PROBLEM_ITEMS.map((item) => (
                <Reveal key={item.label} className="problem-item">
                  <span className="ic" aria-hidden="true">
                    {item.icon}
                  </span>
                  <span>{item.label}</span>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ===== Automations ===== */}
        <section id="automations" className="tint" aria-labelledby="automations-heading">
          <div className="wrap">
            <Reveal className="sec-head">
              <span className="eyebrow">Automations</span>
              <h2 id="automations-heading">The Work We Take Off Your Plate.</h2>
              <p>Not generic software. Automation built around the repetitive work already eating into your team&rsquo;s week.</p>
            </Reveal>
            <div className="grid3">
              {AUTOMATIONS.map((a) => (
                <Reveal key={a.title} className="card">
                  <span className="ic" aria-hidden="true">
                    {a.icon}
                  </span>
                  <h3>{a.title}</h3>
                  <p>{a.body}</p>
                </Reveal>
              ))}
            </div>

            <div className="chip-row">
              {AUTOMATION_CHIPS.map((c) => (
                <Reveal key={c} className="chip">
                  {c}
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ===== How It Works ===== */}
        <section id="how-it-works" aria-labelledby="how-heading">
          <div className="wrap">
            <Reveal className="sec-head">
              <span className="eyebrow">How It Works</span>
              <h2 id="how-heading">You Run The Agency. We&rsquo;ll Handle The Automation.</h2>
            </Reveal>
            <div className="grid3">
              {HOW_IT_WORKS.map((s) => (
                <Reveal key={s.num} className="card">
                  <div className="step-num">{s.num}</div>
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ===== Tools / integration positioning ===== */}
        <section className="tint" aria-labelledby="tools-heading">
          <div className="wrap">
            <Reveal className="sec-head" style={{ marginBottom: 0 }}>
              <span className="eyebrow">No New Software To Learn</span>
              <h2 id="tools-heading">Works With The Tools Your Agency Already Uses.</h2>
              <p>
                You already have a CRM, a calendar, and an inbox. We build automation around what you have, not a
                new system you have to learn.
              </p>
            </Reveal>
            <div className="chip-row">
              {TOOL_CHIPS.map((c) => (
                <Reveal key={c} className="chip">
                  {c}
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ===== Final CTA ===== */}
        <section id="final-cta" aria-labelledby="final-cta-heading">
          <div className="wrap">
            <Reveal className="final">
              <span className="eyebrow">Ready To Automate?</span>
              <h2 id="final-cta-heading" style={{ marginTop: 12 }}>
                Find The Work Your Agency Shouldn&rsquo;t Be Doing Manually.
              </h2>
              <p>
                Book a call and we&rsquo;ll walk through your current process together. No pitch, just a clear look
                at what&rsquo;s worth automating first.
              </p>
              <div style={{ marginTop: 20 }}>
                <BookCta ctaName="final" className="btn primary bookbtn">
                  Book an Automation Call
                </BookCta>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap">
          <Logo variant="footer" className="logo-img" />
          <div className="frow">
            <p>Automation systems for insurance agencies and business owners. remohires.com</p>
            <p>
              &copy; 2026 RemoHires &middot; <a href="/termsofservice">Terms</a> &middot;{" "}
              <a href="/privacypolicy">Privacy</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
