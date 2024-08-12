import useStyles from "./stylesheet";
import { useTranslation } from "../../context/languageContext";
import { useTheme } from "../../context/index";
import { Header, DefaultButton, Text } from "../../components";

const QuestionPage = () => {
  const { theme } = useTheme();
  const classes = useStyles({ theme });
  const { t } = useTranslation();

  return (
    <div className={classes.container}>
      <Header>{t("guess-who")}</Header>
      <div className={classes.score}>{t("your-score")}:200</div>
      <div className={classes.questionSection}>
        <div className={classes.question}>
          <Text>Deneme</Text>
        </div>
        <div className={classes.ansvers}>
          <div className={classes.options}>
            <DefaultButton type="submit" style={{width:'100%'}}>A. bilmem ne</DefaultButton>
            <DefaultButton type="submit" style={{width:'100%'}}>B. bilmem ne</DefaultButton>
          </div>
          <div className={classes.options}>
            <DefaultButton type="submit" style={{width:'100%'}}>C. bilmem ne</DefaultButton>
            <DefaultButton type="submit" style={{width:'100%'}}>D. bilmem ne</DefaultButton>
          </div>
        </div>
      </div>
      <div className={classes.exit}>
        <DefaultButton>{t("exit")}</DefaultButton>
      </div>
    </div>
  );
};

export default QuestionPage;
