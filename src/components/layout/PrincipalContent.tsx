import React from "react";
import { Layout } from "antd";
import Home from "../../pages/home/Home";
import PanelEdicionUsuario from "../../pages/usuario/PanelEdicionUsuario";
import PanelEdicionRol from "../../pages/rol/PanelEdicionRol";
import { Routes, Route, Navigate } from "react-router-dom";

const PrincipalContent: React.FC = () => {
  return (
    <Layout.Content
      style={{
        backgroundColor: " #ef8a1e",
      }}
    >
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/rol" element={<PanelEdicionRol />} />
        <Route path="/usuario" element={<PanelEdicionUsuario />} />
      </Routes>
    </Layout.Content>
  );
};

export default PrincipalContent;
