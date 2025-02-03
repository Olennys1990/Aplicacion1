import React, { useState } from "react";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
import type { TableColumnsType } from "antd";
import { Flex, Typography } from "antd";
import TablaBase from "../../components/common/TablaBase";
import BarraBotones from "../../components/common/BarraBotones";
import ModalEdicion from "../../components/common/ModalEdicion";
import FormularioRol from "./FormularioRol";
import "../../styles/GeneralStyle.css";
import { useTranslation } from "react-i18next";

interface DataType {
  key: React.Key;
  rol: string;
  adicionar: number;
  modificar: number;
  eliminar: number;
  aprobar: number;
}
const data = [
  {
    key: "1",
    rol: "Administrador",
    adicionar: 1,
    modificar: 1,
    eliminar: 1,
    aprobar: 1,
  },
  {
    key: "2",
    rol: "Especialista",
    adicionar: 1,
    modificar: 1,
    eliminar: 1,
    aprobar: 0,
  },
  {
    key: "3",
    rol: "Rector",
    adicionar: 0,
    modificar: 0,
    eliminar: 0,
    aprobar: 1,
  },
];

const TablaRol: React.FC = () => {
  const { t } = useTranslation();
  const columns: TableColumnsType<DataType> = [
    {
      title: t("tablarol.colrol"),
      dataIndex: "rol",
      key: "rol",
      showSorterTooltip: {
        target: "full-header",
      },
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
      sorter: (a, b) => a.rol.localeCompare(b.rol),
      sortDirections: ["ascend"],
    },
    {
      title: t("acciones.adicionar"),
      dataIndex: "adicionar",
      key: "adicionar",
      align: "center",
      filters: [
        {
          text: t("tablarol.filtautorizado"),
          value: 1,
        },
        {
          text: t("tablarol.filtdenegado"),
          value: 0,
        },
      ],
      onFilter: (value, record) => record.adicionar === value,
      render: (text) => {
        if (text == 1) return <CheckOutlined className="renderpermitido" />;
        return <CloseOutlined className="renderdenegado" />;
      },
    },
    {
      title: t("acciones.modificar"),
      dataIndex: "modificar",
      key: "modificar",
      align: "center",
      filters: [
        {
          text: t("tablarol.filtautorizado"),
          value: 1,
        },
        {
          text: t("tablarol.filtdenegado"),
          value: 0,
        },
      ],
      onFilter: (value, record) => record.modificar === value,
      render: (text) => {
        if (text == 1) return <CheckOutlined className="renderpermitido" />;
        return <CloseOutlined className="renderdenegado" />;
      },
    },
    {
      title: t("acciones.eliminar"),
      dataIndex: "eliminar",
      key: "eliminar",
      align: "center",
      filters: [
        {
          text: t("tablarol.filtautorizado"),
          value: 1,
        },
        {
          text: t("tablarol.filtdenegado"),
          value: 0,
        },
      ],
      onFilter: (value, record) => record.eliminar === value,
      render: (text) => {
        if (text == 1) return <CheckOutlined className="renderpermitido" />;
        return <CloseOutlined className="renderdenegado" />;
      },
    },
    {
      title: t("tablarol.colaprobar"),
      dataIndex: "aprobar",
      key: "aprobar",
      align: "center",
      filters: [
        {
          text: t("tablarol.filtautorizado"),
          value: 1,
        },
        {
          text: t("tablarol.filtdenegado"),
          value: 0,
        },
      ],
      onFilter: (value, record) => record.aprobar === value,
      render: (text) => {
        if (text == 1) return <CheckOutlined className="renderpermitido" />;
        return <CloseOutlined className="renderdenegado" />;
      },
    },
  ];
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [actionType, setActionType] = useState<
    "Adicionar rol" | "Modificar rol"
  >("Adicionar rol");

  const showAddModal = () => {
    setActionType("Adicionar rol");
    setIsModalVisible(true);
  };
  const showEditModal = () => {
    setActionType("Modificar rol");
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
      {t("tablarol.title")}
      </Typography.Text>
      <BarraBotones
        onAdd={showAddModal}
        onEdit={showEditModal}
        onDelete={handleDelete}
      />
      <ModalEdicion
        visible={isModalVisible}
        onClose={handleClose}
        formContent={<FormularioRol onClose={handleClose} />}
        titulo={actionType}
      />
      <TablaBase columns={columns} data={data} />
    </Flex>
  );
};

export default TablaRol;
