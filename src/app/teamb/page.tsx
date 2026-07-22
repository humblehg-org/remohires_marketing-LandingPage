import type { Metadata } from "next";
import Image from "next/image";
import "./teamb.css";
import { ParticleBackground } from "@/components/teamb/particle-background";
import { TeamBNav } from "@/components/teamb/nav";
import { Terminal } from "@/components/teamb/terminal";
import { HeroArt } from "@/components/teamb/hero-art";
import { LeadForm } from "@/components/teamb/lead-form";
import { Reveal } from "@/components/teamb/reveal";
import { CostCompare } from "@/components/teamb/cost-compare";

export const metadata: Metadata = {
  title: "RemoHires — Dedicated AI-Ready Remote Professionals from Indonesia",
  description:
    "RemoHires matches you with a vetted Indonesian remote professional who builds and runs the AI and technical work on your list — automations, tools, agents — dedicated to you, not juggling gigs.",
  icons: { icon: "/teamb-logo.png" },
};

const useCards = [
  {
    title: "Customer-facing AI",
    body: "Support chatbots and AI agents that handle first-line conversations, so your team only touches what truly needs a human.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M4 19a8 8 0 0 1 16 0" stroke="#22e6cb" strokeWidth="2" />
        <circle cx="12" cy="8" r="4" stroke="#22e6cb" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: "Internal knowledge tools",
    body: "An assistant that answers from your own docs, SOPs, and data — instead of someone digging through folders every time.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <rect x="4" y="4" width="16" height="16" rx="2" stroke="#22e6cb" strokeWidth="2" />
        <line x1="7" y1="9" x2="17" y2="9" stroke="#22e6cb" strokeWidth="2" />
        <line x1="7" y1="13" x2="17" y2="13" stroke="#22e6cb" strokeWidth="2" />
        <line x1="7" y1="17" x2="13" y2="17" stroke="#22e6cb" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: "Workflow automation",
    body: "Your CRM, spreadsheets, and inbox wired together so the manual steps in between simply run themselves.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path
          d="M6 12h12M14 8l4 4-4 4"
          stroke="#22e6cb"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Data & reporting",
    body: "Dashboards and pipelines that turn raw data into a straight answer you can act on — not another spreadsheet to decode.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M4 20V10M11 20V4M18 20v-7" stroke="#22e6cb" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
];

const trustItems = [
  {
    num: "3-stage vetting",
    body: "English fluency, technical skill, and behavioral assessments — plus a recorded interview — before anyone enters our pool.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path
          d="M9 12l2 2 4-4"
          stroke="#22e6cb"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="12" cy="12" r="9" stroke="#22e6cb" strokeWidth="2" />
      </svg>
    ),
  },
  {
    num: "Days, not months",
    body: "No drawn-out hiring cycle. Tell us the project, review your match, and get working within days.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="#22e6cb" strokeWidth="2" />
        <path d="M12 7v5l3 3" stroke="#22e6cb" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    num: "7-day risk-free trial",
    body: "Work with your match for a week before committing to anything longer. No lock-in, no big upfront spend.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 3l7 3v5c0 4.5-3 8-7 9-4-1-7-4.5-7-9V6l7-3z"
          stroke="#22e6cb"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

const paths = [
  {
    step: "DIY",
    title: "Job Board",
    body: "Write your brief, post it, and pick who you interview. Lowest commitment, fastest to try.",
    price: "From $99",
    reco: false,
    tag: null,
  },
  {
    step: "DONE-FOR-YOU",
    title: "Custom Recruitment",
    body: "Tell us the project — we source, screen, and shortlist so you only meet people who fit.",
    price: "$299 flat fee",
    reco: false,
    tag: null,
  },
  {
    step: "INSTANT",
    title: "Verified Professionals",
    body: "Skip sourcing entirely. Browse pre-assessed top talent and start with someone this week.",
    price: "Custom quote",
    reco: true,
    tag: "Best for AI builds",
  },
  {
    step: "LONG-TERM",
    title: "Employer of Record",
    body: "Ready to make it permanent? We handle contracts, payroll, compliance, and benefits — legally.",
    price: "$249/month",
    reco: false,
    tag: null,
  },
];

export default function TeamBPage() {
  return (
    <>
      <ParticleBackground />

      <div id="page">
        <TeamBNav />

        <header className="hero">
          <div className="hero-inner">
            <div>
              <div className="badge">
                <span className="dot"></span> AI-ready remote talent from Indonesia
              </div>
              <h1>
                Put a <span className="grad-text">dedicated AI professional</span> on your
                team — for a fraction of a local hire.
              </h1>
              <p className="subhead">
                RemoHires matches you with a <b>vetted Indonesian remote professional</b> who
                builds and runs the AI and technical work on your list — automations, tools,
                agents — dedicated to you, not juggling gigs.
              </p>

              <Terminal />

              <LeadForm variant="hero" />
              <div className="fineprint">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M20 6L9 17l-5-5"
                    stroke="#22e6cb"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Just your email. No sales call, no commitment.
              </div>
            </div>
            <div>
              <HeroArt />
            </div>
          </div>
        </header>

        {/* trust strip */}
        <div className="strip">
          <div className="strip-inner">
            <div className="strip-item">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z"
                  fill="#22e6cb"
                />
              </svg>{" "}
              Top 1% vetted talent
            </div>
            <div className="strip-item">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="9" stroke="#22e6cb" strokeWidth="2" />
                <path d="M12 7v5l3 3" stroke="#22e6cb" strokeWidth="2" strokeLinecap="round" />
              </svg>{" "}
              Start within days
            </div>
            <div className="strip-item">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 3l7 3v5c0 4.5-3 8-7 9-4-1-7-4.5-7-9V6l7-3z"
                  stroke="#22e6cb"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
              </svg>{" "}
              English-fluent & assessed
            </div>
            <div className="strip-item">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
                <path
                  d="M4 12h16M12 4v16"
                  stroke="#22e6cb"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>{" "}
              7-day risk-free trial
            </div>
          </div>
        </div>

        {/* what you can build */}
        <section className="bordered" id="build">
          <Reveal>
            <p className="kicker">Real work, shipped</p>
            <h2 className="section-title">What your professional can build</h2>
            <p className="section-sub">
              If &ldquo;we should really automate this&rdquo; has been on your list for
              months, it&rsquo;s exactly what these hires are for.
            </p>
          </Reveal>
          <Reveal className="grid-4">
            {useCards.map((card) => (
              <div className="use-card" key={card.title}>
                <div className="use-icon">{card.icon}</div>
                <h3>{card.title}</h3>
                <p>{card.body}</p>
              </div>
            ))}
          </Reveal>
        </section>

        {/* cost comparison */}
        <section className="bordered" id="cost">
          <Reveal>
            <p className="kicker">The math</p>
            <h2 className="section-title">Same skills. A fraction of the cost.</h2>
            <p className="section-sub">
              A dedicated Indonesian professional gives you senior-level technical work at a
              rate that&rsquo;s simply not possible hiring locally.
            </p>
          </Reveal>
          <CostCompare />
        </section>

        {/* trust / why */}
        <section className="bordered">
          <Reveal>
            <p className="kicker">Why owners trust the match</p>
            <h2 className="section-title">You&rsquo;re not gambling on a résumé</h2>
            <p className="section-sub">
              Every professional clears a real bar before they ever reach you — and you stay
              in control the whole way.
            </p>
          </Reveal>
          <Reveal className="trust-row">
            {trustItems.map((item) => (
              <div className="trust-item" key={item.num}>
                <div className="ico">{item.icon}</div>
                <div className="num">{item.num}</div>
                <p>{item.body}</p>
              </div>
            ))}
          </Reveal>
        </section>

        {/* paths */}
        <section className="bordered" id="paths">
          <Reveal>
            <p className="kicker">However you want to start</p>
            <h2 className="section-title">One talent pool, four ways in</h2>
            <p className="section-sub">
              Every path draws from the same vetted, AI-ready professionals — you just pick
              how much of the hiring we handle for you.
            </p>
          </Reveal>
          <Reveal className="path-grid">
            {paths.map((path) => (
              <div className={`path-card${path.reco ? " reco" : ""}`} key={path.title}>
                {path.tag && <span className="path-tag">{path.tag}</span>}
                <span className="path-step">{path.step}</span>
                <h4>{path.title}</h4>
                <p>{path.body}</p>
                <span className="path-price">{path.price}</span>
              </div>
            ))}
          </Reveal>
        </section>

        {/* final cta */}
        <section className="cta-block" id="signup-section">
          <Reveal>
            <p className="kicker">Get started</p>
            <h2 className="section-title">Tell us what you want built</h2>
            <p className="section-sub">
              Drop your email and we&rsquo;ll come back with a matched professional for your
              project — free, no call required.
            </p>
            <LeadForm variant="footer" />
          </Reveal>
        </section>

        <footer>
          <Image
            src="/teamb-logo.png"
            alt="RemoHires"
            className="foot-logo"
            width={80}
            height={22}
          />
          <br />
          Early access pilot — this page is part of an active test.
        </footer>
      </div>
    </>
  );
}
