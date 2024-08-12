import React from "react";
import useStyles from "./stylesheet";
import { LanguageProvider } from "./context/languageContext";
import { ThemeProvider } from "./context/index";
import Navigation from "./navigation";

const App = () => {
  const classes = useStyles();

  return (
    <LanguageProvider className={classes.app}>
      <ThemeProvider>
        <Navigation/>
      </ThemeProvider>
    </LanguageProvider>
  );
};

export default App;
