import type { Metadata } from "next";
import Image from "next/image";
import "../hvac.css";
import { SiteHeader } from "@/components/hvac/site-header";
import { ScrollProgress } from "@/components/hvac/scroll-progress";
import { StatCounter } from "@/components/hvac/stat-counter";
import { Reveal } from "@/components/hvac/reveal";
import { FaqItem } from "@/components/hvac/faq-item";
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
  IconClockRingFilled,
  IconBoltFilled,
  IconBanknote,
  IconUserCheck,
  IconBriefcase,
} from "@/components/hvac/icons";

export const metadata: Metadata = {
  title: "RemoHires | Never Lose Another After Hours Job",
  description:
    "Your crew is on the job while the phone rings. A dedicated remote teammate answers every call in your company name, books it, and covers your after hours, so the next emergency goes to you.",
};

const selfCheckOptions = [
  {
    v: "0-5",
    label: "0 to 5",
    reflect:
      "Even a few is a few booked jobs. Each one called someone who answered instead of you.",
  },
  {
    v: "6-15",
    label: "6 to 15",
    reflect: "That is a steady leak of ready to book work every single week.",
  },
  {
    v: "16+",
    label: "16 or more",
    reflect:
      "That is a real stack of jobs going to whoever picked up the phone first.",
  },
];

const heroTrust = [
  { icon: IconBanknote, label: "Money back your first month" },
  { icon: IconUserCheck, label: "A real full-time teammate" },
  { icon: IconBriefcase, label: "We employ and pay them" },
];

const painPoints = [
  {
    icon: IconCycleFilled,
    title: "The 6 PM Call",
    body: "A family's AC quits after hours. They call the first shop that answers.",
  },
  {
    icon: IconClockFilled,
    title: "Nobody Picks Up",
    body: "Your crew is on a job. The call goes to voicemail, and they do not leave one.",
  },
  {
    icon: IconPhoneCallFilled,
    title: "The Job Goes Elsewhere",
    body: "They tap the next result and book the install you could have had.",
  },
];

const howItems = [
  {
    icon: IconCalendarFilled,
    title: "Answers Every Call",
    body: "In your company name, with a warm greeting, so callers feel like they reached your office.",
  },
  {
    icon: IconPhoneCallFilled,
    title: "Books The Job",
    body: "Takes the details, checks your schedule, and puts the appointment straight on the board.",
  },
  {
    icon: IconCheckFilled,
    title: "Covers After Hours",
    body: "Evenings and weekends handled, so the emergency call that pays best stays yours.",
  },
];

const honestCards = [
  {
    icon: IconUserCheck,
    title: "Clear, Phone-Ready English",
    body: "Every teammate is screened for clear spoken English before you ever meet them.",
  },
  {
    icon: IconBriefcase,
    title: "Trained On Your Business First",
    body: "They learn your services, your pricing, and how you like calls handled before they take a single call.",
  },
  {
    icon: IconPhoneCallFilled,
    title: "One Dedicated Person",
    body: "You get the same full-time teammate, in your company name. Not a rotating call-center pool, and not a bot.",
  },
  {
    icon: IconBanknote,
    title: "Backed By A Guarantee",
    body: "If the fit is wrong, we replace them. Your first month is money back.",
  },
];

const themRows = [
  "The call goes to voicemail after five.",
  "The voicemail sits until morning.",
  "The homeowner books whoever answered.",
];

const usRows = [
  "A real person answers, in your name.",
  "The job goes straight onto your calendar.",
  "After hours and weekends stay covered.",
];

