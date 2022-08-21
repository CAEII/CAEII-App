// axios
import axios from "axios";
// cookies
import Cookies from 'universal-cookie';

export default function PorcentajeAsistencia() {

    const cookies = new Cookies();

    const token = cookies.get('session').token.substring(cookies.get('session').token.indexOf("|") + 1)

    axios({
        method: 'get',
        url: `https://inscripciones.aareii.org.ar/api/v1/user`,
        headers: {
            "Accept": "application/json",
            Authorization: `Bearer ${token}`
        }
    })
        .then(Response => {

            // console.log(Response)

            let suma_asistencia = 0

            Response.data.user.enrollments.map( enrllment => {                      // Recorro los enrollments del usuario    
                if (enrllment.event.name.includes("CAEII XX")) {                    // Reviso si el nombre del evento inclulle el string "CAEII XX"
                    enrllment.selections.map( section => {                          // Recorro las selecciones del usuario
                        suma_asistencia = suma_asistencia + section.pivot.attended  // sumo todos los valores de "attended" en el evento, como minimo
                    })
                } 
            })

            const porcentaje_asistencia = (suma_asistencia / 5) * 100

            cookies.set('asistencia', porcentaje_asistencia, { path: '/', maxAge: 5184000 });        // "asistencia" almacena el porcentaje de asistencia del usuario, es solo estetico
        })
        .catch(error => {
            console.log(error)
        })

}