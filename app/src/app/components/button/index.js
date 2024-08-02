import useStyles from "./stylesheet";

const DefaultButton = ({ children }) => {
  const classes = useStyles();

  return (
    <div>
      <button 
      className={classes.light}>
        {children}
      </button>
    </div>
  );
};

export default DefaultButton;
