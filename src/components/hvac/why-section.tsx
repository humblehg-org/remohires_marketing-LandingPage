import {
  IconCardFilled,
  IconCheckFilled,
  IconShieldBadgeFilled,
} from "./icons";

export function WhySection() {
  return (
    <section id="why" className="section-pad">
      <div className="wrap">
        <div className="why-copy mx-auto flex flex-col items-center text-center">
          <span className="eyebrow">What It Costs</span>
          <h2 className="md:whitespace-nowrap">
            We Pay 2 Weeks of Their Salary.{" "}
            <span className="bg-gradient-to-r from-[#1441DF] to-[#00A8F2] bg-clip-text text-transparent">
              You pay $49.
            </span>
          </h2>

          {/* Desktop: same bolded emphasis as mobile */}
          <div className="hidden md:block">
            <p>
              Two weeks of a full-time specialist costs us about{" "}
              <b>$150</b> in salary. We charge you <b>$49</b> and eat the
              difference, because it&apos;s cheaper than how companies like
              ours normally find customers: ads, discovery calls, three
              weeks of proposals that go nowhere. We&apos;d rather put the
              money into working your actual pipeline and let the result be
              the pitch.
            </p>
            <p>
              Your specialist is <b>based in Indonesia</b> and works your
              hours. That&apos;s the whole reason a dedicated full-time
              person costs a fraction of a US hire, and it&apos;s better you
              know it now than on day 10.
            </p>
            <p>
              They are <b>not shared</b> with two or three other shops.
              That&apos;s how most offshore help works: you can&apos;t see
              those people&apos;s hours, you&apos;re competing for their
              attention, and they never stay long enough to learn what you
              charge.
            </p>
            <p>
              After the 2 weeks it&apos;s{" "}
              <b>$450 a month, month to month</b>. No annual contract and no
              notice period: tell us to stop and it stops at the end of the
              month.
            </p>
          </div>

          {/* Mobile: same copy, with the mockup's bolded emphasis */}
          <div className="block md:hidden w-full text-left">
            <p>
              Two weeks of a full-time specialist costs us about{" "}
              <strong className="font-bold text-ink">$150</strong> in
              salary. We charge you{" "}
              <strong className="font-bold text-ink">$49</strong> and eat
              the difference, because it&apos;s cheaper than how companies
              like ours normally find customers: ads, discovery calls,
              three weeks of proposals that go nowhere. We&apos;d rather
              put the money into working your actual pipeline and let the
              result be the pitch.
            </p>
            <p>
              Your specialist is{" "}
              <strong className="font-bold text-ink">
                based in Indonesia
              </strong>{" "}
              and works your hours. That&apos;s the whole reason a
              dedicated full-time person costs a fraction of a US hire, and
              it&apos;s better you know it now than on day 10.
            </p>
            <p>
              They are{" "}
              <strong className="font-bold text-ink">not shared</strong>{" "}
              with two or three other shops. That&apos;s how most offshore
              help works: you can&apos;t see those people&apos;s hours,
              you&apos;re competing for their attention, and they never
              stay long enough to learn what you charge.
            </p>
            <p>
              After the 2 weeks it&apos;s{" "}
              <strong className="font-bold text-ink">
                $450 a month, month to month
              </strong>
              . No annual contract and no notice period: tell us to stop and
              it stops at the end of the month.
            </p>
          </div>

          {/* Icon chips: shown on mobile and desktop */}
          <div className="mt-5 flex w-full gap-2.5">
            <div className="flex-1 rounded-2xl border border-line bg-white p-3.5 text-center">
              <IconCardFilled className="mx-auto h-6 w-6 text-blue" />
              <b className="mt-2 block text-[12.5px] font-bold leading-tight text-navy">
                $49 is one charge, not a trial
              </b>
            </div>
            <div className="flex-1 rounded-2xl border border-line bg-white p-3.5 text-center">
              <IconCheckFilled className="mx-auto h-6 w-6 text-blue" />
              <b className="mt-2 block text-[12.5px] font-bold leading-tight text-navy">
                You approve every script
              </b>
            </div>
            <div className="flex-1 rounded-2xl border border-line bg-white p-3.5 text-center">
              <IconShieldBadgeFilled className="mx-auto h-6 w-6 text-blue" />
              <b className="mt-2 block text-[12.5px] font-bold leading-tight text-navy">
                Month to month, refundable
              </b>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
