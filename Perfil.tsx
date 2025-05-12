import React from "react";
import {
  IonApp,
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonMenuButton,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonGrid,
  IonRow,
  IonCol,
  IonAvatar,
  IonMenu,
  IonList,
  IonItem,
} from "@ionic/react";
import "./Perfil.css";

export default function Calificaciones() {
  return (
    <IonApp>
      {/* Menú lateral */}
      <IonMenu contentId="main-content">
        <IonHeader>
          <IonToolbar color="tertiary">
            <IonTitle>Menú</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonList>
            <IonItem button>Inicio</IonItem>
            <IonItem button>Perfil</IonItem>
            <IonItem button>Configuración</IonItem>
            <IonItem button>Salir</IonItem>
          </IonList>
        </IonContent>
      </IonMenu>

      {/* Contenido principal */}
      <IonPage id="main-content">
        <IonHeader>
          <IonToolbar color="tertiary">
            <IonButtons slot="start">
              <IonMenuButton />
            </IonButtons>
            <IonAvatar slot="end">
              <img src="https://via.placeholder.com/40" alt="Perfil" />
            </IonAvatar>
          </IonToolbar>
        </IonHeader>

        <IonContent className="ion-padding">
          <IonGrid className="grid-container">
            <IonRow>
              <IonCol size="12">
                <IonCard className="card-calificacion">
                  <IonCardHeader className="card-header">
                    <IonCardTitle>
                      <span className="card-title">Vida y comunidad 1</span>
                    </IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent>
                    <IonGrid>
                      <IonRow className="table-header">
                        <IonCol>CLAVE</IonCol>
                        <IonCol>TIPO DE EVALUACIÓN</IonCol>
                      </IonRow>
                      <IonRow className="table-data">
                        <IonCol>AKP-1298-SEE-1209</IonCol>
                        <IonCol>OR</IonCol>
                      </IonRow>
                      <IonRow className="table-header">
                        <IonCol>FECHA</IonCol>
                        <IonCol>CALIFICACIÓN</IonCol>
                      </IonRow>
                      <IonRow className="table-data">
                        <IonCol>06/12/2025</IonCol>
                        <IonCol>98</IonCol>
                      </IonRow>
                    </IonGrid>
                  </IonCardContent>
                </IonCard>

                {/* Indicadores de estado */}
                <div className="status-bar green"></div>
                <div className="status-bar purple"></div>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonContent>
      </IonPage>
    </IonApp>
  );
}
