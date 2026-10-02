"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type ThemeType = "ivory" | "noir" | "emerald";

interface ThemeContextType {
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Default to Ultra-Premium Light (Ivory & Champagne Gold)
  const [theme, setThemeState] = useState<ThemeType>("ivory");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("aurelia_theme") as ThemeType;
      if (saved && (saved === "noir" || saved === "ivory" || saved === "emerald")) {
        setThemeState(saved);
        applyTheme(saved);
      } else {
        applyTheme("ivory");
      }
    } catch {
      applyTheme("ivory");
    }
  }, []);

  const applyTheme = (_t?: ThemeType) => {
    const root = document.documentElement;
    root.removeAttribute("data-theme");
  };

  const setTheme = (newTheme: ThemeType) => {
    setThemeState(newTheme);
    applyTheme(newTheme);
    try {
      localStorage.setItem("aurelia_theme", newTheme);
    } catch {}
  };

  const toggleTheme = () => {
    const next: Record<ThemeType, ThemeType> = {
      ivory: "noir",
      noir: "emerald",
      emerald: "ivory",
    };
    setTheme(next[theme]);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    return {
      theme: "ivory" as ThemeType,
      setTheme: () => {},
      toggleTheme: () => {},
    };
  }
  return context;
}
