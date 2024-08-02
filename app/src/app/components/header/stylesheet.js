import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  light: {
    textShadow: "4px 4px 4px rgba(0, 0, 0, 0.25)",
    fontFamily: "CustomFont1",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    fontSize: "64px",
    color: "#1A1C1A",
    width: "100%",
  },
  dark: {
    textShadow: "4px 4px 4px rgba(0, 0, 0, 0.25)",
    fontFamily: "CustomFont1",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    fontSize: "64px",
    color: "white",
    width: "100%",
  }
});

export default useStyles;
