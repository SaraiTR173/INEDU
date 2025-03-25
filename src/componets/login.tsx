import {
  IonToolbar,
  IonButton,
  IonContent,
  IonInput,
  IonItem,
  IonPage,
  IonIcon
} from "@ionic/react";
import React from "react";
import { useState, useEffect } from "react";
import { eyeOffOutline, eyeOutline } from "ionicons/icons";
import { useHistory } from "react-router-dom";

import elipse from "./img/elipse-login.png";
import accesorio from "./img/accesorio-login.png";
import logo from "./img/logo.png";

import "./css/login.css";

const Login: React.FC = () => {
  //Componentes de Login
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [greeting, setGreeting] = useState("");
  const history = useHistory(); 

  useEffect(() => {
    const getGreeting = () => {
      const hour = new Date().getHours();
      if (hour < 12) return "¡Buenos días, bienvenidos!";
      if (hour < 20) return "¡Buenas tardes, bienvenidos!";
      return "¡Buenas noches, bienvenidos!";
    };
    setGreeting(getGreeting());
  }, []);

  const handleLogin = () => {
    console.log("Logging in with", email, password);
  };
  
  const handleVerify = () => {
    history.push("/verify");
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
          <div style={{ borderBottom: '12px solid #009CDE', width:'40%'}}></div>
          <div style={{ borderBottom: '12px solid #4CAF50', width:'45%'}}></div>
          <div style={{ borderBottom: '12px solid #FFC107', width:'50%'}}></div>
          <div style={{ borderBottom: '12px solid #FF9800', width:'55%'}}></div>
          <div style={{ borderBottom: '12px solid #E53935', width:'45%'}}></div>
          <div style={{ borderBottom: '12px solid #717FC7', width:'20%'}}></div>
        </IonToolbar>
        <img src={accesorio} className="accesorio"/>
        <img src={elipse} className="login-elipse"/>
        <div className="login-box">
          <div>
            <img src={logo} className="login-logo"/>
            <h2 className="nombre">INEDU</h2>
            <div className="inicio-box">
              <h3 className="saludo">{greeting}</h3>
              <IonItem className="login-input">
                <IonInput
                  type="email"
                  placeholder="Correo de INEA"
                  value={email}
                  onIonChange={(e) => setEmail(e.detail.value!)}
                />
              </IonItem>
              <IonItem className="login-input">
                <IonInput
                  type={showPassword ? "text" : "password"}
                  placeholder="Contraseña"
                  value={password}
                  onIonChange={(e) => setPassword(e.detail.value!)}
                />
                <IonIcon
                  icon={showPassword ? eyeOffOutline : eyeOutline}
                  slot="end"
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                />
              </IonItem>
              <div className="login-options">
                <label>
                  <input type="checkbox" /> Recordarme
                </label>
                <a onClick={handleVerify}>¿Olvide mi contraseña?</a>
              </div>
            </div> 
            <IonButton expand="full" className="login-button" onClick={handleLogin}>
              INICIAR
            </IonButton>
          </div>
        </div> 
      </IonContent>
    </IonPage>
  );
};

export default Login;
