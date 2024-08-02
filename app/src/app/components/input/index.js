import useStyles from "./stylesheet";
// import {useContext} from "react";
// import ThemeContext from "../../context/Context";

const Input = ({ children }) => {
  const classes = useStyles();
  // const { theme} = useContext(ThemeContext);

  return (
    <div className={classes.container}>
      <label className={classes.label}>{children}</label>
      <input type="text" className={classes.input} />
    </div>
  );
};

export default Input;
