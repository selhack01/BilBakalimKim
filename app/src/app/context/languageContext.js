import React, { createContext, useState, useContext } from "react";
import translations from "../locales/index";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  const changeLanguage = (lng) => {
    setLanguage(lng);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useTranslation = () => {
  const { language, changeLanguage } = useContext(LanguageContext);

  const t = (key) => {
    return translations[language][key] || key;
  };

  return { t, language, changeLanguage };
};
