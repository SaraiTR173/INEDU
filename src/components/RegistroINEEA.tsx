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
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonBackButton
} from "@ionic/react";
import "@ionic/react/css/core.css";
import './RegistroINEEA.css';  // Importa el archivo CSS

const RegistroINEEA: React.FC = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellidos: "",
    edad: "",
    sexo: "",
    discapacidad: "Ninguna",
    correo: "",
    contrasena: "",
    confirmarContrasena: "",
    rol: ""
  });

  const handleChange = (e: any) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.contrasena !== formData.confirmarContrasena) {
      alert("Las contraseñas no coinciden. Inténtalo de nuevo.");
      return;
    }

    console.log("Datos del registro:", formData);
    alert("Registro exitoso");
  };

  return (
    <IonPage>
      <IonContent className="page-content">
        <div className="card">
          <div className="card-header">
            <h4>Registro INEDU</h4>
          </div>
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              {Object.keys(formData).map((key) => (
                key !== "contrasena" && key !== "confirmarContrasena" ? (
                  <IonItem key={key}>
                    <IonLabel position="stacked">
                      {key.charAt(0).toUpperCase() + key.slice(1)}
                    </IonLabel>
                    {key === "sexo" || key === "discapacidad" || key === "rol" ? (
                      <IonSelect
                        id={key}
                        value={formData[key]}
                        onIonChange={(e) => handleChange(e)}
                        required
                      >
                        {key === "sexo" && (
                          <>
                            <IonSelectOption value="">Seleccione</IonSelectOption>
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
                            <IonSelectOption value="">Seleccione</IonSelectOption>
                            <IonSelectOption value="Coordinador">Coordinador</IonSelectOption>
                            <IonSelectOption value="Educando">Educando</IonSelectOption>
                          </>
                        )}
                      </IonSelect>
                    ) : (
                      <IonInput
                        type={key === "edad" ? "number" : "text"}
                        id={key}
                        value={formData[key]}
                        onIonChange={(e) => handleChange(e)}
                        required
                      />
                    )}
                  </IonItem>
                ) : null
              ))}
              
              {/* Campo para la contraseña */}
              <IonItem>
                <IonLabel position="stacked">Contraseña</IonLabel>
                <IonInput
                  type="password"
                  id="contrasena"
                  value={formData.contrasena}
                  onIonChange={(e) => handleChange(e)}
                  required
                />
              </IonItem>

              {/* Campo para confirmar contraseña */}
              <IonItem>
                <IonLabel position="stacked">Confirmar Contraseña</IonLabel>
                <IonInput
                  type="password"
                  id="confirmarContrasena"
                  value={formData.confirmarContrasena}
                  onIonChange={(e) => handleChange(e)}
                  required
                />
              </IonItem>

              <IonButton expand="full" type="submit">
                Registrarse
              </IonButton>
            </form>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default RegistroINEEA;
