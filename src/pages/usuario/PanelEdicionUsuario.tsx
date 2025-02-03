import React, { useState } from "react";
import type { TableColumnsType } from "antd";
import { Flex, Typography } from "antd";
import TablaBase from "../../components/common/TablaBase";
import BarraBotones from "../../components/common/BarraBotones";
import ModalEdicion from "../../components/common/ModalEdicion";
import FormularioUsuario from "./FormularioUsuario";
import "../../styles/GeneralStyle.css";
import { useTranslation } from "react-i18next";

interface DataType {
  key: React.Key;
  usuario: string;
  rol: string;
}
const data = [
  {
    key: "1",
    usuario: "oduran",
    rol: "Administrador",
  },
  {
    key: "2",
    usuario: "yorosa",
    rol: "Especialista",
  },
  {
    key: "3",
    usuario: "axeloc",
    rol: "Rector",
  },
  {
    key: "4",
    usuario: "ocarcases",
    rol: "Especialista",
  },
];

const PanelEdicionUsuario: React.FC = () => {
  const { t } = useTranslation();
  const columns: TableColumnsType<DataType> = [
    {
      title: t("tablausuario.colusuario"),
      dataIndex: "usuario",
      key: "usuario",
      showSorterTooltip: {
        target: "full-header",
      },
      sorter: (a, b) => a.usuario.localeCompare(b.usuario),
      sortDirections: ["ascend"],
    },
    {
      title: t("tablausuario.colrol"),
      dataIndex: "rol",
      key: "rol",
      filters: [
        {
          text: "Administrador",
          value: "Administrador",
        },
        {
          text: "Rector",
          value: "Rector",
        },
        {
          text: "Especialista",
          value: "Especialista",
        },
      ],
      filterMode: "tree",
      filterSearch: true,
      onFilter: (value, record) => record.rol.indexOf(value as string) === 0,
    },
  ];
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [actionType, setActionType] = useState<
    "Adicionar usuario" | "Modificar usuario"
  >("Adicionar usuario");

  const showAddModal = () => {
    setActionType("Adicionar usuario");
    setIsModalVisible(true);
  };
  const showEditModal = () => {
    setActionType("Modificar usuario");
    setIsModalVisible(true);
  };
  const handleDelete = () => {
    console.log("Elemento eliminado");
  };

  const handleClose = () => {
    setIsModalVisible(false);
  };

  return (
    <Flex gap="middle" vertical className="flextabla">
      <Typography.Text strong className="title">
      {t("tablausuario.title")}
      </Typography.Text>
      <BarraBotones
        onAdd={showAddModal}
        onEdit={showEditModal}
        onDelete={handleDelete}
      />
      <ModalEdicion
        visible={isModalVisible}
        onClose={handleClose}
        formContent={<FormularioUsuario onClose={handleClose} />}
        titulo={actionType}
      />
      <TablaBase columns={columns} data={data} />
    </Flex>
  );
};

export default PanelEdicionUsuario;
