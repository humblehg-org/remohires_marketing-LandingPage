"use client";

import { useEffect, useRef, useState } from "react";

function useCountTo(active: boolean, target: number) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;
    const step = target / 55;
    let cur = 0;
    const t = setInterval(() => {
      cur += step;
      if (cur >= target) {
        cur = target;
        clearInterval(t);
      }
      setValue(Math.round(cur));
    }, 22);
    return () => clearInterval(t);
  }, [active, target]);

  return value;
}

export function CostCompare() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const usVal = useCountTo(visible, 152661);
  const savePct = useCountTo(visible, 83);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) {
      const raf = requestAnimationFrame(() => setVisible(true));
      return () => cancelAnimationFrame(raf);
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <>
      <div className={`cmpwrap rev${visible ? " in" : ""}`} ref={ref}>
        <div className="ccard us">
          <div className="who">A US AI engineer</div>
          <div className="amt">${usVal.toLocaleString()}</div>
          <div className="per">average base salary / year</div>
        </div>
        <div className="vs">VS</div>
        <div className="ccard rh">
          <div className="who">RemoHires</div>
          <div className="amt">From $300</div>
          <div className="per">per week · one AI engineer + agent</div>
        </div>
      </div>
      <div className={`savebadge rev${visible ? " in" : ""}`}>
        <div className="savebig">about {savePct}% less</div>
        <div className="savesub">
          than hiring in the US — and that&rsquo;s <b>before</b> the benefits,
          payroll taxes, and overhead a US salary adds on top.
        </div>
      </div>
    </>
  );
}
