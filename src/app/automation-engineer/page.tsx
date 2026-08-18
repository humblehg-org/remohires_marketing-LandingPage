import type { Metadata } from "next";
import "./automation-engineer.css";
import { HeaderScroll } from "@/components/automation-engineer/header-scroll";
import { Reveal } from "@/components/automation-engineer/reveal";
import { FaqItem } from "@/components/automation-engineer/faq-item";
import { MatchForm } from "@/components/automation-engineer/match-form";

export const metadata: Metadata = {
  title: "RemoHires — The AI expert you can't afford, on your team for up to 80% less",
  description:
    "RemoHires places a dedicated, full-time AI/automation professional on your team — vetted and employed through us — to build, run, and maintain the automations your AI tools were supposed to deliver.",
};

const steps = [
  {
    n: "01",
    title: "Tell us your workflows",
    body: "A quick fit call: what's manual, what keeps breaking, and which tools you already pay for.",
  },
  {
    n: "02",
    title: "We recruit, vet & match",
    body: "We source and screen a dedicated AI professional and employ them through our Employer of Record — no recruiting, interviewing, or HR admin for you.",
  },
  {
    n: "03",
    title: "They build, run & improve",
    body: "Embedded in your team, they build automations with Make, Zapier, n8n, APIs, ChatGPT and Claude — then monitor, fix, and optimize them over time.",
  },
];

const cards = [
  {
    num: "01",
    title: "The hire you couldn't justify",
    body: "Full-time AI expertise without a US salary or months of recruiting — one dedicated person, for up to 80% less.",
    live: false,
  },
  {
    num: "02",
    title: "Your subscriptions finally pay off",
    body: "ChatGPT, Claude, Zapier, Make — someone owns them and turns them into systems that actually save hours.",
    live: false,
  },
  {
    num: "03",
    title: "AI that keeps running",
    body: "They don't build and disappear. They monitor, troubleshoot, and improve — so automations don't quietly break.",
    live: true,
  },
  {
    num: "04",
    title: "Scale before you scale payroll",
    body: "Add operational capacity as you grow, without another local salary every time the workload jumps.",
    live: false,
  },
  {
    num: "05",
    title: "Stay out of the weeds",
    body: "Stop watching tutorials and debugging prompts at midnight. Get the results of AI without becoming an AI company.",
    live: false,
  },
  {
    num: "06",
    title: "No hiring headache",
    body: "We source, vet, match, and employ. You get a team member with long-term ownership — not a freelancer juggling five clients.",
    live: false,
  },
];

const chips = [
  "Email triage",
  "CRM updates",
  "Document processing",
  "Appointment booking",
  "Invoice & payment processing",
  "Lead routing",
  "Customer follow-up",
  "Reporting & dashboards",
];

const comparisonRows = [
  { label: "Model", diy: "Your nights & weekends", freelancer: "Project-based", local: "Full-time salary", remo: "Dedicated full-time remote pro" },
  { label: "Relationship", diy: "You are the expert", freelancer: "Transactional", local: "Employee", remo: "Embedded team member" },
  { label: "Ownership", diy: "Nobody", freelancer: "Delivers, then leaves", local: "Owns it", remo: "Owns ongoing AI operations" },
  { label: "When it breaks", diy: "You fix it", freelancer: "Gone / bill again", local: "They fix it", remo: "Monitored & maintained", neg: true },
  { label: "Knowledge", diy: "In your head", freelancer: "Leaves with them", local: "Stays", remo: "Builds over time" },
  { label: "Cost", diy: "Your time", freelancer: "Unpredictable", local: "Full US salary + overhead", remo: "Up to 80% less, predictable" },
  { label: "Best for", diy: "Tinkering", freelancer: "One-off tasks", local: "Deep pockets", remo: "Continuous automation" },
];

const faqs = [
  {
    q: "How much does it cost?",
    a: "Up to 80% less than a comparable US hire. Your exact quote depends on scope — we'll walk through it on the call.",
  },
  {
    q: "What tools do they work with?",
    a: "Make, Zapier, n8n, custom APIs, and AI models like ChatGPT and Claude — plus your existing CRM and stack.",
  },
  {
    q: "Who actually employs them?",
    a: "RemoHires does, through our Employer of Record. We handle payroll, taxes, and compliance — you get the teammate without setting up anything overseas.",
  },
  {
    q: "What if it's not a fit?",
    a: "We swap the person quickly, with no drama for you. Continuity and accountability stay on us.",
  },
  {
    q: "Where are they based — will hours overlap?",
    a: "Our professionals are based in Indonesia, and we set working-hours overlap with your team as part of matching, so you're working together in real time — not passing notes overnight.",
  },
  {
    q: "How is my data handled?",
    a: "Your professional works inside your own tools, under access you grant and can revoke at any time. We'll walk through access and process on the call.",
  },
  {
    q: "How fast until my first automation?",
    a: "Usually within the first couple of weeks, depending on scope and how ready your tools and data are. We'll map a realistic first win on the call.",
  },
];

