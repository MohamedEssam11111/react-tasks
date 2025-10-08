import React, { createContext, useMemo, useState } from "react";

export const ThemeContext = createContext({
  theme: "light",
  themeToggle: () => {},
});

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const value = useMemo(
    () => ({
      theme,
      themeToggle: () => setTheme((t) => (t === "light" ? "dark" : "light")),
    }),
    [theme]
  );
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
