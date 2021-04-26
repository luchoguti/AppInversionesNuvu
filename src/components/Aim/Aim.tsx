import './Aim.css';
import DataIam from "../../data/aim.json";
import {formatNumber} from '../../utils/Utils';

import React from "react";
import {IonCol, IonGrid, IonRow } from '@ionic/react';
import { Doughnut } from 'react-chartjs-2';

const Aim = () =>{
    return(
        <section>
            <aside className="title_aim">
                <div>
                    <b>Tus Metas</b>
                </div>
                <div>
                    <img src="/assets/icon/add_aim.svg"/>
                </div>
            </aside>
            <IonGrid className="list_aim">
                <IonRow>
                    {
                        DataIam.map((data_list,key)=>{
                            let nameClass = (key%2)?'detail_aim detail_aim_two':'detail_aim';
                            let calc_percentage = parseInt(data_list.value_aim)*100;
                            let percentage = Math.round((calc_percentage)/(parseInt(data_list.value_aim_percentage)));
                            let val_subtraction = 100 - percentage;
                            const data_doughnut = {
                                labels: [],
                                datasets: [
                                    {
                                        data: [percentage, val_subtraction],
                                        backgroundColor: [
                                            'rgba(84, 209, 237, 1)',
                                            'rgba(250, 249, 253, 1)',
                                        ],
                                        borderWidth: 0,
                                    },
                                ],
                                options: {
                                    cutoutPercentage: 88,
                                    animation: {
                                        animationRotate: true,
                                        duration: 2000
                                    },
                                    legend: {
                                        display: false
                                    },
                                    tooltips: {
                                        enabled: false
                                    }
                                }
                            };
                            return(
                                <IonCol size="5.7" key={key} className={nameClass}>
                                    <p>
                                        <img src={data_list.icon}/>
                                    </p>
                                    <p>
                                        <b>{data_list.title}</b>
                                    </p>
                                    <p>
                                        <span>
                                            <b>{percentage}%</b>
                                            <Doughnut className="graphic" data={data_doughnut}  type="doughnut" />
                                        </span>
                                        <span>
                                            <label>
                                                <b>${formatNumber(data_list.value_aim)}</b>
                                            </label>
                                            <label>
                                                ${formatNumber(data_list.value_aim_percentage)}
                                            </label>
                                        </span>
                                    </p>
                                </IonCol>
                            )
                        })
                    }
                </IonRow>
            </IonGrid>
        </section>
    )
}
export default Aim;