import React from "react";
import { Card, Space } from "antd";
import deseo from "../../assets/Deseo.png";
import trabajaduro from "../../assets/Trabaja-duro.png";
import logrado from "../../assets/Logrado.png";
import "../../styles/GeneralStyle.css";
import { useTranslation } from "react-i18next";

const Home: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Space direction="horizontal" size={35} className="spaceprincipal">
      <Card
        hoverable
        className="homecard"
        cover={<img alt="1" src={deseo} className="homecardimg" />}
        title={<span className="homecartitle">{t("home.deseo")}</span>}
      ></Card>
      <Card
        hoverable
        className="homecard"
        cover={<img alt="1" src={trabajaduro} className="homecardimg" />}
        title={<span className="homecartitle">{t("home.trabajo")}</span>}
      ></Card>
      <Card
        hoverable
        className="homecard"
        cover={<img alt="1" src={logrado} className="homecardimg" />}
        title={<span className="homecartitle">{t("home.logrado")}</span>}
      ></Card>
    </Space>
  );
};

export default Home;
