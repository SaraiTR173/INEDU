import {
  IonContent,
  IonList,
  IonMenu,
  IonItem,
  IonAvatar,
  IonLabel,
  IonIcon,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonText,
  IonListHeader
} from '@ionic/react';
import {
  homeOutline, personOutline, documentTextOutline,
  starOutline, clipboardOutline, informationCircleOutline, logOutOutline
} from 'ionicons/icons';

const SideMenu: React.FC = () => {
  return (
    <IonMenu contentId="main-content" type="overlay">
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Bienvenido</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
          <IonAvatar style={{ margin: '0 auto' }}>
            <img src="https://via.placeholder.com/100" alt="Avatar" />
          </IonAvatar>
          <IonText>
            <h2 style={{ margin: '0.5rem 0 0' }}>Marco A. Gil</h2>
            <p style={{ color: 'green', fontWeight: 'bold', margin: 0 }}>Alumno: Activo</p>
          </IonText>
        </div>

        <IonList lines="full">
          <IonListHeader>Menú principal</IonListHeader>

          <IonItem routerLink="/inicio">
            <IonIcon icon={homeOutline} slot="start" />
            <IonLabel>Inicio</IonLabel>
          </IonItem>
          <IonItem routerLink="/perfil">
            <IonIcon icon={personOutline} slot="start" />
            <IonLabel>Perfil</IonLabel>
          </IonItem>
          <IonItem routerLink="/examenes">
            <IonIcon icon={documentTextOutline} slot="start" />
            <IonLabel>Exámenes</IonLabel>
          </IonItem>
          <IonItem routerLink="/calificacion">
            <IonIcon icon={starOutline} slot="start" />
            <IonLabel>Calificación</IonLabel>
          </IonItem>
          <IonItem routerLink="/evaluacion">
            <IonIcon icon={clipboardOutline} slot="start" />
            <IonLabel>Evaluación</IonLabel>
          </IonItem>
          <IonItem routerLink="/nosotros">
            <IonIcon icon={informationCircleOutline} slot="start" />
            <IonLabel>Acerca de</IonLabel>
          </IonItem>

          <IonItem button onClick={() => console.log('Cerrar sesión')}>
            <IonIcon icon={logOutOutline} slot="start" color="danger" />
            <IonLabel color="danger">Salir</IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default SideMenu;
