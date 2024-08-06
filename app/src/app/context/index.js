import React, { createContext, useState, useContext } from "react";
import themes from "../theme/variants/index";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [themeName, setThemeName] = useState("light");

  const switchTheme = (theme) => {
    setThemeName(theme);
  };

  return (
    <ThemeContext.Provider
      value={{ theme: themes[themeName], themeName, switchTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};
