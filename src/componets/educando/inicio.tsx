import {
  IonContent,
  IonPage,
  IonMenu,
  IonButton,
  IonMenuButton,
  IonToolbar,
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

import Lengua_1 from "./img/LyC1.png";
import Lengua_2 from "./img/LyC2.png";
import Mat_1 from "./img/PM1.png";
import Mat_2 from "./img/PM2.png";
import Vida_1 from "./img/VyC1.png";

import "./css/menu.css"; // Personalizar menu
import "./css/inicio.css";

const Inicio: React.FC = () => {
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
  const Calificacion = () => navigateAndCloseMenu("/educando/calificacion");
  const Evaluacion = () => navigateAndCloseMenu("/educando/evaluacion");
  const Nosotros = () => navigateAndCloseMenu("/educando/nosotros");
  const Login = () => navigateAndCloseMenu("/login");

  const Lengua1 = () => navigateAndCloseMenu("/educando/materias/Lengua-y-Comunicacion-1");
  const Lengua2 = () => navigateAndCloseMenu("/educando/materias/Lengua-y-Comunicacion-2");
  const Mate1 = () => navigateAndCloseMenu("/educando/materias/Pensamiento-Matematico-1");
  const Mate2 = () => navigateAndCloseMenu("/educando/materias/Pensamiento-Matematico-2");
  const Vida1 = () => navigateAndCloseMenu("/educando/materias/Vida-y-Comunidad-1");

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
          <IonToolbar>
            <div className="info-inicio">
              <div className="menu-inicio">
                <IonMenuButton>
                  <img src={menuIcon} style={{ width: "24px" }} />
                </IonMenuButton>
                <img src={user} className="user-inicio"/>
              </div>
              <div className="info-texto">
                <span className="bienvenida">Te damos la bienvenida:</span>
                <span className="educando">Marco Aurelio Gil Carrillo.</span>
                <span className="aspirante-educando">Aspirando la escuela primaria</span>
              </div>
            </div>
          </IonToolbar>

          <div className="box-inicio"> 
              <IonButton  
                onClick={Lengua1}
                style={{ '--background': 'transparent', '--box-shadow': 'none' }}
              >
                  <img src={Lengua_1}/>
              </IonButton>

              <IonButton 
                onClick={Lengua2}
                style={{ '--background': 'transparent', '--box-shadow': 'none' }}
              >
                  <img src={Lengua_2}/>
              </IonButton>

              <IonButton 
                onClick={Mate1}
                style={{ '--background': 'transparent', '--box-shadow': 'none' }}
              >
                  <img src={Mat_1}/>
              </IonButton>

              <IonButton 
                onClick={Mate2}
                style={{ '--background': 'transparent', '--box-shadow': 'none' }}
              >
                  <img src={Mat_2}/>
              </IonButton>

              <IonButton 
                onClick={Vida1}
                style={{ '--background': 'transparent', '--box-shadow': 'none' }}
              >
                  <img src={Vida_1}/>
              </IonButton>

          </div>
        </IonContent>
      </IonPage>
    </>
  );
};

export default Inicio;