import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  light: {
    backgroundImage: `url('assets/image/white.jpg')`,
    backgroundRepeat: "no-repeat",
    justifyContent: "center",
    flexDirection: "column",
    backgroundSize: "cover",
    alignItems: "center",
    height: "100vh",
    display: "flex",
    gap: "60px",
    margin: 0,
  },
  dark: {
    backgroundImage: `url('assets/image/black.jpg')`,
    backgroundRepeat: "no-repeat",
    justifyContent: "center",
    backgroundSize: "cover",
    flexDirection: "column",
    alignItems: "center",
    display: "flex",
    height: "100vh",
    gap: "60px",
    margin: 0,
  },
  contextArea: {
    justifyContent: "end",
    alignItems: "center",
    flexDirection: "row",
    position: "fixed",
    display: "flex",
    right: "40px",
    width: "100%",
    top: "40px",
    gap: "20px",
  },
  accountArea: {
    boxShadow: "4px 4px 4px rgba(0, 0, 0, 0.25)",
    border: "1px solid #1A1C1A",
    backgroundColor: "#ECECEC",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    padding: "10px",
    display: "flex",
  },
});

export default useStyles;
