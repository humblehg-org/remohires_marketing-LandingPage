import type { Metadata } from "next";
import "./ai-automation.css";
import { Reveal } from "@/components/ai-automation/reveal";
import { MatchForm } from "@/components/ai-automation/match-form";
import { CountUp } from "@/components/ai-automation/count-up";
import { ScrollSpy } from "@/components/ai-automation/scroll-spy";

const SPY_IDS = ["what-they-handle", "cost", "how-it-works", "faq", "testimonial"];

export const metadata: Metadata = {
  title: "RemoHires — AI Automation That Actually Runs",
  description:
    "RemoHires matches you with a dedicated, full-time AI automation specialist who builds, monitors, fixes, and improves your workflows — for up to 83% less than hiring locally in the U.S.",
};

const handled = [
  {
    title: "Lead intake & follow-up",
    body: "Capture form submissions, notify the right owner, send first responses, and keep leads from sitting untouched.",
    icon: (
      <svg fill="none" viewBox="0 0 24 24" strokeWidth={2}>
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
      </svg>
    ),
  },
  {
    title: "Back-office automation",
    body: "Connect CRM, inbox, spreadsheets, forms, and internal tools so repetitive admin work moves automatically.",
    icon: (
      <svg fill="none" viewBox="0 0 24 24" strokeWidth={2}>
        <path d="M12 2v4M12 18v4M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M2 12h4M18 12h4M4.9 19.1l2.8-2.8M16.3 7.7l2.8-2.8" />
      </svg>
    ),
  },
  {
    title: "AI-assisted operations",
    body: "Use ChatGPT, Claude, Zapier, Make, n8n, and APIs to support reporting, documentation, support, and internal workflows.",
    icon: (
      <svg fill="none" viewBox="0 0 24 24" strokeWidth={2}>
        <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
      </svg>
    ),
  },
  {
    title: "Monitoring & improvement",
    body: "Check outputs, catch failures, update prompts, improve workflows, and make sure the automation keeps working.",
    icon: (
      <svg fill="none" viewBox="0 0 24 24" strokeWidth={2}>
        <path d="M3 3v18h18" />
        <path d="M7 15l4-4 3 3 5-6" />
      </svg>
    ),
  },
];

const runRow = [
  { b: "Build", s: "Map the process & build the workflow" },
  { b: "Run", s: "Monitor it and catch failures early" },
  { b: "Fix", s: "Troubleshoot when inputs or APIs break" },
  { b: "Improve", s: "Refine and expand it over time" },
];

const steps = [
  {
    n: "01",
    title: "Tell us who you are",
    body: "Drop your name, email, industry, and the process you want to automate. We'll follow up with a quick discovery call.",
  },
  {
    n: "02",
    title: "We match your automation specialist",
    body: "A dedicated, full-time AI automation specialist matched to your tools, workflow, and implementation needs.",
  },
  {
    n: "03",
    title: "They build and run it",
    body: "They build, run, monitor, and improve your automations. We handle payroll and compliance through our EOR.",
  },
];

const faqs = [
  {
    q: "Is this full-time or project-based?",
    a: "Full-time and dedicated — your automation specialist works only for your business, as part of your team. We handle payroll, contracts, and tax compliance through our Employer of Record service.",
  },
  {
    q: "How is this different from buying another AI automation tool?",
    a: "A tool gives you features. RemoHires gives you the person who turns those features into working automations for your business processes. You get a dedicated automation specialist who builds, monitors, fixes, and improves the workflows using the tools you already have.",
  },
  {
    q: "Will the automation actually be reliable?",
    a: "A human owns and reviews the workflow, monitors outputs, fixes issues, and improves the automation over time. AI stays behind the process unless you decide otherwise.",
  },
  {
    q: "How is this different from an agency?",
    a: "An agency splits attention across many clients and bills you for deliverables. You get one dedicated person on your team, working only for you — and you stay in control.",
  },
  {
    q: "I'm not technical.",
    a: "Good. You do not need to become the AI person. Your professional handles implementation while you define what “done right” looks like.",
  },
  {
    q: "Where is the talent based?",
    a: "Full-time professionals based in Indonesia — strong English, real time-zone overlap on a US-aligned schedule, and remote-first by default. It's a big part of how you get dedicated output for up to 83% less than a US hire.",
  },
  {
    q: "What does it cost?",
    a: "A monthly rate for a dedicated full-time professional — typically up to 83% less than a comparable US hire (~$152K/yr base). Your exact quote depends on the role and seniority.",
  },
];

