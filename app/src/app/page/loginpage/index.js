import useStyles from "./stylesheet";
import React, { useState } from "react";
import { useTranslation } from "../../context/languageContext";
import { useTheme } from "../../context/index";
import {
  LanguageButton,
  DefaultButton,
  Header,
  ThemeButton,
  Input,
  Switcher,
} from "../../components";

const LoginPage = () => {
  const { theme } = useTheme();
  const classes = useStyles({ theme });
  const { t } = useTranslation();
  const [isSignIn, setIsSignIn] = useState(true);

  const handleSwitcherChange = (value) => {
    setIsSignIn(value === "login");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    const data = {
      username: formData.get("username"),
      password: formData.get("password"),
      passwordAgain: formData.get("password-again"),
    };

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (response.ok) {
        // İşlem başarılı
        console.log(result);
      } else {
        // Hata durumu
        console.error(result.message);
      }
    } catch (error) {
      console.error("Network error:", error);
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
        <Input name="username">{t("username")}</Input>
        <Input name="password" type="password">
          {t("password")}
        </Input>
        {!isSignIn && (
          <Input name="password-again" type="password">
            {" "}
            {t("password-again")}{" "}
          </Input>
        )}
        <DefaultButton type="submit">{t("register")}</DefaultButton>
      </form>
    </div>
  );
};

export default LoginPage;
