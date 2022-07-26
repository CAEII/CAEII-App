// react
import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
// axios
import axios from 'axios';
// cookies
import Cookies from 'universal-cookie';
// components
import BaseLayout from "../layout"
// import Credencial from "./SectionCredencial/Credencial";
import Cronograma from "./SectionCronograma/Cronograma";
import SectionMapas from "./SectionMapas/Section_Mapas";
import SectionMapasNotLoged from "./SectionMapas/SectionMapasNotLoged";
// functions
// import {Asistencia} from "./Suport_functions"
//styles
import "../../styles/perfil/css/Perfil.css";
// imgs
// import title from "../../styles/home/img/caeii-title.png"
import CaeiiLogo from "../../styles/perfil/img/CAEII LOGO 1.png";
// json
import json from "./Json_prueva_perfil.json"

const cookies = new Cookies();


export default function Perfil() {
    const [Coute, SetCuote] = useState("Bienvenido, ¿listo para el despegue?");
    const [Salas, SetSalas] = useState({salida: "Explanada", llegada:"Explanada"});

    const [IsLoged, SetIsLoged] = useState(false);

    useEffect(() => {
        if (cookies.get('session') !== undefined) {
            SetIsLoged(true)
        } else {
            SetIsLoged(false)
        }
    }, [])

    // var asistencia
    // if (user === "Augusto Antonelli") {
    //     asistencia = 80
    // } else {
    //     asistencia = 50
    // }

    // useEffect(() => {
    //     axios.get("http://192.168.1.40:8888/").then((Response) => {console.log(Response)})
    // })

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
                    {IsLoged === false ? <div class="cuote"><h1> {Coute} </h1></div> : null}
                    
                    {/* <Credencial nombre={user} asistencia={asistencia}/> */}

                    <Cronograma IsLoged={IsLoged} dias={json.dias} SetSalas={SetSalas}  Salas={Salas}/>

                    {IsLoged === true ? <SectionMapas salas={Salas}/> : <SectionMapasNotLoged salas={Salas}/>}

                    <section id="logo">
                        <img src={CaeiiLogo} alt="logo CAEII" />
                    </section>
                </main>
            </BaseLayout>
        </div>
    );
}