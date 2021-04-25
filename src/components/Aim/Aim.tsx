import './Aim.css';
import DataIam from "../../data/aim.json";
import React from "react";

const Aim = () =>{
    return(
        <section>
            <aside>
                <div>
                    <b>Tus Metas</b>
                </div>
                <div>
                    <img src="/assets/icon/notifications.svg"/>
                </div>
            </aside>
            <aside>
                {
                    DataIam.map((data,key)=>{
                        return(
                            <div key={key} className="">
                                <p>
                                    <img src={data.icon}/>
                                </p>
                                <p>
                                    {
                                        data.title
                                    }
                                </p>
                                <p>
                                    <span>
                                        20%
                                    </span>
                                    <span>
                                        <label>
                                            ${data.value_aim}
                                        </label>
                                        <label>
                                            ${data.value_aim_percentage}
                                        </label>
                                    </span>
                                </p>
                            </div>
                        )
                    })
                }
            </aside>
        </section>
    )
}

export default Aim;