import useStyles from "./stylesheet";
import { useTranslation } from "../../context/languageContext";

const LanguageButton = () => {
  const { language, changeLanguage } = useTranslation();
  const classes = useStyles();

  const toggleLanguage = () => {
    const nextLanguage = language === "en" ? "tr" : "en";
    changeLanguage(nextLanguage);
  };

  return (
    <div className={classes.flag}>
      <button onClick={toggleLanguage} className={classes.tr}></button>
    </div>
  );
};

export default LanguageButton;
