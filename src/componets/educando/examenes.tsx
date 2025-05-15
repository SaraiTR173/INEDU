import {
  IonPage,
  IonButton,
  IonMenu,
  IonMenuButton,
  IonToolbar,
  IonContent,
  IonLabel,
} from "@ionic/react";
import React from "react";
import { useHistory } from "react-router-dom";

import menuIcon from "./img/menu.png";
import user from "./img/user.png";

import icon_inicio from "./img/img-inicio.png";
import icon_perfil from "./img/img-perfil.png";
import icon_exam from "./img/img-exam.png";
import icon_califi from "./img/img-califi.png";
import icon_eval from "./img/img-eval.png";
import icon_nosotros from "./img/img-nosotros.png";
import icon_exit from "./img/img-exit.png";

import "./css/menu.css";
import "./css/examanes.css";

const Examenes: React.FC = () => {
  const history = useHistory();

  // Función genérica para navegar y cerrar el menú
  const navigateAndCloseMenu = (path: string) => {
    history.push(path);
    // Cierra el menú
    const menu = document.querySelector('ion-menu');
    menu?.close();
  };

  // Funciones específicas para cada ruta
  const Inicio = () => navigateAndCloseMenu("/educando/inicio");
  const Perfil = () => navigateAndCloseMenu("/educando/perfil");
  const Examenes = () => navigateAndCloseMenu("/educando/examenes");
  const Calificacion = () => navigateAndCloseMenu("/educando/calificaciones");
  const Evaluacion = () => navigateAndCloseMenu("/educando/evaluacion");
  const Nosotros = () => navigateAndCloseMenu("/educando/nosotros");
  const Login = () => navigateAndCloseMenu("/login");

  const Examen_LyC1 = () => navigateAndCloseMenu("/educando/materias/examen-lengua-y-comunicacion-1");
  const Examen_LyC2 = () => navigateAndCloseMenu("/educando/materias/examen-lengua-y-comunicacion-2");
  const Examen_PM1 = () => navigateAndCloseMenu("/educando/materias/examen-pensamiento-matematico-1");
  const Examen_PM2 = () => navigateAndCloseMenu("/educando/materias/examen-pensamiento-matematico-2");
  const Examen_VyC1 = () => navigateAndCloseMenu("/educando/materias/examen-vida-y-comunidad-1");

  return (
    <>
      <IonMenu contentId="main-content">
      <div className="menu-user">
        <div className="user-content">
          <div className="avatar-circle">
            <img src={user} alt="Avatar"/>
          </div>
          <div className="user-info">
            <p className="user-name">Marco Aurelio Gil Carrillo.</p>
            <p className="user-status">Alumno: <span className="status-active">Activo</span></p>
          </div>
        </div>
      </div>
        <IonContent className="buttons">
          <div>
            <IonButton className="button-inicio" onClick={Inicio}>
              <div className="button-content">
                <img src={icon_inicio} className="button-icon"/>
                <span className="button-text">Inicio</span>
              </div>
            </IonButton>

            <IonButton className="button-perfil" onClick={Perfil}>
              <div className="button-content">
                <img src={icon_perfil} className="button-icon"/>
                <span className="button-text">Perfil</span>
              </div>
            </IonButton>

            <IonButton className="button-examenes" onClick={Examenes}>
              <div className="button-content">
                <img src={icon_exam} className="button-icon"/>
                <span className="button-text">Exámenes</span>
              </div>
            </IonButton>

            <IonButton className="button-calificacion" onClick={Calificacion}>
              <div className="button-content">
                <img src={icon_califi} className="button-icon"/>
                <span className="button-text">Calificacion</span>
              </div>
            </IonButton>

            <IonButton className="button-evaluacion" onClick={Evaluacion}>
              <div className="button-content">
                <img src={icon_eval} className="button-icon"/>
                <span className="button-text">Evaluacion</span>
              </div>
            </IonButton>

            <IonButton className="button-nosotros" onClick={Nosotros}>
              <div className="button-content">
                <img src={icon_nosotros} className="button-icon"/>
                <span className="button-text">Acerca de nosotros</span>
              </div>
            </IonButton>

            <IonButton className="button-salir" onClick={Login}>
              <div className="button-content">
                <img src={icon_exit} className="button-icon"/>
                <span className="button-text">Salir</span>
              </div>
            </IonButton>
          </div>
        </IonContent>
      </IonMenu>

      {/* Contenido principal */}
      <IonPage id="main-content">
        <IonContent>
          <div style={{ borderBottom: '25px solid #18316A', width:'100%'}}></div>
          <IonToolbar>
            <div className="toolbar-examenes">
              <div className="menu-examanes">
                <IonMenuButton>
                  <img src={menuIcon} alt="Menú" style={{ width: "24px" }} />
                </IonMenuButton>
                <img src={user} className="user-examen"/>
              </div>              
              <div className="toolbar-cantidad">
                <span className="text-examenes">Evaluaciones realizadas:</span>
                <span className="text-examenes">0-5</span>
              </div>
            </div>
          </IonToolbar>

          <div className="examenes-box">

            <IonButton expand="block" className="btnexamenes" onClick={Examen_LyC1}> 
              <div className="estilo">
                <span className="up-label"
                  style={{ 'background': '#7EB74D'}}>
                  
                </span>
                <span className="down-label"
                  style={{ 'background': '#4DB75D'}}>
                    Lengua y comunicación 1
                </span>
              </div>
            </IonButton>

            <IonButton expand="block" className="btnexamenes" onClick={Examen_LyC2}> 
              <div className="estilo">
                <span className="up-label"
                  style={{ 'background': '#719C57'}}>
                  
                </span>
                <span className="down-label"
                  style={{ 'background': '#76B74D'}}>
                    Lengua y comunicación 2
                </span>
              </div>
            </IonButton>

            <IonButton expand="block" className="btnexamenes" onClick={Examen_PM1}> 
              <div className="estilo">
                <span className="up-label"
                  style={{ 'background': '#AC75AC'}}>
                  
                </span>
                <span className="down-label"
                  style={{ 'background': '#B083E0'}}>
                    Pensamiento Matemático 1
                </span>
              </div>
            </IonButton>

            <IonButton expand="block" className="btnexamenes" onClick={Examen_PM2}> 
              <div className="estilo">
                <span className="up-label"
                  style={{ 'background': '#AC75AC'}}>
                  
                </span>
                <span className="down-label"
                  style={{ 'background': '#A58AC1'}}>
                    Pensamiento Matemático 2
                </span>
              </div>
            </IonButton>

            <IonButton expand="block" className="btnexamenes" onClick={Examen_VyC1}> 
              <div className="estilo">
                <span className="up-label"
                  style={{ 'background': '#EC783F'}}>
                  
                </span>
                <span className="down-label"
                  style={{ 'background': '#D97166'}}>
                    Vida y Comunidad 1
                </span>
              </div>
            </IonButton>

          </div>
        </IonContent>
      </IonPage>
    </>
  );
};

export default Examenes;