import type { Metadata } from "next";
import Image from "next/image";
import "./hvac.css";
import { SiteHeader } from "@/components/hvac/site-header";
import { MobileCta } from "@/components/hvac/mobile-cta";
import { Reveal } from "@/components/hvac/reveal";
import { TopStrip } from "@/components/hvac/top-strip";
import { SelfCheck } from "@/components/hvac/self-check";
import { LeadForm } from "@/components/hvac/lead-form";
import {
  IconCheckFilled,
  IconSparkFilled,
  IconPhoneCallFilled,
  IconCycleFilled,
  IconClockFilled,
  IconShieldFilled,
  IconXFilled,
} from "@/components/hvac/icons";

export const metadata: Metadata = {
  title: "RemoHires | Own Your Leads, Not Shared Ones",
  description:
    "The lead you bought from Angi went to five other contractors. We build the channels you own, so the homeowner calls you, and only you.",
};

const painPoints = [
  {
    icon: IconPhoneCallFilled,
    title: "Sold To Five At Once",
    body: "One lead, five contractors, a homeowner already tired of the phone.",
  },
  {
    icon: IconCycleFilled,
    title: "Paying To Fight For Scraps",
    body: "You bid against four others for a customer none of you own.",
  },
  {
    icon: IconClockFilled,
    title: "Chasing Dead Numbers",
    body: "Half the numbers ring dead or wrong, and you paid for every one.",
  },
];

const howItems = [
  {
    icon: IconSparkFilled,
    title: "Lift Your Google Profile",
    body: "We optimize and post so you compete for the top of the local map.",
  },
  {
    icon: IconShieldFilled,
    title: "Run Your Local Ads",
    body: "Local Services Ads set up and managed, so you pay for real calls and dispute the junk.",
  },
  {
    icon: IconCheckFilled,
    title: "Grow Your Reviews",
    body: "A steady stream of real reviews that makes the next homeowner call you.",
  },
];

const themRows = [
  "One lead is sold to five of you.",
  "It is gone the day you stop paying.",
  "You build no asset of your own.",
];

const usRows = [
  "The call comes to you, and only you.",
  "The profile and accounts are yours to keep.",
  "Every dollar builds a channel you own.",
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
    q: "Do I own the accounts if I leave?",
    a: "Yes. The Google Business Profile, the ads account, and the website work are yours. You keep the channels even if you stop working with us.",
  },
  {
    q: "What happens after I leave my email?",
    a: "One email back from a real person here. No spam, no card, and no call unless you ask for one.",
  },
  {
    q: "Do I have to quit Angi right away?",
    a: "No. We build your owned channels alongside what you have now, so you move off the resellers once your own calls come in.",
  },
  {
    q: "What if it is not a fit?",
    a: "We swap the team member quickly, and your first month is money back if it does not earn its keep.",
  },
  {
    q: "How do we get started?",
    a: "Leave your name and email. A real person will reach out once, and we take it from there.",
  },
];

export default function Home() {
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
                <h1>Own Your Leads, Not Shared Ones</h1>
                <p className="sub">
                  The lead you bought went to five other contractors too. We
                  build the channels you own, so the homeowner calls you, and
                  only you.
                </p>
                <SelfCheck />
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
                    Channels you keep, forever
                  </span>
                  <span>
                    <span className="ic">
                      <IconCheckFilled />
                    </span>
                    We employ and pay the team
                  </span>
                </div>
              </Reveal>
              <Reveal direction="r" className="visualcol">
                <div className="callcard">
                  <div className="bar">
                    <div className="dot">
                      <span className="ic">
                        <IconSparkFilled />
                      </span>
                    </div>
                    <div>
                      <b>A Channel You Own</b>
                      <small>Calls come to you, and only you</small>
                    </div>
                  </div>
                  <div className="callrow">
                    <span className="ic">
                      <IconSparkFilled />
                    </span>
                    <div className="t">
                      Search: AC repair near me
                      <small>Google</small>
                    </div>
                    <span className="tag">Seen</span>
                  </div>
                  <div className="callrow">
                    <span className="ic">
                      <IconSparkFilled />
                    </span>
                    <div className="t">
                      Your profile shows first
                      <small>Map pack</small>
                    </div>
                    <span className="tag blue">Owned</span>
                  </div>
                  <div className="callrow">
                    <span className="ic">
                      <IconPhoneCallFilled />
                    </span>
                    <div className="t">
                      Call comes to you
                      <small>No reseller</small>
                    </div>
                    <span className="tag blue">Direct</span>
                  </div>
                  <div className="callrow">
                    <span className="ic">
                      <IconCheckFilled />
                    </span>
                    <div className="t">
                      New review posted
                      <small>Rating up</small>
                    </div>
                    <span className="tag won">Growing</span>
                  </div>
                  <p className="illus">
                    Illustrative: how one job moves through your follow-up.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ---------- Where money leaks ---------- */}
        <section id="pain">
          <div className="wrap">
            <Reveal className="sec-head">
              <span className="eyebrow">You Are Renting</span>
              <h2>Leads That Were Never Yours</h2>
              <p>
                You pay for a lead five other contractors also bought. The
                day you stop paying, the pipeline goes dark.
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
              <h2>Channels That Stay Yours</h2>
              <p>
                A dedicated team builds and runs the lead channels you keep,
                so the calls come to you directly.
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

        {/* ---------- Renting vs owning ---------- */}
        <section>
          <div className="wrap">
            <Reveal className="sec-head" style={{ maxWidth: 720 }}>
              <span className="eyebrow">The Difference</span>
              <h2>Renting Leads vs Owning Your Pipeline</h2>
            </Reveal>
            <Reveal className="vs">
              <div className="col them">
                <h4>
                  <span className="dotm" />
                  Renting From Angi
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
                  Owning With RemoHires
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
                  work comes from channels he owns, not leads he rents.
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
              <h2 style={{ marginTop: 12 }}>Stop Renting. Start Owning.</h2>
              <p>
                Leave your name and email. A real person here will reach out
                once to see if we are a fit.
              </p>
              <LeadForm source="bottom_form" center />
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
