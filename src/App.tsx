import { Redirect, Route } from "react-router-dom";
import {
    IonApp,
    IonRouterOutlet,
    setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { useState, useEffect } from "react";

import Loading from "./componets/loading/loading"; // Importa la pantalla de carga
import Login from "./componets/login/login";
import Verify from "./componets/login/verify";
import UpdatePass from "./componets/login/updatePass";
import Educando from "./componets/educando/educandoLayout";

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
                        <Route exact path="/">
                            <Redirect to="/login" />
                        </Route>
                        <Route exact path="/login">
                            <Login />
                        </Route>
                        <Route exact path="/verify">
                            <Verify />
                        </Route>
                        <Route exact path="/update_pass">
                            <UpdatePass />
                        </Route>
                        <Route exact path="/educando">
                            <Educando/>
                        </Route>
                    </IonRouterOutlet>
                </IonReactRouter>
            )}
        </IonApp>
    );
};

export default App;
