import React from "react";
import "../../styles/GeneralStyle.css";
import { useTranslation } from "react-i18next";

const Modooscuro: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div>
      <label className="idiomaselector">
      {t("modo.selectModo")}
      </label>
      <select
        defaultValue="light"
      >
        <option value="dark">{t("modo.dark")}</option>
        <option value="light">{t("modo.light")}</option>
      </select>
    </div>
  );
};

export default Modooscuro;
