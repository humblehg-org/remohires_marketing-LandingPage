"use client";

import { useEffect, useRef, useState } from "react";

const DAYS = [
  "Day 1 · no reply yet",
  "Day 2 · still no follow-up",
  "Day 3 · gone quiet",
];
const LOST_LINE = "Bought from the agent who called first.";
const WAITING_LINE = "Day 0 · waiting for follow-up";

export function ColdQuoteCard() {
  const ref = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);
  const [cold, setCold] = useState(false);
  const [badge, setBadge] = useState("🔥 HOT LEAD");
  const [day, setDay] = useState(WAITING_LINE);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) {
      const raf = requestAnimationFrame(() => setRevealed(true));
      return () => cancelAnimationFrame(raf);
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setRevealed(true);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;

    const timers: ReturnType<typeof setTimeout>[] = [];

    function loop() {
      setCold(false);
      setBadge("🔥 HOT LEAD");
      setDay(WAITING_LINE);

      let i = 0;
      const dayTimer = setInterval(() => {
        setDay(DAYS[Math.min(i, DAYS.length - 1)]);
        i++;
        if (i >= DAYS.length) clearInterval(dayTimer);
      }, 1200);

      timers.push(
        setTimeout(() => {
          setCold(true);
          setBadge("✕ LOST");
          setDay(LOST_LINE);
        }, 600),
      );
      timers.push(setTimeout(loop, 6400));
    }

    timers.push(setTimeout(loop, 600));
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div ref={ref} className={`coldcard rev${revealed ? " in" : ""}${cold ? " cold" : ""}`}>
      <div className="qh">
        <span className="clock">9:02 AM</span>
        <span className="badge">{badge}</span>
      </div>
      <div className="qname">New auto quote</div>
      <div className="qmeta">
        Homeowner · ~$420 first-year commission · renews every year
      </div>
      <div className="heatwrap">
        <div className="heat" />
      </div>
      <div className="day">{day}</div>
      <div className="stamp">GONE</div>
    </div>
  );
}
