import React, { useState } from "react"; // Importación de React y el hook useState para manejar estados locales.
import StudentList from "./components/Student/StudentList"; // Componente para mostrar la lista de estudiantes.
import Button from "./components/Button/Button"; // Componente personalizado de botón reutilizable.
import AddStudentModal from "./components/addStudentModal"; // Modal para agregar nuevos estudiantes.
import "bootstrap/dist/css/bootstrap.min.css"; // Importación de estilos Bootstrap para mejorar la UI.

function App() {
  const [showModal, setShowModal] = useState(false); // Estado para controlar la visibilidad del modal.

  // Función para mostrar el modal al hacer clic en el botón "Agregar".
  const handleClickAdd = () => setShowModal(true);

  // Función para cerrar el modal.
  const handleCloseModal = () => setShowModal(false);

  // Función para manejar la lógica de guardar un nuevo estudiante.
  const handleSaveStudent = (studentData: {
    name: string;
    email: string;
    phone: string;
    language: string;
  }) => {
    console.log("Estudiante guardado:", studentData); // Registro en consola del estudiante guardado.

    const API_URL = "http://localhost:99/api/students"; // URL del backend para la API de estudiantes.

    // Solicitud POST para enviar datos del estudiante al backend.
    fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Cabecera para indicar el tipo de contenido.
      },
      body: JSON.stringify(studentData), // Serialización de los datos del estudiante.
    })
      .then((response) => response.json()) // Conversión de la respuesta a JSON.
      .then((data) => {
        console.log("Estudiante guardado:", data); // Registro en consola de la respuesta del servidor.
      })
      .catch((error) => {
        console.error("Error saving student:", error); // Manejo de errores en la solicitud.
      });
  };

  return (
    <>
      <StudentList />{" "}
      {/* Componente para mostrar la lista de estudiantes existentes. */}
      <Button onClick={handleClickAdd}>Agregar</Button>{" "}
      {/* Botón para abrir el modal. */}
      {/* Modal para agregar nuevos estudiantes, con propiedades para mostrar, cerrar y guardar datos. */}
      <AddStudentModal
        show={showModal}
        handleClose={handleCloseModal}
        onSave={handleSaveStudent}
      />
    </>
  );
}

export default App; // Exportación del componente principal.
