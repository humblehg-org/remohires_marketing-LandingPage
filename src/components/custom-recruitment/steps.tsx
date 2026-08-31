"use client";

import { useState, type ReactNode } from "react";

export interface Step {
  icon: ReactNode;
  title: string;
  body: string;
}

export function Steps({ steps }: { steps: Step[] }) {
  const [active, setActive] = useState(0);

  return (
    <div className="steps-grid">
      {steps.map((step, i) => (
        <button
          key={step.title}
          type="button"
          className={`step-card${i === active ? " active" : ""}`}
          data-step={i}
          onMouseEnter={() => setActive(i)}
          onFocus={() => setActive(i)}
        >
          <span className="step-number">{String(i + 1).padStart(2, "0")}</span>
          <span className="step-icon">{step.icon}</span>
          <h3>{step.title}</h3>
          <p>{step.body}</p>
          <div className="step-bar" />
        </button>
      ))}
    </div>
  );
}
