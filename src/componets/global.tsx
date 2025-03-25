import { 
IonContent, 
IonPage, 
} from "@ionic/react";
import React from "react";
import { useState, useEffect } from "react";
import INEA from "./img/INEA.png";
import img1 from "./img/img1.png";
import "./css/global.css";

const Global: React.FC = () => {
    const [progress, setProgress] = useState(0);
    useEffect(() => {
        let interval = setInterval(() => {
            setProgress((oldProgress) => {
                if (oldProgress >= 1) {
                    clearInterval(interval);
                    return 1;
                }
                return oldProgress + 0.1;
            });
        }, 300);

        return () => clearInterval(interval);
    }, []);
    return (
        <IonPage>
            <IonContent fullscreen className="splash-container">
                <div style={{ borderBottom: '20px solid #009CDE', width:'40%'}}></div>
                <div style={{ borderBottom: '20px solid #4CAF50', width:'45%'}}></div>
                <div style={{ borderBottom: '20px solid #FFC107', width:'50%'}}></div>
                <div style={{ borderBottom: '20px solid #FF9800', width:'55%'}}></div>
                <div style={{ borderBottom: '20px solid #E53935', width:'45%'}}></div>
                <div style={{ borderBottom: '20px solid #717FC7', width:'20%'}}></div>
                <img src={INEA} alt="INEA" className="INEA"/>
                <h2>LOADING</h2>
                <div className="progress-container">
                    <div className="progress-bar" style={{ width: `${progress * 800}%` }}></div>
                </div>
                <img src={img1} className="img1"/>
            </IonContent>
        </IonPage>
    );
};

export default Global;
