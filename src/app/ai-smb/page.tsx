import type { Metadata } from "next";
import "./ai-smb.css";
import { Reveal } from "@/components/ai-smb/reveal";
import { GlowCursor } from "@/components/ai-smb/glow-cursor";
import { HeroTerminal } from "@/components/ai-smb/hero-terminal";
import { ColdQuoteCard } from "@/components/ai-smb/cold-quote-card";
import { LossCounter } from "@/components/ai-smb/loss-counter";
import { CostCompare } from "@/components/ai-smb/cost-compare";
import { MatchForm } from "@/components/ai-smb/match-form";

export const metadata: Metadata = {
  title: "RemoHires — Custom AI Automation For Your Small Business",
  description:
    "A dedicated AI developer builds custom automation for your business that takes over follow-ups, data entry, and invoicing — from $300/week, about 83% less than a US AI developer.",
};

const whatYouGet = [
  {
    icon: "👩‍💻",
    title: "A dedicated AI developer",
    body: "One person on your team, vetted on the build skills you can't test yourself: custom AI, automation, and the integrations that connect your systems.",
  },
  {
    icon: "⚙️",
    title: "Automation that does the work",
    body: "Custom-built to take over your follow-ups, data entry, and invoicing, so the repetitive work runs on its own and leads stop going cold.",
  },
  {
    icon: "🔧",
    title: "Kept running every day",
    body: "Your developer maintains and improves it as your tools and business change. It doesn't break and sit.",
  },
];

const whyRemoHires = [
  {
    k: "1",
    title: "A person, not a tool",
    body: "Your own developer builds and runs the automation. You're hiring someone, not buying software you have to figure out.",
  },
  {
    k: "2",
    title: "From $300 a week",
    body: "About a tenth of a US AI developer. Matched free, no placement fee. You pay once someone joins your team.",
  },
  {
    k: "3",
    title: "You keep the relationships",
    body: "The automation handles the repetitive work behind the scenes. Selling and the calls that need a human stay with you and your team.",
  },
  {
    k: "4",
    title: "Access you control",
    body: "Scoped, least-privilege access you grant and can revoke. RemoHires is accountable, not a lone freelancer.",
  },
];

export default function AiSmbPage() {
  return (
    <>
      <GlowCursor />
      <header>
        <div className="wrap nav">
          <a className="brand" href="#top" aria-label="Back to top">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img alt="RemoHires" src="/ai-smb-mark.png" />
            <span>
              <span className="r">Remo</span>
              <span className="h">Hires</span>
            </span>
          </a>
          <a className="btn" href="#book">
            Book a Call →
          </a>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="aurora" />
          <div className="wrap">
            <span className="chip">✦ CUSTOM AI AUTOMATION · FOR SMALL BUSINESSES</span>
            <h1 style={{ maxWidth: "21ch" }}>
              Automate the Work That Eats Your Time
              <br />
              <span className="grad">— With a Dedicated AI Developer.</span>
            </h1>
            <p className="sub">
              A dedicated AI developer builds <b>custom automation</b> for your business that
              takes over the repetitive work — follow-ups, data entry, invoicing — so your
              workflow runs itself. Built for how you actually work, for a fraction of a US hire.
            </p>
            <div className="pricepill">
              <span className="big">From $300</span>
              <span className="lab">/ week · one dedicated AI developer</span>
            </div>
            <div className="ctarow">
              <a className="cta" href="#book">
                Book a 15-Min Call →
              </a>
              <span className="trust">
                Free, no obligation. See exactly how it would run for you.
              </span>
            </div>

            <HeroTerminal />
          </div>
        </section>

        <section className="pain">
          <div className="wrap">
            <Reveal>
              <h2>
                Right now, leads you paid for are{" "}
                <span className="hot">going cold in your inbox.</span>
              </h2>
            </Reveal>
            <Reveal className="lead" index={1}>
              Someone fills out your form or emails at 9pm. You&rsquo;re running the business, not
              watching the inbox. By the time anyone replies, they&rsquo;ve hired whoever got back
              to them first — and the busywork behind every job keeps piling up on you.
            </Reveal>
            <div className="paingrid">
              <ColdQuoteCard />
              <div className="painside">
                <Reveal className="loss">
                  Hours a week you lose to work AI could automate
                </Reveal>
                <Reveal className="lossbig" index={1}>
                  <LossCounter />
                </Reveal>
                <Reveal className="loss" index={2} style={{ marginBottom: 6 }}>
                  chasing follow-ups, re-keying data between apps, and building the same invoices
                  by hand.
                </Reveal>
                <Reveal className="q" index={3}>
                  <p>
                    The lead that waited three days for a reply. The invoice you built at 11pm.
                    The tool you pay for that nobody has time to set up.
                  </p>
                  <div className="src">— the busywork that never makes it off your plate</div>
                </Reveal>
                <Reveal className="q" index={4}>
                  <p>
                    You already bought the software. Someone still has to make it actually do the
                    work.
                  </p>
                  <div className="src">— why one more subscription won&rsquo;t fix it</div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="wrap">
            <Reveal>
              <h2>What you get</h2>
            </Reveal>
            <Reveal className="lead" index={1}>
              One person who builds custom automation around how your business already runs. Not
              a subscription you have to figure out yourself.
            </Reveal>
            <div className="cards">
              {whatYouGet.map((item, i) => (
                <Reveal className="card" index={i} key={item.title}>
                  <div className="ic">{item.icon}</div>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section style={{ background: "#070b11" }}>
          <div className="wrap">
            <Reveal>
              <h2>Why RemoHires</h2>
            </Reveal>
            <Reveal className="lead" index={1}>
              Not a tool. Not a freelancer who disappears. Not a US salary.
            </Reveal>
            <div className="why">
              {whyRemoHires.map((item, i) => (
                <Reveal className="w" index={i} key={item.title}>
                  <div className="k">{item.k}</div>
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="compare">
          <div className="wrap">
            <Reveal>
              <h2>What a US hire costs — and what you&rsquo;d pay</h2>
            </Reveal>
            <Reveal className="lead" index={1}>
              Same build skills — custom AI, automation, integrations. A fraction of the price.
            </Reveal>
            <CostCompare />
            <p className="note">
              US figure: average AI developer base salary, $152,661/yr (Indeed, Aug 2026).
              RemoHires: from $300/week. &ldquo;About 83% less&rdquo; is our standard comparison
              figure, pending final confirmation.
            </p>
          </div>
        </section>

        <section id="book">
          <div className="wrap">
            <Reveal>
              <h2>Book your 15-minute call</h2>
            </Reveal>
            <Reveal className="lead" index={1}>
              Tell us about your business and we&rsquo;ll walk you through exactly how it would
              run for you. No pressure, no obligation.
            </Reveal>
            <MatchForm subject="New RemoHires small-business call request" />
            <p className="note">
              &ldquo;From $300 a week&rdquo; is a starting price, pending final confirmation.
            </p>
          </div>
        </section>
      </main>

      <footer className="foot">
        <div className="wrap nav">
          <a className="brand" href="#top" aria-label="Back to top">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img alt="RemoHires" src="/ai-smb-mark.png" style={{ width: 26, height: 26 }} />
          </a>
          <span>
            RemoHires — a dedicated AI developer building custom automation for small businesses.{" "}
            <a href="mailto:info@remohires.com">info@remohires.com</a>
          </span>
        </div>
      </footer>
    </>
  );
}
