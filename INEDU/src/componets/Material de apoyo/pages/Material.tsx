// src/pages/Material.tsx
import {
    IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonCard,
    IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent,
    IonImg, IonButtons, IonMenuButton, IonItem, IonThumbnail, IonLabel
  } from '@ionic/react';
  import './Material.css';
  const Material: React.FC = () => {
    return (
      <IonPage id="main-content">
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
            <IonMenuButton autoHide={false} />
            </IonButtons> 
            <IonTitle className='ion-text-center'>Material de apoyo</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <h2>Documento PDF</h2>
          <IonCard>
      <img alt="Pensamiento matematico" src="/public/assets/pensamientomm.jpeg" />
      <IonCardHeader>

      </IonCardHeader>

    </IonCard>
  
          <h2>Material complementario</h2>
          <h3>Video</h3>
          <IonItem>
            <IonThumbnail slot="start">
              <img alt="Silhouette of mountains" src="/public/assets/yutu.jpeg" />
            </IonThumbnail>
            <IonCardContent>
              <a href="https://youtube.com" target="_blank" rel="noreferrer">🎥 iHye - YouTube</a>
            </IonCardContent>
          </IonItem>
          <IonCard>
          </IonCard>
  
          <h3>Libro</h3>
          <IonCard>
          <IonItem>
            <IonThumbnail slot="start">
              <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
            </IonThumbnail>
            <IonCardContent>
              📘 <a href="https://library.com" target="_blank" rel="noreferrer">https://library.com</a>
            </IonCardContent>
          </IonItem>
          </IonCard>
  
          <IonCard>
          <IonItem>
            <IonThumbnail slot="start">
              <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
            </IonThumbnail>
            <IonCardContent>
              📘 <a href="https://library.com" target="_blank" rel="noreferrer">https://library.com</a>
            </IonCardContent>
          </IonItem>
          </IonCard>
        </IonContent>
      </IonPage>
    );
  };
  
  export default Material;
  