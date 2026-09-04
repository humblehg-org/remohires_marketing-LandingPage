"use client";

import { useEffect, useRef } from "react";
import "./hvac-new.css";
import { LOGO_SRC } from "./logo-data";
import { FOOTER_LOGO_SRC } from "./footer-logo-data";
import {
  IconCardFilled,
  IconCalendarFilled,
  IconCheckFilled,
} from "@/components/hvac/icons";

export default function HvacNewPage() {
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    document.documentElement.classList.add("js");

    const reduce =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const revs = root.querySelectorAll<HTMLElement>(".rv, .stagger");

    function fillCounts() {
      root!.querySelectorAll<HTMLElement>("[data-count]").forEach((el) => {
        el.textContent = "$" + (+el.dataset.count!).toLocaleString("en-US");
      });
    }

    function countUp(scope: HTMLElement) {
      scope.querySelectorAll<HTMLElement>("[data-count]").forEach((el) => {
        if (el.dataset.done) return;
        el.dataset.done = "1";
        const target = +el.dataset.count!;
        const dur = 900;
        let start: number | null = null;

        function step(t: number) {
          if (start === null) start = t;
          const p = Math.min((t - start) / dur, 1);
          const v = Math.floor((0.5 - Math.cos(p * Math.PI) / 2) * target);
          el.textContent = "$" + v.toLocaleString("en-US");
          if (p < 1) requestAnimationFrame(step);
          else el.textContent = "$" + target.toLocaleString("en-US");
        }
        requestAnimationFrame(step);
      });
    }

    let io: IntersectionObserver | null = null;

    if (!("IntersectionObserver" in window) || reduce) {
      revs.forEach((e) => e.classList.add("in"));
      fillCounts();
    } else {
      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const target = entry.target as HTMLElement;
              target.classList.add("in");
              if (target.querySelector("[data-count]")) {
                countUp(target);
              }
              io!.unobserve(target);
            }
          });
        },
        { threshold: 0.16 }
      );
      revs.forEach((e) => io!.observe(e));
    }

    function handleBookClick() {
      try {
        const fbq = (window as unknown as { fbq?: (...args: unknown[]) => void })
          .fbq;
        fbq?.("track", "Lead", {
          content_name: "HVAC Book 10 Minutes",
          content_category: "hvac",
        });
      } catch {
        // ignore
      }
    }

    const bookLinks = root.querySelectorAll<HTMLAnchorElement>(".bookcta");
    bookLinks.forEach((a) => a.addEventListener("click", handleBookClick));

    return () => {
      io?.disconnect();
      bookLinks.forEach((a) => a.removeEventListener("click", handleBookClick));
      document.documentElement.classList.remove("js");
    };
  }, []);

  return (
    <>
      <link rel="preconnect" href="https://api.fontshare.com" />
      <link
        href="https://api.fontshare.com/v2/css?f[]=satoshi@900,700,500,400&display=swap"
        rel="stylesheet"
      />
      <div className="rh" ref={rootRef}>
        <header>
          <div className="wrap bar">
            <img src={LOGO_SRC} alt="RemoHires" />
            <span className="tag">HVAC Owners</span>
            <a className="btn sm bookcta" href="https://cal.com/team/remohires/15mins">
              Book 10 Minutes
            </a>
          </div>
        </header>

        {/* HERO */}
        <section className="hero">
          <div className="wrap grid2">
            <div>
              <div className="eyebrow">For HVAC Owners</div>
              <h1>
                <span className="line">
                  Book <span className="c-turq">40%</span> More Jobs<sup>*</sup>
                </span>
                <span className="line">
                  <span className="c-blue">Without</span> Buying Another Lead
                </span>
              </h1>
              <p className="lead subhead">
                <strong className="c-turq">$49</strong> puts a full-time specialist on your
                business for <strong>2 weeks</strong>. They work every estimate and install
                already in your system, by call and text, in your company name.
              </p>
              <a className="btn bookcta" href="https://cal.com/team/remohires/15mins">
                Book 10 Minutes
              </a>
              <p className="trust">
                <strong>$49</strong> for the 2 weeks. Month to month after, and we refund the{" "}
                <strong>$49</strong> if it is not worth continuing.
              </p>
            </div>
            <div>
              <div className="card float rv">
                <div className="chead">
                  <span className="dot"></span>
                  <h4>Open Estimates, Last 90 Days</h4>
                </div>
                <div className="sub">Pulled from your system, sorted by value</div>
                <div className="stagger">
                  <div className="row">
                    <div>
                      <div className="addr">4620 Live Oak Dr, Condenser Replacement</div>
                      <div className="meta">System installed 16 yrs ago</div>
                    </div>
                    <div>
                      <div className="val" data-count="12000">
                        $12,000
                      </div>
                      <div className="day">Day 3</div>
                    </div>
                  </div>
                  <div className="row">
                    <div>
                      <div className="addr">212 Magnolia Ct, Full System Install</div>
                      <div className="meta">Estimate sent 74 days ago</div>
                    </div>
                    <div>
                      <div className="val" data-count="8400">
                        $8,400
                      </div>
                      <div className="day">Day 7</div>
                    </div>
                  </div>
                  <div className="row">
                    <div>
                      <div className="addr">88 Riverside Ave, Repair And Recharge</div>
                      <div className="meta">Estimate sent 21 days ago</div>
                    </div>
                    <div>
                      <div className="val" data-count="3200">
                        $3,200
                      </div>
                      <div className="day">Day 1</div>
                    </div>
                  </div>
                </div>
              </div>
              <p className="foot-note">
                *Modelled estimate based on working your existing pipeline, not a guarantee.
              </p>
            </div>
          </div>
        </section>

        {/* WHY */}
        <section className="band">
          <div className="wrap">
            <div className="eyebrow rv">Why It Works</div>
            <h2 className="rv">Leads Nobody Else Can Buy</h2>
            <div className="cols3 stagger">
              <div className="feat">
                <div className="ic">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path d="M12 2 3 7v6c0 5 4 8 9 9 5-1 9-4 9-9V7z" />
                  </svg>
                </div>
                <h3>Yours Alone</h3>
                <p>
                  Every bought lead is sold to <strong>4 shops</strong> at once. Your open
                  estimates, aging installs, and past customers stay <strong>yours alone</strong>.
                </p>
              </div>
              <div className="feat">
                <div className="ic">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path d="M4 4h16v12H5.2L4 17.2z" />
                  </svg>
                </div>
                <h3>A Real Person, Same Day</h3>
                <p>
                  Your specialist calls and texts on a <strong>day 1, 3, 7</strong> cadence and
                  knows your pricing, so an interested homeowner hears back the{" "}
                  <strong>same day</strong>.
                </p>
              </div>
              <div className="feat">
                <div className="ic">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                </div>
                <h3>$49 To Try, Refundable</h3>
                <p>
                  <strong>2 weeks</strong> is a single charge, then <strong>$450</strong> a month,
                  month to month. We refund the <strong>$49</strong> in full if you stop.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SPINE */}
        <section>
          <div className="wrap">
            <div className="eyebrow rv">The $12,000 Job You Already Earned</div>
            <h2 className="rv">We Call The Systems You Installed</h2>
            <p className="body rv" style={{ maxWidth: 780, marginTop: 16, marginBottom: 12 }}>
              A furnace or condenser lasts about <strong>15 years</strong>, so everything you
              installed before then is near the end of its life now. You know something no
              competitor knows: <strong>the date you put it in</strong>.
            </p>
            <p className="body rv" style={{ maxWidth: 780 }}>
              Your specialist works your install records by age and reaches those homeowners{" "}
              <strong>before the failure</strong>, so a replacement quoted to someone who already
              knows you closes on the phone.
            </p>
            <div className="stats stagger">
              <div className="stat">
                <div className="n">
                  15<span className="u"> yrs</span>
                </div>
                <div className="l">Average system life, so your old installs are coming due now</div>
              </div>
              <div className="stat">
                <div className="n">$12k</div>
                <div className="l">Typical changeout you already earned the right to quote</div>
              </div>
              <div className="stat">
                <div className="n">1&middot;3&middot;7</div>
                <div className="l">The day cadence your specialist works every lead on</div>
              </div>
            </div>
          </div>
        </section>

        {/* PRICING + CONTROL */}
        <section className="band">
          <div className="wrap">
            <div className="eyebrow rv">Simple, Honest Pricing</div>
            <h2 className="rv">$49 For 2 Weeks, Then From $450 A Month</h2>
            <div className="two stagger">
              <div className="panel accent">
                <h3>What You Pay</h3>
                <div className="big">
                  <span className="c-blue">$49</span> Now, Then <span className="c-turq">$450</span>{" "}
                  A Month
                </div>
                <ul className="ticks">
                  <li>
                    <IconCardFilled className="tick-ic" />
                    <span>Just <strong>$49</strong> once to start, billed a single time.</span>
                  </li>
                  <li>
                    <IconCalendarFilled className="tick-ic" />
                    <span><strong>Month to month</strong> after, no annual contract.</span>
                  </li>
                  <li>
                    <IconCheckFilled className="tick-ic" />
                    <span>We refund the <strong>$49</strong> if it is not worth continuing.</span>
                  </li>
                </ul>
              </div>
              <div className="panel">
                <h3>You Stay In Control</h3>
                <p style={{ marginTop: 4 }}>
                  You sign off on the <strong>call script</strong> and text wording before your
                  specialist contacts a single person. Every call and message is logged in{" "}
                  <strong>your own software</strong>, and a single message from you stops it.
                </p>
                <p style={{ marginTop: 14 }}>
                  Works inside <strong>ServiceTitan, Housecall Pro, or Jobber</strong>, and a
                  spreadsheet and a phone works too. Nothing to migrate, nothing for your techs
                  to learn.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FIT */}
        <section>
          <div className="wrap">
            <div className="eyebrow rv">Before You Start</div>
            <h2 className="rv">Worth Knowing</h2>
            <div className="two stagger">
              <div className="panel">
                <h3>What Happens After 2 Weeks</h3>
                <p style={{ marginTop: 4 }}>
                  Nothing, unless you want it. On <strong>day 14</strong> you have a worked list
                  and outcomes logged against every job. Keep going at <strong>$450</strong> a
                  month, or stop and <strong>keep the list</strong>.
                </p>
              </div>
              <div className="panel">
                <h3>Who This Fits Best</h3>
                <p style={{ marginTop: 4 }}>
                  This works best when you send <strong>written estimates</strong> and can give
                  access to where they live. If your open list is a <strong>handful a month</strong>,
                  we will tell you on the call, early.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="cta band">
          <div className="wrap">
            <div className="eyebrow rv" style={{ textAlign: "center" }}>
              Get Started
            </div>
            <h2 className="rv">
              2 Weeks Of A Full-Time <br className="mobile-only" /> Specialist For $49
            </h2>
            <p className="lead rv">
              <strong>10 minutes</strong>. We count your open estimates together, and you keep
              the list either way.
            </p>
            <a className="btn bookcta rv" href="https://cal.com/team/remohires/15mins">
              Book 10 Minutes
            </a>
          </div>
        </section>

        <footer>
          <div className="wrap fbar">
            <img src={FOOTER_LOGO_SRC} alt="RemoHires" />
            <div className="links">
              Terms<span>&middot;</span>Privacy<span>&middot;</span>PT Sentra Talenta Unggul
              <span>&middot;</span>(504) 265-1063
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
