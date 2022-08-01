// React
import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
// axios
import axios from "axios";
// functions
import check_admin from "./functions/check_admin";
import handle_click from "./functions/handle_click";
// stiles
import "../../styles/asistencia/asistencia.css";
// json
import lista_de_salas from "./lista_de_actividades.json"



const ipv4 = process.env.REACT_APP_ipV4        // string de la direccion ipv4. ejemplo: 192.168.1.40


export default function Asistencia(){
    const { user, activiti, asistencia, check_location } = useParams()
    const [Presente, SetPresente] = useState(asistencia === 'true');

    const [Asistencia, SetAsistencia] = useState(0);

    const url = `http://${ipv4}:11000/get_info/` + user.replace("_", " ")

    const navigate = useNavigate();

    const is_here = check_admin(navigate, activiti, lista_de_salas.indexOf(activiti.replace("_", " ")) > -1 ? true : false);
    const is_here_class = "asistencia_tag nombre_de_la_actividad is_here_" + is_here;

    useEffect(() => {
        axios.get(url).then((Response) => {
            SetAsistencia(Response.data.asistencia)
        })
    }, [])

    

    return (
        <div className="App" id="asistencia">

            <div className="asistencia_info">
                <span className="asistencia_tag nombre_del_asistente" > {user.replace(/_/g, " ")} </span>
                <div className={is_here_class}>
                    <span className="activit_name_lavel"> Actividad: </span>
                    <span className="activit_name"> {activiti.replace(/_/g, " ")} </span>
                </div>
                
            </div>

            {/* <button id="buton" className={`asistencia_tag button_asistencia presente_${Presente}`} onClick={() => {SetPresente(!Presente); handle_asistencia(is_here, user, !Presente, Asistencia)}}> */}
            <button id="buton" className={`asistencia_tag button_asistencia presente_${Presente}`} onClick={() => {handle_click(is_here, SetPresente, !Presente, user, Presente, asistencia)}}>
                { Presente == true ? "PRESENTE" : "AUSENTE"} 
            </button>
        </div>
    )
}

// function check_admin(navigate ,activiti_name, check_location) {
//     if (cookies.get('admin') === undefined) {
//         navigate("/")
//     }
//     if (check_location === false) {
//         return  ""
//     }
//     if (cookies.get('admin') === activiti_name.replace("_", " ")) {
//         return true
//     }
//     if (cookies.get('admin') !== activiti_name.replace("_", " ")) {
//         return false
//     }
// }


// function handle_click(is_here, SetPresente, Presente, user, asistencia){
//     if (is_here === false) {
//         Swal.fire({
//             title: "<strong> Actividad equivocada </strong>",
//             icon: 'error'
//         })
//     }
//     if (is_here === '') {
//         handle_asistencia(user, Presente, asistencia);
//         SetPresente(Presente);
//     }
// }



// function handle_asistencia(user, Presente, asistencia) {
//     let new_asistencia

//     if (Presente === true) {
//         new_asistencia = parseInt(asistencia) + 10
//     } else{
   
//         new_asistencia = parseInt(asistencia)
//     }

//     console.log(`asistencia: ${asistencia}, nueva asistencia: ${new_asistencia}`)

//     const url = `http://${ipv4}:11000/rite_info/${user}/${new_asistencia}` 

//     Swal.fire({
//         title: "<strong>Guardando . . . </strong>",
//         icon: 'warning'
//     })

//     axios.get(url)
//         .then(function (response) {
//             // handle success
//             console.log(response.data);

//             Swal.fire({
//                 title: "<strong>Asistencia confirmada</strong>",
//                 icon: 'success'
//             })
//         })
//         .catch(function (error) {
//             // handle error
//             console.log(error);

//             Swal.fire({
//                 title: "<strong>hubo algun error</strong>",
//                 icon: 'error'
//             })
//         })
// }