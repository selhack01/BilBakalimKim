import useStyles from "./stylesheet";
import { useTheme } from "../../context/index";
import { useState } from "react";

const DefaultButton = ({ children ,style }) => {
  const { theme } = useTheme();
  const classes = useStyles({ theme });
  const [isClicked, setIsClicked] = useState(false);

  const clicked = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 300);
  };

  const clickedClass = isClicked ? classes.clicked : "";

  return (
    <div style={style} className={classes.divulan}>
      <button onClick={clicked} className={`${classes.button} ${clickedClass}`}>
        {children}
      </button>
    </div>
  );
};

export default DefaultButton;
