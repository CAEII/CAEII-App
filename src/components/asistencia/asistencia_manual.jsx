// react
import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { useNavigate } from 'react-router-dom';
// axios
import axios from "axios";
// components
import BaseLayout from "../layout"
// cookies
import Cookies from 'universal-cookie';
const cookies = new Cookies();


export default function AsistenciaManual() {
    const [DNI, SetDNI] = useState("")

    console.log(`__${DNI}__`)

    useEffect(() => {
        // declaro la constante "token" con el token guardado dentro de la cookie "session"
        const token = cookies.get('session').token.substring(cookies.get('session').token.indexOf("|") + 1)

        var info_del_back = []

        axios({
            method: 'get',
            url: `https://inscripciones.aareii.org.ar/api/v1/users/${id}`,
            headers: {
                "Accept": "application/json",
                Authorization: `Bearer ${token}`
            }
        }).then( Response => {
            console.log(Response)
        })
    }, [])

    return (
        <div className="App" id="asistencia_manual">
            <BaseLayout>
                <main>
                    <section id="asistencia_manual_section">
                        <input type="text" placeholder="DNI" onChange={e => SetDNI(e.target.value)} />
                        <button> ENVIAR </button>
                    </section>
                </main>
            </BaseLayout>
        </div>
    )
}

function handle_dni(DNI) {

}