import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import styles from "./page.module.css";
import { HeaderShadow } from "@/components/chatgpt-automation/header-shadow";
import { NavActive } from "@/components/chatgpt-automation/nav-active";
import { MobileNav } from "@/components/chatgpt-automation/mobile-nav";
import { ThemeToggle } from "@/components/chatgpt-automation/theme-toggle";
import { StartLink } from "@/components/chatgpt-automation/start-link";
import { StartModal } from "@/components/chatgpt-automation/start-modal";
import { Reveal } from "@/components/chatgpt-automation/reveal";
import { ChoreographedReveal } from "@/components/chatgpt-automation/choreographed-reveal";
import { ScrollDepth } from "@/components/chatgpt-automation/scroll-depth";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "Turn your ChatGPT into an actual workflow | RemoHires",
  description:
    "Two weeks of a full-time automation engineer for $49. We map your operations, pitch three bottlenecks to automate, and build your favorite one. Live in 14 days, or we refund the $49 and pay you $500.",
};

const CATEGORY_CHIPS = ["Sales", "Operations", "Finance", "Customer Service"];

const EXAMPLE_TASKS = ["Lead qualification", "Quote generation", "Follow-ups"];

const BEFORE_STEPS = [
  { title: "Email arrives", body: "Customer request comes in" },
  { title: "Employee processes it", body: "Reads, copies information, updates CRM, creates quote" },
  { title: "Manual follow-up", body: "Sends response and remembers to follow up" },
];

const IMPACT_ITEMS = [
  { n: "01", title: "Save Team Time", body: "Remove repetitive work from your team's day." },
  { n: "02", title: "Respond Faster", body: "Keep leads and customer requests moving." },
  { n: "03", title: "Fewer Errors", body: "Less copying. Less manual input." },
  { n: "04", title: "More Capacity", body: "Handle more work without adding headcount." },
];

const PROCESS_STEPS = [
  { n: "01", title: "We find 3 opportunities", body: "We review your workflows and identify where automation can help most." },
  { n: "02", title: "You pick one", body: "Choose the opportunity that matters most to your business." },
  { n: "03", title: "We build it", body: "We build the automation around your existing workflow." },
];

const PROCESS_CARDS = [
  { label: "Automate lead follow-ups", winning: false },
  { label: "Automate quote generation", winning: true },
  { label: "Automate CRM updates", winning: false },
];

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
    <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

function BoltIcon() {
  return (
    <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  );
}

