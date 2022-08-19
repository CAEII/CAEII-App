// axios
import axios, { Axios } from "axios";
// Sweet Alert
import Swal from 'sweetalert2'; 
// cookies
import Cookies from 'universal-cookie';
const cookies = new Cookies();


export default function kk (Email, Password){

   

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

        if (Response.data.error === true) {
            Swal.fire({         // muestro una alerta que indica que hubo un error
                title: `<strong> ${Response.data.message} </strong>`,
                icon: 'error'
            })
        }

    }) 
    .catch( error => {
        Swal.fire({         // muestro una alerta que indica que hubo un error
            title: `<strong> ${error} </strong>`,
            icon: 'error'
        })
    })

}