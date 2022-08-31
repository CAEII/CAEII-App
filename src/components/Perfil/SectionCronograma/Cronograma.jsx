// react
import { useEffect } from "react"
import { useState } from "react"
// fucntions
import {Que_dia_es_hoy, comparo_con_la_hora_actual} from "../Suport_functions"
import PorcentajeAsistencia from "../functions/Porcentaje_asistencia";
// json
import json_actividades from "../functions/lista_actividades.json"
// cookies
import Cookies from 'universal-cookie';
const cookies = new Cookies();


export default function Cronograma({SetSalas, Salas, SetActividad, executeScroll}) {
    const [Dia, SetDia] = useState(Que_dia_es_hoy())

    let today_activities
    let today_pilar
    let claasname_title_text = "title_text"

    json_actividades.map((dia) => {
        if ( dia.dia === Dia) {
            today_activities = dia.actividades;
            today_pilar = dia.pilar
        }
    })

    if (today_pilar.length > 25) {
        claasname_title_text =  "small_title_text"
    }

    return (
        <section id="cronograma">
            <div className="title_card_perfil title_cronograma">
                <h2> cronograma </h2>

                <label htmlFor="dia" className="title_text">Día: </label>
                <div className="select" id="dia">
                    <select onChange={(value) => SetDia(value.target.value)}  defaultValue={Que_dia_es_hoy()}>
                        <option value="Jueves">Jueves</option>
                        <option value="Viernes">Viernes</option>
                        <option value="Sabado">Sabado</option>
                        <option value="Domingo">Domingo</option>
                    </select>
                </div>
                <p className="title_text"> Pilar: </p>
                <p className={claasname_title_text} id="pilar"> {today_pilar} </p>
            </div>
            <table className="content_cronograma">
                <tbody>
                    <tr className="cronograma_table_title" id="L1">
                        <th>HORARIO</th>
                        <th>ACTIVIDAD</th>
                        <th>LUGAR</th>
                    </tr>

                    <Lineas today_activities={today_activities} SetSalas={SetSalas}  Salas={Salas} SetActividad={SetActividad} executeScroll={executeScroll}/>
                    
                </tbody>
            </table>
        </section>
    )
}


function Lineas({today_activities,SetSalas,Salas, SetActividad, executeScroll}){
    const activities = cookies.get("activities")    // guardo el contenido de la cookie "activities" en la constante activities
 
    // recorro las actividades de hoy
    return today_activities.map((actividad, index) => { 
        // si el id de la actividad es igual "null", significa que esa actividad es comun para todos los asistentes por lo tanto la muestro
        if (actividad.id === null) {
            return <Lineas2 key={index} actividad={actividad} index={index} SetSalas={SetSalas} Salas={Salas} SetActividad={SetActividad} executeScroll={executeScroll}/>
        }
        // si el id de la actividad no es igual "null", significa que esa actividad corresponde solo a algunos de los participantes por lo tanto comparo la lista de ids de la actividad con los ids de actividades del usuario
        return actividad.id.map( id => {    // json
            return activities.map( activiti => {    //server
                if (activiti.selection_value == id) {
                    return <Lineas2 key={index} actividad={actividad} index={index} SetSalas={SetSalas} Salas={Salas} SetActividad={SetActividad} executeScroll={executeScroll}/>
                }
            })
        })
    })
};

function Lineas2({actividad,index,SetSalas,Salas, SetActividad, executeScroll}) {
    var className       // en esta variable almaceno todas las clases del <tr> 
    // Reviso si el titulo de la actividad es "ALMUERZO", "TIEMPO LIBRE", "COFFEE" y si lo es resalto la linea
    if (actividad.titulo === "ALMUERZO" || actividad.titulo === "TIEMPO LIBRE" || actividad.titulo === "COFFEE") {
        className = "conLinea resaltado"
    } else {
        className = ""
    };

    // comparo la hora de la actividad con la hora actual para saver si ya termino o todavia no empieza
    let second_class = comparo_con_la_hora_actual(actividad.horario)

    // agrego "second_class" a la variable "className"
    /* className = className + " " + second_class */

    useEffect(() => {
        // reviso si la hora actual esta dentro del intervalo de horas de la actividad
        if (comparo_con_la_hora_actual(actividad.horario) === "En_progreso") {
            SetSalas({ salida: Salas.salida, llegada: actividad.lugar})         // guardo el nombre de la sala donde se realiza la actividad en el usestate "Salas"
            SetActividad(actividad.titulo)                                      // guardo el nombre de la actividad en el usestate "Actividad"
            // reviso si el nombre de la actividad actual es igual a "ALMUERZO" o "TIEMPO LIBRE" o "COFFEE"
            if (actividad.titulo === "ALMUERZO" || actividad.titulo === "TIEMPO LIBRE" || actividad.titulo === "COFFEE") {
                // PorcentajeAsistencia()           // llamo a la funcion "PorcentajeAsistencia" para actualizar el porcentaje de asistencia
            }
            // reviso si el nombre la actividad actual coinside con el de alguna de las conferencias maguistrales:
            if (actividad.titulo === "Conf. Chris Meniw " || actividad.titulo === "Conf. Tomas Karagozian" || actividad.titulo === "Conf. Nicolás Fernandez" || actividad.titulo === "Conf. Damian Pedraza") {
                let asistencia_magistral = cookies.get("asistencia")
                // aumento la asistencia de forma artificial por que esta informacion no esta en la bbdd de aareii
                cookies.set('asistencia', asistencia_magistral + 1, { path: '/', maxAge: 5184000 });        // "asistencia" almacena el porcentaje de asistencia del usuario, es solo estetico
            }
        }
    }, [Salas.salida,SetSalas,actividad.lugar,actividad.horario])

    return (
        <tr id="L2" className={className} key={index}>
            <td className="hora"> {actividad.horario} </td>
            <td className="actividad"> {actividad.titulo} </td>

            { actividad.lugar ? <Donde boton_id={index} actividad={actividad} SetSalas={SetSalas} Salas={Salas} executeScroll={executeScroll}/> : null }
        </tr>
    )
};

function Donde({actividad,SetSalas,Salas,boton_id,executeScroll}){
    const handleClick = () => {
        SetSalas({ salida: Salas.salida, llegada:actividad.lugar.replace(" ", "_")})
    }
    
    return(
        <td className="lugar linea">
            <button id={boton_id} onClick={() => {handleClick(); executeScroll()}}> {actividad.lugar.replace(/_/g, " ")} </button>
        </td>
    )
}
