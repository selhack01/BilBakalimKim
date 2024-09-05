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
    justifyContent: "space-around",
    alignItems: "center",
    display: "flex",
    width: "100%",
    height: "50%",
  },
  hr: {
    color: theme.colors.primary,
    border: "2px solid",
    width: "100%",
  },
  scoreSection: {
    justifyContent: "start",
    flexDirection: "column",
    alignItems: "center",
    display: "flex",
    height: "100%",
    gap: "10px",
  },
  ol: {
    color: theme.colors.primary,
    listStyle: "none",
    width: "100%",
  },
  li: {
    justifyContent: "space-around",
    fontFamily: "Customfont2",
    fontSize: "24px",
    display: "flex",
    width: "100%",
  },
  exit: {
    justifyContent: "end",
    alignItems: "end",
    display: "flex",
    width: "90%",
  },
  playSection: {
    justifyContent: "start",
    flexDirection: "column",
    display: "flex",
    gap: "20px",
  },

  "@media (max-width: 1024px)": {
    container: {
      height: "100%",
    },
    mainSection: {
      flexDirection: "column",
      gap: "40px",
    },
  },
}));

export default useStyles;
