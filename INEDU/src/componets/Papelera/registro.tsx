import React, { useState } from "react";
import {
  IonContent,
  IonPage,
  IonInput,
  IonSelect,
  IonSelectOption,
  IonButton,
  IonLabel,
  IonItem,
  IonIcon,
  IonAlert
} from "@ionic/react";
import { eyeOffOutline, eyeOutline, checkmarkCircleOutline, closeCircleOutline } from "ionicons/icons";
import { useHistory } from "react-router-dom";
import "@ionic/react/css/core.css";
import './css/registro.css';

const RegistroINEEA: React.FC = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellidos: "",
    edad: "",
    sexo: "",
    discapacidad: "",
    correo: "",
    contrasena: "",
    confirmarContrasena: "",
    rol: ""
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showPasswordAlert, setShowPasswordAlert] = useState(false);
  const [showEmailAlert, setShowEmailAlert] = useState(false);
  const [showAgeAlert, setShowAgeAlert] = useState(false); // Estado para la alerta de edad no válida
  const history = useHistory();

  const passwordRegex = {
    length: /.{8,}/,
    uppercase: /[A-Z]/,
    lowercase: /[a-z]/,
    number: /\d/,
    special: /[!@#$%^&*()_+=[\]{}|;:'",.<>/?\\/-]/
  };

  const emailRegex = /^[a-zA-Z0-9._%+-]+@(gmail\.com|hotmail\.com|[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;

  const validatePassword = (password: string) => ({
    length: passwordRegex.length.test(password),
    uppercase: passwordRegex.uppercase.test(password),
    lowercase: passwordRegex.lowercase.test(password),
    number: passwordRegex.number.test(password),
    special: passwordRegex.special.test(password)
  });

  const passwordValidation = validatePassword(formData.contrasena);

  const handleChange = (e: any) => {
    const { id, value } = e.target;

    // Limitar la edad a solo dos dígitos y permitir solo números
    if (id === "edad") {
      const regex = /^[0-9]{0,2}$/; // Permite solo dos números (0-99)

      // Si el valor no es un número válido o tiene más de dos dígitos, no se actualiza
      if (!regex.test(value) || parseInt(value) > 99) {
        setShowAgeAlert(true); // Mostrar alerta si la edad no es válida
        return;
      } else {
        setShowAgeAlert(false); // Si es válida, ocultar la alerta
      }
    }

    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validar todos los campos
    for (const key in formData) {
      if (!formData[key]) {
        return;
      }
    }

    // Verificar la edad
    if (parseInt(formData.edad) > 99 || formData.edad.length > 2 || formData.edad === "") {
      setShowAgeAlert(true); // Mostrar alerta si la edad no es válida
      return;
    } else {
      setShowAgeAlert(false); // Si la edad es válida, ocultar la alerta
    }

    // Validar contraseñas
    if (formData.contrasena !== formData.confirmarContrasena) {
      setShowAlert(true);
      return;
    }

    if (!Object.values(passwordValidation).every(Boolean)) {
      setShowPasswordAlert(true);
      return;
    }

    // Validar el correo
    if (!emailRegex.test(formData.correo)) {
      setShowEmailAlert(true);
      return;
    }

    console.log("Datos del registro:", formData);
    setShowSuccessAlert(true);
  };

  return (
    <IonPage>
      <IonContent className="page-content">
        <h4 className="card-header">Registro INEDU</h4>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            {Object.keys(formData).map((key) => (
              key !== "contrasena" && key !== "confirmarContrasena" ? (
                <IonItem key={key}>
                  <IonLabel position="stacked">{key.charAt(0).toUpperCase() + key.slice(1)}</IonLabel>
                  {key === "sexo" || key === "discapacidad" || key === "rol" ? (
                    <IonSelect id={key} value={formData[key]} onIonChange={handleChange} required>
                      {key === "sexo" && (
                        <>
                          <IonSelectOption value="Masculino">Masculino</IonSelectOption>
                          <IonSelectOption value="Femenino">Femenino</IonSelectOption>
                        </>
                      )}
                      {key === "discapacidad" && (
                        <>
                          <IonSelectOption value="Ninguna">Ninguna</IonSelectOption>
                          <IonSelectOption value="Daltonismo">Daltonismo</IonSelectOption>
                          <IonSelectOption value="Inválido">Inválido</IonSelectOption>
                          <IonSelectOption value="Sordomuda">Sordomuda</IonSelectOption>
                          <IonSelectOption value="Otra">Otra</IonSelectOption>
                        </>
                      )}
                      {key === "rol" && (
                        <>
                          <IonSelectOption value="Educador">Educador</IonSelectOption>
                          <IonSelectOption value="Educando">Educando</IonSelectOption>
                        </>
                      )}
                    </IonSelect>
                  ) : (
                    <IonInput
                      type={key === "edad" ? "number" : "text"}
                      id={key}
                      value={formData[key]}
                      onIonChange={handleChange}
                      required
                    />
                  )}
                </IonItem>
              ) : null
            ))}

            <IonItem>
              <IonLabel position="stacked">Contraseña</IonLabel>
              <IonInput
                type={showPassword ? "text" : "password"}
                id="contrasena"
                value={formData.contrasena}
                onIonChange={handleChange}
                required
              />
              <IonIcon
                icon={showPassword ? eyeOffOutline : eyeOutline}
                slot="end"
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
              />
            </IonItem>

            <p className="password-requirements">La contraseña debe cumplir con los siguientes requisitos:</p>
            <ul className="password-checklist">
              {Object.keys(passwordValidation).map((key, index) => (
                <li key={index} className={passwordValidation[key] ? "valid" : "invalid"}>
                  <IonIcon icon={passwordValidation[key] ? checkmarkCircleOutline : closeCircleOutline} />
                  {key === "length" ? "Al menos 8 caracteres" :
                   key === "uppercase" ? "Una letra mayúscula" :
                   key === "lowercase" ? "Una letra minúscula" :
                   key === "number" ? "Un número" :
                   "Un carácter especial"}
                </li>
              ))}
            </ul>

            <IonItem>
              <IonLabel position="stacked">Confirmar Contraseña</IonLabel>
              <IonInput
                type={showPassword ? "text" : "password"}
                id="confirmarContrasena"
                value={formData.confirmarContrasena}
                onIonChange={handleChange}
                required
              />
            </IonItem>

            <IonAlert
              isOpen={showAlert}
              onDidDismiss={() => setShowAlert(false)}
              header="Error"
              message="Las contraseñas no coinciden. Inténtalo de nuevo."
              buttons={['OK']}
            />

            <IonAlert
              isOpen={showPasswordAlert}
              onDidDismiss={() => setShowPasswordAlert(false)}
              header="Error"
              message="La contraseña no cumple con los requisitos."
              buttons={['OK']}
            />

            <IonAlert
              isOpen={showEmailAlert}
              onDidDismiss={() => setShowEmailAlert(false)}
              header="Error"
              message="El correo electrónico no es válido. Debe ser un correo de Gmail, Hotmail o un dominio válido."
              buttons={['OK']}
            />

            <IonAlert
              isOpen={showAgeAlert}
              onDidDismiss={() => setShowAgeAlert(false)}
              header="Error"
              message="La edad no es válida. Debe ser un número de dos dígitos (0-99)."
              buttons={['OK']}
            />

            <IonAlert
              isOpen={showSuccessAlert}
              onDidDismiss={() => {
                setShowSuccessAlert(false);
                history.push("/login");
              }}
              header="Éxito"
              message="Registro realizado con éxito."
              buttons={['OK']}
            />

            <IonButton expand="full" type="submit">
              Registrarse
            </IonButton>
          </form>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default RegistroINEEA;
