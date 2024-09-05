import { LanguageProvider } from "./context/languageContext";
import { UserProvider } from "./context/userContext";
import { ThemeProvider } from "./context/index";
import Navigation from "./navigation";
import useStyles from "./stylesheet";
import React from "react";

const App = () => {
  const classes = useStyles();

  return (
    <LanguageProvider className={classes.app}>
      <ThemeProvider>
        <UserProvider>
          <Navigation />
        </UserProvider>
      </ThemeProvider>
    </LanguageProvider>
  );
};

export default App;
