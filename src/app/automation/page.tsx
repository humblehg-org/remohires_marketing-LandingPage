import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import styles from "./page.module.css";
import { Logo } from "@/components/automation/logo";
import { HeaderShadow } from "@/components/automation/header-shadow";
import { NavActive } from "@/components/automation/nav-active";
import { MobileNav } from "@/components/automation/mobile-nav";
import { StartLink } from "@/components/automation/start-link";
import { StartModal } from "@/components/automation/start-modal";
import { ScrollDepth } from "@/components/automation/scroll-depth";
import { Reveal } from "@/components/automation/reveal";
import { ChoreographedReveal } from "@/components/automation/choreographed-reveal";
import { ThemeToggle } from "@/components/automation/theme-toggle";

const inter = Inter({ subsets: ["latin"] });
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "Stop paying your team to do manual work | RemoHires",
  description:
    "Two weeks of a full-time automation engineer for $49. We map your operations, pitch three bottlenecks to automate, and build your favorite one. Live in 14 days, or we refund the $49 and pay you $500.",
};

export default function AutomationPage() {
  return (
    <div id="automation-page" className={`${styles.page} ${inter.className} ${jetbrainsMono.variable}`}>
      <ScrollDepth />
      <StartModal />
      <HeaderShadow />
      <NavActive />

      {/* ===================== NAVBAR ===================== */}
      <header id="automation-header" className={styles.header}>
        <div className={styles.headerBar}>
          <a href="#top" aria-label="RemoHires — home">
            <Logo className={styles.logo} />
          </a>
          <nav className={styles.navRight}>
            <a href="#how-it-works" data-nav-link="how-it-works" className={styles.navLink}>
              How it works
            </a>
            <a href="#what-it-costs" data-nav-link="what-it-costs" className={styles.navLink}>
              What it costs
            </a>
            <ThemeToggle />
            <StartLink className={`${styles.btn} ${styles.btnPrimary} ${styles.navStartBtn}`}>
              Start for $49
            </StartLink>
          </nav>
          <MobileNav />
        </div>
      </header>

      <main>
        {/* ===================== HERO ===================== */}
        <Reveal as="section" id="top" className={styles.hero}>
          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <h1 className={styles.heroHeading}>Stop paying your team to do manual work.</h1>
              <p className={styles.heroLead}>
                We find one repetitive process in your business, automate it using your existing
                tools, and have it running on autopilot within 14 days.
              </p>
              <div className={styles.ctaRow}>
                <StartLink className={`${styles.btn} ${styles.btnPrimary} ${styles.btnLg}`}>
                  Start My `$49 Sprint <span className={styles.arrow}>&rarr;</span>
                </StartLink>
              </div>
              <div className={styles.trustList}>
                <p className={styles.trustItem}>
                  <CheckIcon /> $49 to start
                </p>
                <p className={styles.trustItem}>
                  <CheckIcon /> Live in 14 days
                </p>
                <p className={styles.trustItem}>
                  <CheckIcon /> Risk-free guarantee
                </p>
              </div>
            </div>

            <div className={styles.heroVisual}>
              <div className={styles.mockCard}>
                <div className={styles.mockGlow} />
                <div className={styles.mockRowFaded}>
                  <div className={styles.mockIconBox}>
                    <BriefcaseIcon />
                  </div>
                  <div>
                    <p className={styles.mockLabel}>Human</p>
                    <p className={styles.mockText}>Copy &amp; pasting data all day</p>
                  </div>
                </div>

                <div className={styles.mockHighlightRow}>
                  <div className={`${styles.mockIconBox} ${styles.mockIconBoxPrimary}`}>
                    <BoltIcon />
                  </div>
                  <div>
                    <p className={styles.mockLabelPrimary}>Automation</p>
                    <p className={styles.mockTextPrimary}>Runs instantly in the background</p>
                  </div>
                </div>

                <div className={styles.mockRow}>
                  <div className={styles.mockIconBox}>
                    <PeopleIcon />
                  </div>
                  <div>
                    <p className={styles.mockLabel}>Human</p>
                    <p className={styles.mockText}>Focuses on high-value work</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* ===================== WHAT ARE YOU STILL DOING MANUALLY ===================== */}
        <Reveal as="section" className={styles.bottleneckSection}>
          <ChoreographedReveal className={styles.bottleneckAnim}>
            <div className={styles.bottleneckGrid}>
              <div className={styles.bottleneckImageWrap} data-anim="bottleImage">
                <div className={styles.bottleneckOverlay} />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1664575602276-acd073f104c1?q=80&w=800&auto=format&fit=crop"
                  alt="Business professional managing administrative workflows on a laptop"
                  loading="lazy"
                  className={styles.bottleneckImage}
                />
              </div>

              <div className={styles.bottleneckContent}>
                <span className={styles.eyebrow}>Manual Bottlenecks</span>
                <h2 className={styles.sectionHeading}>What are you still doing manually?</h2>
                <p className={styles.sectionLead}>
                  If your team is copying, checking, updating, writing, or following up by hand,
                  there&rsquo;s a good chance it can be automated.
                </p>

                <div className={styles.chipRow} data-anim="bottleChips">
                  <span className={styles.chip}>Sales</span>
                  <span className={styles.chip}>Operations</span>
                  <span className={styles.chip}>Finance</span>
                  <span className={styles.chip}>Customer Service</span>
                </div>

                <div className={styles.taskList} data-anim="bottleTasks">
                  <div className={styles.taskItem}>
                    <span className={styles.taskDot} /> Lead qualification
                  </div>
                  <div className={styles.taskItem}>
                    <span className={styles.taskDot} /> Quote generation
                  </div>
                  <div className={styles.taskItem}>
                    <span className={styles.taskDot} /> Follow-ups
                  </div>
                </div>

                <div className={styles.transitionRow} data-anim="bottleTransition">
                  <span>&rarr;</span> There&rsquo;s a good chance it can be automated.
                </div>
              </div>
            </div>
          </ChoreographedReveal>
        </Reveal>

        {/* ===================== VISUAL BEFORE / AFTER ===================== */}
        <Reveal as="section" className={styles.beforeAfterSection}>
          <div className={styles.beforeAfterHead}>
            <h2 className={styles.sectionHeading}>Example: Eliminating the bottleneck</h2>
            <p className={styles.sectionLead}>
              This is just one example. We will map and build a specific workflow tailored
              exactly to your business.
            </p>
          </div>

          <div className={styles.compareGrid}>
            <div className={`${styles.compareCard} ${styles.compareCardBefore}`}>
              <div className={styles.compareBadgeRow}>
                <div className={`${styles.compareBadge} ${styles.compareBadgeBefore}`}>
                  Before: Manual
                </div>
              </div>
              <div className={styles.stepList}>
                <div className={styles.stepListLine} />
                <div className={styles.stepItem}>
                  <div className={styles.stepNumber}>1</div>
                  <div>
                    <div className={styles.stepTitle}>Email arrives</div>
                    <div className={styles.stepDesc}>Customer request comes in</div>
                  </div>
                </div>
                <div className={styles.stepItem}>
                  <div className={styles.stepNumber}>2</div>
                  <div>
                    <div className={styles.stepTitle}>Employee processes it</div>
                    <div className={styles.stepDesc}>
                      Reads, copies information, updates CRM, creates quote
                    </div>
                  </div>
                </div>
                <div className={styles.stepItem}>
                  <div className={styles.stepNumber}>3</div>
                  <div>
                    <div className={styles.stepTitle}>Manual follow-up</div>
                    <div className={styles.stepDesc}>Sends response and remembers to follow up</div>
                  </div>
                </div>
              </div>
            </div>

            <div className={`${styles.compareCard} ${styles.compareCardAfter}`}>
              <div className={styles.compareCardAfterGlow} />
              <div className={styles.compareBadgeRow}>
                <div className={`${styles.compareBadge} ${styles.compareBadgeAfter}`}>
                  After: Automated
                </div>
              </div>
              <div className={`${styles.stepList} ${styles.stepListAfter}`}>
                <div className={`${styles.stepListLine} ${styles.stepListLineAfter}`} />
                <div className={styles.stepItem}>
                  <div className={`${styles.stepNumber} ${styles.stepNumberAfter}`}>1</div>
                  <div className={styles.stepItemPad}>
                    <div className={styles.stepTitle}>Email arrives</div>
                  </div>
                </div>
                <div className={styles.stepItem}>
                  <div className={styles.stepIconCircle}>
                    <BoltIconSmall />
                  </div>
                  <div>
                    <div className={styles.stepTitle}>Automation handles the workflow</div>
                    <div className={styles.stepDesc}>CRM + quote + response + follow-up</div>
                  </div>
                </div>
                <div className={styles.stepItem}>
                  <div className={`${styles.stepNumber} ${styles.stepNumberAfter}`}>3</div>
                  <div className={styles.stepItemPad}>
                    <div className={styles.stepTitle}>Human handles exceptions</div>
                  </div>
                </div>
              </div>
              <div className={styles.afterFooterNote}>
                <span>Your team only handles what needs a human.</span>
              </div>
            </div>
          </div>
        </Reveal>

        {/* ===================== BUSINESS IMPACT ===================== */}
        <Reveal as="section" id="impact-section" className={styles.impactSection}>
          <div className={styles.impactHead}>
            <h2 className={styles.sectionHeading}>What changes when one process runs itself?</h2>
            <p className={styles.impactLead}>Less busywork. More capacity.</p>
          </div>

          <ChoreographedReveal className={styles.impactAnim}>
            <div className={styles.impactLineDesktop} />
            <div className={styles.impactLineMobile} />
            <div className={styles.impactGrid}>
              {[
                { n: "01", t: "Save Team Time", d: "Remove repetitive work from your team's day." },
                { n: "02", t: "Respond Faster", d: "Keep leads and customer requests moving." },
                { n: "03", t: "Fewer Errors", d: "Less copying. Less manual input." },
                { n: "04", t: "More Capacity", d: "Handle more work without adding headcount." },
              ].map((item) => (
                <div className={styles.impactItem} key={item.n}>
                  <div className={styles.impactIconBox}>
                    <span className={styles.impactIconNumber}>{item.n}</span>
                  </div>
                  <div>
                    <h3 className={styles.impactItemTitle}>{item.t}</h3>
                    <p className={styles.impactItemDesc}>{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </ChoreographedReveal>
        </Reveal>

        {/* ===================== PROCESS / DISCOVERY ===================== */}
        <Reveal as="section" id="how-it-works" className={styles.processSection}>
          <div className={styles.processHead}>
            <h2 className={styles.sectionHeading}>
              We Find What to Automate.
              <br />
              You Pick What Matters.
            </h2>
            <p className={styles.processLead}>
              You don&rsquo;t need to know what to automate. We find the opportunities for you,
              and you choose the one that matters most.
            </p>
          </div>

          <div className={styles.processCardsGrid}>
            <div className={styles.processCard}>
              <span className={styles.processCardNumber}>01</span>
              <h3 className={styles.processCardTitle}>We find 3 opportunities</h3>
              <p className={styles.processCardDesc}>
                We review your workflows and identify where automation can help most.
              </p>
            </div>
            <div className={styles.processCard}>
              <span className={styles.processCardNumber}>02</span>
              <h3 className={styles.processCardTitle}>You pick one</h3>
              <p className={styles.processCardDesc}>
                Choose the opportunity that matters most to your business.
              </p>
            </div>
            <div className={styles.processCard}>
              <span className={styles.processCardNumber}>03</span>
              <h3 className={styles.processCardTitle}>We build it</h3>
              <p className={styles.processCardDesc}>
                We build the automation around your existing workflow.
              </p>
            </div>
          </div>

          <div className={styles.processAnimCard}>
            <ChoreographedReveal className={styles.processAnim}>
              <div className={styles.animStep1}>Your Workflow</div>

              <div className={styles.animArrow1}>
                <span className={styles.arrowIconWrap}>
                  <ArrowDownIcon />
                </span>
              </div>

              <div className={styles.processCardsInner}>
                <div className={styles.animCardsGrid}>
                  <div className={styles.animCard1}>
                    <div className={styles.cardIconCircle}>
                      <BoltIconSmall />
                    </div>
                    <div className={styles.cardText}>Automate lead follow-ups</div>
                  </div>

                  <div className={styles.animCard2}>
                    <div className={styles.animCard2Row}>
                      <div className={styles.cardIconCircle}>
                        <BoltIconSmall />
                      </div>
                      <div className={styles.cardText}>Automate quote generation</div>
                    </div>
                    <div className={styles.pickLabel}>
                      You pick one <ArrowRightIcon />
                    </div>
                  </div>

                  <div className={styles.animCard3}>
                    <div className={styles.cardIconCircle}>
                      <BoltIconSmall />
                    </div>
                    <div className={styles.cardText}>Automate CRM updates</div>
                  </div>
                </div>

                <div className={styles.analyzingBg} />
                <div className={styles.analyzingLabel}>Analyzing</div>
              </div>
            </ChoreographedReveal>
          </div>
        </Reveal>

        {/* ===================== GUARANTEE & OWNERSHIP ===================== */}
        <Reveal as="section" id="what-it-costs" className={styles.guaranteeSection}>
          <div className={styles.guaranteeGrid}>
            <div className={styles.guaranteeCard}>
              <div className={styles.guaranteeCardIconWrap}>
                <ShieldIcon />
              </div>
              <span className={styles.eyebrow}>The Guarantee</span>
              <h3 className={styles.guaranteeCardTitle}>
                Live in 14 days or we refund your $49 and pay you $500.
              </h3>
              <p className={styles.guaranteeCardText}>
                We don&rsquo;t sell plans or prototypes. If you don&rsquo;t have a working
                automation running in your accounts by day 14, we refund your $49 and send you
                $500 to compensate you for your team&rsquo;s time. It is written into our
                agreement.
              </p>
            </div>

            <div className={styles.guaranteeCard}>
              <div className={styles.guaranteeCardIconWrap}>
                <LockIcon />
              </div>
              <span className={styles.eyebrow}>Ownership</span>
              <h3 className={styles.guaranteeCardTitle}>You Own It. No Lock-In.</h3>
              <p className={styles.guaranteeCardText}>
                Built in your own tools and accounts. You keep the automation after the sprint.
                No subscription required.
              </p>
            </div>
          </div>
        </Reveal>

        {/* ===================== FAQ ===================== */}
        <Reveal as="section" className={styles.faqSection}>
          <div className={styles.faqHead}>
            <h2 className={styles.faqHeading}>Frequently Asked Questions</h2>
          </div>

          <div className={styles.faqList}>
            {FAQS.map((faq) => (
              <details key={faq.q} className={styles.faqItem}>
                <summary className={styles.faqSummary}>
                  {faq.q}
                  <span className={styles.faqChevron}>
                    <ChevronIcon />
                  </span>
                </summary>
                <div className={styles.faqAnswer}>{faq.a}</div>
              </details>
            ))}
          </div>

          <div className={styles.faqCta}>
            <StartLink className={`${styles.btn} ${styles.btnPrimary} ${styles.btnLg} ${styles.faqCtaBtn}`}>
              Start My `$49 Sprint
            </StartLink>
          </div>
        </Reveal>
      </main>

      {/* ===================== FOOTER ===================== */}
      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <div className={styles.footerBrand}>
            <Logo className={styles.footerLogo} variant="footer" />
            <p className={styles.footerTagline}>
              A full-time automation engineer, working only on your business, for two weeks. $49.
            </p>
          </div>
          <nav className={styles.footerNav}>
            <a href="https://page.remohires.com/termsofservice" target="_blank" rel="noopener" className={styles.footerLink}>
              Agreement
            </a>
            <a href="https://page.remohires.com/termsofservice" target="_blank" rel="noopener" className={styles.footerLink}>
              Guarantee terms
            </a>
            <a href="/privacypolicy" className={styles.footerLink}>
              Privacy
            </a>
            <StartLink className={styles.footerLink}>Contact</StartLink>
          </nav>
          <div className={styles.footerBottom}>
            <span>RemoHires</span>
          </div>
        </div>
      </footer>

      {/* Mobile sticky CTA */}
      <div className={styles.stickyCta}>
        <StartLink className={`${styles.btn} ${styles.btnPrimary} ${styles.stickyCtaBtn}`}>
          Start my two weeks for $49
        </StartLink>
      </div>
    </div>
  );
}

