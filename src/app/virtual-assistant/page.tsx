import type { Metadata } from "next";
import "./virtual-assistant.css";
import { TopStrip } from "@/components/virtual-assistant/top-strip";
import { SiteHeader } from "@/components/virtual-assistant/site-header";
import { Reveal } from "@/components/virtual-assistant/reveal";
import { BookCta } from "@/components/virtual-assistant/book-cta";
import { ServicesWidget, type ServiceCategory } from "@/components/virtual-assistant/services-widget";
import { Logo } from "@/components/virtual-assistant/logo";
import { MobileBookFab } from "@/components/virtual-assistant/mobile-book-fab";
import { CallbackModal } from "@/components/virtual-assistant/callback-modal";
import {
  IconCheck,
  IconMail,
  IconCalendar,
  IconPhone,
  IconSearch,
  IconList,
  IconClock,
  IconUser,
  IconHeart,
  IconCompass,
  IconTool,
  IconLayers,
  IconGrid,
  IconRepeat,
  IconShield,
  IconMailCheck,
  IconSliders,
  IconEye,
  IconX,
} from "@/components/virtual-assistant/icons";

export const metadata: Metadata = {
  title: "Virtual Assistants for Wholesale Distributors | RemoHires",
  description:
    "Get a dedicated virtual or executive assistant for your wholesale distribution business. Delegate customer follow-ups, order admin, scheduling, and research.",
};

const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    number: "01",
    title: "Work You Can Hand Off",
    items: [
      {
        icon: <IconMailCheck />,
        title: "Inbox & Email Management",
        body: "Your inbox gets sorted, flagged, and answered using replies you approve, so nothing important slips through.",
      },
      {
        icon: <IconCalendar />,
        title: "Calendar & Scheduling",
        body: "Meetings get booked, moved, and confirmed without you ever opening your calendar app.",
      },
      {
        icon: <IconPhone />,
        title: "Customer & Order Follow-Ups",
        body: "Quotes, order updates, and check-ins go out on time, every time, in your voice.",
      },
      {
        icon: <IconGrid />,
        title: "CRM & Sales Administration",
        body: "Customer records, quote status, and sales notes stay current in the CRM you already use.",
      },
      {
        icon: <IconMail />,
        title: "Vendor & Supplier Communication",
        body: "Routine vendor emails, order confirmations, and follow-ups get handled without waiting on you.",
      },
      {
        icon: <IconSearch />,
        title: "Research & Reporting",
        body: "Vendor comparisons, pricing checks, and recurring reports land in your inbox as a summary, not a rabbit hole for you.",
      },
    ],
  },
  {
    number: "02",
    title: "How Your Assistant Works",
    items: [
      {
        icon: <IconCompass />,
        title: "Works From Your Instructions",
        body: "You set the priorities. Your assistant works the list, not the other way around.",
      },
      {
        icon: <IconLayers />,
        title: "Learns Your Business",
        body: "They pick up your products, pricing, and how you like things done, so you stop re-explaining the basics.",
      },
      {
        icon: <IconTool />,
        title: "Uses Your Existing Tools",
        body: "Email, calendar, and your CRM. We use whatever you already have running so there is no new software to learn.",
      },
      {
        icon: <IconRepeat />,
        title: "Follows Your Processes",
        body: "Your SOPs and templates get followed the same way, every time.",
      },
      {
        icon: <IconList />,
        title: "Keeps Tasks Organized",
        body: "Requests get tracked and logged, so nothing depends on someone remembering.",
      },
      {
        icon: <IconUser />,
        title: "Provides Consistent Support",
        body: "The same person handles your work every day, not a rotating cast of freelancers.",
      },
    ],
  },
  {
    number: "03",
    title: "You Stay In Control",
    items: [
      {
        icon: <IconSliders />,
        title: "You Decide What Gets Delegated",
        body: "Start with one task or ten. You control the scope, and it can grow as trust builds.",
      },
      {
        icon: <IconShield />,
        title: "You Approve Important Communications",
        body: "Anything sensitive goes out under your name, only after you've signed off.",
      },
      {
        icon: <IconCompass />,
        title: "You Can Adjust Priorities",
        body: "Today's most important task can change by 9am, and so can your assistant's list.",
      },
      {
        icon: <IconGrid />,
        title: "Works Inside Your Existing Workflow",
        body: "No new dashboard to check. Updates come through however you already communicate.",
      },
      {
        icon: <IconEye />,
        title: "You Can See What's Been Completed",
        body: "A simple log of what got done, so you're never left wondering.",
      },
    ],
  },
];

