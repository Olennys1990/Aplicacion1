import { useState } from "react";
import { ColumnGroupType, ColumnType } from "antd/es/table";
import { Flex, Typography } from "antd";
import TablaBase from "../../components/common/TablaBase";
import BarraBotones from "../../components/common/BarraBotones";
import ModalEdicion from "../../components/common/ModalEdicion";
import "../../styles/GeneralStyle.css";

interface DataTableProps<T> {
  columns: (ColumnGroupType<T> | ColumnType<T>)[];
  data: T[];
  formulario: React.ReactNode;
}
const PanelEdicionRol = <T,>({ columns, data, formulario }: DataTableProps<T>) => {
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
        Este es el titulo de la Tabla
      </Typography.Text>
      <BarraBotones
        onAdd={showAddModal}
        onEdit={showEditModal}
        onDelete={handleDelete}
      />
      <ModalEdicion
        visible={isModalVisible}
        onClose={handleClose}
        formContent={formulario}
        titulo={actionType}
      />
      <TablaBase columns={columns} data={data} />
    </Flex>
  );
};

export default PanelEdicionRol;
