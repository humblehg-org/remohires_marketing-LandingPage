"use client";

import { useState } from "react";
import { LeadMagnetForm } from "@/app/_shared-lp/lead-magnet-form";
import { KIT_FORM_ID_READINESS_QUIZ } from "@/app/_shared-lp/lead-magnet-submit";

/* Questions and points, unchanged from the draft. */
const QS: { q: string; a: [string, number][] }[] = [
  { q: "How many inbound calls does your business get in a week?", a: [["Under 10", 0], ["10 to 30", 1], ["More than 30", 2]] },
  { q: "Roughly what share of those calls goes unanswered?", a: [["Under 10 percent", 0], ["10 to 25 percent", 1], ["More than 25 percent", 2]] },
  { q: "Who answers the phone right now?", a: [["Office or admin staff", 0], ["Me, between jobs", 2], ["Whoever is free, or voicemail", 2]] },
  { q: "After you send a quote, do you follow up?", a: [["Always, on a schedule", 0], ["Sometimes, when I remember", 1], ["Rarely, I move on", 2]] },
  { q: "In your busy season, can you keep up with the phone?", a: [["Yes, no problem", 0], ["Barely", 1], ["No, calls slip", 2]] },
  { q: "Do you know your response time and where leads come from?", a: [["Yes, I track it", 0], ["Not really", 1]] },
  { q: "Would you hand calls and booking to someone you trust?", a: [["Yes, today", 2], ["Maybe, if it were easy", 1], ["Not yet", 0]] },
];

type Result = { badge: string; band: string; say: string; plan: string[] };

function scoreResult(total: number): Result {
  if (total <= 4) {
    return {
      badge: "Not Yet, And That Is Fine",
      band: "Fix The Basics First",
      say: "Your call volume or coverage is not at the point where a dedicated hire pays off yet. Tighten the simple stuff and revisit soon.",
      plan: ["Set a 2-ring rule and return every missed call within 5 minutes", "Add a quote follow-up at day 2 and day 5", "Track response time for 2 weeks so you have a baseline"],
    };
  }
  if (total <= 8) {
    return {
      badge: "Ready For Part-Time Help",
      band: "A Few Hours A Day Would Move The Needle",
      say: "You are losing enough to the phone that part-time coverage would pay for itself. Start with the hours you miss most.",
      plan: ["Cover your 3 worst phone hours first", "Hand off quote follow-up so no estimate goes quiet", "Use 1 shared inbox and script so replies stay consistent"],
    };
  }
  return {
    badge: "Ready For A Full Remote Front Office",
    band: "The Phone Is Your Bottleneck, Not Your Crews",
    say: "You are leaving real recurring revenue on voicemail. A full-time remote front office would answer every call, quote, and book while your crews stay on the work.",
    plan: ["Put 1 full-time remote rep on calls, quotes, and booking", "Set a 5-minute callback standard and measure it weekly", "Turn booked jobs into reviews and referrals with a simple follow-up"],
  };
}

function scrollTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

export default function ReadinessQuizClient() {
  const [cur, setCur] = useState(0);
  // Chosen option index per question (kept when going back, like the draft).
  const [picked, setPicked] = useState<(number | undefined)[]>([]);
  const [done, setDone] = useState(false);

  const total = picked.reduce<number>((s, j, i) => s + (j === undefined ? 0 : QS[i].a[j][1]), 0);
  const result = done ? scoreResult(total) : null;

  function go(n: number) {
    setCur(n);
    scrollTop();
  }

  function choose(i: number, j: number) {
    setPicked((p) => {
      const next = [...p];
      next[i] = j;
      return next;
    });
    setTimeout(() => {
      if (i < QS.length - 1) {
        go(i + 1);
      } else {
        setCur(QS.length);
        setDone(true);
        scrollTop();
      }
    }, 180);
  }

  function restart() {
    setPicked([]);
    setDone(false);
    go(0);
  }

  /* Score, result, the 3 moves for that result, and every question with the
     chosen answer, as readable fields for the team email. */
  function quizFields(): Record<string, string> {
    const fields: Record<string, string> = {
      "Score": `${total} / 13`,
      "Result": result ? `${result.badge}: ${result.band}` : "",
      "Next 3 moves": result ? result.plan.map((p, i) => `${i + 1}. ${p}`).join("\n") : "",
    };
    QS.forEach((item, i) => {
      const j = picked[i];
      fields[`Q${i + 1}. ${item.q}`] = j === undefined ? "(no answer)" : item.a[j][0];
    });
    return fields;
  }

  const item = QS[cur];

  return (
    <main>
      <div className="wrap res-center res-qhero">
        <div className="eyebrow res-pill">For Cleaning Companies</div>
        <h1 className="res-h1 res-h1--long">Is Your Cleaning Business Ready<br /><span className="g">To Hand Off The Front Desk?</span></h1>
        <p className="res-sub">7 questions, about 2 minutes, with a clear next step at the end.</p>
      </div>

      <div className="wrap res-narrow res-quiz">
        {!done && (
          <>
            <div className="res-progress">
              <span style={{ width: Math.round((cur / QS.length) * 100) + "%" }} />
            </div>
            {item && (
              <div className="res-q" key={cur}>
                <div className="res-qnum">Question {cur + 1} of {QS.length}</div>
                <h2>{item.q}</h2>
                <div className="res-opts">
                  {item.a.map(([label], j) => (
                    <button
                      key={label}
                      type="button"
                      className={picked[cur] === j ? "res-opt sel" : "res-opt"}
                      onClick={() => choose(cur, j)}
                    >
                      {label}
                    </button>
                  ))}
                </div>
                <div className="res-navrow">
                  <button type="button" className="res-back" style={cur === 0 ? { visibility: "hidden" } : undefined} onClick={() => cur > 0 && go(cur - 1)}>Back</button>
                  <span></span>
                </div>
              </div>
            )}
          </>
        )}

        {result && (
          <div className="res-qresult">
            <div className="eyebrow res-pill">{result.badge}</div>
            <h2>{result.band}</h2>
            <p className="res-say">{result.say}</p>
            {/* The 3 moves themselves are emailed (Kit.com) and sent to the team
                (Web3Forms), not shown here. */}
            <div className="res-plan">
              <h3>Your Next 3 Moves Are Ready</h3>
              <p>Tell us where to send them and we will email you 3 practical steps to get every call answered and every quote followed up.</p>
            </div>
            <div className="res-qctas">
              <LeadMagnetForm
                idPrefix="quiz"
                buttonText="Send Me The Action Plan"
                tone="light"
                kitFormId={KIT_FORM_ID_READINESS_QUIZ}
                subject="New lead: Cleaning Readiness Quiz"
                source="cleaning-readiness-quiz"
                eventBase="cleaning_readiness_quiz"
                thankYouLm="quiz"
                getExtra={quizFields}
              />
            </div>
            <button type="button" className="res-again" onClick={restart}>Start Over</button>
          </div>
        )}
      </div>
    </main>
  );
}
