import React, { createContext, useState, useContext, useEffect } from "react";
import translations from "../locales/index";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const storedLanguage = localStorage.getItem("language") || "en";
  const [language, setLanguage] = useState(storedLanguage);

  const changeLanguage = (lng) => {
    setLanguage(lng);
    localStorage.setItem("language", lng);
  };

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

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
