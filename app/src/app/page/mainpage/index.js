import { useTranslation } from "../../context/languageContext";
import { DefaultButton, Header, Text } from "../../components";
import { useNavigate, useLocation } from "react-router-dom";
import { useUser } from "../../context/userContext";
import React, { useState, useEffect } from "react";
import { useTheme } from "../../context/index";
import useStyles from "./stylsheet";

const MainPage = () => {
  const token = localStorage.getItem("token");
  const { theme } = useTheme();
  const classes = useStyles({ theme });

  const { user, logout } = useUser();
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [personalHighScores, setPersonalHighScores] = useState([]);
  const [highScores, setHighScores] = useState([]);

  const { state } = useLocation();
  let { score } = state || {};

  useEffect(() => {
    const fetchHighScores = async () => {
      try {
        const response = await fetch("http://localhost:3001/highscores", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });
        if (!response.ok) {
          throw new Error("burada veriyoo");
        }
        const data = await response.json();
        setHighScores(data);
      } catch (error) {
        alert(error.message);
      }
    };

    const fetchPersonalHighScores = async () => {
      try {
        if (user?.username) {
          const response = await fetch(
            `http://localhost:3001/highscores/${user.username}`,
            {
              method: "GET",
              headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
              },
            }
          );
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          const data = await response.json();
          console.log(data);
          if (score != undefined) {
            data.highScores.push(score);
            data.highScores = Array.from(new Set([...data.highScores]));
            data.highScores.sort((a, b) => b - a);
            if (data.highScores.length > 10) {
              data.highScores.length = 10;
            }
            updateScore(data.highScores);
          }
          setPersonalHighScores(data.highScores);
        }
      } catch (error) {
        alert(error.message);
      }
    };

    const fetchData = async () => {
      await fetchHighScores();
      await fetchPersonalHighScores();
    };

    fetchData();
  }, []);

  const updateScore = async (highscore) => {
    if (highscore.length === 0) {
      console.error("personalHighScores is empty, aborting POST request.");
      return;
    }

    try {
      const response = await fetch(`http://localhost:3001/updateScore`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ score: highscore, userId: user.id }),
      });

      if (!response.ok) {
        throw new Error("Score update failed");
      }

      const data = await response.json();
      // console.log("Score updated successfully:", data);
    } catch (error) {
      // console.error("Failed to update score:", error);
    }
  };

  const handleExit = () => {
    logout();
    navigate("/");
  };

  const handlePlay = () => {
    navigate("/question");
  };

  return (
    <div className={classes.container}>
      <Header>{t("guess-who")}</Header>
      <div className={classes.mainSection}>
        <div className={classes.scoreSection}>
          <Header style={{ fontSize: "36px" }}>{t("all-highscore")}</Header>
          <hr className={classes.hr} />
          <ol className={classes.ol}>
            {highScores.map((score, index) => (
              <li
                className={classes.li}
                key={`${score.username}-${score.score}-${index}`}
              >
                <span>{score.username}</span>
                <span>{score.score}</span>
              </li>
            ))}
          </ol>
        </div>
        <div className={classes.playSection}>
          <Text fontSize={{ fontSize: "20px" }}>
            {score ? `${t("your-score")}: ${score}` : null}
          </Text>
          <DefaultButton font={{ fontSize: "36px" }} onClick={handlePlay}>
            {t("play")}
          </DefaultButton>
        </div>
        <div className={classes.scoreSection}>
          <Header style={{ fontSize: "36px" }}>{t("your-highscore")}</Header>
          <hr className={classes.hr} />
          <ol className={classes.ol}>
            {personalHighScores.length > 0 ? (
              personalHighScores.map((score, index) => (
                <li className={classes.li} key={`${score}-${index}`}>
                  <span>{score}</span>
                </li>
              ))
            ) : (
              <li>{t("no-highscore")}</li>
            )}
          </ol>
        </div>
      </div>
      <div className={classes.exit}>
        <DefaultButton onClick={handleExit}>{t("exit")}</DefaultButton>
      </div>
    </div>
  );
};

export default MainPage;
