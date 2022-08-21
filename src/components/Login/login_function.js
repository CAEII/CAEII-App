// axios
import axios from "axios";
// Sweet Alert
import Swal from 'sweetalert2'; 
// cookies
import Cookies from 'universal-cookie';



export default function login (Email, Password){

    const cookies = new Cookies();
    var actividades_segun_user = [] // este array esta compuesto por diccionarios como este: {selection_value:'' ,selection_id: ''}

    axios({
        method: 'post',
        url: 'https://inscripciones.aareii.org.ar/api/v1/login',
        data: {
                email: Email,
                password: Password
            },
        headers: {
            "Accept": "application/json"
        }
    }) 
    .then( Response => {

        console.log(Response.data)
        // declaro una constatnte con la info que me interesa guardar en la cookie de session
        const session_cookie_info = {user: {user_id:Response.data.user.id, name: Response.data.user.full_name, admin: true}, token: Response.data.token}

        Response.data.user.enrollments.map( enrllment => {                  // Recorro los enrollments del usuario    
            if (enrllment.event.name.includes("CAEII XX")) {                // Reviso si el nombre del evento inclulle el string "CAEII XX"
                enrllment.selections.map( section => {                      // Recorro las selecciones del usuario
                    // Guardo el valor de la seleccion, este es id de la actividad dentro del evento
                    actividades_segun_user.push({selection_value: section.pivot.value ,selection_id: section.pivot.id})     
                })
            } 
        })

        // creo dos cookies en la ruta "/" con una vida maxima de dos meses
        cookies.set('session', session_cookie_info, { path: '/' , maxAge: 5184000});        // "session" almacena datos del usuario como id, nombre, token y si es una admin o no
        cookies.set('activities', actividades_segun_user, { path: '/' , maxAge: 5184000});  // "activities" almacena los ids de las actividades seleccionadas por el usuario
    }) 
    .catch( error => {
        let erorr_msg = ''
        // si el codigo del error es 422 o 500 significa que hubo un problema con los datos ingresados, si no muestro el error en el mensaje de la alerta
        if (error.message.includes("422") || error.message.includes("500")) {
            erorr_msg = "hubo un problema con la informacion ingresada"
        } else {
            erorr_msg = error.message
        }

        Swal.fire({         // muestro una alerta que indica que hubo un error, con el error en cuestion
            title: `<strong> ${erorr_msg} </strong>`,
            icon: 'error'
        })
    })

}