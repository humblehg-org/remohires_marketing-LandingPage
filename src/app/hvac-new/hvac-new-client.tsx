"use client";

import { useEffect, useRef, useState } from "react";
import posthog from "posthog-js";
import "./hvac-new.css";
import { FOOTER_LOGO_SRC } from "./footer-logo-data";

const BOOK_URL = "https://cal.com/team/remohires/15mins";

const COUNTRY_CODES: { name: string; code: string }[] = [
  { name: "United States", code: "+1" },
  { name: "Afghanistan", code: "+93" },
  { name: "Albania", code: "+355" },
  { name: "Algeria", code: "+213" },
  { name: "Andorra", code: "+376" },
  { name: "Angola", code: "+244" },
  { name: "Antigua and Barbuda", code: "+1" },
  { name: "Argentina", code: "+54" },
  { name: "Armenia", code: "+374" },
  { name: "Australia", code: "+61" },
  { name: "Austria", code: "+43" },
  { name: "Azerbaijan", code: "+994" },
  { name: "Bahamas", code: "+1" },
  { name: "Bahrain", code: "+973" },
  { name: "Bangladesh", code: "+880" },
  { name: "Barbados", code: "+1" },
  { name: "Belarus", code: "+375" },
  { name: "Belgium", code: "+32" },
  { name: "Belize", code: "+501" },
  { name: "Benin", code: "+229" },
  { name: "Bhutan", code: "+975" },
  { name: "Bolivia", code: "+591" },
  { name: "Bosnia and Herzegovina", code: "+387" },
  { name: "Botswana", code: "+267" },
  { name: "Brazil", code: "+55" },
  { name: "Brunei", code: "+673" },
  { name: "Bulgaria", code: "+359" },
  { name: "Burkina Faso", code: "+226" },
  { name: "Burundi", code: "+257" },
  { name: "Cabo Verde", code: "+238" },
  { name: "Cambodia", code: "+855" },
  { name: "Cameroon", code: "+237" },
  { name: "Canada", code: "+1" },
  { name: "Central African Republic", code: "+236" },
  { name: "Chad", code: "+235" },
  { name: "Chile", code: "+56" },
  { name: "China", code: "+86" },
  { name: "Colombia", code: "+57" },
  { name: "Comoros", code: "+269" },
  { name: "Congo (Republic of the)", code: "+242" },
  { name: "Congo (Democratic Republic of the)", code: "+243" },
  { name: "Costa Rica", code: "+506" },
  { name: "Croatia", code: "+385" },
  { name: "Cuba", code: "+53" },
  { name: "Cyprus", code: "+357" },
  { name: "Czech Republic", code: "+420" },
  { name: "Denmark", code: "+45" },
  { name: "Djibouti", code: "+253" },
  { name: "Dominica", code: "+1" },
  { name: "Dominican Republic", code: "+1" },
  { name: "Ecuador", code: "+593" },
  { name: "Egypt", code: "+20" },
  { name: "El Salvador", code: "+503" },
  { name: "Equatorial Guinea", code: "+240" },
  { name: "Eritrea", code: "+291" },
  { name: "Estonia", code: "+372" },
  { name: "Eswatini", code: "+268" },
  { name: "Ethiopia", code: "+251" },
  { name: "Fiji", code: "+679" },
  { name: "Finland", code: "+358" },
  { name: "France", code: "+33" },
  { name: "Gabon", code: "+241" },
  { name: "Gambia", code: "+220" },
  { name: "Georgia", code: "+995" },
  { name: "Germany", code: "+49" },
  { name: "Ghana", code: "+233" },
  { name: "Greece", code: "+30" },
  { name: "Grenada", code: "+1" },
  { name: "Guatemala", code: "+502" },
  { name: "Guinea", code: "+224" },
  { name: "Guinea-Bissau", code: "+245" },
  { name: "Guyana", code: "+592" },
  { name: "Haiti", code: "+509" },
  { name: "Honduras", code: "+504" },
  { name: "Hungary", code: "+36" },
  { name: "Iceland", code: "+354" },
  { name: "India", code: "+91" },
  { name: "Indonesia", code: "+62" },
  { name: "Iran", code: "+98" },
  { name: "Iraq", code: "+964" },
  { name: "Ireland", code: "+353" },
  { name: "Israel", code: "+972" },
  { name: "Italy", code: "+39" },
  { name: "Ivory Coast", code: "+225" },
  { name: "Jamaica", code: "+1" },
  { name: "Japan", code: "+81" },
  { name: "Jordan", code: "+962" },
  { name: "Kazakhstan", code: "+7" },
  { name: "Kenya", code: "+254" },
  { name: "Kiribati", code: "+686" },
  { name: "Kosovo", code: "+383" },
  { name: "Kuwait", code: "+965" },
  { name: "Kyrgyzstan", code: "+996" },
  { name: "Laos", code: "+856" },
  { name: "Latvia", code: "+371" },
  { name: "Lebanon", code: "+961" },
  { name: "Lesotho", code: "+266" },
  { name: "Liberia", code: "+231" },
  { name: "Libya", code: "+218" },
  { name: "Liechtenstein", code: "+423" },
  { name: "Lithuania", code: "+370" },
  { name: "Luxembourg", code: "+352" },
  { name: "Madagascar", code: "+261" },
  { name: "Malawi", code: "+265" },
  { name: "Malaysia", code: "+60" },
  { name: "Maldives", code: "+960" },
  { name: "Mali", code: "+223" },
  { name: "Malta", code: "+356" },
  { name: "Marshall Islands", code: "+692" },
  { name: "Mauritania", code: "+222" },
  { name: "Mauritius", code: "+230" },
  { name: "Mexico", code: "+52" },
  { name: "Micronesia", code: "+691" },
  { name: "Moldova", code: "+373" },
  { name: "Monaco", code: "+377" },
  { name: "Mongolia", code: "+976" },
  { name: "Montenegro", code: "+382" },
  { name: "Morocco", code: "+212" },
  { name: "Mozambique", code: "+258" },
  { name: "Myanmar", code: "+95" },
  { name: "Namibia", code: "+264" },
  { name: "Nauru", code: "+674" },
  { name: "Nepal", code: "+977" },
  { name: "Netherlands", code: "+31" },
  { name: "New Zealand", code: "+64" },
  { name: "Nicaragua", code: "+505" },
  { name: "Niger", code: "+227" },
  { name: "Nigeria", code: "+234" },
  { name: "North Korea", code: "+850" },
  { name: "North Macedonia", code: "+389" },
  { name: "Norway", code: "+47" },
  { name: "Oman", code: "+968" },
  { name: "Pakistan", code: "+92" },
  { name: "Palau", code: "+680" },
  { name: "Palestine", code: "+970" },
  { name: "Panama", code: "+507" },
  { name: "Papua New Guinea", code: "+675" },
  { name: "Paraguay", code: "+595" },
  { name: "Peru", code: "+51" },
  { name: "Philippines", code: "+63" },
  { name: "Poland", code: "+48" },
  { name: "Portugal", code: "+351" },
  { name: "Qatar", code: "+974" },
  { name: "Romania", code: "+40" },
  { name: "Russia", code: "+7" },
  { name: "Rwanda", code: "+250" },
  { name: "Saint Kitts and Nevis", code: "+1" },
  { name: "Saint Lucia", code: "+1" },
  { name: "Saint Vincent and the Grenadines", code: "+1" },
  { name: "Samoa", code: "+685" },
  { name: "San Marino", code: "+378" },
  { name: "Sao Tome and Principe", code: "+239" },
  { name: "Saudi Arabia", code: "+966" },
  { name: "Senegal", code: "+221" },
  { name: "Serbia", code: "+381" },
  { name: "Seychelles", code: "+248" },
  { name: "Sierra Leone", code: "+232" },
  { name: "Singapore", code: "+65" },
  { name: "Slovakia", code: "+421" },
  { name: "Slovenia", code: "+386" },
  { name: "Solomon Islands", code: "+677" },
  { name: "Somalia", code: "+252" },
  { name: "South Africa", code: "+27" },
  { name: "South Korea", code: "+82" },
  { name: "South Sudan", code: "+211" },
  { name: "Spain", code: "+34" },
  { name: "Sri Lanka", code: "+94" },
  { name: "Sudan", code: "+249" },
  { name: "Suriname", code: "+597" },
  { name: "Sweden", code: "+46" },
  { name: "Switzerland", code: "+41" },
  { name: "Syria", code: "+963" },
  { name: "Taiwan", code: "+886" },
  { name: "Tajikistan", code: "+992" },
  { name: "Tanzania", code: "+255" },
  { name: "Thailand", code: "+66" },
  { name: "Timor-Leste", code: "+670" },
  { name: "Togo", code: "+228" },
  { name: "Tonga", code: "+676" },
  { name: "Trinidad and Tobago", code: "+1" },
  { name: "Tunisia", code: "+216" },
  { name: "Turkey", code: "+90" },
  { name: "Turkmenistan", code: "+993" },
  { name: "Tuvalu", code: "+688" },
  { name: "Uganda", code: "+256" },
  { name: "Ukraine", code: "+380" },
  { name: "United Arab Emirates", code: "+971" },
  { name: "United Kingdom", code: "+44" },
  { name: "Uruguay", code: "+598" },
  { name: "Uzbekistan", code: "+998" },
  { name: "Vanuatu", code: "+678" },
  { name: "Vatican City", code: "+379" },
  { name: "Venezuela", code: "+58" },
  { name: "Vietnam", code: "+84" },
  { name: "Yemen", code: "+967" },
  { name: "Zambia", code: "+260" },
  { name: "Zimbabwe", code: "+263" },
];

