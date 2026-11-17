import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { CleaningResourceShell } from "@/app/_shared-lp/cleaning-resource-shell";
import { ScrollToTop } from "./scroll-to-top";

export const metadata: Metadata = {
  title: "Thank You | RemoHires for Cleaning Companies",
  description: "Thanks. Your RemoHires resource is on its way.",
  formatDetection: { telephone: false, email: false },
  robots: { index: false, follow: false },
};

type Copy = { headline: ReactNode; sub: ReactNode; download: boolean };

/* ?lm= picks the copy (kit / calculator / quiz), same as the draft's script.
   Anything else falls back to the default. */
function copyFor(lm: string | undefined): Copy {
  if (lm === "kit") {
    return {
      headline: <>Your Kit Is Ready.<br /><span className="g">Grab It Below.</span></>,
      // The <br> only shows on mobile, so no single word ends up alone on a line there.
      sub: <>We also sent a copy to your inbox, so you always have it. Download the Front-Office Kit now<br className="res-br-m" /> and put the scripts to work today.</>,
      download: true,
    };
  }
  if (lm === "calculator") {
    return {
      headline: <>Your Number Is On Its Way.<br /><span className="g">Check Your Inbox.</span></>,
      sub: "Check your inbox. We are sending you the simple way to win those missed calls back. If it is not there in a minute, check spam or promotions.",
      download: false,
    };
  }
  if (lm === "quiz") {
    return {
      headline: <>Your Score Is On Its Way.<br /><span className="g">Check Your Inbox.</span></>,
      sub: "Check your inbox. Your next 3 moves are on their way. If it is not there in a minute, check spam or promotions.",
      download: false,
    };
  }
  return {
    headline: <>You Are In.<br /><span className="g">Check Your Inbox.</span></>,
    sub: "Your resource is on its way. If it is not there in a minute or two, have a quick look in spam or promotions.",
    download: false,
  };
}

export default async function ResourcesThankYouPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const raw = (await searchParams).lm;
  const copy = copyFor(Array.isArray(raw) ? raw[0] : raw);

  return (
    <CleaningResourceShell>
      <ScrollToTop />
      <main className="wrap">
        <section className="res-stage res-ty res-center">
          <div className="res-inner">
            <div className="res-tick">&#10003;</div>
            <div className="eyebrow res-pill">For Cleaning Companies</div>
            <h1 className="res-h1">{copy.headline}</h1>
            <p className="res-sub">{copy.sub}</p>
            {copy.download && (
              <div className="res-actions">
                <a className="btn btn-primary" href="/resources/cleaning-front-office-kit.pdf" download>Download It Now</a>
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
