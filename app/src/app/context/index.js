import React, { createContext, useState, useContext, useEffect } from "react";
import themes from "../theme/variants/index";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [themeName, setThemeName] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme : "light";
  });

  const switchTheme = (theme) => {
    setThemeName(theme);
  };

  useEffect(() => {
    localStorage.setItem("theme", themeName);
  }, [themeName]);

  return (
    <ThemeContext.Provider
      value={{ theme: themes[themeName], themeName, switchTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};
