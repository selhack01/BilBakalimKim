import useStyles from "./stylesheet";
import { useTranslation } from "../../context/languageContext";
import { useTheme } from "../../context/index";

const Header = () => {
  const { theme } = useTheme();
  const classes = useStyles({ theme });
  const { t } = useTranslation();

  return <span className={classes.header}>{t("guess-who")}</span>;
};

export default Header;
