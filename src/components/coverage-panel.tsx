/*
 * CoveragePanel — the page's signature element.
 * A calm "operations console" that shows vetted talent live across time zones,
 * reinforcing the follow-the-sun hiring thesis. Static by design (no client JS);
 * the only motion is the CSS "now" pulse, which respects reduced-motion.
 */

type Status = "available" | "ending" | "starting";

const talent: {
  initials: string;
  name: string;
  role: string;
  city: string;
  local: string;
  status: Status;
}[] = [
  {
    initials: "LS",
    name: "Lucía S.",
    role: "Senior Frontend Engineer",
    city: "Lisbon",
    local: "14:20",
    status: "available",
  },
  {
    initials: "AK",
    name: "Arjun K.",
    role: "Product Designer",
    city: "Bengaluru",
    local: "18:50",
    status: "ending",
  },
  {
    initials: "MO",
    name: "Marco O.",
    role: "Data Analyst",
    city: "São Paulo",
    local: "10:20",
    status: "available",
  },
  {
    initials: "GR",
    name: "Grace R.",
    role: "Customer Support Lead",
    city: "Manila",
    local: "21:20",
    status: "starting",
  },
];

const statusMeta: Record<Status, { label: string; dot: string; text: string }> =
  {
    available: {
      label: "Available now",
      dot: "bg-sky now-dot",
      text: "text-blue",
    },
    ending: {
      label: "Wrapping up",
      dot: "bg-line-strong",
      text: "text-ink-soft",
    },
    starting: {
      label: "Starting soon",
      dot: "bg-sky",
      text: "text-blue",
    },
  };

/* A 24-hour coverage track — filled segments show when the roster is online. */
const coverageHours = Array.from({ length: 24 }, (_, h) => h);
const onlineHours = new Set([
  6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
]);

export default function CoveragePanel() {
  return (
    <div className="rounded-2xl border border-line bg-canvas shadow-[0_24px_60px_-32px_rgba(16,35,31,0.45)]">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-line px-5 py-4">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-sky now-dot" />
          <span className="font-mono text-xs uppercase tracking-[0.16em] text-ink">
            Live coverage
          </span>
        </div>
        <span className="font-mono text-xs text-ink-soft">4 online · UTC±0</span>
      </div>

      {/* Talent roster */}
      <ul className="divide-y divide-line">
        {talent.map((t) => {
          const meta = statusMeta[t.status];
          return (
            <li key={t.name} className="flex items-center gap-4 px-5 py-3.5">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-navy-soft font-display text-sm font-bold text-navy">
                {t.initials}
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate font-medium text-ink">{t.name}</p>
                <p className="truncate text-sm text-ink-soft">{t.role}</p>
              </div>
              <div className="text-right">
                <p className="font-mono text-sm text-ink">{t.local}</p>
                <p className="text-xs text-ink-soft">{t.city}</p>
              </div>
              <span
                className={`hidden items-center gap-1.5 whitespace-nowrap text-xs font-medium sm:flex ${meta.text}`}
              >
                <span className={`h-1.5 w-1.5 rounded-full ${meta.dot}`} />
                {meta.label}
              </span>
            </li>
          );
        })}
      </ul>

      {/* 24h coverage track */}
      <div className="border-t border-line px-5 py-4">
        <div className="mb-2 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.14em] text-ink-soft">
          <span>Team coverage · 24h</span>
          <span>17 / 24 hrs</span>
        </div>
        <div className="flex gap-0.5" aria-hidden>
          {coverageHours.map((h) => (
            <span
              key={h}
              className={`h-6 flex-1 rounded-sm ${
                onlineHours.has(h) ? "bg-blue" : "bg-line"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
