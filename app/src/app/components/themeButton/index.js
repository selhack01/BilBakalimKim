import { useTheme } from "../../context/index";
import useStyles from "./stylesheet";
import React from "react";

const ThemeButton = () => {
  const { themeName, switchTheme } = useTheme();
  const classes = useStyles();

  const handleSwitchTheme = () => {
    const newTheme = themeName === "light" ? "dark" : "light";
    switchTheme(newTheme);
  };

  return (
    <div>
      <button className={classes.button} onClick={handleSwitchTheme}>
        <img
          src="assets/image/noun-sun-moon-674345.png"
          alt="Switch Theme"
          className={classes.image}
        />
      </button>
    </div>
  );
};

export default ThemeButton;
