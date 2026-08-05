import type { Metadata } from "next";
import "./ai-engineer.css";
import { Reveal } from "@/components/ai-engineer/reveal";
import { MatchForm } from "@/components/ai-engineer/match-form";
import { CountUp } from "@/components/ai-engineer/count-up";

export const metadata: Metadata = {
  title: "RemoHires — Hire the AI Engineer Your Business Needs Without the US Salary",
  description:
    "RemoHires matches you with a dedicated, full-time AI engineer who can build, integrate, and maintain AI solutions — for up to 83% less than hiring locally in the U.S.",
};

const handled = [
  {
    title: "Customer-facing AI",
    body: "AI chatbots, assistants, and support workflows built around your actual business process.",
    icon: (
      <svg fill="none" viewBox="0 0 24 24" strokeWidth={2}>
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
      </svg>
    ),
  },
  {
    title: "Internal knowledge tools",
    body: "Internal AI tools that turn SOPs, documents, and business knowledge into searchable systems your team can use.",
    icon: (
      <svg fill="none" viewBox="0 0 24 24" strokeWidth={2}>
        <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
      </svg>
    ),
  },
  {
    title: "Workflow automation",
    body: "APIs, CRMs, spreadsheets, inboxes, ChatGPT, Claude, Zapier, Make, and n8n connected into reliable workflows.",
    icon: (
      <svg fill="none" viewBox="0 0 24 24" strokeWidth={2}>
        <path d="M12 2v4M12 18v4M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M2 12h4M18 12h4M4.9 19.1l2.8-2.8M16.3 7.7l2.8-2.8" />
      </svg>
    ),
  },
  {
    title: "Data & reporting",
    body: "Data pipelines, dashboards, and recurring reports built from the tools your team already uses.",
    icon: (
      <svg fill="none" viewBox="0 0 24 24" strokeWidth={2}>
        <path d="M3 3v18h18" />
        <path d="M7 15l4-4 3 3 5-6" />
      </svg>
    ),
  },
];

const runRow = [
  { b: "Design", s: "Map requirements into a buildable AI solution" },
  { b: "Build", s: "Create workflows, tools, and integrations" },
  { b: "Integrate", s: "Connect APIs, CRMs, data, and business systems" },
  { b: "Maintain", s: "Test, fix, and improve the system over time" },
];

const steps = [
  {
    n: "01",
    title: "Tell us who you are",
    body: "Drop your name, email, industry, and the AI project or workflow you want to build. We'll follow up with a quick discovery call.",
  },
  {
    n: "02",
    title: "We match your AI engineer",
    body: "A dedicated, full-time AI engineer matched to your technical requirements, workflow, and business context.",
  },
  {
    n: "03",
    title: "They build, integrate, and maintain it",
    body: "They build the AI solution, integrate it with your tools, test it, and keep improving it. We handle payroll and compliance through our EOR.",
  },
];

const faqs = [
  {
    q: "Is this full-time or project-based?",
    a: "Full-time and dedicated — your professional works only for your business, as part of your team. We handle payroll, contracts, and tax compliance through our Employer of Record service.",
  },
  {
    q: "What can the AI engineer build?",
    a: "They can help build AI-assisted workflows, internal tools, chatbots, CRM and reporting automations, knowledge systems, integrations, and operational processes using the tools and systems your business already relies on.",
  },
  {
    q: "Will the AI actually be reliable?",
    a: "A human engineer owns the implementation, reviews outputs, monitors performance, and fixes issues. AI can stay behind the scenes unless you specifically want it to support customer-facing workflows.",
  },
  {
    q: "How is this different from an agency?",
    a: "An agency usually sells deliverables across many clients. RemoHires matches you with a dedicated AI engineer who works as part of your team, focused on your tools, systems, and implementation needs.",
  },
  {
    q: "I'm not technical.",
    a: "Good. You do not need to become technical. Your AI engineer handles the build, integrations, testing, and maintenance while you define the business outcome.",
  },
  {
    q: "Where is the talent based?",
    a: "Full-time AI-ready professionals based in Indonesia — strong English, real time-zone overlap on a US-aligned schedule, and remote-first by default. It's a big part of how you get dedicated technical output for up to 83% less than a US hire.",
  },
  {
    q: "What does it cost?",
    a: "A monthly rate for a dedicated full-time AI engineer — typically up to 83% less than a comparable US hire (~$152K/yr base). Your exact quote depends on the role, seniority, and technical scope.",
  },
];

