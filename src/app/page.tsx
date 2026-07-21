import type { Metadata } from "next";
import "./hvac.css";
import { SiteHeader } from "@/components/hvac/site-header";
import { MobileCta } from "@/components/hvac/mobile-cta";
import { Reveal } from "@/components/hvac/reveal";
import { HeroCaptureForm, FinalCaptureForm } from "@/components/hvac/capture-form";
import {
  IconBanknote,
  IconCalendarCheck,
  IconChevronDown,
  IconClock,
  IconFileCheck,
  IconFileText,
  IconHandCoins,
  IconPhone,
  IconPhoneIncoming,
  IconPhoneMissed,
  IconRefreshCw,
  IconRoute,
  IconShieldCheck,
  IconStar,
  IconUser,
  IconUserCheck,
  IconCheck,
} from "@/components/hvac/icons";

export const metadata: Metadata = {
  title:
    "RemoHires for HVAC Owners | Stop Losing Jobs You’ve Already Earned",
  description:
    "Missed calls, cold quotes, and unpaid invoices are booked revenue slipping away. RemoHires places a dedicated full-time teammate who answers, follows up, and chases every job to paid.",
};

const painPoints = [
  {
    icon: IconPhoneMissed,
    title: "Missed Calls",
    body: "The after-hours call comes in while you are on a job or at dinner. It rings out, and the booking goes to whoever picks up first.",
  },
  {
    icon: IconBanknote,
    title: "Unpaid Invoices",
    body: "The work is done, the money is not. Invoices sit while you are too busy to chase, and cash you already earned stays in someone else’s account.",
  },
  {
    icon: IconFileText,
    title: "Cold Quotes",
    body: "You send the estimate, then get buried. Nobody follows up, so the homeowner books whoever calls them back first.",
  },
];

const features = [
  {
    icon: IconPhone,
    title: "Answer Every Call",
    body: "Every call picked up live in your company name, so the job lands on your board, not a competitor’s.",
  },
  {
    icon: IconCalendarCheck,
    title: "Book And Schedule Jobs",
    body: "New work booked into your calendar and slotted to the right day and tech.",
  },
  {
    icon: IconRoute,
    title: "Keep Dispatch Moving",
    body: "Techs routed to the right address as the day shifts and jobs run long.",
  },
  {
    icon: IconFileCheck,
    title: "Follow Up On Quotes",
    body: "Every open estimate chased on a set schedule, so the quotes you already priced turn into booked work.",
  },
  {
    icon: IconStar,
    title: "Request Reviews",
    body: "Happy customers asked for a review while the good service is still fresh.",
  },
  {
    icon: IconHandCoins,
    title: "Chase What You Are Owed",
    body: "Every due invoice followed up in a friendly, steady way until it is paid.",
  },
];

const vetting = [
  {
    icon: IconShieldCheck,
    direction: "l" as const,
    title: "Clear Spoken English",
    body: "Every candidate is screened for phone-ready English and a warm, friendly manner.",
  },
  {
    icon: IconClock,
    title: "Your Business Hours",
    body: "Your teammate works your local hours, so customers reach a person when they call.",
  },
  {
    icon: IconUserCheck,
    title: "One Dedicated Person",
    body: "You get the same teammate each day, trained on your services and your tone.",
  },
  {
    icon: IconRefreshCw,
    direction: "r" as const,
    title: "Payroll And A Fast Swap",
    body: "We employ your teammate and carry payroll, taxes, and compliance. If the fit is off, we swap them quickly.",
  },
];

const pilotCards = [
  {
    title: "Founding Rate",
    body: "A flat monthly rate, less than a full-time local front desk, locked in while you stay.",
  },
  {
    title: "Cancel Anytime",
    body: "No long lock-in. You stay because it works, not because of a contract.",
  },
  {
    title: "Money Back Month One",
    body: "If your teammate does not earn their keep in the first month, you get your money back.",
  },
];

const comparisonRows = [
  {
    label: "Dedicated to your business",
    us: "Yes",
    shared: "Shared across clients",
    bot: "A script, not a person",
    local: "Yes",
  },
  {
    label: "Books, dispatches, follows up",
    us: "Yes",
    shared: "Mostly takes messages",
    bot: "Simple calls only",
    local: "Yes",
  },
  {
    label: "Handles the odd request with judgment",
    us: "Yes",
    shared: "Sometimes",
    bot: "No",
    local: "Yes",
  },
  {
    label: "Covers your business hours",
    us: "Yes",
    shared: "Often 24/7",
    bot: "24/7",
    local: "One shift",
  },
  {
    label: "Chases cold quotes and unpaid invoices",
    us: "Yes",
    shared: "No",
    bot: "No",
    local: "Maybe",
  },
  {
    label: "Hiring, payroll, and compliance",
    us: "We employ them",
    shared: "Not your staff",
    bot: "Not applicable",
    local: "You handle it",
  },
];

