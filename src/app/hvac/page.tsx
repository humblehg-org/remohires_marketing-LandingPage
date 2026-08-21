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
import { WhySection } from "@/components/hvac/why-section";
import {
  IconCheckFilled,
  IconCycleFilled,
  IconClockFilled,
  IconPhoneCallFilled,
  IconCalendarFilled,
  IconXFilled,
  IconClockRingFilled,
  IconBanknote,
  IconUserCheck,
  IconBriefcase,
} from "@/components/hvac/icons";

export const metadata: Metadata = {
  title: "RemoHires | Work the Leads You Already Own",
  description:
    "Every lead you buy is sold to four other shops. Your open estimates and aging installs are yours alone. For $49, a full-time specialist works that list for two weeks, by call and text, in your company name.",
};

const selfCheckOptions = [
  {
    v: "0-20",
    label: "Under 20",
    reflect:
      "Even a short list is booked work sitting there. Each estimate cost you a truck roll and an hour before you sent it.",
  },
  {
    v: "20-100",
    label: "20 to 100",
    reflect:
      "That is real money already spent to produce, waiting on a follow-up nobody has time to make.",
  },
  {
    v: "100+",
    label: "More than 100",
    reflect:
      "That is a pile of quotes you paid to create, going cold while you chase brand-new leads.",
  },
];

const heroTrust = [
  { icon: IconBanknote, label: "$49 is one charge, not a trial" },
  { icon: IconUserCheck, label: "You approve every script" },
  { icon: IconClockRingFilled, label: "Month to month, refundable" },
];

const painPoints = [
  {
    icon: IconBanknote,
    title: "You Bid For It",
    body: "You paid about $80 for that lead. Four other shops bought the same one this morning.",
  },
  {
    icon: IconCycleFilled,
    title: "It Is A Race",
    body: "First to call, lowest to quote. The job you win is the one you discounted.",
  },
  {
    icon: IconClockFilled,
    title: "Your Own List Sits",
    body: "The estimates you already sent went to nobody. Neither did the systems you installed years ago.",
  },
];

const howItems = [
  {
    icon: IconCalendarFilled,
    title: "Works Every Open Estimate",
    body: "Pulls your quotes from the last ninety days and contacts each one on day 1, day 3, and day 7, by call and text.",
  },
  {
    icon: IconClockRingFilled,
    title: "Calls Your Aging Installs",
    body: "Sorts your install records by age and reaches homeowners whose systems are near the end of their life, before the failure.",
  },
  {
    icon: IconPhoneCallFilled,
    title: "Answers Every Reply",
    body: "When a homeowner replies to a follow-up, a real person answers the same day, in your company name, not an autoresponder.",
  },
];

const honestCards = [
  {
    icon: IconUserCheck,
    title: "Clear, Phone-Ready English",
    body: "Skilled remote professionals, many based in Indonesia, screened for clear spoken English before you ever meet them.",
  },
  {
    icon: IconBriefcase,
    title: "Trained On Your Business First",
    body: "They learn your services, your pricing, and how you talk to homeowners before they make a single call.",
  },
  {
    icon: IconPhoneCallFilled,
    title: "One Dedicated Person",
    body: "You get the same full-time specialist, working only on your shop. Not a rotating call-center pool, and not a bot.",
  },
  {
    icon: IconCheckFilled,
    title: "You Approve Every Script",
    body: "Nothing goes out to a homeowner until you have seen it and said yes. It runs in your company name, in your software.",
  },
];

const themRows = [
  "Sold to four or five shops at once.",
  "You quote lowest to win the race.",
  "The fee comes out of your margin.",
];

const usRows = [
  "Yours alone, nobody else can buy them.",
  "You quote your own price, not the lowest.",
  "No lead fee on a customer you already have.",
];

const offerCards = [
  {
    icon: IconBanknote,
    title: "Two Weeks For $49",
    body: "A full-time specialist works your lists for two weeks. One charge, not a trial that starts billing.",
  },
  {
    icon: IconBriefcase,
    title: "From $450 A Month",
    body: "Only if you say yes on day 14. Month to month, no annual contract, no notice period.",
  },
  {
    icon: IconClockRingFilled,
    title: "Backed Both Ways",
    body: "Every open estimate contacted within thirty days, in writing, or your first month is free. If the two weeks are not worth continuing, we refund the $49.",
  },
];

