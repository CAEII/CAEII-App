// react
import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { useParams } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
// axios
import axios from 'axios';
// cookies
import Cookies from 'universal-cookie';
// components
import BaseLayout from "../layout"
import Credencial from "./SectionCredencial/Credencial";
import Cronograma from "./SectionCronograma/Cronograma";
import SectionMapas from "./SectionMapas/Section_Mapas";
import Admins from "./SectionAdmins/admins";
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

    const [User, SetUser] = useState("don nadie");
    const [Asistencia, SetAsistencia] = useState(0);

    const [Actividad, SetActividad] = useState();

    const [IsLoged, SetIsLoged] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        if (cookies.get('session') !== undefined) {
            SetIsLoged(true)
            SetUser(cookies.get('session'))
        } else {
            navigate("/")
            SetIsLoged(false)
        }
    }, [])

    const url = `http://${process.env.REACT_APP_ipV4}:11000/get_info/${User}`

    useEffect(() => {
        axios.get(url).then((Response) => {
            // console.log(Response.data)
            SetAsistencia(Response.data.asistencia)
        })  
    })

    const myRef = useRef(null)
    const executeScroll = () => myRef.current.scrollIntoView({ behavior: 'smooth'})

    return (
        <div className="App" id="perfil">
            <div className="sistema_solar_container">
                <div className="sistema_solar">
                    <div className="sol"></div>
                    <div className="orbits orbit_1">
                        <div className="planet_container">
                            <div className="planet"></div>
                        </div>
                    </div>
                    <div className="orbits orbit_2">
                        <div className="planet_container">
                            <div className="planet"></div>
                        </div>
                    </div>
                    <div className="orbits orbit_3">
                        <div className="planet_container">
                            <div className="planet"></div>
                        </div>
                    </div>
                </div>
            </div>
            <BaseLayout>
                <main>
                    {IsLoged === false ? <div className="cuote"><h1> {Coute} </h1></div> : null}


                    {IsLoged === true && process.env.REACT_APP_admis.split("|").indexOf(User) > -1 ? <Admins/> : null}


                    
                    <Credencial nombre={User} asistencia={Asistencia} Actividad={Actividad}/>

                    <Cronograma dias={json.dias} SetSalas={SetSalas}  Salas={Salas} SetActividad={SetActividad} executeScroll={executeScroll}/>

                    <SectionMapas salas={Salas} referencia={myRef}/>

                    <section id="logo">
                        <img src={CaeiiLogo} alt="logo CAEII" />
                    </section>
                </main>
            </BaseLayout>
        </div>
    );
}