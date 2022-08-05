// react
import { useState } from "react"
// imgs
import PlantaBaja from "./Mapas simples/PlantaBaja.png"
import AuditorioPrincipal from "./Mapas simples/AuditorioPrincipal.png"
import PimerPiso from "./Mapas simples/PrimerPiso.png"
import SegundoPiso from "./Mapas simples/SegundoPiso.png"

export default function Section_Mapas({salas}) {
    const [DentroAuditorio, SetDentroAuditorio] = useState(true);         // estado de los botones "dentro / fuera" del auditorio
    const [Mapa, SetMapa] = useState(["PlantaBaja", "AuditorioPrincipal", "PimerPiso", "SegundoPiso"]);   

    return (
        <section id="mapas">
            <div className="title_card_perfil title_mapas">
                <h2>¿A dónde voy?</h2>
                <div className="maps_button_container">
                    <button className={`maps_button_container_${DentroAuditorio}`} disabled={DentroAuditorio} onClick={() => {SetDentroAuditorio(!DentroAuditorio)}}> Dentro del auditorio </button>
                    <button className={`maps_button_container_${!DentroAuditorio}`} disabled={!DentroAuditorio} onClick={() => {SetDentroAuditorio(!DentroAuditorio)}}> Fuera del auditorio </button>
                </div>
            </div> 
            {/* si "DentroAuditorio" es igual a "true" muestro los mapas nesesarios, si no lo es, muestro el iframe de google maps */}
            {DentroAuditorio === true ? <Mapas Mapas={Mapa}/>: <iframe title="googleMaps" src="https://www.google.com/maps/d/embed?mid=1c0v85K2T6yKGLi1ZnK43yhwhomSS07s&ehbc=2E312F" width="640" height="480"></iframe>}
        </section>
    )
}

function Mapas({Mapas, sala_resaltada}) {
    return(
        <div className="maps_container">
            {Mapas.map((mapa, index) => {   // Recorro la lista de mapas y cargo el componente correspondiente
                if (mapa === 'PlantaBaja') {
                    return(
                        <img key={index} src={PlantaBaja} alt="" />
                    )
                };
                if (mapa === 'AuditorioPrincipal') {
                    return(
                        <img key={index} src={AuditorioPrincipal} alt="" />
                    )
                };
                if (mapa === 'PimerPiso') {
                    return(
                        <img key={index} src={PimerPiso} alt="" />
                    )
                };
                if (mapa === 'SegundoPiso') {
                    return(
                        <img key={index} src={SegundoPiso} alt="" />
                    )
                };

                console.error("Mapa no encontrado")
                return null
            })}
        </div>
    )
}

    

