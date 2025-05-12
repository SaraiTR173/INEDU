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
import { logOutOutline } from 'ionicons/icons';

const MenuE: React.FC = () => {
  const history = useHistory();

  const navigateTo = (path: string) => {
    history.push(path);
    const menu = document.querySelector('ion-menu[menu-id="main"]') as HTMLIonMenuElement;
    menu?.close();
  };

  const handleLogout = () => {
    localStorage.clear();
    history.push('/inicio'); // Cambiado para redirigir al inicio
  };

  return (
    <IonMenu 
      contentId="main-content" 
      menuId="main"
      type="overlay"
      side="start"
    >
      <IonHeader>
        <IonToolbar>
          <IonTitle>Menú INEDU</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItem button onClick={() => navigateTo('/inicio')} detail={false}>
            <IonLabel>Inicio</IonLabel>
          </IonItem>
          <IonItem button onClick={() => navigateTo('/perfileducador')} detail={false}>
            <IonLabel>Educador</IonLabel>
          </IonItem>
          <IonItem button onClick={() => navigateTo('/perfilalumno')} detail={false}>
            <IonLabel>Alumno</IonLabel>
          </IonItem>
          <IonItem button onClick={() => navigateTo('/examenes')} detail={false}>
            <IonLabel>Exámenes</IonLabel>
          </IonItem>
          <IonItem button onClick={() => navigateTo('/calificacion')} detail={false}>
            <IonLabel>Calificación</IonLabel>
          </IonItem>
          <IonItem button onClick={() => navigateTo('/evaluacion')} detail={false}>
            <IonLabel>Evaluación</IonLabel>
          </IonItem>
          <IonItem button onClick={() => navigateTo('/acerca-de-nosotros')} detail={false}>
            <IonLabel>Acerca de nosotros</IonLabel>
          </IonItem>
        </IonList>

        <IonList style={{ position: 'absolute', bottom: '0', width: '100%' }}>
          <IonItem button onClick={handleLogout} detail={false}>
            <IonIcon slot="start" icon={logOutOutline} />
            <IonLabel>Salir</IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default MenuE;