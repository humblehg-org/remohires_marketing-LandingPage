import type { Metadata } from "next";
import "./aitalent.css";
import { Reveal } from "@/components/aitalent/reveal";
import { MatchForm } from "@/components/aitalent/match-form";

export const metadata: Metadata = {
  title: "RemoHires — Stop Being the Bottleneck | AI-Fluent Full-Time Remote Talent",
  description:
    "Hire dedicated AI-fluent professionals who combine human expertise with AI efficiency to eliminate repetitive work, increase productivity, and help your business scale—at up to 80% lower hiring costs than hiring locally in the U.S.",
};

const services = [
  {
    title: "Job Board",
    body: "Post your role to a curated network of professionals and manage hiring yourself — with full visibility and control.",
    linkLabel: "Learn more →",
    href: "https://remohires.com/services/job-board",
    icon: (
      <svg fill="none" viewBox="0 0 24 24" strokeWidth={2}>
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M3 9h18M8 14h5" />
      </svg>
    ),
  },
  {
    title: "Custom Recruitment",
    body: "Our team sources, evaluates, and shortlists the best candidates, tailored to your specific operational needs.",
    linkLabel: "Learn more →",
    href: "https://remohires.com/services/custom-recruitment",
    icon: (
      <svg fill="none" viewBox="0 0 24 24" strokeWidth={2}>
        <circle cx="11" cy="11" r="7" />
        <path d="M21 21l-4.3-4.3" />
      </svg>
    ),
  },
  {
    title: "Verified Professionals",
    body: "Access talent tested for practical reasoning and communication fluency before they ever reach you.",
    linkLabel: "Meet the talent →",
    href: "https://remohires.com/services/verified-professionals",
    icon: (
      <svg fill="none" viewBox="0 0 24 24" strokeWidth={2}>
        <path d="M9 12l2 2 4-4" />
        <path d="M21 12c0 5-3.5 7.5-8.5 9C7.5 19.5 4 17 4 12V6l8-3 8 3z" />
      </svg>
    ),
  },
  {
    title: "Employer of Record",
    body: "Hire internationally without a local entity. We handle payroll, contracts, and tax compliance.",
    linkLabel: "Explore compliance →",
    href: "https://remohires.com/services/eor",
    icon: (
      <svg fill="none" viewBox="0 0 24 24" strokeWidth={2}>
        <path d="M12 3l8 4v5c0 5-3.5 7.5-8 9-4.5-1.5-8-4-8-9V7z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
];

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

const steps = [
  {
    n: "01",
    title: "Tell us who you are",
    body: "Drop your name, email and industry. We'll follow up with a quick discovery call to scope the work worth handing off.",
  },
  {
    n: "02",
    title: "We match your professional",
    body: "A dedicated, full-time, AI-fluent hire matched to your workflow — sourced, screened, and ready to onboard.",
  },
  {
    n: "03",
    title: "They join your team",
    body: "They run the repetitive work with AI, human-checked. We handle payroll and compliance through our EOR.",
  },
];

const mirrorLines = [
  "Half of how it works lives in your head, written down nowhere.",
  "You know AI should help — you just don't know what to hand it, or where to start.",
  "You've tried the tools. Most were noise. The rest became tabs you never open.",
  "You'd hire, but a U.S. hire is expensive and you can't tell the real AI-fluent people from the hype.",
];

const faqs = [
  {
    q: "Is this full-time or project-based?",
    a: "Full-time and dedicated — your professional works only for your business, as part of your team. We handle payroll, contracts, and tax compliance through our Employer of Record service.",
  },
  {
    q: "How is this different from an agency?",
    a: "An agency splits its attention across many clients and bills you for deliverables. You get one dedicated person, embedded in your business, working only for you — and you stay in control.",
  },
  {
    q: "Where is the talent based?",
    a: "Our professionals are full-time and based in Indonesia — strong English, real time-zone overlap with U.S. hours, and remote-first by default. It's a big part of how you get dedicated, professional output at up to 80% less than a comparable U.S. hire.",
  },
  {
    q: "Is the AI work going to be reliable?",
    a: "A human owns every output. AI stays in the back office — it doesn't talk to your customers unless you want it to. Reliability first, not novelty.",
  },
  {
    q: "I'm not technical.",
    a: "Good. You never touch the AI — your professional does. You just tell them what “done right” looks like.",
  },
  {
    q: "What does it cost?",
    a: "A monthly rate for a dedicated full-time professional — typically up to 80% less than a comparable U.S. hire. Your exact quote depends on the role and seniority.",
  },
];

export default function AiTalentPage() {
  return (
    <>
      <header>
        <div className="wrap nav">
          <a href="https://remohires.com" target="_blank" rel="noopener">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="logo" src="https://remohires.com/assets/logo-ClPCTLmH.svg" alt="RemoHires" />
          </a>
          <a
            href="https://remohires.com/auth/register/employer"
            target="_blank"
            rel="noopener"
            className="btn sm"
          >
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
              AI-fluent remote talent
            </span>
            <h1 style={{ marginTop: 22, fontSize: "clamp(32px,4.8vw,56px)" }}>
              Stop Hiring for More Hands.
              <br />
              <span className="t">Start Hiring for More Output.</span>
            </h1>
            <p className="sub">
              Hire <span className="t" style={{ fontWeight: 600 }}>dedicated AI-fluent professionals</span>{" "}
              who combine human expertise with AI efficiency to eliminate repetitive work,
              increase productivity, and help your business scale—at up to{" "}
              <b style={{ color: "#fff" }}>80% lower</b> hiring costs than hiring locally in the
              U.S.
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
                    <path d="M3 17l6-6 4 4 7-7" />
                    <path d="M17 8h4v4" />
                  </svg>{" "}
                  Up to 80%
                </div>
                <div className="v">Lower cost</div>
              </div>
              <div className="st">
                <div className="k">
                  <svg fill="none" viewBox="0 0 24 24" strokeWidth={2}>
                    <path d="M9 12l2 2 4-4" />
                    <path d="M21 12c0 5-3.5 7.5-8.5 9C7.5 19.5 4 17 4 12V6l8-3 8 3z" />
                  </svg>{" "}
                  Compliant
                </div>
                <div className="v">Payroll &amp; EOR handled</div>
              </div>
            </div>
          </div>

          <div id="start">
            <MatchForm subject="New RemoHires lead (hero form)" />
          </div>
        </div>
      </section>

      {/* PAIN MIRROR */}
      <section>
        <div className="wrap">
          <span className="eyebrow">Sound familiar</span>
          <h2 style={{ marginTop: 16 }}>
            The business runs on you.
            <br />
            <span className="t">And only you.</span>
          </h2>
          <div className="mirror">
            {mirrorLines.map((line, i) => (
              <Reveal key={line} index={i}>
                {line}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* USP */}
      <section className="band">
        <div className="wrap">
          <span className="eyebrow">The difference</span>
          <h2 style={{ marginTop: 16 }}>It&rsquo;s a person, not a project.</h2>
          <p className="big">
            A <b>dedicated, full-time professional who&rsquo;s fluent in AI</b> — working only
            for your business, embedded in your team, using AI to take the repetitive work off
            your plate. A <b>human owns every output</b>, so it&rsquo;s reliable and never
            something your customers have to deal with.
          </p>
          <p>
            You don&rsquo;t learn a tool. You don&rsquo;t juggle an agency splitting time across
            ten clients. We source, match, and handle payroll &amp; compliance — you get a
            dedicated full-time professional based in Indonesia, with strong English and real
            time-zone overlap.
          </p>
        </div>
      </section>

      {/* 4 SERVICES */}
      <section>
        <div className="wrap">
          <span className="eyebrow">Four ways to hire</span>
          <h2 style={{ marginTop: 16 }}>However you want to build your team.</h2>
          <div className="grid4">
            {services.map((s, i) => (
              <Reveal className="bc" index={i} key={s.title}>
                <div className="i">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
                <a className="more" target="_blank" rel="noopener" href={s.href}>
                  {s.linkLabel}
                </a>
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

      {/* HOW */}
      <section>
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
      <section className="band">
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
              <span className="t">remote hire who automated the processes</span> I&rsquo;d been
              putting off for a year. Now the busywork runs itself, and I actually get to run the
              business.&rdquo;
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
            <h2>Start with one hire.</h2>
            <p className="s">
              Get matched with a dedicated, AI-fluent professional — free to start. Scale when
              you&rsquo;re ready.
            </p>
            <div style={{ textAlign: "left" }}>
              <MatchForm subject="New RemoHires lead (footer form)" />
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
            © 2026 RemoHires · AI-fluent full-time remote talent ·{" "}
            <a href="mailto:resti@remohires.com">resti@remohires.com</a>
          </span>
        </div>
      </footer>
    </>
  );
}
