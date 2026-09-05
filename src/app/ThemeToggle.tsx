"use client";

import { useEffect, useState } from "react";

function initialTheme(): "light" | "dark" {
  if (typeof window === "undefined") return "light";
  const stored = window.localStorage.getItem("theme");
  if (stored === "light" || stored === "dark") return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">(initialTheme);

  useEffect(() => {
    if (document.documentElement.classList.contains("dark") !== (theme === "dark")) {
      document.documentElement.classList.toggle("dark", theme === "dark");
    }
    document.documentElement.style.colorScheme = theme;
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button
      type="button"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
      title={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-edge text-lg transition-colors hover:bg-pill dark:text-foreground"
    >
      {theme === "dark" ? "☀️" : "🌙"}
    </button>
  );
}