const faqs = [
  {
    q: "What is the $49 for?",
    a: "Two weeks of a full-time Remote Sales Specialist working only on your shop, about eighty hours. It is one charge, not a trial that starts billing. The monthly rate starts only if you say yes on day 14.",
  },
  {
    q: "What does the specialist actually do?",
    a: "They work your open estimates on a day 1, day 3, day 7 cadence, call the homeowners whose systems are aging, and answer replies the same day, all by call and text in your company name and logged in your software.",
  },
  {
    q: "Is this the same as buying leads?",
    a: "The opposite. Every lead you buy is sold to several shops at once. Your specialist works the lists nobody else can touch: the estimates you already sent and the systems you already installed.",
  },
  {
    q: "Will homeowners understand them?",
    a: "Yes. Every candidate is screened for clear, phone-ready English and trained on your services and pricing first. You approve every script before it goes out.",
  },
  {
    q: "What happens after I leave my email?",
    a: "One email back from a real person here with a link to grab ten minutes. On that call we count your open estimates together, and you keep the list whether or not you go further.",
  },
  {
    q: "What does it cost after the two weeks?",
    a: "From $450 a month, month to month, and only if you choose to continue. No annual contract and no notice period. We give you the exact number for your shop on the call.",
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
      <SiteHeader ctaLabel="Book 10 Minutes" />
      <main id="top" className="hvacpage">
        {/* ---------- Hero ---------- */}
        <section id="hero" className="hero" style={{ padding: 0 }}>
          <div className="wrap">
            <div className="grid">
              <Reveal direction="l">
                <span className="eyebrow">HVAC owners</span>
                <h1
                  style={{
                    lineHeight: 1.05,
                    textWrap: "balance",
                  }}
                >
                  Work The Leads
                  <br />
                  <span className="num">You Already Own.</span>
                </h1>
                <p className="sub">
                  Every lead you buy went to four other shops this morning.
                  <br className="hidden md:block" />{" "}
                  The estimates in your own system went to nobody.
                  <span className="block mt-1.5">
                    <strong>
                      For $49, a full-time Remote Sales Specialist works that
                      <br className="hidden md:block" />{" "}
                      list for two weeks, in your company name.
                    </strong>
                  </span>
                  <span className="block mt-1.5">
                    Your open estimates and aging installs, worked by call and
                    text.
                    <br className="hidden md:block" />{" "}
                    Nobody can outbid you for leads you already own.
                  </span>
                </p>
                <SelfCheck
                  question="Roughly how many estimates have you sent that never closed?"
                  options={selfCheckOptions}
                  path="hvac"
                  ctaText="Book 10 Minutes"
                  microcopyText="$49 for two weeks. Month to month after, and we refund the $49 if it is not worth continuing."
                />
              </Reveal>
              <div className="hero-right">
                <Reveal direction="r" className="visualcol">
                  <div className="callcard">
                    <div className="bar">
                      <div className="dot">
                        <span className="ic">
                          <IconCalendarFilled />
                        </span>
                      </div>
                      <div>
                        <b>Open Estimates, Last 90 Days</b>
                        <small>Pulled from your system, sorted by value</small>
                      </div>
                    </div>
                    <div className="callrow">
                      <span className="ic">
                        <IconClockRingFilled />
                      </span>
                      <div className="t">
                        Estimate, $12,000 replacement
                        <small>System past 15 years</small>
                      </div>
                      <span className="tag">Day 3</span>
                    </div>
                    <div className="callrow">
                      <span className="ic">
                        <IconPhoneCallFilled />
                      </span>
                      <div className="t">
                        Homeowner replied
                        <small>Answered the same day</small>
                      </div>
                      <span className="tag blue">Booked</span>
                    </div>
                    <div className="callrow">
                      <span className="ic">
                        <IconCalendarFilled />
                      </span>
                      <div className="t">
                        Estimate, $3,200 repair
                        <small>Follow-up logged in your software</small>
                      </div>
                      <span className="tag blue">Day 7</span>
                    </div>
                    <p className="illus">
                      Illustrative: how your open estimates get worked, three
                      times each.
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
              <span className="eyebrow light">What We Supply</span>
              <h2>What You Get For $49</h2>
            </Reveal>
            <div className="statgrid">
              <Reveal className="stat">
                <span className="ic">
                  <IconClockFilled />
                </span>
                <div className="big">
                  <StatCounter to={80} suffix=" Hours" />
                </div>
                <div className="lab">
                  two weeks of a full-time specialist, working only on your
                  shop.
                </div>
              </Reveal>
              <Reveal className="stat">
                <span className="ic">
                  <IconCalendarFilled />
                </span>
                <div className="big">Day 1&middot;3&middot;7</div>
                <div className="lab">
                  every open estimate contacted three times, by call and text,
                  in your company name.
                </div>
              </Reveal>
              <Reveal className="stat">
                <span className="ic">
                  <IconBanknote />
                </span>
                <div className="big">$450/mo</div>
                <div className="lab">
                  month to month after the two weeks, only if you say yes. No
                  annual contract.
                </div>
              </Reveal>
            </div>
            <p className="src">
              These describe what we supply and charge, not results. Your own
              numbers are what count. Ask us to run them on the call.
            </p>
          </div>
        </section>

        {/* ---------- Pain ---------- */}
        <section id="pain" className="section-pad">
          <div className="wrap">
            <Reveal className="sec-head">
              <span className="eyebrow">The Leads You Rent</span>
              <h2>You Are Paying To Bid</h2>
              <p>
                Every lead you buy from a platform is sold to four or five shops
                at once. It is an auction you pay to enter, and you win it by
                quoting lowest.
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
                A Specialist Who Works{" "}
                <span className="whitespace-nowrap">Your Lists</span>
              </h2>
              <p>
                A dedicated, full-time person working the leads no other shop can
                touch: the estimates you already sent and the systems you
                already installed.
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

        {/* ---------- Why $49 ---------- */}
        <WhySection />

        {/* ---------- The honest part ---------- */}
        <section id="honest" className="tint">
          <div className="wrap">
            <Reveal className="sec-head">
              <span className="eyebrow">The Honest Part</span>
              <h2>About The Remote Part</h2>
              <p>
                This person speaks to your homeowners in your name. This is how
                we protect your reputation.
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
                    <p className="line-clamp-3 md:line-clamp-none">{f.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- Bought vs owned ---------- */}
        <section className="section-pad">
          <div className="wrap">
            <Reveal className="sec-head" style={{ maxWidth: 720 }}>
              <span className="eyebrow">The Difference</span>
              <h2>Bought Leads Vs Leads You Own</h2>
            </Reveal>
            <Reveal className="vs" delay={0.15}>
              <div className="col them">
                <h4>
                  <span className="dotm" />
                  A Lead You Buy
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
                  A Lead You Own
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
                  We built RemoHires working alongside a real HVAC owner, so the
                  way a specialist handles estimates, installs, and homeowners
                  fits how a shop actually runs.
                </p>
                <p style={{ fontSize: 16, marginTop: 12, fontWeight: 600 }}>
                  &ldquo;RemoHires helped us find the right talent for our needs,
                  keeping our projects on track and costs under control.&rdquo;
                </p>
                <small>Michael, Founder, Louisiana Home Performance</small>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ---------- The offer ---------- */}
        <section id="offer" className="tint section-pad">
          <div className="wrap">
            <Reveal className="sec-head">
              <span className="eyebrow">The Offer</span>
              <h2>Two Weeks For $49, Then Month To Month</h2>
              <p>
                You get a dedicated, full-time specialist working your lists, and
                the risk sits with us, not you.
              </p>
            </Reveal>
            <div className="strip">
              {offerCards.map((c, i) => (
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
                Count Your Open <br className="md:hidden" /> Estimates With Us
              </h2>
              <p className="line-clamp-3 md:line-clamp-none">
                Leave your name and email. We will send a link to grab ten
                minutes, count your open estimates together, and you keep the
                list either way.
              </p>
              <LeadForm
                source="bottom_form"
                center
                path="hvac"
                ctaText="Book 10 Minutes"
                isCollapsible={true}
                microcopyText={
                  <>
                    $49 for two weeks. Month to month after, and we refund the
                    $49 <br className="hidden sm:block" /> if it is not worth
                    continuing.
                  </>
                }
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
              Full-time remote teammates for growing businesses. remohires.com
            </p>
            <p>
              &copy; 2026 RemoHires &middot;{" "}
              <a
                href="/privacypolicy"
                className="text-sm! text-white/60! font-normal! hover:text-white! hover:underline transition-colors"
              >
                Privacy Policy
              </a>{" "}
              &middot;{" "}
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
