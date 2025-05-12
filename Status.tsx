import React from "react";
import "./Status.css";

const Dashboard = () => {
  return (
    <div className="container-wrapper">
      <div className="container large">
        {/* Header */}
        <div className="header">
          <div className="profile-pic">
            <img src="/path-to-image.jpg" alt="Perfil" className="profile-image" />
          </div>
          <p className="student-name">Marco Aurelio Gil Carrillo.</p>
          <p className="student-status">Alumno: Activo</p>
        </div>

        {/* Menu */}
        <div className="menu">
          <button className="menu-button">🏠 Inicio</button>
          <button className="menu-button">⬅️ Regresar</button>
        </div>

        {/* Information Section */}
        <div className="info-section">
          <h3 className="title">ESCALA DE CALIFICACIONES</h3>
          <p className="subtitle">DEL 0 AL 10; MÍNIMO PARA SER APROBADO: 7.0 (SIETE/CERO)</p>
          <h4 className="abbreviations-title">ABREVIATURAS</h4>
          <ul className="abbreviations-list">
            <li><strong>COR</strong> - CURSO ORDINARIO</li>
            <li><strong>CEX</strong> - CURSO EXTRAORDINARIO</li>
            <li><strong>CES</strong> - CURSO ESPECIAL</li>
            <li><strong>CRE</strong> - CURSO REPROBADO</li>
            <li><strong>SO</strong> - SEGUNDAS OPORTUNIDADES</li>
            <li><strong>ER</strong> - EXAMEN REGULARIZACIÓN</li>
            <li><strong>ES</strong> - EXAMEN DE SOLVENCIA</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
