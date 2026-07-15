import CoveragePanel from "@/components/coverage-panel";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const steps = [
  {
    n: "01",
    title: "Tell us the role",
    body: "Share the skills, seniority, and time-zone overlap you need. Takes about ten minutes — no job-spec templates required.",
  },
  {
    n: "02",
    title: "Meet your shortlist",
    body: "Within 5 business days you get 3–5 pre-vetted candidates, each with work samples, a recorded intro, and reference checks done.",
  },
  {
    n: "03",
    title: "Hire, we handle the rest",
    body: "Pick who fits. We run compliant contracts, local payroll, and equipment in 90+ countries. You just onboard.",
  },
];

const features = [
  {
    label: "Vetting",
    title: "Top 4% make the cut",
    body: "Every candidate clears a skills assessment, a live technical or craft interview, and English-communication screening before you ever see them.",
  },
  {
    label: "Compliance",
    title: "Contracts in 90+ countries",
    body: "We are the employer of record where you need one. Misclassification risk, local benefits, and tax filings stay off your plate.",
  },
  {
    label: "Overlap",
    title: "Built around your hours",
    body: "Filter by the working window you actually need. We match for real time-zone overlap, not a city on a résumé.",
  },
  {
    label: "Speed",
    title: "Days, not quarters",
    body: "The median RemoHires role fills in 11 days. Keep the momentum of a growing team instead of a hiring freeze.",
  },
];

const stats = [
  { value: "11", unit: "days", label: "Median time to hire" },
  { value: "4%", unit: "", label: "Acceptance rate of applicants" },
  { value: "92%", unit: "", label: "Still on the team after a year" },
  { value: "90+", unit: "", label: "Countries we contract in" },
];

const roles = [
  "Software Engineers",
  "Product Designers",
  "Data Analysts",
  "Customer Support",
  "Finance & Ops",
  "Growth Marketers",
  "QA Engineers",
  "Project Managers",
];

