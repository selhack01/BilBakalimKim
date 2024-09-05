// stylesheet.js
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme) => ({
  switcher: {
    borderBottom: `3px solid ${theme.colors.primary}`,
    backgroundColor: "transparent",
    position: "relative",
    alignItems: "center",
    overflow: "hidden",
    display: "flex",
    width: "100%",
  },
  switcherButton: {
    fontFamily: theme.typography.header2.fontFamily,
    fontSize: theme.typography.text2.fontSize,
    color: theme.colors.primary,
    transition: "color 0.3s",
    padding: "10px 20px",
    textAlign: "center",
    cursor: "pointer",
    flex: 1,
  },
  active: {
    color: theme.colors.secondary,
    zIndex: 1,
  },
  toggle: {
    backgroundColor: theme.colors.primary,
    transition: "transform 0.3s",
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
}));

export default useStyles;
