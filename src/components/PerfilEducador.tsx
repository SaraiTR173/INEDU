import React from 'react';
import './PerfilEducador.css';

interface Educador {
    nombre: string;
    especialidad: string;
    correo: string;
    telefono: string;
    foto: string;
}

const PerfilEducador: React.FC<{ educador: Educador }> = ({ educador }) => {
    return (
        <div className="perfil-container">
            <img className="perfil-avatar" src={educador.foto} alt={educador.nombre} />
            <div className="perfil-info">
                <h2>{educador.nombre}</h2>
                <p>{educador.especialidad}</p>
            </div>
            <div className="perfil-contacto">
                <a href={`mailto:${educador.correo}`}>{educador.correo}</a>
                <a href={`tel:${educador.telefono}`}>{educador.telefono}</a>
            </div>
        </div>
    );
};

export default PerfilEducador;
