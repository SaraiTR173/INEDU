import React from 'react';
import './AcercaDeNosotros.css';
import { logoFacebook, logoInstagram, globeOutline, musicalNotesOutline } from 'ionicons/icons';
import { IonIcon } from '@ionic/react';

const AcercaDeNosotros = () => {
  return (
    <div className="acerca-container">
      <h1>Acerca de nosotros</h1>
      
      <section className="redes-section">
        <h2>Sitios oficiales INEA</h2>
        <ul className="redes-list">
          <li>
            <a href="https://facebook.com/INEA" target="_blank" rel="noopener noreferrer">
              <IonIcon icon={logoFacebook} className="icon" />
              Facebook
            </a>
          </li>
          <li>
            <a href="https://inea.edu.mx" target="_blank" rel="noopener noreferrer">
              <IonIcon icon={globeOutline} className="icon" />
              Sitio web
            </a>
          </li>
          <li>
            <a href="https://instagram.com/INEA" target="_blank" rel="noopener noreferrer">
              <IonIcon icon={logoInstagram} className="icon" />
              Instagram
            </a>
          </li>
          <li>
            <a href="https://tiktok.com/@INEA" target="_blank" rel="noopener noreferrer">
              <IonIcon icon={musicalNotesOutline} className="icon" />
              TikTok
            </a>
          </li>
        </ul>
      </section>

      <div className="divider"></div>

      <section className="contacto-section">
        <h2>Dudas o aclaraciones</h2>
        <div className="contacto-info">
          <a href="https://www.ineedu.edu.mx" target="_blank" rel="noopener noreferrer" className="website-link">
            www.ineedu.edu.mx
          </a>
          <a href="tel:+527351000487" className="telefono-link">
            +52 (735) 100 04 87
          </a>
        </div>
      </section>
    </div>
  );
};

export default AcercaDeNosotros;