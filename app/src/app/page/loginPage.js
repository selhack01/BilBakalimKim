import useStyles from "./styleSheet";
import { useTranslation } from "../context/languageContext";
import { useTheme } from "../context/index";
import {
  LanguageButton,
  DefaultButton,
  Header,
  ThemeButton,
  Input,
  Switcher,
} from "../components";

const LoginPage = () => {
  const { theme } = useTheme();
  const classes = useStyles({ theme });
  const { t } = useTranslation();

  return (
    <div className={classes.container}>
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
