import { useTranslation } from "../../context/languageContext";
import { useTheme } from "../../context/index";
import React, { useState } from "react";
import useStyles from "./stylesheet";

const Switcher = ({ onSwitch }) => {
  const [isSignIn, setIsSignIn] = useState(true);
  const { t } = useTranslation();
  
  const { theme } = useTheme();
  const classes = useStyles({ theme });

  const handleSwitch = () => {
    setIsSignIn(!isSignIn);
    if (onSwitch) onSwitch(!isSignIn ? "signup" : "login");
  };

  return (
    <div className={classes.switcher}>
      <div
        className={`${classes.switcherButton} ${
          isSignIn ? classes.active : ""
        }`}
        onClick={handleSwitch}
      >
        {t("register")}
      </div>
      <div
        className={`${classes.switcherButton} ${
          !isSignIn ? classes.active : ""
        }`}
        onClick={handleSwitch}
      >
        {t("login")}
      </div>
      <div
        className={`${classes.toggle} ${
          isSignIn ? classes.left : classes.right
        }`}
      />
    </div>
  );
};

export default Switcher;
