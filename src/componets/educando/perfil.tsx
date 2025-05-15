import {
  IonPage,
  IonButton,
  IonMenu,
  IonMenuButton,
  IonToolbar,
  IonContent,
  IonAlert,
} from "@ionic/react";
import React, { useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import { cameraOutline } from 'ionicons/icons';
import { IonIcon } from '@ionic/react';

import menuIcon from "./img/menu.png";
import user from "./img/user.png";

import icon_inicio from "./img/img-inicio.png";
import icon_perfil from "./img/img-perfil.png";
import icon_exam from "./img/img-exam.png";
import icon_califi from "./img/img-califi.png";
import icon_eval from "./img/img-eval.png";
import icon_nosotros from "./img/img-nosotros.png";
import icon_exit from "./img/img-exit.png";

import "./css/menu.css";
import "./css/perfil.css";

const PerfilEducador: React.FC = () => {
  const history = useHistory();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [educador, setEducador] = useState({
    nombre: 'Marco Aurelio Gil Carrillo',
    idioma: 'Español',
    entidad: 'Morelos',
    notificaciones: true,
    notificacionesPercepcion: true,
    fotoPerfil: ''
  });
  const [editando, setEditando] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  // Navegación
  const navigateAndCloseMenu = (path: string) => {
    history.push(path);
    const menu = document.querySelector('ion-menu');
    menu?.close();
  };

  const Inicio = () => navigateAndCloseMenu("/educando/inicio");
  const Perfil = () => navigateAndCloseMenu("/educando/perfil");
  const Examenes = () => navigateAndCloseMenu("/educando/examenes");
  const Calificacion = () => navigateAndCloseMenu("/educando/calificaciones");
  const Evaluacion = () => navigateAndCloseMenu("/educando/evaluacion");
  const Nosotros = () => navigateAndCloseMenu("/educando/nosotros");
  const Login = () => navigateAndCloseMenu("/login");
  const CambiarContrasena = () => navigateAndCloseMenu("/update_pass");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;
    
    setEducador(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const toggleEdit = () => {
    setEditando(!editando);
  };

  const handleFotoClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setEducador(prev => ({
          ...prev,
          fotoPerfil: event.target?.result as string
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <IonMenu contentId="main-content">
        <div className="menu-user">
          <div className="user-content">
            <div className="avatar-circle">
              <img src={user} alt="Avatar"/>
            </div>
            <div className="user-info">
              <p className="user-name">Marco Aurelio Gil Carrillo.</p>
              <p className="user-status">Alumno: <span className="status-active">Activo</span></p>
            </div>
          </div>
        </div>
        <IonContent className="buttons">
          <div>
            <IonButton className="button-inicio" onClick={Inicio}>
              <div className="button-content">
                <img src={icon_inicio} className="button-icon"/>
                <span className="button-text">Inicio</span>
              </div>
            </IonButton>

            <IonButton className="button-perfil" onClick={Perfil}>
              <div className="button-content">
                <img src={icon_perfil} className="button-icon"/>
                <span className="button-text">Perfil</span>
              </div>
            </IonButton>

            <IonButton className="button-examenes" onClick={Examenes}>
              <div className="button-content">
                <img src={icon_exam} className="button-icon"/>
                <span className="button-text">Exámenes</span>
              </div>
            </IonButton>

            <IonButton className="button-calificacion" onClick={Calificacion}>
              <div className="button-content">
                <img src={icon_califi} className="button-icon"/>
                <span className="button-text">Calificacion</span>
              </div>
            </IonButton>

            <IonButton className="button-evaluacion" onClick={Evaluacion}>
              <div className="button-content">
                <img src={icon_eval} className="button-icon"/>
                <span className="button-text">Evaluacion</span>
              </div>
            </IonButton>

            <IonButton className="button-nosotros" onClick={Nosotros}>
              <div className="button-content">
                <img src={icon_nosotros} className="button-icon"/>
                <span className="button-text">Acerca de nosotros</span>
              </div>
            </IonButton>

            <IonButton className="button-salir" onClick={Login}>
              <div className="button-content">
                <img src={icon_exit} className="button-icon"/>
                <span className="button-text">Salir</span>
              </div>
            </IonButton>
          </div>
        </IonContent>
      </IonMenu>

      <IonPage id="main-content">
        <IonContent>
          <div style={{ borderBottom: '25px solid #18316A', width:'100%'}}></div>
          <IonToolbar>
            <div className="toolbar-perfil">
              <div className="menu-perfil">
                <IonMenuButton>
                  <img src={menuIcon} alt="Menú" style={{ width: "24px" }} />
                </IonMenuButton>
                <img src={user} className="user-perfil"/>
              </div>              
              <div className="toolbar-title">
                <span className="text-perfil">Perfil</span>
              </div>
            </div>
          </IonToolbar>

          <div className="perfil-educador-container">
            <h1>Personaliza tu cuenta</h1>
            
            <div className="foto-perfil-section">
              <div className="foto-perfil">
                {educador.fotoPerfil ? (
                  <img src={educador.fotoPerfil} alt="Foto de perfil" className="avatar-image"/>
                ) : (
                  <div className="avatar-placeholder">
                    {educador.nombre.split(' ').map(n => n[0]).join('')}
                  </div>
                )}
                <button className="cambiar-foto-btn" onClick={handleFotoClick}>
                  <IonIcon icon={cameraOutline} />
                  Cambiar foto
                </button>
                <input 
                  type="file" 
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  accept="image/*"
                  style={{ display: 'none' }}
                />
              </div>
            </div>

            <div className="form-section">
              <div className={`form-group ${editando ? 'edit-mode' : ''}`}>
                <label>Nombre completo</label>
                {editando ? (
                  <input
                    type="text"
                    name="nombre"
                    value={educador.nombre}
                    onChange={handleChange}
                  />
                ) : (
                  <p>{educador.nombre}</p>
                )}
              </div>

              <div className={`form-group ${editando ? 'edit-mode' : ''}`}>
                <label>Idioma</label>
                {editando ? (
                  <select
                    name="idioma"
                    value={educador.idioma}
                    onChange={handleChange}
                  >
                    <option value="Español">Español</option>
                    <option value="Inglés">Inglés</option>
                    <option value="Francés">Francés</option>
                  </select>
                ) : (
                  <p>{educador.idioma}</p>
                )}
              </div>

              <div className={`form-group ${editando ? 'edit-mode' : ''}`}>
                <label>Entidad federativa</label>
                {editando ? (
                  <input
                    type="text"
                    name="entidad"
                    value={educador.entidad}
                    onChange={handleChange}
                  />
                ) : (
                  <p>{educador.entidad}</p>
                )}
              </div>

              <div className="form-group checkbox-group">
                <label>
                  <input
                    type="checkbox"
                    name="notificaciones"
                    checked={educador.notificaciones}
                    onChange={handleChange}
                    disabled={!editando}
                  />
                  Permitir notificaciones
                </label>
              </div>

              <div className="form-group checkbox-group">
                <label>
                  <input
                    type="checkbox"
                    name="notificacionesPercepcion"
                    checked={educador.notificacionesPercepcion}
                    onChange={handleChange}
                    disabled={!editando}
                  />
                  Notificaciones de percepción
                </label>
              </div>
            </div>

            <div className="actions-section">
              <button 
                className="change-password-btn"
                onClick={CambiarContrasena}
              >
                Cambiar contraseña
              </button>
              <button 
                className={`edit-btn ${editando ? 'save' : ''}`}
                onClick={toggleEdit}
              >
                {editando ? 'Guardar cambios' : 'Editar perfil'}
              </button>
            </div>
          </div>
        </IonContent>
      </IonPage>

      <IonAlert
        isOpen={showAlert}
        onDidDismiss={() => setShowAlert(false)}
        header={'Cambios guardados'}
        message={'Tu perfil ha sido actualizado correctamente.'}
        buttons={['OK']}
      />
    </>
  );
};

export default PerfilEducador;