import type { Metadata } from "next";
import "./administrative-assistant.css";
import { BookCta } from "@/components/administrative-assistant/book-cta";
import { LeadModal } from "@/components/administrative-assistant/lead-modal";
import { MobileFab } from "@/components/administrative-assistant/mobile-fab";
import { ScrollReveal } from "@/components/administrative-assistant/scroll-reveal";
import { FaqAccordion } from "@/components/administrative-assistant/faq-accordion";
import { FontLoader } from "@/components/administrative-assistant/font-loader";
import { LazyImageLoader } from "@/components/administrative-assistant/lazy-image-loader";

export const metadata: Metadata = {
  title: "RemoHires | A Full-Time Remote Administrative Assistant For Your Business",
  description:
    "RemoHires places a full-time remote Administrative Assistant who runs your inbox, calendar, and daily busywork. Free to start, you pay when you hire.",
};

export default function AdministrativeAssistantPage() {
  return (
    <>
      <FontLoader />
      <link rel="preconnect" href="https://api.fontshare.com" />
      <link rel="preconnect" href="https://cdn.fontshare.com" crossOrigin="anonymous" />
      <link rel="preload" as="style" href="https://api.fontshare.com/v2/css?f[]=satoshi@900,700,500,400&display=swap" />
      <link
        href="https://api.fontshare.com/v2/css?f[]=satoshi@900,700,500,400&display=swap"
        rel="stylesheet"
        media="print"
        data-font-swap="satoshi"
      />
      <noscript>
        <link href="https://api.fontshare.com/v2/css?f[]=satoshi@900,700,500,400&display=swap" rel="stylesheet" />
      </noscript>
      <div className="rh">
        <ScrollReveal />
        <FaqAccordion />
        <MobileFab />
        <LeadModal />
        <LazyImageLoader />

        <main>
          <section className="hero">
            <div className="aura"><i className="b1"></i><i className="b2"></i><i className="b3"></i></div>
            <div className="wrap">
              <nav className="nav">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/logo-remohires-color.svg" alt="RemoHires" width={174} height={44} decoding="async" fetchPriority="high" />
                <div className="r">
                  <span className="navtag"><span className="nd"></span>Administrative Assistants, Full Time, Remote</span>
                  <BookCta ctaName="nav" className="btn">Book A Free Call</BookCta>
                </div>
              </nav>
              <div className="hero-in">
                <h1>
                  <span className="line anim d1">Get Your Time Back</span>{" "}
                  <span className="line anim d2">Starting This <span className="c-turq shimmer">Week</span></span>
                </h1>
                <p className="sub anim">Overwhelmed with admin? A full-time remote <strong>Administrative Assistant</strong> runs your inbox, calendar, and daily busywork. So you get <strong>real hours back</strong> this week.</p>
                <div className="cta-row anim d4">
                  <div id="hero-cta">
                    <BookCta ctaName="hero" className="btn lg">Book A Free Call</BookCta>
                  </div>
                </div>
                <p className="trust anim d5"><strong>Free to start.</strong> You pay when you hire, and the hire is a full-time employee, not a freelancer.</p>
                <div className="hero-glass anim from-l" aria-hidden="true">
                  <span className="hg-chip"><span className="hg-dot"></span>Task comes in</span>
                  <span className="hg-chip is-on"><span className="hg-dot on"></span>Your Admin Assistant handles it</span>
                  <span className="hg-chip"><span className="hg-check"></span>Done and off your plate, same day</span>
                </div>
              </div>
            </div>
            <a className="hero-scroll anim d6" href="#how">
              <span className="hs-label">See how it works</span>
              <span className="hs-arrow">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4}><path d="M12 5v14M5 12l7 7 7-7" /></svg>
              </span>
            </a>
          </section>

          <section id="how">
            <div className="wrap">
              <div className="shead">
                <div className="slabel rv rv-z"><span className="sn">01</span>The Pain</div>
                <h2 className="rv rv-l">Every Hour On Admin Is An Hour Not Spent Growing The Business</h2>
                <p className="lead rv rv-d d-a">Most small businesses do not have anyone whose only job is the inbox, the calendar, the data entry, and the admin that keeps piling up. It still has to get done, it just eats the hours you do not have.</p>
              </div>
              <div className="cards3 stagger sx">
                <div className="fcard">
                  <div className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 3" /></svg></div>
                  <h3>The Inbox Never Empties</h3>
                  <p>Emails and requests build up between jobs and meetings, so replies slip to tomorrow, then the day after.</p>
                </div>
                <div className="fcard">
                  <div className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.81.32 1.6.6 2.36a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.72-1.72a2 2 0 0 1 2.11-.45c.76.28 1.55.48 2.36.6a2 2 0 0 1 1.72 2z" /></svg></div>
                  <h3>The Admin Falls On You</h3>
                  <p>The owner ends up doing the scheduling, the data entry, and the follow-up between the work that actually pays.</p>
                </div>
                <div className="fcard">
                  <div className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg></div>
                  <h3>Customer Requests Wait Too</h3>
                  <p>Support tickets, quote requests, and simple customer questions queue up alongside everything else, so people wait longer for a reply than they should.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="band">
            <div className="wrap">
              <div className="split">
                <div>
                  <div className="slabel rv rv-l"><span className="sn">02</span>The Hire</div>
                  <h2 className="rv rv-z" style={{ marginTop: 22 }}>One Person, Working Your Business Every Day</h2>
                  <p className="body rv rv-d d-a" style={{ marginTop: 20 }}>A RemoHires Administrative Assistant handles your inbox, calendar, data entry, research, and recurring admin on a set schedule, inside your own tools. You approve the person, the task list, and the hours before day one.</p>
                  <div className="bignum stagger">
                    <div><div className="n">$0<span className="u"> to start</span></div><div className="l">No setup fee and no upfront cost. You pay once you hire the person you approve.</div></div>
                    <div><div className="n">40<span className="u"> hrs/wk</span></div><div className="l">A full-time assistant on your workload every business day, on your hours</div></div>
                    <div><div className="n">1</div><div className="l">Dedicated person on your tasks, not a shared admin pool juggling other clients</div></div>
                  </div>
                </div>
                <div className="rv rv-r d-b">
                  <div className="dash float">
                    <div className="chead"><span className="dot"></span><h4>Candidate Shortlist</h4></div>
                    <div className="sub">An example of what you review before you approve anyone</div>
                    <div className="stagger">
                      <div className="row"><div><div className="addr">Grace T.</div><div className="meta">4 years executive support, fluent English</div></div><div><div className="val">Screened</div><div className="day">Available</div></div></div>
                      <div className="row"><div><div className="addr">Daniel R.</div><div className="meta">Calendar &amp; inbox management, CRM experience</div></div><div><div className="val">Screened</div><div className="day">Available</div></div></div>
                      <div className="row"><div><div className="addr">Maya S.</div><div className="meta">Customer service background, bilingual</div></div><div><div className="val">Screened</div><div className="day">Available</div></div></div>
                    </div>
                    <p className="foot-note">Illustrative example. You review real, screened profiles once your search begins.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="wrap">
              <div className="shead">
                <div className="slabel rv rv-r"><span className="sn">03</span>How It Starts</div>
                <h2 className="rv rv-l">Free To Start, You Pay When You Hire</h2>
                <p className="lead rv rv-d d-a">No setup fee and no upfront cost. You approve the person, the task list, and the hours, then RemoHires quotes one simple number for the role.</p>
              </div>
              <div className="steps stagger sx">
                <div className="step">
                  <div className="sn">1</div>
                  <h3>Book Your Free Call</h3>
                  <p>Tell RemoHires about the tasks piling up and your hours. A real person calls you back to map out the role.</p>
                </div>
                <div className="step">
                  <div className="sn">2</div>
                  <h3>Review A Screened Shortlist</h3>
                  <p>RemoHires sources and screens candidates for organization, English fluency, and relevant admin or support experience. You meet the person on video first.</p>
                </div>
                <div className="step">
                  <div className="sn">3</div>
                  <h3>Hire, Full Time, Through RemoHires</h3>
                  <p>Your Administrative Assistant works full time under RemoHires&rsquo; fully managed employment, so payroll, compliance, and benefits are handled for you.</p>
                </div>
              </div>
              <div className="note-line rv rv-z d-b"><span className="tk"></span><div>One simple number for the role you need, quoted on your call. No hourly surprises, no line items, and no surprises on the invoice.</div></div>
            </div>
          </section>

          <section className="band">
            <div className="wrap">
              <div className="shead">
                <div className="slabel rv rv-l"><span className="sn">04</span>Before You Start</div>
                <h2 className="rv rv-r">You Stay In Control</h2>
              </div>
              <div className="two stagger">
                <div className="panel">
                  <h3>Your Name, Your Software, No Lock-In</h3>
                  <p style={{ marginTop: 4 }}>You sign off on the <strong>task list</strong> and the hours before your assistant touches a single inbox or file. Everything runs inside <strong>your own tools</strong>, whether that is email, a shared calendar, a CRM, or a plain spreadsheet.</p>
                  <p style={{ marginTop: 14 }}>Your assistant works only for you, employed full time with benefits handled, so they stay and learn your business instead of juggling other clients.</p>
                  <p style={{ marginTop: 14 }}>Month to month once hired, and one message from you stops it.</p>
                </div>
                <div className="panel">
                  <h3>Who This Fits Best</h3>
                  <p style={{ marginTop: 4 }}>This works best when the inbox, the calendar, and the recurring admin are eating hours you would rather spend on clients or growth. If your workload is only a few hours a month, RemoHires will say so on the call, early.</p>
                  <p style={{ marginTop: 14 }}>Nothing to migrate, and nothing for your team to learn. Your assistant starts on the tools and tasks you already use.</p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="wrap">
              <div className="shead">
                <div className="slabel rv rv-r"><span className="sn">05</span>No Risk To Look</div>
                <h2 className="rv rv-l">Start With A Free Call, No Commitment</h2>
                <p className="lead rv rv-d d-a">You do not decide anything up front. RemoHires gets on a short call, maps out your tasks and hours together, and you decide from there.</p>
              </div>
              <div className="two stagger">
                <div className="panel">
                  <h3>Why It Is Safe To Try</h3>
                  <ul className="ticks">
                    <li><strong>Free to start.</strong> You pay only once you hire the person you approve.</li>
                    <li><strong>You approve the person first.</strong> You meet them on video before they touch a single task, one dedicated person on your business, not a shared outsourcing pool.</li>
                    <li><strong>Full time, not a freelancer.</strong> Your Administrative Assistant is employed full time under RemoHires&rsquo; fully managed employment.</li>
                    <li><strong>No lock-in.</strong> Month to month, and one message from you stops it.</li>
                  </ul>
                </div>
                <div className="tframe rv rv-z d-b">
                  <div className="tcard">
                    <span className="tq" aria-hidden="true">&ldquo;</span>
                    <span className="teyebrow">In Their Words</span>
                    <blockquote>&ldquo;RemoHires helped us find the right talent for our needs, keeping our projects on track and costs under control.&rdquo;</blockquote>
                    <div className="tattr">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        className="tlogo lazyimg"
                        src="/lhp-logo.png"
                        alt="Louisiana Home Performance"
                        width={198}
                        height={150}
                        loading="lazy"
                        decoding="async"
                      />
                      <div className="tmeta"><b>Michael</b><span>Founder, Louisiana Home Performance</span></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="band">
            <div className="wrap">
              <div className="shead">
                <div className="slabel rv rv-l"><span className="sn">06</span>Questions</div>
                <h2 className="rv rv-r">What Owners Usually Ask</h2>
              </div>
              <div className="faq rv rv-d d-a">
                <details>
                  <summary>Will my Administrative Assistant guarantee a set amount of work gets done?</summary>
                  <p>RemoHires screens every candidate for organization, English fluency, and relevant admin or support experience before you meet them, but nobody can promise a fixed output on every task. What changes is having one dedicated person on it, full time.</p>
                </details>
                <details>
                  <summary>Is this a freelancer or a contractor?</summary>
                  <p>Full time. RemoHires places a full-time employee under fully managed employment, not a freelancer or a gig worker.</p>
                </details>
                <details>
                  <summary>Can my Administrative Assistant use my own tools and software?</summary>
                  <p>Yes. Your assistant works inside the email, calendar, CRM, and software you already use, so nothing changes for your team.</p>
                </details>
                <details>
                  <summary>How is pricing structured?</summary>
                  <p>RemoHires quotes one flat number for the role on your free call, based on the hours and experience you need. There is no setup fee, and you pay once you hire.</p>
                </details>
              </div>
            </div>
          </section>

          <section className="cta" id="final-cta">
            <div className="aura"><i className="b1"></i><i className="b2"></i></div>
            <div className="wrap">
              <div className="tagwrap"><div className="tag dark rv rv-z"><span className="d"></span>Get Started</div></div>
              <h2 className="rv rv-r">Get Your Time Back, Starting This Week</h2>
              <p className="lead rv rv-d d-a">Leave your number. RemoHires calls you back, maps out the role together, and starts the search. Free to start, and you decide from there.</p>
              <BookCta ctaName="final" className="btn lg rv rv-l d-b">Book A Free Call</BookCta>
              <p className="trust rv rv-r">Free to start. You pay when you hire. A real person calls, during business hours.</p>
            </div>
          </section>
        </main>

        <footer>
          <div className="wrap fbar">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="lazyimg"
              src="/logo-remohires-color.svg"
              alt="RemoHires"
              width={174}
              height={44}
              loading="lazy"
              decoding="async"
            />
            <div className="links"><a href="https://remohires.com/terms">Terms</a><span>&middot;</span><a href="https://remohires.com/privacy">Privacy</a><span>&middot;</span>(504) 265-1063</div>
          </div>
        </footer>
      </div>
    </>
  );
}
