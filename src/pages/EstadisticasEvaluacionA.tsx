import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonBackButton, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonList, IonItem, IonLabel, IonProgressBar, IonBadge } from '@ionic/react';
import { Chart } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

const EstadisticasEvaluacion: React.FC<{ match: { params: { id: string } } }> = ({ match }) => {
  const materiaId = match.params.id;
  const materias = {
    lengua1: "Lengua y comunicación 1",
    lengua2: "Lengua y comunicación 2",
    matematicas1: "Pensamiento matemático 1"
  };

  const data = {
    labels: ['Muy bueno', 'Bueno', 'Intermedio', 'Malo', 'Muy malo'],
    datasets: [
      {
        label: 'Evaluación docente',
        data: [5, 20, 8, 8, 11],
        backgroundColor: [
          '#4CAF50',
          '#8BC34A',
          '#FFC107',
          '#FF9800',
          '#F44336'
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref={`/evaluacion/${materiaId}`} />
          </IonButtons>
          <IonTitle>{materias[materiaId as keyof typeof materias]} - Estadísticas</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Puntaje de evaluación</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonList>
              <IonItem>
                <IonLabel>100%</IonLabel>
                <IonProgressBar value={1} color="success"></IonProgressBar>
              </IonItem>
              <IonItem>
                <IonLabel>50%</IonLabel>
                <IonProgressBar value={0.5} color="warning"></IonProgressBar>
              </IonItem>
              <IonItem>
                <IonLabel>0%</IonLabel>
                <IonProgressBar value={0} color="danger"></IonProgressBar>
              </IonItem>
            </IonList>
          </IonCardContent>
        </IonCard>

        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Nivel de excelencia</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <IonBadge color="danger">Bajo rendimiento</IonBadge>
              <IonBadge color="success">Alto rendimiento</IonBadge>
            </div>
          </IonCardContent>
        </IonCard>

        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Respuesta de evaluación</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <h3>Pregunta 1.</h3>
            <p>¿Qué tan interesantes son las explicaciones del docente?</p>
            <div style={{ height: '300px' }}>
              <Chart type="pie" data={data} />
            </div>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default EstadisticasEvaluacion;