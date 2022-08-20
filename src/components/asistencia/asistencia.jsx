// React
import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
// axios
import axios from "axios";
// functions
import check_admin from "./functions/check_admin";
import handle_click from "./functions/handle_click";
import {comparo_con_la_hora_actual} from "../Perfil/Suport_functions"
// stiles
import "../../styles/asistencia/asistencia.css";
// json
import lista_de_salas from "./lista_de_actividades.json"



const ipv4 = process.env.REACT_APP_ipV4        // string de la direccion ipv4. ejemplo: 192.168.1.40


export default function Asistencia(){
    const { id } = useParams()                                  // id del participante, es obtenida por parametros del url
    // las siguientes variables se optienen del enpoint:
    const [Presente, SetPresente] = useState(false);            // Info sobre la presensia del asistente (true= ya estuvo en la actividad, false= no ha estado en la actividad)
    const [Name, SetName] = useState(false);                    // Nombre del asistente
    const [Asistencia, SetAsistencia] = useState(0);            // numero del porcentaje de asistencia
    const [Activiti, SetActiviti] = useState("null");           // nombre de la actividad actual

    // esta es la url del endpoint (el id es variable)
    const url = `http://${ipv4}:11000/get_info/` + id   


    useEffect(() => {
        axios.get(url).then((Response) => {                                             // hago el get al endpoint

            SetName(Response.data.user)                                                 // guardo el nombre del asistente en la variable "Name"
            SetAsistencia(Response.data.asistencia)                                     // guardo el numero del porcentaje de asistensia en la variable "Asistencia"

            Response.data.activities.map((activiti) => {                                // recorro la lista de actividades del participante
                if (comparo_con_la_hora_actual(activiti.time) === "En_progreso") {      // si la hora actual esta dentro del intervalo de horas de la actividad:

                    SetActiviti(activiti.name)                                          // guardo el nombre de la actividad en la variable "Activiti"
                    SetPresente(activiti.presente)                                      // guardo el estado del presente en la variable "Presente"
                }
            })
        })
    }, [])


    const navigate = useNavigate();

    // reviso si el usuario es un admin y si lo es reviso si las actividades coinciden (devuelo true, false, '' segun corresponda)
    const is_here = check_admin(navigate, Activiti, lista_de_salas.indexOf(Activiti.replace("_", " ")) > -1 ? true : false);
    // agrego el contenido de "is_here" a la variable "is_here_class"
    const is_here_class = "asistencia_tag nombre_de_la_actividad is_here_" + is_here;
    

    return (
        <div className="App" id="asistencia">

            <div className="asistencia_info">
                {/* <span className="asistencia_tag nombre_del_asistente" > {user.replace(/_/g, " ")} </span> */}
                <span className="asistencia_tag nombre_del_asistente" > {Name} </span>
                <div className={is_here_class}>
                    <span className="activit_name_lavel"> Actividad: </span>
                    <span className="activit_name"> {Activiti.replace(/_/g, " ")} </span>
                </div>
                
            </div>

            <button id="buton" className={`asistencia_tag button_asistencia presente_${Presente}`} onClick={() => {handle_click(is_here, SetPresente, !Presente, Name, Presente, Asistencia)}}>
                { Presente == true ? "PRESENTE" : "AUSENTE"} 
            </button>
        </div>
    )
}