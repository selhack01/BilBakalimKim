import useStyles from "./stylesheet";
import { useTheme } from "../../context/index";
import { useState } from "react";

const DefaultButton = ({ children }) => {
  const { theme } = useTheme();
  const classes = useStyles({ theme });
  const [isClicked, setIsClicked] = useState(false);

  const clicked = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 300);
  };

  const clickedClass = isClicked ? classes.clicked : "";

  return (
    <div>
      <button onClick={clicked} className={`${classes.button} ${clickedClass}`}>
        {children}
      </button>
    </div>
  );
};

export default DefaultButton;