const faqs = [
  {
    q: "How much does it cost?",
    a: "Flat monthly rate, set to the role. Founding clients get our lowest rate, can cancel anytime, and get their money back if the first month does not earn its keep. We share the exact figure on your call and how it compares to a local front desk.",
  },
  {
    q: "Will my customers understand them?",
    a: "Yes. Every candidate is screened for clear, phone-ready English and trained on your services before they take a single call.",
  },
  {
    q: "What if I already use an answering service or an AI?",
    a: "Many owners do. A shared service or a bot can catch a call, but a dedicated teammate learns your shop, books the job, follows up on quotes, and handles the odd request a script drops. You keep more of the calls that turn into work.",
  },
  {
    q: "What hours are covered?",
    a: "Your teammate works your local business hours, and we can arrange evening or weekend cover for your busy season.",
  },
  {
    q: "Is this a full-time hire?",
    a: "Yes. RemoHires places full-time remote employees, employed through our Employer of Record, so you get a committed teammate and we carry the payroll and compliance.",
  },
  {
    q: "Who touches my phones, customers, and payments?",
    a: "Your teammate starts on calls and quote follow-up. Access to your CRM or any billing is added only as you decide, with the permissions you set. You keep control of the tools and the customer relationship.",
  },
  {
    q: "What if they are sick or it does not work out?",
    a: "Your teammate works your hours, and we can arrange cover for busy periods. If the fit is off, we swap them quickly, so your phone does not go dark.",
  },
  {
    q: "How do we get started?",
    a: "Book a discovery call. We screen and match candidates to your needs, then you meet a shortlist and choose before anyone starts.",
  },
];

