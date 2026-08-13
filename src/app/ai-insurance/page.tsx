import type { Metadata } from "next";
import "./ai-insurance.css";
import { Reveal } from "@/components/ai-insurance/reveal";
import { GlowCursor } from "@/components/ai-insurance/glow-cursor";
import { HeroTerminal } from "@/components/ai-insurance/hero-terminal";
import { ColdQuoteCard } from "@/components/ai-insurance/cold-quote-card";
import { LossCounter } from "@/components/ai-insurance/loss-counter";
import { CostCompare } from "@/components/ai-insurance/cost-compare";
import { MatchForm } from "@/components/ai-insurance/match-form";

export const metadata: Metadata = {
  title: "RemoHires — An AI Agent For Your Insurance Agency",
  description:
    "A dedicated AI engineer builds an AI agent for your insurance agency that works every new quote and keys new business the same day — from $300/week, about 83% less than a US AI engineer.",
};

const whatYouGet = [
  {
    icon: "👩‍💻",
    title: "A dedicated AI engineer",
    body: "One person on your team, vetted on the build skills you can't test yourself: agents, LLMs, APIs, Make, Zapier, n8n.",
  },
  {
    icon: "🤖",
    title: "An agent that does the work",
    body: "Works every new quote the same day and keys new business once, so quotes stop going cold and the double entry stops.",
  },
  {
    icon: "🔧",
    title: "Kept running every day",
    body: "Your engineer maintains and sharpens the agent as your carriers and AMS change. It doesn't break and sit.",
  },
];

const whyRemoHires = [
  {
    k: "1",
    title: "A person, not a tool",
    body: "Your own engineer builds and runs the agent. You're hiring someone, not buying software you have to figure out.",
  },
  {
    k: "2",
    title: "From $300 a week",
    body: "About a tenth of a US AI engineer. Matched free, no placement fee. You pay once someone joins your team.",
  },
  {
    k: "3",
    title: "Back office only",
    body: "They run the busywork and follow-up. Quoting decisions, selling, and binding stay with your licensed producers.",
  },
  {
    k: "4",
    title: "Access you control",
    body: "Scoped, least-privilege access you grant and can revoke. RemoHires is accountable, not a lone freelancer.",
  },
];

export default function AiInsurancePage() {
  return (
    <>
      <GlowCursor />
      <header>
        <div className="wrap nav">
          <a className="brand" href="#top" aria-label="Back to top">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img alt="RemoHires" src="/ai-insurance-mark.png" />
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
            <span className="chip">✦ AI ENGINEER + AI AGENT · FOR INSURANCE AGENCIES</span>
            <h1>
              Every quote worked <span className="grad">the same day.</span>
            </h1>
            <p className="sub">
              A dedicated AI engineer builds an <b>AI agent</b> for your agency that works every
              new quote and keys new business once. Your engineer keeps it running, so you stop
              losing quotes to whoever called first.
            </p>
            <div className="pricepill">
              <span className="big">From $300</span>
              <span className="lab">/ week · one AI engineer + agent</span>
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
                Right now, quotes you already won are{" "}
                <span className="hot">walking out the door.</span>
              </h2>
            </Reveal>
            <Reveal className="lead" index={1}>
              A prospect asks for a quote. Your team is on the phones. By the time anyone follows
              up, they have bought from the agent who called first, and you never see the policy
              or its renewals.
            </Reveal>
            <div className="paingrid">
              <ColdQuoteCard />
              <div className="painside">
                <Reveal className="loss">Quotes like this you lose in a year</Reveal>
                <Reveal className="lossbig" index={1}>
                  <LossCounter />
                </Reveal>
                <Reveal className="loss" index={2} style={{ marginBottom: 6 }}>
                  before you count the renewals that walk with them.
                </Reveal>
                <Reveal className="q" index={3}>
                  <p>
                    &ldquo;I can get back to prospects while they&rsquo;re still hot, not three
                    days later when they&rsquo;ve already moved on to the next agent.&rdquo;
                  </p>
                  <div className="src">— Producer, quote follow-up (Capterra, EZLynx)</div>
                </Reveal>
                <Reveal className="q" index={4}>
                  <p>
                    &ldquo;The software does not integrate with my CRM… therefore I have to do
                    double entry.&rdquo;
                  </p>
                  <div className="src">— Agent (Capterra, EZLynx)</div>
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
              One person and the agent they build for you. Not a subscription you have to run
              yourself.
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
              Same build skills — agents, LLMs, APIs, automation. A fraction of the price.
            </Reveal>
            <CostCompare />
            <p className="note">
              US figure: average AI engineer base salary, $152,661/yr (Indeed, Aug 2026).
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
              Tell us about your agency and we&rsquo;ll walk you through exactly how it would run
              for you. No pressure, no obligation.
            </Reveal>
            <MatchForm subject="New RemoHires insurance-agency call request" />
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
            <img alt="RemoHires" src="/ai-insurance-mark.png" style={{ width: 26, height: 26 }} />
          </a>
          <span>
            RemoHires — a dedicated AI engineer and agent for independent insurance agencies.{" "}
            <a href="mailto:info@remohires.com">info@remohires.com</a>
          </span>
        </div>
      </footer>
    </>
  );
}
