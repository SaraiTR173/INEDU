import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonButtons,
    IonMenu,
    IonMenuToggle,
    IonList,
    IonItem,
    IonLabel,
  } from '@ionic/react';
  import { useHistory } from 'react-router';
  import './VyC.css';
  
  const Home: React.FC = () => {
    const history = useHistory();
  
    return (
      <>
        {/* Menú lateral */}
        <IonMenu contentId="main-content" side="start" menuId="main">
          <IonHeader>
            <IonToolbar className="menu-toolbar">
              <IonTitle className="menu-title">Menú</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent>
            <IonList>
              <IonMenuToggle>
                <IonItem button onClick={() => history.push('/')}>
                  <IonLabel>Inicio</IonLabel>
                </IonItem>
                <IonItem button onClick={() => history.push('/lista-alumnos')}>
                  <IonLabel>Lista de Alumnos</IonLabel>
                </IonItem>
                <IonItem button onClick={() => history.push('/material-didactico')}>
                  <IonLabel>Material Didáctico</IonLabel>
                </IonItem>
                <IonItem button onClick={() => history.push('/configuracion')}>
                  <IonLabel>Configuración</IonLabel>
                </IonItem>
                <IonItem button onClick={() => history.push('/salir')}>
                  <IonLabel>Salir</IonLabel>
                </IonItem>
              </IonMenuToggle>
            </IonList>
          </IonContent>
        </IonMenu>
  
        {/* Página principal */}
        <IonPage id="main-content">
          <IonHeader>
            <IonToolbar color="danger">
              <IonButtons slot="start">
                <div
                  className="custom-menu-button"
                  onClick={() =>
                    (document.querySelector('ion-menu') as HTMLIonMenuElement).open()
                  }
                >
                  <div className="bar"></div>
                  <div className="bar"></div>
                  <div className="bar"></div>
                </div>
              </IonButtons>
              <IonTitle className="titulo">Vida y Comunidad 1</IonTitle>
            </IonToolbar>
            <div className="subtitulo">Evaluación - Período 2025</div>
          </IonHeader>
  
          <IonContent fullscreen className="contenido">
            <div className="card" onClick={() => history.push('/lista-alumnos')}>
              <img src="./src/components/ListaAlumnos.png" alt="Lista de alumnos" />
              <div className="label azul">Lista de alumnos</div>
            </div>
  
            <div className="card" onClick={() => history.push('/material-didactico')}>
              <img src="./src/components/MaterialDidactico.png" alt="Material didáctico" />
              <div className="label rojo">Material didáctico</div>
            </div>
          </IonContent>
        </IonPage>
      </>
    );
  };
  
  export default Home;
  