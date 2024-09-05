import { useTheme } from "../../context/index";
import useStyles from "./stylesheet.js";

const Text = ({ children }, fontSize) => {
  const { theme } = useTheme();
  const classes = useStyles({ theme });

  return (
    <span 
    style={fontSize} 
    className={classes.text}>
      {children}
    </span>
  );
};

export default Text;
