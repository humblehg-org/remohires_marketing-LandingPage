import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { CleaningResourceShell } from "@/app/_shared-lp/cleaning-resource-shell";
import {
  CALC_TIER_PAGE,
  MISSED_CALL_PLAYBOOK_PDF,
  QUIZ_BAND_PAGE,
  READINESS_GUIDE_PDF,
  isCalcTier,
  isQuizBand,
} from "@/app/_shared-lp/lead-magnet-categories";
import { ScrollToTop } from "./scroll-to-top";

export const metadata: Metadata = {
  title: "Thank You | RemoHires for Cleaning Companies",
  description: "Thanks. Your RemoHires resource is on its way.",
  formatDetection: { telephone: false, email: false },
  robots: { index: false, follow: false },
};

type Copy = { headline: ReactNode; sub: ReactNode; download: string | null; balance?: boolean };

/* ?lm= picks the copy (kit / calculator / quiz), same as the draft's script.
   ?band= (quiz, A/B/C) and ?tier= (calculator, 1/2/3) add the page of the PDF
   with that person's 3 moves; when missing or invalid, that part is left out.
   Anything else falls back to the default. */
function copyFor(lm: string | undefined, band: string | undefined, tier: string | undefined): Copy {
  if (lm === "kit") {
    return {
      headline: <>Your Kit Is Ready.<br /><span className="g">Grab It Below.</span></>,
      // The <br> only shows on mobile, so no single word ends up alone on a line there.
      sub: <>We also sent a copy to your inbox, so you always have it. Download the Front-Office Kit now<br className="res-br-m" /> and put the scripts to work today.</>,
      download: "/resources/cleaning-front-office-kit.pdf",
    };
  }
  if (lm === "calculator") {
    const moves = isCalcTier(tier) ? ` Your 3 moves are on page ${CALC_TIER_PAGE[tier]} (Tier ${tier}).` : "";
    return {
      headline: <>Your Playbook Is Ready.<br /><span className="g">Grab It Below.</span></>,
      sub: `Your Missed-Call Playbook is ready.${moves} We also sent a copy to your inbox.`,
      download: MISSED_CALL_PLAYBOOK_PDF,
      balance: true,
    };
  }
  if (lm === "quiz") {
    const moves = isQuizBand(band) ? ` Your 3 moves are on page ${QUIZ_BAND_PAGE[band]} (Band ${band}).` : "";
    return {
      headline: <>Your Guide Is Ready.<br /><span className="g">Grab It Below.</span></>,
      sub: `Your Readiness Guide is ready.${moves} We also sent a copy to your inbox.`,
      download: READINESS_GUIDE_PDF,
      balance: true,
    };
  }
  return {
    headline: <>You Are In.<br /><span className="g">Check Your Inbox.</span></>,
    sub: "Your resource is on its way. If it is not there in a minute or two, have a quick look in spam or promotions.",
    download: null,
  };
}

function first(v: string | string[] | undefined) {
  return Array.isArray(v) ? v[0] : v;
}

export default async function ResourcesThankYouPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const sp = await searchParams;
  const copy = copyFor(first(sp.lm), first(sp.band)?.toUpperCase(), first(sp.tier));

  return (
    <CleaningResourceShell>
      <ScrollToTop />
      <main className="wrap">
        <section className="res-stage res-ty res-center">
          <div className="res-inner">
            <div className="res-tick">&#10003;</div>
            <div className="eyebrow res-pill">For Cleaning Companies</div>
            <h1 className="res-h1">{copy.headline}</h1>
            <p className={copy.balance ? "res-sub res-sub--bal" : "res-sub"}>{copy.sub}</p>
            {copy.download && (
              <div className="res-actions">
                <a className="btn btn-primary" href={copy.download} download>Download It Now</a>
              </div>
            )}
          </div>
        </section>
      </main>

      <section className="finalcta-sec">
        <div className="wrap">
          <h2>Ready To Keep Every Job On The Calendar?</h2>
          <p>Book a discovery call and we will bring you a shortlist for the exact roles your cleaning business needs.</p>
          <Link className="btn btn-onlight" href="/cleaning">Book a Discovery Call</Link>
        </div>
      </section>
    </CleaningResourceShell>
  );
}
