"use client";

import { useEffect, useRef, useState } from "react";

export function WhySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    function measure() {
      ticking = false;
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const scrollable = rect.height - window.innerHeight;
      const raw = scrollable > 0 ? -rect.top / scrollable : 0;
      setProgress(Math.min(1, Math.max(0, raw)));
    }

    function onScroll() {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(measure);
      }
    }

    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // 0%-30% of the scroll track: heading un-blurs and scales up to full size.
  const headingProgress = Math.min(1, progress / 0.3);
  // 30%-60%, starting only once the heading is at 100% scale/clarity: paragraph 1 fades in.
  const para1Progress = Math.max(0, Math.min(1, (progress - 0.3) / 0.3));
  // 60%-90%, starting only once paragraph 1 is fully in: paragraph 2 fades in.
  const para2Progress = Math.max(0, Math.min(1, (progress - 0.6) / 0.3));
  // 90%-100%: everything stays fully visible while the track finishes scrolling past.

  const headingScale = 0.75 + headingProgress * 0.25;
  const headingBlur = (1 - headingProgress) * 14;
  const headingOpacity = Math.min(1, headingProgress * 1.6);

  return (
    <section id="why" ref={sectionRef} className="why-scroll">
      <div className="why-pin">
        <div className="wrap">
          <div className="why-copy mx-auto flex flex-col items-center text-center">
            <span className="eyebrow" style={{ opacity: headingOpacity }}>
              Why $49
            </span>
            <h2
              style={{
                transform: `scale(${headingScale})`,
                filter: `blur(${headingBlur}px)`,
                opacity: headingOpacity,
              }}
            >
              We Pay Their Salary. You Pay $49.
            </h2>
            <p
              style={{
                opacity: para1Progress,
                transform: `translateY(${(1 - para1Progress) * 16}px)`,
              }}
            >
              Two weeks of a full-time specialist is eighty hours of work. We
              charge $49 for it and cover the rest, because it is cheaper than
              ads, discovery calls, and proposals that go nowhere.
            </p>
            <p
              style={{
                opacity: para2Progress,
                transform: `translateY(${(1 - para2Progress) * 16}px)`,
              }}
            >
              Your specialist is based in Indonesia and works your hours,
              which is why a dedicated full-time person costs a fraction of a
              local hire. They are not shared with any other shop. After two
              weeks it is from $450 a month, month to month, and only if you
              choose to continue.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
