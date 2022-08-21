// React
import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
// axios
import axios from "axios";
// functions
import check_admin from "./functions/check_admin";
import handle_click from "./functions/handle_click";
import {comparo_con_la_hora_actual, Que_dia_es_hoy} from "../Perfil/Suport_functions"
// cookies
import Cookies from 'universal-cookie';
// stiles
import "../../styles/asistencia/asistencia.css";
// json
import Json_lista_de_actividades from "../Perfil/functions/lista_actividades.json"

const info_del_back = ['146', '151', '156', '158', '162', '169', '172']
const cookies = new Cookies();

export default function Asistencia(){
    const { id } = useParams()                                          // id del participante, es obtenida por parametros del url
    // las siguientes variables se optienen del enpoint:
    const [Presente, SetPresente] = useState(false);                    // Info sobre la presensia del asistente (true= ya estuvo en la actividad, false= no ha estado en la actividad)
    const [Name, SetName] = useState(false);                            // Nombre del asistente
    const [Asistencia, SetAsistencia] = useState(0);                    // numero del porcentaje de asistencia
    const [Activiti, SetActiviti] = useState({title: '', id:''});       // nombre de la actividad actual

    // en la constante Token guardo el Token de la cookie session
    const token = cookies.get('session').token.substring(cookies.get('session').token.indexOf("|") + 1)

    useEffect(() => {
        Json_lista_de_actividades.map((dia, diaIndex ) => {
            if (Que_dia_es_hoy() === dia.dia) {
                return dia.actividades.map((actividad, actividadIndex) => {
                    if (actividad.id !== null) {
                        actividad.id.map( activiti_id => {
                            if (info_del_back.indexOf(activiti_id) !== -1) {
                                // SetActiviti({title: actividad.titulo, id:id})

                                if (comparo_con_la_hora_actual(actividad.horario) === "En_progreso") {
                                    SetActiviti({title: actividad.titulo, id:activiti_id})
                                }
                            }
                        })
                    } else {
                        if (comparo_con_la_hora_actual(actividad.horario) === "En_progreso") {
                            SetActiviti({title: actividad.titulo, id: null})
                        }
                    }

                    
                })
            }
        })

        axios({
            method: 'get',
            url: `https://inscripciones.aareii.org.ar/api/v1/users/${id}`,
            headers: {
                "Accept": "application/json",
                Authorization: `Bearer ${token}`
            }
        })
        .then(function (response) {
            console.log(response)
        })
        .catch(function (error) {
            console.log(error);
        })



    }, [])


    const navigate = useNavigate();

    // reviso si el usuario es un admin y si lo es reviso si las actividades coinciden (devuelo true, false, '' segun corresponda)
    const is_here = check_admin(navigate, Activiti, false);
    // agrego el contenido de "is_here" a la variable "is_here_class"
    const is_here_class = "asistencia_tag nombre_de_la_actividad is_here_" + is_here;


    return (
        <div className="App" id="asistencia">

            <div className="asistencia_info">
                {/* <span className="asistencia_tag nombre_del_asistente" > {user.replace(/_/g, " ")} </span> */}
                <span className="asistencia_tag nombre_del_asistente" > {nombre} </span>
                <div className={is_here_class}>
                    <span className="activit_name_lavel"> Actividad: </span>
                    <span className="activit_name"> {Activiti.title} </span>
                </div>
                
            </div>

            <button id="buton" className={`asistencia_tag button_asistencia presente_${Presente}`} onClick={() => {handle_click(is_here, SetPresente, !Presente, Name, Presente, Asistencia)}}>
                { Presente == true ? "PRESENTE" : "AUSENTE"} 
            </button>
        </div>
    )
}