const FAQS = [
  {
    q: "Do I need to know what to automate?",
    a: "No. Finding the bottleneck is part of our job. We observe your operations and pitch 3 distinct opportunities for you to choose from.",
  },
  {
    q: "What kind of work can you automate?",
    a: "Any repetitive, rule-based software task. Things like drafting quotes from emails, moving data between a CRM and invoicing tools, or routing support requests.",
  },
  {
    q: "Do you work with my existing tools?",
    a: "Yes. We wire together the software you already use and pay for. You don't have to migrate to any new platform.",
  },
  {
    q: "Will this replace my employees?",
    a: "No. We remove tedious data entry so your existing team can handle more volume without being overwhelmed.",
  },
  {
    q: "Where does the automation live? Who owns it?",
    a: "It lives entirely within your own accounts. You grant us temporary access to build it, and you retain 100% ownership forever.",
  },
  {
    q: "What happens if it isn't live within 14 days?",
    a: "We refund your $49 instantly and send you $500 as compensation for wasting your time.",
  },
  {
    q: "What happens after the sprint?",
    a: "You keep the automation. If you like the result, you can choose to hire us for more work, but there is zero obligation.",
  },
];

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 13l4 4L19 7" />
    </svg>
  );
}
function BriefcaseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
    </svg>
  );
}
function BoltIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  );
}
function BoltIconSmall() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  );
}
function PeopleIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  );
}
function ArrowDownIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
    </svg>
  );
}
function ArrowRightIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
  );
}
function ShieldIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  );
}
function LockIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
    </svg>
  );
}
function ChevronIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" clipRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
    </svg>
  );
}
