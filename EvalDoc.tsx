import React, { useState } from "react";
import {
  IonApp,
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonMenuButton,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonRadio,
  IonRadioGroup,
  IonButton,
  IonMenu,
} from "@ionic/react";
import "./EvalDoc.css";

export default function EvaluacionDocente() {
  const [respuestas, setRespuestas] = useState({});

  const handleRadioChange = (pregunta, valor) => {
    setRespuestas({ ...respuestas, [pregunta]: valor });
  };

  const handleSubmit = () => {
    console.log("Respuestas enviadas:", respuestas);
    alert("Respuestas enviadas correctamente.");
  };

  return (
    <IonApp>
      {/* Menú lateral */}
      <IonMenu contentId="main-content">
        <IonHeader>
          <IonToolbar color="primary">
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

      {/* Página principal */}
      <IonPage id="main-content">
        <IonHeader>
          <IonToolbar color="primary">
            <IonButtons slot="start">
              <IonMenuButton />
            </IonButtons>
            <IonTitle>Evaluación Docente</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonContent className="ion-padding">
          <IonList>
            {/* Pregunta 1 */}
            <IonItem className="pregunta">
              <IonLabel>
                <h3>Pregunta 1.</h3>
                <p>¿Qué tan interesantes son las explicaciones del docente?</p>
              </IonLabel>
            </IonItem>
            <IonRadioGroup
              onIonChange={(e) => handleRadioChange("pregunta1", e.detail.value)}
            >
              <IonItem>
                <IonRadio slot="start" value="muy_bueno" /> Muy bueno.
              </IonItem>
              <IonItem>
                <IonRadio slot="start" value="bueno" /> Bueno
              </IonItem>
              <IonItem>
                <IonRadio slot="start" value="intermedio" /> Intermedio
              </IonItem>
              <IonItem>
                <IonRadio slot="start" value="malo" /> Malo
              </IonItem>
              <IonItem>
                <IonRadio slot="start" value="muy_malo" /> Muy malo
              </IonItem>
            </IonRadioGroup>

            {/* Pregunta 2 */}
            <IonItem className="pregunta">
              <IonLabel>
                <h3>Pregunta 2.</h3>
                <p>¿Se llegó a dormir en clases mientras el docente explicaba?</p>
              </IonLabel>
            </IonItem>
            <IonRadioGroup
              onIonChange={(e) => handleRadioChange("pregunta2", e.detail.value)}
            >
              <IonItem>
                <IonRadio slot="start" value="siempre" /> Siempre
              </IonItem>
              <IonItem>
                <IonRadio slot="start" value="a_veces" /> A veces
              </IonItem>
              <IonItem>
                <IonRadio slot="start" value="nunca" /> Nunca
              </IonItem>
            </IonRadioGroup>

            {/* Pregunta 3 */}
            <IonItem className="pregunta">
              <IonLabel>
                <h3>Pregunta 3.</h3>
                <p>¿Se le llegó a antojar el docente mientras le explicaba la clase?</p>
              </IonLabel>
            </IonItem>
            <IonRadioGroup
              onIonChange={(e) => handleRadioChange("pregunta3", e.detail.value)}
            >
              <IonItem>
                <IonRadio slot="start" value="por_supuesto" /> Por supuesto
              </IonItem>
              <IonItem>
                <IonRadio slot="start" value="claro" /> Claro
              </IonItem>
              <IonItem>
                <IonRadio slot="start" value="puede_ser" /> Puede ser
              </IonItem>
              <IonItem>
                <IonRadio slot="start" value="no" /> No
              </IonItem>
            </IonRadioGroup>

            {/* Botón de Enviar */}
            <IonButton expand="full" color="primary" onClick={handleSubmit}>
              Enviar
            </IonButton>
          </IonList>
        </IonContent>
      </IonPage>
    </IonApp>
  );
}
