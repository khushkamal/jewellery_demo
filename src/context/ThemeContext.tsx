"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type ThemeType = "noir" | "ivory" | "emerald";

interface ThemeContextType {
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Default to Royal Noir
  const [theme, setThemeState] = useState<ThemeType>("noir");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("aurelia_theme") as ThemeType;
      if (saved && (saved === "noir" || saved === "ivory" || saved === "emerald")) {
        setThemeState(saved);
        applyTheme(saved);
      } else {
        applyTheme("noir");
      }
    } catch {
      applyTheme("noir");
    }
  }, []);

  const applyTheme = (t: ThemeType) => {
    const root = document.documentElement;
    if (t === "noir") {
      root.removeAttribute("data-theme");
    } else {
      root.setAttribute("data-theme", t);
    }
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
      noir: "ivory",
      ivory: "emerald",
      emerald: "noir",
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
      theme: "noir" as ThemeType,
      setTheme: () => {},
      toggleTheme: () => {},
    };
  }
  return context;
}
