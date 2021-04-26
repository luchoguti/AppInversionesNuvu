import './UseInfoBank.css';
import DataComponent from "../../data/information_bank.json";
import {formatNumber} from '../../utils/Utils';
import React from "react";

const UserInfoBank = () => {
    return (
        <section>
            <div className="title_user">
                <div>
                    <span>Hola {DataComponent.name_user}</span>
                </div>
                <div>
                    <img src="/assets/icon/notifications.svg"/>
                </div>
            </div>
            <div className="invest_card">
                <aside>
                    <span>Eres estratega</span>
                    <img src="/assets/icon/invest_card.png"/>
                    </aside>
                <aside>
                    <p>
                        Tu saldo
                    </p>
                    <p id="invest_card_balance">
                        ${formatNumber(DataComponent.balance)}
                    </p>
                </aside>
            </div>
            <div className="invest_summer">
                <li>
                    <div>
                        Inversión
                    </div>
                    <div>
                        <b>${formatNumber(DataComponent.investment)}</b>

                    </div>
                </li>
                <li>
                    <div>
                        Rendimiento
                    </div>
                    <div>
                        <b>${formatNumber(DataComponent.performance)}</b>
                    </div>
                </li>
            </div>
        </section>
    )
}
export default UserInfoBank;

