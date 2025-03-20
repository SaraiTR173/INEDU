import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonLabel, IonToggle, IonButton, IonAvatar } from '@ionic/react';
import './PerfilEducador.css'; // Importa el archivo CSS

const PerfilEducador: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Perfil Educador</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <div className="profile-container">
                    {/* Sección de la foto de perfil */}
                    <div className="profile-picture">
                        <IonAvatar>
                            <img src="src\img\juan.jpg" alt="Foto de perfil" />
                        </IonAvatar>
                        <IonButton expand="block" color="primary" className="change-photo-button">
                            Cambiar foto
                        </IonButton>
                    </div>

                    {/* Información del perfil */}
                    <div className="profile-info">
                        <IonItem>
                            <IonLabel>
                                <strong>Nombre completo:</strong> Marco Aurelio Gil Carrillo.
                            </IonLabel>
                        </IonItem>
                        <IonItem>
                            <IonLabel>
                                <strong>Idioma:</strong> Español
                            </IonLabel>
                        </IonItem>
                        <IonItem>
                            <IonLabel>
                                <strong>Entidad federativa:</strong> Morelos
                            </IonLabel>
                        </IonItem>
                    </div>

                    {/* Configuración de notificaciones */}
                    <div className="notifications-settings">
                        <h2>Notificaciones</h2>
                        <IonItem>
                            <IonLabel>Permitir notificaciones</IonLabel>
                            <IonToggle slot="end" />
                        </IonItem>
                        <IonItem>
                            <IonLabel>Notificaciones de percepción</IonLabel>
                            <IonToggle slot="end" />
                        </IonItem>
                    </div>

                    {/* Botón para cambiar contraseña */}
                    <div className="change-password">
                        <IonButton expand="block" color="medium">
                            Cambiar contraseña
                        </IonButton>
                    </div>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default PerfilEducador;