"use client";

import { useRef, useState, type FormEvent, type MouseEvent } from "react";
import Link from "next/link";
import posthog from "posthog-js";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import "./hvac-new-versus.css";

// Web3Forms public access key already used elsewhere on /hvac-new — this
// key is write-only and safe to ship to the client.
const WEB3FORMS_ACCESS_KEY = "8326652c-ecb6-4130-8f8b-5a477deaae3d";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

export default function HvacNewVersusClient() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const [phone, setPhone] = useState<string | undefined>(undefined);
  const [phoneError, setPhoneError] = useState<string | null>(null);
  const submittedRef = useRef(false);
  const intentFiredRef = useRef(false);

  function markIntent() {
    if (intentFiredRef.current) return;
    intentFiredRef.current = true;
    try {
      posthog.capture("hvac_form_opened");
    } catch {
      // Analytics must never break the page.
    }
  }

  // The form sits near the end of the document, so a plain anchor jump can
  // only ever drop it at the bottom edge. Centring it explicitly puts the
  // ask where the eye already is, and honours reduced-motion.
  function scrollToForm(e: MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    markIntent();
    const target = document.getElementById("call-form");
    if (!target) return;
    const reduce =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    target.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "center" });
    const first = target.querySelector("input");
    if (first instanceof HTMLInputElement) {
      setTimeout(() => first.focus({ preventScroll: true }), reduce ? 0 : 450);
    }
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (submittedRef.current) return;

    const form = e.currentTarget;
    const honeypot = form.elements.namedItem("botcheck") as HTMLInputElement | null;
    if (honeypot?.checked) return;

    if (!phone || !isValidPhoneNumber(phone)) {
      setPhoneError("Enter a valid mobile number, including area code.");
      return;
    }
    setPhoneError(null);

    submittedRef.current = true;
    setIsSubmitting(true);
    markIntent();

    const data = new FormData(form);
    data.append("page_url", window.location.href);

    console.log("[Form Submit] Sending payload to Web3Forms...");

    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { Accept: "application/json" },
      body: data,
    })
      .then((res) => res.json())
      .then((result) => {
        console.log("[Web3Forms Response]:", result);
        if (result && result.success) {
          try {
            posthog.capture("hvac_lead_submitted");
          } catch {
            // Analytics must never break the signup flow.
          }
          try {
            console.log("[Meta Pixel] Firing Lead event on successful submission");
            if (typeof window.fbq === "function") {
              window.fbq("track", "Lead");
            }
          } catch {
            // Meta Pixel must never break the signup flow.
          }
          setIsDone(true);
        } else {
          submittedRef.current = false;
          setIsSubmitting(false);
          window.alert("Something went wrong sending that. Please try again.");
        }
      })
      .catch((err) => {
        console.error("Web3Forms submission failed:", err);
        submittedRef.current = false;
        setIsSubmitting(false);
        window.alert("Something went wrong sending that. Please try again.");
      });
  }

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,900&family=IBM+Plex+Mono:wght@400;500;600;700&family=IBM+Plex+Sans:wght@400;500;600&display=swap"
        rel="stylesheet"
      />

      <div className="hvac-versus">
        <div className="wrap">
          <section className="hero" style={{ borderTop: "none", paddingTop: "28px" }}>
            <span className="eyebrow">A caller for your HVAC shop. Two weeks, $49.</span>
            <h1 className="headline">Same job. Two invoices.</h1>

            <div className="comparison">
              <div className="col col-hire">
                <div className="col-label">Hire one</div>
                <div className="row">
                  <span className="row-label">Placement fee</span>
                  <span className="row-value">$8,400</span>
                </div>
                <div className="row">
                  <span className="row-label">Recruiter retainer</span>
                  <span className="row-value">$2,500</span>
                </div>
                <div className="row">
                  <span className="row-label">Time to first call</span>
                  <span className="row-value">9 weeks</span>
                </div>
                <div className="row">
                  <span className="row-label">If they are wrong</span>
                  <span className="row-value tight">you eat it</span>
                </div>
                <div className="row" style={{ borderBottom: "none" }}>
                  <span className="row-label">Trial period</span>
                  <span className="row-value tight">none</span>
                </div>
                <div className="total">
                  <div className="total-label">Total</div>
                  <div className="total-value">$10,900</div>
                </div>
              </div>
              <div className="col col-rent">
                <div className="col-label">Rent one</div>
                <div className="row">
                  <span className="row-label">Placement fee</span>
                  <span className="row-value">$0</span>
                </div>
                <div className="row">
                  <span className="row-label">Retainer</span>
                  <span className="row-value">$0</span>
                </div>
                <div className="row">
                  <span className="row-label">Time to first call</span>
                  <span className="row-value">14 days</span>
                </div>
                <div className="row">
                  <span className="row-label">If they are wrong</span>
                  <span className="row-value tight">your $49 back, plus $500</span>
                </div>
                <div className="row" style={{ borderBottom: "none" }}>
                  <span className="row-label">Trial period</span>
                  <span className="row-value tight">that is the whole thing</span>
                </div>
                <div className="total">
                  <div className="total-label">Total</div>
                  <div className="total-value">$49</div>
                </div>
              </div>
              <div className="vs">VS</div>
            </div>

            <p className="trial-line">
              You cannot trial an employee. You can trial this one.
            </p>

            <p className="supply-line supply-lead">
              Six shops a month, because that is how many callers we can recruit and vet.
            </p>
            <a href="#call-form" className="btn" onClick={scrollToForm}>
              Call me in the next 15 minutes
            </a>
            <p className="microcopy">
              A real person calls you within fifteen minutes. The call takes ten. Two
              weeks costs $49, refunded if you stop.
            </p>
          </section>

          <section>
            <h2 className="section-heading">What actually turns up for $49.</h2>
            <div className="body-copy">
              <p>
                We find you a person and vet them. You meet them and approve them
                before they dial anybody. Then they work your list for two weeks, by
                phone and text, in your company name. They call on day 1, again on day
                3, again on day 7.
              </p>
              <p>
                They are one named person, the same one every day, not a pool and not a
                rota. They get your price list before the first call, so when somebody
                asks whether it includes the permit they can answer instead of
                promising a callback.
              </p>
              <p>
                You sign off on the call script and the text wording before anybody is
                contacted. Every call and message is logged against the job in the
                software you already use, so you read all of it as it happens. One
                message from you and the calling stops that day.
              </p>
              <p>
                On day 14 you have a worked list and the outcome logged against every
                job, and it is yours whether you carry on or not.
              </p>
            </div>
          </section>

          <section>
            <h2 className="section-heading">Who they call</h2>
            <ul className="who-list">
              <li>
                <span className="tick" aria-hidden="true"></span>
                <span>Homeowners in your service area, found by your person</span>
              </li>
              <li>
                <span className="tick" aria-hidden="true"></span>
                <span>People you quoted who never got a second call</span>
              </li>
              <li>
                <span className="tick" aria-hidden="true"></span>
                <span>Houses you put a system in over fifteen years ago</span>
              </li>
              <li>
                <span className="tick" aria-hidden="true"></span>
                <span>Customers you have not spoken to since the job</span>
              </li>
            </ul>
            <p className="closing-line">
              You pay no lead fee on any of them, and three of the four are already
              sitting in your system.
            </p>
          </section>

          <section>
            <h2 className="section-heading">If they are wrong, you get $500.</h2>
            <div className="refund-callout">$500</div>
            <div className="body-copy">
              <p>
                This is the part a hire cannot give you. Take on the wrong person and
                you carry them, you carry the placement fee you already paid, and you
                start again. Nobody sends you a cheque.
              </p>
              <p>
                Here, tell us inside the fourteen days that the person is wrong for your
                shop and we refund the $49 and send you $500. You decide, not us. One
                per company, and it is written into the one page agreement you sign
                before anybody starts.
              </p>
              <p>
                That is the whole reason the two weeks exist. You cannot find out
                whether somebody is any good at calling your customers by reading a CV.
                You find out by listening to the calls.
              </p>
            </div>
            <a href="#call-form" className="btn btn-mid" onClick={scrollToForm}>
              Call me in the next 15 minutes
            </a>
          </section>

          <section>
            <div className="objection" style={{ marginTop: "16px" }}>
              <p>
                <strong>
                  &ldquo;The last outsider who talked to my customers cost me
                  jobs.&rdquo;
                </strong>
                One owner wrote that a vendor &ldquo;started sending customized
                messages to customers, that we did NOT okay to be sent. These messages
                have lost us jobs.&rdquo; You met this person and signed off on every
                word before they dialled anybody. That is the difference, and it is the
                whole reason the approval sits before the work rather than after it.
              </p>
            </div>
            <div className="objection">
              <p>
                <strong>
                  &ldquo;They will not know enough to talk to my customers.&rdquo;
                </strong>
                The complaint people write about call services is that &ldquo;agents
                don&apos;t know your business or region and can&apos;t have meaningful
                conversations.&rdquo; This is one person, and the same one every day,
                not a pool, and they are working your shop&apos;s own price list rather
                than a script written for anybody.
              </p>
            </div>
            <div className="objection">
              <p>
                <strong>
                  &ldquo;I have been sold one of these before and it harassed my
                  customer.&rdquo;
                </strong>
                Fair. One owner found a tool that &ldquo;continues to send reminders to
                the client every 4 hours.&rdquo; This is three calls. Day 1, day 3, day
                7. Then it stops. Nothing keeps running in the background afterwards,
                and one message from you ends it at any point.
              </p>
            </div>

            <small className="source-note">
              Quotes from public reviews of field service software and of outsourced
              answering services.
            </small>
          </section>

          <section>
            <h2 className="section-heading">And then it is from $450 a month.</h2>
            <div className="body-copy">
              <p>
                Here is why that number is possible. We recruit and vet them, you
                approve them, and then they are yours, not split across three shops.
                They work from Indonesia.
              </p>
              <p>
                Where they work is why the number is what it is. Keeping them to one
                shop is why the work is any good. The same person every day learns what
                you charge and how you talk about it, and none of it walks out to
                another account on Thursday.
              </p>
            </div>
            <p className="cost-note">
              a US seat doing this work runs roughly $50,000 to $65,000 a year all in.
              That is a median telemarketer wage of $34,480 (May 2023) or a median
              customer service wage of $44,770 (May 2025), loaded for employer costs
              using the BLS Employer Costs for Employee Compensation release of June
              2026, where benefits are 31.5% of total compensation for full time
              private industry work. Published market costs, not a claim about what our
              customers have achieved.
            </p>
            <small className="source-note">
              US Bureau of Labor Statistics, Occupational Employment and Wage Statistics
              and the Occupational Outlook Handbook, with employer costs from the
              Employer Costs for Employee Compensation release of June 2026.
            </small>
          </section>
        </div>

        <section className="final-cta" id="call">
          <div className="wrap">
            <h2 className="section-heading">
              Nine weeks and $10,900. Or fourteen days and $49.
            </h2>
            <p className="proof-line">
              Put your number in and a real person calls you, usually within fifteen
              minutes. The call takes ten. You meet the person and approve them, then
              they start on day one.
            </p>

            <p className="lead-in">What it costs, and how to stop:</p>
            <ul>
              <li>
                Two weeks costs $49, charged once. Stop at the end and we refund it, and
                you keep the list, the scripts and everything on it.
              </li>
              <li>If the person is wrong for your shop, we refund the $49 and send you $500.</li>
              <li>
                Carry on and it is from $450 a month, month to month. Tell us to stop
                and it stops at the end of the month.
              </li>
            </ul>

            <p className="lead-in">Who this is not for:</p>
            <ul>
              <li>You do not send written estimates.</li>
              <li>You cannot give access to where those estimates live.</li>
              <li>Your open list is a handful of quotes a month.</li>
              <li>
                What you actually want is somebody to answer your phone, rather than go
                and find work. This is outbound only. We will tell you on the call
                rather than after.
              </li>
            </ul>

            <p className="form-promise">
              A real person calls you, usually within fifteen minutes, and the call
              takes ten.
            </p>

            {!isDone ? (
              <form id="call-form" className="call-form" onSubmit={handleSubmit}>
                <input type="hidden" name="access_key" value={WEB3FORMS_ACCESS_KEY} />
                <input
                  type="hidden"
                  name="subject"
                  value="New HVAC callback request (versus LP)"
                />
                <input
                  type="hidden"
                  name="from_name"
                  value="RemoHires HVAC LP (versus)"
                />
                <input type="hidden" name="landing_page" value="hvac-new-versus" />
                <input
                  type="checkbox"
                  name="botcheck"
                  tabIndex={-1}
                  autoComplete="off"
                  style={{ display: "none" }}
                  aria-hidden="true"
                />
                <div className="field">
                  <label htmlFor="fname">First name</label>
                  <input
                    type="text"
                    id="fname"
                    name="fname"
                    autoComplete="given-name"
                    required
                  />
                </div>
                <div className="field">
                  <label htmlFor="mobile">Mobile number</label>
                  <PhoneInput
                    id="mobile"
                    international
                    defaultCountry="US"
                    autoComplete="tel"
                    placeholder="(555) 555-5555"
                    value={phone}
                    onChange={(value) => {
                      setPhone(value);
                      if (phoneError) setPhoneError(null);
                    }}
                    className={phoneError ? "phone-input phone-input-error" : "phone-input"}
                    aria-invalid={phoneError ? true : undefined}
                    aria-describedby={phoneError ? "mobile-error" : undefined}
                  />
                  {/* Web3Forms reads this hidden field; it always holds the
                      library's parsed E.164 value, never the raw display text. */}
                  <input type="hidden" name="mobile" value={phone ?? ""} />
                  {phoneError && (
                    <p className="field-error" id="mobile-error" role="alert">
                      {phoneError}
                    </p>
                  )}
                </div>
                <button type="submit" className="btn" disabled={isSubmitting}>
                  {isSubmitting ? "Calling you shortly..." : "Call me in the next 15 minutes"}
                </button>
              </form>
            ) : (
              <p
                style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: 15,
                  lineHeight: 1.6,
                  color: "#2f5a3a",
                }}
              >
                Got it. A real person will call you shortly, usually within fifteen
                minutes.
              </p>
            )}
          </div>
        </section>

        <footer>
          <div className="wrap">
            <Link href="/termsofservice">Terms</Link>
            <Link href="/privacypolicy">Privacy</Link>
          </div>
        </footer>
      </div>
    </>
  );
}
