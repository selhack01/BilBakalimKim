import React from 'react';
import useStyles from "./stylesheet"; // import ettiğiniz stylesheet doğru olmalı
import { useTheme } from '../../theme/index';

const ThemeButton = () => {
  const { themeName, switchTheme } = useTheme();
  const classes = useStyles();

  const handleSwitchTheme = () => {
    const newTheme = themeName === "light" ? "dark" : "light";
    switchTheme(newTheme);
  };

  return (
    <div>
      <button 
        className={classes.button}
        onClick={handleSwitchTheme}
      >
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