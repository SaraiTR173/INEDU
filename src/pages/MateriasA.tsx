import React from 'react';
import { 
  IonContent, 
  IonHeader, 
  IonPage, 
  IonTitle, 
  IonToolbar, 
  IonGrid, 
  IonRow, 
  IonCol, 
  IonCard, 
  IonCardHeader, 
  IonCardTitle, 
  IonCardContent 
} from '@ionic/react';
import "./MateriasA.css";

const Materias: React.FC = () => {
  return (
    <IonPage className="materias-page">
      <IonHeader>
        <IonToolbar className="header-toolbar">
          <IonTitle className="page-title">Seleccione la materia de evaluación</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding content-background">
        <IonGrid className="materias-grid">
          <IonRow>
            {/* Lengua y Comunicación 1 */}
            <IonCol size="12" sizeMd="6" sizeLg="4">
              <IonCard 
                button 
                routerLink="/evaluacion/lengua1"
                className="materia-card lengua-card"
              >
                <IonCardHeader className="card-header">
                  <IonCardTitle className="card-title">Lengua y comunicación 1</IonCardTitle>
                  <div className="card-subtitle">Lengua 1</div>
                </IonCardHeader>
                <IonCardContent className="card-content">
                  <img 
                    src="src\img\pen_mat_1.png" 
                    alt="Lengua 1" 
                    className="materia-img" 
                  />
                </IonCardContent>
              </IonCard>
            </IonCol>

            {/* Lengua y Comunicación 2 */}
            <IonCol size="12" sizeMd="6" sizeLg="4">
              <IonCard 
                button 
                routerLink="/evaluacion/lengua2"
                className="materia-card lengua-card"
              >
                <IonCardHeader className="card-header">
                  <IonCardTitle className="card-title">Lengua y comunicación 2</IonCardTitle>
                  <div className="card-subtitle">Lengua 2</div>
                </IonCardHeader>
                <IonCardContent className="card-content">
                  <img 
                    src="src\img\pen_mat_1.png" 
                    alt="Lengua 2" 
                    className="materia-img" 
                  />
                </IonCardContent>
              </IonCard>
            </IonCol>

            {/* Pensamiento Matemático 1 */}
            <IonCol size="12" sizeMd="6" sizeLg="4">
              <IonCard 
                button 
                routerLink="/evaluacion/matematicas1"
                className="materia-card matematicas-card"
              >
                <IonCardHeader className="card-header">
                  <IonCardTitle className="card-title">Pensamiento matemático 1</IonCardTitle>
                  <div className="card-subtitle">Matemáticas 1</div>
                </IonCardHeader>
                <IonCardContent className="card-content">
                  <img 
                    src="src\img\pen_mat_1.png" 
                    alt="Matemáticas 1" 
                    className="materia-img" 
                  />
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Materias;