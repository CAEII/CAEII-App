// react
import React from "react";
import { useState } from "react";
// components
import BaseLayout from "../layout"
import Credencial from "./SectionCredencial/Credencial";
import Cronograma from "./SectionCronograma/Cronograma";
import SectionMapas from "./SectionMapas/Section_Mapas";
// functions
import {Asistencia} from "./Suport_functions"
//styles
import "../../styles/perfil/css/Perfil.css";
// imgs
import title from "../../styles/home/img/caeii-title.png"
import CaeiiLogo from "../../styles/perfil/img/CAEII LOGO 1.png";
// json
import json from "./Json_prueva_perfil.json"




export default function Perfil() {
    const [Coute, SetCuote] = useState("Bienvenido, ¿listo para el despegue?");
    const [SalaLlegada, SetSalaLlegada] = useState("Explanada");
    const [SalaSalida, SetSalaSalida] = useState("Sala_Cacheuta");

    const [Salas, SetSalas] = useState({salida: "Explanada", llegada:"Sala_Cacheuta"});
  

    return (
        <div className="App" id="perfil">
            <div className="sistema_solar_container">
                <div class="sistema_solar">
                    <div class="sol"></div>
                    <div class="orbits orbit_1">
                        <div class="planet_container">
                            <div class="planet"></div>
                        </div>
                    </div>
                    <div class="orbits orbit_2">
                        <div class="planet_container">
                            <div class="planet"></div>
                        </div>
                    </div>
                    <div class="orbits orbit_3">
                        <div class="planet_container">
                            <div class="planet"></div>
                        </div>
                    </div>
                </div>
            </div>
            <BaseLayout>
                <main>

                    {/* <div class="title">
                        <img src={title} alt="Logo caeii"></img>
                    </div> */}

                    <div class="cuote">
                        <h1> {Coute} </h1>
                    </div>

                    <Credencial nombre={json.nombre} asistencia={Asistencia(json.dias)}/>

                    <Cronograma dias={json.dias} SetSalaLlegada={SetSalaLlegada}/>

                    <SectionMapas salas={Salas}/>

                    <section id="logo">
                        <img src={CaeiiLogo} alt="logo CAEII" />
                    </section>
                </main>
            </BaseLayout>
        </div>
    );
}