import React from 'react';
import { 
  IonMenu, 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonContent, 
  IonList, 
  IonItem, 
  IonLabel,
  IonIcon 
} from '@ionic/react';
import { useHistory } from 'react-router-dom';
import { logOutOutline } from 'ionicons/icons'; // Importa el icono de salida

const Menu: React.FC = () => {
    const history = useHistory();

    const navigateTo = (path: string) => {
        history.push(path);
    };

    const handleLogout = () => {
        // Lógica para cerrar sesión
        console.log('Cerrando sesión...');
        localStorage.clear();
        history.push('/login');
    };

    return (
        <IonMenu contentId="main-content">
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Menú INEDU</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonList>
                    <IonItem button onClick={() => navigateTo('/inicio')}>
                        <IonLabel>Inicio</IonLabel>
                    </IonItem>
                    <IonItem button onClick={() => navigateTo('/perfil')}>
                        <IonLabel>Perfil</IonLabel>
                    </IonItem>
                    <IonItem button onClick={() => navigateTo('/examenes')}>
                        <IonLabel>Exámenes</IonLabel>
                    </IonItem>
                    <IonItem button onClick={() => navigateTo('/calificacion')}>
                        <IonLabel>Calificación</IonLabel>
                    </IonItem>
                    <IonItem button onClick={() => navigateTo('/evaluacion')}>
                        <IonLabel>Evaluación</IonLabel>
                    </IonItem>
                    <IonItem button onClick={() => navigateTo('/acerca-de-nosotros')}>
                        <IonLabel>Acerca de nosotros</IonLabel>
                    </IonItem>
                </IonList>
                
                {/* Botón de Salir con mismo estilo que Perfil, en la parte inferior */}
                <IonList style={{ position: 'absolute', bottom: '0', width: '100%' }}>
                    <IonItem 
                        button 
                        onClick={handleLogout}
                        detail={false}
                    >
                        <IonIcon slot="start" icon={logOutOutline} />
                        <IonLabel>Salir</IonLabel>
                    </IonItem>
                </IonList>
            </IonContent>
        </IonMenu>
    );
};

export default Menu;