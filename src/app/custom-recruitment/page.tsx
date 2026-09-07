import type { Metadata } from "next";
import Image from "next/image";
import "./custom-recruitment.css";
import { TopStrip } from "@/components/custom-recruitment/top-strip";
import { SiteHeader } from "@/components/custom-recruitment/site-header";
import { Reveal } from "@/components/custom-recruitment/reveal";
import { BookCta } from "@/components/custom-recruitment/book-cta";
import { MobileBookFab } from "@/components/custom-recruitment/mobile-book-fab";
import { CallbackModal } from "@/components/custom-recruitment/callback-modal";
import { StatCounter } from "@/components/custom-recruitment/stat-counter";
import { Steps, type Step } from "@/components/custom-recruitment/steps";
import { Faq, type FaqEntry } from "@/components/custom-recruitment/faq";
import { Logo } from "@/components/custom-recruitment/logo";
import {
  IconCheck,
  IconArrowRight,
  IconTimezone,
  IconClock,
  IconUsers,
  IconInbox,
  IconShieldCheck,
  IconBriefcase,
  IconSearch,
  IconFileCheck,
  IconCalendarCheck,
} from "@/components/custom-recruitment/icons";

export const metadata: Metadata = {
  title: "Custom Remote Recruitment | RemoHires",
  description:
    "RemoHires finds, vets, and delivers screened remote candidates matched to your hours. No fee to start, free replacement if the fit is wrong.",
};

const STATS = [
  { value: "5-10", label: "days to first profiles" },
  { value: "0%", label: "recruitment fee" },
  { value: "1", label: "dedicated recruiter" },
  { value: "Free", label: "re-search guarantee" },
];

const OUTCOMES = [
  {
    icon: <IconClock />,
    title: "Hours back",
    body: "Skip the resume pile. We do the digging; you run your business.",
  },
  {
    icon: <IconUsers />,
    title: "A short list",
    body: "Four or five people worth your calendar, pre-screened for your must-haves.",
  },
  {
    icon: <IconInbox />,
    title: "Zero to start",
    body: "No retainer, no sourcing invoice. Pay only when you make a hire.",
  },
  {
    icon: <IconShieldCheck />,
    title: "Re-run free",
    body: "If the hire does not work out, we reopen the search at no extra cost.",
  },
];

const FEATURES = [
  {
    title: "Judged on the work",
    body: "Real conversations and reference checks before they reach you.",
  },
  {
    title: "Verified hours",
    body: "Live overlap confirmed in screening, so handoffs happen in real time.",
  },
  {
    title: "Same recruiter throughout",
    body: "Whoever scopes the role stays with you through day one.",
  },
];

const STEPS: Step[] = [
  {
    icon: <IconBriefcase />,
    title: "Brief the role",
    body: "20-minute call. We learn the work, the non-negotiables, and your hours.",
  },
  {
    icon: <IconSearch />,
    title: "We search",
    body: "Your named recruiter builds the pipeline and runs first-round calls.",
  },
  {
    icon: <IconFileCheck />,
    title: "Shortlist lands",
    body: "5-10 business days. Profiles with plain-language summaries and start dates.",
  },
  {
    icon: <IconCalendarCheck />,
    title: "You interview",
    body: "Meet who you like, in your order. Every hiring decision stays yours.",
  },
  {
    icon: <IconShieldCheck />,
    title: "Day one sorted",
    body: "Contracts, compliance, and onboarding handled so they start working fast.",
  },
];

const COMPARISON_ROWS = [
  { label: "Cost to start", remo: "Nothing", agency: "Retainer or % fee", diy: "Job ads + your time" },
  { label: "First profiles", remo: "5-10 days", agency: "Often 1 month+", diy: "As long as posting takes" },
  { label: "Who screens", remo: "Your recruiter", agency: "Rotating team", diy: "You + managers" },
  { label: "If it fails", remo: "Free re-search", agency: "Case-by-case", diy: "Start over" },
  { label: "Hours overlap", remo: "Confirmed first", agency: "CV only", diy: "Limited by region" },
];