export default function AutomationEngineerPage() {
  return (
    <>
      <HeaderScroll />

      <header id="hdr">
        <div className="wrap bar">
          <a href="#top" aria-label="RemoHires">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="logo" src="/logo-remohires-color.svg" alt="RemoHires" />
          </a>
          <nav className="nav-right">
            <a href="#how" className="link">
              How it works
            </a>
            <a href="#why" className="link">
              Why not a freelancer
            </a>
            <a href="#book" className="btn btn-primary">
              Book a free call
            </a>
          </nav>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="wrap hero-grid">
          <div>
            <span className="status">
              <span className="dot" />
              The skill gap, solved
            </span>
            <h1>
              The AI expert you can&rsquo;t afford &mdash;{" "}
              <span className="grad">on your team for up to 80% less</span>
            </h1>
            <p className="lead">
              You already pay for the AI tools. RemoHires gives you a dedicated professional who
              actually builds, runs, and maintains the automations &mdash; so your subscriptions
              finally do real work.
            </p>
            <div className="cta-row">
              <a href="#book" className="btn btn-primary">
                Book a free fit call <span className="arw">&rarr;</span>
              </a>
              <a href="#how" className="btn btn-ghost">
                See how it works
              </a>
            </div>
            <div className="trust">
              <span>Dedicated &amp; full-time &mdash; not freelance</span>
              <span>Works inside the tools you already use</span>
              <span>Payroll &amp; compliance handled through Employer of Record</span>
            </div>
          </div>

          <div className="console" aria-hidden="true">
            <div className="chead">
              <span className="t">Your operations</span>
              <span className="status">
                <span className="dot" />
                Live
              </span>
            </div>
            <div className="row">
              <span className="name">
                <span className="dot" />
                Invoice processing
              </span>
              <span className="st">running</span>
            </div>
            <div className="row">
              <span className="name">
                <span className="dot" />
                CRM updates &amp; sync
              </span>
              <span className="st">running</span>
            </div>
            <div className="row">
              <span className="name">
                <span className="dot" />
                Lead routing
              </span>
              <span className="st">running</span>
            </div>
            <div className="row">
              <span className="name">
                <span className="dot" />
                Customer follow-up
              </span>
              <span className="st">running</span>
            </div>
            <div className="row">
              <span className="name">
                <span className="dot" />
                Weekly reporting
              </span>
              <span className="st">running</span>
            </div>
            <div className="owner">
              Owned &amp; maintained by <b>your RemoHires professional</b>
            </div>
          </div>
        </div>
      </section>

      <section className="problem tint" id="problem">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">The real bottleneck</span>
          </div>
          <div className="problem-grid">
            <p className="problem-lead">You bought the AI. Nobody owns it.</p>
            <div className="problem-body">
              <p>
                It&rsquo;s 9pm and you&rsquo;re still reconciling invoices, updating the CRM, and
                moving data between systems by hand. Someone built one Zapier workflow months ago
                &mdash; it broke, and nobody fixed it, because no one on your team actually owns
                AI.
              </p>
              <p>
                So the tools keep renewing while the manual work keeps happening. And somewhere
                along the way, you became the automation expert your business never hired.
              </p>
              <div className="statline">
                <b>88% of businesses use AI</b> &mdash; but only about a third have scaled it.
                <span className="src">McKinsey, State of AI 2025</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="how">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">How it works</span>
            <h2>One dedicated person. Accountable from day one.</h2>
          </div>
          <div className="steps">
            {steps.map((step) => (
              <Reveal className="step" key={step.n}>
                <div className="n">{step.n}</div>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </Reveal>
            ))}
          </div>
          <p className="steps-foot">
            If the fit is ever off, <b>we swap fast</b>. Payroll, taxes, and compliance stay on
            us.
          </p>
        </div>
      </section>

      <section className="tint" id="value">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">What you get</span>
            <h2>What a dedicated AI professional does for you</h2>
          </div>
          <div className="cards">
            {cards.map((card) => (
              <Reveal className={`card${card.live ? " live" : ""}`} key={card.num}>
                <div className="num">{card.num}</div>
                <h3>{card.title}</h3>
                <p>{card.body}</p>
              </Reveal>
            ))}
          </div>

          <div className="sec-head" style={{ marginTop: 56 }}>
            <span className="eyebrow">Common wins in the first weeks</span>
          </div>
          <div className="chips">
            {chips.map((chip) => (
              <span className="chip" key={chip}>
                {chip}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="cost">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">The math</span>
            <h2>Where &ldquo;up to 80% less&rdquo; comes from</h2>
          </div>
          <div className="cost-grid">
            <Reveal className="cost-card">
              <div className="role">Automation engineer &middot; US hire</div>
              <div className="big">$107,126</div>
              <div className="sub">
                per year &mdash; US average salary{" "}
                <span className="mono" style={{ opacity: 0.7 }}>
                  (ZipRecruiter)
                </span>
              </div>
            </Reveal>
            <Reveal className="cost-card win">
              <div className="role">Same role &middot; through RemoHires</div>
              <div className="big">~$7,000</div>
              <div className="sub">
                per year &mdash; Indonesia average salary{" "}
                <span className="mono" style={{ opacity: 0.7 }}>
                  (Indeed ID)
                </span>
              </div>
              <div className="save">&#9656; up to ~93% saving on this role</div>
            </Reveal>
          </div>
          <div className="cost-claim">
            <div className="huge">
              Public claim: <span className="grad">up to 80% less</span> than a comparable US
              hire.
            </div>
          </div>
          <p className="foot-note">
            Figures are role-average salary benchmarks (2026), not RemoHires pricing. AI Developer
            roles run ~$152k US vs ~$10k (Indeed). Your quote depends on scope &mdash; that&rsquo;s
            what the call is for.
          </p>
        </div>
      </section>

      <section className="tint" id="why">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">The alternatives</span>
            <h2>Why not Upwork, or just do it yourself?</h2>
          </div>
          <div className="tablewrap">
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>DIY (you + tools)</th>
                  <th>Freelancer</th>
                  <th>Local AI hire</th>
                  <th className="rh">RemoHires</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.label}>
                    <th>{row.label}</th>
                    <td className={row.neg ? "neg" : undefined}>{row.diy}</td>
                    <td className={row.neg ? "neg" : undefined}>{row.freelancer}</td>
                    <td>{row.local}</td>
                    <td className="rh">{row.remo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="scrollhint">&larr; scroll to compare &rarr;</p>
        </div>
      </section>

      <section id="proof">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">Why owners look outside for this</span>
            <h2>The gap is real &mdash; and widening</h2>
          </div>
          <div className="proof-stats">
            <Reveal className="pstat">
              <div className="big">60%</div>
              <p>of SMB leaders wouldn&rsquo;t hire someone without AI skills.</p>
              <div className="src">Microsoft Work Trend Index</div>
            </Reveal>
            <Reveal className="pstat">
              <div className="big">88%</div>
              <p>use AI &mdash; but only about a third have scaled it.</p>
              <div className="src">McKinsey, State of AI 2025</div>
            </Reveal>
          </div>
          {/* Placeholders: real customer proof to be added before launch. Do not fabricate. */}
          <div className="placeholders">
            <div className="ph">Client logo</div>
            <div className="ph">Client logo</div>
            <div className="ph">Client logo</div>
            <div className="ph">Client logo</div>
            <div className="ph wide">Customer case study &mdash; coming soon</div>
          </div>
        </div>
      </section>

      <section className="tint" id="faq">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">Straight answers</span>
            <h2>Questions owners ask</h2>
          </div>
          <div className="faq">
            {faqs.map((faq) => (
              <FaqItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      <section className="final" id="book">
        <div className="wrap">
          <div className="box">
            <h2>Stop renting AI tools nobody runs.</h2>
            <p>
              Book a free fit call. We&rsquo;ll map your manual work and show you exactly what a
              dedicated AI professional would take off your plate.
            </p>
            <MatchForm subject="New RemoHires Automation Engineer Landing Page Lead" />
          </div>
        </div>
      </section>

      <footer>
        <div className="wrap foot">
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="logo" src="/logo-remohires-color.svg" alt="RemoHires" style={{ marginBottom: 8 }} />
            <div className="tag">
              A dedicated remote team member for the work you can&rsquo;t afford to hire for
              locally.
            </div>
          </div>
          <div className="links">
            <a href="/privacypolicy">Privacy</a>
            <a href="/termsofservice">Terms</a>
            <a href="#book">Contact</a>
          </div>
          <div className="cc">© 2026 RemoHires. All rights reserved.</div>
        </div>
      </footer>
    </>
  );
}
