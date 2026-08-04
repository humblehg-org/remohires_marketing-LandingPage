import type { Metadata } from "next";
import "./ai-talent2.css";
import { Reveal } from "@/components/ai-talent2/reveal";
import { MatchForm } from "@/components/ai-talent2/match-form";
import { CountUp } from "@/components/ai-talent2/count-up";

export const metadata: Metadata = {
  title: "RemoHires — Your AI Tools Aren't the Problem. The Missing Expert Is.",
  description:
    "You already pay for ChatGPT, Claude, Zapier, Make, or n8n. RemoHires places a dedicated, full-time AI professional who turns those subscriptions into working workflows — and keeps them running — for up to 80% less than hiring locally in the U.S.",
};

const handled = [
  {
    title: "Customer-facing AI",
    body: "AI-assisted support workflows that answer routine questions while your team handles the conversations that need judgment.",
    icon: (
      <svg fill="none" viewBox="0 0 24 24" strokeWidth={2}>
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
      </svg>
    ),
  },
  {
    title: "Internal knowledge tools",
    body: "Your SOPs, docs, and internal knowledge turned into searchable systems your team can actually use.",
    icon: (
      <svg fill="none" viewBox="0 0 24 24" strokeWidth={2}>
        <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
      </svg>
    ),
  },
  {
    title: "Workflow automation",
    body: "ChatGPT, Claude, Zapier, Make, n8n, CRM, spreadsheets, and inboxes connected into workflows that run.",
    icon: (
      <svg fill="none" viewBox="0 0 24 24" strokeWidth={2}>
        <path d="M12 2v4M12 18v4M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M2 12h4M18 12h4M4.9 19.1l2.8-2.8M16.3 7.7l2.8-2.8" />
      </svg>
    ),
  },
  {
    title: "Data & reporting",
    body: "Dashboards and reports pulled automatically from the tools your team already uses.",
    icon: (
      <svg fill="none" viewBox="0 0 24 24" strokeWidth={2}>
        <path d="M3 3v18h18" />
        <path d="M7 15l4-4 3 3 5-6" />
      </svg>
    ),
  },
];

const runRow = [
  { b: "Build", s: "Connect your systems & ship the workflow" },
  { b: "Run", s: "Monitor it and catch failures early" },
  { b: "Fix", s: "Troubleshoot when inputs or APIs break" },
  { b: "Improve", s: "Refine and expand it over time" },
];

const steps = [
  {
    n: "01",
    title: "Tell us who you are",
    body: "Drop your name, email, industry, and the tools/workflows you want help with. We'll follow up with a quick discovery call.",
  },
  {
    n: "02",
    title: "We match your professional",
    body: "A dedicated, full-time AI professional matched to your tools, workflow, and implementation needs.",
  },
  {
    n: "03",
    title: "They build and run it",
    body: "They build, run, monitor, and improve your workflows. We handle payroll and compliance through our EOR.",
  },
];

const faqs = [
  {
    q: "Is this full-time or project-based?",
    a: "Full-time and dedicated — your professional works only for your business, as part of your team. We handle payroll, contracts, and tax compliance through our Employer of Record service.",
  },
  {
    q: "How is this different from buying another AI tool?",
    a: "A tool gives you features. RemoHires gives you the person who turns those features into working business processes. You get a dedicated professional who builds, monitors, fixes, and improves the workflows using the tools you already have.",
  },
  {
    q: "Will the AI actually be reliable?",
    a: "A human owns and reviews every output, and keeps it running — monitoring, fixing, improving. AI stays in the back office and doesn't talk to your customers unless you want it to.",
  },
  {
    q: "How do you handle security and system access?",
    a: "You grant least-privilege access to only the tools the work needs, and you can revoke it any time. Every engagement is covered by an NDA and a data-processing agreement (DPA), and RemoHires is accountable for the work — you're not handing the keys to a lone freelancer. A full security overview is available on request.",
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
    a: "Full-time professionals based in Indonesia — strong English, real time-zone overlap on a US-aligned schedule, and remote-first by default. It's a big part of how you get dedicated output for up to 80% less than a US hire.",
  },
  {
    q: "What does it cost?",
    a: "A monthly rate for a dedicated full-time professional — typically up to 80% less than a comparable US hire (~$107K/yr base). Your exact quote depends on the role and seniority.",
  },
];