const ROLES = [
  "Admin & operations",
  "Marketing & creative",
  "Engineering & IT",
  "Customer experience",
  "Finance & bookkeeping",
  "Something else entirely",
];

const FAQS: FaqEntry[] = [
  {
    q: "How much does it cost?",
    a: "Nothing to start. No retainer, subscription, or percentage fee. You only pay a flat fee once a candidate accepts your offer.",
  },
  {
    q: "When do I pay?",
    a: "Only after you hire. Search, screening, and shortlist are free. If the hire does not work out, we reopen the search free.",
  },
  {
    q: "How do you match my hours?",
    a: "We confirm live schedule overlap in every screening call, so standups and handoffs happen in real time.",
  },
  {
    q: "What if the candidate is not right?",
    a: "Your recruiter re-runs the search free until the seat is filled. No hidden fees or extra paperwork.",
  },
  {
    q: "Who handles contracts and onboarding?",
    a: "We do. Offer letters, local requirements, and first-week logistics are handled on our side.",
  },
  {
    q: "How fast is the shortlist?",
    a: "Most clients see the first screened profiles 5-10 business days after the intake call.",
  },
];

export default function CustomRecruitmentPage() {
  return (
    <div className="cr">
      <TopStrip />
      <SiteHeader />
      <MobileBookFab />
      <CallbackModal />

      <main>
        {/* Hero */}
        <section className="hero">
          <div className="hero-glow" />
          <div className="container hero-grid">
            <div className="animate-fade-in-up">
              <span className="badge">
                <IconCheck />
                No cost. No risk.
              </span>
              <h1>
                <span>Stop Paying Recruiter Fees.</span>{" "}
                <span className="teal">Get Your Next Hire for FREE.</span>
              </h1>
              <p>
                We find, vet, and present candidates for your role. Any role, any industry. No upfront fee. Free
                replacement if the fit is wrong.
              </p>
              <div className="hero-actions">
                <div id="hero-cta">
                  <BookCta ctaName="hero" className="btn btn-primary btn-lg bookbtn">
                    Find My Next Hire
                    <IconArrowRight style={{ width: "1rem", height: "1rem", transition: "transform .2s" }} />
                  </BookCta>
                </div>
                <a href="#how" className="btn btn-outline">
                  See How It Works
                </a>
              </div>
              <p style={{ marginTop: 14, fontSize: 12, opacity: 0.62, maxWidth: "30rem" }}>
                Pay only when you find your next hire.
              </p>
            </div>

            <div className="hero-image-wrap">
              <Image
                src="/custom-recruitment-hero.png"
                alt="RemoHires shortlist dashboard showing screened remote candidates ready to interview"
                width={1408}
                height={1008}
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="hero-image"
              />
              <div className="float-card">
                <IconTimezone />
                <div>
                  <p>Hours confirmed</p>
                  <p>Checked live before the shortlist</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="stats">
          <div className="container stats-grid">
            {STATS.map((s, i) => (
              <Reveal key={s.label} style={{ transitionDelay: `${i * 100}ms` }}>
                <StatCounter value={s.value} />
                <p className="stat-label">{s.label}</p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Value narrative */}
        <section id="why" className="section container">
          <Reveal>
            <h2 className="section-title">Hand the search to someone who does this full time</h2>
            <p className="section-subtitle">
              Hiring gets squeezed between meetings. We take it off your desk: one recruiter learns the role,
              runs the calls, and comes back with people you can decide on.
            </p>
          </Reveal>
          <div className="outcomes-grid">
            {OUTCOMES.map((o, i) => (
              <Reveal key={o.title} className="outcome-card" style={{ transitionDelay: `${i * 100}ms` }}>
                <span className="icon-wrap">{o.icon}</span>
                <h3>{o.title}</h3>
                <p>{o.body}</p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Split feature */}
        <section className="bg-mist section">
          <div className="container split-grid">
            <Reveal variant="scale">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/custom-recruitment-split.png"
                alt="A recruiter reviewing a screened candidate profile during a video call"
                width={1200}
                height={1408}
                loading="lazy"
                className="split-image"
              />
            </Reveal>
            <div>
              <Reveal>
                <h2 className="section-title">Built around your role, not a database query</h2>
              </Reveal>
              <div className="feature-list">
                {FEATURES.map((f, i) => (
                  <Reveal key={f.title} className="feature-item" style={{ transitionDelay: `${i * 120}ms` }}>
                    <h3>{f.title}</h3>
                    <p>{f.body}</p>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section id="how" className="section container">
          <Reveal>
            <p className="eyebrow">The process</p>
            <h2 className="section-title" style={{ marginTop: "0.75rem", maxWidth: "33rem" }}>
              Five steps. Only one is yours.
            </h2>
          </Reveal>
          <Steps steps={STEPS} />
        </section>

        {/* Comparison */}
        <section id="compare" className="bg-mist section">
          <div className="container">
            <Reveal>
              <h2 className="section-title" style={{ maxWidth: "33rem" }}>
                How the usual options compare
              </h2>
            </Reveal>
            <div className="table-wrap">
              <table className="comparison-table">
                <thead>
                  <tr>
                    <th>Where it counts</th>
                    <th>RemoHires</th>
                    <th>Staffing agency</th>
                    <th>Hiring yourself</th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON_ROWS.map((row) => (
                    <tr key={row.label}>
                      <td>{row.label}</td>
                      <td>{row.remo}</td>
                      <td>{row.agency}</td>
                      <td>{row.diy}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Roles */}
        <section id="roles" className="section container">
          <Reveal>
            <h2 className="section-title" style={{ maxWidth: "33rem" }}>
              Roles we search for most
            </h2>
            <p className="section-subtitle" style={{ maxWidth: "33rem" }}>
              Routine support or hard-to-find specialist, we run the same thorough search either way.
            </p>
          </Reveal>
          <div className="roles-grid">
            {ROLES.map((role, i) => (
              <Reveal key={role} className="role-card" style={{ transitionDelay: `${i * 80}ms` }}>
                <span>{role}</span>
                <IconArrowRight />
              </Reveal>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="section container" style={{ maxWidth: "48rem" }}>
          <Reveal>
            <h2 className="section-title">Questions</h2>
          </Reveal>
          <Faq items={FAQS} />
        </section>

        {/* CTA */}
        <section id="shortlist" className="section container" style={{ paddingTop: 0 }}>
          <Reveal variant="scale">
            <div className="cta-box">
              <div className="cta-glow" />
              <h2>Name the seat. We will start the search.</h2>
              <p>
                Book a call and tell us the must-haves and hours you need covered. A recruiter replies the same
                working day.
              </p>
              <div style={{ position: "relative", marginTop: "2rem" }}>
                <BookCta
                  ctaName="final"
                  className="btn btn-lg bookbtn"
                  style={{
                    background: "var(--accent)",
                    color: "var(--accent-foreground)",
                    animation: "cr-pulse-soft 2s ease-in-out infinite",
                  }}
                >
                  Find My Next Hire
                  <IconArrowRight style={{ width: "1rem", height: "1rem" }} />
                </BookCta>
              </div>
            </div>
          </Reveal>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <Logo variant="footer" className="logo-img" />
          <div className="footer-inner">
            <p>Recruitment run for you, in your hours. remohires.com</p>
            <p>
              &copy; 2026 RemoHires &middot; <a href="/termsofservice">Terms</a> &middot;{" "}
              <a href="/privacypolicy">Privacy</a>
            </p>
          </div>
          <p style={{ opacity: 0.6, marginTop: 10, fontSize: 13.5 }}>(504) 265-1063</p>
        </div>
      </footer>
    </div>
  );
}
