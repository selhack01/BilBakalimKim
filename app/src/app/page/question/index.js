import { useTranslation } from "../../context/languageContext";
import { Header, DefaultButton, Text } from "../../components";
import { useUser } from "../../context/userContext";
import { useTheme } from "../../context/index";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import useStyles from "./stylesheet";

const QuestionPage = () => {
  const { theme } = useTheme();
  const classes = useStyles({ theme });
  
  const { user, logout } = useUser();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const answerIndis = [0, 1, 2, 3];

  let shuffledNumbers = shuffleArray(answerIndis);
  let [colors, setColors] = useState([
    theme.colors.input,
    theme.colors.input,
    theme.colors.input,
    theme.colors.input,
  ]);

  const [currentStep, setCurrentStep] = useState(1);
  const [difficultyLevel, setDifficultyLevel] = useState(1);
  const [selectedQuestions, setSelectedQuestions] = useState();
  const [questions, setQuestion] = useState([]);
  const [answers, setAnswers] = useState([]);
  let [score, setScore] = useState(0);

  const fetchQuestion = async () => {
    try {
      if (user?.username) {
        const response = await fetch(`http://localhost:3001/question`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        } else {
          const data = await response.json();
          // console.log("FETCH ATIYOMM");
          setQuestion(data);
        }
      }
    } catch (error) {
      navigate("/*");
      console.log(error);
    }
  };

  useEffect(() => {
    selectQuestion();
  }, [questions]);

  useEffect(() => {
    fetchQuestion();
  }, []);

  useEffect(() => {
    if (selectedQuestions !== undefined) {
      setAnswers([
        selectedQuestions.answers[shuffledNumbers[0]],
        selectedQuestions.answers[shuffledNumbers[1]],
        selectedQuestions.answers[shuffledNumbers[2]],
        selectedQuestions.answers[shuffledNumbers[3]],
      ]);
    }
  }, [selectedQuestions]);

  const selectQuestion = () => {
    setColors([
      theme.colors.input,
      theme.colors.input,
      theme.colors.input,
      theme.colors.input,
    ]);

    if (currentStep === 10) {
      setCurrentStep(0);
      navigate("/main", { state: { score } });
    }

    if (currentStep < 10) {
      const newQuestion = dataFilter(questions, difficultyLevel);
      setSelectedQuestions(newQuestion);
      //  console.log(selectedQuestions, currentStep);

      if (selectedQuestions !== undefined) {
        setCurrentStep(currentStep + 1);
        shuffledNumbers = shuffleArray(answerIndis);
      }

      if ((currentStep + 1) % 3 === 0 && difficultyLevel < 3) {
        setDifficultyLevel(difficultyLevel + 1);
      }
    }
  };

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  const dataFilter = (questions, difficultyLevel) => {
    if (questions) {
      const filteredData = questions.filter(
        (item) => item.difficulty === difficultyLevel.toString()
      );
      const randomIndex = Math.floor(Math.random() * filteredData.length);

      if (currentStep === 0) {
        setSelectedQuestions(filteredData[randomIndex]);
      }

      return filteredData[randomIndex];
    } else {
      return [];
    }
  };

  const handleExit = () => {
    logout();
    navigate("/");
  };

  const handleClick = (selectedAnswer) => {
    if (selectedQuestions.true_answer == selectedAnswer) {
      answers.forEach((answer, index) => {
        if (selectedAnswer == answer) {
          setColors((prevColors) => {
            const newColors = [...prevColors];
            newColors[index] = theme.colors.succses;
            return newColors;
          });
        }
      });

      if (selectedQuestions.difficulty == 1) {
        setScore(score + 75);
      } else if (selectedQuestions.difficulty == 2) {
        setScore(score + 150);
      } else if (selectedQuestions.difficulty == 3) {
        setScore(score + 225);
      } else {
        setScore(score + 300);
      }
    } else {
      answers.forEach((answer, index) => {
        if (selectedAnswer == answer) {
          setColors((prevColors) => {
            const newColors = [...prevColors];
            newColors[index] = theme.colors.wrong;
            // console.log(newColors);
            return newColors;
          });
        }
      });
    }

    setTimeout(selectQuestion, 250);
  };

  return (
    <div className={classes.container}>
      <Header>{t("guess-who")} </Header>
      <div className={classes.score}>
        {t("your-score")}:{score}
      </div>
      <div className={classes.questionSection}>
        <div className={classes.questionArea}>
          <Text>
            {currentStep} :{" "}
            {selectedQuestions ? selectedQuestions.question : null}
          </Text>
        </div>
        <div className={classes.ansvers}>
          <div className={classes.options}>
            <DefaultButton
              onClick={() => handleClick(answers[0])}
              backgroundColor={colors[0]}
              style={{ width: "100%" }}
              type="submit"
            >
              A. {selectedQuestions ? answers[0] : null}
            </DefaultButton>
            <DefaultButton
              onClick={() => handleClick(answers[1])}
              backgroundColor={colors[1]}
              style={{ width: "100%" }}
              type="submit"
            >
              B. {selectedQuestions ? answers[1] : null}
            </DefaultButton>
          </div>
          <div className={classes.options}>
            <DefaultButton
              onClick={() => handleClick(answers[2])}
              backgroundColor={colors[2]}
              style={{ width: "100%" }}
              type="submit"
            >
              C. {selectedQuestions ? answers[2] : null}
            </DefaultButton>
            <DefaultButton
              onClick={() => handleClick(answers[3])}
              backgroundColor={colors[3]}
              style={{ width: "100%" }}
              type="submit"
            >
              D. {selectedQuestions ? answers[3] : null}
            </DefaultButton>
          </div>
        </div>
      </div>

      <div className={classes.exit}>
        <DefaultButton onClick={handleExit}>{t("exit")}</DefaultButton>
      </div>
    </div>
  );
};

export default QuestionPage;
