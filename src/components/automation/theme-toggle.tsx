"use client";

import styles from "@/app/automation/page.module.css";

const STORAGE_KEY = "theme:automation";
const ROOT_ID = "automation-page";

function applyInitialTheme() {
  let initial: "dark" | "light" = "light";
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "dark" || stored === "light") {
      initial = stored;
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      initial = "dark";
    }
  } catch {
    // ignore
  }
  document.getElementById(ROOT_ID)?.setAttribute("data-theme", initial);
}

/**
 * Client-only dark/light toggle for this page only — never touches
 * <html>. Both icons always render; page.module.css shows/hides them off
 * the root wrapper's `data-theme`, so there's no React state to
 * synchronize on mount (the original inline head-script does this before
 * paint — this codebase never ships an inline script, so a returning
 * dark-mode visitor sees a brief flash of the light theme instead).
 */
export function ThemeToggle() {
  function toggle() {
    const root = document.getElementById(ROOT_ID);
    const next = root?.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root?.setAttribute("data-theme", next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // ignore
    }
  }

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      title="Toggle theme"
      onClick={toggle}
      ref={(node) => {
        if (node) applyInitialTheme();
      }}
    >
      <svg className={styles.themeIconMoon} width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
      <svg className={styles.themeIconSun} width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
        />
      </svg>
    </button>
  );
}
