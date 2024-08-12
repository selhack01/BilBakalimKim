import useStyles from "./stylesheet";
import { useTheme } from "../../context/index";

const Header = ({children , style }) => {
  const { theme } = useTheme();
  const classes = useStyles({ theme });


  return <span style={style} className={classes.header}>{children}</span>;
};

export default Header;
