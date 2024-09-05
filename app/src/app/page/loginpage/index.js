import { useTranslation } from "../../context/languageContext";
import { useUser } from "../../context/userContext";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../../context/index";
import React, { useState } from "react";
import useStyles from "./stylesheet";
import {
  LanguageButton,
  DefaultButton,
  Header,
  ThemeButton,
  Input,
  Switcher,
} from "../../components";

const LoginPage = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { login } = useUser();
  
  const { theme } = useTheme();
  const classes = useStyles({ theme });
  
  const [isSignIn, setIsSignIn] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    passwordAgain: "",
  });

  const handleSwitcherChange = (value) => {
    setIsSignIn(value === "login");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { username, password, passwordAgain } = formData;

    if (!username || !password) {
      alert(t("fill-i- all-fields"));
      return;
    }

    if (!isSignIn && password !== passwordAgain) {
      alert(t("passwords-do-not-match"));
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:3001/${isSignIn ? "login" : "register"}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: username,
            password: password,
          }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        const errorMessage = errorData.error || response.statusText;
        console.error("API Error:", errorMessage);
        alert(errorMessage || "An error occurred.");
      } else {
        const result = await response.json();
        if (!isSignIn) {
          setIsSignIn(true);
          navigate("/");
        } else {
          login(result.user);
          navigate("/main");
        }
      }
    } catch (error) {
      console.error("Network error:", error);
      alert(t("network-error") || "Network error. Please try again.");
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.contextSection}>
        <ThemeButton />
        <LanguageButton />
      </div>
      <Header>{t("guess-who")}</Header>
      <form className={classes.accountSection} onSubmit={handleSubmit}>
        <Switcher onSwitch={handleSwitcherChange} />
        <Input
          title={t("username") || "Username"}
          value={formData.username}
          onChange={handleChange}
          name="username"
        />
        <Input
          title={t("password") || "Password"}
          value={formData.password}
          onChange={handleChange}
          type="password"
          name="password"
        />
        {!isSignIn && (
          <Input
          title={t("password-again") || "Repeat Password"}
          value={formData.passwordAgain}
          onChange={handleChange}
            name="passwordAgain"
            type="password"
          />
        )}
        <DefaultButton type="submit">
          {isSignIn ? t("login") : t("register")}
        </DefaultButton>
      </form>
    </div>
  );
};

export default LoginPage;
