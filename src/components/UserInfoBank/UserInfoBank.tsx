import './UseInfoBank.css';
import DataComponent from "../../data/information_bank.json";
import React from "react";
import {IonIcon, IonItem, IonItemSliding, IonLabel, IonList} from "@ionic/react";
import {personCircle} from "ionicons/icons";

const formatNumber = (num:any) =>{
    return num.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ".");
}
const UserInfoBank = () => {
    return (
        <section>
            <div className="title_user">
                <div>
                    <span>Hola {DataComponent.name_user}</span>
                </div>
                <div>
                    <IonIcon icon={personCircle} />
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