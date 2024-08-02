import { createUseStyles } from "react-jss";

const customFonts = [
  {
    fontFamily: "CustomFont1",
    src: "url('/assets/fonts/JacquesFrancoisShadow-Regular.ttf')",
  },
  {
    fontFamily: "CustomFont2",
    src: "url('/assets/fonts/Habibi-Regular.ttf')",
  },
];

const useStyles = createUseStyles({
  "@global": {
    "@font-face": customFonts,
    "*": { margin: 0, padding: 0 },

    "html, body": {
      height: "100%",
      width: "100%",
    },
  },
  app: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    height: "100vh",
    width: "100%",
    margin: 0,
  },
});

export default useStyles;