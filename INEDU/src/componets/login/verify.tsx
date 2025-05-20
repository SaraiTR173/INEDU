import {
    IonContent,
    IonPage,
    IonItem,
    IonInput,
    IonToolbar,
    IonButton
  } from "@ionic/react";
import React from "react";
import { useState} from "react";
import { useHistory } from "react-router-dom";

import img1 from "./img/img1.png";
import up from "./img/elipseUp-verify.png";
import down from "./img/elipseDown-verify.png";

import "./css/verify.css";
  
  const Verify: React.FC = () => {
    //Componentes de Login
    const [CURP, setCURP] = useState("");
    const [code, setCode] = useState("");
    const history = useHistory(); 
    
    const handleUpdatePass = () => {
        console.log("Valide in with", CURP, code);
        history.push("/update_pass");
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
                <div className="verify-box">
                    <img src={up} className="verify-elipse-up"/>
                    <img src={img1} className="verify-img1"/>
                    <h1 className="text"> ¡Bienvenido! </h1>
                    <div className="cont">
                        <h5 className="input-text"> Ingresa el CURP que compone  tu cuenta </h5>
                        <IonItem className="verify-input">
                            <IonInput
                                type="text"
                                value={CURP}
                                onIonChange={(e) => setCURP(e.detail.value!)}
                            />
                        </IonItem>
                        <h5 className="input-text"> Ingresa el número del docente  correspondido en tu curso </h5>
                        <IonItem className="verify-input">
                            <IonInput
                                type="text"
                                value={code}
                                onIonChange={(e) => setCode(e.detail.value!)}
                            />
                        </IonItem>
                    </div>
                    <IonButton expand="full" className="btnverify" onClick={handleUpdatePass}>
                        VALIDAR
                    </IonButton>
                    <img src={down} className="verify-elipse-down"/>
                </div> 
            </IonContent>
        </IonPage>
    );
  };
  
  export default Verify;