const pilotCards = [
  {
    icon: IconBanknote,
    title: "Money Back Your First Month",
    body: "If your teammate does not earn their keep in the first month, you get your money back.",
  },
  {
    icon: IconClockRingFilled,
    title: "Cancel Anytime",
    body: "No long lock-in. You stay because it works, not because of a contract.",
  },
  {
    icon: IconBriefcase,
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
      <ScrollProgress />
      <TopStrip />
      <SiteHeader ctaLabel="Cover My Phones" />
      <main id="top">
        {/* ---------- Hero ---------- */}
        <section id="hero" className="hero" style={{ padding: 0 }}>
          <div className="wrap">
            <div className="grid">
              <Reveal direction="l">
                <span className="eyebrow">Home-service owners</span>
                <h1>
                  Never Lose Another <span className="num">After Hours</span>{" "}
                  Job
                </h1>
                <p className="sub">
                  The calls that come in while your crew is on a job are the
                  ones that pay best.
                  <span className="block mt-1.5">
                    <strong>
                      A dedicated remote teammate answers every call.
                    </strong>
                  </span>
                  <span className="block mt-1.5">
                    Books the job and follows up, during your hours and after
                    them.
                  </span>
                </p>
                <SelfCheck
                  question="How many calls go to voicemail in a busy week?"
                  options={selfCheckOptions}
                  path="hvac"
                  ctaText="Cover My Phones"
                  microcopyText="Risk-free. Money back your first month, and cancel anytime."
                />
              </Reveal>
              <div className="hero-right">
                <Reveal direction="r" className="visualcol">
                  <div className="callcard">
                    <div className="bar">
                      <div className="dot">
                        <span className="ic">
                          <IconCycleFilled />
                        </span>
                      </div>
                      <div>
                        <b>Incoming Call, 6:12 PM</b>
                        <small>No cool, family with a newborn</small>
                      </div>
                    </div>
                    <div className="callrow">
                      <span className="ic">
                        <IconClockFilled />
                      </span>
                      <div className="t">
                        Answered in two rings
                        <small>In your company name</small>
                      </div>
                      <span className="tag">Live</span>
                    </div>
                    <div className="callrow">
                      <span className="ic">
                        <IconPhoneCallFilled />
                      </span>
                      <div className="t">
                        Job booked
                        <small>Straight onto the board</small>
                      </div>
                      <span className="tag blue">Booked</span>
                    </div>
                    <div className="callrow">
                      <span className="ic">
                        <IconPhoneCallFilled />
                      </span>
                      <div className="t">
                        After hours covered
                        <small>Evenings and weekends</small>
                      </div>
                      <span className="tag blue">Handled</span>
                    </div>
                    <p className="illus">
                      Illustrative: how one after-hours call becomes a booked
                      job.
                    </p>
                  </div>
                </Reveal>
                <div className="herotrust">
                  {[0, 1, 2].flatMap((set) =>
                    heroTrust.map((t) => (
                      <Reveal
                        direction="r"
                        className="item"
                        key={`${t.label}-${set}`}
                        aria-hidden={set > 0 ? true : undefined}
                      >
                        <span className="ic">
                          <t.icon />
                        </span>
                        <span>{t.label}</span>
                      </Reveal>
                    )),
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- By the numbers ---------- */}
        <section className="stats">
          <div className="wrap" style={{ paddingTop: 96, paddingBottom: 96 }}>
            <Reveal className="stat-head">
              <span className="eyebrow light">By The Numbers</span>
              <h2>Where Your Booked Jobs Quietly Go</h2>
            </Reveal>
            <div className="statgrid">
              <Reveal className="stat">
                <span className="ic">
                  <IconClockRingFilled />
                </span>
                <div className="big">
                  <StatCounter to={75} suffix="%" />
                </div>
                <div className="lab">
                  of callers who reach a voicemail move on instead of leaving
                  a message.
                </div>
              </Reveal>
              <Reveal className="stat">
                <span className="ic">
                  <IconBoltFilled />
                </span>
                <div className="big">
                  <StatCounter to={78} suffix="%" />
                </div>
                <div className="lab">
                  of jobs go to whoever answers or follows up first, not
                  whoever is cheapest.
                </div>
              </Reveal>
              <Reveal className="stat">
                <span className="ic">
                  <IconCalendarFilled />
                </span>
                <div className="big">2 Rings</div>
                <div className="lab">
                  how fast a covered line gets answered, during the day and
                  after hours.
                </div>
              </Reveal>
            </div>
            <p className="src">
              Directional figures from current contractor discussions (2025
              to 2026), not audited stats. Your own numbers are what count.
              Ask us to run them.
            </p>
          </div>
        </section>

        {/* ---------- Pain ---------- */}
        <section id="pain" className="section-pad">
          <div className="wrap">
            <Reveal className="sec-head">
              <span className="eyebrow">Your Most Expensive Silence</span>
              <h2>The Calls That Get Away</h2>
              <p>
                Most missed calls never call back. They ring while you are on
                a roof, hit voicemail, and go to the next shop on the list.
              </p>
            </Reveal>
            <div className="grid3">
              {painPoints.map((p, i) => (
                <Reveal key={p.title} className="card" delay={0.1 * (i + 1)}>
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
        <section id="how" className="tint section-pad">
          <div className="wrap">
            <Reveal className="sec-head">
              <span className="eyebrow">What You Get</span>
              <h2>
                A Front Office That Never Misses{" "}
                <span className="whitespace-nowrap">The Phone</span>
              </h2>
              <p>
                A dedicated, full-time teammate who answers your calls, books
                the work, and follows up on the quotes you already sent.
              </p>
            </Reveal>
            <div className="flow">
              <Reveal className="flow-line" delay={0.15}>
                {null}
              </Reveal>
              {howItems.map((f, i) => (
                <Reveal key={f.title} className="card" delay={0.1 + i * 0.15}>
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

        {/* ---------- The honest part ---------- */}
        <section id="honest" className="tint">
          <div className="wrap">
            <Reveal className="sec-head">
              <span className="eyebrow">The Honest Part</span>
              <h2>About The Outsourced Part</h2>
              <p>
                Your reputation rides on every call. This is how we protect
                it.
              </p>
            </Reveal>
            <div className="honestgrid">
              {honestCards.map((f, i) => (
                <Reveal key={f.title} className="card" delay={0.1 * (i + 1)}>
                  <div className="honesticon">
                    <span className="ic">
                      <f.icon />
                    </span>
                  </div>
                  <div className="honesttext">
                    <h3>{f.title}</h3>
                    <p>{f.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- What happens to a quote ---------- */}
        <section className="section-pad">
          <div className="wrap">
            <Reveal className="sec-head" style={{ maxWidth: 720 }}>
              <span className="eyebrow">The Difference</span>
              <h2>What Happens To A Call</h2>
            </Reveal>
            <Reveal className="vs" delay={0.15}>
              <div className="col them">
                <h4>
                  <span className="dotm" />
                  Left To Voicemail
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
        <section className="section-pad">
          <div className="wrap">
            <Reveal className="sec-head" style={{ marginBottom: 22 }}>
              <span className="eyebrow">Proof</span>
              <h2>Built With A Real HVAC Owner</h2>
            </Reveal>
            <Reveal className="proof" delay={0.15}>
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
                  calls that used to ring out now get answered.
                </p>
                <small>Michael, Founder, Louisiana Home Performance</small>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ---------- Founding pilot ---------- */}
        <section id="offer" className="tint section-pad">
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
            <div className="strip">
              {pilotCards.map((c, i) => (
                <Reveal key={c.title} className="card" delay={0.1 * (i + 1)}>
                  <span className="ic">
                    <c.icon />
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
                Stop Losing Jobs To A Missed Call
              </h2>
              <p>
                Leave your name and email. A real person here will reach out
                once to see if we are a fit.
              </p>
              <LeadForm
                source="bottom_form"
                center
                path="hvac"
                ctaText="Cover My Phones"
                microcopyText="Risk-free. Money back your first month, and cancel anytime."
              />
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
                <FaqItem key={item.q} q={item.q} a={item.a} />
              ))}
            </Reveal>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap">
          <span className="logo" role="img" aria-label="RemoHires" />
          <div className="frow">
            <p>
              Full-time remote teammates for growing businesses.{" "}
              remohires.com
            </p>
            <p>
              &copy; 2026 RemoHires ·{" "}
              <a
                href="/privacypolicy"
                className="text-sm! text-white/60! font-normal! hover:text-white! hover:underline transition-colors"
              >
                Privacy Policy
              </a>{" "}
              ·{" "}
              <a
                href="/termsofservice"
                className="text-sm! text-white/60! font-normal! hover:text-white! hover:underline transition-colors"
              >
                Terms of Service
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
