"use client";

import { useEffect, useRef, useState } from "react";

const ROWS: {
  label: string;
  sub: string;
  value: string;
  width: string;
  variant: "us" | "remo";
}[] = [
  {
    label: "U.S. developer",
    sub: "full-time, loaded cost",
    value: "~$8,000/mo",
    width: "100%",
    variant: "us",
  },
  {
    label: "Freelance marketplace",
    sub: "per-project, variable",
    value: "~$3,500/mo",
    width: "55%",
    variant: "us",
  },
  {
    label: "RemoHires",
    sub: "dedicated, full focus",
    value: "under $1,500/mo",
    width: "26%",
    variant: "remo",
  },
];

export function CostCompare() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) {
      const id = requestAnimationFrame(() => setVisible(true));
      return () => cancelAnimationFrame(id);
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} id="compare" className={`compare reveal${visible ? " visible" : ""}`}>
      {ROWS.map((row) => (
        <div className="compare-row" key={row.label}>
          <div
            className="compare-label"
            style={row.variant === "remo" ? { color: "var(--teal)" } : undefined}
          >
            {row.label}
            <span>{row.sub}</span>
          </div>
          <div className="bar-track">
            <div
              className={`bar-fill bar-${row.variant}`}
              style={{ width: visible ? row.width : 0 }}
            />
          </div>
          <div className={`compare-val${row.variant === "remo" ? " remo" : ""}`}>
            {row.value}
          </div>
        </div>
      ))}
      <p className="compare-note">
        Illustrative ranges. Your quote depends on role and seniority — most owners save
        70–80% versus a local hire.
      </p>
    </div>
  );
}
