"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "theme:chatgpt-automation";
const ROOT_ID = "chatgpt-automation-page";

/**
 * Client-only re-implementation of the source's dark/light toggle. The
 * source ran a synchronous inline `<script>` in `<head>` (before paint) to
 * avoid a flash of the wrong theme; this codebase never uses inline
 * scripts, so a returning dark-mode visitor may see a brief flash of the
 * light theme on first paint here — an accepted, documented trade-off.
 * Scoped to this page's own root wrapper (`data-theme`), never the global
 * `<html>` element, so it can't affect any other route.
 */
export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    let initial: "light" | "dark" = "light";
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === "dark" || stored === "light") {
        initial = stored;
      } else if (window.matchMedia?.("(prefers-color-scheme: dark)").matches) {
        initial = "dark";
      }
    } catch {
      // Theme preference is a nicety, never worth breaking the page over.
    }
    // One-time sync from an external system (localStorage / OS preference)
    // on mount — there's no way to know this before the client can read it.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setTheme(initial);
    document.getElementById(ROOT_ID)?.setAttribute("data-theme", initial);
  }, []);

  function toggle() {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.getElementById(ROOT_ID)?.setAttribute("data-theme", next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Ignore — persistence is best-effort only.
    }
  }

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      title="Toggle theme"
      onClick={toggle}
    >
      {theme === "dark" ? (
        <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ) : (
        <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      )}
    </button>
  );
}
