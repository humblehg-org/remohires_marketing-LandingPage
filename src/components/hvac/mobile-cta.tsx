"use client";

import { useEffect, useState } from "react";
import { IconCalendarCheck } from "./icons";

export function MobileCta() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    function onScroll() {
      const y = window.pageYOffset || document.documentElement.scrollTop || 0;
      setShow(y > 560);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={`mcta${show ? " show" : ""}`} id="mcta">
      <a href="#book" className="btn primary">
        <span className="ic">
          <IconCalendarCheck />
        </span>
        Book a free call
      </a>
    </div>
  );
}
