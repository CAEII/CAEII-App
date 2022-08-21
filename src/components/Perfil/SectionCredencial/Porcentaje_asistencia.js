// axios
import axios from "axios";
// cookies
import Cookies from 'universal-cookie';

export default function PorcentajeAsistencia() {

    const cookies = new Cookies();

    axios({
        method: 'get',
        url: `https://inscripciones.aareii.org.ar/api/v1/user`,
        headers: {
            "Accept": "application/json",
            Authorization: `Bearer ${token}`
        }

    })
        .then(Response => {

            console.log(Response.data)

            cookies.set('session', session_cookie_info, { path: '/', maxAge: 5184000 });        // "session" almacena datos del usuario como id, nombre, token y si es una admin o no
        })
        .catch(error => {

        })

}