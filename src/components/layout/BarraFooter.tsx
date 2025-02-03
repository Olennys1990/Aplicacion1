import React from "react";
import { Layout } from "antd";
import iconomenu from "../../assets/Pie.png";
import "../../styles/GeneralStyle.css";
import { useTranslation } from "react-i18next";

const BarraFooter: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Layout.Footer className="footer">
      {t("footer.frase")}
      <img src={iconomenu} alt="Logo" className="footericon" />
    </Layout.Footer>
  );
};

export default BarraFooter;
