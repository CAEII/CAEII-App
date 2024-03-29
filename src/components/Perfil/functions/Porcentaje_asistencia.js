import {useNavigate} from 'react-router-dom';
// axios
import axios from "axios";
// cookies
import Cookies from 'universal-cookie';

export default function PorcentajeAsistencia() {

    const cookies = new Cookies();
    const navigate = useNavigate();

    var actividades_segun_user = [] // este array esta compuesto por diccionarios como este: {selection_value:'' ,selection_id: ''}

    if (cookies.get('session') === undefined) {
       return navigate("/")
    }
    const token = cookies.get('session').token.substring(cookies.get('session').token.indexOf("|") + 1)

    axios({
        method: 'get',
        url: `https://inscripciones.aareii.org.ar/api/v1/user`,
        headers: {
            "Accept": "application/json",
            Authorization: `Bearer ${token}`
        },
    })
        .then(Response => {

            let suma_asistencia = 0

            Response.data.user.enrollments.map( enrllment => {                      // Recorro los enrollments del usuario    
                if (enrllment.event.name.includes("CAEII XX")) {                    // Reviso si el nombre del evento inclulle el string "CAEII XX"

                    enrllment.selections.map( section => {                          // Recorro las selecciones del usuario
                        section.items.map( item => {
                            suma_asistencia = suma_asistencia + item.pivot.attended       // sumo todos los valores de "attended" en el evento, como minimo
                            actividades_segun_user.push({selection_value: item.id ,selection_id: section.id}) 
                        })
                    })     
                } 
            })

            const porcentaje_asistencia = suma_asistencia

            cookies.set('activities', actividades_segun_user, { path: '/' , maxAge: 5184000});  // "activities" almacena los ids de las actividades seleccionadas por el usuario
            cookies.set('asistencia', porcentaje_asistencia, { path: '/', maxAge: 5184000 });        // "asistencia" almacena el porcentaje de asistencia del usuario, es solo estetico
        })
        .catch(error => {
            console.log(error)
        })

}