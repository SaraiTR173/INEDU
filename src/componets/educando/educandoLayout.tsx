import React from "react";
import {
  IonContent,
  IonPage,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonMenu,
  IonMenuButton,
  IonTitle,
  IonButton,
  IonIcon,
  IonLabel,
  IonItem,
  IonList,
} from "@ionic/react";

import {
  homeOutline,
  personOutline,
  listOutline,
  documentTextOutline,
  clipboardOutline,
  informationCircleOutline,
  logOutOutline,
} from "ionicons/icons";

import "./css/educando.css"; // Personaliza este archivo

const Educando: React.FC = () => {
  return (
    <>
      <IonMenu contentId="main-content" side="start">
        <IonHeader>
          <IonToolbar color="light">
            <IonTitle>Menú</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="educando-menu">
          <div className="educando-header">
            <img
              src="https://cdn-icons-png.flaticon.com/512/847/847969.png"
              alt="Avatar"
              className="avatar"
            />
            <div className="educando-info">
              <p className="educando-name">Marco Aurelio Gil Carrillo.</p>
              <p className="educando-status">Alumno: <span className="activo">Activo</span></p>
            </div>
          </div>

          <IonList lines="none">
            <IonItem button>
              <IonIcon icon={homeOutline} slot="start" />
              <IonLabel>Inicio</IonLabel>
            </IonItem>
            <IonItem button>
              <IonIcon icon={personOutline} slot="start" />
              <IonLabel>Perfil</IonLabel>
            </IonItem>
            <IonItem button>
              <IonIcon icon={listOutline} slot="start" />
              <IonLabel>Exámenes</IonLabel>
            </IonItem>
            <IonItem button>
              <IonIcon icon={documentTextOutline} slot="start" />
              <IonLabel>Calificación</IonLabel>
            </IonItem>
            <IonItem button>
              <IonIcon icon={clipboardOutline} slot="start" />
              <IonLabel>Evaluación</IonLabel>
            </IonItem>
            <IonItem button>
              <IonIcon icon={informationCircleOutline} slot="start" />
              <IonLabel>Acerca de nosotros</IonLabel>
            </IonItem>
          </IonList>

          <div className="educando-logout">
            <IonItem button color="danger">
              <IonIcon icon={logOutOutline} slot="start" />
              <IonLabel>Salir</IonLabel>
            </IonItem>
          </div>
        </IonContent>
      </IonMenu>

      <IonPage id="main-content">
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton />
            </IonButtons>
            <IonTitle>Menu</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          Tap the button in the toolbar to open the menu.
        </IonContent>
      </IonPage>
    </>
  );
};

export default Educando;
