import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  button: {
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    border: "none",
    height: "50px",
    width: "70px",
  },
  image: {
    filter: "invert(40%)",
    height: "50px",
    width: "50px",
  }
});

export default useStyles;
