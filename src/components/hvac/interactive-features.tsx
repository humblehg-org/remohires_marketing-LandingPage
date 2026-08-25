"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { splitIntoParagraphs } from "@/lib/text";

export interface InteractiveFeature {
  icon: ReactNode;
  title: string;
  body: string;
}

export interface FeatureCategory {
  number: string;
  title: string;
  startIndex: number;
}

export function InteractiveFeatures({
  features,
  categories,
}: {
  features: InteractiveFeature[];
  categories?: FeatureCategory[];
}) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(
    () => typeof window !== "undefined" && !("IntersectionObserver" in window),
  );
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Reveal is a one-shot trigger fired the first time the section scrolls
  // into view, not a continuous function of scroll position.
  useEffect(() => {
    const el = sectionRef.current;
    if (!el || !("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  function toggle(index: number) {
    setOpenIndex((current) => (current === index ? null : index));
  }

  return (
    <div ref={sectionRef} className="wrap py-10">
      <div
        className={`mx-auto flex w-full max-w-3xl flex-col gap-3 transition-all duration-700 ease-out ${
          visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
        }`}
      >
        {features.map((feature, i) => {
          const open = openIndex === i;
          const category = categories?.find((c) => c.startIndex === i);

          return (
            <div key={feature.title}>
              {category && (
                <div className={i === 0 ? "mb-6" : "mb-6 mt-8"}>
                  <span className="eyebrow text-[11px]">{category.number}</span>
                  <h3 className="mt-2 text-[19px] font-black text-navy">
                    {category.title}
                  </h3>
                </div>
              )}
              <div
                className={`overflow-hidden rounded-2xl border transition-colors duration-300 ${
                  open ? "border-navy bg-white shadow-lg" : "border-line bg-white"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(i)}
                  aria-expanded={open}
                  className="flex w-full items-center gap-4 p-5 text-left"
                >
                  <span
                    className={`h-6 w-6 shrink-0 [&>svg]:h-full [&>svg]:w-full ${
                      open ? "text-navy" : "text-blue"
                    }`}
                  >
                    {feature.icon}
                  </span>
                  <h3 className="flex-1 text-base leading-snug text-ink sm:text-lg md:font-bold">
                    {feature.title}
                  </h3>
                  <span
                    className={`grid h-7 w-7 shrink-0 place-items-center rounded-full border text-base font-semibold transition-transform duration-300 ${
                      open
                        ? "rotate-180 border-navy text-navy"
                        : "border-line text-ink-soft"
                    }`}
                  >
                    {open ? "–" : "+"}
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-500 ease-out ${
                    open
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 pb-6 pl-[3.75rem] text-base leading-relaxed text-ink-soft sm:pl-16">
                      {splitIntoParagraphs(feature.body).map((paragraph, idx) => (
                        <p key={idx} className="mb-3 last:mb-0">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
