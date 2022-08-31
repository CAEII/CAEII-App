// React
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from 'react-router-dom';
// axios
import axios from "axios";
// functions
import check_admin from "./functions/check_admin";
import handle_click from "./functions/handle_click";
import {comparo_con_la_hora_actual, Que_dia_es_hoy} from "../Perfil/Suport_functions"
// Sweet Alert
import Swal from 'sweetalert2'; 
// cookies
import Cookies from 'universal-cookie';
// stiles
import "../../styles/asistencia/asistencia.css";
// json
import Json_lista_de_actividades from "../Perfil/functions/lista_actividades.json"

const cookies = new Cookies();
const navigate = useNavigate();

export default function Asistencia(){
    const { id } = useParams()                                  // id del participante, es obtenida por parametros del url
    const [Presente, SetPresente] = useState(false);            // Info sobre la presensia del asistente (true= ya estuvo en la actividad, false= no ha estado en la actividad)
    const [Name, SetName] = useState('');                       // Nombre del asistente


    const [Activiti, SetActiviti] = useState({                  // info sobre la actividad actual
        title: '', 
        id:'',
        selection_id:'',
        atended: false
    });     
    
    
    useEffect(() => {

        // si la cookie admin es igual a "undefinded" significa que el usuario no es un admin, por lo tanto lo redirijo al home y muestro una alerta que indique lo ocurrido
        if (cookies.get('session') === undefined) {       
            Swal.fire({
                title: `<strong>Debés iniciar secion para poder tomar asistencias</strong>`,
                icon: 'error'
            })
            return navigate("/login")
        } 
    
        // declaro la constante "token" con el token guardado dentro de la cookie "session"
        const token = cookies.get('session').token.substring(cookies.get('session').token.indexOf("|") + 1)
        // declaro la variable "info_del_back" como una lista basia, en esta variable se almacenan las actividades a las cuales esta inscripto el usuario
        var info_del_back = []

        // Hago un GET request para obtener info del usuario al que se le a escaneado el qr
        axios({
            method: 'get',
            url: `https://inscripciones.aareii.org.ar/api/v1/users/${id}`,
            headers: {
                "Accept": "application/json",
                Authorization: `Bearer ${token}`
            }
        })
        .then(function (Response) {

            SetName(Response.data.user.first_name)                          // guardo el nombre del asistente en el usestate "Name"

            Response.data.user.enrollments.map( enrllment => {              // Recorro los enrollments del usuario    
                if (enrllment.event.name.includes("CAEII XX")) {            // Reviso si el nombre del evento inclulle el string "CAEII XX"

                    enrllment.selections.map( section => {                  // Recorro las selecciones del usuario
                        // Guardo el valor de la seleccion, este es id de la actividad dentro del evento
                        section.items.map( item => {            // gurado la info de la actividad en la lista "info_del_back"
                            info_del_back.push({
                                selection_value: item.id,
                                selection_id: section.id, 
                                atended: item.pivot.attended
                            })    
                        })
                         
                         
                    })
                } 
            })


            Json_lista_de_actividades.map((dia) => {                                                // recorro la lista de actividades
                if (Que_dia_es_hoy() === dia.dia) {                                                 // si el dia de hoy coniside con el dia del json:
                    return dia.actividades.map((actividad) => {                                     // recorro la lista de actividades de hoy
    
                        if (comparo_con_la_hora_actual(actividad.horario) === "En_progreso") {      // reviso que la actividad este en progreso
                            if (actividad.id === null) {                                            // si el id es igual a "null":
                                SetActiviti({title: actividad.titulo, id: null})                    // guardo en "SetActiviti" el nombre y id de la actividad
                            } else {                                                                // si el id es distinto de "null":

                                actividad.id.map( activiti_id => {                                  // recorro la lista de ids
                                    info_del_back.map( actividad_back => {                          // por cada id de la actividad recorro la lista de actividades del usuario
                                        if (actividad_back.selection_value == activiti_id) {        // si el id de la actividad del back coinside con uno de los ids de la actividad del cronograma:
                                            
                                            SetActiviti({                                           // guardo la info de la actividad en el usestate "Activiti"
                                                title: actividad.titulo, 
                                                id: activiti_id, 
                                                selection_id: actividad_back.selection_id, 
                                                atended: actividad_back.atended !== 0
                                            })        
                                        }
                                    })
    
                                })
                                
                            }
                        }
                        
                    })
                }
            })

        })
        // si hay algun error lo muestro por consola
        .catch(function (error) {
            console.log(error);
        })
    }, [])

    // reviso si el usuario es un admin y si lo es reviso si las actividades coinciden (devuelo true, false, '' segun corresponda)
    const is_here = check_admin(navigate, Activiti, false);
    // agrego el contenido de "is_here" a la variable "is_here_class"
    const is_here_class = "asistencia_tag nombre_de_la_actividad is_here_" + is_here;

    return (
        <div className="App" id="asistencia">

            <div className="asistencia_info">
                <span className="asistencia_tag nombre_del_asistente" > {Name} </span>
                <div className={is_here_class}>
                    <span className="activit_name_lavel"> Actividad: </span>
                    <span className="activit_name"> {Activiti.title} </span>
                </div>
                
            </div>

            <button id="buton" className={`asistencia_tag button_asistencia presente_${Activiti.atended === undefined ? false : Activiti.atended}`} onClick={() => {handle_click(is_here, SetPresente, Presente, Activiti, id, Name)}}>
                { Activiti.atended ? "PRESENTE" : "AUSENTE"} 
            </button>
        </div>
    )
}