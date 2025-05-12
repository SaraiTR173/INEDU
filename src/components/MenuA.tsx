import React from 'react';
import { 
  IonMenu, 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonContent, 
  IonList, 
  IonItem, 
  IonLabel
} from '@ionic/react';
import { useHistory } from 'react-router-dom';

const MenuA: React.FC = () => {
  const history = useHistory();

  const navigateTo = (path: string) => {
    history.push(path);
    const menu = document.querySelector('ion-menu[menu-id="alumno"]') as HTMLIonMenuElement;
    menu?.close();
  };

  return (
    <IonMenu 
      contentId="main-content" 
      menuId="alumno"
      type="overlay"
      side="end"
    >
      <IonHeader>
        <IonToolbar>
          <IonTitle>Menú Alumno</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItem button onClick={() => navigateTo('/inicioalumno')} detail={false}>
            <IonLabel>Inicio Alumno</IonLabel>
          </IonItem>
          <IonItem button onClick={() => navigateTo('/materiasalumno')} detail={false}>
            <IonLabel>Materias Alumno</IonLabel>
          </IonItem>
          <IonItem button onClick={() => navigateTo('/perfilalumno/cursos')}detail={false}>
            <IonLabel>Cursos Alumno</IonLabel>
          </IonItem>
          <IonItem button onClick={() => navigateTo('/perfilalumno/calificaciones')}detail={false}>
            <IonLabel>Calificaciones Alumno</IonLabel>
          </IonItem>
          <IonItem button onClick={() => navigateTo('/perfilalumno/examenes')}detail={false}>
            <IonLabel>Exámenes Alumno</IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default MenuA;