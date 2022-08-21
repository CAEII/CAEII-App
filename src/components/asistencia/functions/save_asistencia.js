// axios
import axios from "axios";
// Sweet Alert
import Swal from 'sweetalert2'; 

const ipv4 = process.env.REACT_APP_ipV4        // string de la direccion ipv4. ejemplo: 192.168.1.40

// esta funcion hace una peticion al server para guardar la asistencia y muestra un mensaje de exito o error
export default function save_asistencia(user, Presente, asistencia, SetPresente) {
    let new_asistencia
    if (Presente === true) {
        new_asistencia = parseInt(asistencia) + 10
    } else{
   
        new_asistencia = parseInt(asistencia)
    }

    console.log(`asistencia: ${asistencia}, nueva asistencia: ${new_asistencia}`)

    const selection_id = 12

    const url = `https://inscripciones.aareii.org.ar/api/v1/selections/${selection_id}/update`          // url para hacer la request con axios

    Swal.fire({         // mensaje de espera
        title: "<strong>Guardando . . . </strong>",
        icon: 'warning'
    })

    axios.get(url)      // request de axios
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
            console.log(error);

            Swal.fire({         // si ocurrio algun error muestro este mensaje
                title: "<strong>hubo algun error</strong>",
                icon: 'error'
            })
        })
}