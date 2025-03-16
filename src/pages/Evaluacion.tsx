import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const Evaluacion: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Evaluación</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <h1>Evaluación</h1>
                {/* Contenido de la página de evaluación */}
            </IonContent>
        </IonPage>
    );
};

export default Evaluacion;