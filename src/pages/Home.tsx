import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
// import ExploreContainer from '../components/RegistroINEEA';
import PerfilEducador from '../components/PerfilEducador';

const Home: React.FC = () => {
  const educador = {
    nombre: 'Juan Pérez Peña Becerro',
    especialidad: 'Matemáticas',
    correo: 'juanperez@ineea.com.mx',
    telefono: '+52 123456789',
    foto: 'src/img/juan.webp', // Asegúrate de que la ruta de la foto sea válida
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Perfil Educador</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Perfil del Educador</IonTitle>
          </IonToolbar>
        </IonHeader>
        {/* Aquí insertas el componente PerfilEducador */}
        <PerfilEducador educador={educador} />
        {/* <ExploreContainer /> */}
      </IonContent>
    </IonPage>
  );
};

export default Home;
