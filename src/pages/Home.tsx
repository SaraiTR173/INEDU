import React from 'react';
import './Home.css';
import { bookOutline, schoolOutline, documentTextOutline, statsChartOutline } from 'ionicons/icons';
import { IonIcon } from '@ionic/react';

const Home = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Bienvenido a INEDU</h1>
        <p>Tu plataforma educativa para el aprendizaje continuo</p>
      </header>

      <section className="quick-actions">
        <h2>Acciones rápidas</h2>
        <div className="action-grid">
          <div className="action-card">
            <IonIcon icon={bookOutline} className="action-icon" />
            <h3>Materiales de estudio</h3>
            <p>Accede a los recursos educativos</p>
          </div>
          <div className="action-card">
            <IonIcon icon={schoolOutline} className="action-icon" />
            <h3>Mis cursos</h3>
            <p>Continúa tu formación</p>
          </div>
          <div className="action-card">
            <IonIcon icon={documentTextOutline} className="action-icon" />
            <h3>Exámenes</h3>
            <p>Realiza tus evaluaciones</p>
          </div>
          <div className="action-card">
            <IonIcon icon={statsChartOutline} className="action-icon" />
            <h3>Progreso</h3>
            <p>Consulta tu avance</p>
          </div>
        </div>
      </section>

      <section className="news-section">
        <h2>Novedades y anuncios</h2>
        <div className="news-card">
          <h3>Nuevos materiales disponibles</h3>
          <p>Hemos agregado nuevos recursos para el módulo de matemáticas.</p>
          <span className="news-date">15 de marzo, 2023</span>
        </div>
        <div className="news-card">
          <h3>Talleres de regularización</h3>
          <p>Inscripciones abiertas para los talleres de abril.</p>
          <span className="news-date">5 de marzo, 2023</span>
        </div>
      </section>

      <section className="calendar-section">
        <h2>Próximas actividades</h2>
        <div className="calendar-event">
          <div className="event-date">
            <span className="event-day">22</span>
            <span className="event-month">MAR</span>
          </div>
          <div className="event-info">
            <h3>Evaluación diagnóstica</h3>
            <p>Módulo de ciencias</p>
          </div>
        </div>
        <div className="calendar-event">
          <div className="event-date">
            <span className="event-day">30</span>
            <span className="event-month">MAR</span>
          </div>
          <div className="event-info">
            <h3>Taller de lectura</h3>
            <p>Presencial - Plaza comunitaria</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;