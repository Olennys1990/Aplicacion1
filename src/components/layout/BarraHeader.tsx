import React, { useState } from "react";
import { Layout, Menu, MenuProps, Space } from "antd";
import "../../styles/GeneralStyle.css";
import LanguageSelector from "../common/LanguageSelector";
import ModoOscuro from "../common/ModoOscuro";
type MenuItem = Required<MenuProps>["items"][number];
import {
  GithubOutlined,
  YoutubeOutlined,
  FacebookOutlined,
  PinterestOutlined,
  InstagramOutlined,
  WhatsAppOutlined,
} from "@ant-design/icons";

const items: MenuItem[] = [
  {
    key: "linkWhatsApp",
    icon: <WhatsAppOutlined />,
    label: (
      <a
        href="https://www.whatsapp.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        WhatsApp
      </a>
    ),
  },
  {
    key: "linkFace",
    icon: <FacebookOutlined />,
    label: (
      <a
        href="https://www.facebook.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Facebook
      </a>
    ),
  },
  {
    key: "linkYoutube",
    icon: <YoutubeOutlined />,
    label: (
      <a
        href="https://www.youtube.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Youtube
      </a>
    ),
  },
  {
    key: "linkInstagram",
    icon: <InstagramOutlined />,
    label: (
      <a
        href="https://www.instagram.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Instagram
      </a>
    ),
  }/*,
  {
    key: "linkPinterest",
    icon: <PinterestOutlined />,
    label: (
      <a
        href="https://es.pinterest.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Pinterest
      </a>
    ),
  },
  {
    key: "linkGithub",
    icon: <GithubOutlined />,
    label: (
      <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
        Github
      </a>
    ),
  },*/
];
const { Header } = Layout;

const BarraHeader: React.FC = () => {
  const [current, setCurrent] = useState("linkWhatsApp");
  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    <Header className="header">
     <Space  className="spaceheader">
     <Menu
          className="menuheader"
          onClick={onClick}
          selectedKeys={[current]}
          mode="horizontal"
         // theme="light"
          items={items}
        /> 
     <LanguageSelector />
     <ModoOscuro />
  </Space>
    </Header>
  );
};
export default BarraHeader;
