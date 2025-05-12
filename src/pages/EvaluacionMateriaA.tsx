import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonButtons, IonBackButton } from '@ionic/react';

const EvaluacionMateria: React.FC<{ match: { params: { id: string } } }> = ({ match }) => {
  const materiaId = match.params.id;
  const materias = {
    lengua1: "Lengua y comunicación 1",
    lengua2: "Lengua y comunicación 2",
    matematicas1: "Pensamiento matemático 1"
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/materias" />
          </IonButtons>
          <IonTitle>{materias[materiaId as keyof typeof materias]} - Periodo 2025</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItem button routerLink={`/evaluacion/${materiaId}/alumnos`}>
            <IonLabel>Lista de alumnos</IonLabel>
          </IonItem>
          <IonItem button routerLink={`/evaluacion/${materiaId}/material`}>
            <IonLabel>Material didáctico</IonLabel>
          </IonItem>
          <IonItem button routerLink={`/evaluacion/${materiaId}/estadisticas`}>
            <IonLabel>Estadísticas de evaluación</IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default EvaluacionMateria;