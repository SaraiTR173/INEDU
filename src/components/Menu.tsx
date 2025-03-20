import React, { useEffect } from 'react';
import {
    IonMenu,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonItem,
    IonLabel,
    IonButtons,
    IonMenuButton,
    IonPage,
} from '@ionic/react';
import { useHistory } from 'react-router-dom';

const Menu: React.FC = () => {
    const history = useHistory();

    const navigateTo = (path: string) => {
        history.push(path);
    };

    // Función para manejar el evento de teclado (Ctrl + I)
    const handleKeyDown = (event: KeyboardEvent) => {
        if (event.ctrlKey && event.key === 'i') {
            const menu = document.querySelector('ion-menu');
            if (menu) {
                menu.open();
            }
        }
    };

    // Agregar el evento al montar el componente
    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <>
            {/* Menú desplegable */}
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

            {/* Página principal */}
            <IonPage id="main-content">
                <IonHeader>
                    <IonToolbar>
                        {/* Botón para abrir el menú */}
                        <IonButtons slot="start">
                            <IonMenuButton />
                        </IonButtons>
                        <IonTitle>Menú</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent className="ion-padding">
                    <p>Presiona el botón en la barra de herramientas o usa <strong>Ctrl + I</strong> para abrir el menú.</p>
                </IonContent>
            </IonPage>
        </>
    );
};

export default Menu;