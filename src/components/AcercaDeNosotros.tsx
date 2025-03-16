import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './AcercaDeNosotros.css'; // Importa el archivo CSS

const AcercaDeNosotros: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Acerca de nosotros</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <div className="acerca-de-nosotros">
                    <h1>Acerca de nosotros</h1>
                    <div className="social-links">
                        <a href="https://facebook.com">Facebook</a>
                        <a href="https://inea.edu.mx">Sitio web</a>
                        <a href="https://instagram.com">Instagram</a>
                        <a href="https://tiktok.com">TikTok</a>
                    </div>
                    <div className="contact-info">
                        <p>Dudas o aclaraciones:</p>
                        <a href="http://www.ineedu.edu.mx">www.ineedu.edu.mx</a>
                        <p>+52 (735) 100 04 87</p>
                    </div>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default AcercaDeNosotros;