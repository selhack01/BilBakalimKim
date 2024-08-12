import useStyles from "./stylesheet";
import React, { useState } from "react";
import { useTranslation } from "../../context/languageContext";
import { useTheme } from "../../context/index";

const Switcher = ({ onSwitch }) => {
  const { theme } = useTheme();
  const classes = useStyles({ theme });
  const { t } = useTranslation();
  const [isSignIn, setIsSignIn] = useState(true); // isSingIn yerine isSignIn

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
