import {
    IonContent,
    IonPage,
    IonHeader,
    IonMenu,
    IonMenuButton,
    IonToolbar,
    IonButtons
  } from "@ionic/react";
  import React from "react";
  import menuIcon from "../img/menu.png"; 
  
  const Mate2: React.FC = () => {
  
    return (
      <>
        <IonMenu contentId="main-content"> </IonMenu>
  
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
                <h1>Contenido de Pensamiento Matematico 2</h1>
          </IonContent>
        </IonPage>
      </>
    );
  };
  
  export default Mate2;