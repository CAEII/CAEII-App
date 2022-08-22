// axios
import axios from "axios";
// Sweet Alert
import Swal from 'sweetalert2'; 

// esta funcion hace una peticion al server para guardar la asistencia y muestra un mensaje de exito o error
export default function save_asistencia(Presente, SetPresente, selection_id) {

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