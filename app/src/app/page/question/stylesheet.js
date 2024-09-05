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
  questionSection: {
    boxShadow: "4px 4px 4px rgba(0, 0, 0, 0.25)",
    border: `1px solid ${theme.colors.primary}`,
    backgroundColor: theme.colors.gray,
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    padding: "10px",
    display: "flex",
    width: "90%",
  },
  score: {
    color: theme.colors.primary,
    fontFamily: "Customfont1",
    justifyContent: "end",
    flexDirection: "row",
    alignItems: "end",
    fontSize: "36px",
    display: "flex",
    width: "90%",
  },
  questionArea: {
    display: "flex",
    padding: "10px",
    fontSize:'25px',
    width: "100%",
    height:100,
  },
  ansvers: {
    flexDirection: "column",
    display: "flex",
    padding: "10px",
    width: "100%",
    gap: "10px",
  },
  options: {
    justifyContent:"space-between",
    display: "flex",
    width:"100%",
    gap: "10px",
  }, 
  exit:{
    justifyContent: "end",
    alignItems: "end",
    display: "flex",
    width: "90%",
  },
  
  "@media (max-width: 1024px)": {
    options: {
      flexDirection:"column"
    }
  },
}));

export default useStyles;
