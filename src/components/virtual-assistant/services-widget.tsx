"use client";

import { useState, type ReactNode } from "react";

export interface ServiceItem {
  icon: ReactNode;
  title: string;
  body: string;
}

export interface ServiceCategory {
  number: string;
  title: string;
  items: ServiceItem[];
}

/**
 * Desktop tab/list/detail widget (>1000px, hidden below that via CSS). The original
 * static HTML built this by reading a hidden "source of truth" block with JS, so it
 * would still render without JavaScript. In a Next.js app the equivalent no-JS-safe
 * approach is simpler: both this widget and the mobile static cards (rendered in
 * page.tsx) come from the same `categories` data and are both present in the
 * server-rendered HTML; CSS alone decides which is visible at a given width.
 */
export function ServicesWidget({ categories }: { categories: ServiceCategory[] }) {
  const [activeCat, setActiveCat] = useState(0);
  const [activeItem, setActiveItem] = useState(0);

  const category = categories[activeCat];
  const item = category.items[activeItem];

  return (
    <div className="svc-widget" id="svc-widget">
      <div className="svc-tabs" role="tablist" aria-label="Service categories" id="svc-tabs">
        {categories.map((cat, i) => (
          <button
            key={cat.title}
            type="button"
            className="svc-tab"
            role="tab"
            aria-selected={i === activeCat}
            id={`svc-tab-${i}`}
            aria-controls="svc-panel"
            onClick={() => {
              if (i === activeCat) return;
              setActiveCat(i);
              setActiveItem(0);
            }}
          >
            <span className="num">{cat.number}</span>
            {cat.title}
          </button>
        ))}
      </div>
      <div className="svc-panel-grid" id="svc-panel" role="tabpanel" aria-label="Service details">
        <div className="svc-list" id="svc-list" aria-label="Service items">
          {category.items.map((it, i) => (
            <button
              key={it.title}
              type="button"
              className="svc-item-btn"
              aria-current={i === activeItem}
              id={`svc-item-${i}`}
              onClick={() => setActiveItem(i)}
            >
              <span className="ic" aria-hidden="true">
                {it.icon}
              </span>
              {it.title}
            </button>
          ))}
        </div>
        <div className="svc-detail" id="svc-detail">
          <span className="ic" aria-hidden="true">
            {item.icon}
          </span>
          <h3>{item.title}</h3>
          <p>{item.body}</p>
        </div>
      </div>
    </div>
  );
}
