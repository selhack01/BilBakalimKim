import useStyles from "./stylesheet";

const ThemeButton = () => {
  const classes = useStyles();
  return (
    <div>
      <button className={classes.button}>
        <img
          src="assets/image/noun-sun-moon-674345.png"
          alt=""
          className={classes.image}/>
      </button>
    </div>
  );
};

export default ThemeButton;
