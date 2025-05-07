import {
  IonContent,
  IonPage,
  IonHeader,
  IonMenu,
  IonButton,
  IonList,
  IonMenuButton,
  IonToolbar,
  IonButtons
} from "@ionic/react";
import React from "react";
import { useHistory } from "react-router-dom";

import menuIcon from "./img/menu.png";
import user from "./img/user.png";

import "./css/menu.css"; // Personaliza este archivo

const Evaluacion: React.FC = () => {
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

  return (
    <>
      <IonMenu contentId="main-content">
        <IonHeader>
          <div>
            <img src={user} alt="Avatar"
            />
            <div>
              <p>Marco Aurelio Gil Carrillo.</p>
              <p>Alumno: <span className="estado">Activo</span></p>
            </div>
          </div>
        </IonHeader>
        <IonContent>
          <IonList>
          <IonButton onClick={Inicio}>Inicio</IonButton>
          <IonButton onClick={Perfil}>Perfil</IonButton>
          <IonButton onClick={Examenes}>Exámenes</IonButton>
          <IonButton onClick={Calificacion}>Calificacion</IonButton>
          <IonButton onClick={Evaluacion}>Evaluacion</IonButton>
          <IonButton onClick={Nosotros}>Acerca de nosotros</IonButton>
          <IonButton onClick={Login}>Salir</IonButton>
          </IonList>
        </IonContent>
      </IonMenu>

      {/* Contenido principal */}
      <IonPage id="main-content">
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton>
                <img src={menuIcon} alt="Menú" style={{ width: "24px" }} />
              </IonMenuButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        
        <IonContent className="ion-padding">
              <h1>Contenido de Evaluacion</h1>
        </IonContent>
      </IonPage>
    </>
  );
};

export default Evaluacion;