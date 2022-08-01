// React
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
// Sweet Alert
import Swal from 'sweetalert2'; 
// stiles
import "../styles/asistencia/asistencia.css";


// const ipv4 = "192.168.1.40"            // string de la direccion ipv4. ejemplo: 192.168.1.40
const ipv4 = process.env.REACT_APP_ipV4        // string de la direccion ipv4. ejemplo: 192.168.1.40


export default function Asistencia(){
    const { user, activiti, asistencia } = useParams()
    const [Presente, SetPresente] = useState(asistencia === 'true');

    const [Asistencia, SetAsistencia] = useState(0);

    const url = `http://${ipv4}:11000/get_info/` + user.replace("_", " ")

    useEffect(() => {
        axios.get(url).then((Response) => {
            SetAsistencia(Response.data.asistencia)
        })
    }, [])

    return (
        <div className="App" id="asistencia">

            <div className="asistencia_info">
                <span className="asistencia_tag nombre_del_asistente" > {user.replace(/_/g, " ")} </span>
                <div className="asistencia_tag nombre_de_la_actividad">
                    <span className="activit_name_lavel"> Actividad: </span>
                    <span className="activit_name"> {activiti.replace(/_/g, " ")} </span>
                </div>
                
            </div>

            <button id="buton" className={`asistencia_tag button_asistencia presente_${Presente}`} onClick={() => {SetPresente(!Presente); handle_asistencia(user, !Presente, Asistencia)}}>
                { Presente == true ? "PRESENTE" : "AUSENTE"} 
            </button>
        </div>
    )
}

function handle_asistencia(user, Presente, asistencia) {
    let new_asistencia

    if (Presente === true) {
        new_asistencia = parseInt(asistencia) + 10
    } else{
   
        new_asistencia = parseInt(asistencia)
    }

    console.log(`asistencia: ${asistencia}, nueva asistencia: ${new_asistencia}`)

    const url = `http://${ipv4}:11000/rite_info/${user}/${new_asistencia}` 

    Swal.fire({
        title: "<strong>Guardando . . . </strong>",
        icon: 'warning'
    })

    axios.get(url)
        .then(function (response) {
            // handle success
            console.log(response.data);

            Swal.fire({
                title: "<strong>Asistencia confirmada</strong>",
                icon: 'success'
            })
        })
        .catch(function (error) {
            // handle error
            console.log(error);

            Swal.fire({
                title: "<strong>hubo algun error</strong>",
                icon: 'error'
            })
        })
}