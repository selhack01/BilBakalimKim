import useStyles from "./stylesheet";
import { useTheme } from "../../context/index";

const Input = ({ children }) => {
  const { theme } = useTheme();
  const classes = useStyles({ theme });

  return (
    <div className={classes.container}>
      <label className={classes.label}>{children}</label>
      <input type="text" className={classes.input} />
    </div>
  );
};

export default Input;
