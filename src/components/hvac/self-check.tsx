"use client";

import { useState } from "react";
import { LeadForm } from "./lead-form";
import type { LeadPath } from "@/lib/submit-lead";

export type SelfCheckOption = {
  v: string;
  label: string;
  reflect: string;
};

const DEFAULT_QUESTION =
  "Have your leads been contacted by other companies before?";

const DEFAULT_OPTIONS: SelfCheckOption[] = [
  {
    v: "yes",
    label: "Yes",
    reflect: "So you are racing other companies to the phone.",
  },
  {
    v: "no",
    label: "No",
    reflect: "So being first to respond gives you the edge.",
  },
];

export function SelfCheck({
  id = "start",
  question = DEFAULT_QUESTION,
  options = DEFAULT_OPTIONS,
  source = "hero_selfcheck",
  path = "home",
}: {
  id?: string;
  question?: string;
  options?: SelfCheckOption[];
  source?: string;
  path?: LeadPath;
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
          path={path}
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
