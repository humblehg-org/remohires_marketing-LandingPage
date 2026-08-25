import type { Metadata } from "next";
import Script from "next/script";
import "../hvac.css";
import { SiteHeader } from "@/components/hvac/site-header";
import { ScrollProgress } from "@/components/hvac/scroll-progress";
import { Reveal } from "@/components/hvac/reveal";
import { TopStrip } from "@/components/hvac/top-strip";
import { WhySection } from "@/components/hvac/why-section";
import { InteractiveFeatures } from "@/components/hvac/interactive-features";
import { BookButton } from "@/components/hvac/book-button";
import { splitIntoParagraphs } from "@/lib/text";
import {
  IconCheckFilled,
  IconCycleFilled,
  IconClockFilled,
  IconPhoneCallFilled,
  IconCalendarFilled,
  IconXFilled,
  IconClockRingFilled,
  IconSearchFilled,
  IconUserFilled,
  IconDesktopFilled,
  IconCardFilled,
} from "@/components/hvac/icons";

export const metadata: Metadata = {
  title: "RemoHires | Book More Jobs From Leads You Already Own",
  description:
    "$49 buys two weeks of a full-time specialist working only on your business. They find homeowners in your service area and work every estimate and install already in your system, by call and text, in your company name.",
};

// Section 5 - the twelve feature blocks, in Nick's order. [BRACKETS] = supply before launch.
const features = [
  {
    icon: IconCycleFilled,
    title: "Where The Jobs Come From",
    body: "Four places, and you pay no lead fee for any of them: homeowners your specialist finds directly in your service area, the estimates you sent that never got a second call, the systems you installed that are now past fifteen years, and the customers you have already served who have not heard from you since. Every lead you buy went to four other shops at once. None of these did.",
  },
  {
    icon: IconSearchFilled,
    title: "Leads That Were Never For Sale",
    body: "A lead platform sells you a homeowner who filled in a form, then sells the same one to four competitors. Your specialist buys no one. They go and find them. Nobody sold those homeowners a list, so no competitor is calling them.",
  },
  {
    icon: IconCalendarFilled,
    title: "Every Open Estimate, Worked Three Times",
    body: "You sent the quote and never heard back. It happens dozens of times a season, and the pile is invisible because nobody has counted it. Every one cost you a truck roll and an hour before you hit send, so an unclosed estimate is money already spent. Week one your specialist pulls every open estimate from the last 90 days, strips the won and the lost, and works what is left, three contacts on day 1, day 3, and day 7, by call and text in your company name, with the outcome logged against the job.",
  },
  {
    icon: IconPhoneCallFilled,
    title: "A Person Answers, Not An Autoresponder",
    body: "You have probably already bought the tool that texts a homeowner sixty seconds after the quote. That part works. Day three is where it breaks: she replies asking whether the price includes the permit, and nobody answers. That was the most interested person on your list, and she called the shop that picked up. Your specialist knows your pricing and answers the same day, in your company name.",
  },
  {
    icon: IconClockRingFilled,
    title: "We Call The Systems You Installed",
    body: "When a system you installed fails, the homeowner shops the replacement around, and you bid against strangers for a $12,000 job in a house you already worked in. You know one thing no competitor knows: when you put each system in. A furnace or condenser runs about fifteen years, so everything you installed before then is at the end of its life now. Your specialist works your install records by age and reaches those homeowners before the failure. A replacement quoted to someone who already knows you is a phone call, not a bid.",
  },
  {
    icon: IconClockFilled,
    title: "Your Customers Hear From Somebody Every Month",
    body: "Somebody is sending your customers a reminder every season. If it is not you, they get the tune-up, and whoever does the tune-up is in the house when the system fails, so the $12,000 replacement is theirs by default. Then you buy that customer back at $80 a lead. Your specialist handles the between-jobs contact: renewals, seasonal check-ins, and the replacement conversation before the unit dies.",
  },
  {
    icon: IconCheckFilled,
    title: "Nothing Goes Out Until You've Approved It",
    body: "You sign off on the call script and the text wording before your specialist contacts a single person. Every call and message is logged against the job in your own system, so you can read all of it as it happens, and one message from you stops it. It is your name on those calls, so you decide what gets said.",
  },
  {
    icon: IconClockFilled,
    title: "Two Hours Of Your Time In Week One",
    body: "A kickoff call, access to your estimating system, and sign-off on the wording. That is the whole ask, and it is front-loaded. After week one your specialist works and you read the log. If we cannot get those three things we will cancel and charge you nothing.",
  },
  {
    icon: IconUserFilled,
    title: "One Person, And The Same One Every Day",
    body: "They learn your pricing, your service area, your objections, and the two competitors who keep undercutting you, and none of it walks out to another account on Thursday.",
  },
  {
    icon: IconDesktopFilled,
    title: "Works With The Software You Already Use",
    body: "No migration and nothing for your techs to learn. Your specialist works inside [ServiceTitan, Housecall Pro, Jobber, OTHERS], and every call and text goes out from your business, under your name, logged against the job in your own software. Running estimates from a spreadsheet and a phone works too.",
  },
  {
    icon: IconCardFilled,
    title: "What Happens After Two Weeks",
    body: "Nothing, unless you want it. The $49 is one charge, with no subscription running in the background and no card waiting to start billing. On day 14 you will have a worked list and the outcomes logged against every job. Keep going and it is $450 a month, month to month. If you stop, tell us and we refund the $49, and you keep the list, the scripts, and everything on it.",
  },
  {
    icon: IconXFilled,
    title: "Who This Doesn't Work For",
    body: "If you do not send written estimates, if you cannot give access to where they live, if your open list is a handful of quotes a month, or if what you want is somebody to answer the phone rather than go and find work, this is not it, and we will tell you on the call rather than after.",
  },
];

