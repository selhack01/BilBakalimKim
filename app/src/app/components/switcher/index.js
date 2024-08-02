import useStyles from "./stylesheet";
import React, { useState } from "react";
import { useTranslation } from "../../context/languageContext";

const Switcher = ({ onSwitch }) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const [isSingIn, setisSingIn] = useState(true);

  const handleSwitch = () => {
    setisSingIn(!isSingIn);
    if (onSwitch) onSwitch(!isSingIn ? "signup" : "login");
  };
  // console.log(isSingIn);
  return (
    <div className={classes.switcher}>
      <div
        className={`${classes.switcherButton} ${
          isSingIn ? classes.active : ""
        }`}
        onClick={handleSwitch}>
        {t("register")}
      </div>
      <div
        className={`${classes.switcherButton} ${
          !isSingIn ? classes.active : ""
        }`}
        onClick={handleSwitch}>
        {t("login")}
      </div>
      <div
        className={`${classes.toggle} ${
          isSingIn ? classes.left : classes.right
        }`}/>
    </div>
  );
};

export default Switcher;
