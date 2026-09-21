import type { Metadata } from "next";
import "./custom-recruitment.css";
import { BookCta } from "@/components/custom-recruitment/book-cta";
import { LeadModal } from "@/components/custom-recruitment/lead-modal";
import { MobileFab } from "@/components/custom-recruitment/mobile-fab";
import { ScrollReveal } from "@/components/custom-recruitment/scroll-reveal";
import { FaqAccordion } from "@/components/custom-recruitment/faq-accordion";
import { FontLoader } from "@/components/custom-recruitment/font-loader";
import { LazyImageLoader } from "@/components/custom-recruitment/lazy-image-loader";

export const metadata: Metadata = {
  title: "Custom Remote Recruitment | RemoHires",
  description:
    "RemoHires finds, vets, and delivers screened remote candidates matched to your hours. No fee to start, free replacement if the fit is wrong.",
};

export default function CustomRecruitmentPage() {
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
                  <span className="navtag"><span className="nd"></span>Custom Remote Recruitment</span>
                  <BookCta ctaName="nav" className="btn">Book A Free Call</BookCta>
                </div>
              </nav>
              <div className="hero-in">
                <h1>
                  <span className="line anim d1">Stop Paying Recruiter Fees.</span>{" "}
                  <span className="line anim d2">Get Your Next Hire For <span className="c-turq shimmer">FREE.</span></span>
                </h1>
                <p className="sub anim">Tell us the role and the hours you need covered. RemoHires finds, vets, and presents <strong>screened remote candidates</strong> matched to your business. No recruitment fee to start, and if the fit is wrong, we <strong>re-run the search free.</strong></p>
                <div className="cta-row anim d4">
                  <div id="hero-cta">
                    <BookCta ctaName="hero" className="btn lg">Claim My Free Shortlist</BookCta>
                  </div>
                </div>
                <p className="trust anim d5"><strong>No fee to start.</strong> You approve the candidate before you hire.</p>
                <div className="hero-glass anim from-l" aria-hidden="true">
                  <span className="hg-chip"><span className="hg-dot"></span>You brief the role</span>
                  <span className="hg-chip is-on"><span className="hg-dot on"></span>We search &amp; vet</span>
                  <span className="hg-chip"><span className="hg-check"></span>You review the shortlist</span>
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
                <div className="slabel rv rv-z"><span className="sn">01</span>What You Get</div>
                <h2 className="rv rv-l">Hand The Search To Someone Who Does This Full Time</h2>
                <p className="lead rv rv-d d-a">You give us the seat. We handle the sourcing, screening, and coordination so you spend your time choosing from people who already match the role.</p>
              </div>
              <div className="cards3 stagger sx">
                <div className="fcard">
                  <div className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 3" /></svg></div>
                  <h3>Hours Back</h3>
                  <p>No more digging through job boards, screening piles of applications, or chasing interview availability.</p>
                </div>
                <div className="fcard">
                  <div className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M5 4h14v16H5z" /><path d="M8 8h8M8 12h8M8 16h5" /></svg></div>
                  <h3>A Short List</h3>
                  <p>You review a focused group of screened candidates instead of starting with hundreds of profiles.</p>
                </div>
                <div className="fcard">
                  <div className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7H14a3.5 3.5 0 0 1 0 7H6" /></svg></div>
                  <h3>Zero To Start</h3>
                  <p>No recruitment fee to begin the search. You move forward only when you approve the hire.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="band">
            <div className="wrap">
              <div className="split">
                <div>
                  <div className="slabel rv rv-l"><span className="sn">02</span>Built Around Your Role</div>
                  <h2 className="rv rv-z" style={{ marginTop: 22 }}>Built Around Your Role, Not A Database Query</h2>
                  <p className="body rv rv-d d-a" style={{ marginTop: 20 }}>We screen for the work you actually need done, the hours you need covered, and the communication standard your team expects. The same recruiter stays with the search from brief to shortlist.</p>
                  <div className="bignum stagger">
                    <div><div className="n">$0<span className="u"> to start</span></div><div className="l">No placement fee before the search begins.</div></div>
                    <div><div className="n">1<span className="u"> recruiter</span></div><div className="l">One person owns your search from brief through shortlist.</div></div>
                    <div><div className="n">Free<span className="u"> re-run</span></div><div className="l">If the fit is wrong, we run the search again at no extra recruitment fee.</div></div>
                  </div>
                </div>
                <div className="rv rv-r d-b">
                  <div className="dash float">
                    <div className="chead"><span className="dot"></span><h4>Candidate Shortlist</h4></div>
                    <div className="sub">Illustrative example of what you review before choosing who to interview</div>
                    <div className="stagger">
                      <div className="row"><div><div className="addr">Grace T.</div><div className="meta">Relevant experience · hours verified</div></div><div><div className="val">Screened</div><div className="day">Available</div></div></div>
                      <div className="row"><div><div className="addr">Daniel R.</div><div className="meta">Strong communication · role matched</div></div><div><div className="val">Screened</div><div className="day">Available</div></div></div>
                      <div className="row"><div><div className="addr">Maya S.</div><div className="meta">Skills checked · schedule matched</div></div><div><div className="val">Screened</div><div className="day">Available</div></div></div>
                    </div>
                    <p className="foot-note">Illustrative example. Your shortlist is built around your actual role and requirements.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="wrap">
              <div className="shead">
                <div className="slabel rv rv-r"><span className="sn">03</span>How It Works</div>
                <h2 className="rv rv-l">Five Steps. Only One Is Yours.</h2>
                <p className="lead rv rv-d d-a">You brief the role and choose who you want to meet. We do the searching, screening, and shortlist work in between.</p>
              </div>
              <div className="steps stagger sx">
                <div className="step"><div className="sn">1</div><h3>Brief The Role</h3><p>Tell us the must-haves, hours, tools, and experience you need.</p></div>
                <div className="step"><div className="sn">2</div><h3>We Search</h3><p>Our recruiter sources candidates specifically for your role and schedule.</p></div>
                <div className="step"><div className="sn">3</div><h3>Shortlist Lands</h3><p>You receive screened profiles that already match the brief.</p></div>
                <div className="step"><div className="sn">4</div><h3>You Interview</h3><p>Meet the people you like and choose the person who fits your team.</p></div>
                <div className="step"><div className="sn">5</div><h3>Day One Sorted</h3><p>Once you choose, RemoHires helps get the hire ready to start.</p></div>
              </div>
            </div>
          </section>

          <section className="band">
            <div className="wrap">
              <div className="shead"><div className="slabel rv rv-l"><span className="sn">04</span>Why This Is Different</div><h2 className="rv rv-r">How The Usual Options Compare</h2></div>
              <div className="two stagger">
                <div className="panel">
                  <h3>Traditional Recruiting</h3>
                  <ul className="ticks">
                    <li>Placement fees before the hire has proven itself.</li>
                    <li>Broad database searches can miss the actual working-hours fit.</li>
                    <li>You may still spend hours filtering and coordinating.</li>
                  </ul>
                </div>
                <div className="panel accent">
                  <h3>RemoHires Custom Recruitment</h3>
                  <ul className="ticks">
                    <li><strong>No recruitment fee to start.</strong></li>
                    <li><strong>Screened around your actual role and hours.</strong></li>
                    <li><strong>One recruiter stays with the search.</strong></li>
                    <li><strong>Free re-run if the fit is wrong.</strong></li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="wrap">
              <div className="shead">
                <div className="slabel rv rv-r"><span className="sn">05</span>Roles</div>
                <h2 className="rv rv-l">Roles We Search For Most</h2>
                <p className="lead rv rv-d d-a">From operational support to specialist remote roles, the search is built around the seat you actually need filled.</p>
              </div>
              <div className="cards3 stagger sx">
                <div className="fcard"><h3>Administrative &amp; Executive Support</h3><p>Administrative assistants, executive assistants, coordinators, and operations support.</p></div>
                <div className="fcard"><h3>Customer &amp; Sales Support</h3><p>Customer service representatives, appointment setters, sales support, and follow-up roles.</p></div>
                <div className="fcard"><h3>Specialist Remote Roles</h3><p>Marketing, bookkeeping, research, technical support, and other remote positions based on your brief.</p></div>
              </div>
            </div>
          </section>

          <section className="band">
            <div className="wrap">
              <div className="shead"><div className="slabel rv rv-l"><span className="sn">06</span>Questions</div><h2 className="rv rv-r">What Owners Usually Ask</h2></div>
              <div className="faq rv rv-d d-a">
                <details>
                  <summary>Do I pay before you start searching?</summary>
                  <p>No. The search starts without an upfront recruitment fee. You decide whether to move forward after reviewing the candidates.</p>
                </details>
                <details>
                  <summary>How do you screen candidates?</summary>
                  <p>We screen around your role requirements, relevant experience, communication, and the working hours you need covered before a profile reaches you.</p>
                </details>
                <details>
                  <summary>What if the hire is not the right fit?</summary>
                  <p>RemoHires can re-run the search without another recruitment fee, subject to the terms agreed for your role.</p>
                </details>
                <details>
                  <summary>Can you recruit for roles outside the common examples?</summary>
                  <p>Yes. The search is built around your brief, so the first call is used to confirm the role, requirements, and whether RemoHires is a good fit for the search.</p>
                </details>
              </div>
            </div>
          </section>

          <section className="cta" id="final-cta">
            <div className="aura"><i className="b1"></i><i className="b2"></i></div>
            <div className="wrap">
              <div className="tagwrap"><div className="tag dark rv rv-z"><span className="d"></span>Get Started</div></div>
              <h2 className="rv rv-r">Name The Seat. We Will Start The Search.</h2>
              <p className="lead rv rv-d d-a">Tell us the must-haves and hours you need covered. A RemoHires recruiter will contact you and map out the search with you.</p>
              <BookCta ctaName="final" className="btn lg rv rv-l d-b">Book A Free Call</BookCta>
              <p className="trust rv rv-r">No recruitment fee to start. You decide after you see the shortlist.</p>
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
            <div className="links"><a href="/termsofservice">Terms</a><span>&middot;</span><a href="/privacypolicy">Privacy</a><span>&middot;</span>(504) 265-1063</div>
          </div>
          <div className="wrap"><p className="fnote">Custom remote recruitment run around your role and working hours.</p></div>
        </footer>
      </div>
    </>
  );
}
