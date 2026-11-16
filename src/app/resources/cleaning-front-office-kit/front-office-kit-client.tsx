"use client";

import Link from "next/link";
import { LeadMagnetForm } from "@/app/_shared-lp/lead-magnet-form";
import { KIT_FORM_ID_FRONT_OFFICE_KIT } from "@/app/_shared-lp/lead-magnet-submit";

/* The last two words of each item are joined with a non-breaking space so a
   single word or number never ends up alone on the second line. */
const INSIDE = [
  "An inbound call script that books the walkthrough in 60\u00A0seconds.",
  "A 5-minute missed-call text and an after-hours\u00A0auto-reply.",
  "A quote follow-up cadence for day 0, 2, 5, and\u00A09.",
  "A booking SOP, call to\u00A0calendar.",
  "A busy-season triage for when the phone will not\u00A0stop.",
];

export default function FrontOfficeKitClient() {
  return (
    <main className="wrap">
      <section className="res-stage res-kit">
        <div className="res-kitgrid">
          <div>
            <div className="eyebrow res-pill">Free Kit For Cleaning Companies</div>
            <h1 className="res-h1">Turn Missed Calls Into<br /><span className="g">Booked Cleaning Jobs</span></h1>
            <p className="res-sub">The front-office kit cleaning owners use to answer every call, follow up every quote, and fill the calendar. Steal it today.</p>
            <ul className="res-inside">
              {INSIDE.map((t) => (
                <li key={t}>
                  <span className="ic" aria-hidden="true">
                    <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3.5 8.5 3 3 6-7" /></svg>
                  </span>
                  <span className="txt">{t}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="res-kitcard">
            <div className="res-klabel">Free Download</div>
            <h2>Send Me The Kit</h2>
            <p className="res-cardp">Enter your email and get the kit right away.</p>
            <LeadMagnetForm
              idPrefix="kit"
              buttonText="Send Me The Kit"
              tone="dark"
              kitFormId={KIT_FORM_ID_FRONT_OFFICE_KIT}
              subject="New lead: Cleaning Front-Office Kit"
              source="cleaning-front-office-kit"
              eventBase="cleaning_front_office_kit"
              thankYouLm="kit"
            />
            <div className="res-alt">Prefer to talk it through? <Link href="/cleaning">Book a call</Link></div>
            <p className="res-trust">No spam. We send the kit and the occasional useful tip for cleaning owners.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
