import React from 'react';
import { IonApp, IonRouterOutlet, IonSplitPane } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Route } from 'react-router-dom';
import Menu from './components/Menu';
import Home from './pages/Home';
import PerfilEducador from './components/PerfilEducador';
import AcercaDeNosotros from './components/AcercaDeNosotros';
import Examenes from './pages/Examenes';
import Calificacion from './pages/Calificacion';
import Evaluacion from './pages/Evaluacion';
import Salir from './pages/Salir';

const App: React.FC = () => (
    <IonApp>
        <IonReactRouter>
            <IonSplitPane contentId="main-content">
                {/* Menú lateral */}
                <Menu />

                {/* Contenido principal */}
                <IonRouterOutlet id="main-content">
                    <Route exact path="/" component={Home} />
                    <Route exact path="/inicio" component={Home} />
                    <Route exact path="/perfil" component={PerfilEducador} />
                    <Route exact path="/examenes" component={Examenes} />
                    <Route exact path="/calificacion" component={Calificacion} />
                    <Route exact path="/evaluacion" component={Evaluacion} />
                    <Route exact path="/acerca-de-nosotros" component={AcercaDeNosotros} />
                    <Route exact path="/salir" component={Salir} />
                </IonRouterOutlet>
            </IonSplitPane>
        </IonReactRouter>
    </IonApp>
);

export default App;