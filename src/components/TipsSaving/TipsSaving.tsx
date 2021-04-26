import "./TipsSaving.css";
import React from "react";
import DataTips from "../../data/tips_saving.json";
import {IonSlide, IonSlides} from "@ionic/react";

const TipsSaving = ()=>{
    const slideOpts = {
        initialSlide: 1,
        speed: 400
    };
    return(
        <section>
            <aside>
                <b>Los Puntos del ahorro</b>
            </aside>
            <aside>
                <IonSlides pager={true} options={slideOpts}>
                    {
                        DataTips.tip_saving.map((list_tips_saving,key)=>{
                            return(
                                <IonSlide key={key}>
                                    <img src={list_tips_saving.img}/>
                                    <img src="/assets/icon/play_circle.svg" />
                                    <img src="/assets/icon/img_tips_saving.png" />
                                    <p>
                                        <h3>
                                            {list_tips_saving.title}
                                        </h3>
                                    </p>
                                    <p>
                                        <h6>
                                            {list_tips_saving.details}
                                        </h6>
                                    </p>
                                </IonSlide>
                            )
                        })
                    }
                </IonSlides>
            </aside>
            <aside>
                {
                    DataTips.list_tips_specific.map((list_tips_specific,key)=>{
                        return(
                            <ul key={key}>
                                <li>
                                    <div>
                                        <p>
                                            {list_tips_specific.title}
                                        </p>
                                        <p>
                                            {list_tips_specific.detail}
                                        </p>
                                    </div>
                                    <div>
                                        <img src={list_tips_specific.img}/>
                                    </div>
                                </li>
                            </ul>
                        )
                    })
                }
            </aside>
        </section>
    )
}
export default TipsSaving;