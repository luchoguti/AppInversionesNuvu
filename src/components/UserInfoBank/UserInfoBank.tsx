import './UseInfoBank.css';
import DataComponent from "../../data/information_bank.json";
import React from "react";

interface ContainerProps { }

const UserInfoBank: React.FC<ContainerProps> = () => {
    return (
        <section>
            <div>
                <div>
                    Hola {DataComponent.name_user}
                </div>
                <div>

                </div>
            </div>
            <div className="invest_card">
                <p>
                    Tu salado
                </p>
                <p>
                    ${DataComponent.balance}
                </p>
            </div>
            <div className="invest_summer">
                <li>
                    <div>
                        Inversión
                    </div>
                    <div>
                        ${DataComponent.investment}
                    </div>
                </li>
                <li>
                    <div>
                        Rendimiento
                    </div>
                    <div>
                        ${DataComponent.performance}
                    </div>
                </li>
            </div>
        </section>
    )
}
export default UserInfoBank;