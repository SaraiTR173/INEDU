import React from 'react';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Route, Redirect } from 'react-router-dom';

import MenuE from './components/MenuE';
import Home from './pages/Home';
import PerfilEducador from './components/PerfilEducador';
import PerfilAlumno from './components/PerfilAlumno';
import AcercaDeNosotros from './components/AcercaDeNosotros';
import Examenes from './pages/Examenes';
import Calificacion from './pages/Calificacion';
import Evaluacion from './pages/Evaluacion';

// Corrección en los imports - usa nombres consistentes
import MateriasA from './pages/MateriasA';
import EvaluacionMateria from './pages/EvaluacionMateriaA';
import EstadisticasEvaluacion from './pages/EstadisticasEvaluacionA';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      {/* Menú del Educador (siempre presente) */}
      <MenuE />
      
      {/* Router principal */}
      <IonRouterOutlet id="main-content">
        {/* Redirección inicial - elige solo una opción */}
        <Redirect exact from="/" to="/inicio" />
        
        {/* Rutas principales */}
        <Route exact path="/inicio" component={Home} />
        <Route exact path="/perfileducador" component={PerfilEducador} />
        <Route exact path="/perfilalumno" component={PerfilAlumno} />
        <Route exact path="/examenes" component={Examenes} />
        <Route exact path="/calificacion" component={Calificacion} />
        <Route exact path="/evaluacion" component={Evaluacion} />
        <Route exact path="/acerca-de-nosotros" component={AcercaDeNosotros} />
        
        {/* Rutas para el sistema de materias */}
        <Route exact path="/materias" component={MateriasA} />
        <Route exact path="/evaluacion/:id" component={EvaluacionMateria} />
        <Route exact path="/evaluacion/:id/estadisticas" component={EstadisticasEvaluacion} />
        
        {/* Redirección de rutas no encontradas */}
        <Route render={() => <Redirect to="/inicio" />} />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;