const RemoHiresLogo = ({ className }: { className?: string }) => (
  <svg role="img" aria-label="RemoHires" className={className} viewBox="0 0 174 44" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#chatgpt-automation-logo-clip)">
      <path d="M46.2173 31.1603V12.0805H53.5412C58.1507 12.0805 60.7629 14.3237 60.7629 18.2686C60.7629 20.7438 59.713 22.4971 57.613 23.58L60.9422 31.1603H56.4097L53.5671 24.4824H50.366V31.1603H46.2173ZM50.3655 20.8211H53.5154C55.3334 20.8211 56.3833 19.8929 56.3833 18.2686C56.3833 16.6442 55.3845 15.7934 53.5407 15.7934H50.3655V20.8211Z" fill="#00F7DF" />
      <path d="M61.2491 24.6887C61.2491 20.6665 63.9378 17.8561 67.8045 17.8561C71.6713 17.8561 74.3347 20.5118 74.3347 24.7145V25.7201L65.0389 25.7716C65.2692 27.4733 66.2169 28.2726 67.9579 28.2726C69.4432 28.2726 70.4932 27.7312 70.7747 26.803H74.3853C73.9246 29.6649 71.3893 31.4956 67.8809 31.4956C64.0142 31.4956 61.2485 28.6594 61.2485 24.6887H61.2491ZM65.0905 23.3222H70.4168C70.4168 21.9557 69.4179 21.079 67.8303 21.079C66.2427 21.079 65.3978 21.7752 65.0905 23.3222Z" fill="#00F7DF" />
      <path d="M76.1528 31.1604V18.2686H79.8404L80.0965 19.6094C80.737 18.707 81.9914 17.8561 83.8352 17.8561C85.679 17.8561 86.9851 18.7585 87.7278 20.1251C88.3935 18.7585 89.9047 17.8561 91.7485 17.8561C95.0518 17.8561 96.691 19.7899 96.691 22.7292V31.1604H92.7473V23.8379C92.7473 22.2135 91.9024 21.44 90.6474 21.44C89.5204 21.44 88.394 22.0588 88.394 24.2504V31.1604H84.4503V23.8379C84.4503 22.2393 83.6307 21.4658 82.3762 21.4658C81.2493 21.4658 80.0971 22.0846 80.0971 24.2504V31.1604H76.1533H76.1528Z" fill="#00F7DF" />
      <path d="M105.372 17.8819C109.443 17.8819 112.413 20.6149 112.413 24.6887C112.413 28.7625 109.443 31.4698 105.372 31.4698C101.3 31.4698 98.3037 28.7625 98.3037 24.6887C98.3037 20.6149 101.274 17.8819 105.372 17.8819ZM105.372 27.9117C107.19 27.9117 108.444 26.6225 108.444 24.6629C108.444 22.7034 107.189 21.44 105.372 21.44C103.554 21.44 102.273 22.7292 102.273 24.6629C102.273 26.5967 103.528 27.9117 105.372 27.9117Z" fill="#00F7DF" />
      <path d="M114.667 31.1603V12.0805H118.815V19.6093H126.139V12.0805H130.287V31.1603H126.139V23.4768H118.815V31.1603H114.667Z" fill="currentColor" />
      <path d="M132.925 13.9886C132.925 12.7252 133.924 11.7454 135.179 11.7454C136.433 11.7454 137.407 12.7252 137.407 13.9886C137.407 15.2519 136.408 16.2575 135.179 16.2575C133.949 16.2575 132.925 15.2519 132.925 13.9886ZM133.233 18.2686H137.176V31.1603H133.233V18.2686Z" fill="currentColor" />
      <path d="M148.444 22.0072H147.189C144.935 22.0072 143.578 23.0128 143.578 25.5653V31.1604H139.634V18.2944H143.348L143.553 20.2024C144.09 18.939 145.217 18.0881 146.933 18.0881C147.394 18.0881 147.906 18.1397 148.444 18.2686V22.0072Z" fill="currentColor" />
      <path d="M148.853 24.6887C148.853 20.6665 151.542 17.8561 155.409 17.8561C159.275 17.8561 161.939 20.5118 161.939 24.7145V25.7201L152.643 25.7716C152.873 27.4733 153.821 28.2726 155.562 28.2726C157.048 28.2726 158.098 27.7312 158.379 26.803H161.99C161.529 29.6649 158.994 31.4956 155.485 31.4956C151.619 31.4956 148.853 28.6594 148.853 24.6887ZM152.694 23.3222H158.021C158.021 21.9557 157.022 21.079 155.434 21.079C153.847 21.079 153.002 21.7752 152.694 23.3222Z" fill="currentColor" />
      <path d="M166.574 27.0866C166.625 27.989 167.29 28.5305 168.494 28.5305C169.698 28.5305 170.287 28.0921 170.287 27.4218C170.287 27.035 170.082 26.6225 169.135 26.4162L166.779 25.9006C164.423 25.3849 163.27 24.3535 163.27 22.0846C163.27 19.4031 165.549 17.8561 168.622 17.8561C171.695 17.8561 173.667 19.6094 173.667 22.2135H169.929C169.929 21.3369 169.391 20.7439 168.443 20.7439C167.547 20.7439 166.984 21.208 166.984 21.9041C166.984 22.4971 167.47 22.8323 168.367 23.0386L170.748 23.5543C172.848 24.0184 174 24.9981 174 27.0608C174 29.8196 171.67 31.4956 168.341 31.4956C165.012 31.4956 162.835 29.6907 162.835 27.0866H166.574H166.574Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M22.4571 19.6016C23.7782 20.9207 23.7782 23.0793 22.4571 24.3984C21.136 25.718 18.9741 25.718 17.6529 24.3984C16.3318 23.0788 16.3318 20.9202 17.6529 19.6016C18.9741 18.282 21.136 18.282 22.4571 19.6016Z" fill="#0F2170" />
      <path d="M1.03219 10.9455C-3.44142 20.1925 7.47093 25.8922 17.6742 13.8833C23.1952 7.38481 33.6737 6.25549 38.4959 9.90952C35.2375 4.97405 30.0445 1.42573 23.9936 0.344372L23.9533 0.337153C23.8154 0.312917 23.677 0.290227 23.5376 0.268569L23.3522 0.240207C23.254 0.225768 23.1549 0.211845 23.0557 0.198438C22.9307 0.181937 22.8057 0.165951 22.6803 0.151512L22.4799 0.128307C22.3833 0.117994 22.2867 0.108196 22.1901 0.0994295L22.0465 0.0865378C21.8694 0.0710677 21.6928 0.0576603 21.5146 0.0463156L21.3452 0.0354865C21.2558 0.0303298 21.166 0.0262045 21.0761 0.0220791L20.8261 0.012797C20.7445 0.00970303 20.6619 0.00712469 20.5803 0.00506201C20.4362 0.00196799 20.2921 -9.46823e-05 20.1475 -0.000610352H20.005C11.9053 0.0292985 4.83697 4.42125 1.03219 10.9455Z" fill="#0F2170" />
      <path fillRule="evenodd" clipRule="evenodd" d="M21.4563 0.0428006C21.6469 0.0546609 21.837 0.068584 22.0275 0.0856011L22.0658 0.0886951C22.2217 0.102618 22.3772 0.118088 22.5326 0.135105L22.7434 0.159342L22.9747 0.187704C29.601 1.05403 35.2996 4.86018 38.717 10.2515C44.0929 19.8986 32.8955 26.1898 22.4397 13.8834C16.96 7.43441 6.59977 6.27363 1.729 9.82763C5.66548 3.92167 12.3842 0.0237208 20.017 0H20.175L20.4776 0.00464102C20.6677 0.00825071 20.8588 0.0139231 21.0504 0.0216581H21.0638C21.1945 0.0273305 21.3252 0.0345498 21.4563 0.0428006Z" fill="#00F7DF" />
      <path d="M39.0785 33.0544C43.5521 23.8074 32.6397 18.1077 22.4365 30.1166C16.9155 36.6151 6.43696 37.7444 1.61475 34.0904C4.87259 39.0258 10.0661 42.5742 16.1165 43.6555L16.1568 43.6627C16.2947 43.687 16.4331 43.7097 16.5725 43.7313L16.758 43.7597C16.8561 43.7741 16.9552 43.788 17.0544 43.8014C17.1794 43.818 17.3044 43.8339 17.4299 43.8484L17.6303 43.8716C17.7268 43.8819 17.8234 43.8917 17.92 43.9005L18.0636 43.9134C18.2407 43.9288 18.4174 43.9422 18.5955 43.9536L18.7649 43.9644C18.8543 43.9696 18.9441 43.9737 19.034 43.9778L19.284 43.9871C19.3656 43.9902 19.4482 43.9928 19.5298 43.9948C19.6739 43.9979 19.818 44 19.9626 44.0005H20.1052C28.2048 43.9711 35.2732 39.5792 39.0779 33.0549" fill="#0F2170" />
      <path fillRule="evenodd" clipRule="evenodd" d="M18.6538 43.9572C18.4632 43.9453 18.2731 43.9314 18.0826 43.9144L18.0444 43.9113C17.8884 43.8974 17.7329 43.8819 17.5775 43.8649L17.3668 43.8407L17.1354 43.8123C10.5092 42.946 4.81051 39.1398 1.39307 33.7485C-3.98279 24.1013 7.21464 17.8102 17.6704 30.1166C23.1496 36.5656 33.5098 37.7264 38.3806 34.1724C34.4441 40.0788 27.7255 43.9763 20.0932 44H19.9351L19.6325 43.9959C19.4424 43.9923 19.2513 43.9866 19.0597 43.9789H19.0463C18.9156 43.9732 18.785 43.9654 18.6538 43.9577" fill="#00F7DF" />
    </g>
    <defs>
      <clipPath id="chatgpt-automation-logo-clip">
        <rect width="174" height="44" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default function ChatgptAutomationPage() {
  return (
    <div id="chatgpt-automation-page" className={`${styles.page} ${inter.variable} ${jetbrainsMono.variable}`}>
      <HeaderShadow />
      <NavActive />
      <ScrollDepth />
      <StartModal />

      {/* ===================== NAVBAR ===================== */}
      <header id="chatgpt-automation-header" className={styles.header}>
        <div className={styles.headerBar}>
          <a href="#top" aria-label="RemoHires — home" className={styles.headerLogoLink}>
            <RemoHiresLogo className={styles.logo} />
          </a>
          <nav className={styles.navDesktop}>
            <a href="#how-it-works" data-nav-link className={styles.navLink}>
              How it works
            </a>
            <a href="#what-it-costs" data-nav-link className={styles.navLink}>
              What it costs
            </a>
            <ThemeToggle />
            <StartLink className={`${styles.btn} ${styles.btnPrimary} ${styles.navCta}`}>Start for $49</StartLink>
          </nav>
          <MobileNav />
        </div>
      </header>

      <main>
        {/* ===================== HERO ===================== */}
        <Reveal as="section" id="top" className={styles.hero}>
          <div className={styles.heroCopy}>
            <h1 className={styles.heroHeadline}>Turn your ChatGPT into an actual workflow.</h1>
            <p className={styles.heroLead}>
              We take the AI you already pay for, wire it directly into your existing tools, and automate one
              repetitive process in 14 days.
            </p>
            <div className={styles.heroCtaRow}>
              <StartLink className={`${styles.btn} ${styles.btnPrimary} ${styles.btnLg} ${styles.heroCta}`}>
                Put My AI to Work for $49
                <span className={styles.heroCtaArrow}>&rarr;</span>
              </StartLink>
            </div>
            <div className={styles.trustRow}>
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

          <div className={styles.heroVisualWrap}>
            <div className={styles.heroVisualCard}>
              <div className={styles.heroDiagramGrid}>
                <div className={styles.heroDiagramCol}>
                  <div className={styles.heroDiagramBox}>Email</div>
                  <div className={styles.heroDiagramBox}>Forms</div>
                </div>
                <div className={styles.heroDiagramCenter}>
                  <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} className={styles.heroDiagramPulse}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                  <div className={styles.heroDiagramIcon}>
                    <svg width="28" height="28" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                      />
                    </svg>
                  </div>
                  <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} className={styles.heroDiagramPulse}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
                <div className={styles.heroDiagramCol}>
                  <div className={styles.heroDiagramBox}>CRM</div>
                  <div className={styles.heroDiagramBox}>Invoices</div>
                </div>
              </div>
              <p className={styles.heroDiagramLabel}>Connected Workflows</p>
            </div>
          </div>
        </Reveal>

        {/* ===================== WHAT ARE YOU STILL DOING MANUALLY? ===================== */}
        <Reveal as="section" className={styles.bottleneckSection}>
          <ChoreographedReveal className={styles.bottleneckAnim}>
            <div className={styles.bottleneckGrid}>
              <div className={`${styles.bottleneckImage} ${styles.animBottleImage}`}>
                <div className={styles.bottleneckImageOverlay} />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1664575602276-acd073f104c1?q=80&w=800&auto=format&fit=crop"
                  alt="Business professional managing administrative workflows on a laptop"
                  loading="lazy"
                  className={styles.bottleneckImageEl}
                />
              </div>

              <div className={styles.bottleneckContent}>
                <div className={styles.bottleneckIntro}>
                  <span className={styles.eyebrow}>Manual Bottlenecks</span>
                  <h2 className={styles.bottleneckHeadline}>What are you still doing manually?</h2>
                  <p className={styles.bottleneckBody}>
                    If your team is copying, checking, updating, writing, or following up by hand, there&rsquo;s a
                    good chance it can be automated.
                  </p>
                </div>

                <div className={`${styles.chipRow} ${styles.animBottleChips}`}>
                  {CATEGORY_CHIPS.map((chip) => (
                    <span key={chip} className={styles.chip}>
                      {chip}
                    </span>
                  ))}
                </div>

                <div className={`${styles.taskList} ${styles.animBottleTasks}`}>
                  {EXAMPLE_TASKS.map((task) => (
                    <div key={task} className={styles.taskRow}>
                      <div className={styles.taskDot} />
                      <span className={styles.taskLabel}>{task}</span>
                    </div>
                  ))}
                </div>

                <div className={`${styles.bottleneckTransition} ${styles.animBottleTransition}`}>
                  <span>&rarr;</span> There&rsquo;s a good chance it can be automated.
                </div>
              </div>
            </div>
          </ChoreographedReveal>
        </Reveal>

        {/* ===================== VISUAL BEFORE / AFTER ===================== */}
        <Reveal as="section" className={styles.compareSection}>
          <div className={styles.compareIntro}>
            <h2 className={styles.sectionHeadline}>Example: Eliminating the bottleneck</h2>
            <p className={styles.sectionSubhead}>
              This is just one example. We will map and build a specific workflow tailored exactly to your business.
            </p>
          </div>

          <div className={styles.compareGrid}>
            <div className={styles.compareCardBefore}>
              <div className={styles.compareBadgeRow}>
                <div className={styles.compareBadgeBefore}>Before: Manual</div>
              </div>
              <div className={styles.compareSteps}>
                <div className={styles.compareRail} />
                {BEFORE_STEPS.map((step, i) => (
                  <div className={styles.compareStep} key={step.title}>
                    <div className={styles.compareStepNumBefore}>{i + 1}</div>
                    <div>
                      <div className={styles.compareStepTitle}>{step.title}</div>
                      <div className={styles.compareStepBody}>{step.body}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.compareCardAfter}>
              <div className={styles.compareBadgeRow}>
                <div className={styles.compareBadgeAfter}>After: Automated</div>
              </div>
              <div className={styles.compareSteps}>
                <div className={styles.compareRailAfter} />
                <div className={styles.compareStep}>
                  <div className={styles.compareStepNumAfter}>1</div>
                  <div className={styles.compareStepPad}>
                    <div className={styles.compareStepTitle}>Email arrives</div>
                  </div>
                </div>
                <div className={styles.compareStep}>
                  <div className={styles.compareStepIconAfter}>
                    <BoltIcon />
                  </div>
                  <div>
                    <div className={styles.compareStepTitleForeground}>Automation handles the workflow</div>
                    <div className={styles.compareStepBody}>CRM + quote + response + follow-up</div>
                  </div>
                </div>
                <div className={styles.compareStep}>
                  <div className={styles.compareStepNumAfter}>3</div>
                  <div className={styles.compareStepPad}>
                    <div className={styles.compareStepTitle}>Human handles exceptions</div>
                  </div>
                </div>
              </div>
              <div className={styles.compareFootnote}>
                <span>Your team only handles what needs a human.</span>
              </div>
            </div>
          </div>
        </Reveal>

        {/* ===================== BUSINESS IMPACT ===================== */}
        <Reveal as="section" className={styles.impactSection} id="impact-section">
          <div className={styles.impactIntro}>
            <h2 className={styles.sectionHeadline}>What changes when one process runs itself?</h2>
            <p className={styles.impactSubhead}>Less busywork. More capacity.</p>
          </div>

          <ChoreographedReveal className={styles.impactAnim}>
            <div className={`${styles.impactLine} ${styles.animImpactLine}`} />
            <div className={`${styles.impactLineMobile} ${styles.animImpactLineMobile}`} />
            <div className={styles.impactGrid}>
              {IMPACT_ITEMS.map((item, i) => (
                <div className={`${styles.impactItem} ${styles[`animImpact${i + 1}`]}`} key={item.n}>
                  <div className={styles.impactBadge}>
                    <span className={styles.impactBadgeNum}>{item.n}</span>
                  </div>
                  <div>
                    <h3 className={styles.impactItemTitle}>{item.title}</h3>
                    <p className={styles.impactItemBody}>{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </ChoreographedReveal>
        </Reveal>

        {/* ===================== PROCESS / DISCOVERY ===================== */}
        <Reveal as="section" className={styles.processSection} id="how-it-works">
          <div className={styles.processIntro}>
            <h2 className={styles.sectionHeadline}>
              We Find What to Automate.
              <br className={styles.processHeadlineBreak} /> You Pick What Matters.
            </h2>
            <p className={styles.processSubhead}>
              You don&rsquo;t need to know what to automate. We find the opportunities for you, and you choose the
              one that matters most.
            </p>
          </div>

          <div className={styles.processStepsGrid}>
            {PROCESS_STEPS.map((step) => (
              <div className={styles.processStepCard} key={step.n}>
                <span className={styles.processStepNum}>{step.n}</span>
                <h3 className={styles.processStepTitle}>{step.title}</h3>
                <p className={styles.processStepBody}>{step.body}</p>
              </div>
            ))}
          </div>

          <ChoreographedReveal className={styles.processAnim}>
            <div className={`${styles.processAnimStep1} ${styles.animStep1}`}>Your Workflow</div>

            <div className={`${styles.processAnimArrow} ${styles.animArrow1}`}>
              <div className={styles.processAnimArrowIconWrap}>
                <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
            </div>

            <div className={styles.processCardsWrap}>
              <div className={styles.processCardsGrid}>
                {PROCESS_CARDS.map((card, i) => (
                  <div
                    className={`${styles.processCard} ${card.winning ? styles.processCardWinning : ""} ${
                      styles[`animCard${i + 1}`]
                    }`}
                    key={card.label}
                  >
                    {card.winning && <div className={styles.processCardGlow} />}
                    <div className={styles.processCardMain}>
                      <div className={styles.processCardIcon}>
                        <BoltIcon />
                      </div>
                      <div className={styles.processCardLabel}>{card.label}</div>
                    </div>
                    {card.winning && (
                      <div className={`${styles.processCardPick} ${styles.animPick}`}>
                        You pick one{" "}
                        <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className={`${styles.processAnalyzingHighlight} ${styles.animAnalyzing}`} />
              <div className={`${styles.processAnalyzingLabel} ${styles.animAnalyzing}`}>Analyzing</div>
            </div>
          </ChoreographedReveal>
        </Reveal>

        {/* ===================== GUARANTEE & OWNERSHIP ===================== */}
        <Reveal as="section" className={styles.valueSection} id="what-it-costs">
          <div className={styles.valueGrid}>
            <div className={styles.valueCard}>
              <div className={styles.valueCardWatermark}>
                <svg width="192" height="192" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <span className={styles.eyebrow}>The Guarantee</span>
              <h3 className={styles.valueCardTitle}>Live in 14 days or we refund your $49 and pay you $500.</h3>
              <p className={styles.valueCardBody}>
                We don&rsquo;t sell plans or prototypes. If you don&rsquo;t have a working automation running in your
                accounts by day 14, we refund your $49 and send you $500 to compensate you for your team&rsquo;s
                time. It is written into our agreement.
              </p>
            </div>

            <div className={styles.valueCard}>
              <div className={styles.valueCardWatermark}>
                <svg width="192" height="192" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <span className={styles.eyebrow}>Ownership</span>
              <h3 className={styles.valueCardTitle}>You Own It. No Lock-In.</h3>
              <p className={styles.valueCardBody}>
                Built in your own tools and accounts. You keep the automation after the sprint. No subscription
                required.
              </p>
            </div>
          </div>
        </Reveal>

        {/* ===================== FAQ ===================== */}
        <Reveal as="section" className={styles.faqSection}>
          <div className={styles.faqIntro}>
            <h2 className={styles.faqHeadline}>Frequently Asked Questions</h2>
          </div>

          <div className={styles.faqList}>
            {FAQS.map((faq) => (
              <details className={styles.faqItem} key={faq.q}>
                <summary className={styles.faqQuestion}>
                  {faq.q}
                  <span className={styles.faqChevron}>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      />
                    </svg>
                  </span>
                </summary>
                <div className={styles.faqAnswer}>{faq.a}</div>
              </details>
            ))}
          </div>

          <div className={styles.faqCtaRow}>
            <StartLink className={`${styles.btn} ${styles.btnPrimary} ${styles.btnLg} ${styles.faqCta}`}>
              Put My AI to Work for $49
            </StartLink>
          </div>
        </Reveal>
      </main>

      {/* ===================== FOOTER ===================== */}
      <footer className={styles.footer}>
        <div className={styles.footerRow}>
          <div className={styles.footerBrand}>
            <RemoHiresLogo className={styles.footerLogo} />
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
