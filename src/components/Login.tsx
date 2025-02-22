import {
  IonButton,
  IonContent,
  IonInput,
  IonItem,
  IonPage,
  IonIcon,
} from "@ionic/react";
import { useState } from "react";
import { personOutline, lockClosedOutline, eyeOffOutline, eyeOutline } from "ionicons/icons";
import logo from "./img/logo.png";
import "./login.css";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    console.log("Logging in with", email, password);
  };

  const handleRegister = () => {
    console.log("Redirecting to register page");
  };

  return (
    <IonPage>
      <IonContent>
        <div className="login-box">
          <div className="login-header">
            <img src={logo} alt="Logo" className="login-logo"/>
            <h2>INICIAR SESIÓN</h2>
          </div>
          <IonItem className="login-input">
            <IonIcon icon={personOutline} slot="start" className="input-icon" />
            <IonInput
              type="email"
              placeholder="Correo"
              value={email}
              onIonChange={(e) => setEmail(e.detail.value!)}
            />
          </IonItem>
          <IonItem className="login-input">
            <IonIcon icon={lockClosedOutline} slot="start" className="input-icon" />
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
            <a href="#">¿Olvidaste la contraseña?</a>
          </div>
          <IonButton expand="full" className="login-button" onClick={handleLogin}>
            INICIAR
          </IonButton>
          <p className="register-text">¿No tienes cuenta?</p>
          <IonButton expand="full" fill="clear" className="register-button" onClick={handleRegister}>
            Regístrate
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Login;
