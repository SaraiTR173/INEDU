import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { logoFacebook, logoInstagram, logoTwitter, globeOutline } from 'ionicons/icons'; // Iconos de Ionic
import { IonIcon } from '@ionic/react';
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

                    {/* Sección de sitios oficiales */}
                    <div className="sitios-oficiales">
                        <h2>Sitios oficiales INEA</h2>
                        <ul>
                            <li>
                                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                    <IonIcon icon={logoFacebook} /> Facebook
                                </a>
                            </li>
                            <li>
                                <a href="https://inea.edu.mx" target="_blank" rel="noopener noreferrer">
                                    <IonIcon icon={globeOutline} /> Sitio web
                                </a>
                            </li>
                            <li>
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                    <IonIcon icon={logoInstagram} /> Instagram
                                </a>
                            </li>
                            <li>
                                <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
                                    <IonIcon icon={logoTwitter} /> TikTok
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Sección de dudas o aclaraciones */}
                    <div className="dudas-aclaraciones">
                        <h2>Dudas o aclaraciones</h2>
                        <p>
                            <a href="http://www.ineedu.edu.mx" target="_blank" rel="noopener noreferrer">
                                www.ineedu.edu.mx
                            </a>
                        </p>
                        <p>+52 (735) 100 04 87</p>
                    </div>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default AcercaDeNosotros;