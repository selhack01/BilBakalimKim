import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme) => ({
  header: {
    textShadow: "4px 4px 4px rgba(0, 0, 0, 0.25)",
    fontSize: theme.typography.header1.fontSize,
    backgroundColor: "transparent",
    color: theme.colors.primary,
    fontFamily: "CustomFont1",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    width: "100%",
  },
}));

export default useStyles;
