"use client";

import {
  useEffect,
  useRef,
  useState,
  type FormEvent,
  type KeyboardEvent as ReactKeyboardEvent,
  type MouseEvent,
  type SyntheticEvent,
} from "react";
import Link from "next/link";
import posthog from "posthog-js";
import { sendGTMEvent } from "@next/third-parties/google";
import { trackLeadSubmit } from "@/lib/gtm";
import { CountryPhoneField } from "./country-phone-field";
import "./cleaning.css";

/* Web3Forms. While testing, use the TEST key so the shared inbox stays clean.
   Swap to the production key before deploy. */
const WEB3FORMS_ACCESS_KEY = "8326652c-ecb6-4130-8f8b-5a477deaae3d";
const PAGE_PATH = "/cleaning";

const ROLES = [
  { name: "Appointment Setter", desc: "Answers inbound calls and books new cleaning jobs while your crews are out on site, so inquiries turn into booked cleans.", w: 264 },
  { name: "Customer Service Rep", desc: "Handles calls, chats, and emails, manages reschedules and questions, and keeps your customers happy and coming back.", w: 264 },
  { name: "Scheduler & Dispatcher", desc: "Builds and protects the daily route, fills cancellations, and keeps every crew exactly where it needs to be.", w: 281 },
  { name: "Admin Assistant", desc: "Manages quotes, invoices, data entry, and the back-office paperwork that eats your evenings.", w: 248 },
  { name: "Lead Follow-Up", desc: "Nurtures past quotes and leads, follows up until they book, and wins back one-off customers.", w: 264 },
];

function money(n: number) {
  return "$" + Math.round(n).toLocaleString("en-US");
}

