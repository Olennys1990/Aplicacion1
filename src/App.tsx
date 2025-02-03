import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Layout }from "antd";
import MenuSider from "./components/layout/MenuSider";
import BarraHeader from "./components/layout/BarraHeader";
import BarraFooter from "./components/layout/BarraFooter";
import PrincipalContent from "./components/layout/PrincipalContent";
import { ConfigProvider } from "antd";
import { theme } from 'antd';
import "./styles/GeneralStyle.css";
//import es_ES from "antd/lib/locale/es_ES";
const App: React.FC = () => {
  const { defaultAlgorithm, darkAlgorithm } = theme;
    const [isDarkMode, setIsDarkMode] = useState(false);

    const handleToggleTheme = () => {
        setIsDarkMode(prev => !prev);
    };
  return (
    <ConfigProvider /*locale={es_ES}*/ theme={{ algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm }}>
      <Router>
        <Layout className="layoutgeneral">
          <MenuSider />
          <Layout className="layoutcontent">
          <BarraHeader />
            <PrincipalContent />
            <BarraFooter />
          </Layout>
        </Layout>
      </Router>
    </ConfigProvider>
  );
};

export default App;
