import useStyles from "./stylsheet";
import { useTranslation } from "../../context/languageContext";
import { useTheme } from "../../context/index";
import { DefaultButton, Header } from "../../components";

const MainPage = () => {
  const { theme } = useTheme();
  const classes = useStyles({ theme });
  const { t } = useTranslation();

  return (
    <div className={classes.container}>
      <Header>{t("guess-who")}</Header>
      <div className={classes.mainSection}>
        <div>
            <Header style={{fontSize: "8px"}}>{t("high-score")}</Header>
        </div>
        <DefaultButton>{t("play")}</DefaultButton>
      </div>
    </div>
  );
};

export default MainPage;
