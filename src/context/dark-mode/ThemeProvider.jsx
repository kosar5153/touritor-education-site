import React, { useState } from "react";
import { useEffect } from "react";
import { ThemeState } from "./ThemeState";

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState();

  useEffect(() => {
    const strProvider = localStorage.getItem("theme");
    setTheme(strProvider);
    console.log("setTheme", theme);
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", theme);
    } else if (theme === "light") {
      document.documentElement.classList.add("light");
      localStorage.setItem("theme", theme);
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");

      localStorage.setItem("theme", theme);
    } else if (theme === "light") {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");

      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  const handelThemeSwitch = () => {
    setTheme((prevState) => (prevState === "dark" ? "light" : "dark"));
    console.log("theme", theme);
    localStorage.setItem("theme", theme);
  };

  return (
    <ThemeState.Provider value={{ theme, handelThemeSwitch }}>
      {children}
    </ThemeState.Provider>
  );
};

export default ThemeProvider;