export default function AiAutoPage() {
  return (
    <>
      <ScrollSpy ids={SPY_IDS} />
      <header>
        <div className="wrap nav">
          <a href="https://remohires.com" target="_blank" rel="noopener">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="logo" src="https://remohires.com/assets/logo-ClPCTLmH.svg" alt="RemoHires" />
          </a>
          <a href="#start" className="btn sm">
            Get matched{" "}
            <svg fill="none" viewBox="0 0 24 24" strokeWidth={2.2}>
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <span className="eyebrow">
              <svg fill="none" viewBox="0 0 24 24" strokeWidth={2}>
                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13A4 4 0 0119 7" />
              </svg>{" "}
              AI automation implementation
            </span>
            <h1 style={{ marginTop: 22 }}>
              AI automation
              <br />
              that actually runs.
              <br />
              <span className="t">Not another unfinished experiment.</span>
            </h1>
            <p className="sub">
              You don&rsquo;t need another AI tool or a vague technical hire. You need someone who
              can turn ChatGPT, Claude, Zapier, Make, n8n, and your existing systems into working
              automations that save time every week. RemoHires matches you with a dedicated AI
              automation specialist who builds, monitors, fixes, and improves the workflows.
            </p>
            <div className="stats">
              <div className="st">
                <div className="k">
                  <svg fill="none" viewBox="0 0 24 24" strokeWidth={2}>
                    <path d="M17 21v-2a4 4 0 00-4-4H7a4 4 0 00-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>{" "}
                  One owner
                </div>
                <div className="v">Dedicated to your automations</div>
              </div>
              <div className="st">
                <div className="k">
                  <svg fill="none" viewBox="0 0 24 24" strokeWidth={2}>
                    <path d="M12 2v4M12 18v4M4.9 4.9l2.8 2.8M2 12h4M18 12h4" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>{" "}
                  Build, run, improve
                </div>
                <div className="v">Automations, not experiments</div>
              </div>
              <div className="st">
                <div className="k">
                  <svg fill="none" viewBox="0 0 24 24" strokeWidth={2}>
                    <path d="M3 17l6-6 4 4 7-7" />
                    <path d="M17 8h4v4" />
                  </svg>{" "}
                  Up to 83%
                </div>
                <div className="v">Less than a local hire</div>
              </div>
            </div>
          </div>

          <div id="start">
            <MatchForm subject="New RemoHires lead (AI automation hero)" />
          </div>
        </div>
      </section>

      {/* CORE STORY / THE PROBLEM */}
      <section>
        <div className="wrap">
          <span className="eyebrow">Sound familiar</span>
          <h2 style={{ marginTop: 16 }}>
            You know what should be automated.
            <br />
            <span className="t">Nobody has time to build it.</span>
          </h2>
          <Reveal className="scene">
            Leads need follow-up. Reports need to be pulled. CRM fields need to be updated.
            Customer questions keep repeating. The work is obvious — but the automation never gets
            finished, tested, monitored, or improved.
          </Reveal>
          <Reveal className="lead">
            AI automation only helps when someone owns the full workflow. Without that owner,
            tools become experiments, prompts get outdated, workflows break quietly, and your
            team goes back to doing everything manually.
          </Reveal>
        </div>
      </section>

      {/* THE SOLUTION */}
      <section className="band">
        <div className="wrap">
          <span className="eyebrow">The automation owner</span>
          <h2 style={{ marginTop: 16 }}>
            Turn repetitive work into
            <br />
            <span className="t">AI automations that actually run.</span>
          </h2>
          <p className="lead">
            RemoHires gives you a dedicated, full-time AI automation specialist who builds
            practical automations around your real business processes. They connect your tools,
            document the workflow, monitor the output, fix issues, and improve the system over
            time. Not another AI tool. Not a one-off freelancer. One accountable person making
            automation work every day.
          </p>
        </div>
      </section>

      {/* BUILDS AND RUNS IT */}
      <section>
        <div className="wrap">
          <span className="eyebrow">From manual work to automation</span>
          <h2 style={{ marginTop: 16 }}>Automation only creates value when it keeps running.</h2>
          <p className="lead">
            A workflow is not finished just because it launches once. Your RemoHires automation
            specialist builds the automation, checks the output, fixes what breaks, and keeps
            improving it so the process keeps producing measurable work.
          </p>
          <div className="runrow">
            {runRow.map((r, i) => (
              <Reveal className="r" index={i} key={r.b}>
                <b>{r.b}</b>
                <span>{r.s}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT THEY HANDLE */}
      <section className="band" id="what-they-handle">
        <div className="wrap">
          <span className="eyebrow">What your automation specialist handles</span>
          <h2 style={{ marginTop: 16 }}>AI automation for the work your team keeps repeating.</h2>
          <div className="grid4">
            {handled.map((h, i) => (
              <Reveal className="bc" index={i} key={h.title}>
                <div className="i">{h.icon}</div>
                <h3>{h.title}</h3>
                <p>{h.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* COST COMPARE */}
      <section id="cost">
        <div className="wrap">
          <span className="eyebrow">The alternative</span>
          <h2 style={{ marginTop: 16 }}>Get AI automation execution without hiring locally.</h2>
          <div className="cmp">
            <Reveal className="c local">
              <h3>Hire locally (US)</h3>
              <div className="big">
                ~$
                <CountUp to={152} />K
                <span style={{ fontSize: 16, fontWeight: 600, color: "var(--muted)" }}>/yr</span>
              </div>
              <div className="sub">
                average base for an automation-focused technical hire — before benefits, taxes
                &amp; overhead
              </div>
              <ul>
                <li>Months to recruit and vet</li>
                <li>You have to judge skills you don&rsquo;t have</li>
                <li>Fixed cost whether the work is there or not</li>
              </ul>
            </Reveal>
            <Reveal className="c rh" index={1}>
              <h3>RemoHires</h3>
              <div className="big">
                up to <CountUp to={83} />%
                <span style={{ fontSize: 16, fontWeight: 600, color: "var(--muted)" }}> less</span>
              </div>
              <div className="sub">
                one predictable monthly rate for a dedicated full-time professional — no US
                salary, no overhead
              </div>
              <ul>
                <li>Matched to your tools and workflow, ready to onboard</li>
                <li>Payroll, contracts &amp; compliance handled (EOR)</li>
                <li>One accountable person who owns implementation</li>
              </ul>
              <a href="#start" className="btn sm" style={{ marginTop: 18 }}>
                Get your custom quote{" "}
                <svg fill="none" viewBox="0 0 24 24" strokeWidth={2.2}>
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </a>
            </Reveal>
          </div>
          <p className="fn">
            *US benchmark: automation-focused technical role average ~$152K/yr —{" "}
            <a href="https://www.ziprecruiter.com/Salaries/Automation-Engineer-Salary" target="_blank" rel="noopener">
              ZipRecruiter
            </a>{" "}
            ($107,126) and{" "}
            <a href="https://www.indeed.com/career/automation-engineer/salaries" target="_blank" rel="noopener">
              Indeed
            </a>{" "}
            ($106,387), 2026. Your rate is scoped to the role and seniority — we&rsquo;ll share it
            on a quick call.
          </p>
        </div>
      </section>

      {/* HOW */}
      <section className="band" id="how-it-works">
        <div className="wrap">
          <span className="eyebrow">How it works</span>
          <h2 style={{ marginTop: 16 }}>Three steps to turn manual work into automation.</h2>
          <div className="steps">
            {steps.map((step, i) => (
              <Reveal className="step" index={i} key={step.n}>
                <div className="n">{step.n}</div>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* OBJECTIONS */}
      <section id="faq">
        <div className="wrap">
          <span className="eyebrow">Straight answers</span>
          <h2 style={{ margin: "16px 0 10px" }}>What you&rsquo;re thinking.</h2>
          {faqs.map((faq, i) => (
            <details key={faq.q} open={i === 0}>
              <summary>{faq.q}</summary>
              <div className="a">{faq.a}</div>
            </details>
          ))}
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="tm" id="testimonial">
        <div className="wrap">
          <Reveal className="tmwrap">
            <div className="stars">★★★★★</div>
            <p className="quote">
              &ldquo;We had the tools, the prompts, and the ideas — but nobody owned the
              implementation. RemoHires matched us with an{" "}
              <span className="t">automation specialist who turned our AI experiments into workflows</span>{" "}
              that actually run every day. Now the tools finally do the work we bought them
              for.&rdquo;
            </p>
            <div className="who">
              <div className="av">M</div>
              <div className="n">
                <b>Mike</b>
                <span>Owner, Louisiana Home Performance</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="final">
        <div className="wrap">
          <div className="box">
            <h2>Stop starting automations nobody finishes.</h2>
            <p className="s">
              Get matched with a dedicated AI automation specialist who turns repetitive work
              into reliable business workflows.
            </p>
            <div style={{ textAlign: "left" }}>
              <MatchForm subject="New RemoHires lead (AI automation footer)" />
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="wrap nav">
          <a href="https://remohires.com" target="_blank" rel="noopener">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="logo" src="https://remohires.com/assets/logo-ClPCTLmH.svg" alt="RemoHires" />
          </a>
          <span>
            © 2026 RemoHires · Dedicated AI automation-ready remote talent ·{" "}
            <a href="mailto:info@remohires.com">info@remohires.com</a>
          </span>
        </div>
      </footer>
    </>
  );
}
