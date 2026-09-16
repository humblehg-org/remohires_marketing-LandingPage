import type { Metadata } from "next";
import "./appointment-setter.css";
import { BookCta } from "@/components/appointment-setter/book-cta";
import { LeadModal } from "@/components/appointment-setter/lead-modal";
import { MobileFab } from "@/components/appointment-setter/mobile-fab";
import { ScrollReveal } from "@/components/appointment-setter/scroll-reveal";

export const metadata: Metadata = {
  title: "RemoHires | A Full-Time Remote Appointment Setter For Your Business",
  description:
    "RemoHires places a full-time remote Appointment Setter who calls and texts your leads in your company name, on your hours. Free to start, you pay when you hire.",
};

export default function AppointmentSetterPage() {
  return (
    <>
      <link rel="preconnect" href="https://api.fontshare.com" />
      <link href="https://api.fontshare.com/v2/css?f[]=satoshi@900,700,500,400&display=swap" rel="stylesheet" />
      <div className="rh">
        <ScrollReveal />
        <MobileFab />
        <LeadModal />

        <main>
          <section className="hero">
            <div className="aura"><i className="b1"></i><i className="b2"></i><i className="b3"></i></div>
            <div className="wrap">
              <nav className="nav">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/logo-remohires-color.svg" alt="RemoHires" />
                <div className="r">
                  <span className="navtag"><span className="nd"></span>Appointment Setters, Full Time, Remote</span>
                  <BookCta ctaName="nav" className="btn">Book A Free Call</BookCta>
                </div>
              </nav>
              <div className="hero-in">
                <h1>
                  <span className="line anim d1">Someone Calls Every Lead Back</span>{" "}
                  <span className="line anim d2">Before It Goes <span className="c-turq shimmer">Cold</span></span>
                </h1>
                <p className="sub anim">RemoHires places a full-time remote <strong>Appointment Setter</strong> who calls and texts your leads in your company name, on your hours. Respond <strong>right away</strong> and you turn nearly twice as many into real conversations.<a href="#src-1" className="cite" aria-label="See source">1</a></p>
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
                  <span className="hg-chip"><span className="hg-dot"></span>Lead comes in</span>
                  <span className="hg-chip is-on"><span className="hg-dot on"></span>Your Appointment Setter calls back</span>
                  <span className="hg-chip"><span className="hg-check"></span>Real conversation, booked on your calendar</span>
                </div>
              </div>
            </div>
          </section>

          <section id="how">
            <div className="wrap">
              <div className="shead">
                <div className="slabel rv rv-z"><span className="sn">01</span>The Pain</div>
                <h2 className="rv rv-l">Whoever Calls Back First Usually Wins The Job</h2>
                <p className="lead rv rv-d d-a">Most small businesses do not have anyone whose only job is calling leads back today. The lead is still worth the same amount tomorrow, but the odds of reaching them are not.</p>
              </div>
              <div className="cards3 stagger sx">
                <div className="fcard">
                  <div className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg></div>
                  <h3>After Five, Leads Wait</h3>
                  <p>Calls that arrive after five o&rsquo;clock, or between jobs, usually sit until the next morning.</p>
                </div>
                <div className="fcard">
                  <div className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.81.32 1.6.6 2.36a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.72-1.72a2 2 0 0 1 2.11-.45c.76.28 1.55.48 2.36.6a2 2 0 0 1 1.72 2z"/></svg></div>
                  <h3>Follow-Up Falls On You</h3>
                  <p>The owner or a technician ends up making the callback between jobs, if it happens at all.</p>
                </div>
                <div className="fcard">
                  <div className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg></div>
                  <h3>The Next Call Wins The Job</h3>
                  <p>A lead that does not hear back today often calls the next name on their own list instead.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="band">
            <div className="wrap">
              <div className="split">
                <div>
                  <div className="slabel rv rv-l"><span className="sn">02</span>The Hire</div>
                  <h2 className="rv rv-z" style={{ marginTop: 22 }}>One Person, Working Your Leads Every Day</h2>
                  <p className="body rv rv-d d-a" style={{ marginTop: 20 }}>A RemoHires Appointment Setter calls and texts your open leads on a set cadence, in your company name, on your own CRM. You approve the person, the script, and the hours before the first call goes out.</p>
                  <div className="bignum stagger">
                    <div><div className="n">$0<span className="u"> to start</span></div><div className="l">No setup fee and no upfront cost. You pay once you hire the person you approve.</div></div>
                    <div><div className="n">40<span className="u"> hrs/wk</span></div><div className="l">A full-time setter on your leads every business day, on your hours</div></div>
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
                  <p>Tell RemoHires about your leads and your hours. A real person calls you back to map out the role.</p>
                </div>
                <div className="step">
                  <div className="sn">2</div>
                  <h3>Review A Screened Shortlist</h3>
                  <p>RemoHires sources and screens candidates for phone skill, English fluency, and outbound experience. You meet the person on video first.</p>
                </div>
                <div className="step">
                  <div className="sn">3</div>
                  <h3>Hire, Full Time, Through RemoHires</h3>
                  <p>Your Appointment Setter works full time under RemoHires&rsquo; fully managed employment, so payroll, compliance, and benefits are handled for you.</p>
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
                  <p style={{ marginTop: 4 }}>You sign off on the <strong>call script</strong> and the hours before your setter contacts a single lead. Every call and text runs inside <strong>your own CRM or phone system</strong>, and a spreadsheet and a phone work too.</p>
                  <p style={{ marginTop: 14 }}>Your setter works only for you, employed full time with benefits handled, so they stay and learn your pipeline instead of juggling other clients.</p>
                  <p style={{ marginTop: 14 }}>Month to month once hired, and one message from you stops it.</p>
                </div>
                <div className="panel">
                  <h3>Who This Fits Best</h3>
                  <p style={{ marginTop: 4 }}>This works best when leads come in faster than you can call them back, or after hours when nobody is watching the phone. If your lead volume is only a handful a month, RemoHires will say so on the call, early.</p>
                  <p style={{ marginTop: 14 }}>Nothing to migrate, and nothing for your team to learn. Your setter starts on the leads you already have.</p>
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
                    <li><strong>Full time, not a freelancer.</strong> Your Appointment Setter is employed full time under RemoHires&rsquo; fully managed employment.</li>
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
                      <img className="tlogo" src="/lhp-logo.png" alt="Louisiana Home Performance" />
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
                  <summary>Will my Appointment Setter guarantee a set number of booked calls?</summary>
                  <p>RemoHires screens every candidate for phone skill, English fluency, and outbound experience before you meet them, but nobody can promise a fixed number of booked appointments. What changes is how fast every lead gets a callback.</p>
                </details>
                <details>
                  <summary>Is this a freelancer or a contractor?</summary>
                  <p>Full time. RemoHires places a full-time employee under fully managed employment, not a freelancer or a gig worker.</p>
                </details>
                <details>
                  <summary>Can my Appointment Setter use my own CRM and phone system?</summary>
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
              <h2 className="rv rv-r">Put Someone On Your Leads Today</h2>
              <p className="lead rv rv-d d-a">Leave your number. RemoHires calls you back, maps out the role together, and starts the search. Free to start, and you decide from there.</p>
              <BookCta ctaName="final" className="btn lg rv rv-l d-b">Book A Free Call</BookCta>
              <p className="trust rv rv-r">Free to start. You pay when you hire. A real person calls, during business hours.</p>
            </div>
          </section>
        </main>

        <footer>
          <div className="wrap fbar">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo-remohires-color.svg" alt="RemoHires" />
            <div className="links"><a href="https://remohires.com/terms">Terms</a><span>&middot;</span><a href="https://remohires.com/privacy">Privacy</a><span>&middot;</span>PT Sentra Talenta Unggul<span>&middot;</span>(504) 265-1063</div>
          </div>
          <div className="wrap"><p className="fnote" id="src-1">1. Source: Chili Piper, 2025 Benchmark Report on Demo Form Conversion Rates.</p></div>
        </footer>
      </div>
    </>
  );
}
