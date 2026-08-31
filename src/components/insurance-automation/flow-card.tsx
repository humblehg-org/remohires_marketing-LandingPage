"use client";

import { useEffect, useState, type ReactNode } from "react";

export interface FlowStepData {
  icon: ReactNode;
  label: string;
  tag?: { text: string; variant?: "good"; pulse?: boolean };
  done?: boolean;
}

/**
 * Hero workflow card's cascading highlight loop, ported from the source's
 * `setInterval`-driven "one flow-step active at a time" script. Skipped entirely
 * under prefers-reduced-motion, matching the original (no step is ever highlighted
 * in that case — only the permanent `done` state shows).
 */
export function FlowCard({ steps }: { steps: FlowStepData[] }) {
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduce || steps.length === 0) return;
    let i = 0;
    const id = setInterval(() => {
      setActive(i);
      i = (i + 1) % steps.length;
    }, 900);
    return () => clearInterval(id);
  }, [steps.length]);

  return (
    <div className="flow">
      {steps.map((step, i) => (
        <div
          key={step.label}
          className={`flow-step${step.done ? " done" : ""}${active === i ? " active" : ""}`}
        >
          <span className="flow-num">
            <span className="ic" aria-hidden="true">
              {step.icon}
            </span>
          </span>
          <span className="flow-label">{step.label}</span>
          {step.tag && (
            <span
              className={`flow-tag${step.tag.variant === "good" ? " good" : ""}${step.tag.pulse ? " pulse" : ""}`}
            >
              {step.tag.text}
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
