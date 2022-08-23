//react
import React, {useState } from "react";
// functions
import { Que_dia_es_hoy } from "../Suport_functions";
// cookies
import Cookies from 'universal-cookie';
// json
// import lista_de_actividades from "../../asistencia/lista_de_actividades.json"
import Json_lista_de_actividades from "../functions/lista_actividades.json"



// const lista_de_salas = json.PlantaBaja.concat(json.AuditorioPrincipal, json.PimerPiso, json.SegundoPiso)
const cookies = new Cookies();
const visitas_tecnicas = ["Alimenticia", "Metalmecánica", "Servicios", "Medioambiente", "Vitivinícola/cervecera", "Tecnología"]

export default function Admins() {
    const [DentroAuditorio, SetDentroAuditorio] = useState(true);         // estado de los botones "dentro / fuera" del auditorio    

    return (
        <section id="admin">
            <h2> admins </h2>
            <div className="maps_button_container">
                <button className={`maps_button_container_${DentroAuditorio}`} disabled={DentroAuditorio} onClick={() => { SetDentroAuditorio(!DentroAuditorio) }}> Bustello </button>
                <button className={`maps_button_container_${!DentroAuditorio}`} disabled={!DentroAuditorio} onClick={() => { SetDentroAuditorio(!DentroAuditorio) }}> visitas tecnicas </button>
            </div>

            <h3> ESTOY EN: </h3>

            {DentroAuditorio === true ? <SalasBustelo/> : <VisitasTecnicas/>}

        </section>
    )
}


function SalasBustelo() {
    const handleAddrTypeChange = (value) => cookies.set('admin', value.target.value, { path: '/', maxAge: 5184000 })
    return (
        <div className="select">
            <select  onChange={(value) =>  handleAddrTypeChange(value)}>
                <option value={null}> seleciona una actividad: </option>
                {
                    Json_lista_de_actividades.map((dia, diaIndex ) => {
                        // if (Que_dia_es_hoy() === dia.dia) {
                        if ("Jueves" === dia.dia) {
                            return dia.actividades.map((actividad, actividadIndex) => {
                                if (actividad.id !== null && !visitas_tecnicas.includes(actividad.titulo) && !actividad.titulo.includes("Asistencia")) {
                                    return <option key={`${diaIndex}-${actividadIndex}`} value={actividad.id}> {actividad.titulo} </option>
                                }
                            })
                        }
                    })
                    // lista_de_actividades.map((actividad, actividadindex) => {                                                                             // Recorro el array de salas
                    //     return <option key={actividadindex} value={actividad}> {actividad.replace(/_/g, " ")} </option>
                    // })
                }
            </select>
        </div>
    )
}



function VisitasTecnicas() {
    const handleAddrTypeChange = (value) => cookies.set('admin', value.target.value, { path: '/', maxAge: 5184000 })
    return (
        <div className="select">
            <select  onChange={(value) =>  handleAddrTypeChange(value)}>
                <option value={null}> seleciona una visita: </option>
                {
                    Json_lista_de_actividades.map((dia, diaIndex ) => {
                        if (Que_dia_es_hoy() === dia.dia) {
                            // if ("Viernes" === dia.dia) {
                            return dia.actividades.map((actividad, actividadIndex) => {
                                console.log(actividad.titulo)
                                if (actividad.id !== null && visitas_tecnicas.includes(actividad.titulo)) {
                                    return <option key={`${diaIndex}-${actividadIndex}`} value={actividad.id}> {actividad.titulo} </option>
                                }
                            })
                        }
                    })
                }
            </select>
        </div>
    )
}