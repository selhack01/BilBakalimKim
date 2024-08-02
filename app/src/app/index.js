import useStyles from "./stylesheet";
import LoginPage from "./page/loginPage";
import { LanguageProvider } from "./context/languageContext";

const App = () => {
  const classes = useStyles();

  return (
    <LanguageProvider className={classes.app}>
      <LoginPage />
    </LanguageProvider>
  );
};

export default App;
