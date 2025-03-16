import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonMenuButton } from '@ionic/react';

const Home: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonMenuButton slot="start" />
                    <IonTitle>Inicio</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <h1>Bienvenido al INEA</h1>
                {/* Contenido de la página de inicio */}
            </IonContent>
        </IonPage>
    );
};

export default Home;