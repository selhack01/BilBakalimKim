import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme) => ({
  button: {
    borderBottom: `4px solid ${theme.colors.primary}`,
    borderRight: `4px solid ${theme.colors.primary}`,
    borderLeft: `1px solid ${theme.colors.primary}`,
    borderTop: `1px solid ${theme.colors.primary}`,
    fontFamily: theme.typography.text2.fontFamily,
    fontSize: theme.typography.text3.fontSize,
    backgroundColor: theme.colors.input,
    color: theme.colors.primary,
    padding: "10px 30px",
    height: "100%",
  },
  clicked: {
    animation: "$clickEffect 0.3s ease",
  },
  "@keyframes clickEffect": {
    "0%": {
      transform: "scale(1)",
    },
    "50%": {
      transform: "scale(0.9)",
    },
    "100%": {
      transform: "scale(1)",
    },
  },
}));

export default useStyles;
