import {
  IonPage,
  IonButton,
  IonMenu,
  IonMenuButton,
  IonToolbar,
  IonContent,
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

import { logoFacebook, logoInstagram, globeOutline, musicalNotesOutline } from 'ionicons/icons';
import { IonIcon } from '@ionic/react';

import "./css/menu.css";
import "./css/nosotros.css";

const Nosotros: React.FC = () => {
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
            <div className="toolbar-nosotros">
              <div className="menu-nosotros">
                <IonMenuButton>
                  <img src={menuIcon} alt="Menú" style={{ width: "24px" }} />
                </IonMenuButton>
                <img src={user} className="user-nosotros"/>
              </div>              
              <div className="toolbar-title">
                <span className="text-nosotros">Acerca de nosotros</span>
              </div>
            </div>
          </IonToolbar>

          <div className="nosotros-container">
            <section className="redes-section">
              <h2>Sitios oficiales INEA</h2>
              <ul className="redes-list">
                <li>
                  <a href="https://facebook.com/INEA" target="_blank" rel="noopener noreferrer">
                    <IonIcon icon={logoFacebook} className="icon" />
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="https://inea.edu.mx" target="_blank" rel="noopener noreferrer">
                    <IonIcon icon={globeOutline} className="icon" />
                    Sitio web
                  </a>
                </li>
                <li>
                  <a href="https://instagram.com/INEA" target="_blank" rel="noopener noreferrer">
                    <IonIcon icon={logoInstagram} className="icon" />
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="https://tiktok.com/@INEA" target="_blank" rel="noopener noreferrer">
                    <IonIcon icon={musicalNotesOutline} className="icon" />
                    TikTok
                  </a>
                </li>
              </ul>
            </section>

            <div className="divider"></div>

            <section className="contacto-section">
              <h2>Dudas o aclaraciones</h2>
              <div className="contacto-info">
                <a href="https://www.ineedu.edu.mx" target="_blank" rel="noopener noreferrer" className="website-link">
                  www.ineedu.edu.mx
                </a>
                <a href="tel:+527351000487" className="telefono-link">
                  +52 (735) 100 04 87
                </a>
              </div>
            </section>
          </div>
        </IonContent>
      </IonPage>
    </>
  );
};

export default Nosotros;