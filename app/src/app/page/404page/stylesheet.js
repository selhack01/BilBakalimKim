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
  contextSection: {
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
}));

export default useStyles;
