import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  switcher: {
    borderBottom: "3px solid #000",
    backgroundColor: "transparent",
    position: "relative",
    alignItems: "center",
    overflow: "hidden",
    display: "flex",
    width: "100%",
  },
  switcherButton: {
    fontFamily: "CustomFont1",
    transition: "color 0.3s",
    padding: "10px 20px",
    textAlign: "center",
    cursor: "pointer",
    fontSize: "18px",
    flex: 1,
  },
  active: {
    color: "white",
    zIndex: 1,
  },
  toggle: {
    transition: "transform 0.3s",
    backgroundColor: "#000",
    position: "absolute",
    height: "100%",
    width: "50%",
    zIndex: 0,
  },
  left: {
    transform: "translateX(0%)",
  },
  right: {
    transform: "translateX(100%)",
  },
});

export default useStyles;