function countryOptionValue(c: { name: string; code: string }) {
  return `${c.code}|${c.name}`;
}

const DEFAULT_COUNTRY_VALUE = countryOptionValue(COUNTRY_CODES[0]);

const errorBorderStyle: React.CSSProperties = {
  borderColor: "#ff5c5c",
  boxShadow: "0 0 0 3px rgba(255,92,92,.25)",
};

const errorTextStyle: React.CSSProperties = {
  color: "#ff9c9c",
  fontSize: 12,
  fontWeight: 500,
  marginTop: 6,
  lineHeight: 1.4,
};

type FieldErrors = { fullname?: boolean; phone?: boolean };

export default function HvacNewClient() {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const heroRef = useRef<HTMLElement | null>(null);
  const firstFieldRef = useRef<HTMLInputElement | null>(null);

  const [stickOn, setStickOn] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [leadDone, setLeadDone] = useState(false);
  const [doneMsg, setDoneMsg] = useState("");
  const [countryValue, setCountryValue] = useState(DEFAULT_COUNTRY_VALUE);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [modalOpenTime, setModalOpenTime] = useState(0);

  const selectedDialCode = countryValue.split("|")[0] || "+1";

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
    setErrors({});
    setIsSubmitting(false);
    setModalOpenTime(Date.now());
    setModalOpen(true);
    try {
      posthog.capture("hvac_form_opened");
    } catch {
      // Analytics must never break the modal flow.
    }
  }

  function closeModal() {
    setModalOpen(false);
  }

  function handleLeadSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const nameInput = form.elements.namedItem("fullname") as HTMLInputElement;
    const phoneInput = form.elements.namedItem("phone") as HTMLInputElement;
    const emailInput = form.elements.namedItem("email") as HTMLInputElement;
    const callNowInput = form.elements.namedItem("callnow") as HTMLInputElement;
    const honeypotInput = form.elements.namedItem(
      "company_website"
    ) as HTMLInputElement | null;

    const name = nameInput.value.trim();
    const countryCode = selectedDialCode;
    const phoneDigits = phoneInput.value.trim().replace(/[^0-9]/g, "");
    const email = emailInput.value.trim();

    const nameMissing = !name;
    const phoneMissing = phoneDigits.length < 7 || phoneDigits.length > 15;

    if (nameMissing || phoneMissing) {
      setErrors({ fullname: nameMissing, phone: phoneMissing });
      (nameMissing ? nameInput : phoneInput).focus();
      return;
    }

    setErrors({});

    // Honeypot: bots that fill hidden fields get a fake success, no submission.
    if (honeypotInput && honeypotInput.value.trim()) {
      const first = name.split(" ")[0];
      setDoneMsg(
        `Thanks, ${first}. A RemoHires specialist will call you shortly to start the search.`
      );
      setLeadDone(true);
      return;
    }

    // Time-on-form gate: reject submits faster than a human could plausibly complete the form.
    if (Date.now() - modalOpenTime < 3000) {
      window.alert("Please check your number and try again.");
      return;
    }

    setIsSubmitting(true);

    const phone = `${countryCode} ${phoneDigits}`;

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

    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        access_key: "8326652c-ecb6-4130-8f8b-5a477deaae3d",
        subject: "New HVAC Lead From Landing Page",
        fullname: name,
        phone,
        email,
        call_now: callNow,
      }),
    })
      .then((res) => {
        if (res.ok) {
          setDoneMsg(msg);
          setLeadDone(true);
          try {
            posthog.capture("hvac_lead_submitted");
          } catch {
            // Analytics must never break the signup flow.
          }
        } else {
          setIsSubmitting(false);
        }
      })
      .catch((err) => {
        console.error("Web3Forms submission failed:", err);
        setIsSubmitting(false);
      });
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
                <input
                  type="text"
                  name="company_website"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    left: "-9999px",
                    width: 1,
                    height: 1,
                    opacity: 0,
                    pointerEvents: "none",
                  }}
                />
                <div className="lf-eyebrow">Free To Start</div>
                <h4 id="lm-title">Get Someone On Your Lead List</h4>
                <p className="lf-sub">
                  Leave your number. A RemoHires specialist calls you back,
                  looks at your open estimates with you, and starts the
                  search. Free to start, you pay when you hire.
                </p>
                <div className="fields">
                  <div>
                    <input
                      ref={firstFieldRef}
                      type="text"
                      name="fullname"
                      placeholder="Your name"
                      autoComplete="name"
                      required
                      onChange={() => {
                        if (errors.fullname) {
                          setErrors((prev) => ({ ...prev, fullname: false }));
                        }
                      }}
                      style={errors.fullname ? errorBorderStyle : undefined}
                    />
                    {errors.fullname && (
                      <div style={errorTextStyle}>This field is required.</div>
                    )}
                  </div>
                  <div>
                    <div style={{ display: "flex", gap: 10 }}>
                      <div
                        style={{
                          position: "relative",
                          flex: "0 0 92px",
                          minWidth: 0,
                        }}
                      >
                        <div
                          aria-hidden="true"
                          style={{
                            position: "absolute",
                            inset: 0,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            padding: "0 8px 0 10px",
                            borderRadius: 13,
                            border: "1px solid rgba(255,255,255,.18)",
                            background: "rgba(255,255,255,.97)",
                            color: "#141a2e",
                            font: "inherit",
                            fontSize: 15,
                            fontWeight: 500,
                            pointerEvents: "none",
                          }}
                        >
                          <span>{selectedDialCode}</span>
                          <svg
                            width="10"
                            height="10"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#141a2e"
                            strokeWidth={2.6}
                            style={{ flex: "none", marginLeft: 4 }}
                          >
                            <path d="M6 9l6 6 6-6" />
                          </svg>
                        </div>
                        <select
                          name="countryCode"
                          value={countryValue}
                          onChange={(e) => setCountryValue(e.target.value)}
                          aria-label="Country code"
                          required
                          style={{
                            position: "relative",
                            width: "100%",
                            height: "100%",
                            padding: "15px 8px",
                            borderRadius: 13,
                            border: "1px solid transparent",
                            background: "transparent",
                            color: "transparent",
                            font: "inherit",
                            fontSize: 15,
                            fontWeight: 500,
                            outline: "none",
                            appearance: "none",
                            WebkitAppearance: "none",
                            MozAppearance: "none",
                          }}
                        >
                          {COUNTRY_CODES.map((c) => (
                            <option
                              key={countryOptionValue(c)}
                              value={countryOptionValue(c)}
                              style={{ color: "#141a2e" }}
                            >
                              {`${c.name} (${c.code})`}
                            </option>
                          ))}
                        </select>
                      </div>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Mobile number"
                        autoComplete="tel"
                        inputMode="numeric"
                        pattern="[0-9]*"
                        minLength={7}
                        maxLength={15}
                        onChange={(e) => {
                          e.currentTarget.value = e.currentTarget.value.replace(
                            /[^0-9]/g,
                            ""
                          );
                          if (errors.phone) {
                            setErrors((prev) => ({ ...prev, phone: false }));
                          }
                        }}
                        style={{
                          flex: 1,
                          minWidth: 0,
                          ...(errors.phone ? errorBorderStyle : {}),
                        }}
                        required
                      />
                    </div>
                    {errors.phone && (
                      <div style={errorTextStyle}>This field is required.</div>
                    )}
                  </div>
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
                <button className="btn" type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Get Started Free"}
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
