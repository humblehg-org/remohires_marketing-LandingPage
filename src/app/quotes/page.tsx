import type { Metadata } from "next";
import Image from "next/image";
import "../hvac.css";
import { SiteHeader } from "@/components/hvac/site-header";
import { MobileCta } from "@/components/hvac/mobile-cta";
import { Reveal } from "@/components/hvac/reveal";
import { TopStrip } from "@/components/hvac/top-strip";
import { SelfCheck } from "@/components/hvac/self-check";
import { LeadForm } from "@/components/hvac/lead-form";
import {
  IconCheckFilled,
  IconCycleFilled,
  IconClockFilled,
  IconPhoneCallFilled,
  IconCalendarFilled,
  IconXFilled,
} from "@/components/hvac/icons";

export const metadata: Metadata = {
  title: "RemoHires | Close The Quotes You Already Sent",
  description:
    "You already quoted the job. A dedicated remote teammate follows up on every estimate until it books, so it stops going to whoever called back first.",
};

const selfCheckOptions = [
  {
    v: "0-5",
    label: "0 to 5",
    reflect:
      "Even a handful is worth a second look. Those are people who already asked you for a price.",
  },
  {
    v: "6-15",
    label: "6 to 15",
    reflect: "That is a steady trickle of priced work worth circling back on.",
  },
  {
    v: "16+",
    label: "16 or more",
    reflect:
      "That is a real backlog of people who already wanted a quote from you.",
  },
];

const painPoints = [
  {
    icon: IconCycleFilled,
    title: "The Quote Goes Cold",
    body: "You sent the price. Days pass. The homeowner stops thinking about you.",
  },
  {
    icon: IconClockFilled,
    title: "The Follow-Up Piles Up",
    body: "You mean to call back. The truck, the crew, the day eat the time.",
  },
  {
    icon: IconPhoneCallFilled,
    title: "The Job Goes Elsewhere",
    body: "The competitor who called first books the install you already priced.",
  },
];

const howItems = [
  {
    icon: IconCalendarFilled,
    title: "Works Your Pipeline Daily",
    body: "Every open estimate gets worked, every day, until it lands or closes out.",
  },
  {
    icon: IconPhoneCallFilled,
    title: "Follows Up Like A Pro",
    body: "Real calls and texts that sound like your shop, not a script.",
  },
  {
    icon: IconCheckFilled,
    title: "Books The Ready Ones",
    body: "Homeowners ready to say yes go straight onto your calendar.",
  },
];

const themRows = [
  "An auto-text goes out, then silence.",
  "You mean to call, the day eats it.",
  "The homeowner books whoever called back.",
];

const usRows = [
  "A real person calls, the same day.",
  "Follows up on day 2, day 5, day 12.",
  "Answers the question and asks for the job.",
];

const pilotCards = [
  {
    title: "Money Back Your First Month",
    body: "If your teammate does not earn their keep in the first month, you get your money back.",
  },
  {
    title: "Cancel Anytime",
    body: "No long lock-in. You stay because it works, not because of a contract.",
  },
  {
    title: "Founding Rate",
    body: "A flat monthly rate, less than a local front-desk hire, locked in while you stay.",
  },
];

const faqs = [
  {
    q: "Is this a real person or software?",
    a: "A real, full-time person dedicated to your shop. Software sends reminders. Your teammate calls the homeowner, answers questions, and asks for the job.",
  },
  {
    q: "What happens after I leave my email?",
    a: "One email back from a real person here. No spam, no card, and no call unless you ask for one.",
  },
  {
    q: "Will my customers understand them?",
    a: "Yes. Every candidate is screened for clear, phone-ready English and trained on your services first.",
  },
  {
    q: "What if the teammate is not a fit?",
    a: "We swap them quickly, and your first month is money back if it does not earn its keep.",
  },
  {
    q: "How much does it cost?",
    a: "A flat monthly rate, set to the role. Founding clients get our lowest rate. We share the exact figure when we talk.",
  },
];

