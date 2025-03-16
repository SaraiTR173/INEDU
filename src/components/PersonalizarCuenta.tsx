import React from 'react';
import './PerfilEducador.css';

const PersonalizarCuenta: React.FC = () => {
    return (
        <div className="personalizar-cuenta">
            <h2>Personaliza tu cuenta con una foto.</h2>
            <button>Cambiar foto</button>
            <p>Nombre completo: Marco Aurelio Gil Carrillo.</p>
            <p>Idioma: Español</p>
            <p>Entidad federativa: Morelos</p>
            <label>
                <input type="checkbox" /> Permitir notificaciones
            </label>
            <label>
                <input type="checkbox" /> Notificaciones de percepción
            </label>
            <button>Cambiar contraseña</button>
        </div>
    );
};

export default PersonalizarCuenta;