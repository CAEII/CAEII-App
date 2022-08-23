// axios
import axios from "axios";
// Sweet Alert
import Swal from 'sweetalert2';
// cookies
import Cookies from 'universal-cookie';

// esta funcion hace una peticion al server para guardar la asistencia y muestra un mensaje de exito o error
export default function save_asistencia(Presente, SetPresente, activiti) {

    const cookies = new Cookies();
    const token = cookies.get('session').token.substring(cookies.get('session').token.indexOf("|") + 1)
    const url = `https://inscripciones.aareii.org.ar/api/v1/selections/${activiti.selection_id}/update`          // url para hacer la request con axios

    Swal.fire({         // mensaje de espera
        title: "<strong>Guardando . . . </strong>",
        icon: 'warning'
    })
    axios({
        method: 'patch',
        url: url,
        headers: {
            "Accept": "application/json",
            Authorization: `Bearer ${token}`
        },
        data: {
            attended: !activiti.attended
        },
    })
        .then(function (response) {
            // handle success
            console.log(response.data);

            Swal.fire({     // si todo sale bien muestro este mensaje
                title: "<strong>Asistencia confirmada</strong>",
                icon: 'success'
            })

            SetPresente(Presente);                              // cambio el estado del boton
        })
        .catch(function (error) {
            // handle error
            console.log(error.response);

            Swal.fire({         // si ocurrio algun error muestro este mensaje
                title: `<strong>${error.response.data.message}</strong>`,
                icon: 'error'
            })
        })
}