export default function AiTalent2Page() {
  return (
    <>
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
              Dedicated AI implementation
            </span>
            <h1 style={{ marginTop: 22 }}>
              Your AI tools
              <br />
              aren&rsquo;t the problem.
              <br />
              <span className="t">The missing expert is.</span>
            </h1>
            <p className="sub">
              You already pay for ChatGPT, Claude, Zapier, Make, or other AI tools. But tools
              don&rsquo;t create business results by themselves. RemoHires places a dedicated AI
              professional who turns your subscriptions into working workflows — and keeps them
              running.
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
                <div className="v">Dedicated to your workflows</div>
              </div>
              <div className="st">
                <div className="k">
                  <svg fill="none" viewBox="0 0 24 24" strokeWidth={2}>
                    <path d="M12 2v4M12 18v4M4.9 4.9l2.8 2.8M2 12h4M18 12h4" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>{" "}
                  Tools to results
                </div>
                <div className="v">Workflows, not experiments</div>
              </div>
              <div className="st">
                <div className="k">
                  <svg fill="none" viewBox="0 0 24 24" strokeWidth={2}>
                    <path d="M3 17l6-6 4 4 7-7" />
                    <path d="M17 8h4v4" />
                  </svg>{" "}
                  Up to 80%
                </div>
                <div className="v">Less than a local hire</div>
              </div>
            </div>
          </div>

          <div id="start">
            <MatchForm subject="New RemoHires lead (type B skill-gap hero)" />
          </div>
        </div>
      </section>

      {/* CORE STORY / THE PROBLEM */}
      <section>
        <div className="wrap">
          <span className="eyebrow">Sound familiar</span>
          <h2 style={{ marginTop: 16 }}>
            You bought the AI tools.
            <br />
            <span className="t">Now someone has to make them work.</span>
          </h2>
          <Reveal className="scene">
            You already pay for ChatGPT, Claude, Zapier, Make, or n8n. Someone built one workflow,
            another one broke, and the rest are still sitting in somebody&rsquo;s idea list. The
            tools are there. The owner is missing.
          </Reveal>
          <Reveal className="lead">
            AI becomes another software expense when no one is responsible for turning it into
            reliable operations. Manual work continues, subscriptions renew, and your team quietly
            stops trusting the automations that were supposed to save time.
          </Reveal>
        </div>
      </section>

      {/* THE SOLUTION */}
      <section className="band">
        <div className="wrap">
          <span className="eyebrow">The missing expert</span>
          <h2 style={{ marginTop: 16 }}>
            Your AI tools aren&rsquo;t the problem.
            <br />
            <span className="t">The missing expert is.</span>
          </h2>
          <p className="lead">
            RemoHires gives you a dedicated, full-time AI professional who turns the tools you
            already pay for into workflows that actually run. They connect your systems, build the
            automations, monitor the outputs, and improve the process over time. Not another
            subscription. Not another agency. One accountable person who owns the work.
          </p>
        </div>
      </section>

      {/* BUILDS AND RUNS IT */}
      <section>
        <div className="wrap">
          <span className="eyebrow">From subscriptions to systems</span>
          <h2 style={{ marginTop: 16 }}>AI only creates value when someone owns it.</h2>
          <p className="lead">
            A prompt, plugin, or automation is not a business system until someone is responsible
            for it. Your RemoHires professional builds the workflow, checks the output, fixes what
            breaks, and keeps improving it so your tools finally produce measurable work.
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
      <section className="band">
        <div className="wrap">
          <span className="eyebrow">What your workflow owner handles</span>
          <h2 style={{ marginTop: 16 }}>Turn scattered tools into actual operations.</h2>
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
      <section>
        <div className="wrap">
          <span className="eyebrow">The alternative</span>
          <h2 style={{ marginTop: 16 }}>Get the expertise without hiring locally.</h2>
          <div className="cmp">
            <Reveal className="c local">
              <h3>Hire locally (US)</h3>
              <div className="big">
                ~$
                <CountUp to={107} />K
                <span style={{ fontSize: 16, fontWeight: 600, color: "var(--muted)" }}>/yr</span>
              </div>
              <div className="sub">
                average base for an automation / AI engineer — before benefits, taxes &amp;
                overhead
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
                up to <CountUp to={80} />%
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
            *US benchmark: automation engineer average ~$107K/yr —{" "}
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
      <section className="band">
        <div className="wrap">
          <span className="eyebrow">How it works</span>
          <h2 style={{ marginTop: 16 }}>Three steps to turn tools into workflows.</h2>
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
      <section>
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
      <section className="tm">
        <div className="wrap">
          <Reveal className="tmwrap">
            <div className="stars">★★★★★</div>
            <p className="quote">
              &ldquo;We had the tools, the prompts, and the ideas — but nobody owned the
              implementation. RemoHires matched us with a{" "}
              <span className="t">professional who turned our AI experiments into workflows</span>{" "}
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
            <h2>Stop buying tools nobody owns.</h2>
            <p className="s">
              Get matched with a dedicated AI professional who turns your AI subscriptions into
              working business systems.
            </p>
            <div style={{ textAlign: "left" }}>
              <MatchForm subject="New RemoHires lead (type B skill-gap footer)" />
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
            © 2026 RemoHires · Dedicated AI-ready remote professionals ·{" "}
            <a href="mailto:info@remohires.com">info@remohires.com</a>
          </span>
        </div>
      </footer>
    </>
  );
}