export default function VirtualAssistantWholesalePage() {
  return (
    <div className="va">
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <TopStrip />
      <SiteHeader />
      <MobileBookFab />
      <CallbackModal />

      <main id="main">
        <div className="hero-why-shell">
          <section id="top" className="hero" aria-labelledby="hero-heading">
            <div className="wrap">
              <div className="grid">
                <div>
                  <span className="eyebrow">For Wholesale Distributors &amp; Business Owners</span>
                  <h1 id="hero-heading">
                    <span className="hero-line">More Time For The Work</span>
                    <span className="hero-line">
                      Only <span className="hero-num">You</span> Can Do.
                    </span>
                  </h1>
                  <p className="sub">
                    Get a dedicated <b>virtual assistant</b> or <b>executive assistant</b> {" "} for the recurring work
                    that keeps your business moving, like order and customer follow-ups, vendor communication,
                    scheduling, research, and day-to-day admin. It&rsquo;s built with wholesale distributors in
                    mind, but works great for any growing business.
                  </p>
                  <div id="hero-cta" style={{ marginTop: 8 }}>
                    <BookCta ctaName="hero" className="btn primary bookbtn js-book-cta">
                      Book Your Discovery Call
                    </BookCta>
                  </div>
                  <p className="hero-microcopy">
                    Free 15-minute call. No pressure and no pitch deck. We&rsquo;ll just take a look at what&rsquo;s
                    on your plate.
                  </p>
                </div>

                <div className="visualcol">
                  <Reveal className="callcard">
                    <div className="bar">
                      <div className="dot">
                        <span className="ic" aria-hidden="true">
                          <IconCheck />
                        </span>
                      </div>
                      <div>
                        <b>Your Work, Handled</b>
                        <small>Completed and in progress, today</small>
                      </div>
                    </div>
                    <div className="callrow">
                      <span className="ic" aria-hidden="true">
                        <IconMail />
                      </span>
                      <div className="t">
                        Inbox cleanup
                        <small>47 emails sorted, 12 flagged for you</small>
                      </div>
                      <div className="callmeta">
                        <span className="tag">Completed</span>
                      </div>
                    </div>
                    <div className="callrow">
                      <span className="ic" aria-hidden="true">
                        <IconCalendar />
                      </span>
                      <div className="t">
                        Calendar scheduling
                        <small>This week</small>
                      </div>
                      <div className="callmeta">
                        <span className="val">3 meetings</span>
                        <span className="tag blue">Confirmed</span>
                      </div>
                    </div>
                    <div className="callrow">
                      <span className="ic" aria-hidden="true">
                        <IconPhone />
                      </span>
                      <div className="t">
                        Customer follow-up
                        <small>Order &amp; quote check-ins</small>
                      </div>
                      <div className="callmeta">
                        <span className="val">8 sent</span>
                        <span className="tag blue">Logged</span>
                      </div>
                    </div>
                    <div className="callrow">
                      <span className="ic" aria-hidden="true">
                        <IconSearch />
                      </span>
                      <div className="t">
                        Vendor quote comparison
                        <small>Pricing &amp; terms summary</small>
                      </div>
                      <div className="callmeta">
                        <span className="tag">Completed</span>
                      </div>
                    </div>
                    <p className="illus">Someone is actually handling this. Not another app to check.</p>
                  </Reveal>
                </div>
              </div>
            </div>
          </section>

          {/* ===== Who It's For ===== */}
          <section id="who-its-for" aria-labelledby="why-heading">
            <div className="wrap">
              <div className="two-col">
                <Reveal className="why-copy">
                  <span className="eyebrow">Who It&rsquo;s For</span>
                  <h2 id="why-heading">One Dedicated Assistant. Not Another App.</h2>
                  <p>
                    An assistant is only helpful if they actually take the work off your plate. That means you
                    spend less time on routine admin and more time on decisions, customers, and growth.
                    That&rsquo;s the work only you can do.
                  </p>
                  <p>
                    We designed this for wholesale distributors since order follow-ups, vendor communication, and
                    CRM updates never stop. But it&rsquo;s just as useful for any service business, e-commerce
                    operation, or growing company that needs reliable support.
                  </p>
                  <p>
                    You&rsquo;ll work with the same person every day instead of dealing with a marketplace of
                    random freelancers. They learn your business, your tools, your preferences, and how you
                    communicate, so you don&rsquo;t have to keep repeating yourself. You get a real person who can
                    handle tasks that require human judgment, not just another software tool you have to
                    configure and babysit.
                  </p>
                </Reveal>
                <Reveal className="visualcol" style={{ transitionDelay: "0.15s" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://ik.imagekit.io/qrnjdv9jd/RemoHires/va_workspace.png"
                    alt="Dedicated Virtual Assistant Workspace"
                    loading="lazy"
                    decoding="async"
                    style={{
                      width: "100%",
                      height: "auto",
                      borderRadius: 22,
                      boxShadow: "0 30px 60px rgba(15,33,112,.14)",
                      objectFit: "cover",
                      border: "1px solid var(--line)",
                    }}
                  />
                </Reveal>
              </div>
              <div className="grid3">
                <Reveal className="card">
                  <span className="ic" aria-hidden="true">
                    <IconClock />
                  </span>
                  <h3>Less On Your Plate</h3>
                  <p>Recurring operational work gets delegated so you can focus on revenue-driving decisions.</p>
                </Reveal>
                <Reveal className="card">
                  <span className="ic" aria-hidden="true">
                    <IconUser />
                  </span>
                  <h3>One Dedicated Person</h3>
                  <p>You get the same remote virtual assistant every day instead of a new freelancer each time.</p>
                </Reveal>
                <Reveal className="card">
                  <span className="ic" aria-hidden="true">
                    <IconHeart />
                  </span>
                  <h3>Real Human Support</h3>
                  <p>A person who can handle judgment calls, not a tool that needs constant configuration.</p>
                </Reveal>
              </div>
            </div>
          </section>
        </div>

        {/* ===== How it works / mid CTA ===== */}
        <section id="how-it-works" className="tint" aria-labelledby="how-heading">
          <div className="wrap">
            <div className="two-col">
              <div>
                <Reveal className="sec-head" style={{ marginBottom: 0, maxWidth: 520 }}>
                  <span className="eyebrow">How It Works</span>
                  <h2 id="how-heading">One Call. We&rsquo;ll Find The Work You Shouldn&rsquo;t Be Doing.</h2>
                  <p>
                    Walk us through what keeps landing on your desk. We&rsquo;ll help identify the recurring work
                    a virtual or executive assistant can handle for you. No pressure and absolutely no sales
                    pitch.
                  </p>
                </Reveal>
                <Reveal style={{ marginTop: 24 }}>
                  <BookCta ctaName="how-it-works" className="btn primary bookbtn js-book-cta">
                    Book Your Discovery Call
                  </BookCta>
                </Reveal>
              </div>
              <div className="visualcol">
                <Reveal className="callcard">
                  <div className="bar">
                    <div className="dot">
                      <span className="ic" aria-hidden="true">
                        <IconList />
                      </span>
                    </div>
                    <div>
                      <b>What Gets Delegated</b>
                      <small>Identified together, on the call</small>
                    </div>
                  </div>
                  <div className="callrow">
                    <span className="ic" aria-hidden="true">
                      <IconMail />
                    </span>
                    <div className="t">
                      Inbox &amp; email management
                      <small>Daily</small>
                    </div>
                    <div className="callmeta">
                      <span className="tag blue">Recurring</span>
                    </div>
                  </div>
                  <div className="callrow">
                    <span className="ic" aria-hidden="true">
                      <IconCalendar />
                    </span>
                    <div className="t">
                      Calendar &amp; scheduling
                      <small>Ongoing</small>
                    </div>
                    <div className="callmeta">
                      <span className="tag blue">Recurring</span>
                    </div>
                  </div>
                  <div className="callrow">
                    <span className="ic" aria-hidden="true">
                      <IconPhone />
                    </span>
                    <div className="t">
                      Customer &amp; vendor follow-ups
                      <small>Weekly</small>
                    </div>
                    <div className="callmeta">
                      <span className="tag">Completed</span>
                    </div>
                  </div>
                  <p className="illus">You keep the list whether or not you go any further.</p>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* ===== Services ===== */}
        <section id="services" className="section-pad" aria-labelledby="services-heading">
          <div className="wrap">
            <Reveal className="sec-head">
              <span className="eyebrow">Services</span>
              <h2 id="services-heading">What A Virtual Or Executive Assistant Can Take Off Your Plate</h2>
              <p>
                Real work, handled by a dedicated remote virtual assistant instead of a complicated checklist of
                software integrations.
              </p>
            </Reveal>

            {/* Mobile: static grouped cards (visible ≤1000px via CSS) */}
            <div className="svc-groups" id="svc-groups">
              {SERVICE_CATEGORIES.map((cat) => (
                <div className="svc-cluster" key={cat.title}>
                  <span className="eyebrow">{cat.number}</span>
                  <h3>{cat.title}</h3>
                  <div className="svc-cluster-items">
                    {cat.items.map((item) => (
                      <article className="svc-mobile-card" key={item.title}>
                        <span className="ic" aria-hidden="true">
                          {item.icon}
                        </span>
                        <h4>{item.title}</h4>
                        <p>{item.body}</p>
                      </article>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop: interactive tab widget (visible >1000px via CSS) */}
            <ServicesWidget categories={SERVICE_CATEGORIES} />

            <Reveal style={{ marginTop: 44, textAlign: "center" }}>
              <BookCta ctaName="services" className="btn primary bookbtn js-book-cta">
                Book Your Discovery Call
              </BookCta>
            </Reveal>
          </div>
        </section>

        {/* ===== Additional details ===== */}
        <section id="details" className="tint section-pad" aria-labelledby="details-heading">
          <div className="wrap">
            <Reveal className="sec-head" style={{ margin: "0 auto 36px", textAlign: "center", maxWidth: 640 }}>
              <span className="eyebrow">Before You Start</span>
              <h2 id="details-heading">Worth Knowing Before You Book</h2>
            </Reveal>
            <div className="details-grid">
              <Reveal className="card detail-card">
                <span className="ic" aria-hidden="true">
                  <IconClock />
                </span>
                <h3>A Few Minutes To Get Started</h3>
                <p>
                  All we need is a kickoff call and a list of your routine tasks. Your assistant starts working
                  from there without any lengthy onboarding or training documents required upfront.
                </p>
              </Reveal>
              <Reveal className="card detail-card">
                <span className="ic" aria-hidden="true">
                  <IconX />
                </span>
                <h3>Who This Isn&rsquo;t For</h3>
                <p>
                  If you need an in-office employee, a large team, or a specialist for one technical function,
                  this isn&rsquo;t the right fit. We&rsquo;ll be honest and tell you that directly on the call.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ===== Final CTA ===== */}
        <section id="final-cta" aria-labelledby="final-cta-heading">
          <div className="wrap">
            <Reveal className="final">
              <span className="eyebrow">Get Started</span>
              <h2 id="final-cta-heading" style={{ marginTop: 12 }}>
                One Dedicated Assistant. Ready When You Are.
              </h2>
              <p>
                A 15-minute call, and we&rsquo;ll map out what&rsquo;s eating your week and whether a dedicated
                virtual or executive assistant is the right fit. No pressure either way.
              </p>
              <div style={{ marginTop: 20 }}>
                <BookCta ctaName="final" className="btn primary bookbtn js-book-cta">
                  Book Your Discovery Call
                </BookCta>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap">
          <Logo variant="footer" className="logo-img" />
          <div className="frow">
            <p>
              Dedicated remote virtual and executive assistants for wholesale distributors and business owners.
            </p>
            <p>
              &copy; 2026 RemoHires &middot; <a href="/termsofservice">Terms</a> &middot;{" "}
              <a href="/privacypolicy">Privacy</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
