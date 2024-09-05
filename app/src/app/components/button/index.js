import { useTheme } from "../../context/index";
import useStyles from "./stylesheet";
import { useState } from "react";

const DefaultButton = ({ children, style, font, onClick, backgroundColor }) => {
  const { theme } = useTheme();
  const classes = useStyles({ theme });
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = (e) => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 300);
    
    if (onClick) {
      onClick(e);
    }
  };

  const clickedClass = isClicked ? classes.clicked : "";

  return (
    <div style={style} className={classes.divulan}>
      <button
        onClick={handleClick}
        className={`${classes.button} ${clickedClass}`}
        style={{font , backgroundColor: backgroundColor }}
      >
        {children}
      </button>
    </div>
  );
};

export default DefaultButton;
