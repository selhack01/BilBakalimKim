import React from "react";
import useStyles from "./stylesheet";
import LoginPage from "./page/loginPage";
import { LanguageProvider } from "./context/languageContext";
import { ThemeProvider } from "./context/index";

const App = () => {
  const classes = useStyles();

  return (
    <LanguageProvider className={classes.app}>
      <ThemeProvider>
        <LoginPage/>
      </ThemeProvider>
    </LanguageProvider>
  );
};

export default App;
