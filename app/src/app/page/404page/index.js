import { useTranslation } from "../../context/languageContext";
import { Header, LanguageButton, ThemeButton } from "../../components";
import { useTheme } from "../../context/index";
import useStyles from "./stylesheet";

const NotFoundPage = () => {
  const { theme } = useTheme();
  const classes = useStyles({ theme });

  const { t } = useTranslation();

  return (
    <div className={classes.container}>
      <div className={classes.contextSection}>
        <ThemeButton />
        <LanguageButton />
      </div>
      <Header>{t("not-found")}</Header>
    </div>
  );
};

export default NotFoundPage;
