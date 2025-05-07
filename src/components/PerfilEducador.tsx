import React, { useState } from 'react';
import './PerfilEducador.css';
import { cameraOutline } from 'ionicons/icons';
import { IonIcon } from '@ionic/react';

const PerfilEducador = () => {
  const [educador, setEducador] = useState({
    nombre: 'Marco Aurelio Gil Carrillo',
    idioma: 'Español',
    entidad: 'Morelos',
    notificaciones: true,
    notificacionesPercepcion: true
  });

  const [editando, setEditando] = useState(false);

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

  return (
    <div className="perfil-educador-container">
      <h1>Personaliza tu cuenta</h1>
      
      <div className="foto-perfil-section">
        <div className="foto-perfil">
          <div className="avatar-placeholder">
            {educador.nombre.split(' ').map(n => n[0]).join('')}
          </div>
          <button className="cambiar-foto-btn">
            <IonIcon icon={cameraOutline} />
            Cambiar foto
          </button>
        </div>
      </div>

      <div className="form-section">
        <div className="form-group">
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

        <div className="form-group">
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

        <div className="form-group">
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
        <button className="change-password-btn">Cambiar contraseña</button>
        <button 
          className={`edit-btn ${editando ? 'save' : ''}`}
          onClick={toggleEdit}
        >
          {editando ? 'Guardar cambios' : 'Editar perfil'}
        </button>
      </div>
    </div>
  );
};

export default PerfilEducador;