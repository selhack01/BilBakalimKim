import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  button: {},
  en: {
    backgroundImage: `url('assets/image/Flag_of_the_United_Kingdom.png')`,
    boxShadow: "4px 4px 4px rgba(0, 0, 0, 0.25)",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    height: "50px",
    border: "none",
    width: "70px",
  },
  tr: {
    backgroundImage: `url('assets/image/Turkey_flag_300.png')`,
    boxShadow: "4px 4px 4px rgba(0, 0, 0, 0.25)",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    height: "50px",
    border: "none",
    width: "70px",
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
  flag: {
    height: "100%",
  },
});

export default useStyles;
