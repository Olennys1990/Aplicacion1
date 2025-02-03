import React from "react";
import { Modal } from "antd";

interface ModalEdicionProps {
  visible: boolean;
  onClose: () => void;
  formContent: React.ReactNode;
  titulo: string;
}

const ModalEdicion: React.FC<ModalEdicionProps> = ({
  visible,
  onClose,
  formContent,
  titulo,
}) => {
  return (
    <Modal title={titulo} open={visible} onCancel={onClose} footer={null}>
      {formContent}
    </Modal>
  );
};

export default ModalEdicion;
