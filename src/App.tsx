import { Redirect, Route } from "react-router-dom";
import {
    IonApp,
    IonRouterOutlet,
    setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { useState, useEffect } from "react";
import Login from "./componets/login";
import Registro from "./componets/registro";
import Global from "./componets/global"; // Importa la pantalla de carga

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
                <Global />
            ) : (
                <IonReactRouter>
                    <IonRouterOutlet>
                        <Route exact path="/login">
                            <Login />
                        </Route>
                        <Route exact path="/register">
                            <Registro />
                        </Route>
                        <Route exact path="/">
                            <Redirect to="/login" />
                        </Route>
                    </IonRouterOutlet>
                </IonReactRouter>
            )}
        </IonApp>
    );
};

export default App;
