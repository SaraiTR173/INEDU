import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
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
                <div className="profile-info">
                    <h1>Perfil Educador</h1>
                    <p>Nombre completo: Marco Aurelio Gil Carrillo.</p>
                    <p>Idioma: Español</p>
                    <p>Entidad federativa: Morelos</p>
                    <label>
                        <input type="checkbox" /> Permitir notificaciones
                    </label>
                    <label>
                        <input type="checkbox" /> Notificaciones de percepción
                    </label>
                    <button>Cambiar contraseña</button>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default PerfilEducador;