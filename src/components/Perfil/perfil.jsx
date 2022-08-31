// react
import React, { useEffect, useState } from "react";
import { useRef } from "react";
import {useNavigate} from 'react-router-dom';
// cookies
import Cookies from 'universal-cookie';
// components
import BaseLayout from "../layout"
import Credencial from "./SectionCredencial/Credencial";
import Cronograma from "./SectionCronograma/Cronograma";
import SectionMapas from "./SectionMapas/Section_Mapas";
import Admins from "./SectionAdmins/admins";
import Badges from "./SectionBadges/badges"
import Preguntas from "./SectionPreguntas/preguntas"
import Santi from "./SectionSanti/santiRulesAll"
// functions
import {Que_dia_es_hoy} from "./Suport_functions"
import PorcentajeAsistencia from "./functions/Porcentaje_asistencia";
// styles
import "../../styles/perfil/css/Perfil.css";
import "../../styles/perfil/css/santi.css";
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

    const navigate = useNavigate();


    useEffect(() => {
        // reviso si el valor de la cookie "session" es igual a undefined, que este valor sea undefined implica que la cookie no existe
        if (cookies.get('session') === undefined) {
            return navigate("/")                    // si lo es redirecciono al usuario a la home page
        } else {
            SetUser(cookies.get('session').user)    // si no guardo el nombre del usuario en el usestate "User"
        }

        // reviso si el valor de la cookie "activities" es igual a undefined, que este valor sea undefined implica que la cookie no existe
        if (cookies.get('activities') === undefined) {
            PorcentajeAsistencia()          // si lo es llamo a la funcion "PorcentajeAsistencia"
        }

        SetAsistencia(((cookies.get('asistencia') / 9) * 100).toFixed(0))
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

                    {User.user_id === 3638 ? <Badges/> : ""}

                    {/* seccion recontra mega archi admin */}
                    {User.user_id === 3699 ? <Santi/> : ""}
                    
                    <Credencial nombre={User.name} asistencia={80} id={User.user_id}/>

                    <div id="badges_pilares">
                        <img src="/imgs/badges/pilares/ins_est.png" className="ins_pilares"></img>
                        <img src="/imgs/badges/pilares/ins_log.png" className="ins_pilares"></img>
                        <img src="/imgs/badges/pilares/ins_city.png" className="ins_pilares"></img>
                        <img src="/imgs/badges/pilares/ins_ing.png" className="ins_pilares"></img>
                        
                    </div>

                    <Preguntas/>

                    <Cronograma SetSalas={SetSalas} Salas={Salas} SetActividad={SetActividad} executeScroll={executeScroll}/>

                    <SectionMapas salas={Salas} referencia={myRef}/>

                    {/* {Que_dia_es_hoy() !== "Jueves" ? <Badges/> : null} */}

                    <section id="logo">
                        <img src={CaeiiLogo} alt="logo CAEII" />
                    </section>
                </main>
            </BaseLayout>
        </div>
    );
}