/* ------------------------------------------------------------------ */
/*  Small presentational helpers                                       */
/* ------------------------------------------------------------------ */

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-blue">
      <span className="h-1.5 w-1.5 rounded-full bg-sky" />
      {children}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function Home() {
  return (
    <>
      {/* ---------- Nav ---------- */}
      <header className="sticky top-0 z-50 border-b border-line/70 bg-canvas/85 backdrop-blur">
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
          <a href="#top" className="flex items-center gap-2">
            <span className="grid h-7 w-7 place-items-center rounded-md bg-navy font-display text-sm font-extrabold text-white">
              R
            </span>
            <span className="font-display text-lg font-bold tracking-tight text-ink">
              RemoHires
            </span>
          </a>
          <div className="hidden items-center gap-8 text-sm text-ink-soft md:flex">
            <a href="#how" className="transition-colors hover:text-ink">
              How it works
            </a>
            <a href="#why" className="transition-colors hover:text-ink">
              Why RemoHires
            </a>
            <a href="#roles" className="transition-colors hover:text-ink">
              Roles
            </a>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="#"
              className="hidden text-sm font-medium text-ink transition-colors hover:text-blue sm:block"
            >
              Sign in
            </a>
            <a
              href="#cta"
              className="rounded-full bg-ink px-4 py-2 text-sm font-medium text-canvas transition-transform hover:-translate-y-0.5"
            >
              Book a call
            </a>
          </div>
        </nav>
      </header>

      <main id="top" className="flex-1">
        {/* ---------- Hero ---------- */}
        <section className="relative overflow-hidden">
          <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 py-16 md:py-24 lg:grid-cols-[1.05fr_1fr]">
            <div className="rise">
              <Eyebrow>Remote hiring, run like operations</Eyebrow>
              <h1 className="mt-6 font-display text-5xl font-extrabold leading-[0.98] tracking-tight text-ink sm:text-6xl lg:text-[4.4rem]">
                Hire remote talent,
                <br />
                <span className="text-blue">across every</span> time zone.
              </h1>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-soft">
                RemoHires connects you with vetted professionals worldwide and
                handles the contracts, payroll, and compliance. A shortlist in
                days — the whole world in your working hours.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="#cta"
                  className="rounded-full bg-blue px-6 py-3 text-base font-semibold text-white shadow-sm transition-transform hover:-translate-y-0.5"
                >
                  Start hiring
                </a>
                <a
                  href="#how"
                  className="rounded-full border border-line-strong px-6 py-3 text-base font-medium text-ink transition-colors hover:border-ink"
                >
                  See how it works
                </a>
              </div>
              <p className="mt-6 font-mono text-xs uppercase tracking-[0.14em] text-ink-soft">
                No retainer · Pay when you hire · Replacements free for 90 days
              </p>
            </div>

            <div className="rise" style={{ animationDelay: "120ms" }}>
              <CoveragePanel />
            </div>
          </div>
        </section>

        {/* ---------- Logo strip ---------- */}
        <section className="border-y border-line bg-canvas-2/60">
          <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-5 py-8 sm:flex-row sm:justify-between">
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-ink-soft">
              Trusted by teams scaling past borders
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 font-display text-lg font-bold text-ink/45">
              <span>Northwind</span>
              <span>Lumen</span>
              <span>Cadence</span>
              <span>Fathom</span>
              <span>Beacon</span>
            </div>
          </div>
        </section>

        {/* ---------- How it works ---------- */}
        <section id="how" className="mx-auto max-w-6xl px-5 py-20 md:py-28">
          <div className="max-w-2xl">
            <Eyebrow>How it works</Eyebrow>
            <h2 className="mt-5 font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">
              Three steps. Most of the work is ours.
            </h2>
          </div>
          <ol className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-3">
            {steps.map((s) => (
              <li key={s.n} className="bg-canvas p-8">
                <span className="font-mono text-sm text-blue">{s.n}</span>
                <h3 className="mt-4 font-display text-2xl font-bold text-ink">
                  {s.title}
                </h3>
                <p className="mt-3 leading-relaxed text-ink-soft">{s.body}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* ---------- Features ---------- */}
        <section id="why" className="border-y border-line bg-canvas-2/50">
          <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
            <div className="max-w-2xl">
              <Eyebrow>Why RemoHires</Eyebrow>
              <h2 className="mt-5 font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">
                A hiring desk that runs while you sleep.
              </h2>
            </div>
            <div className="mt-14 grid gap-6 sm:grid-cols-2">
              {features.map((f) => (
                <div
                  key={f.title}
                  className="group rounded-2xl border border-line bg-canvas p-8 transition-colors hover:border-blue"
                >
                  <span className="font-mono text-xs uppercase tracking-[0.16em] text-blue">
                    {f.label}
                  </span>
                  <h3 className="mt-3 font-display text-2xl font-bold text-ink">
                    {f.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-ink-soft">{f.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- Stats band ---------- */}
        <section className="bg-navy text-white">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-5 py-16 md:grid-cols-4 md:py-20">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="font-display text-5xl font-extrabold tracking-tight text-turquoise sm:text-6xl">
                  {s.value}
                  {s.unit && (
                    <span className="ml-1 text-2xl font-semibold text-sky">
                      {s.unit}
                    </span>
                  )}
                </p>
                <p className="mt-2 text-sm text-white/70">{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ---------- Testimonial ---------- */}
        <section className="mx-auto max-w-4xl px-5 py-20 md:py-28">
          <blockquote className="text-center">
            <p className="font-display text-3xl font-semibold leading-snug tracking-tight text-ink sm:text-4xl">
              &ldquo;We filled three engineering roles across two continents in
              under a month. RemoHires handled contracts I&rsquo;d have spent a
              quarter figuring out.&rdquo;
            </p>
            <footer className="mt-8 flex items-center justify-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-full bg-navy-soft font-display text-sm font-bold text-navy">
                MA
              </span>
              <span className="text-left">
                <span className="block font-medium text-ink">Mara Aoki</span>
                <span className="block text-sm text-ink-soft">
                  VP Engineering, Cadence
                </span>
              </span>
            </footer>
          </blockquote>
        </section>

        {/* ---------- Roles ---------- */}
        <section id="roles" className="border-y border-line bg-canvas-2/50">
          <div className="mx-auto max-w-6xl px-5 py-20 md:py-24">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div className="max-w-xl">
                <Eyebrow>Roles we place</Eyebrow>
                <h2 className="mt-5 font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">
                  From your first hire to your fiftieth.
                </h2>
              </div>
              <p className="max-w-xs text-ink-soft">
                Don&rsquo;t see the role you need? We source specialists on
                request — tell us what the team is missing.
              </p>
            </div>
            <ul className="mt-12 flex flex-wrap gap-3">
              {roles.map((r) => (
                <li
                  key={r}
                  className="rounded-full border border-line-strong bg-canvas px-5 py-2.5 text-sm font-medium text-ink"
                >
                  {r}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ---------- Final CTA ---------- */}
        <section id="cta" className="mx-auto max-w-6xl px-5 py-20 md:py-28">
          <div className="relative overflow-hidden rounded-3xl bg-navy px-8 py-16 text-center md:px-16 md:py-20">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-turquoise/25 blur-2xl"
            />
            <h2 className="relative font-display text-4xl font-extrabold tracking-tight text-canvas sm:text-5xl">
              Your next hire is already awake somewhere.
            </h2>
            <p className="relative mx-auto mt-5 max-w-lg text-lg text-white/80">
              Book a 20-minute call. Walk away with a hiring plan and, if it
              fits, a shortlist within the week.
            </p>
            <div className="relative mt-9 flex flex-wrap items-center justify-center gap-3">
              <a
                href="#"
                className="rounded-full bg-turquoise px-7 py-3.5 text-base font-semibold text-navy transition-transform hover:-translate-y-0.5"
              >
                Book a call
              </a>
              <a
                href="#"
                className="rounded-full border border-white/30 px-7 py-3.5 text-base font-medium text-white transition-colors hover:bg-white/10"
              >
                Browse talent
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* ---------- Footer ---------- */}
      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-12 sm:flex-row sm:justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="grid h-7 w-7 place-items-center rounded-md bg-navy font-display text-sm font-extrabold text-white">
                R
              </span>
              <span className="font-display text-lg font-bold tracking-tight text-ink">
                RemoHires
              </span>
            </div>
            <p className="mt-3 max-w-xs text-sm text-ink-soft">
              Vetted remote talent and compliant hiring in 90+ countries.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-x-12 gap-y-2 text-sm text-ink-soft sm:grid-cols-3">
            <a href="#how" className="hover:text-ink">
              How it works
            </a>
            <a href="#why" className="hover:text-ink">
              Why us
            </a>
            <a href="#roles" className="hover:text-ink">
              Roles
            </a>
            <a href="#" className="hover:text-ink">
              Pricing
            </a>
            <a href="#" className="hover:text-ink">
              For talent
            </a>
            <a href="#" className="hover:text-ink">
              Contact
            </a>
          </div>
        </div>
        <div className="border-t border-line">
          <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-5 text-xs text-ink-soft sm:flex-row sm:justify-between">
            <span>© 2026 RemoHires. All rights reserved.</span>
            <span className="font-mono uppercase tracking-[0.14em]">
              Built for teams without borders
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
