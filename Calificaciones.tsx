import React, { useState } from "react";
import "./Calificaciones.css";

export default function Calificaciones() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const toggleMenu = () => {
    setMenuAbierto(!menuAbierto);
  };

  const calificaciones = [
    { materia: "Lengua y comunicación 1", clave: "AKP-1298-SEE-1209", fecha: "06/12/2025", color: "verde" },
    { materia: "Vida y comunidad 1", clave: "AKP-1298-SEE-1209", fecha: "06/12/2025", color: "naranja" },
  ];

  const imagenPerfil = "https://via.placeholder.com/100";

  return (
    <div className="container">
      {/* Menú lateral */}
      <div className={`menu-lateral ${menuAbierto ? "activo" : ""}`}>
        <button className="cerrar-menu" onClick={toggleMenu}>X</button>

        {/* Encabezado del alumno */}
        <div style={{ backgroundColor: "#6b1c1c", padding: "12px", color: "#fff" }}>
          <strong>Marco Aurelio Gil Carrillo.</strong>
          <p style={{ margin: "4px 0" }}>
            Alumno: <span style={{ color: "limegreen", fontWeight: "bold" }}>Activo</span>
          </p>
        </div>

        {/* Botones */}
        <div style={{ padding: "16px" }}>
          <button style={{
            backgroundColor: "#d3e6f8",
            border: "none",
            borderRadius: "10px",
            padding: "10px",
            width: "100%",
            marginBottom: "10px"
          }}>Inicio</button>

          <button style={{
            backgroundColor: "#d3e6f8",
            border: "none",
            borderRadius: "10px",
            padding: "10px",
            width: "100%"
          }}>Regresar</button>
        </div>

        {/* Escala y abreviaturas */}
        <div style={{ padding: "16px" }}>
          <p style={{ fontWeight: "bold", fontSize: "13px" }}>
            ESCALA DE CALIFICACIONES DEL 0 AL 10; MÍNIMO PARA SER APROBADO: 7.0 (SIETE/CERO)
          </p>

          <p style={{ fontWeight: "bold", marginTop: "20px" }}>ABREVIATURAS</p>
          <div style={{ display: "flex", flexDirection: "column", fontSize: "13px" }}>
            <div><strong>COR</strong> — CURSO ORDINARIO</div>
            <div><strong>CEE</strong> — CURSO EXTRAORDINARIO</div>
            <div><strong>CES</strong> — CURSO ESPECIAL</div>
            <div><strong>CRE</strong> — CURSO REPROBADO</div>
            <div><strong>SO</strong> — SEGUNDAS OPORTUNIDADES</div>
            <div><strong>EP</strong> — EXAMEN PARCIAL</div>
            <div><strong>EK</strong> — EXAMEN DE REGULARIZACIÓN</div>
            <div><strong>EX</strong> — EXAMEN EXTRAORDINARIO</div>
            <div><strong>ES</strong> — EXAMEN DE SUFICIENCIA</div>
          </div>
        </div>
      </div>

      {/* Barra superior */}
      <header className="header">
        <button className="menu-boton" onClick={toggleMenu}>☰</button>
        <img src={imagenPerfil} alt="Perfil" className="icono-perfil" />
        <h1>Calificaciones</h1>
      </header>

      {/* Contenido principal */}
      <div className="contenido">
        {calificaciones.map((item, index) => (
          <div key={index} className="tarjeta">
            <h2>{item.materia}</h2>
            <div className="separador"></div>
            <div className="info">
              <span>CLAVE</span>
              <span>FECHA</span>
            </div>
            <div className="valores">
              <span>{item.clave}</span>
              <span>{item.fecha}</span>
            </div>
            <div className={`barra ${item.color}`}></div>
          </div>
        ))}
      </div>
    </div>
  );
}
