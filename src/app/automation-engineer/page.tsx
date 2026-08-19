import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./landing.css";
import { HeaderScroll } from "@/components/automation-engineer/header-scroll";
import { MobileNav } from "@/components/automation-engineer/mobile-nav";
import { StartLink } from "@/components/automation-engineer/start-link";
import { ScrollDepth } from "@/components/automation-engineer/scroll-depth";
import { Reveal } from "@/components/automation-engineer/reveal";
import { MatchForm } from "@/components/automation-engineer/match-form";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "Hire a full-time automation engineer for two weeks for $49 | RemoHires",
  description:
    "Two weeks of a full-time automation engineer for $49. We map your operations, pitch three bottlenecks to automate, and build your favorite one. Live in 14 days, or we refund the $49 and pay you $500.",
};

export default function AutomationEngineerPage() {
  return (
    <div className={`ael ${inter.variable} ${jetbrainsMono.variable}`}>
      {/* Scroll-triggered header shadow + scroll-depth tracking — DOM-only
          logic from the original inline <script>, ported into client
          components so it runs after hydration instead of in a raw script
          tag. GTM itself is already loaded once, sitewide, in the root
          layout, so it is not re-initialized here. */}
      <HeaderScroll />
      <ScrollDepth />

      {/* ===================== 1 · NAVBAR ===================== */}
      <header id="hdr">
        <div className="wrap bar">
          <a href="#top" aria-label="RemoHires — home">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="logo" src="/logo-remohires-color.svg" alt="RemoHires" />
          </a>
          <nav className="nav-right">
            <a href="#how" className="link">
              How it works
            </a>
            <a href="#why" className="link">
              What it costs
            </a>
            <StartLink className="btn btn-primary">Start for $49</StartLink>
          </nav>
          <MobileNav />
        </div>
      </header>

      <main>
        {/* ===================== 2 · HERO ===================== */}
        <Reveal as="section" id="top" className="hero">
          <div className="wrap hero-grid">
            <div>
              <h1>
                Hire a full-time automation engineer for two weeks.{" "}
                <span className="t-primary">$49.</span>
              </h1>
              <p className="lead">
                Stop wasting hours on manual work. We map your operations, identify your biggest
                bottlenecks, and build a custom automation to fix it. Live in your accounts in 14
                days.
              </p>
              <p className="guarantee">
                <strong>100% Risk-Free Guarantee.</strong> We deliver a working automation by day
                14, or we refund your $49 and send you $500 for your time.
              </p>
              <div className="cta-row">
                <StartLink className="btn btn-primary btn-lg">
                  Start My 14-Day Sprint for $49 <span className="arw">&rarr;</span>
                </StartLink>
              </div>
              <div className="trust">
                <p>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  One-time charge of $49. No contracts, no subscriptions.
                </p>
                <p>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  Built directly in your own accounts.
                </p>
              </div>
            </div>

            {/* Hero Illustrative Mockup */}
            <div className="card mock">
              <span className="mock-tag">Illustrative mockup</span>
              <div className="mock-dots">
                <span />
                <span />
                <span />
              </div>

              <div className="mock-nodes">
                <div className="mock-node">
                  <div className="icon">@</div>
                  <div>
                    <p className="t">New enquiry received</p>
                    <p className="s">Inbox &middot; trigger</p>
                  </div>
                </div>

                <div className="mock-arrow">&darr;</div>

                <div className="mock-node">
                  <div className="icon">⋮</div>
                  <div>
                    <p className="t">Quote drafted from your price list</p>
                    <p className="s">Automation step</p>
                  </div>
                </div>

                <div className="mock-arrow">&darr;</div>

                <div className="mock-node">
                  <div className="icon">✉</div>
                  <div>
                    <p className="t">Waiting in your outbox to send</p>
                    <p className="s">Your account</p>
                  </div>
                  <div className="live">live</div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* ===================== 3 · WHAT IT COSTS ===================== */}
        <Reveal as="section" id="why" className="tint why">
          <div className="wrap">
            <span className="eyebrow">What it costs</span>
            <h2>We cover the salary. You cover $49.</h2>
            <p>
              A full-time US automation engineer costs upwards of $143,000 a year. We give you two
              weeks of their time for a single $49 payment. Why? Because we know that once you see
              a painful bottleneck disappear from your business, you will want us to automate the
              rest of it. There is zero obligation. We are putting our money where our mouth is.
            </p>
          </div>
        </Reveal>

        {/* ===================== 4 · START CTA / FORM ===================== */}
        <Reveal as="section" id="start" className="start">
          <div className="wrap">
            <h2>Stop doing it manually. Let&rsquo;s automate your biggest bottleneck.</h2>
            <p>
              Pick a start date and your engineer begins Monday. See it running live in 14 days,
              or we send you $500.
            </p>
            <MatchForm />
          </div>
        </Reveal>

        {/* ===================== 5 · FEATURES / HOW IT WORKS ===================== */}
        <div className="how" id="how">
          <div className="wrap">
            {/* Feat 1 */}
            <Reveal as="section" className="feat">
              <div>
                <h2>One automation live by day 14 or we send you $500</h2>
              </div>
              <div>
                <p>
                  Not a plan and not a prototype. We build something running in your accounts, on
                  a schedule, with nobody driving it. If it is not live by day 14 we refund the $49
                  and send $500 for your team&rsquo;s time.
                </p>
                <div className="card inline-card">
                  <p>
                    We need three things from you to make this timeline work. We need a kickoff
                    call within three business days, tool access by day three, and your final
                    approval on the build by day five. The project also has to be reasonable in
                    scope. If we realize it cannot be done, we will be honest with you. If we
                    cannot start at all, we cancel the project and you pay nothing.
                  </p>
                </div>
                <p className="note">
                  The $500 is written into the one-page agreement you sign before we start.
                </p>
                <a
                  href="https://page.remohires.com/termsofservice"
                  className="agreement-link"
                  target="_blank"
                  rel="noopener"
                >
                  Read the agreement &rarr;
                </a>
              </div>
            </Reveal>

            {/* Feat 2 */}
            <Reveal as="section" className="feat">
              <div>
                <h2>You do not need to know what to automate</h2>
                <p style={{ marginTop: 16 }}>
                  Most people never start because step one is deciding what to automate. That is a
                  week of work on its own. During week one, your engineer sits inside your systems
                  and watches how the work actually happens. They come back with three tasks they
                  can automate, ranked by impact. You pick one.
                </p>
              </div>
              <div>
                <div className="examples">
                  <div className="card example">
                    <div className="tag">EXAMPLE 1</div>
                    <p>
                      An enquiry arrives by email and comes back as a drafted quote from your own
                      price list, sitting in your outbox waiting for you to hit send.
                    </p>
                  </div>
                  <div className="card example">
                    <div className="tag">EXAMPLE 2</div>
                    <p>
                      A job closing in your field app writes the invoice, sends it, and chases it
                      on a schedule.
                    </p>
                  </div>
                  <div className="card example wide">
                    <div className="tag">EXAMPLE 3</div>
                    <p>
                      Call recordings get summarized into the CRM under the right contact, without
                      anyone opening the CRM.
                    </p>
                  </div>
                </div>
                <p className="examples-foot">
                  You keep the other two ideas either way. They are fully documented and yours to
                  keep.
                </p>
              </div>
            </Reveal>

            {/* Feat 3 */}
            <Reveal as="section" className="feat">
              <div>
                <h2>What happens after day 14</h2>
              </div>
              <div className="stack">
                <p>
                  Nothing, unless you want it to. The $49 is a single charge. There is no
                  subscription to cancel and no card sitting on file waiting to start billing.
                </p>
                <p>
                  On day 14 you will have a working automation and a call on the calendar. On that
                  call we discuss what else your engineer could take off your plate and what that
                  costs per month. If the answer is &ldquo;no thanks&rdquo;, you keep the
                  automation and the other two ideas. That is the end of it.
                </p>
              </div>
            </Reveal>

            {/* Feat 4 */}
            <Reveal as="section" className="feat">
              <div>
                <h2>Built in your accounts. Yours to keep. Forever.</h2>
              </div>
              <div className="stack">
                <p>
                  Everything your engineer builds lives under your logins and in your tools, fully
                  documented. We do not hold the credentials. Access is granted from your side and
                  you can revoke it in a single click at any time.
                </p>
                <p>
                  Your engineer works from accounts you create and control. They get the minimum
                  access the build needs and absolutely nothing else. If we are automating your
                  invoicing, they do not get access to your emails. Everything is signed under an
                  NDA before day one. You can see exactly what they touch at any point.
                </p>
              </div>
            </Reveal>

            {/* Feat 5 */}
            <Reveal as="section" className="feat">
              <div>
                <h2>It works with what you already pay for</h2>
                <p style={{ marginTop: 16 }}>
                  No migration and no new platforms. Your engineer wires up the tools you already
                  run. This includes the ChatGPT seat that currently only works while someone is
                  typing into it. Most people who try to do this themselves end up with a
                  subscription that only works in the browser tab. The gap is not the tool itself,
                  the gap is that nobody at your company owns the integration. Your engineer moves
                  it behind your email, your CRM and your invoicing so it fires on a trigger
                  instead of a manual prompt.
                </p>
              </div>
              <div>
                <div className="compare">
                  <div className="card col before">
                    <div className="label">Before</div>
                    <div className="box">ChatGPT / manual workflow</div>
                    <div className="box">Someone has to type the prompt</div>
                  </div>
                  <div className="arrow">&rarr;</div>
                  <div className="card col after">
                    <div className="label">After</div>
                    <div className="box">Trigger</div>
                    <div className="box">Automation</div>
                    <div className="box">Business system</div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Feat 6 */}
            <Reveal as="section" className="feat">
              <div>
                <h2>You cannot trial an employee</h2>
              </div>
              <div>
                <p>
                  Hiring an automation engineer in the US means two to four months of searching and
                  a few more before they are useful. Worse, you are committed long before you know
                  whether they are actually any good. That is the part that stops most people from
                  ever starting. We removed that risk entirely. Two weeks, one thing built, then
                  you decide.
                </p>
                <p className="stat-note">
                  A US automation engineer runs about $143,000 in year one: $107,970 average
                  salary (Indeed, ~4,700 reported salaries, Aug 2026) + 27.4% employer burden (BLS,
                  Employer Costs for Employee Compensation, March 2026) + $5,475 average cost per
                  hire (SHRM 2025).{" "}
                  <span className="dim">
                    Published market costs, not a claim about results our customers have achieved.
                  </span>
                </p>
              </div>
            </Reveal>

            {/* Feat 7 */}
            <Reveal as="section" className="feat">
              <div>
                <h2>Who this does not work for</h2>
              </div>
              <div>
                <p>
                  If you want someone to do the manual work rather than remove it, if you cannot
                  give system access, or if you are after a new product built from scratch, this is
                  not a good fit. We will tell you this upfront before we take your money.
                </p>
              </div>
            </Reveal>
          </div>
        </div>

        {/* ===================== 7 · REPEAT CTA ===================== */}
        <Reveal as="section" className="repeat-cta">
          <div className="wrap">
            <h2>Two weeks. One thing automated and running. $49.</h2>
            <StartLink className="btn btn-primary btn-lg">
              Start my two weeks for $49 <span className="arw">&rarr;</span>
            </StartLink>
            <p>
              One charge of $49 &middot; no contract &middot; whatever we build is yours, in your
              accounts
            </p>
          </div>
        </Reveal>
      </main>

      {/* ===================== 8 · FOOTER ===================== */}
      <footer>
        <div className="wrap">
          <div className="brand">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="logo" src="/logo-remohires-color.svg" alt="RemoHires" />
            <p>
              A full-time automation engineer, working only on your business, for two weeks. $49.
            </p>
          </div>
          <nav>
            <a href="https://page.remohires.com/termsofservice" target="_blank" rel="noopener">
              Term and Condition
            </a>
            <a href="https://page.remohires.com/privacypolicy" target="_blank" rel="noopener">
              Privacy
            </a>
            <StartLink>Contact</StartLink>
          </nav>
          <div className="bottom">
            <span>RemoHires</span>
          </div>
        </div>
      </footer>

      {/* Mobile sticky CTA */}
      <div className="sticky-cta">
        <StartLink className="btn btn-primary">Start my two weeks for $49</StartLink>
      </div>
    </div>
  );
}
