import useStyles from "./styleSheet";
import { useTranslation } from "../context/languageContext";
import {
  LanguageButton,
  DefaultButton,
  Header,
  ThemeButton,
  Input,
  Switcher,
} from "../components";

const LoginPage = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <div className={classes.light}>
      <div className={classes.contextArea}>
        <ThemeButton />
        <LanguageButton />
      </div>
      <Header />
      <form className={classes.accountArea}>
        <Switcher />
        <Input>{t("username")}:</Input>
        <Input>{t("password")}:</Input>
        <Input>{t("password-again")}:</Input>
        <DefaultButton>{t("register")}</DefaultButton>
      </form>
    </div>
  );
};

export default LoginPage;
