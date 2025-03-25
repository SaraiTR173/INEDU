import {
    IonContent,
    IonPage,
    IonItem,
    IonInput,
    IonToolbar,
    IonButton,
    IonIcon
} from "@ionic/react";
import React from "react";
import { useState} from "react";
import { eyeOffOutline, eyeOutline } from "ionicons/icons";
import { useIonRouter } from "@ionic/react"; // Para la redirección

import SuccessAlertUpdate from "./alertUpdate"; 
import successImage from "./img/updatePass.png";

import img1 from "./img/img1.png";
import up from "./img/elipseUp-verify.png";
import down from "./img/elipseDown-verify.png";


import "./css/updatePass.css";
  
  const UpdatePass: React.FC = () => {
    //Componentes de Login
    const [pass, setPass] = useState("");
    const [confirm, setConfim] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showAlert, setShowAlert] = useState(false); // Estado para mostrar la alerta
    const router = useIonRouter(); // Ionic Router para redirigir
    
    const handleConfirm = () => {
        console.log("Valide in with", pass, confirm);
        setShowAlert(true); // Mostrar la alerta primero
        setTimeout(() => {
            setShowAlert(false); // Ocultar alerta
            router.push("/login", "forward"); // Redirigir al login después de 2 segundos
        }, 2000);
    };

    return (
        <IonPage >
            <IonContent>
                <IonToolbar style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    zIndex: 1000,
                    background: 'white'
                }}> 
                </IonToolbar>
                <div className="update-box">
                    <img src={up} className="update-elipse-up"/>
                    <img src={img1} className="update-img1"/>
                    <h1 className="update-text"> ¡Valide! </h1>
                    <div className="update-cont">
                        <h5 className="update-text-input"> Ingrese su nueva contraseña </h5>
                        <IonItem className="update-input">
                        <IonInput
                                type={showPassword ? "text" : "password"}
                                value={pass}
                                onIonChange={(e) => setPass(e.detail.value!)}
                            />
                            <IonIcon
                                icon={showPassword ? eyeOffOutline : eyeOutline}
                                slot="end"
                                className="password-toggle"
                                onClick={() => setShowPassword(!showPassword)}
                            />
                        </IonItem>
                        <h5 className="update-text-input"> Valide nuevamente su contraseña </h5>
                        <IonItem className="update-input">
                            <IonInput
                                type={showPassword ? "text" : "password"}
                                value={confirm}
                                onIonChange={(e) => setConfim(e.detail.value!)}
                            />
                            <IonIcon
                                icon={showPassword ? eyeOffOutline : eyeOutline}
                                slot="end"
                                className="password-toggle"
                                onClick={() => setShowPassword(!showPassword)}
                            />
                        </IonItem>
                    </div>
                    <IonButton expand="full" className="btnupdate" onClick={handleConfirm}>
                        CONFIRMAR
                    </IonButton>
                    <img src={down} className="update-elipse-down"/>
                </div> 

                <SuccessAlertUpdate
                    isOpen={showAlert}
                    image={successImage}
                />
            </IonContent>
        </IonPage>
    );
  };
  
  export default UpdatePass;