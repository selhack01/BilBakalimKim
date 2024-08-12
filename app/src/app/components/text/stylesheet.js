import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme) => ({
  text: {
    fontSize: theme.typography.header2.fontSize,
    backgroundColor: "transparent",
    color: theme.colors.primary,
    fontFamily: "CustomFont2",
    textAlign: "start",
    width: "100%",
  },
}));

export default useStyles;
