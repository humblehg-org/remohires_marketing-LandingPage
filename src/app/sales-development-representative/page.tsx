import type { Metadata } from "next";
import "./sales-development-representative.css";
import { BookCta } from "@/components/sales-development-representative/book-cta";
import { LeadModal } from "@/components/sales-development-representative/lead-modal";
import { MobileFab } from "@/components/sales-development-representative/mobile-fab";
import { ScrollReveal } from "@/components/sales-development-representative/scroll-reveal";
import { FontLoader } from "@/components/sales-development-representative/font-loader";
import { LazyImageLoader } from "@/components/sales-development-representative/lazy-image-loader";

export const metadata: Metadata = {
  title: "RemoHires | A Full-Time Remote SDR For Your Business",
  description:
    "RemoHires places a full-time remote SDR who prospects, follows up, and books qualified meetings in your company name, on your hours. Free to start, you pay when you hire.",
};

export default function SalesDevelopmentRepresentativePage() {
  return (
    <>
      <FontLoader />
      <link rel="preconnect" href="https://api.fontshare.com" crossOrigin="anonymous" />
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
                  <span className="navtag"><span className="nd"></span>SDRs, Full Time, Remote</span>
                  <BookCta ctaName="nav" className="btn">Book A Free Call</BookCta>
                </div>
              </nav>
              <div className="hero-in">
                <h1>
                  <span className="line anim d1">Your Reps Should Be Closing,</span>{" "}
                  <span className="line anim d2">Not <span className="c-turq shimmer">Prospecting</span></span>
                </h1>
                <p className="sub anim">RemoHires places a full-time remote <strong>SDR</strong> who prospects, follows up, and books qualified meetings in your company name, on your hours. Follow up in <strong>minutes, not days</strong>, and more replies turn into booked meetings.<a href="#src-1" className="cite" aria-label="See source">1</a></p>
                <div className="cta-row anim d4">
                  <div id="hero-cta">
                    <BookCta ctaName="hero" className="btn lg">Book A Free Call</BookCta>
                  </div>
                  <a className="scrolllink" href="#how">See how it works
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4}><path d="M12 5v14M5 12l7 7 7-7"/></svg>
                  </a>
                </div>
                <p className="trust anim d5"><strong>Free to start.</strong> You pay when you hire, and the hire is a full-time employee, not a freelancer.</p>
                <div className="hero-glass anim from-l" aria-hidden="true">
                  <span className="hg-chip"><span className="hg-dot"></span>New account to reach</span>
                  <span className="hg-chip is-on"><span className="hg-dot on"></span>Your SDR runs the outreach</span>
                  <span className="hg-chip"><span className="hg-check"></span>Qualified meeting, booked on your calendar</span>
                </div>
              </div>
            </div>
          </section>

          <section id="how">
            <div className="wrap">
              <div className="shead">
                <div className="slabel rv rv-z"><span className="sn">01</span>The Pain</div>
                <h2 className="rv rv-l">Pipeline Runs Dry The Week Prospecting Stops</h2>
                <p className="lead rv rv-d d-a">Most small teams have nobody whose only job is outbound. When selling gets busy, prospecting is the first thing to stop, and the pipeline goes quiet a month later.</p>
              </div>
              <div className="cards3 stagger sx">
                <div className="fcard">
                  <div className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg></div>
                  <h3>Prospecting Stops First</h3>
                  <p>When the team gets busy closing, the top of the funnel goes quiet first.</p>
                </div>
                <div className="fcard">
                  <div className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.81.32 1.6.6 2.36a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.72-1.72a2 2 0 0 1 2.11-.45c.76.28 1.55.48 2.36.6a2 2 0 0 1 1.72 2z"/></svg></div>
                  <h3>Closers Lose Selling Hours</h3>
                  <p>Your best people spend the day building lists instead of closing deals.</p>
                </div>
                <div className="fcard">
                  <div className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg></div>
                  <h3>Freelance SDRs Churn</h3>
                  <p>Part-time and gig reps go quiet or quit, and outbound stalls that week.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="band">
            <div className="wrap">
              <div className="split">
                <div>
                  <div className="slabel rv rv-l"><span className="sn">02</span>The Hire</div>
                  <h2 className="rv rv-z" style={{ marginTop: 22 }}>One SDR, Working Your Pipeline Every Day</h2>
                  <p className="body rv rv-d d-a" style={{ marginTop: 20 }}>A RemoHires SDR prospects, calls, and follows up on a set cadence, in your company name, inside your own CRM. You approve the person, the script, and the hours before the first message goes out.</p>
                  <div className="bignum stagger">
                    <div><div className="n">$0<span className="u"> to start</span></div><div className="l">No setup fee and no upfront cost. You pay once you hire the person you approve.</div></div>
                    <div><div className="n">40<span className="u"> hrs/wk</span></div><div className="l">A full-time SDR on your outbound every business day, on your hours</div></div>
                    <div><div className="n">1</div><div className="l">Dedicated person on your leads, not a shared call center queue</div></div>
                  </div>
                </div>
                <div className="rv rv-r d-b">
                  <div className="dash float">
                    <div className="chead"><span className="dot"></span><h4>Candidate Shortlist</h4></div>
                    <div className="sub">An example of what you review before you approve anyone</div>
                    <div className="stagger">
                      <div className="row"><div><div className="addr">Grace T.</div><div className="meta">4 years phone sales, fluent English</div></div><div><div className="val">Screened</div><div className="day">Available</div></div></div>
                      <div className="row"><div><div className="addr">Daniel R.</div><div className="meta">B2B outbound calling, CRM experience</div></div><div><div className="val">Screened</div><div className="day">Available</div></div></div>
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
                <p className="lead rv rv-d d-a">No setup fee and no upfront cost. You approve the person, the script, and the hours, then RemoHires quotes one simple number for the role.</p>
              </div>
              <div className="steps stagger sx">
                <div className="step">
                  <div className="sn">1</div>
                  <h3>Book Your Free Call</h3>
                  <p>Tell us about your pipeline and your hours. A real person calls you back to map out the role.</p>
                </div>
                <div className="step">
                  <div className="sn">2</div>
                  <h3>Review A Screened Shortlist</h3>
                  <p>We source and screen for outbound skill and clear English. You meet the person on video first.</p>
                </div>
                <div className="step">
                  <div className="sn">3</div>
                  <h3>Hire Through RemoHires</h3>
                  <p>Your SDR is employed full time under our fully managed employment, with payroll and benefits handled.</p>
                </div>
              </div>
              <div className="note-line rv rv-z d-b"><span className="tk"></span><div>One simple number for the role you need, quoted on your call. No per-call fees, no line items, and no surprises on the invoice.</div></div>
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
                  <p style={{ marginTop: 4 }}>You sign off on the <strong>outreach script</strong> and the hours before your SDR contacts a single prospect. Every call, email, and text runs inside <strong>your own CRM or phone system</strong>, and a spreadsheet and a phone work too.</p>
                  <p style={{ marginTop: 14 }}>Your SDR works only for you, employed full time with benefits handled, so they stay and learn your pipeline instead of juggling other clients.</p>
                  <p style={{ marginTop: 14 }}>Month to month once hired, and one message from you stops it.</p>
                </div>
                <div className="panel">
                  <h3>Who This Fits Best</h3>
                  <p style={{ marginTop: 4 }}>This works best when you have a market to reach but no one owning outbound full time, or when your closers are stuck prospecting instead of selling. If outbound is not the right lever for you yet, RemoHires will say so on the call, early.</p>
                  <p style={{ marginTop: 14 }}>Nothing to migrate, and nothing for your team to learn. Your SDR starts on the accounts and lists you already have.</p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="wrap">
              <div className="shead">
                <div className="slabel rv rv-r"><span className="sn">05</span>No Risk To Look</div>
                <h2 className="rv rv-l">Start With A Free Call, No Commitment</h2>
                <p className="lead rv rv-d d-a">You do not decide anything up front. RemoHires gets on a short call, maps out your leads and hours together, and you decide from there.</p>
              </div>
              <div className="two stagger">
                <div className="panel">
                  <h3>Why It Is Safe To Try</h3>
                  <ul className="ticks">
                    <li><strong>Free to start.</strong> You pay only once you hire the person you approve.</li>
                    <li><strong>You approve the person first.</strong> You meet them on video before a single call is made, one dedicated person in your name, not a shared call center.</li>
                    <li><strong>Full time, not a freelancer.</strong> Your SDR is employed full time under RemoHires&rsquo; fully managed employment.</li>
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
                  <summary>Will my SDR guarantee a set number of booked meetings?</summary>
                  <p>RemoHires screens every candidate for phone skill, English fluency, and outbound experience before you meet them, but nobody can promise a fixed number of booked meetings. What changes is that outbound runs every day, and every reply gets a fast follow-up.</p>
                </details>
                <details>
                  <summary>Is this a freelancer or a contractor?</summary>
                  <p>Full time. RemoHires places a full-time employee under fully managed employment, not a freelancer or a gig worker.</p>
                </details>
                <details>
                  <summary>Can my SDR use my own CRM and phone system?</summary>
                  <p>Yes. Calls and texts run inside the software you already use, so nothing changes for your team.</p>
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
              <h2 className="rv rv-r">Put An SDR On Your Pipeline Today</h2>
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
            <div className="links"><a href="https://remohires.com/terms">Terms</a><span>&middot;</span><a href="https://remohires.com/privacy">Privacy</a><span>&middot;</span>PT Sentra Talenta Unggul<span>&middot;</span>(504) 265-1063</div>
          </div>
          <div className="wrap"><p className="fnote" id="src-1">1. Source: Chili Piper, 2025 Benchmark Report on Demo Form Conversion Rates.</p></div>
        </footer>
      </div>
    </>
  );
}
