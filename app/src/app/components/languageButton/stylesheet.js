import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
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
  active: {
    boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.50)",
    transition: "transform 0.1s ease-in-out",
    transform: "scale(0.95)",
  },
  flag: {
    height: "100%",
  },
});

export default useStyles;
