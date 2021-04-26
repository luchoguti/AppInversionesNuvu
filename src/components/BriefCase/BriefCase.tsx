import "./BriefCase.css";
import React from "react";
import { Link } from "react-router-dom";
import DataBriefCase from "../../data/briefcase.json"
import {IonCol, IonGrid, IonRow, IonSlide, IonSlides} from "@ionic/react";
import {formatNumber} from '../../utils/Utils';
import { Doughnut } from 'react-chartjs-2';

const BriefCase = () =>{
    const slideOpts = {
        initialSlide: 1,
        speed: 400
    };
    return(
        <section>
            <aside className="title_brief_case">
                <div>
                    <b>Conoce tu portafolio</b>
                </div>
                <div>
                    <Link to="/home">
                        Estratega
                    </Link>
                </div>
            </aside>
            <aside className="details_brief_case">
                <IonSlides pager={true} options={slideOpts}>
                    {
                        DataBriefCase.briefcase.map((list_briefcase,key)=>{
                            let percentage = parseInt(list_briefcase.percentage_type_active);
                            let val_subtraction = 100 - percentage;
                            const data_doughnut = {
                                labels: [],
                                datasets: [
                                    {
                                        data: [percentage, val_subtraction],
                                        backgroundColor: [
                                            'rgba(65, 207, 105, 1)',
                                            'rgba(88, 80, 107, 0.49)',
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
                                <IonSlide key={key} className="slider_brief_case">
                                    <IonGrid>
                                        <IonRow>
                                            <IonCol size="6">
                                                <li>
                                                    <img src="/assets/icon/RoboAdvisor.png"/>
                                                </li>
                                                <li>
                                                    RoboAdvisor
                                                </li>
                                                <li>
                                                    {list_briefcase.cant_funds} Fondos
                                                </li>
                                                <li>
                                                    <Doughnut className="graphic" data={data_doughnut}  type="doughnut" />
                                                </li>
                                            </IonCol>
                                            <IonCol size="6" >
                                                <li>
                                                        <p>
                                                            <span>
                                                                <img src={list_briefcase.icon}/>
                                                                <b>{list_briefcase.title}</b>
                                                            </span>
                                                            <label>{list_briefcase.percentage_type_active}%</label>
                                                        </p>
                                                </li>
                                                <li>
                                                    {list_briefcase.detail_briefcase}
                                                </li>
                                                <li>
                                                    <b>
                                                        ${formatNumber(list_briefcase.value_briefcase)}
                                                    </b>
                                                </li>
                                                <li>
                                                    <span>Tipo de activo</span>
                                                    {
                                                        list_briefcase.type_active.map((type,key)=>{
                                                            return(
                                                                <span>
                                                                    {type.title}
                                                                </span>
                                                            )
                                                        })
                                                    }
                                                </li>
                                                <li>
                                                    <img src="/assets/icon/previous.svg"/>
                                                    <img src="/assets/icon/next.svg"/>
                                                </li>
                                            </IonCol>
                                        </IonRow>
                                    </IonGrid>

                                </IonSlide>
                            )
                        })
                    }
                </IonSlides>
            </aside>
        </section>
    )
}
export default BriefCase;