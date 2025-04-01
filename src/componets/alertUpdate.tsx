import {
    IonModal
} from "@ionic/react";
import React from "react";

import "./css/login/alertUpdate.css";

interface SuccessAlert {
    isOpen: boolean;
    image: string;
}

  
const alertUpdate: React.FC<SuccessAlert> = ({ isOpen, image }) => {

    return (
        <IonModal isOpen={isOpen}>
            <div className="success-alert-container">
                <img src={image} alt="Éxito" />
                <h2>¡Registro exitoso!</h2>
            </div>
        </IonModal>
    );
}; 
export default alertUpdate;