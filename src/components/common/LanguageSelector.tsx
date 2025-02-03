import React from "react";
import { useTranslation } from "react-i18next";
import "../../styles/GeneralStyle.css";

const LanguageSelector: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <label className="idiomaselector">
        {i18n.t("idioma.selectLanguage")}
      </label>
      <select
        onChange={(e) => changeLanguage(e.target.value)}
        defaultValue={i18n.language}
      >
        <option value="en">{i18n.t("idioma.en")}</option>
        <option value="es">{i18n.t("idioma.es")}</option>
      </select>
    </div>
  );
};

export default LanguageSelector;
