// react
import { useState } from "react"
// components
import PrimerPiso from "./Mapas/PrimerPiso(ejemplo)"
import PlantaBaja from "./Mapas/Planta_baja"
// styles

export default function Section_Mapas({mapas}) {

    const valores_default =                     // dejo los valores por defecto de salida y llegada, expresados como un objeto (estos valores deberían venir de otro lado)
    {
        Sala_de_salida: "Hall_Planta_Baja",
        Sala_de_llegada: "Asensor_Planta_Baja"
    };

    const [Mapa, SetMapa] = useState(["PlantaBaja"]);         // lista con los mapas nesesarios, esto depende del cronograma

    const [Sala_salida, Set_Sala_salida] = useState(valores_default.Sala_de_salida);       // Sala de salida o "estoy aqui", el valor por defecto depende del cronograma
    const [Sala_llegada, Set_Sala_llegada] = useState(valores_default.Sala_de_llegada);    // Sala de llegada o "voy a", el valor por defecto depende del cronograma   

    const [DentroAuditorio, SetDentroAuditorio] = useState(true);         // estado de los botones "dentro / fuera" del auditorio

    return (
        <section id="mapas">
            <div class="title_card_perfil title_mapas">
                <h2>¿A dónde voy?</h2>
                <div className="maps_button_container">
                    <button className={`maps_button_container_${DentroAuditorio}`} disabled={DentroAuditorio} onClick={() => {SetDentroAuditorio(!DentroAuditorio)}}> Dentro del auditorio </button>
                    <button className={`maps_button_container_${!DentroAuditorio}`} disabled={!DentroAuditorio} onClick={() => {SetDentroAuditorio(!DentroAuditorio)}}> Fuera del auditorio </button>
                </div>
                {/* si "DentroAuditorio" es igual a "true" muestro el select de "estoy aqui" y "voy a", si no lo es, no muestro nada*/}
                {DentroAuditorio === true ? <Selects Mapas={Mapa} _useStates={{salida:Set_Sala_salida, llegada:Set_Sala_llegada}} valores_default={valores_default}/> : null}
            </div> 
            {/* si "DentroAuditorio" es igual a "true" muestro los mapas nesesarios, si no lo es, muestro el iframe de google maps */}
            {DentroAuditorio === true ? <Mapas Mapas={Mapa} sala_resaltada={{salida:Sala_salida, llegada:Sala_llegada}}/>: <iframe title="googleMaps" src="https://www.google.com/maps/d/embed?mid=1c0v85K2T6yKGLi1ZnK43yhwhomSS07s&ehbc=2E312F" width="640" height="480"></iframe>}
        </section>
    )
}

function Selects({Mapas,_useStates,valores_default}) {
    const listas_de_salas = {           // esto deveria venir de otro lado, un json a parte quizas           
        PlantaBaja: ["Hall_Planta_Baja", "Sanitario_Planta_baja", "Restaurante", "Asensor_Planta_Baja"],
        PimerPiso: ["Hall_Pimer_Piso", "Uspallata", "Magna_central", "Nihuil", "Cacheuta"]
    }

    return (
        <div className="section_of_sections">
            <label htmlFor="salida" class="title_text">Estoy aquí: </label>
                <div class="select" id="salida">
                    <select onChange={(value) => _useStates.salida(value.target.value)} defaultValue={valores_default.Sala_de_salida}>
                        {
                            Mapas.map((mapa, mapindex) => {                                                                             // Recorro el array de mapas y por cada mapa:
                                return listas_de_salas[mapa].map((sala, salaIndex) => {                                                 // Recorro el array de salas y devuelvo un "<option>" con el valor de la sala
                                   return <option key={mapindex+"_"+salaIndex} value={sala}> {sala.replace(/_/g, " ")} </option>
                                })
                            })
                        }
                    </select>
                </div>
                <label htmlFor="llegada" class="title_text">Voy a: </label>
                <div class="select" id="llegada">
                    <select onChange={(value) => _useStates.llegada(value.target.value)} defaultValue={valores_default.Sala_de_llegada}>
                        {
                            Mapas.map((mapa, mapindex) => {
                                return listas_de_salas[mapa].map((sala, salaIndex) => {
                                   return <option key={mapindex+"_"+salaIndex} value={sala}> {sala.replace(/_/g, " ")} </option>
                                })
                            })
                        }
                    </select>
                </div>
        </div>
    )
}


function Mapas({Mapas, sala_resaltada}) {
    const colores =
    {
        color_sala_desactivada: "#5b6364",      // color de las salas NO resaltadas
        color_sala_partida: "#fcec51",          // color de la sala de partida
        color_sala_llegada: "#9dc41c"           // color de la sala de llegada
    };

    return(
        <div className="maps_container">
            {Mapas.map((mapa, index) => {   // Recorro la lista de mapas y cargo el componente correspondiente
                if (mapa === 'PlantaBaja') {
                    return(
                        <div className="individual_map">
                            <h3> Planta Baja </h3>
                            <PlantaBaja key={index} sala_resaltada={{salida:sala_resaltada.salida, llegada:sala_resaltada.llegada}} colores={colores}/>
                        </div>
                    )
                }
                if (mapa === 'PimerPiso') {
                    return(
                        <div className="individual_map">
                            <h3> Pimer Piso </h3>
                            <PrimerPiso key={index} sala_resaltada={{salida:sala_resaltada.salida, llegada:sala_resaltada.llegada}} colores={colores}/>
                        </div>
                    )
                }

                return null
            })}
        </div>
    )
}

    

