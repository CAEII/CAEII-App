// React
import userEvent from "@testing-library/user-event";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
// stiles
import "../styles/asistencia/asistencia.css";
// cosas de json
import json_de_prueba_login from "./Login/Json_de_log_in.json"



// export default function Asistencia(){
//     const { user } = useParams()
//     const kk = [true, true, false, false, false]

//     return(
//         <div className="App" id="asistencia">
//             <section className=" actividades ">
//                 <h2> {user} </h2>
//                 {kk.map((kk, index) => <ActivitiButton porp_ButtonState={kk} index={index}/>)}
//             </section>
//         </div>
//     )
// }



const ipv4 = "192.168.1.40"            // string de la direccion ipv4. ejemplo: 192.168.1.40



export default function Asistencia(){
    const { user } = useParams()
    const kk = [
        {
            actividad: "visita tecnica",
            button_state: true
        },
        {
            actividad: "charla maguistral",
            button_state: true
        },
        {
            actividad: "charla profecional",
            button_state: false
        },
        {
            actividad: "after caei",
            button_state: false
        },
    ]

    const [User, SetUser] = useState("don nadie");
    const [Asistencia, SetAsistencia] = useState(0);
    const [Presente, SetPresente] = useState(false);

    const url = `http://${ipv4}:11000/get_info/` + user.replace("_", " ")

    useEffect(() => {
        axios.get(url).then((Response) => {
            console.log(Response.data)
            SetUser(Response.data.user)
            SetAsistencia(Response.data.asistencia)
        })
    })

    return (
        <div className="App" id="asistencia">
            {/* <section className=" actividades ">
                <h2> {user} </h2>
                {kk.map((actividad, index) => <ActivitiButton text={actividad.actividad} porp_ButtonState={actividad.button_state} index={index} User={User} Asistencia={Asistencia}/>)}
            </section> */}

            <span className="asistencia_tag nombre_del_asistente" > {User} </span>
            <span className="asistencia_tag nombre_de_la_actividad" > kk </span>

            <button id="buton" className={`asistencia_tag button_asistencia presente_${Presente}`} onClick={() => {SetPresente(!Presente); handle_asistencia()}}> AUSENTE </button>
        </div>
    )
}

function handle_asistencia() {
    axios.get('/')
        .then(function (response) {
            // handle success
            console.log(response);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
}


function ActivitiButton({text, porp_ButtonState, index, User, Asistencia}){
    const [ButtonState, SetButtonState] = useState(porp_ButtonState)
    return(
        <button id={"_"+index} className={`activiti_button echa_${ButtonState}`} onClick={() => {SetButtonState(!ButtonState); write_the_json(User,Asistencia)}}> {text}  </button>
    )
}


function write_the_json(user,asistencia){

    let new_asistencia = parseInt(asistencia) + 10

    const url = `http://${ipv4}:11000/rite_info/${user}/${new_asistencia}` 

    axios.get(url)
}