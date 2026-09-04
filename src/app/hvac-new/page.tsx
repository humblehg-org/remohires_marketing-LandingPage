"use client";

import { useEffect, useRef, useState } from "react";
import "./hvac-new.css";
import { FOOTER_LOGO_SRC } from "./footer-logo-data";

const BOOK_URL = "https://cal.com/team/remohires/15mins";

export default function HvacNewPage() {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const heroRef = useRef<HTMLElement | null>(null);
  const firstFieldRef = useRef<HTMLInputElement | null>(null);

  const [stickOn, setStickOn] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [leadDone, setLeadDone] = useState(false);
  const [doneMsg, setDoneMsg] = useState("");

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

    let stickIo: IntersectionObserver | null = null;
    const hero = heroRef.current;
    if (hero && "IntersectionObserver" in window) {
      stickIo = new IntersectionObserver(
        (entries) => {
          setStickOn(!entries[0].isIntersecting);
        },
        { threshold: 0 }
      );
      stickIo.observe(hero);
    }

    return () => {
      io?.disconnect();
      stickIo?.disconnect();
      document.documentElement.classList.remove("js");
    };
  }, []);

  useEffect(() => {
    if (!modalOpen) return;
    const id = setTimeout(() => firstFieldRef.current?.focus(), 60);
    function onKeydown(e: KeyboardEvent) {
      if (e.key === "Escape") setModalOpen(false);
    }
    document.addEventListener("keydown", onKeydown);
    return () => {
      clearTimeout(id);
      document.removeEventListener("keydown", onKeydown);
    };
  }, [modalOpen]);

  function openModal(e: React.MouseEvent) {
    e.preventDefault();
    setModalOpen(true);
  }

  function closeModal() {
    setModalOpen(false);
  }

  function handleLeadSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const nameInput = form.elements.namedItem("fullname") as HTMLInputElement;
    const phoneInput = form.elements.namedItem("phone") as HTMLInputElement;
    const callNowInput = form.elements.namedItem("callnow") as HTMLInputElement;

    const name = nameInput.value.trim();
    const phone = phoneInput.value.trim();

    if (!name) {
      nameInput.focus();
      return;
    }
    if (!phone || phone.replace(/[^0-9]/g, "").length < 7) {
      phoneInput.focus();
      return;
    }

    const callNow = callNowInput.checked;

    try {
      const fbq = (window as unknown as { fbq?: (...args: unknown[]) => void })
        .fbq;
      fbq?.("track", "Lead", {
        content_name: "HVAC Start Free Form",
        content_category: "hvac",
        call_now: callNow,
      });
    } catch {
      // ignore
    }

    const first = name.split(" ")[0];
    const msg = callNow
      ? `Thanks, ${first}. A RemoHires specialist will call you within 15 minutes during business hours.`
      : `Thanks, ${first}. A RemoHires specialist will call you shortly to start the search.`;

    setDoneMsg(msg);
    setLeadDone(true);
  }

  return (
    <>
      <link rel="preconnect" href="https://api.fontshare.com" />
      <link
        href="https://api.fontshare.com/v2/css?f[]=satoshi@900,700,500,400&display=swap"
        rel="stylesheet"
      />
      <div className="rh" ref={rootRef}>
        <section className="hero" ref={heroRef}>
          <div className="aura">
            <i className="b1"></i>
            <i className="b2"></i>
          </div>
          <div className="wrap">
            <nav className="nav">
              <img src={FOOTER_LOGO_SRC} alt="RemoHires" />
              <div className="r">
                <span className="navtag">For HVAC Owners</span>
                <a className="btn openform" href={BOOK_URL} onClick={openModal}>
                  Get Started Free
                </a>
              </div>
            </nav>
            <div className="hero-in">
              <div className="tag dark anim d0">
                <span className="d"></span>Outbound For HVAC Contractors
              </div>
              <h1>
                <span className="line anim d1">Get Someone To Call</span>
                <span className="line anim d2">
                  The <span className="c-turq shimmer">Leads You Own</span>
                </span>
              </h1>
              <p className="sub anim d3">
                We find and place a dedicated remote caller who works your open
                estimates and past installs, by phone and text, in your company
                name. Start free, you pay when you hire.
              </p>
              <div className="cta-row anim d4">
                <a className="btn lg openform" href={BOOK_URL} onClick={openModal}>
                  Get Started Free
                </a>
                <a className="scrolllink" href="#how">
                  See how it works
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.4}
                  >
                    <path d="M12 5v14M5 12l7 7 7-7" />
                  </svg>
                </a>
              </div>
              <p className="trust anim d5">
                <strong>Free to start.</strong> You pay when you hire, and you
                keep the list either way.
              </p>
            </div>
          </div>
        </section>

        <section id="how">
          <div className="wrap">
            <div className="shead">
              <div className="slabel rv">
                <span className="sn">01</span>Why It Works
              </div>
              <h2 className="rv">Leads Nobody Else Can Buy</h2>
              <p className="lead rv">
                The homeowners most likely to say yes are already in your
                system. We put a person on them, in your name, every day.
              </p>
            </div>
            <div className="cards3 stagger">
              <div className="fcard">
                <div className="ic">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path d="M12 2 3 7v6c0 5 4 8 9 9 5-1 9-4 9-9V7z" />
                  </svg>
                </div>
                <h3>Yours Alone</h3>
                <p>
                  Every lead you buy is sold to <strong>4 shops</strong> at
                  once. Your open estimates, aging installs, and past
                  customers stay <strong>yours alone</strong>.
                </p>
              </div>
              <div className="fcard">
                <div className="ic">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path d="M4 4h16v12H5.2L4 17.2z" />
                  </svg>
                </div>
                <h3>A Real Person, Same Day</h3>
                <p>
                  Your caller works a <strong>day 1, 3, 7</strong> cadence and
                  knows your pricing, so an interested homeowner hears back
                  that <strong>same day</strong>.
                </p>
              </div>
              <div className="fcard">
                <div className="ic">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </div>
                <h3>Free To Start</h3>
                <p>
                  No upfront cost to begin the search. You{" "}
                  <strong>pay when you hire</strong>, month to month after,
                  and a message from you stops it.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="band">
          <div className="wrap">
            <div className="split">
              <div>
                <div className="slabel rv">
                  <span className="sn">02</span>The $12,000 Job You Earned
                </div>
                <h2 className="rv" style={{ marginTop: 22 }}>
                  We Call The Systems You Installed
                </h2>
                <p className="body rv" style={{ marginTop: 20 }}>
                  A furnace or condenser lasts about <strong>15 years</strong>,
                  so everything you installed before then is near the end of
                  its life now. You know something no competitor knows:{" "}
                  <strong>the date you put it in</strong>. Your caller works
                  your install records by age and reaches those homeowners{" "}
                  <strong>before the failure</strong>, so a replacement quoted
                  to someone who already knows you closes on the phone.
                </p>
                <div className="bignum stagger">
                  <div>
                    <div className="n">
                      15<span className="u"> yrs</span>
                    </div>
                    <div className="l">
                      Average system life, so your old installs are coming due
                      now
                    </div>
                  </div>
                  <div>
                    <div className="n">$12k</div>
                    <div className="l">
                      Typical changeout you already earned the right to quote
                    </div>
                  </div>
                  <div>
                    <div className="n">1&middot;3&middot;7</div>
                    <div className="l">
                      The day cadence your caller works every lead on
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="dash float rv">
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
                  <p className="foot-note">
                    A sample of what your caller works through, in your
                    company name.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="wrap">
            <div className="shead">
              <div className="slabel rv">
                <span className="sn">03</span>How It Starts
              </div>
              <h2 className="rv">Free To Start, You Pay When You Hire</h2>
              <p className="lead rv">
                No setup fee and no upfront cost. You see the person, approve
                the plan, and the number is one simple figure built around the
                role you need.
              </p>
            </div>
            <div className="steps stagger">
              <div className="step">
                <div className="sn">1</div>
                <h3>Book Your Free Call</h3>
                <p>
                  Leave your number and a real person calls you back. You
                  count your open estimates together and map the outreach, at
                  no cost.
                </p>
              </div>
              <div className="step">
                <div className="sn">2</div>
                <h3>We Find Your Caller</h3>
                <p>
                  We recruit and vet a dedicated remote caller for your
                  business. You sign off on the person and the script before
                  anyone dials.
                </p>
              </div>
              <div className="step">
                <div className="sn">3</div>
                <h3>They Work Your List</h3>
                <p>
                  In your company name, on your software, day 1, 3, 7. You pay
                  once they are hired and working, one all-in number for the
                  role.
                </p>
              </div>
            </div>
            <div className="note-line rv">
              <span className="tk"></span>
              <div>
                One simple number for the role and experience you need,
                quoted on your call. No per-call fees, no line items, and no
                surprises on the invoice.
              </div>
            </div>
          </div>
        </section>

        <section className="band">
          <div className="wrap">
            <div className="shead">
              <div className="slabel rv">
                <span className="sn">04</span>Before You Start
              </div>
              <h2 className="rv">You Stay In Control</h2>
            </div>
            <div className="two stagger">
              <div className="panel">
                <h3>Your Name, Your Software, No Lock-In</h3>
                <p style={{ marginTop: 4 }}>
                  You sign off on the <strong>call script</strong> and text
                  wording before your caller contacts a single person. Every
                  call is logged in <strong>your own software</strong>, works
                  inside <strong>ServiceTitan, Housecall Pro, or Jobber</strong>,
                  and a spreadsheet and a phone works too.
                </p>
                <p style={{ marginTop: 14 }}>
                  Month to month once hired, and a single message from you
                  stops it. You <strong>keep the list either way</strong>.
                </p>
              </div>
              <div className="panel">
                <h3>Who This Fits Best</h3>
                <p style={{ marginTop: 4 }}>
                  This works best when you send <strong>written estimates</strong>{" "}
                  and can give access to where they live. If your open list is
                  a <strong>handful a month</strong>, we will tell you on the
                  call, early.
                </p>
                <p style={{ marginTop: 14 }}>
                  Nothing to migrate, and nothing for your techs to learn.
                  Your caller starts on the list you already have.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="cta">
          <div className="aura">
            <i className="b1"></i>
            <i className="b2"></i>
          </div>
          <div className="wrap">
            <div className="tagwrap">
              <div className="tag dark rv">
                <span className="d"></span>Get Started
              </div>
            </div>
            <h2 className="rv">Put Someone On The List You Already Own</h2>
            <p className="lead rv">
              Leave your number. We call you back, look at your open
              estimates together, and start the search. You keep the list
              either way.
            </p>
            <a className="btn lg openform rv" href={BOOK_URL} onClick={openModal}>
              Get Started Free
            </a>
            <p className="trust rv">
              Free to start. You pay when you hire. A real person calls,
              during business hours.
            </p>
          </div>
        </section>

        <footer>
          <div className="wrap fbar">
            <img src={FOOTER_LOGO_SRC} alt="RemoHires" />
            <div className="links">
              Terms<span>&middot;</span>Privacy<span>&middot;</span>PT Sentra
              Talenta Unggul<span>&middot;</span>(504) 265-1063
            </div>
          </div>
        </footer>

        <a
          className={`btn stick openform${stickOn ? " on" : ""}`}
          href={BOOK_URL}
          onClick={openModal}
        >
          Get Started Free
        </a>

        <div
          className={`modal${modalOpen ? " open" : ""}`}
          id="leadmodal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="lm-title"
        >
          <div className="scrim" onClick={closeModal}></div>
          <div className="box">
            <button className="x" type="button" onClick={closeModal} aria-label="Close">
              &times;
            </button>
            {!leadDone ? (
              <form id="leadform" onSubmit={handleLeadSubmit} noValidate>
                <div className="lf-eyebrow">Free To Start</div>
                <h4 id="lm-title">Get Someone On Your Lead List</h4>
                <p className="lf-sub">
                  Leave your number. A RemoHires specialist calls you back,
                  looks at your open estimates with you, and starts the
                  search. Free to start, you pay when you hire.
                </p>
                <div className="fields">
                  <input
                    ref={firstFieldRef}
                    type="text"
                    name="fullname"
                    placeholder="Your name"
                    autoComplete="name"
                    required
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Mobile number"
                    autoComplete="tel"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email (optional)"
                    autoComplete="email"
                  />
                </div>
                <label className="toggle">
                  <input type="checkbox" name="callnow" defaultChecked />
                  <span>
                    <span className="tl">Call me within 15 minutes</span>
                    <span className="ts">A real person, during business hours</span>
                  </span>
                </label>
                <button className="btn" type="submit">
                  Get Started Free
                </button>
                <p className="note">
                  Free to start. You pay when you hire, and you keep the list
                  either way.
                </p>
              </form>
            ) : (
              <div className="lf-done" style={{ display: "block" }}>
                <div className="ck">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3}>
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </div>
                <div className="dt">You Are On The List</div>
                <div className="lf-done-msg">{doneMsg}</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
