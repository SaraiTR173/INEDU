import { Redirect, Route } from "react-router-dom";
import {
    IonApp,
    IonRouterOutlet,
    setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { useState, useEffect } from "react";

//Carga
import Loading from "./componets/loading/loading";

//Login
import Login from "./componets/login/login";

//Login Educando
import Verify from "./componets/login/verify";
import UpdatePass from "./componets/login/updatePass";
import alertUpdate from "./componets/login/alertUpdate";

//Educando
import InicioEducando from "./componets/educando/inicio";
import PerfilEducando from "./componets/educando/perfil";
import ExamenesEducando from "./componets/educando/examenes";
import CalificacionesEducando from "./componets/educando/calificaciones"
import EvaluacionDocente from "./componets/educando/EvalDoc";
import NosotrosEducando from "./componets/educando/nosotros";

//Materias Educando
import Lengua1 from "./componets/educando/Materias/Lengua1";
import Lengua2 from "./componets/educando/Materias/Lengua2";
import Mate1 from "./componets/educando/Materias/Mate1";
import Mate2 from "./componets/educando/Materias/Mate2";
import Vida1 from "./componets/educando/Materias/Vida1";


/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

setupIonicReact();

const App: React.FC = () => {
    const [showSplash, setShowSplash] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setShowSplash(false);
        }, 1000); // Duración de la pantalla de carga
    }, []);

    return (
        <IonApp>
            {showSplash ? (
                <Loading />
            ) : (
                <IonReactRouter>
                    <IonRouterOutlet>
                        <Route exact path="/" render={() => <Redirect to="/login" />} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/verify" component={Verify} />
                        <Route exact path="/update_pass" component={UpdatePass} />
                        <Route exact path="/alert_update" component={alertUpdate} />
                        
                        <Route exact path="/educando/inicio" component={InicioEducando} />
                        <Route exact path="/educando/perfil" component={PerfilEducando} />
                        <Route exact path="/educando/examenes" component={ExamenesEducando} />
                        <Route exact path="/educando/calificaciones" component={CalificacionesEducando} />
                        <Route exact path="/educando/evaluacion" component={EvaluacionDocente} />
                        <Route exact path="/educando/nosotros" component={NosotrosEducando} />

                        <Route exact path="/educando/materias/Lengua-y-Comunicacion-1" component={Lengua1} />
                        <Route exact path="/educando/materias/Lengua-y-Comunicacion-2" component={Lengua2} />
                        <Route exact path="/educando/materias/Pensamiento-Matematico-1" component={Mate1} />
                        <Route exact path="/educando/materias/Pensamiento-Matematico-2" component={Mate2} />
                        <Route exact path="/educando/materias/Vida-y-Comunidad-1" component={Vida1} />
                    </IonRouterOutlet>
                </IonReactRouter>
            )}
        </IonApp>
    );
};

export default App;
