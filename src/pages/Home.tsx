import React from 'react';
import './Home.css';
import { bookOutline, schoolOutline, documentTextOutline, statsChartOutline } from 'ionicons/icons';
import { IonIcon } from '@ionic/react';
import { useHistory } from 'react-router-dom'; // Importa useHistory

const Home = () => {
  const history = useHistory(); // Obtiene el objeto history

  // Función para navegar a MateriasA
  const navigateToMaterials = () => {
    history.push('/materias');
  };

  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Bienvenido a INEDU</h1>
        <p>Tu plataforma educativa para el aprendizaje continuo</p>
      </header>

      <section className="quick-actions">
        <h2>Acciones rápidas</h2>
        <div className="action-grid">
          {/* Modifica este card para que sea clickeable */}
          <div className="action-card" onClick={navigateToMaterials} style={{ cursor: 'pointer' }}>
            <IonIcon icon={bookOutline} className="action-icon" />
            <h3>Materiales de estudio</h3>
            <p>Accede a los recursos educativos</p>
          </div>
          
          {/* Los demás cards permanecen igual */}
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

      {/* Resto del componente permanece igual */}
    </div>
  );
};

export default Home;