export default function AiEngPage() {
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
              Dedicated AI engineers
            </span>
            <h1 style={{ marginTop: 22 }}>
              Hire the AI engineer
              <br />
              your business needs
              <br />
              <span className="t">without the US salary.</span>
            </h1>
            <p className="sub">
              You need someone technical enough to turn AI ideas into working products,
              workflows, and internal tools. RemoHires matches you with a dedicated AI engineer
              who can build, integrate, and maintain AI solutions for up to 83% less than hiring
              locally.
            </p>
            <div className="stats">
              <div className="st">
                <div className="k">
                  <svg fill="none" viewBox="0 0 24 24" strokeWidth={2}>
                    <path d="M17 21v-2a4 4 0 00-4-4H7a4 4 0 00-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>{" "}
                  AI engineer
                </div>
                <div className="v">Dedicated to your roadmap</div>
              </div>
              <div className="st">
                <div className="k">
                  <svg fill="none" viewBox="0 0 24 24" strokeWidth={2}>
                    <path d="M12 2v4M12 18v4M4.9 4.9l2.8 2.8M2 12h4M18 12h4" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>{" "}
                  Builds &amp; integrates
                </div>
                <div className="v">Tools, APIs, workflows</div>
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
            <MatchForm subject="New RemoHires lead (AI engineer hero)" />
          </div>
        </div>
      </section>

      {/* CORE STORY / THE PROBLEM */}
      <section>
        <div className="wrap">
          <span className="eyebrow">Sound familiar</span>
          <h2 style={{ marginTop: 16 }}>
            Your AI roadmap is stuck because
            <br />
            <span className="t">you don&rsquo;t have the engineer to build it.</span>
          </h2>
          <Reveal className="scene">
            The AI ideas are there. The tools exist. But every project still needs someone who can
            design the workflow, connect APIs, build integrations, test outputs, and keep the
            system working after launch.
          </Reveal>
          <Reveal className="lead">
            Without the right technical person, AI stays in planning docs, scattered prompts, or
            half-built experiments. Your team keeps doing manual work while the AI projects that
            could change operations wait for an engineer who can actually ship them.
          </Reveal>
        </div>
      </section>

      {/* THE SOLUTION */}
      <section className="band">
        <div className="wrap">
          <span className="eyebrow">The AI engineer you need</span>
          <h2 style={{ marginTop: 16 }}>
            Get a dedicated AI engineer
            <br />
            <span className="t">without hiring locally.</span>
          </h2>
          <p className="lead">
            RemoHires gives you a dedicated, full-time AI engineer matched to your business needs.
            They build AI-powered workflows, connect systems, create internal tools, support
            automations, and keep improving the implementation over time. Not a short-term
            freelancer. Not another tool subscription. One accountable technical hire on your
            team.
          </p>
        </div>
      </section>

      {/* BUILDS AND RUNS IT */}
      <section>
        <div className="wrap">
          <span className="eyebrow">From AI ideas to production</span>
          <h2 style={{ marginTop: 16 }}>An AI engineer who builds, integrates, and keeps improving.</h2>
          <p className="lead">
            AI projects need more than ideas and subscriptions. They need technical execution.
            Your RemoHires engineer helps turn requirements into working systems, connects the
            tools behind them, tests the outputs, fixes issues, and improves the solution as your
            business changes.
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
          <span className="eyebrow">What your AI engineer handles</span>
          <h2 style={{ marginTop: 16 }}>Technical AI work, moved forward by one accountable owner.</h2>
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
          <span className="eyebrow">The hiring alternative</span>
          <h2 style={{ marginTop: 16 }}>AI engineering capability without the local hiring cost.</h2>
          <div className="cmp">
            <Reveal className="c local">
              <h3>Hire locally (US)</h3>
              <div className="big">
                ~$
                <CountUp to={152} />K
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
                up to <CountUp to={83} />%
                <span style={{ fontSize: 16, fontWeight: 600, color: "var(--muted)" }}> less</span>
              </div>
              <div className="sub">
                one predictable monthly rate for a dedicated full-time AI engineer — no US salary,
                no overhead
              </div>
              <ul>
                <li>Matched to your AI projects and technical needs, ready to onboard</li>
                <li>Payroll, contracts &amp; compliance handled (EOR)</li>
                <li>One accountable engineer who owns implementation</li>
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
            *US benchmark: automation engineer average ~$152K/yr —{" "}
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
          <h2 style={{ marginTop: 16 }}>Three steps to get AI engineering support.</h2>
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
              &ldquo;We had AI ideas sitting in planning docs for months because nobody had the
              technical bandwidth to build them. RemoHires matched us with an{" "}
              <span className="t">AI engineer who turned those ideas into working systems</span>{" "}
              and kept improving them after launch.&rdquo;
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
            <h2>Hire the AI engineer your business needs.</h2>
            <p className="s">
              Get matched with a dedicated AI engineer who can build, integrate, and maintain the
              AI systems your business needs.
            </p>
            <div style={{ textAlign: "left" }}>
              <MatchForm subject="New RemoHires lead (AI engineer footer)" />
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
            © 2026 RemoHires · Dedicated AI engineering talent ·{" "}
            <a href="mailto:info@remohires.com">info@remohires.com</a>
          </span>
        </div>
      </footer>
    </>
  );
}
