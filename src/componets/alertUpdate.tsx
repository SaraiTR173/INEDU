import {
    IonModal
} from "@ionic/react";
import React from "react";

import "./css/updatePass.css";

interface SuccessAlert {
    isOpen: boolean;
    image: string;
}

  
const alertUpdate: React.FC<SuccessAlert> = ({ isOpen, image }) => {

    return (
        <IonModal isOpen={isOpen} className="custom-modal">
            <div style={{ textAlign: "center", padding: "20px" }}>
                <img src={image} alt="Éxito" style={{ width: "100px", marginBottom: "15px" }} />
                <h2>¡Registro exitoso!</h2>
            </div>
        </IonModal>
    );
}; 
export default alertUpdate;