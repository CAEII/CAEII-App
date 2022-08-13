// react
import { useEffect } from "react"
import { useState } from "react"
// fucntions
import {Que_dia_es_hoy, comparo_con_la_hora_actual} from "../Suport_functions"
// cookies
import Cookies from 'universal-cookie';
const cookies = new Cookies();


export default function Cronograma({dias, SetSalas, Salas, SetActividad, executeScroll}) {
    const [Dia, SetDia] = useState(Que_dia_es_hoy())

    let today_activities
    let today_pilar
    let claasname_title_text = "title_text"

    dias.map((dia) => {
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
    return today_activities.map((actividad, index) => {
        return <Lineas2 key={index} actividad={actividad} index={index} SetSalas={SetSalas} Salas={Salas} SetActividad={SetActividad} executeScroll={executeScroll}/>
    })
};

function Lineas2({actividad,index,SetSalas,Salas, SetActividad, executeScroll}) {
    var className
    if (actividad.titulo === "ALMUERZO" || actividad.titulo === "TIEMPO LIBRE") {
        className = "conLinea resaltado"
    } else {
        className = ""
    };

    className = className + " " + comparo_con_la_hora_actual(actividad.horario)

    useEffect(() => {
        if (comparo_con_la_hora_actual(actividad.horario) === "En_progreso") {
            SetSalas({ salida: Salas.salida, llegada: actividad.lugar})
            SetActividad(actividad.titulo)
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
        SetSalas({ salida: Salas.salida, llegada:actividad.lugar})
    }
    
    return(
        <td className="lugar linea">
            {/* <a href=""> {actividad.lugar} </a> */}
            <button id={boton_id} onClick={() => {handleClick(); executeScroll()}}> {actividad.lugar.replace(/_/g, " ")} </button>
            {/* <div className="line_container" /><div className="line"></div> */}
        </td>
    )
}
