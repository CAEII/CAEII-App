// axios
import axios from "axios";
// Sweet Alert
import Swal from 'sweetalert2'; 
// cookies
import Cookies from 'universal-cookie';



export default function Kk (Email, Password){

    const cookies = new Cookies();
    var actividades_segun_user = []

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
        // console.log(Response.data)
        const session_cookie_info = {user: {user_id:Response.data.user.id, name: Response.data.user.full_name, admin: true}, token: Response.data.token}

        Response.data.user.enrollments.map( enrllment => {
            
            if (enrllment.event.name.includes("CAEII XX")) {
                enrllment.selections.map( section => {
                    actividades_segun_user.push(section.pivot.value)
                })
            }
            
        })

        

        cookies.set('session', session_cookie_info, { path: '/' , maxAge: 5184000});
        cookies.set('activities', actividades_segun_user, { path: '/' , maxAge: 5184000});
    }) 
    .catch( error => {
        let erorr_msg = ''

        if (error.message.includes("422") || error.message.includes("500")) {
            // erorr_msg = "hubo un problema con el email"
            erorr_msg = "hubo un problema con la informacion ingresada"
        } else {
            erorr_msg = error.message
        }

        Swal.fire({         // muestro una alerta que indica que hubo un error
            title: `<strong> ${erorr_msg} </strong>`,
            icon: 'error'
        })
    })

}