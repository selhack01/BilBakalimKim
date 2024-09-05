import { useTheme } from "../../context/index";
import useStyles from "./stylesheet";

const Input = ({ title, name, type = "text", value, onChange }) => {
  const { theme } = useTheme();
  const classes = useStyles({ theme });

  return (
    <div className={classes.container}>
      <label className={classes.label} htmlFor={name}>{title}</label>
      <input
        className={classes.input}
        onChange={onChange}
        value={value}
        name={name}
        type={type}
      />
    </div>
  );
};

export default Input;
