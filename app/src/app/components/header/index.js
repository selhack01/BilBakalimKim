import { useTheme } from "../../context/index";
import useStyles from "./stylesheet";

const Header = ({ children, style }) => {
  const { theme } = useTheme();
  const classes = useStyles({ theme });

  return (
    <span 
    style={style} 
    className={classes.header}>
      {children}
    </span>
  );
};

export default Header;
