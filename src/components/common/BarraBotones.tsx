import React from "react";
import { Button, Space } from "antd";
import { PlusOutlined, EditOutlined, MinusOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";

interface ButtonComponentProps {
  onAdd: () => void;
  onEdit: () => void;
  onDelete: () => void;
}

const BarraBotones: React.FC<ButtonComponentProps> = ({
  onAdd,
  onEdit,
  onDelete,
}) => {
  const { t } = useTranslation();
  return (
    <Space.Compact block>
      <Button icon={<PlusOutlined />} onClick={onAdd}>
        {t("acciones.adicionar")}
      </Button>
      <Button disabled={false} icon={<EditOutlined />} onClick={onEdit}>
        {t("acciones.modificar")}
      </Button>
      <Button disabled={false} icon={<MinusOutlined />} onClick={onDelete}>
        {t("acciones.eliminar")}
      </Button>
    </Space.Compact>
  );
};

export default BarraBotones;
