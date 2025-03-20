import React from 'react';
import { IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel } from '@ionic/react';
import { useHistory } from 'react-router-dom';

const Menu: React.FC = () => {
    const history = useHistory();

    const navigateTo = (path: string) => {
        history.push(path);
    };

    return (
        <IonMenu contentId="main-content">
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Menú</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonList>
                    <IonItem onClick={() => navigateTo('/inicio')}>
                        <IonLabel>Inicio</IonLabel>
                    </IonItem>
                    <IonItem onClick={() => navigateTo('/perfil')}>
                        <IonLabel>Perfil</IonLabel>
                    </IonItem>
                    <IonItem onClick={() => navigateTo('/examenes')}>
                        <IonLabel>Exámenes</IonLabel>
                    </IonItem>
                    <IonItem onClick={() => navigateTo('/calificacion')}>
                        <IonLabel>Calificación</IonLabel>
                    </IonItem>
                    <IonItem onClick={() => navigateTo('/evaluacion')}>
                        <IonLabel>Evaluación</IonLabel>
                    </IonItem>
                    <IonItem onClick={() => navigateTo('/acerca-de-nosotros')}>
                        <IonLabel>Acerca de nosotros</IonLabel>
                    </IonItem>
                    <IonItem onClick={() => navigateTo('/salir')}>
                        <IonLabel>Salir</IonLabel>
                    </IonItem>
                </IonList>
            </IonContent>
        </IonMenu>
    );
};

export default Menu;