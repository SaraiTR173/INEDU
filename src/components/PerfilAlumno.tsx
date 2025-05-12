import React from 'react';
import { 
  IonPage, 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonContent,
  IonButtons,
  IonMenuButton
} from '@ionic/react';
import MenuA from './MenuA';

const PerfilAlumno: React.FC = () => {
  return (
    <>
      {/* Menú del Alumno (solo visible en esta página) */}
      <MenuA />
      
      <IonPage id="main-content">
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton autoHide={false} menu="main" />
            </IonButtons>
            <IonButtons slot="end">
              <IonMenuButton autoHide={false} menu="alumno" />
            </IonButtons>
            <IonTitle>Perfil del Alumno</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <div style={{ padding: '20px' }}>
            <h2>Bienvenido Alumno</h2>
            <p>Esta es tu área personal donde puedes ver tus cursos, calificaciones y realizar exámenes.</p>
          </div>
        </IonContent>
      </IonPage>
    </>
  );
};

export default PerfilAlumno;