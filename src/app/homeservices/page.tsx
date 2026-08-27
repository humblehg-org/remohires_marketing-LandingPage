import type { Metadata, Viewport } from "next";
import styles from "./page.module.css";
import { Logo } from "@/components/homeservices/logo";
import { AuditTrigger } from "@/components/homeservices/audit-trigger";
import { AuditModal } from "@/components/homeservices/audit-modal";
import { SmoothScroll } from "@/components/homeservices/smooth-scroll";
import { MobileNavCta } from "@/components/homeservices/mobile-nav-cta";

export const metadata: Metadata = {
  title: "Work The Leads You Already Own | RemoHires",
  description:
    "The quotes you already sent, and the customers you already served, are worth more than another bought lead. We put a full-time specialist on them, by call and text, in your company name.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

const VALUE_PROPS = [
  {
    icon: (
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.39 15.45a6.5 6.5 0 1 1 1.06-1.06l5.15 5.15a.75.75 0 1 1-1.06 1.06l-5.15-5.15ZM6.46 13.88a5 5 0 1 1 7.07-7.07 5 5 0 0 1-7.07 7.07Z"
        fill="currentColor"
      />
    ),
    title: "Leads Nobody Else Can Buy",
    text: "Every bought lead is sold to four shops. Your estimates and past customers are yours alone.",
  },
  {
    icon: (
      <path
        d="M5 9.86C6.9 14 10.3 17.4 14.6 19.2l.7.3c1.5.7 3.4.1 4.3-1.3l.9-1.3c.3-.4.2-1-.2-1.4L17.3 13c-.4-.4-1.1-.3-1.4.2l-.9 1.3c-2.4-1.2-4.3-3.1-5.5-5.5l1.3-.9c.4-.3.5-1 .2-1.4L8.4 3.7c-.3-.4-.9-.5-1.3-.2L5.7 4.4C4.3 5.3 3.8 7.2 4.5 8.7L5 9.86Z"
        fill="currentColor"
      />
    ),
    title: "A Real Person, In Your Name",
    text: "Your specialist calls and texts on a day 1, 3, 7 cadence. Not a bot that stops on day three.",
  },
  {
    icon: (
      <path
        d="M13.16 4.41c-.71-.43-1.6-.43-2.32 0l-.51.31A11.6 11.6 0 0 1 6.2 6.07l-.32.03A1.34 1.34 0 0 0 4.75 7.35v1.64c0 2.78 1.13 5.44 3.13 7.37l3.25 3.15c.49.47 1.26.47 1.74 0l3.26-3.15a10.3 10.3 0 0 0 3.12-7.37V7.35c0-.65-.49-1.19-1.13-1.25l-.33-.03a11.6 11.6 0 0 1-4.11-1.35l-.52-.31Z"
        fill="currentColor"
      />
    ),
    title: "$49 To Try, Refund If Not",
    text: "Two weeks, one charge, month to month after. Refund the $49 if it is not worth continuing.",
  },
];

const STEPS = [
  {
    title: "Free Estimate Audit",
    text: "We count the open estimates in your system and show you the dollar value.",
  },
  {
    title: "Your Specialist Works The List",
    text: "Every quote you sent and every past customer, worked by call and text, logged in your software.",
  },
  {
    title: "You Keep The Booked Jobs",
    text: "You approve every script. Keep going for from $450 a month, month to month, or stop.",
  },
];

const FAQS = [
  {
    q: "Is This A Real Person?",
    a: "Yes, a dedicated full-time specialist, many based in Indonesia, screened for clear English. Not a bot.",
  },
  {
    q: "What Does It Cost?",
    a: "$49 for two weeks. From $450 a month after, only if you continue. No annual contract.",
  },
  {
    q: "What Happens After I Submit?",
    a: "A real person replies to book your free 10-minute audit. No spam, no card.",
  },
];

export default function HomeServicesPage() {
  return (
    <div className={styles.page}>
      <SmoothScroll />
      <AuditModal />

      <div className={styles.strip}>
        Built For <b>Home Service</b> Owners Across The US
      </div>

      <header className={styles.header}>
        <div className={styles.hd}>
          <a href="#top" aria-label="RemoHires — home">
            <Logo className={styles.logo} />
          </a>
          <nav className={styles.nav}>
            <a href="#why">Why It Works</a>
            <a href="#how">How It Works</a>
            <a href="#pricing">Pricing</a>
            <AuditTrigger className={styles.btn}>Get Free Audit</AuditTrigger>
          </nav>
          <MobileNavCta />
        </div>
      </header>

      <main>
        {/* HERO */}
        <section id="top" className={`${styles.section} ${styles.hero}`}>
          <div className={styles.wrap}>
            <div className={styles.heroGrid}>
              <div>
                <span className={styles.eyebrow}>Home Service Owners</span>
                <h1 className={styles.heroHeading}>
                  <span className={styles.heroHeadingLine}>Work The Leads</span>
                  <br />
                  <span className={`${styles.heroHeadingLine} ${styles.hl}`}>You Already Own.</span>
                </h1>
                <p className={styles.sub}>
                  The quotes you already sent, and the customers you already served, are worth more than
                  another bought lead. We put a full-time specialist on them, by call and text, in your
                  company name.
                </p>
                <div className={styles.price}>$49 Two-Week Trial, Then From $450/Month</div>
                <div style={{ marginTop: 22 }}>
                  <AuditTrigger className={`${styles.btn} ${styles.btnGrad} ${styles.btnLg}`}>
                    Get Your Free Estimate Audit
                  </AuditTrigger>
                </div>
                <p className={styles.micro}>
                  Free 10-minute audit. No card. See the dollar value sitting in your pipeline.
                </p>
              </div>

              <div className={`${styles.rev} ${styles.heroVisual}`}>
                <div className={styles.card}>
                  <div className={styles.cap}>
                    <span className={styles.ic}>
                      <svg className={styles.svg} viewBox="0 0 24 24" fill="none">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M8.5 3.5C6.01 3.5 4 5.51 4 8V18h.04C4.28 19.7 5.74 21 7.5 21H19a1 1 0 0 0 1-1V5a1.5 1.5 0 0 0-1.5-1.5H8.5ZM7.5 15.5H18.5v4H7.5A2 2 0 0 1 7.5 15.5Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                    <div>
                      <b>Open Estimates, Last 90 Days</b>
                      <small>Pulled from your system, sorted by value</small>
                    </div>
                  </div>
                  <div className={styles.erow}>
                    <div className={styles.t}>
                      <b>4620 Live Oak Dr, Full Replacement</b>
                      <small>Sent 74 days ago</small>
                    </div>
                    <div className={styles.v}>$12,000</div>
                    <span className={styles.tag}>Day 3</span>
                  </div>
                  <div className={styles.erow}>
                    <div className={styles.t}>
                      <b>212 Magnolia Ct, New Install</b>
                      <small>Sent 61 days ago</small>
                    </div>
                    <div className={styles.v}>$8,400</div>
                    <span className={styles.tag}>Day 7</span>
                  </div>
                  <div className={styles.erow}>
                    <div className={styles.t}>
                      <b>88 Riverside Ave, Repair</b>
                      <small>Sent 21 days ago</small>
                    </div>
                    <div className={styles.v}>$3,200</div>
                    <span className={styles.tag}>Day 1</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WHY */}
        <section id="why" className={`${styles.section} ${styles.tint}`}>
          <div className={styles.wrap}>
            <span className={`${styles.eyebrow} ${styles.rev}`}>Why It Works</span>
            <h2 className={`${styles.heading2} ${styles.rev}`} style={{ marginTop: 10, marginBottom: 4 }}>
              Leads Nobody Else Can Reach
            </h2>
            <div className={styles.grid3}>
              {VALUE_PROPS.map((vp) => (
                <div className={`${styles.vp} ${styles.rev}`} key={vp.title}>
                  <span className={styles.ic}>
                    <svg className={styles.svg} viewBox="0 0 24 24" fill="none">
                      {vp.icon}
                    </svg>
                  </span>
                  <b>{vp.title}</b>
                  <p>{vp.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* HOW */}
        <section id="how" className={styles.section}>
          <div className={styles.wrap}>
            <span className={`${styles.eyebrow} ${styles.rev}`}>How It Works</span>
            <h2 className={`${styles.heading2} ${styles.rev}`} style={{ marginTop: 10 }}>
              Three Simple Steps
            </h2>
            <div className={styles.steps}>
              {STEPS.map((step, i) => (
                <div className={`${styles.step} ${styles.rev}`} key={step.title}>
                  <span className={styles.n}>{i + 1}</span>
                  <div>
                    <b>{step.title}</b>
                    <p>{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PRICING */}
        <section id="pricing" className={`${styles.section} ${styles.tint}`}>
          <div className={styles.wrap}>
            <div className={`${styles.pricebar} ${styles.rev}`}>
              <span className={styles.eyebrow} style={{ color: "#8fb0ff" }}>
                Simple, Honest Pricing
              </span>
              <h2 className={styles.pricebarHeading}>$49 For Two Weeks, Then From $450 A Month</h2>
              <p>
                One charge to start. Month to month after, no annual contract. Refund the $49 if it is not
                worth continuing.
              </p>
              <AuditTrigger className={`${styles.btn} ${styles.btnLg}`}>
                Get Your Free Estimate Audit
              </AuditTrigger>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className={styles.section}>
          <div className={`${styles.wrap} ${styles.faqwrap}`}>
            <span className={`${styles.eyebrow} ${styles.rev}`}>Questions</span>
            <h2 className={`${styles.heading2} ${styles.rev}`} style={{ marginTop: 10 }}>
              Questions, Answered
            </h2>
            {FAQS.map((faq) => (
              <div className={`${styles.faq} ${styles.rev}`} key={faq.q}>
                <b>{faq.q}</b>
                <p>{faq.a}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className={styles.footer}>
        <div className={styles.wrap}>
          <Logo className={styles.footerLogo} variant="footer" />
          <p>Full-Time Remote Specialists For Home Service Owners. remohires.com</p>
          <p style={{ marginTop: 8 }}>
            &copy; 2026 RemoHires &middot; <a href="/termsofservice">Terms</a> &middot;{" "}
            <a href="/privacypolicy">Privacy</a>
          </p>
          <p style={{ opacity: 0.6, marginTop: 8 }}>PT Sentra Talenta Unggul &middot; (504) 265-1063</p>
        </div>
      </footer>
    </div>
  );
}
