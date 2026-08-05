"use client";

import { useEffect } from "react";

export function ScrollSpy({ ids }: { ids: string[] }) {
  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;

    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (sections.length === 0) return;

    let current: string | null = null;

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!visible) return;
        const id = visible.target.id;
        if (!id || id === current) return;
        current = id;
        history.replaceState(null, "", `#${id}`);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    );

    sections.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [ids]);

  return null;
}
