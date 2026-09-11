"use client";

import { useRef, useState, type FormEvent } from "react";
import Link from "next/link";
import posthog from "posthog-js";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import "./hvac-new.css";

// Web3Forms public access key already used elsewhere on /hvac-new — this
// key is write-only and safe to ship to the client.
const WEB3FORMS_ACCESS_KEY = "8326652c-ecb6-4130-8f8b-5a477deaae3d";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

export default function HvacNewClient() {
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
      {/*
        TODO(fonts): these four Google Fonts are loaded page-locally, the
        same way the sibling /hvac-new design loads Satoshi from Fontshare.
        For the next/font-optimized route, move this to app/layout.tsx, e.g.:

          import { Special_Elite, IBM_Plex_Sans, Courier_Prime, Archivo } from "next/font/google";
          const specialElite = Special_Elite({ weight: "400", subsets: ["latin"], variable: "--font-special-elite" });
          const ibmPlexSans = IBM_Plex_Sans({ weight: ["400","500","600","700"], subsets: ["latin"], variable: "--font-ibm-plex-sans" });
          const courierPrime = Courier_Prime({ weight: ["400","700"], subsets: ["latin"], variable: "--font-courier-prime" });
          const archivo = Archivo({ weight: ["700","800","900"], subsets: ["latin"], variable: "--font-archivo" });

        ...then swap the font-family values in hvac-new.css for the
        generated CSS variables and drop the <link> tags below.
      */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Special+Elite&family=IBM+Plex+Sans:wght@400;500;600;700&family=Courier+Prime:wght@400;700&family=Archivo:wght@700;800;900&display=swap"
        rel="stylesheet"
      />

      <div className="hvac-est">
        <main>
          <section className="hero-wrap" id="hero">
            {/* the fan: full width across the top of the page, as if looking down
                at a desk. Four estimates for the same address. Nothing overlaps
                it and nothing sits on top of it. */}
            <div className="fan-bleed">
              <div className="fan" aria-hidden="true">
                <div className="est est-1">
                  <div className="es-head">
                    <span>ESTIMATE</span>
                    <span>228 Maple Hollow Rd.</span>
                  </div>
                  <div className="es-shop">Ridgeline Heating &amp; Air</div>
                  <div className="es-line">
                    <span>16 SEER heat pump &mdash; install</span>
                    <span>$9,450</span>
                  </div>
                  <div className="es-age">Sent 21 days ago &mdash; no reply</div>
                </div>
                <div className="est est-3">
                  <div className="es-head">
                    <span>ESTIMATE</span>
                    <span>228 Maple Hollow Rd.</span>
                  </div>
                  <div className="es-shop">Bellwood Mechanical</div>
                  <div className="es-line">
                    <span>16 SEER heat pump &mdash; install</span>
                    <span>$9,180</span>
                  </div>
                  <div className="es-age">Sent 8 days ago &mdash; no reply</div>
                </div>
                <div className="est est-2">
                  <div className="es-head">
                    <span>ESTIMATE</span>
                    <span>228 Maple Hollow Rd.</span>
                  </div>
                  <div className="es-shop">Cardinal Air Systems</div>
                  <div className="es-line">
                    <span>16 SEER heat pump &mdash; install</span>
                    <span>$8,920</span>
                  </div>
                  <div className="es-age">Sent 14 days ago &mdash; no reply</div>
                </div>
                <div className="est est-yours">
                  <div className="es-head">
                    <span>ESTIMATE</span>
                    <span>228 Maple Hollow Rd.</span>
                  </div>
                  <div className="es-shop">Your shop</div>
                  <div className="es-line">
                    <span>16 SEER heat pump &mdash; install</span>
                    <span>$8,750</span>
                  </div>
                  <div className="es-age">Sent 6 days ago</div>
                </div>
              </div>
            </div>

            {/* the conversion unit: one sheet, directly beneath the fan, at a
                comfortable reading measure. Nothing sits on this first screen
                except what is needed to act: eyebrow, headline, subhead, the
                button, the refund microcopy, then the supply line. */}
            <div className="sheet hero-copy">
              <div className="hero-copy-head">
                <span className="tag">Outbound for HVAC contractors</span>
                <h1>Get leads nobody else is calling, and someone to call them.</h1>
                <p className="subhead">
                  We find you a person, and you approve them before they dial.
                  Then they go and find homeowners in your service area, and
                  work the estimates your shop already sent, in your company
                  name. One named person, the same one every day.
                </p>
              </div>

              <div className="hero-copy-cta">
                <a href="#cta-form" className="btn" onClick={markIntent}>
                  Call me in the next 15 minutes
                </a>
                <p className="microcopy">
                  A real person calls you, usually within fifteen minutes, and
                  the call takes ten. The two weeks cost $49 and the $49 comes
                  back if you stop at the end of them. Either way, on day 14
                  you have a worked list and the outcome logged against every
                  job, and it is yours.
                </p>
                <p className="supply">
                  We take six shops a month, because that is how many callers
                  we can recruit and vet.
                </p>
              </div>
            </div>
          </section>

          {/* "Who they call": the rest of the hero's content, moved off the first
              screen onto its own sheet below the fold. Same words, same order,
              just no longer competing with the ask for the reader's first look. */}
          <section className="sheet who-sheet" id="who-they-call">
            <div className="who-they-call">
              <p className="label">Who they call</p>
              <ol>
                <li>Homeowners in your service area, found by your person</li>
                <li>People you quoted who never got a second call</li>
                <li>Houses you put a system in over fifteen years ago</li>
                <li>Customers you have not spoken to since the job</li>
              </ol>
              <p className="closing">
                You pay no lead fee on any of them, and three of the four are
                already sitting in your system.
              </p>
            </div>
          </section>

          <section className="sheet problem" id="problem">
            <h2>Nobody has an hour to make those calls.</h2>
            <div className="body">
              <p>
                A dispatcher describes the day as &ldquo;a bucket of
                overbooked prescheduled jobs that keeps getting more added in
                as the day goes on.&rdquo; An owner who bought one of the big
                field platforms found that its features &ldquo;all demand
                dedicated office staff.&rdquo;
              </p>
              <p>
                So the report gets built and the calls never get made. Here is
                how that looks from the homeowner&apos;s side. One wrote this
                about a contractor who had already visited:
              </p>
              <blockquote>
                &ldquo;He was honest and to the point and said our furnace
                would likely last another 10-20 years so he would suggest just
                AC. Yet he never followed through with the estimate. I
                followed up twice and never heard back.&rdquo;
              </blockquote>
              <p>
                That contractor did not lose on price, or on skill, or on
                reputation. The customer chased him twice. He lost on silence,
                and he will never know it happened.
              </p>
              <p>
                None of this is a filing problem. Your field software will
                hand you every quote you sent in the last ninety days, sorted
                by value and by age. The list is not the missing thing.
              </p>
              <p>
                The reflex, when the month is soft, is to go and buy more. One
                contractor&rsquo;s account of what that buys: leads sold
                &ldquo;to 4 professionals for one lead and charge 80+ dollars
                to each of them then the homeowner pays nothing.&rdquo;
                Another paid for &ldquo;over 200 Leads&rdquo; in a year and
                set ten appointments.
              </p>
              <p>
                The open estimates in your system were sold to nobody. Neither
                were the systems you put in fifteen years ago. And when they
                go cold the loss leaves no trace. No invoice, no bad review,
                no argument. Nobody complains about a quiet phone.
              </p>
            </div>
            <details className="sources">
              <summary>Sources</summary>
              <p>
                (https://old.reddit.com/r/hvacadvice/search?q=%22never+heard+back%22+estimate&amp;restrict_sr=on)
                <br />
                Dispatcher and owner quotes from Indeed and Trustpilot reviews
                of a field service platform
                (https://www.indeed.com/cmp/Isaac-Heating-&amp;-Air-Conditioning/reviews,
                https://www.trustpilot.com/review/servicetitan.com). Lead
                marketplace quotes from Trustpilot and PissedConsumer
                (https://www.trustpilot.com/review/thumbtack.com,
                https://networx-systems.pissedconsumer.com/complaints).
              </p>
            </details>
          </section>

          <section className="sheet how" id="how">
            <h2>Ten minutes to set up. Then your person starts calling.</h2>
            <div className="carbon-stack">
              <div className="ply">
                <span className="ply-num">1</span>
                <p>
                  Give us ten minutes on the phone. We go through your open
                  estimates, sort them by value and age, and agree who gets
                  called first. Nobody touches your system until you approve
                  a person.
                </p>
              </div>
              <div className="ply approval">
                <span className="ply-num">2</span>
                <p>
                  Meet the person before they call anyone. We find and vet
                  them. You sign off on the person, the call script, and the
                  text wording before anyone is contacted. It is your name on
                  those calls. You decide who says it and what they say.
                </p>
                <div className="sign-line" aria-hidden="true"></div>
              </div>
              <div className="ply">
                <span className="ply-num">3</span>
                <p>
                  Read every call in your own software. Your person works the
                  list on day 1, day 3, and day 7, by phone and text. Every
                  call and text is logged against the job, in the software you
                  already use. One message from you stops the calling that
                  day. On day 14 the worked list is yours. Keep it whether you
                  continue or not.
                </p>
              </div>
            </div>
          </section>

          <section className="sheet proof" id="proof">
            <h2>Your file has the install date. No lead platform can sell it.</h2>
            <div className="body">
              <p>
                ENERGY STAR says to consider replacing a furnace after fifteen
                years, and an AC or heat pump after ten. Your records show
                which houses crossed that line, and when. You wrote the date
                down.
              </p>
              <blockquote>
                &ldquo;I asked for a quote to replace the lineset and cased
                coil this time rather than repairing again. Never heard back,
                so called company 2 to come out and diagnose.&rdquo;
              </blockquote>
              <p>
                64% of contractors still run primarily on phone calls. This is
                a person making them, not another automated message.
              </p>
              <details className="sources">
                <summary>Sources</summary>
                <p>
                  (https://www.energystar.gov/saveathome/heating-cooling/replace)
                  <br />
                  (https://www.servicetitan.com/press/residential-industry-report-2025)
                  <br />
                  (a homeowner on r/hvacadvice, writing about a contractor who
                  had already done a $2,600 repair in that same house,
                  https://old.reddit.com/r/hvacadvice/comments/1iugawg/)
                </p>
              </details>
              <p>
                We have no HVAC case study and no testimonial for this. It is
                a new offer. That is exactly why two weeks costs $49, why you
                approve the person and every word before anyone dials, and why
                the worked list is yours at the end of it either way.
              </p>
            </div>
          </section>

          <section className="sheet objections" id="objections">
            <div className="obj-list">
              <div className="obj">
                <h3>&ldquo;The last outsider who talked to my customers cost me jobs.&rdquo;</h3>
                <p>
                  One owner wrote that a vendor &ldquo;started sending
                  customized messages to customers, that we did NOT okay to be
                  sent. These messages have lost us jobs.&rdquo; You met this
                  person and approved every word before they dialed. That is
                  the difference. The approval comes before the work, not
                  after.
                </p>
              </div>
              <div className="obj">
                <h3>&ldquo;They will not know enough to talk to my customers.&rdquo;</h3>
                <p>
                  The complaint people write about call services is that
                  &ldquo;agents don&rsquo;t know your business or region and
                  can&rsquo;t have meaningful conversations.&rdquo; This is one
                  person, the same one every day, not a pool. They get your
                  price list before the first call. By day three they answer
                  from it, instead of promising a call back.
                </p>
              </div>
              <div className="obj">
                <h3>&ldquo;I have been sold a cadence before and it harassed my customer.&rdquo;</h3>
                <p>
                  Fair. One owner found a tool that &ldquo;continues to send
                  reminders to the client every 4 hours.&rdquo; This is three
                  contacts. Day 1, day 3, day 7. Then it stops. Nothing keeps
                  running in the background afterwards, and one message from
                  you ends it at any point.
                </p>
              </div>
            </div>
            <details className="sources">
              <summary>Sources</summary>
              <p>
                Quotes from Trustpilot reviews of a field service platform and
                an answering service
                (https://www.trustpilot.com/review/housecallpro.com,
                https://www.trustpilot.com/review/answeringservicecare.com).
              </p>
            </details>
          </section>

          <section className="sheet cost" id="cost">
            <h2>One named person, the same one every day, from $450 a month.</h2>
            <div className="body">
              <p>
                Here is why that number is possible. We recruit and vet them,
                you approve them, and then they are yours, not split across
                three shops. They work from Indonesia.
              </p>
              <p>
                Where they work is why the price is what it is. Keeping them
                to one shop is why the work is good. The same person every day
                learns your prices and how you pitch them. None of it walks to
                another account on Thursday.
              </p>
            </div>
            <p className="cost-note">
              A US seat doing this work runs roughly $50,000 to $65,000 a year
              all in. That is a median telemarketer wage of $34,480 (May 2023)
              or a median customer service wage of $44,770 (May 2025), loaded
              for employer costs using the BLS Employer Costs for Employee
              Compensation release of June 2026, where benefits are 31.5% of
              total compensation for full time private industry work.
              Published market costs, not a claim about what our customers
              have achieved.
            </p>
            <details className="sources">
              <summary>Sources</summary>
              <p>
                (https://www.bls.gov/oes/2023/may/oes419041.htm)
                <br />
                (https://www.bls.gov/ooh/office-and-administrative-support/customer-service-representatives.htm)
                <br />
                (https://www.bls.gov/news.release/pdf/ecec.pdf)
              </p>
            </details>
            <p className="closing-line">
              And you cannot trial a hire. You commit to a person long before
              you know whether they are any good at this. That is the part we
              removed. Two weeks, a worked list, then you decide.
            </p>
          </section>

          <section className="sheet final" id="cta-form">
            <h2>Two weeks of one named person calling. $49.</h2>
            <p className="proof-line">
              Put your number in. A real person calls, usually within fifteen
              minutes, and the call takes ten. You meet the person and approve
              them. They start on day one. On day 14 the worked list is yours.
            </p>

            <div className="terms-block">
              <h3>What it costs, and how to stop</h3>
              <p>
                Two weeks costs $49, charged once. Stop at the end and we
                refund it, and you keep the list, the scripts and everything
                on it.
              </p>
              <p>
                Carry on and it is from $450 a month, month to month. Tell us
                to stop and it stops at the end of the month.
              </p>
            </div>

            <div className="not-for">
              <h3>Who this is not for</h3>
              <ul>
                <li>You do not send written estimates.</li>
                <li>You cannot give access to where those estimates live.</li>
                <li>Your open list is a handful of quotes a month.</li>
                <li>
                  What you actually want is somebody to answer your phone,
                  rather than go and find work. This is outbound only. We will
                  tell you on the call rather than after.
                </li>
              </ul>
            </div>

            {!isDone ? (
              <form id="lead-form" onSubmit={handleSubmit}>
                <input type="hidden" name="access_key" value={WEB3FORMS_ACCESS_KEY} />
                <input
                  type="hidden"
                  name="subject"
                  value="New HVAC callback request (estimate LP)"
                />
                <input
                  type="hidden"
                  name="from_name"
                  value="RemoHires HVAC LP (estimate)"
                />
                <input type="hidden" name="landing_page" value="hvac-new" />
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
                    id="fname"
                    name="fname"
                    type="text"
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
                <button className="btn" type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Calling you shortly..." : "Call me in the next 15 minutes"}
                </button>
                <p className="supply">
                  We take six shops a month, because that is how many callers
                  we can recruit and vet.
                </p>
              </form>
            ) : (
              <p
                style={{
                  fontFamily: "'Courier Prime', monospace",
                  fontSize: 15,
                  lineHeight: 1.6,
                  color: "#26326b",
                }}
              >
                Got it. A real person will call you shortly, usually within
                fifteen minutes.
              </p>
            )}

            <div className="sheet-foot">
              <Link href="/termsofservice">Terms</Link>
              <Link href="/privacypolicy">Privacy</Link>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
