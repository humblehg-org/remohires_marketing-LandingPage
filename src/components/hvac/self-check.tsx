"use client";

import { useState } from "react";
import { LeadForm } from "./lead-form";

export type SelfCheckOption = {
  v: string;
  label: string;
  reflect: string;
};

const DEFAULT_QUESTION = "Where do most of your leads come from today?";

const DEFAULT_OPTIONS: SelfCheckOption[] = [
  {
    v: "angi",
    label: "Angi / HomeAdvisor",
    reflect:
      "So you are paying per lead and racing everyone else to the phone.",
  },
  {
    v: "google",
    label: "Google",
    reflect:
      "So people are already searching for you. The trick is catching them fast.",
  },
  {
    v: "referrals",
    label: "Referrals",
    reflect:
      "Word of mouth is the best kind, and the hardest to scale on purpose.",
  },
];

export function SelfCheck({
  id = "start",
  question = DEFAULT_QUESTION,
  options = DEFAULT_OPTIONS,
  source = "hero_selfcheck",
}: {
  id?: string;
  question?: string;
  options?: SelfCheckOption[];
  source?: string;
}) {
  const [selected, setSelected] = useState<string | null>(null);
  const [revealed, setRevealed] = useState(false);
  const [focusToken, setFocusToken] = useState(0);

  const reflect = options.find((o) => o.v === selected)?.reflect ?? "";

  function choose(v: string) {
    setSelected(v);
    setRevealed(true);
    setFocusToken((n) => n + 1);
  }

  return (
    <div className="selfcheck" id={id}>
      <p className="sc-q">{question}</p>
      <div className="sc-opts" role="radiogroup" aria-label={question}>
        {options.map((o) => (
          <button
            key={o.v}
            type="button"
            className="sc-opt"
            role="radio"
            aria-checked={selected === o.v}
            onClick={() => choose(o.v)}
          >
            {o.label}
          </button>
        ))}
      </div>
      <p className={`sc-reflect${reflect ? " show" : ""}`} aria-live="polite">
        {reflect}
      </p>
      <div className={`sc-form${revealed ? " show" : ""}`}>
        <LeadForm
          source={source}
          qualifier={selected ?? undefined}
          focusToken={focusToken}
        />
      </div>
      <button
        type="button"
        className={`sc-skip${revealed ? " hide" : ""}`}
        onClick={() => setRevealed(true)}
      >
        or just leave your email
      </button>
    </div>
  );
}
