"use client";

import { useEffect, useRef, useState } from "react";
import { LeadMagnetForm } from "@/app/_shared-lp/lead-magnet-form";
import { KIT_FORM_ID_MISSED_CALL_CALCULATOR, WEB3FORMS_KEY_MISSED_CALL_CALCULATOR } from "@/app/_shared-lp/lead-magnet-submit";
import { CALC_TIER_PAGE, calcTier } from "@/app/_shared-lp/lead-magnet-categories";

function money(n: number) {
  return "$" + Math.round(n).toLocaleString("en-US");
}

/* Share of answered calls assumed to book (from the draft). */
const CLOSE = 0.3;

export default function MissedCallCalculatorClient() {
  const [calls, setCalls] = useState(40);
  const [miss, setMiss] = useState(25);
  const [job, setJob] = useState("180");
  const [freq, setFreq] = useState(2);
  const bigRef = useRef<HTMLDivElement>(null);

  const missedYear = calls * (miss / 100) * 52;
  const lostClients = missedYear * CLOSE;
  const clientYear = (+job || 0) * freq * 12;
  const atRisk = lostClients * clientYear;
  // Tier comes from the same yearly number shown as the main result.
  const tier = calcTier(atRisk);
  const tierPage = CALC_TIER_PAGE[tier];

  // Replay the number's pop animation on every change, as the draft did.
  useEffect(() => {
    const big = bigRef.current;
    if (!big) return;
    big.classList.remove("flash");
    void big.offsetWidth;
    big.classList.add("flash");
  }, [atRisk]);

  /* Calculator inputs and results, as readable fields for the team email. */
  function reportFields(): Record<string, string> {
    return {
      "Inbound calls per week": String(calls),
      "Calls missed (percent)": `${miss}%`,
      "Average job value (USD)": money(+job || 0),
      "Visits per month for a regular": String(freq),
      "Revenue at risk per year": money(atRisk),
      "Tier": tier,
      "Missed calls per year": Math.round(missedYear).toLocaleString("en-US"),
      "New regulars lost per year": Math.round(lostClients).toLocaleString("en-US"),
      "Value of 1 regular per year": money(clientYear),
      "Back on the calendar if half are answered": money(atRisk / 2),
    };
  }

  return (
    <main className="wrap">
      <section className="res-stage res-calc res-center">
        <div className="res-hero">
          <div className="eyebrow res-pill">For Cleaning Companies</div>
          <h1 className="res-h1">What Are Missed Calls<br /><span className="g">Really Costing You?</span></h1>
          <p className="res-sub">Move the sliders and watch a year of lost revenue appear, plus how much a remote front-office hire could win back.</p>
        </div>

        <div className="res-tool">
          <div className="res-panel">
            <h2>Your Numbers</h2>
            <p className="res-psub">Rough is fine. You can change any of these.</p>
            <div className="res-field">
              <label htmlFor="calls">Inbound Calls Per Week</label>
              <div className="res-row"><input id="calls" type="range" min="5" max="200" step="5" value={calls} onChange={(e) => setCalls(+e.target.value)} /><span className="res-val">{calls}</span></div>
            </div>
            <div className="res-field">
              <label htmlFor="miss">Calls You Miss (Percent)</label>
              <div className="res-row"><input id="miss" type="range" min="5" max="60" step="5" value={miss} onChange={(e) => setMiss(+e.target.value)} /><span className="res-val">{miss}%</span></div>
            </div>
            <div className="res-field">
              <label htmlFor="job">Average Job Value (USD)</label>
              <input id="job" className="res-inp" type="number" min="20" step="10" value={job} onChange={(e) => setJob(e.target.value)} />
            </div>
            <div className="res-field">
              <label htmlFor="freq">Visits Per Month For A Regular</label>
              <div className="res-row"><input id="freq" type="range" min="1" max="8" step="1" value={freq} onChange={(e) => setFreq(+e.target.value)} /><span className="res-val">{freq}</span></div>
            </div>
          </div>

          <div className="res-result">
            <div className="res-klabel">Revenue At Risk Every Year</div>
            <div className="res-bignum" ref={bigRef}>{money(atRisk)}</div>
            <div className="res-cap">From calls that ring out before anyone picks up.</div>
            <div className="res-brk">
              <div className="res-line"><span>Missed calls per year</span><b>{Math.round(missedYear).toLocaleString("en-US")}</b></div>
              <div className="res-line"><span>New regulars lost per year</span><b>{Math.round(lostClients).toLocaleString("en-US")}</b></div>
              <div className="res-line"><span>Value of 1 regular per year</span><b>{money(clientYear)}</b></div>
            </div>
            <div className="res-recover">Answer even half and that is <b>{money(atRisk / 2)}</b> a year back on the calendar. A remote front-office hire does exactly that.</div>
            <p className="res-tierline">Your number puts you in Tier {tier}. We will email you the Missed-Call Playbook, and your 3 moves are on page {tierPage}.</p>
            <div className="res-ctas">
              <LeadMagnetForm
                idPrefix="calc"
                buttonText="Send Me The Full Report"
                tone="dark"
                kitFormId={KIT_FORM_ID_MISSED_CALL_CALCULATOR}
                web3formsAccessKey={WEB3FORMS_KEY_MISSED_CALL_CALCULATOR}
                subject="New lead: Cleaning Missed-Call Calculator"
                source="cleaning-missed-call-calculator"
                eventBase="cleaning_missed_call_calculator"
                thankYouLm="calculator"
                getExtra={reportFields}
                getThankYouParams={() => ({ tier })}
              />
            </div>
          </div>
        </div>

        <p className="res-note">Figures are an illustration based on the numbers you enter, not a quote. We assume about 30% of answered calls would book. The 1 in 4 missed-call benchmark for home services is from Invoca (2024). Your real recovery depends on your market and how fast you answer.</p>
      </section>
    </main>
  );
}
