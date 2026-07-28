import type { Metadata } from "next";
import "./ai-talent.css";
import { Reveal } from "@/components/ai-talent/reveal";
import { MatchForm } from "@/components/ai-talent/match-form";
import { CountUp } from "@/components/ai-talent/count-up";

export const metadata: Metadata = {
  title: "RemoHires — The AI Professional You Can't Afford to Hire Locally",
  description:
    "RemoHires places a dedicated, full-time AI professional who builds your automations and keeps them running — vetted for the skills you can't test yourself, for up to 80% less than hiring locally in the U.S.",
};

const handled = [
  {
    title: "Customer-facing AI",
    body: "Support agents that handle first-line questions — your team only touches what needs a human.",
    icon: (
      <svg fill="none" viewBox="0 0 24 24" strokeWidth={2}>
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
      </svg>
    ),
  },
  {
    title: "Internal knowledge tools",
    body: "Your SOPs and docs turned into something your team can actually ask questions of.",
    icon: (
      <svg fill="none" viewBox="0 0 24 24" strokeWidth={2}>
        <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
      </svg>
    ),
  },
  {
    title: "Workflow automation",
    body: "CRM, spreadsheets and inbox wired together so the manual steps in between just run.",
    icon: (
      <svg fill="none" viewBox="0 0 24 24" strokeWidth={2}>
        <path d="M12 2v4M12 18v4M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M2 12h4M18 12h4M4.9 19.1l2.8-2.8M16.3 7.7l2.8-2.8" />
      </svg>
    ),
  },
  {
    title: "Data & reporting",
    body: "The reports nobody wants to build, pulled and formatted automatically, every week.",
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
    body: "Drop your name, email and industry. We'll follow up with a quick discovery call to scope the work worth handing off.",
  },
  {
    n: "02",
    title: "We match your professional",
    body: "A dedicated, full-time AI professional matched to your workflow — sourced, screened, and ready to onboard.",
  },
  {
    n: "03",
    title: "They build and run it",
    body: "They ship your automations and keep them working, human-checked. We handle payroll and compliance through our EOR.",
  },
];

const faqs = [
  {
    q: "Is this full-time or project-based?",
    a: "Full-time and dedicated — your professional works only for your business, as part of your team. We handle payroll, contracts, and tax compliance through our Employer of Record service.",
  },
  {
    q: "How is this different from an agency?",
    a: "An agency splits attention across many clients and bills you for deliverables. You get one dedicated person on your team, working only for you — and you stay in control.",
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
    q: "I'm not technical.",
    a: "Good. You never touch the AI — your professional does. You just tell them what “done right” looks like.",
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

export default function AiTalentV2Page() {
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
              Dedicated AI professionals
            </span>
            <h1 style={{ marginTop: 22 }}>
              AI won&rsquo;t transform
              <br />
              your business.
              <br />
              <span className="t">The right person will.</span>
            </h1>
            <p className="sub">
              You already know AI could change how you operate. You just don&rsquo;t have someone
              who can actually{" "}
              <b style={{ color: "#fff" }}>build it — and keep it running</b>. RemoHires places a
              dedicated AI professional who does both, for up to 80% less than a local hire.
            </p>
            <div className="stats">
              <div className="st">
                <div className="k">
                  <svg fill="none" viewBox="0 0 24 24" strokeWidth={2}>
                    <path d="M17 21v-2a4 4 0 00-4-4H7a4 4 0 00-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>{" "}
                  Full-time
                </div>
                <div className="v">Dedicated to you</div>
              </div>
              <div className="st">
                <div className="k">
                  <svg fill="none" viewBox="0 0 24 24" strokeWidth={2}>
                    <path d="M12 2v4M12 18v4M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M2 12h4M18 12h4" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>{" "}
                  Builds &amp; runs it
                </div>
                <div className="v">A human owns every output</div>
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
            <MatchForm subject="New RemoHires lead (v2 hero)" />
          </div>
        </div>
      </section>

      {/* CORE STORY / THE PROBLEM */}
      <section>
        <div className="wrap">
          <span className="eyebrow">Sound familiar</span>
          <h2 style={{ marginTop: 16 }}>
            Every automation you need is
            <br />
            <span className="t">waiting on a hire you can&rsquo;t justify.</span>
          </h2>
          <Reveal className="scene">
            It&rsquo;s 9 PM and you&rsquo;re still reconciling invoices, updating the CRM, and
            moving data between systems. You&rsquo;ve looked at hiring an automation engineer —
            but the salary is well beyond budget, and you wouldn&rsquo;t know how to evaluate
            their skills anyway.
          </Reveal>
          <Reveal className="lead">
            Call it 10–15 hours a week on invoicing, scheduling, and data entry — your
            highest-paid person doing $15-an-hour work, while the hire that would end it stays
            unfilled and the backlog compounds. The problem was never the tools. It&rsquo;s that
            no one on your team can build and run them.
          </Reveal>
        </div>
      </section>

      {/* THE SOLUTION */}
      <section className="band">
        <div className="wrap">
          <span className="eyebrow">The one hire that changes it</span>
          <h2 style={{ marginTop: 16 }}>
            The $100K+ automation hire you can&rsquo;t afford —
            <br />
            <span className="t">on your team, for up to 80% less.</span>
          </h2>
          <p className="lead">
            RemoHires puts a dedicated, full-time professional on your team — vetted by us for the
            automation skills you can&rsquo;t test yourself (Make, Zapier, n8n, APIs). They build
            your automations and run them every day. Not an agency splitting time across ten
            clients. Not another tool for you to manage. One accountable person, building from
            week one.
          </p>
        </div>
      </section>

      {/* BUILDS AND RUNS IT */}
      <section>
        <div className="wrap">
          <span className="eyebrow">Built, run, and kept working</span>
          <h2 style={{ marginTop: 16 }}>Most AI dies after launch. Yours won&rsquo;t.</h2>
          <p className="lead">
            AI only creates value when someone owns it after go-live — and most businesses
            don&rsquo;t have that person. Your RemoHires professional doesn&rsquo;t just ship it
            once; they keep it reliable, with a human owning every output so it never becomes
            something your customers have to deal with.
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
          <span className="eyebrow">What your professional handles</span>
          <h2 style={{ marginTop: 16 }}>Real work, off your plate.</h2>
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
          <span className="eyebrow">The math</span>
          <h2 style={{ marginTop: 16 }}>Significantly less than hiring locally.</h2>
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
                <li>Matched to your workflow, ready to onboard</li>
                <li>Payroll, contracts &amp; compliance handled (EOR)</li>
                <li>One accountable person who builds and runs it</li>
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
          <h2 style={{ marginTop: 16 }}>Three steps. We do the lifting.</h2>
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
              &ldquo;I was the bottleneck in my own company — every quote and follow-up ran
              through me. RemoHires matched me with a{" "}
              <span className="t">professional who built and now runs the automations</span>{" "}
              I&rsquo;d been putting off for a year. The busywork runs itself, and I actually get
              to run the business.&rdquo;
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
            <h2>Get the person who builds and runs it.</h2>
            <p className="s">
              Get matched with a dedicated AI professional — free to start, up to 80% less than a
              local hire.
            </p>
            <div style={{ textAlign: "left" }}>
              <MatchForm subject="New RemoHires lead (v2 footer)" />
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
