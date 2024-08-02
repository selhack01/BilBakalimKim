import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
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
    fontFamily: "CustomFont2",
    fontSize: "16px",
    width: "100%",
  },
  input: {
    border: "1px solid #1A1C1A",
    fontFamily: "CustomFont2",
    color: "#1a1c1a",
    fontSize: "14px",
    width: "300px",
    padding: "8px",
  }
});

export default useStyles;
