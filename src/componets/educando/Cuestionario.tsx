import {
  IonApp, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardContent, IonList, IonItem,
  IonLabel, IonIcon, IonMenu, IonButtons, IonMenuButton, IonButton, IonGrid, IonRow, IonCol
} from '@ionic/react';
import { addCircleOutline } from 'ionicons/icons';
import './Cuestionario.css';

const QuizApp: React.FC = () => {
  const totalPreguntas = 20;
  const preguntasRespondidas = [2, 9, 12, 13, 14]; // ejemplo de preguntas respondidas

  return (
    <IonApp>
      <IonMenu contentId="main-content">
        <IonHeader>
          <IonToolbar color="success">
            <IonTitle className="ion-text-center">Lengua y comunicación 2</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <p>1 de 20 preguntas respondidas.</p>

          <IonGrid>
            <IonRow>
              {Array.from({ length: totalPreguntas }, (_, i) => {
                const numero = i + 1;
                const respondida = preguntasRespondidas.includes(numero);
                return (
                  <IonCol size="2" key={numero} className="ion-text-center" style={{ marginBottom: '8px' }}>
                    <button
                      style={{
                        width: '32px',
                        height: '32px',
                        backgroundColor: respondida ? '#e5e5e5' : '#f0f0f0',
                        color: 'black',
                        border: respondida ? '2px solid green' : '1px solid #ccc',
                        borderRadius: '4px',
                        fontWeight: respondida ? 'bold' : 'normal',
                      }}
                    >
                      {numero}
                    </button>
                  </IonCol>
                );
              })}
            </IonRow>
          </IonGrid>

          <IonButton expand="block" color="light" style={{ marginTop: '16px', backgroundColor: '#add8ff', borderRadius: '10px' }}>
            Volver
          </IonButton>

          <div style={{ position: 'absolute', bottom: '30px', width: '80%' }}>
            <IonButton expand="block" color="primary" style={{ backgroundColor: '#0a1d4d', borderRadius: '5px' }}>
              FINALIZAR
            </IonButton>
          </div>
        </IonContent>
      </IonMenu>

      <IonPage id="main-content">
        <IonHeader>
          <IonToolbar color="success">
            <IonButtons slot="start">
              <IonMenuButton />
            </IonButtons>
            <IonTitle>Lengua y comunicación 2</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonContent>
          <div className="quiz-container">
            <IonCard className="question-card">
              <IonCardContent>
                <h3 className="question-title">Pregunta 1</h3>
                <p className="question-text">¿En qué lado masca la iguana?</p>
                <IonList>
                  {['Respuesta a', 'Respuesta b', 'Respuesta c', 'Respuesta d'].map((respuesta, index) => (
                    <IonItem key={index} button className="answer-item">
                      <IonIcon icon={addCircleOutline} slot="start" className="icon-style" />
                      <IonLabel>{respuesta}</IonLabel>
                    </IonItem>
                  ))}
                </IonList>
              </IonCardContent>
            </IonCard>
          </div>
        </IonContent>
      </IonPage>
    </IonApp>
  );
};

export default QuizApp;
