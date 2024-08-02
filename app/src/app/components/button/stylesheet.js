import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  light: {     
    borderBottom: "4px solid black",
    borderRight: "4px solid black",
    borderLeft: "1px solid black",
    borderTop: "1px solid black",
    backgroundColor: "#ffffff",
    fontFamily: "CustomFont2",
    padding: "10px 30px",
    fontSize: "16px",
    color: "#1c1c1a",
    height:'100%',
  },
  dark: {
    borderBottom: "4px solid white",
    borderRight: "4px solid white",
    borderLeft: "1px solid white",
    fontFamily: "CustomFont2",
    borderTop: "1px solid white",
    backgroundColor: "#1c1c1a",
    padding: "10px 30px",
    fontSize: "16px",
    color: "white",
    height:'100%',
  },
  active: {
    transition: "transform 0.1s ease-in-out",   
    borderBottom: "2px solid",
    transform: "scale(0.95)",
    borderRight: "2px solid",
    borderLeft: "2px solid",
    borderTop: "2px solid",
  },
});

export default useStyles;
