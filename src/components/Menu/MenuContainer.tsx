import './MenuContainer.css';
import React from "react";
import {IonBadge, IonIcon, IonLabel, IonTabBar, IonTabButton, IonTabs } from '@ionic/react';

interface ContainerProps { }

const MenuContainer: React.FC<ContainerProps> = () => {
  return (
    <div className="menu">
        <div className="rectangle_container">
            <div className="menu_options">
                <a>
                    <img src="/assets/icon/home.svg" className="icon" />
                    <label className="label_active">Inicio</label>
                </a>
                <a>
                    <img src="/assets/icon/history.svg" className="icon" />
                    <label>Historial</label>
                </a>
                <a>
                    <div className="ellipse_container">
                        <a>
                            <img className="menu_invest" src="/assets/icon/save_up.svg"/>
                        </a>
                    </div>
                    <label>Ahorrar</label>
                </a>
                <a>
                    <img src="/assets/icon/account.svg" className="icon" />
                    <label>Mi Perfil</label>
                </a>
                <a>
                    <img src="/assets/icon/more.svg" className="icon" />
                    <label>Más</label>
                </a>
            </div>
        </div>
    </div>
  );
};

export default MenuContainer;
