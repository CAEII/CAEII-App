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
import CaeiiLogo from "../../styles/perfil/img/CAEII LOGO 1.png";
// json

const cookies = new Cookies();


export default function Perfil() {
    const [Salas, SetSalas] = useState({salida: "Explanada", llegada:"Explanada"});
    const [User, SetUser] = useState({
        user_id: "0000",
        name: '',
        admin: false
    });
    // const [actividades_segun_user, Set_actividades_segun_user] = useState([]);

    // var actividades_segun_user = []

    const [Asistencia, SetAsistencia] = useState(0);
    const [Actividad, SetActividad] = useState();

    const navigate = useNavigate();


    useEffect(() => {
        if (cookies.get('session') !== undefined) {
            // console.log(cookies.get('session').token.substring(cookies.get('session').token.indexOf("|") + 1));
            SetUser(cookies.get('session').user)
        } else {
            navigate("/")
        }
    
        // axios({
        //     method: 'get',
        //     url: 'https://inscripciones.aareii.org.ar/api/v1/user',
        //     headers: {
        //         "Accept": "application/json",
        //          Authorization: `Bearer ${cookies.get('session').token.substring(3, cookies.get('session').token.length)}`
        //     }
        // }) 
        // .then( Response => {
        //     console.log(Response)
    
        // }) 

        
    }, [])

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

                    {User.admin === true ? <Admins/> : null}
                    
                    <Credencial nombre={User.name} asistencia={Asistencia} id={User.user_id}/>

                    <Cronograma SetSalas={SetSalas}  Salas={Salas} SetActividad={SetActividad} executeScroll={executeScroll}/>

                    <SectionMapas salas={Salas} referencia={myRef}/>

                    <section id="logo">
                        <img src={CaeiiLogo} alt="logo CAEII" />
                    </section>
                </main>
            </BaseLayout>
        </div>
    );
}