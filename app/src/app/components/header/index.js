import React from "react";
import useStyles from "./stylesheet";
import { useTranslation } from "../../context/languageContext";

const Header = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  return <span 
         className={classes.light}>
            {t("guess-who")}
        </span>;
};

export default Header;
