import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | RemoHires",
  description:
    "RemoHires' terms of service, fees and billing, cancellation policy, and Money-Back Guarantee.",
};

export default function TermsOfServicePage() {
  return (
    <>
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-4xl items-center justify-between px-6">
          <a href="/" className="text-lg font-bold tracking-tight text-navy">
            RemoHires
          </a>
          <a
            href="/"
            className="text-sm font-medium text-slate-600 transition-colors hover:text-navy"
          >
            Back to Home
          </a>
        </div>
      </header>

      <main className="max-w-4xl mx-auto py-24 px-6">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-slate-900">
          Terms of Service &amp; Money-Back Guarantee
        </h1>

        <div className="space-y-6 text-slate-800">
          <p>
            <strong>Last updated:</strong> August 10, 2026
            <br />
            <strong>Company:</strong> RemoHires (PT Sentra Talenta Unggul)
            <br />
            <strong>Mailing address:</strong> Grand Jati Junction Level P1 3A,
            Jl. Perintis Kemerdekaan No. 20231, Kesawan, Kec. Medan Barat,
            Kota Medan, Sumatera Utara 20231, Indonesia
            <br />
            <strong>Contact:</strong>{" "}
            info@remohires.com &middot; Novia, (504) 265-1063
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4 text-slate-900">
            What RemoHires Does
          </h2>
          <p>
            RemoHires provides custom recruitment and placement of full-time
            remote professionals for small businesses. We source and screen
            candidates, present a shortlist, and (when selected) employ the
            hire through our Employer of Record so payroll, tax, and
            compliance are handled. The client directs the hire&apos;s
            day-to-day work.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4 text-slate-900">
            Fees and Billing
          </h2>
          <p>
            The client is billed a recurring fee, billed weekly, that covers
            the placed employee&apos;s salary, payroll, compliance, and the
            RemoHires service margin. Exact pricing is confirmed in writing
            before the engagement begins. Third-party costs the client
            requests (for example equipment) are billed separately if
            applicable.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4 text-slate-900">
            Cancellation
          </h2>
          <p>
            The client may cancel with 7 days written notice. Cancellation
            stops future billing; it does not by itself refund fees already
            earned, except under the Money-Back Guarantee below.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4 text-slate-900">
            Money-Back Guarantee (First Month)
          </h2>
          <p>
            If the client is not satisfied with the placed hire in the first
            month of the engagement, RemoHires will refund the RemoHires
            service fee for that first month, subject to the conditions
            below. The guarantee removes the client&apos;s risk; it is not a
            month of free labor.
          </p>
          <p>Conditions (all must be met):</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Engagement.</strong> The client provided the role
              details and onboarding information needed for the hire to do
              the work, and responded to the hire and to RemoHires within 2
              business days when input was requested.
            </li>
            <li>
              <strong>Timely notice.</strong> The client raised the issue
              with RemoHires in writing within the first 30 days of the
              engagement, giving us a chance to fix it or replace the hire.
            </li>
            <li>
              <strong>Scope.</strong> The refund covers the RemoHires service
              fee for the first month only. It does not cover third-party
              costs, and it does not apply where the shortfall was caused by
              the client not providing access, information, or
              responsiveness the hire needed.
            </li>
            <li>
              <strong>Once per client.</strong>
            </li>
            <li>
              <strong>Replacement first.</strong> In most cases we will offer
              to replace the hire quickly before a refund is requested.
            </li>
          </ul>

          <h2 className="text-xl font-semibold mt-8 mb-4 text-slate-900">
            Client Responsibilities
          </h2>
          <p>
            The client agrees to provide accurate role requirements,
            reasonable onboarding, lawful direction of the hire&apos;s work,
            and timely responses. The client is responsible for how it
            directs and uses the hire&apos;s work.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4 text-slate-900">
            Confidentiality
          </h2>
          <p>
            Each party keeps the other&apos;s non-public information
            confidential and uses it only to perform this engagement.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4 text-slate-900">
            No Guarantee of Specific Results
          </h2>
          <p>
            Beyond the Money-Back Guarantee in Section 4, RemoHires does not
            guarantee specific business outcomes (for example a number of
            booked jobs or revenue). Any example results shared in our
            marketing are illustrative unless stated otherwise.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4 text-slate-900">
            Limitation of Liability
          </h2>
          <p>
            To the extent allowed by law, RemoHires&apos; total liability for
            any claim relating to the service is limited to the fees the
            client paid to RemoHires in the one month before the claim.
            RemoHires is not liable for indirect or consequential losses.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4 text-slate-900">
            Changes
          </h2>
          <p>
            RemoHires may update these terms. Material changes will be
            communicated to active clients. Continued use after an update
            means acceptance of the updated terms.
          </p>
        </div>
      </main>

      <footer className="bg-navy text-white">
        <div className="mx-auto max-w-4xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-lg font-bold tracking-tight">RemoHires</span>
          <div className="text-sm text-slate-300 text-center sm:text-right">
            <p>
              Full-time remote teammates for growing businesses.{" "}
              <a href="https://remohires.com" className="underline hover:text-white">
                remohires.com
              </a>
            </p>
            <p>&copy; 2026 RemoHires</p>
          </div>
        </div>
      </footer>
    </>
  );
}