// Mobile-only static grouping of the first 10 features (indices into `features` above),
// mirroring the mockup's "01/02/03" clusters. Desktop keeps the InteractiveFeatures accordion.
const featureClusters = [
  { number: "01", title: "Leads You Already Own", indices: [0, 1, 4, 5] },
  { number: "02", title: "How The Work Gets Done", indices: [2, 3] },
  { number: "03", title: "You Stay In Control", indices: [6, 8, 9, 7] },
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
      <main id="top">
        {/* ---------- 2 & 3 - Hero + Why $49 share one seamless background (hero-why-shell) ---------- */}
        <div className="hero-why-shell">
          <section id="hero" className="hero" style={{ padding: 0 }}>
          <div className="wrap">
            <div className="grid">
              <Reveal direction="l">
                <span className="eyebrow">HVAC owners</span>
                <h1
                  style={{
                    lineHeight: 1.06,
                    textWrap: "balance",
                  }}
                >
                  <span className="hero-line1">Book 40% More Jobs</span>
                  <br className="hidden md:block" />
                  <span className="num">Without Buying Another Lead.</span>
                </h1>
                <p className="sub">
                  $49 buys two weeks of a full-time specialist, working only on
                  your business.
                  <span className="block mt-1.5">
                    They find homeowners in your service area and contact them
                    directly, and they work every estimate and install already
                    sitting in your system, by call and text, in your company
                    name.
                  </span>
                </p>
                <div style={{ marginTop: 24 }}>
                  <BookButton />
                </div>
                <p
                  className="max-w-[520px] md:max-w-none md:whitespace-nowrap"
                  style={{ fontSize: 12, opacity: 0.62, marginTop: 10 }}
                >
                  {
                    "$49 for the two weeks. After that it's month to month, and if it isn't worth continuing we'll refund the $49."
                  }
                </p>

                {/* Mobile: floating estimate card, stacked below the hero text */}
                <div className="block md:hidden mt-8">
                  <div className="callcard">
                    <div className="bar">
                      <div className="dot">
                        <span className="ic">
                          <IconCalendarFilled />
                        </span>
                      </div>
                      <div>
                        <b>Open Estimates, Last 90 Days</b>
                        <small>Age, value, and follow-ups logged per job</small>
                      </div>
                    </div>
                    <div className="callrow">
                      <span className="ic">
                        <IconClockRingFilled />
                      </span>
                      <div className="t">
                        4620 Live Oak Dr &middot; Condenser Replacement
                        <small>System installed 16 yrs ago</small>
                      </div>
                      <div className="callmeta">
                        <span className="val">$12,000</span>
                        <span className="tag">Day 3 logged</span>
                      </div>
                    </div>
                    <div className="callrow">
                      <span className="ic">
                        <IconCalendarFilled />
                      </span>
                      <div className="t">
                        212 Magnolia Ct &middot; Full System Install
                        <small>Estimate sent 74 days ago</small>
                      </div>
                      <div className="callmeta">
                        <span className="val">$8,400</span>
                        <span className="tag blue">Day 7 logged</span>
                      </div>
                    </div>
                    <div className="callrow">
                      <span className="ic">
                        <IconCalendarFilled />
                      </span>
                      <div className="t">
                        88 Riverside Ave &middot; Repair &amp; Recharge
                        <small>Estimate sent 21 days ago</small>
                      </div>
                      <div className="callmeta">
                        <span className="val">$3,200</span>
                        <span className="tag blue">Day 1 logged</span>
                      </div>
                    </div>
                    <p className="illus">
                      We pay two weeks of their salary. You pay $49.
                    </p>
                  </div>
                </div>
              </Reveal>
              <div className="hidden md:block">
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
                          <small>Age, value, and follow-ups logged per job</small>
                        </div>
                      </div>
                      <div className="callrow">
                        <span className="ic">
                          <IconClockRingFilled />
                        </span>
                        <div className="t">
                          4620 Live Oak Dr &middot; Condenser Replacement
                          <small>System installed 16 yrs ago</small>
                        </div>
                        <div className="callmeta">
                          <span className="val">$12,000</span>
                          <span className="tag">Day 3 logged</span>
                        </div>
                      </div>
                      <div className="callrow">
                        <span className="ic">
                          <IconCalendarFilled />
                        </span>
                        <div className="t">
                          212 Magnolia Ct &middot; Full System Install
                          <small>Estimate sent 74 days ago</small>
                        </div>
                        <div className="callmeta">
                          <span className="val">$8,400</span>
                          <span className="tag blue">Day 7 logged</span>
                        </div>
                      </div>
                      <div className="callrow">
                        <span className="ic">
                          <IconCalendarFilled />
                        </span>
                        <div className="t">
                          88 Riverside Ave &middot; Repair &amp; Recharge
                          <small>Estimate sent 21 days ago</small>
                        </div>
                        <div className="callmeta">
                          <span className="val">$3,200</span>
                          <span className="tag blue">Day 1 logged</span>
                        </div>
                      </div>
                      <p className="illus">
                        We pay two weeks of their salary. You pay $49.
                      </p>
                    </div>
                  </Reveal>
                </div>
              </div>
            </div>
          </div>
          </section>

          <WhySection />
        </div>

        {/* ---------- 4 - Who we are / CTA ---------- */}
        <section id="who" className="section-pad">
          <div className="wrap">
            <div className="grid items-center gap-10 md:grid-cols-2">
              <div>
                <Reveal direction="l" className="sec-head" style={{ maxWidth: 480 }}>
                  <h2>Ten Minutes. We&apos;ll Count Your Open Estimates Together.</h2>
                  <p>
                    On the call we pull every open estimate in your system, sort them
                    by value and by age, and hand you the list. You keep it whether
                    or not you go any further.
                  </p>
                </Reveal>
                <Reveal direction="l" delay={0.1} style={{ marginTop: 24 }}>
                  <BookButton />
                </Reveal>
              </div>
              <div className="hero-right">
                <Reveal direction="r" delay={0.1} className="visualcol">
                  <div className="callcard">
                    <div className="bar">
                      <div className="dot">
                        <span className="ic">
                          <IconCalendarFilled />
                        </span>
                      </div>
                      <div>
                        <b>Open Estimates, Your System</b>
                        <small>Pulled live on the call, sorted by value</small>
                      </div>
                    </div>
                    <div className="callrow">
                      <span className="ic">
                        <IconClockRingFilled />
                      </span>
                      <div className="t">
                        910 Cypress Bend &middot; Full System Install
                        <small>Estimate sent 63 days ago</small>
                      </div>
                      <div className="callmeta">
                        <span className="val">$9,800</span>
                        <span className="tag">Day 3 logged</span>
                      </div>
                    </div>
                    <div className="callrow">
                      <span className="ic">
                        <IconCalendarFilled />
                      </span>
                      <div className="t">
                        44 Harbor View Ln &middot; Heat Pump Replacement
                        <small>Estimate sent 38 days ago</small>
                      </div>
                      <div className="callmeta">
                        <span className="val">$7,150</span>
                        <span className="tag blue">Day 7 logged</span>
                      </div>
                    </div>
                    <div className="callrow">
                      <span className="ic">
                        <IconCalendarFilled />
                      </span>
                      <div className="t">
                        305 Birchwood Dr &middot; Repair &amp; Recharge
                        <small>Estimate sent 12 days ago</small>
                      </div>
                      <div className="callmeta">
                        <span className="val">$2,650</span>
                        <span className="tag blue">Day 1 logged</span>
                      </div>
                    </div>
                    <p className="illus">
                      You keep the list whether or not you go any further.
                    </p>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- 5 - Features ---------- */}
        <section id="features" className="tint section-pad">
          {/* Desktop: interactive accordion */}
          <div className="hidden md:block">
            <InteractiveFeatures
              features={features.slice(0, 10).map((f) => ({
                title: f.title,
                body: f.body,
                icon: <f.icon />,
              }))}
            />
          </div>

          {/* Mobile: static grouped cards matching the mockup's "How It Works" layout */}
          <div className="block md:hidden">
            <div className="wrap flex flex-col gap-9 py-10">
              {featureClusters.map((cluster) => (
                <div key={cluster.number}>
                  <Reveal className="mb-4">
                    <span className="eyebrow text-[11px]">{cluster.number}</span>
                    <h3 className="mt-2 text-[19px] font-black text-navy">
                      {cluster.title}
                    </h3>
                  </Reveal>
                  <div className="flex flex-col gap-3">
                    {cluster.indices.map((idx, i) => {
                      const f = features[idx];
                      return (
                        <Reveal
                          key={f.title}
                          delay={0.06 * i}
                          className="rounded-2xl border border-line bg-white p-4 shadow-[0_8px_20px_rgba(20,40,110,.05)]"
                        >
                          <f.icon className="mb-3 block h-[34px] w-[34px] rounded-[10px] bg-navy-soft p-2 text-blue" />
                          <h4 className="text-[15.5px] font-bold text-navy">
                            {f.title}
                          </h4>
                          <div className="mt-2 text-sm leading-relaxed text-ink-soft">
                            {splitIntoParagraphs(f.body).map((paragraph, pIdx) => (
                              <p key={pIdx} className="mb-3 last:mb-0">
                                {paragraph}
                              </p>
                            ))}
                          </div>
                        </Reveal>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- 5b - Remaining two feature blocks ---------- */}
        <section id="details" className="section-pad">
          <div className="wrap">
            <Reveal className="sec-head mx-auto text-center" style={{ maxWidth: 700 }}>
              <span className="eyebrow">Before You Start</span>
              <h2>2 Things Worth Knowing</h2>
            </Reveal>
            <div className="grid gap-6 md:grid-cols-2">
              {features.slice(10, 12).map((f, i) => (
                <Reveal
                  key={f.title}
                  delay={0.08 * (i + 1)}
                  className="rounded-2xl border border-line bg-transparent p-6 transition-transform duration-200 ease-out hover:-translate-y-1"
                >
                  <f.icon className="mb-6 block h-9 w-9 text-blue" />
                  <h3 className="text-lg font-bold text-navy">
                    {f.title}
                  </h3>
                  <div className="mt-3 text-[15px] leading-relaxed text-ink-soft">
                    {splitIntoParagraphs(f.body).map((paragraph, idx) => (
                      <p key={idx} className="mb-4 last:mb-0">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- 6 - Repeat CTA ---------- */}
        <section id="book">
          <div className="wrap">
            <Reveal className="final">
              <span className="eyebrow">Get Started</span>
              <h2 style={{ marginTop: 12 }}>
                Two Weeks Of A Full-Time Specialist. $49.
              </h2>
              <p>
                10 minutes, we will count your open estimates together,
                <br className="hidden md:block" /> and you keep the list
                either way.
              </p>
              <div style={{ marginTop: 20 }}>
                <BookButton />
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      {/* ---------- 7 - Footer ---------- */}
      <footer>
        <div className="wrap">
          <span className="logo" role="img" aria-label="RemoHires" />
          <div className="frow">
            <p>
              Full-time remote specialists for HVAC owners. remohires.com
            </p>
            <p>
              &copy; 2026 RemoHires &middot;{" "}
              <a
                href="/termsofservice"
                className="text-sm! text-white/60! font-normal! hover:text-white! hover:underline transition-colors"
              >
                Terms
              </a>{" "}
              &middot;{" "}
              <a
                href="/privacypolicy"
                className="text-sm! text-white/60! font-normal! hover:text-white! hover:underline transition-colors"
              >
                Privacy
              </a>
            </p>
            <p style={{ opacity: 0.6 }}>
              PT Sentra Talenta Unggul &middot; (504) 265-1063
            </p>
          </div>
        </div>
      </footer>

      <Script
        type="module"
        src="https://cdn.landbot.io/landbot-3/landbot-3.0.0.mjs"
        strategy="afterInteractive"
      />
      <Script id="landbot-livechat" type="module" strategy="afterInteractive">
        {`
          var myLandbot = new Landbot.Livechat({
            configUrl: 'https://storage.googleapis.com/landbot.online/v3/H-3497472-BV2M5Q5WU7GV91CT/index.json',
          });
        `}
      </Script>
    </>
  );
}
