import useStyles from "./stylesheet";
import { useTranslation } from "../../context/languageContext";
import { useState } from "react";

const LanguageButton = () => {
  const { language, changeLanguage } = useTranslation();
  const [isClicked, setIsClicked] = useState(false);
  const classes = useStyles();

  const toggleLanguage = () => {
    const nextLanguage = language === "en" ? "tr" : "en";
    changeLanguage(nextLanguage);
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 300);
  };

  const buttonClass = language === "en" ? classes.en : classes.tr;
  const clickedClass = isClicked ? classes.clicked : "";

  return (
    <div className={classes.flag}>
      <button
        onClick={toggleLanguage}
        className={`${buttonClass} ${clickedClass}`}
      ></button>
    </div>
  );
};

export default LanguageButton;
