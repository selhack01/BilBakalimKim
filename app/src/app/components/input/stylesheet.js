// stylesheet.js
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme) => ({
  container: {
    backgroundColor: "transparent",
    flexDirection: "column",
    textAlign: "left",
    display: "flex",
    padding: "10px",
    width: "100%",
    gap: "10px",
  },
  label: {
    fontFamily: theme.typography.text2.fontFamily,
    fontSize: theme.typography.text3.fontSize,
    color: theme.colors.primary,
    width: "100%",
  },
  input: {
    fontFamily: theme.typography.text2.fontFamily,
    border: `1px solid ${theme.colors.primary}`,
    fontSize: theme.typography.text4.fontSize,
    backgroundColor: theme.colors.input,
    color: theme.colors.primary,
    width: "300px",
    padding: "8px",
  },
}));

export default useStyles;
