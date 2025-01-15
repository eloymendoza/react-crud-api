import React, { useState } from "react";
import { Modal, Form, Button as BootstrapButton } from "react-bootstrap"; // Importación de componentes de Bootstrap para la interfaz del modal.

interface AddStudentModalProps {
  show: boolean; // Propiedad para controlar la visibilidad del modal.
  handleClose: () => void; // Función para cerrar el modal.
  onSave: (studentData: {
    name: string;
    email: string;
    phone: string;
    language: string;
  }) => void; // Función para manejar el evento de guardar los datos del estudiante.
}

const AddStudentModal = ({
  show,
  handleClose,
  onSave,
}: AddStudentModalProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    language: "",
  }); // Estado para almacenar y manejar los datos del formulario.

  // Maneja el cambio de valores en los campos del formulario.
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value }); // Actualiza el estado del campo modificado.
  };

  // Maneja la acción del formulario al enviarse.
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Previene la recarga de la página.
    onSave(formData); // Llama a la función de guardado pasando los datos del formulario.
    setFormData({ name: "", email: "", phone: "", language: "" }); // Limpia los campos del formulario tras guardar.
    handleClose(); // Cierra el modal.
  };

  return (
    <Modal show={show} onHide={handleClose}>
      {" "}
      {/* Modal que muestra el formulario */}
      <Modal.Header closeButton>
        <Modal.Title>Agregar Estudiante</Modal.Title> {/* Título del modal */}
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          {" "}
          {/* Formulario para capturar los datos */}
          <Form.Group controlId="formName">
            <Form.Label>Nombre:</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="Ingresa el nombre del estudiante"
              value={formData.name}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formEmail" className="mt-3">
            <Form.Label>Email:</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Ingresa el email del estudiante"
              value={formData.email}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formPhone" className="mt-3">
            <Form.Label>Telefono:</Form.Label>
            <Form.Control
              type="text"
              name="phone"
              placeholder="Ingresa el telefono del estudiante"
              value={formData.phone}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formLanguage" className="mt-3">
            <Form.Label>Lenguaje:</Form.Label>
            <Form.Control
              type="text"
              name="language"
              placeholder="Ingresa el leguaje del estudiante"
              value={formData.language}
              onChange={handleChange}
            />
          </Form.Group>
          <BootstrapButton variant="primary" type="submit" className="mt-3">
            Guardar
          </BootstrapButton>{" "}
          {/* Botón para enviar el formulario */}
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default AddStudentModal; // Exportación del componente.
