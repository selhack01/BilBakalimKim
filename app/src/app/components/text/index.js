import useStyles from "./stylesheet.js";
import { useTheme } from "../../context/index";

const Text = ({children}) => {
  const { theme } = useTheme();
  const classes = useStyles({ theme });


  return <span className={classes.text}>{children}</span>;
};

export default Text;
