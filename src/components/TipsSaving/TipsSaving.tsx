import "./TipsSaving.css";
import React from "react";
import DataTips from "../../data/tips_saving.json";
import {IonCol, IonGrid, IonRow, IonSlide, IonSlides} from "@ionic/react";

const TipsSaving = ()=>{
    const slideOpts = {
        initialSlide: 1,
        speed: 400
    };
    return(
        <section>
            <aside className="title_tip_saving">
                <b>Los Puntos del ahorro</b>
            </aside>
            <aside className="list_tip_saving">
                <IonSlides pager={true} options={slideOpts}>
                    {
                        DataTips.tip_saving.map((list_tips_saving,key)=>{
                            return(
                                <IonSlide key={key}>
                                    <ul>
                                        <li>
                                            <img src={list_tips_saving.img}/>
                                            <img src="/assets/icon/play_circle.svg" />
                                            <img src="/assets/icon/img_tips_saving.png" />
                                        </li>
                                        <li>
                                            <h3>
                                                <b>{list_tips_saving.title}</b>
                                            </h3>
                                        </li>
                                        <li>
                                            <h6>
                                                {list_tips_saving.details}
                                            </h6>
                                        </li>
                                    </ul>
                                </IonSlide>
                            )
                        })
                    }
                </IonSlides>
            </aside>
            <aside className="list_tips_specific">
                {
                    DataTips.list_tips_specific.map((list_tips_specific,key)=>{
                        return(
                            <IonGrid key={key}>
                                <IonRow>
                                    <IonCol size="9">
                                        <p>
                                            {list_tips_specific.title}
                                        </p>
                                        <p>
                                            {list_tips_specific.detail}
                                        </p>
                                    </IonCol>
                                    <IonCol size="3">
                                        <div className="img_tips_specific">
                                            <img src={list_tips_specific.img}/>
                                        </div>
                                    </IonCol>
                                </IonRow>
                            </IonGrid>
                        )
                    })
                }
            </aside>
        </section>
    )
}
export default TipsSaving;