export default function QuotesPage() {
  return (
    <>
      <link
        href="https://api.fontshare.com/v2/css?f[]=satoshi@900,700,500,400&display=swap"
        rel="stylesheet"
      />
      <TopStrip />
      <SiteHeader />
      <main id="top">
        {/* ---------- Hero ---------- */}
        <section className="hero" style={{ padding: 0 }}>
          <div className="wrap">
            <div className="grid">
              <Reveal direction="l">
                <span className="eyebrow">Home-service owners</span>
                <h1>Close The Quotes You Already Sent</h1>
                <p className="sub">
                  You quoted the job. Then it went quiet. A dedicated
                  teammate follows up on every estimate until it books, so it
                  stops going to whoever calls back first.
                </p>
                <SelfCheck
                  question="How many quotes went unfollowed last month?"
                  options={selfCheckOptions}
                  path="quotes"
                />
                <div className="cticks">
                  <span>
                    <span className="ic">
                      <IconCheckFilled />
                    </span>
                    Money back your first month
                  </span>
                  <span>
                    <span className="ic">
                      <IconCheckFilled />
                    </span>
                    A real full-time teammate
                  </span>
                  <span>
                    <span className="ic">
                      <IconCheckFilled />
                    </span>
                    We employ and pay them
                  </span>
                </div>
              </Reveal>
              <Reveal direction="r" className="visualcol">
                <div className="callcard">
                  <div className="bar">
                    <div className="dot">
                      <span className="ic">
                        <IconCycleFilled />
                      </span>
                    </div>
                    <div>
                      <b>One Open Estimate</b>
                      <small>Maple Street, system replacement</small>
                    </div>
                  </div>
                  <div className="callrow">
                    <span className="ic">
                      <IconClockFilled />
                    </span>
                    <div className="t">
                      Estimate sent
                      <small>Day 0</small>
                    </div>
                    <span className="tag">Sent</span>
                  </div>
                  <div className="callrow">
                    <span className="ic">
                      <IconPhoneCallFilled />
                    </span>
                    <div className="t">
                      Follow-up call
                      <small>Day 2</small>
                    </div>
                    <span className="tag blue">Calling</span>
                  </div>
                  <div className="callrow">
                    <span className="ic">
                      <IconPhoneCallFilled />
                    </span>
                    <div className="t">
                      Checked in again
                      <small>Day 5</small>
                    </div>
                    <span className="tag blue">Nudged</span>
                  </div>
                  <div className="callrow">
                    <span className="ic">
                      <IconCalendarFilled />
                    </span>
                    <div className="t">
                      Booked the install
                      <small>Day 12</small>
                    </div>
                    <span className="tag won">Won</span>
                  </div>
                  <p className="illus">
                    Illustrative: how one job moves through your follow-up.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ---------- Pain ---------- */}
        <section id="pain">
          <div className="wrap">
            <Reveal className="sec-head">
              <span className="eyebrow">Your Most Expensive Silence</span>
              <h2>The Quotes You Already Priced</h2>
              <p>
                Most of what you lose is work you already quoted, slipping
                away while you are on a roof.
              </p>
            </Reveal>
            <div className="grid3">
              {painPoints.map((p) => (
                <Reveal key={p.title} className="card">
                  <span className="ic">
                    <p.icon />
                  </span>
                  <h3>{p.title}</h3>
                  <p>{p.body}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- What you get ---------- */}
        <section id="how" className="tint">
          <div className="wrap">
            <Reveal className="sec-head">
              <span className="eyebrow">What You Get</span>
              <h2>One Teammate On Every Open Estimate</h2>
              <p>
                A dedicated, full-time teammate who owns your quote pipeline
                from the estimate to the booked job.
              </p>
            </Reveal>
            <div className="grid3">
              {howItems.map((f) => (
                <Reveal key={f.title} className="card">
                  <span className="ic">
                    <f.icon />
                  </span>
                  <h3>{f.title}</h3>
                  <p>{f.body}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- What happens to a quote ---------- */}
        <section>
          <div className="wrap">
            <Reveal className="sec-head" style={{ maxWidth: 720 }}>
              <span className="eyebrow">The Difference</span>
              <h2>What Happens To A Quote</h2>
            </Reveal>
            <Reveal className="vs">
              <div className="col them">
                <h4>
                  <span className="dotm" />
                  Left On Its Own
                </h4>
                {themRows.map((r) => (
                  <div className="row" key={r}>
                    <span className="ic">
                      <IconXFilled />
                    </span>
                    <div>{r}</div>
                  </div>
                ))}
              </div>
              <div className="col us">
                <h4>
                  <span className="dotm" />
                  With RemoHires
                </h4>
                {usRows.map((r) => (
                  <div className="row" key={r}>
                    <span className="ic">
                      <IconCheckFilled />
                    </span>
                    <div>{r}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* ---------- Proof ---------- */}
        <section>
          <div className="wrap">
            <Reveal className="sec-head" style={{ marginBottom: 22 }}>
              <span className="eyebrow">Proof</span>
              <h2>Built With A Real HVAC Owner</h2>
            </Reveal>
            <Reveal className="proof">
              <Image
                className="prooflogo"
                src="/lhp-logo.png"
                alt="Louisiana Home Performance"
                width={198}
                height={150}
              />
              <div>
                <p style={{ fontSize: 16 }}>
                  Michael was the front desk, the dispatcher, and the man on
                  the roof. We built RemoHires around his real day, so the
                  quotes that used to sit now get a real follow-up.
                </p>
                <small>Michael, Founder, Louisiana Home Performance</small>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ---------- Founding pilot ---------- */}
        <section id="offer" className="tint">
          <div className="wrap">
            <Reveal className="sec-head">
              <span className="eyebrow">Founding Pilot</span>
              <h2>Try It With The Risk On Us</h2>
              <p>
                We are taking a small number of founding clients while we
                build. You get our lowest rate and the most hands-on
                onboarding we will ever offer.
              </p>
            </Reveal>
            <div className="grid3">
              {pilotCards.map((c) => (
                <Reveal key={c.title} className="card">
                  <span className="ic">
                    <IconCheckFilled />
                  </span>
                  <h3>{c.title}</h3>
                  <p>{c.body}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- Final CTA ---------- */}
        <section id="book">
          <div className="wrap">
            <Reveal className="final">
              <span className="eyebrow">Get Started</span>
              <h2 style={{ marginTop: 12 }}>
                Stop Leaving Quotes On The Table
              </h2>
              <p>
                Leave your name and email. A real person here will reach out
                once to see if we are a fit.
              </p>
              <LeadForm source="bottom_form" center path="quotes" />
            </Reveal>
          </div>
        </section>

        {/* ---------- FAQ ---------- */}
        <section id="faq">
          <div className="wrap">
            <Reveal className="sec-head">
              <span className="eyebrow">Questions</span>
              <h2>Questions, Answered</h2>
            </Reveal>
            <Reveal className="faq">
              {faqs.map((item) => (
                <details key={item.q}>
                  <summary>{item.q}</summary>
                  <p>{item.a}</p>
                </details>
              ))}
            </Reveal>
          </div>
        </section>
      </main>

      <MobileCta />

      <footer>
        <div className="wrap">
          <span className="logo" role="img" aria-label="RemoHires" />
          <div className="frow">
            <p>
              Full-time remote teammates for growing businesses.{" "}
              <a href="https://remohires.com">remohires.com</a>
            </p>
            <p>&copy; 2026 RemoHires</p>
          </div>
        </div>
      </footer>
    </>
  );
}
