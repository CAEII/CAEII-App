// react
import { useEffect, useState } from "react"
// components
import AuditorioPrincipal from "./Mapas/AuditorioPrincipal"
import PlantaBaja from "./Mapas/Planta_baja"
import PrimerPiso from "./Mapas/Primer_piso"
import SegundoPiso from "./Mapas/Segundo_piso"
// functions
import {en_que_mapa} from "../Suport_functions"
// json
import json_lista_de_salas from "./Lista_de_salas.json"

export default function Section_Mapas({salas,referencia}) {

    const [valores_default, Setvalores_default] = useState(
        {
            Sala_de_salida: salas.salida,
            Sala_de_llegada: salas.llegada
        }
    );    

    const [Mapa, SetMapa] = useState(en_que_mapa(valores_default.Sala_de_salida,valores_default.Sala_de_llegada,json_lista_de_salas));                 // lista con los mapas nesesarios, esta variable se genera mediante las salas de llegada y salida en la funcion "en_que_mapa"

    const [Sala_salida, Set_Sala_salida] = useState(valores_default.Sala_de_salida);       // Sala de salida o "estoy aqui", el valor por defecto depende del cronograma
    const [Sala_llegada, Set_Sala_llegada] = useState(valores_default.Sala_de_llegada);    // Sala de llegada o "voy a", el valor por defecto depende del cronograma   

    const [DentroAuditorio, SetDentroAuditorio] = useState(true);         // estado de los botones "dentro / fuera" del auditorio

    useEffect(() => {
        Setvalores_default({
            Sala_de_salida: salas.salida,
            Sala_de_llegada: salas.llegada
        })
        SetMapa(en_que_mapa(valores_default.Sala_de_salida,valores_default.Sala_de_llegada,json_lista_de_salas))
        Set_Sala_salida(valores_default.Sala_de_salida)
        Set_Sala_llegada(valores_default.Sala_de_llegada)

    }, [salas, valores_default.Sala_de_salida, valores_default.Sala_de_llegada])


    return (
        <section id="mapas" ref={referencia}>
            <div class="title_card_perfil title_mapas">
                <h2>¿A dónde voy?</h2>
                <div className="maps_button_container">
                    <button className={`maps_button_container_${DentroAuditorio}`} disabled={DentroAuditorio} onClick={() => {SetDentroAuditorio(!DentroAuditorio)}}> Dentro del auditorio </button>
                    <button className={`maps_button_container_${!DentroAuditorio}`} disabled={!DentroAuditorio} onClick={() => {SetDentroAuditorio(!DentroAuditorio)}}> Fuera del auditorio </button>
                </div>
                {DentroAuditorio === true ? <Selects SetMapa={SetMapa} Mapas={Mapa} _useStates={{salida:Set_Sala_salida, llegada:Set_Sala_llegada}} valores_default={valores_default}/> : null}
            </div> 
            {DentroAuditorio === true ? <Mapas Mapas={Mapa} sala_resaltada={{salida:Sala_salida, llegada:Sala_llegada}}/>: <iframe title="googleMaps" src="https://www.google.com/maps/d/embed?mid=1c0v85K2T6yKGLi1ZnK43yhwhomSS07s&ehbc=2E312F" width="640" height="480"></iframe>}
        </section>
    )
}

function Selects({SetMapa, Mapas,_useStates,valores_default}) {
    const [SalidaState, SetSalidaState] = useState(valores_default.Sala_de_salida)
    const [LlegadaState, SetLlegadaState] = useState(valores_default.Sala_de_llegada)

    const prueba_mapas = ["SegundoPiso","PimerPiso","AuditorioPrincipal","PlantaBaja"]

    useEffect(() => {
        SetSalidaState(valores_default.Sala_de_salida)
        SetLlegadaState(valores_default.Sala_de_llegada)
    })
    return (
        <div className="section_of_sections">
            <label htmlFor="salida" class="title_text">Estoy aquí: </label>
                <div class="select" id="salida">
                    <select onChange={(value) => {
                        _useStates.salida(value.target.value);
                        console.log(en_que_mapa(value.target.value,LlegadaState,json_lista_de_salas))
                        SetMapa(en_que_mapa(value.target.value,valores_default.Sala_de_llegada,json_lista_de_salas))
                    }} >
                        <option id="default_option_salida" value={SalidaState} selected>  </option>
                        {
                            //Mapas.map((mapa, mapindex) => {                                                                               // Recorro el array de mapas y por cada mapa:
                            prueba_mapas.map((mapa, mapindex) => {                                                                                 // Recorro el array de mapas y por cada mapa:
                                return json_lista_de_salas[mapa].map((sala, salaIndex) => {                                                 // Recorro el array de salas y devuelvo un "<option>" con el valor de la sala
                                   return <option key={mapindex+"_"+salaIndex} value={sala}> {sala.replace(/_/g, " ")} </option>
                                })
                            })
                        }
                    </select>
                </div>
                <label htmlFor="llegada" class="title_text">Voy a: </label>
                <div class="select" id="llegada">
                    <select onChange={(value) => {_useStates.llegada(value.target.value)}}>
                        <option id="default_option_llegada" value={LlegadaState} selected>  </option>
                        {
                            Mapas.map((mapa, mapindex) => {
                                return json_lista_de_salas[mapa].map((sala, salaIndex) => {
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
                        <PlantaBaja key={index} sala_resaltada={{salida:sala_resaltada.salida, llegada:sala_resaltada.llegada}} colores={colores}/>
                    )
                };
                if (mapa === 'AuditorioPrincipal') {
                    return(
                        <AuditorioPrincipal key={index} sala_resaltada={{salida:sala_resaltada.salida, llegada:sala_resaltada.llegada}} colores={colores}/>
                    )
                };
                if (mapa === 'PimerPiso') {
                    return(
                        <PrimerPiso key={index} sala_resaltada={{salida:sala_resaltada.salida, llegada:sala_resaltada.llegada}} colores={colores}/>
                    )
                };
                if (mapa === 'SegundoPiso') {
                    return(
                        <SegundoPiso key={index} sala_resaltada={{salida:sala_resaltada.salida, llegada:sala_resaltada.llegada}} colores={colores}/>
                    )
                };

                console.error("Mapa no encontrado")
                return null
            })}
        </div>
    )
}

    

