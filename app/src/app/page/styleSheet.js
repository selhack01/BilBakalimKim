// stylesheet.js
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme) => ({
  container: {
    backgroundImage: `url('${theme.url.bacgroundImageUrl}')`,
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
    border: `1px solid ${theme.colors.primary}`,
    backgroundColor: theme.colors.gray,
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    padding: "10px",
    display: "flex",
  },
}));

export default useStyles;
