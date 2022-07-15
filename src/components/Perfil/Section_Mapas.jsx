// react
import { useEffect, useState } from "react"
// components
import PrimerPiso from "./Mapas/PrimerPiso"
import Ejemplo from "./Mapas/Ejemplo"
// styles
import "../../styles/perfil/css/maps.css"

export default function Section_Mapas() {
    const [Mapa, SetMapa] = useState("pruea_mapa_1");         // esta info depende del cronograma
    const [Sala, SetSala] = useState("hall_de_expocicion");       // esta info depende del cronograma
    return (
        <section id="mapas">
            <div class="title_card_perfil title_mapas">
                <h2>¿A dónde voy?</h2>
                <label htmlFor="auditorio" class="title_text">Auditorio: </label>
                <div class="select" id="auditorio">
                    <select onChange={(value) => SetSala(value.target.value)}>
                        <option value="hall_de_expocicion" selected>hall de expocicion</option>
                        <option value="uspallata">uspallata</option>
                        <option value="magna_central">magna_central</option>
                        <option value="nihuil">nihuil</option>
                        <option value="cacheuta" >cacheuta</option>
                    </select>
                </div>
                <label htmlFor="otroLugar" class="title_text">Otro lugar: </label>
                <div class="select" id="otroLugar">
                    <select>
                        <option value="NaveCultural">Nave cultural</option>
                        <option value="NaveCultural">Nave cultural</option>
                        <option value="NaveCultural">Nave cultural</option>
                    </select>
                </div>
                <label htmlFor="EstoyAqui" class="title_text">Estoy aquí: </label>
                <div class="select" id="EstoyAqui">
                    <select>
                        <option value="AMagna">Aula Magna</option>
                        <option value="AMagna">Aula Magna</option>
                        <option value="AMagna">Aula Magna</option>
                    </select>
                </div>
            </div>
            <div className="map_container">
                <PrimerPiso sala_resaltada={Sala}/>
                <Ejemplo sala_resaltada="sala_2"/>
            </div>
            {/* <Mapas Mapa={Mapa}/> */}
            {/* <div class="content_mapas">
                    <iframe id="mapasPropios" src="img\PLACE HOLDER cuadrado.png" frameborder="0"></iframe>
                    <iframe id="googlemaps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.4246704984653!2d-0.16074438402773236!3d51.52377031732685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761acf33628211%3A0x445d7677a88322e1!2s221B%20Baker%20St%2C%20London%20NW1%206XE%2C%20Reino%20Unido!5e0!3m2!1ses!2sar!4v1652625043434!5m2!1ses!2sar" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div> */}
        </section>
    )
}


function Mapas({Mapa}) {
    const [sala, Setsala] = useState("sala_1");

    if (Mapa === 'pruea_mapa_1') {
        return(
            <div className="map_container">
                {/* <SvgComponent2 sala_resaltada={sala}/> 
                <button onClick={() => sala === "sala_1" ? Setsala("sala_2"):Setsala("sala_1")}> cambiar sala</button> */}
            </div>
        )
    }
}