export default function CleaningClient() {
  const [modalOpen, setModalOpen] = useState(false);
  const [showThanks, setShowThanks] = useState(false);
  const [formError, setFormError] = useState(false);
  const [sending, setSending] = useState(false);
  const [roleInterest, setRoleInterest] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [fadeTick, setFadeTick] = useState(0);
  // idle: poster + big play button (reduced motion, or autoplay blocked)
  // pending: muted autoplay requested, poster still showing
  // autoplay: muted loop running, "Tap for sound" pill showing
  // playing: started with sound by the visitor, native controls
  const [videoMode, setVideoMode] = useState<"idle" | "pending" | "autoplay" | "playing">("idle");

  const lastFocusRef = useRef<HTMLElement | null>(null);
  const ctaSourceRef = useRef("cta");
  const fnRef = useRef<HTMLInputElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const selDetailRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const vslRef = useRef<HTMLDivElement>(null);
  const videoModeRef = useRef(videoMode);
  const tlRef = useRef<HTMLDivElement>(null);
  const tlProgRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLElement>(null);

  const role = ROLES[roleIndex];
  const mo = role.w * 4.333;

  function openModal(e: MouseEvent<HTMLButtonElement>, ctaName: string) {
    lastFocusRef.current = document.activeElement as HTMLElement | null;
    const fromRole = e.currentTarget.hasAttribute("data-role-cta");
    setRoleInterest(fromRole ? role.name : "");
    ctaSourceRef.current = ctaName;
    sendGTMEvent({ event: "booking_cta_click", cta_name: ctaName, page_path: PAGE_PATH });
    setModalOpen(true);
    setShowThanks(false);
    setFormError(false);
    setTimeout(() => fnRef.current?.focus(), 50);
  }

  function closeModal() {
    setModalOpen(false);
    lastFocusRef.current?.focus();
  }

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      // defaultPrevented: an inner control (the country picker) already used
      // this Escape to close itself, so leave the modal open.
      if (e.key === "Escape" && !e.defaultPrevented) {
        setModalOpen(false);
        lastFocusRef.current?.focus();
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    setFormError(false);
    setSending(true);
    const data = new FormData(form);
    data.append("access_key", WEB3FORMS_ACCESS_KEY);
    data.append("cta_source", ctaSourceRef.current);
    fetch("https://api.web3forms.com/submit", { method: "POST", body: data })
      .then((r) => r.json())
      .then((res) => {
        if (res.success) {
          trackLeadSubmit(ctaSourceRef.current);
          try {
            posthog.capture("cleaning_lead_submitted", { cta_source: ctaSourceRef.current });
          } catch {
            // Analytics must never break the signup flow.
          }
          form.reset();
          setShowThanks(true);
        } else {
          setFormError(true);
        }
      })
      .catch(() => setFormError(true))
      .then(() => setSending(false));
  }

  function selectRole(i: number) {
    setRoleIndex(i);
    setFadeTick((t) => t + 1);
  }

  // Restart the .sd-fade animation on every pick, same as the source's
  // remove-class / reflow / add-class sequence.
  useEffect(() => {
    if (fadeTick === 0) return;
    const el = selDetailRef.current;
    if (!el) return;
    el.classList.remove("sd-fade");
    void el.offsetWidth;
    el.classList.add("sd-fade");
  }, [fadeTick]);

  function changeVideoMode(mode: typeof videoMode) {
    videoModeRef.current = mode;
    setVideoMode(mode);
  }

  // Muted autoplay while the video is in view (browsers only allow autoplay
  // muted), paused while it is scrolled away. Skipped under reduced motion,
  // where the click-to-play poster stays. If the browser still blocks it
  // (e.g. iOS Low Power Mode), it falls back to click-to-play.
  useEffect(() => {
    const box = vslRef.current;
    const video = videoRef.current;
    if (!box || !video) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (typeof IntersectionObserver === "undefined") return;
    const setMode = (mode: typeof videoModeRef.current) => {
      videoModeRef.current = mode;
      setVideoMode(mode);
    };
    const io = new IntersectionObserver(
      ([entry]) => {
        const mode = videoModeRef.current;
        if (mode === "playing") {
          io.disconnect();
          return;
        }
        if (entry.isIntersecting) {
          if (mode === "idle") setMode("pending");
          video.muted = true;
          video.loop = true;
          video
            .play()
            .then(() => {
              if (videoModeRef.current === "pending") setMode("autoplay");
            })
            .catch(() => {
              if (videoModeRef.current === "pending") setMode("idle");
            });
        } else {
          video.pause();
        }
      },
      // threshold 0: start as soon as any part is on screen (on page load the
      // hero video is often less than half visible on laptops), and pause
      // only once it is completely out of view.
      { threshold: 0 },
    );
    io.observe(box);
    return () => io.disconnect();
  }, []);

  // Both the big play button (idle) and the "Tap for sound" pill (autoplay)
  // land here: play from 0:00 with sound, once, with native controls. The
  // click counts as the user gesture an unmuted play() needs.
  function playWithSound() {
    const video = videoRef.current;
    if (!video || videoModeRef.current === "playing") return;
    video.muted = false;
    video.loop = false;
    video.currentTime = 0;
    changeVideoMode("playing");
    video.play().catch(() => {
      // Playback was blocked; the native controls are showing, so the
      // visitor can still start it themselves.
    });
  }

  function loadVideo() {
    if (videoModeRef.current !== "idle") return;
    playWithSound();
  }

  // The play button / sound pill disappear once playback starts, so hand
  // keyboard focus to the video (focusable now that it has controls).
  useEffect(() => {
    if (videoMode === "playing") videoRef.current?.focus();
  }, [videoMode]);

  function onVslKeyDown(e: ReactKeyboardEvent<HTMLDivElement>) {
    // Only the idle poster acts as a button; otherwise keys belong to the
    // sound pill or the native video controls.
    if (videoModeRef.current !== "idle") return;
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      loadVideo();
    }
  }

  function onAccToggle(e: SyntheticEvent<HTMLDetailsElement>) {
    const d = e.currentTarget;
    if (!d.open) return;
    faqRef.current?.querySelectorAll<HTMLDetailsElement>(".acc").forEach((o) => {
      if (o !== d) o.open = false;
    });
  }

  // The source's html{scroll-behavior:smooth}, applied only while this page
  // is mounted so other routes keep their own scrolling.
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const html = document.documentElement;
    const previous = html.style.scrollBehavior;
    html.style.scrollBehavior = "smooth";
    return () => {
      html.style.scrollBehavior = previous;
    };
  }, []);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en, i) => {
          if (en.isIntersecting) {
            setTimeout(() => en.target.classList.add("in"), i * 70);
            io.unobserve(en.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    document.querySelectorAll(".cleaning .reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const tl = tlRef.current;
    const tlProg = tlProgRef.current;
    const steps = tl ? Array.from(tl.querySelectorAll<HTMLElement>(".tl-step")) : [];
    let ticking = false;
    function updateTimeline() {
      if (tl && tlProg) {
        const rect = tl.getBoundingClientRect();
        const mid = window.innerHeight * 0.62;
        const fill = Math.max(0, Math.min(mid - (rect.top + 16), rect.height - 40));
        tlProg.style.height = fill + "px";
        steps.forEach((s) => {
          const n = s.querySelector(".tl-node")!.getBoundingClientRect();
          if (n.top < mid) {
            s.classList.add("active");
          } else {
            s.classList.remove("active");
          }
        });
      }
      ticking = false;
    }
    function onScroll() {
      if (!ticking) {
        window.requestAnimationFrame(updateTimeline);
        ticking = true;
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    updateTimeline();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <>
      <link rel="preconnect" href="https://api.fontshare.com" />
      <link href="https://api.fontshare.com/v2/css?f[]=satoshi@900,700,500,400&display=swap" rel="stylesheet" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Stack+Sans+Headline&display=swap" rel="stylesheet" />

      <div className="cleaning">
        <header>
          <nav className="nav">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <a className="logo" href="#"><img src="/cleaning/logo-header.png" alt="RemoHires" /></a>
            <div className="nav-links">
              <a href="#what">What You Get</a>
              <a href="#roles">Roles</a>
              <a href="#how">How It Works</a>
              <a href="#faq">FAQ</a>
            </div>
            <button className="btn btn-primary" data-open="" onClick={(e) => openModal(e, "nav")}>Book a Discovery Call</button>
          </nav>
        </header>

        <section className="hero wrap">
          <div className="hero-pills">
            <div className="eyebrow">For Cleaning Companies</div>
            <div className="eyebrow pill-desktop">Shortlist in 5 to 10 days</div>
            <div className="eyebrow pill-desktop">No shortlist cost to start</div>
          </div>
          <h1>Turn More Leads Into Booked Cleaning Jobs<br /><span className="h1-muted">Every Lead Gets A Call Back Before It Goes Cold</span></h1>
          <p className="sub">We find, screen, and employ full-time remote staff for <strong>cleaning companies</strong>: the people who keep your <strong>phones answered and your schedule full</strong>.</p>
          <div className="hero-cta">
            <button className="btn btn-primary" data-open="" onClick={(e) => openModal(e, "hero")}>Book a Discovery Call</button>
            <a className="hero-link" href="#how">
              See how it works
              <svg viewBox="0 0 16 16" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M8 3v10M3.5 8.5 8 13l4.5-4.5" /></svg>
            </a>
          </div>
          <div
            className="vsl"
            id="vsl"
            ref={vslRef}
            role={videoMode === "idle" ? "button" : undefined}
            tabIndex={videoMode === "idle" ? 0 : undefined}
            aria-label={videoMode === "idle" ? "Play video" : undefined}
            onClick={loadVideo}
            onKeyDown={onVslKeyDown}
            style={videoMode === "idle" ? undefined : { cursor: "default" }}
          >
            <video
              ref={videoRef}
              src="/cleaning/cleaning-explainer.mp4"
              poster="/cleaning/cleaning-explainer-poster.jpg"
              preload="metadata"
              playsInline
              controls={videoMode === "playing"}
              title="RemoHires for cleaning companies"
            />
            {videoMode === "idle" && <span className="vplay" aria-hidden="true"><span className="tri"></span></span>}
            {videoMode === "autoplay" && (
              <button type="button" className="vsound" onClick={playWithSound}>
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M11 5 6 9H2v6h4l5 4V5z" fill="currentColor" />
                  <path d="M15.5 8.5a5 5 0 0 1 0 7" />
                  <path d="M18.5 5.5a9 9 0 0 1 0 13" />
                </svg>
                Tap for sound
              </button>
            )}
          </div>
        </section>

        <section id="what" className="dark">
          <div className="wrap">
            <div className="section-head reveal">
              <div className="eyebrow">What You Get</div>
              <h2>A Remote Back Office,<br />Built for Cleaning</h2>
              <p>Tell us the roles you need and we bring the people to run them, screened and ready to interview.</p>
            </div>
            <div className="grid-3">
              <div className="card reveal"><h3>Lower Staffing Costs</h3><p>Full-time remote staff cost less than a local back-office hire, so your margins grow as your bookings grow.</p></div>
              <div className="card reveal"><h3>A Shortlist In 5 To 10 Days</h3><p>Tell us the role, and we bring a screened shortlist worth interviewing within 5 to 10 days.</p></div>
              <div className="card reveal"><h3>No Shortlist Cost</h3><p>You pay nothing to receive candidates. There is no fee to see your shortlist, and you pay only when you hire.</p></div>
            </div>
          </div>
        </section>

        <section id="roles" className="wrap">
          <div className="section-head reveal">
            <div className="eyebrow">Built Around Your Role</div>
            <h2>Pick The Role, See The Fit</h2>
            <p className="muted">Tap a role to see what they do for a cleaning business and roughly what it costs.</p>
          </div>
          <div className="selector reveal">
            <div className="sel-list" id="selList" role="group" aria-label="Choose a role">
              {ROLES.map((r, i) => (
                <button
                  key={r.name}
                  type="button"
                  className={i === roleIndex ? "sel-item active" : "sel-item"}
                  data-i={i}
                  aria-pressed={i === roleIndex ? "true" : "false"}
                  aria-controls="selDetail"
                  onClick={() => selectRole(i)}
                >
                  <span className="n">{String(i + 1).padStart(2, "0")}</span> {r.name}
                </button>
              ))}
            </div>
            <div className="sel-detail" id="selDetail" aria-live="polite" ref={selDetailRef}>
              <h3 id="sdName">{role.name}</h3>
              <p className="sd-desc" id="sdDesc">{role.desc}</p>
              <div className="cp">
                {/* TODO: replace with real US benchmarks per role from Ms. Novia's calculator.
                    For now derived from the "70 to 75% less" claim: US cost = RemoHires / 0.30 to / 0.25 */}
                <div className="cp-us"><div><span className="cp-lbl">Typical US hire</span><span className="cp-note">salary plus benefits</span></div><span className="cp-amt" id="sdUs">{money(Math.round(mo / 0.30 / 100) * 100) + " to " + money(Math.round(mo / 0.25 / 100) * 100) + " / month"}</span></div>
                <div className="cp-remo"><div className="cp-top"><span className="cp-lbl">With RemoHires</span><span className="cp-save">Save 70 to 75%</span></div><span className="cp-amt" id="sdPrice">{money(mo) + " / month"}</span><span className="cp-note" id="sdMo">{"from " + money(role.w) + " / week, all-in"}</span></div>
              </div>
              <button className="btn btn-primary" data-open="" data-role-cta="" onClick={(e) => openModal(e, "roles")}>Tell Us the Roles You Need</button>
            </div>
          </div>
          <p className="sel-note">Prices are RemoHires all-in benchmark ranges (weekly, USD), billed by role and experience level and confirmed on a short call. Savings compare a full-time US back-office salary plus benefits with a RemoHires remote hire; your exact number depends on the role.</p>
        </section>

        <section id="how" className="wrap">
          <div className="tl-wrap">
            <div className="tl-head reveal">
              <div className="eyebrow">How It Works</div>
              <h2>From First Call To First Day</h2>
              <p className="muted">Three simple steps, and you stay in control the whole way.</p>
            </div>
            <div className="tl" id="tl" ref={tlRef}>
              <div className="tl-track"></div>
              <div className="tl-prog" id="tlProg" ref={tlProgRef}></div>
              <div className="tl-step"><div className="tl-node">1</div><h3>The Discovery Call</h3><p>Tell us the roles you need, your hours, and how your business runs. One short call.</p></div>
              <div className="tl-step"><div className="tl-node">2</div><h3>Your Shortlist</h3><p>We source and screen candidates, then send you a shortlist worth interviewing in 5 to 10 days.</p></div>
              <div className="tl-step"><div className="tl-node">3</div><h3>Your Hire</h3><p>You interview and choose, and we handle the hiring and onboarding, so day one just works.</p></div>
            </div>
          </div>
        </section>

        <section id="why" className="dark">
          <div className="wrap">
            <div className="section-head reveal">
              <div className="eyebrow">Why Teams Switch To Us</div>
              <h2>The Old Way, And A Better One</h2>
            </div>
            <div className="compare reveal">
              <div className="crow chead"><div className="lbl">&nbsp;</div><div className="old">The Old Way</div><div className="new">RemoHires</div></div>
              <div className="crow"><div className="lbl">Speed</div><div className="old">Weeks or months of searching</div><div className="new">A shortlist in 5 to 10 days</div></div>
              <div className="crow"><div className="lbl">Cost</div><div className="old">Agency and job-board fees</div><div className="new">No shortlist cost to start</div></div>
              <div className="crow"><div className="lbl">Fit</div><div className="old">Generic applicants</div><div className="new">Roles tailored to your business</div></div>
              <div className="crow"><div className="lbl">Effort</div><div className="old">You sift resumes alone</div><div className="new">A pre-vetted shortlist</div></div>
              <div className="crow"><div className="lbl">After the hire</div><div className="old">You are left to manage it all</div><div className="new">Hiring and onboarding handled</div></div>
            </div>
          </div>
        </section>

        <section id="faq" className="wrap" ref={faqRef}>
          <div className="section-head reveal">
            <div className="eyebrow">Before You Ask</div>
            <h2>Questions Cleaning Owners Ask</h2>
          </div>
          <details className="acc reveal" onToggle={onAccToggle}><summary>How fast can we start?<span className="tog">+</span></summary><div className="ans">Most discovery calls happen within a few days, and you will usually see a shortlist in 5 to 10 days.</div></details>
          <details className="acc reveal" onToggle={onAccToggle}><summary>What does it cost to see candidates?<span className="tog">+</span></summary><div className="ans">Nothing. There is no shortlist cost, and you pay only when you hire.</div></details>
          <details className="acc reveal" onToggle={onAccToggle}><summary>Who employs the person?<span className="tog">+</span></summary><div className="ans">We employ them for you and run payroll, taxes, and compliance, so you simply manage the day-to-day work.</div></details>
          <details className="acc reveal" onToggle={onAccToggle}><summary>What roles can you fill for a cleaning company?<span className="tog">+</span></summary><div className="ans">The remote back office: appointment setting, customer service, scheduling and dispatch, admin, and lead follow-up.</div></details>
          <details className="acc reveal" onToggle={onAccToggle}><summary>Can they work my hours and use my booking software?<span className="tog">+</span></summary><div className="ans">Yes. Your hire works your business hours in your time zone and learns the booking software you already use.</div></details>
          <details className="acc reveal" onToggle={onAccToggle}><summary>What if the hire is not the right fit?<span className="tog">+</span></summary><div className="ans">We find you a replacement at no extra cost.</div></details>
        </section>

        <section className="finalcta-sec">
          <div className="wrap reveal">
            <h2>Ready To Keep Every Job On The Calendar?</h2>
            <p>Book a discovery call and we will bring you a shortlist for the exact roles your cleaning business needs.</p>
            <button className="btn btn-onlight" data-open="" onClick={(e) => openModal(e, "final")}>Book a Discovery Call</button>
          </div>
        </section>

        <footer>
          <div className="wrap">
            <div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <div className="logo"><img src="/cleaning/logo-footer.png" alt="RemoHires" /></div>
              <p className="fmeta">RemoHires finds, screens, and employs full-time remote staff for small businesses, and handles the hiring and payroll for you. Results and timelines vary by role and candidate availability.</p>
            </div>
            <div className="fbottom">
              <div className="fcopy">&copy; 2026 RemoHires.com LLC. All rights reserved.</div>
              <div className="flegal">
                <Link href="/privacypolicy">Privacy Policy</Link>
                <Link href="/termsofservice">Terms of Service</Link>
              </div>
            </div>
          </div>
        </footer>

        <div
          className={modalOpen ? "overlay open" : "overlay"}
          id="overlay"
          ref={overlayRef}
          onClick={(e) => {
            if (e.target === overlayRef.current) closeModal();
          }}
        >
          <div className="modal" role="dialog" aria-modal="true" aria-label="Book a discovery call">
            <button className="close" id="close" aria-label="Close" onClick={closeModal}>&times;</button>
            <div id="form-view" style={modalOpen ? { display: showThanks ? "none" : "block" } : undefined}>
              <h3>Book Your Discovery Call</h3>
              <p className="msub">Tell us where to reach you and we will set up a time that works.</p>
              <form id="leadform" noValidate onSubmit={handleSubmit}>
                <input type="hidden" name="subject" value="New lead: Cleaning Companies LP" />
                <input type="hidden" name="from_name" value="RemoHires Cleaning LP" />
                <input type="hidden" name="source" value="cleaning-companies-lp" />
                <input type="hidden" name="role_interest" id="roleInterest" value={roleInterest} />
                <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" style={{ display: "none" }} />
                <label htmlFor="fn">Full name</label>
                <input id="fn" name="fullname" type="text" autoComplete="name" placeholder="Enter your full name" required ref={fnRef} />
                <label htmlFor="em">Email address</label>
                <input id="em" name="email" type="email" autoComplete="email" placeholder="you@company.com" required />
                <label htmlFor="ph">Phone number</label>
                <CountryPhoneField id="ph" />
                <button className="btn btn-primary" type="submit" id="submitBtn" disabled={sending}>{sending ? "Sending..." : "Book My Call"}</button>
                <p className={formError ? "form-error show" : "form-error"} id="formError" role="alert">Something went wrong. Please try again, or email info@remohires.com.</p>
                <p className="form-consent">By submitting this form, you agree to our <a href="/termsofservice" target="_blank" rel="noopener">Terms of Service</a> and <a href="/privacypolicy" target="_blank" rel="noopener">Privacy Policy</a>.</p>
              </form>
            </div>
            <div className={showThanks ? "thanks show" : "thanks"} id="thanks">
              <div className="ok">&#10003;</div>
              <h3>Thanks, You Are On The List</h3>
              <p className="msub" style={{ marginTop: 8 }}>We will be in touch shortly to set up your discovery call.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
