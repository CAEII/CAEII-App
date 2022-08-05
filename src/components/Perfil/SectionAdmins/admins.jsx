//react
import React, {useState } from "react";
// cookies
import Cookies from 'universal-cookie';
// json
import lista_de_actividades from "../../asistencia/lista_de_actividades.json"


// const lista_de_salas = json.PlantaBaja.concat(json.AuditorioPrincipal, json.PimerPiso, json.SegundoPiso)
const cookies = new Cookies();

export default function Admins() {
    const [DentroAuditorio, SetDentroAuditorio] = useState(true);         // estado de los botones "dentro / fuera" del auditorio

    return (
        <section id="admin">
            <h2> admins </h2>
            <div className="maps_button_container">
                <button className={`maps_button_container_${DentroAuditorio}`} disabled={DentroAuditorio} onClick={() => { SetDentroAuditorio(!DentroAuditorio) }}> Bustello / nave cultural </button>
                <button className={`maps_button_container_${!DentroAuditorio}`} disabled={!DentroAuditorio} onClick={() => { SetDentroAuditorio(!DentroAuditorio) }}> visitas tecnicas </button>
            </div>

            <h3> ESTOY EN: </h3>

            {DentroAuditorio === true ? <SalasBustelo /> : null}

        </section>
    )
}


function SalasBustelo() {
    return (
        <div class="select">
            <select  onChange={(value) =>  {cookies.set('admin', value.target.value, { path: '/', maxAge: 5184000 })}}>
                {
                    lista_de_actividades.map((actividad, actividadindex) => {                                                                             // Recorro el array de salas
                        return <option key={actividadindex} value={actividad}> {actividad.replace(/_/g, " ")} </option>
                    })
                }
            </select>
        </div>
    )
}