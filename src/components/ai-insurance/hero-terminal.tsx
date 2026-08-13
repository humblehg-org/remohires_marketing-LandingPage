"use client";

import { useEffect, useState } from "react";

type Line = { t: string; a: boolean; ok?: boolean; html: string };

const LINES: Line[] = [
  { t: "9:02", a: false, html: "new quote · <b>auto</b> · homeowner" },
  { t: "9:02", a: true, html: "follows up by text + email, in <b>your agency’s name</b>" },
  { t: "9:03", a: true, html: "writes the details to your <b>AMS</b> · once" },
  { t: "9:05", a: true, html: "flags your <b>licensed producer</b> to bind" },
  { t: "live", a: true, ok: true, html: "following up until they book…" },
];

export function HeroTerminal() {
  const [completed, setCompleted] = useState<Line[]>([]);
  const [current, setCurrent] = useState<{ line: Line; buf: string } | null>(null);

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];
    const schedule = (fn: () => void, ms: number) => {
      timers.push(setTimeout(fn, ms));
    };

    function typeLine(index: number, onDone: () => void) {
      const line = LINES[index];
      let i = 0;
      let buf = "";
      function tick() {
        if (i >= line.html.length) {
          setCompleted((prev) => [...prev, line]);
          setCurrent(null);
          schedule(onDone, line.ok ? 1600 : 260);
          return;
        }
        if (line.html[i] === "<") {
          const j = line.html.indexOf(">", i);
          buf += line.html.slice(i, j + 1);
          i = j + 1;
        } else {
          buf += line.html[i];
          i++;
        }
        setCurrent({ line, buf });
        schedule(tick, 14);
      }
      schedule(tick, 14);
    }

    function runTerm(k: number) {
      if (k === 0) setCompleted([]);
      if (k >= LINES.length) {
        schedule(() => runTerm(0), 2600);
        return;
      }
      typeLine(k, () => runTerm(k + 1));
    }

    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
      const raf = requestAnimationFrame(() => {
        setCompleted(LINES);
        setCurrent(null);
      });
      return () => cancelAnimationFrame(raf);
    }

    runTerm(0);
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="term" id="term">
      <div className="bar">
        <i style={{ background: "#ff5f56" }} />
        <i style={{ background: "#ffbd2e" }} />
        <i style={{ background: "#27c93f" }} />
        <span style={{ marginLeft: 8 }}>quote-agent · your agency</span>
        <span className="dotpulse" />
      </div>
      <div className="body" id="termbody">
        {completed.map((line, idx) => (
          <div className={`tline show${line.ok ? " ok" : ""}`} key={idx}>
            <span className="tt">{line.t}</span>
            <span className="arrow">{line.a ? "agent →" : "•"}</span>
            <span className="c" dangerouslySetInnerHTML={{ __html: line.html }} />
          </div>
        ))}
        {current && (
          <div className={`tline show${current.line.ok ? " ok" : ""}`}>
            <span className="tt">{current.line.t}</span>
            <span className="arrow">{current.line.a ? "agent →" : "•"}</span>
            <span className="c">
              <span dangerouslySetInnerHTML={{ __html: current.buf }} />
              <span className="caret" />
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
