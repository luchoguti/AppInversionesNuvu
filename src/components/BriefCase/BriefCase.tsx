import "./BriefCase.css";
import React from "react";
import { Link } from "react-router-dom";
import DataBriefCase from "../../data/briefcase.json"

const BriefCase = () =>{
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
            <aside>
                {
                    DataBriefCase.briefcase.map((list_briefcase,key)=>{
                        return(
                            <div key={key}>
                                <div>
                                    {list_briefcase.cant_funds}
                                </div>
                                <div>
                                    <p>
                                        <span>
                                            <img src={list_briefcase.icon}/>
                                            <label>{list_briefcase.title}</label>
                                            <label>{list_briefcase.percentage_type_active}</label>
                                        </span>
                                    </p>
                                    <p>
                                        {list_briefcase.detail_briefcase}
                                    </p>
                                    <p>
                                        {list_briefcase.value_briefcase}
                                    </p>
                                    <p>
                                        <label>Tipo de activo</label>
                                        <label>{list_briefcase.type_active}</label>
                                    </p>
                                </div>
                            </div>
                        )
                    })
                }
            </aside>
        </section>
    )
}
export default BriefCase;