export default function Home() {
  return (
    <>
      <link
        href="https://api.fontshare.com/v2/css?f[]=satoshi@900,700,500,400&display=swap"
        rel="stylesheet"
      />
      <SiteHeader />
      <main id="top">
        {/* ---------- Hero ---------- */}
        <section className="hero">
          <div className="wrap">
            <div className="grid">
              <Reveal direction="l">
                <span className="eyebrow">For HVAC Owners</span>
                <h1>Stop Losing Jobs You&rsquo;ve Already Earned</h1>
                <p className="sub">
                  The missed call, the quote you never chased, the invoice
                  left unpaid. That is booked revenue walking out the door. A
                  dedicated, full-time teammate catches all three, so you can
                  stay on the tools.
                </p>
                <HeroCaptureForm />
                <a className="seelink" href="#role">
                  See how it works{" "}
                  <span className="ic">
                    <IconChevronDown />
                  </span>
                </a>
                <div className="cticks">
                  <span>
                    <span className="ic">
                      <IconCheck />
                    </span>
                    Screened, full-time, dedicated
                  </span>
                  <span>
                    <span className="ic">
                      <IconCheck />
                    </span>
                    We employ them, payroll on us
                  </span>
                  <span>
                    <span className="ic">
                      <IconCheck />
                    </span>
                    Money back your first month
                  </span>
                </div>
              </Reveal>
              <Reveal direction="r">
                <div className="callcard">
                  <div className="bar">
                    <div className="dot">
                      <span className="ic">
                        <IconPhone />
                      </span>
                    </div>
                    <div>
                      <b>Front Desk, Live</b>
                      <small>Tuesday, 6:42 PM</small>
                    </div>
                  </div>
                  <div className="callrow">
                    <span className="ic">
                      <IconPhoneIncoming />
                    </span>
                    <div className="t">
                      Incoming call, Maple Street
                      <small>No cooling, upstairs unit</small>
                    </div>
                    <span className="tag">Answered</span>
                  </div>
                  <div className="callrow">
                    <span className="ic">
                      <IconCalendarCheck />
                    </span>
                    <div className="t">
                      Job booked for tomorrow 9 AM
                      <small>Added to the schedule</small>
                    </div>
                    <span className="tag blue">Booked</span>
                  </div>
                  <div className="callrow">
                    <span className="ic">
                      <IconRoute />
                    </span>
                    <div className="t">
                      Tech routed, Diego
                      <small>Closest van, notified</small>
                    </div>
                    <span className="tag blue">Dispatched</span>
                  </div>
                  <div className="callrow">
                    <span className="ic">
                      <IconStar />
                    </span>
                    <div className="t">
                      Quote followed up, job won
                      <small>$4,200 install from Monday</small>
                    </div>
                    <span className="tag">Won</span>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ---------- Where money leaks ---------- */}
        <section id="pain">
          <div className="wrap">
            <Reveal className="sec-head">
              <span className="eyebrow">Where Your Money Goes</span>
              <h2>Three Ways The Money Leaks Out</h2>
              <p>
                Most of what you lose is not new business. It is work you
                already won, slipping through the cracks while you are up on
                a roof.
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
        <section id="role" className="tint">
          <div className="wrap">
            <Reveal className="sec-head">
              <span className="eyebrow">What You Get</span>
              <h2>One Teammate Who Chases Every Job To Done</h2>
              <p>
                A dedicated, full-time teammate who learns your business and
                owns the work from the first ring to the paid invoice.
              </p>
            </Reveal>
            <div className="feat">
              {features.map((f) => (
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

        {/* ---------- Why RemoHires ---------- */}
        <section id="why">
          <div className="wrap">
            <Reveal className="sec-head">
              <span className="eyebrow">Why RemoHires</span>
              <h2>More Than A Bot Can Do</h2>
              <p>
                You have probably been told to just automate it. A bot can
                catch a call. It will not chase a cold quote or a customer on
                the fence, and it will not get an unpaid invoice paid.
              </p>
            </Reveal>
            <Reveal className="cmpwrap">
              <table className="cmp">
                <thead>
                  <tr>
                    <th>What You Get</th>
                    <th className="us">RemoHires</th>
                    <th>Shared Answering Service</th>
                    <th>AI Answering Bot</th>
                    <th>Local Front-Desk Hire</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row) => (
                    <tr key={row.label}>
                      <td>{row.label}</td>
                      <td className="us">
                        <span className="y">
                          <span className="ic">
                            <IconCheck />
                          </span>
                          {row.us}
                        </span>
                      </td>
                      <td>{row.shared}</td>
                      <td>{row.bot}</td>
                      <td>{row.local}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Reveal>
            <p className="cmpnote">
              Use both. Let a bot grab the call. Let a real person make sure
              the job gets booked, done, and paid. That is the half
              automation keeps dropping.
            </p>
          </div>
        </section>

        {/* ---------- How we vet ---------- */}
        <section className="tint">
          <div className="wrap">
            <Reveal className="sec-head">
              <span className="eyebrow">How We Vet</span>
              <h2>Screened And Employed Right</h2>
              <p>
                A remote hire works when you trust the person on the phone.
                Here is how we make that safe for your customers, and easy to
                walk back if the fit is off.
              </p>
            </Reveal>
            <div className="grid-auto">
              {vetting.map((v) => (
                <Reveal key={v.title} direction={v.direction} className="card">
                  <span className="ic">
                    <v.icon />
                  </span>
                  <h3>{v.title}</h3>
                  <p>{v.body}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- Proof ---------- */}
        <section>
          <div className="wrap">
            <Reveal className="sec-head">
              <span className="eyebrow">Proof</span>
              <h2>Built With A Real HVAC Owner</h2>
            </Reveal>
            <Reveal className="proof">
              <div className="av">
                <span className="ic">
                  <IconUser />
                </span>
              </div>
              <div>
                <p>
                  Michael was the front desk, the dispatcher, and the man on
                  the roof. We built RemoHires around his real day, so his
                  teammate now catches the calls he used to miss and follows
                  up on the quotes that used to sit.{" "}
                  <b>Louisiana Home Performance</b> is our first partner,
                  which is exactly why founding clients get this much
                  attention.
                </p>
                <small>Michael, Founder, Louisiana Home Performance</small>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ---------- Founding pilot ---------- */}
        <section className="tint">
          <div className="wrap">
            <Reveal className="sec-head">
              <span className="eyebrow">Founding Pilot</span>
              <h2>Try It With The Risk On Us</h2>
              <p>
                We are taking a small number of founding HVAC clients while
                we build. You get our lowest rate and the most hands-on
                onboarding we will ever offer.
              </p>
            </Reveal>
            <div className="grid3">
              {pilotCards.map((c) => (
                <Reveal key={c.title} className="card">
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
                Ready To Stop Leaving Money On The Table?
              </h2>
              <p className="fsub">
                Tell us about your shop and your busiest hours. We will show
                you where the jobs are slipping and how a dedicated teammate
                plugs the leaks.
              </p>
              <FinalCaptureForm />
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
