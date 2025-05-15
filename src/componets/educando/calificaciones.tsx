import {
  IonPage,
  IonContent,
  IonToolbar,
  IonTitle,
  IonMenuButton,
  IonMenu,
  IonButton,
} from "@ionic/react";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import "./css/Calificaciones.css";
import "./css/menu.css";

import user from "./img/user.png";
import menuIcon from "./img/menu.png";
import icon_inicio from "./img/img-inicio.png";
import icon_exit from "./img/img-exit.png";

const Calificaciones: React.FC = () => {
  const history = useHistory();
  const [materiaSeleccionada, setMateriaSeleccionada] = useState<number | null>(null);

  const calificaciones = [
    {
      id: 1,
      materia: "Lengua y Comunicación 1",
      clave: "AKP-1298-SEE-1209",
      fecha: "06/12/2025",
      calificacion: 95,
      evaluacion: "EX",
      color: "verde",
    },
    {
      id: 2,
      materia: "Lengua y Comunicación 2",
      clave: "AKP-1298-SEE-1209",
      fecha: "06/12/2025",
      calificacion: 98,
      evaluacion: "OR",
      color: "verde",
    },
    {
      id: 3,
      materia: "Pensamiento Matemático 1",
      clave: "AKP-1300-SEE-1210",
      fecha: "06/12/2025",
      calificacion: 90,
      evaluacion: "EX",
      color: "morado",
    },
    {
      id: 4,
      materia: "Pensamiento Mátemático 2",
      clave: "AKP-1301-SEE-1211",
      fecha: "06/12/2025",
      calificacion: 92,
      evaluacion: "EX",
      color: "morado",
    },
    {
      id: 5,
      materia: "Vida y Comunidad 1",
      clave: "AKP-1302-SEE-1212",
      fecha: "06/12/2025",
      calificacion: 85,
      evaluacion: "EX",
      color: "naranja",
    },
  ];

  const imagenPerfil = "https://placehold.co/100x100";

  const navigateAndCloseMenu = (path: string) => {
    history.push(path);
    const menu = document.querySelector("ion-menu");
    menu?.close();
  };

  const Inicio = () => navigateAndCloseMenu("/educando/inicio");
  const Login = () => navigateAndCloseMenu("/login");

  return (
    <>
      <IonMenu contentId="main-content">
        <div className="menu-user">
          <div className="user-content">
            <div className="avatar-circle">
              <img src={user} alt="Avatar" />
            </div>
            <div className="user-info">
              <p className="user-name">Marco Aurelio Gil Carrillo.</p>
              <p className="user-status">
                Alumno: <span className="status-active">Activo</span>
              </p>
            </div>
          </div>
        </div>
        <IonContent className="buttons">
          <div>
            <IonButton className="button-inicio" onClick={Inicio}>
              <div className="button-content">
                <img src={icon_inicio} className="button-icon" />
                <span className="button-text">Inicio</span>
              </div>
            </IonButton>

            <IonButton className="button-salir" onClick={Login}>
              <div className="button-content">
                <img src={icon_exit} className="button-icon" />
                <span className="button-text">Salir</span>
              </div>
            </IonButton>
          </div>
        </IonContent>
      </IonMenu>

      <IonPage id="main-content">
        <IonToolbar color="danger">
          <IonMenuButton>
            <img src={menuIcon} style={{ width: "24px" }} />
          </IonMenuButton>
          <IonTitle>Calificaciones</IonTitle>
        </IonToolbar>

        <IonContent className="container">
          <div className="header">
            <img src={imagenPerfil} alt="Perfil" className="icono-perfil" />
            <h1>Calificaciones</h1>
          </div>

          <div className="contenido">
            {calificaciones.map((item) => (
              <div
                key={item.id}
                className="tarjeta"
                onClick={() =>
                  setMateriaSeleccionada(materiaSeleccionada === item.id ? null : item.id)
                }
              >
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

                {materiaSeleccionada === item.id && (
                  <div className="detalle-expandido">
                    <div className="detalle-fila encabezado-fila">
                      <span>TIPO DE EVALUACIÓN</span>
                      <span>CALIFICACIÓN</span>
                    </div>
                    <div className="detalle-fila">
                      <span>{item.evaluacion}</span>
                      <span>{item.calificacion}</span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </IonContent>
      </IonPage>
    </>
  );
};

export default Calificaciones;
