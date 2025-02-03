import React, { useState } from "react";
import { Form, Input, Button, message } from "antd";
import { useTranslation } from "react-i18next";

interface FormularioProps {
  onClose: () => void;
}

const FormularioUsuario: React.FC<FormularioProps> = ({ onClose }) => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({ usuario: "", descripcion: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFinish = async () => {
    console.log("Received values:", formData);
    try {
      message.success("Formulario enviado con éxito!");
      onClose();
    } catch (error) {
      message.error("Error al enviar el formulario.");
    }
  };

  const handleCancel = () => {
    setFormData({ usuario: "", descripcion: "" });
    onClose();
  };

  return (
    <div className="form-container">
      <Form onFinish={handleFinish}>
        <Form.Item
          label={t("tablausuario.colusuario")}
          rules={[{ required: true, message: t("formusuario.ingreseusuario") }]}
        >
          <Input name="usuario" value={formData.usuario} onChange={handleChange} />
        </Form.Item>
        <Form.Item label={t("formrol.descripcion")}>
          <Input
            name="descripcion"
            value={formData.descripcion}
            onChange={handleChange}
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Enviar
          </Button>
          <Button type="default" onClick={handleCancel}>
            Cancelar
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default FormularioUsuario;
