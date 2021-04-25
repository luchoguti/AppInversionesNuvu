import './MenuContainer.css';
import React from "react";
import { Link } from 'react-router-dom';

interface ContainerProps { }

const MenuContainer: React.FC<ContainerProps> = () => {
  return (
    <div className="menu">
        <div className="rectangle_container">
            <div className="menu_options">
                <Link to="/home">
                    <img src="/assets/icon/home.svg"/>
                    <label className="label_active">Inicio</label>
                </Link>
                <Link  to="/home">
                    <img src="/assets/icon/history.svg" />
                    <label>Historial</label>
                </Link>
                <Link to="/home">
                    <div className="ellipse_container">
                        <img className="menu_invest" src="/assets/icon/save_up.svg"/>
                    </div>
                    <label>Ahorrar</label>
                </Link>
                <Link  to="/home">
                    <img src="/assets/icon/account.svg"/>
                    <label>Mi Perfil</label>
                </Link>
                <Link  to="/home">
                    <img src="/assets/icon/more.svg"/>
                    <label>Más</label>
                </Link>
            </div>
        </div>
    </div>
  );
};

export default MenuContainer;
