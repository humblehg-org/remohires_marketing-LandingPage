"use client";

import { useState } from "react";
import { IconChevronDown } from "./icons";

export interface FaqEntry {
  q: string;
  a: string;
}

export function Faq({ items }: { items: FaqEntry[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="faq-wrap">
      {items.map((item, i) => {
        const open = i === openIndex;
        return (
          <div className={`faq-item${open ? " open" : ""}`} key={item.q}>
            <button
              type="button"
              className="faq-trigger"
              aria-expanded={open}
              onClick={() => setOpenIndex(open ? null : i)}
            >
              <span>{item.q}</span>
              <IconChevronDown />
            </button>
            <div className="faq-content">
              <div className="faq-content-inner">
                <p>{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
