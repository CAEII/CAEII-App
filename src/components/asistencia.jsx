// React
import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
// stiles
import "../styles/asistencia/asistencia.css";


export default function Asistencia(){
    const { user } = useParams()
    const kk = [true, true, false, false, false]

    return(
        <div className="App" id="asistencia">
            <section className=" actividades ">
                <h2> {user} </h2>
                {kk.map((kk, index) => <ActivitiButton porp_ButtonState={kk} index={index}/>)}
            </section>
        </div>
    )
}


function ActivitiButton({porp_ButtonState, index}){
    const [ButtonState, SetButtonState] = useState(porp_ButtonState)
    return(
        <button id={"_"+index} className={`activiti_button echa_${ButtonState}`} onClick={() => SetButtonState(!ButtonState)}> Actividad {index} </button>
    )
}