import React, { useState } from "react";
import { Layout, Menu } from "antd";
import iconomenu from "/Icono.png";
import { Link } from "react-router-dom";
import {
  UserOutlined,
  TrademarkOutlined,
  LogoutOutlined,
  DatabaseOutlined,
  HomeOutlined,
  FilePptOutlined,
  SolutionOutlined,
  SmileOutlined,
  UnderlineOutlined,
} from "@ant-design/icons";
import "../../styles/GeneralStyle.css";
import { useTranslation } from "react-i18next";

const MenuSider: React.FC = () => {
  const { t } = useTranslation();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout.Sider
      className="sider"
      //theme="light"
      width={200}
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
    >
      <Menu
       // theme="light"
        defaultSelectedKeys={["inicio"]}
        defaultOpenKeys={["gestacceso", "nomenclador"]}
        mode="inline"
      >
        <Menu.Item
          key="inicio"
          icon={<img src={iconomenu} alt="inicio" className="homeicon" />}
          className="homeitem"
        >
          <Link to="/home">Axelus</Link>
        </Menu.Item>

        <Menu.SubMenu key="gestacceso" title={t("sider.gestacceso")}>
          <Menu.Item key="funcionalidad" icon={<DatabaseOutlined />}>
            {t("sider.funcionalidad")}
          </Menu.Item>
          <Menu.Item key="rol" icon={<TrademarkOutlined />}>
            <Link to="/rol">{t("sider.rol")}</Link>
          </Menu.Item>
          <Menu.Item key="usuario" icon={<UserOutlined />}>
            <Link to="/usuario">{t("sider.usuario")}</Link>
          </Menu.Item>
          <Menu.Item key="entidad" icon={<HomeOutlined />}>
            {t("sider.entidad")}
          </Menu.Item>
          <Menu.Item key="dominio" icon={<SolutionOutlined />}>
            {t("sider.dominio")}
          </Menu.Item>
        </Menu.SubMenu>

        <Menu.SubMenu key="nomenclador" title={t("sider.nomenclador")}>
          <Menu.Item key="producto" icon={<FilePptOutlined />}>
            {t("sider.producto")}
          </Menu.Item>
          <Menu.Item key="servicio" icon={<SmileOutlined />}>
            {t("sider.servicio")}
          </Menu.Item>
          <Menu.Item key="um" icon={<UnderlineOutlined />}>
            {t("sider.um")}
          </Menu.Item>
        </Menu.SubMenu>

        <Menu.Item key="salir" icon={<LogoutOutlined />} danger={true}>
          <Link to="/home">{t("sider.salir")}</Link>
        </Menu.Item>
      </Menu>
    </Layout.Sider>
  );
};

export default MenuSider;
