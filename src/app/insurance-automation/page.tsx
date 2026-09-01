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
  title: "Hire An Insurance Automation Developer | RemoHires",
  description:
    "Place a dedicated automation developer, specialized in insurance workflows, directly on your team. Not a generalist VA or outside agency - a specialist hire who builds and manages your automations from within.",
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
    body: "Your developer builds it so a new lead moves on its own: the CRM updates, the right person gets assigned, and follow-up goes out before the lead has a chance to go cold.",
  },
  {
    icon: <IconDoc />,
    title: "Quote Workflow",
    body: "No more chasing missing paperwork or checking quote status by hand. Your hire keeps requests moving forward on their own, and flags your team the moment something needs attention.",
  },
  {
    icon: <IconMail />,
    title: "Client Communication",
    body: "Reminders, confirmations, follow-ups, and document requests go out right on schedule, in your agency's voice, managed day-to-day by the automation specialist on your team.",
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
  { num: "01", title: "Match", body: "We learn your agency's workflows and tools, then match you with a vetted automation developer who has insurance industry experience." },
  { num: "02", title: "Place", body: "Your developer joins your team directly, working inside the CRM, calendar, and inbox you already use. No new software, no retraining." },
  { num: "03", title: "Manage & Grow", body: "They stay on as part of your team, managing what's live and building new automations as your agency grows and changes." },
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
                  <span className="eyebrow">Insurance Automation Hiring</span>
                  <h1 id="hero-heading">Lead Follow-Ups, Quotes, And Data Entry Finally Off Your Plate</h1>
                  <p className="sub">
                    You get a dedicated automation developer who owns your automations end-to-end, working from
                    inside your team - not a generalist VA juggling ten other clients, not an outside agency handing
                    off a project and disappearing. Someone who builds it, runs it, and keeps it working as your
                    agency grows.
                  </p>
                  <div id="hero-cta" style={{ marginTop: 8 }}>
                    <BookCta ctaName="hiring-hero" className="btn primary bookbtn">
                      Book a Hiring Call
                    </BookCta>
                  </div>
                  <p className="hero-microcopy">We&rsquo;ll match you with a vetted automation developer for your agency.</p>
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
                        <b>Your Hire, In Action</b>
                        <small>What your automation developer builds and manages</small>
                      </div>
                      <span className="live-badge">
                        <span className="live-dot" aria-hidden="true" />
                        Live
                      </span>
                    </div>

                    <FlowCard steps={FLOW_STEPS} />

                    <p className="illus">
                      Built and managed by your dedicated automation developer, inside the tools your team already uses.
                    </p>
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
                That&rsquo;s exactly the kind of work a dedicated automation hire takes off their plate.
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
              <h2 id="automations-heading">The Work Your Dedicated Hire Will Own.</h2>
              <p>
                Not a generic VA, not outsourced software. Your automation developer works inside your agency,
                building and owning the systems that solve the repetitive work already eating into your team&rsquo;s
                week.
              </p>
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
              <h2 id="how-heading">You Run The Agency. Your New Hire Handles The Automation.</h2>
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
                You already have a CRM, a calendar, and an inbox. Your dedicated hire works inside what you already
                have, not a new system you have to learn.
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
              <span className="eyebrow">Ready To Hire?</span>
              <h2 id="final-cta-heading" style={{ marginTop: 12 }}>
                Find The Right Automation Developer For Your Agency.
              </h2>
              <p>
                Book a call and we&rsquo;ll walk through your agency&rsquo;s workflows together. No pitch, just a
                clear look at whether a dedicated automation hire is the right fit.
              </p>
              <div style={{ marginTop: 20 }}>
                <BookCta ctaName="hiring-final" className="btn primary bookbtn">
                  Book a Hiring Call
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
            <p>Dedicated automation developer hires for insurance agencies and business owners. remohires.com</p>
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
