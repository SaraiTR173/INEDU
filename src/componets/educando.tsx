import {
    IonContent,
    IonPage,
    IonAvatar,
    IonButton,
    IonCard,
    IonCardContent,
    IonToolbar,
    IonHeader,
    IonButtons,
    IonMenuButton,
  } from "@ionic/react";
  import React from "react";
  
  import "./css/educando.css";
  
  const Educando: React.FC = () => {
    return (
      <IonPage>
        <IonContent>
          <div className="profile-container">
            <IonAvatar className="profile-avatar">
              <img src="assets/avatar.png" alt="Avatar" />
            </IonAvatar>
            <div className="profile-info">
              <h2>Te damos la bienvenida,</h2>
              <h3>Marco Aurelio Gil Carrillo</h3>
              <p>Aspirando la escuela primaria</p>
              <p className="status">
                Alumno: <span className="active"> Activo </span>
              </p>
            </div>
          </div>
  
          {/* Sección de materias */}
          <div className="subjects-container">
            <IonCard className="subject-card">
              <img src="assets/lengua1.png" alt="Lengua 1" />
              <IonCardContent>
                <IonButton expand="block" color="success">
                  Lengua y comunicación 1
                </IonButton>
              </IonCardContent>
            </IonCard>
  
            <IonCard className="subject-card">
              <img src="assets/lengua2.png" alt="Lengua 2" />
              <IonCardContent>
                <IonButton expand="block" color="success">
                  Lengua y comunicación 2
                </IonButton>
              </IonCardContent>
            </IonCard>
  
            <IonCard className="subject-card">
              <img src="assets/matematicas.png" alt="Matemáticas" />
              <IonCardContent>
                <IonButton expand="block" color="tertiary">
                  Pensamiento matemático 1
                </IonButton>
              </IonCardContent>
            </IonCard>
          </div>
        </IonContent>
      </IonPage>
    );
  };
  
  export default Educando;
  