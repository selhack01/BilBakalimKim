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
  mainSection: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },
}));

export default useStyles;
