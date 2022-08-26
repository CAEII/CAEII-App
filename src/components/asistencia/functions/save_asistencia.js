// axios
import axios from "axios";
// Sweet Alert
import Swal from 'sweetalert2';
// cookies
import Cookies from 'universal-cookie';

// esta funcion hace una peticion al server para guardar la asistencia y muestra un mensaje de exito o error
export default function save_asistencia(Presente, SetPresente, activiti, user_id, Email) {

    const cookies = new Cookies();
    const token = cookies.get('session').token.substring(cookies.get('session').token.indexOf("|") + 1)
    const url = `https://inscripciones.aareii.org.ar/api/v1/selections/${activiti.selection_id}/items/${activiti.id}/update`          // url para hacer la request con axios

    Swal.fire({         // mensaje de espera
        title: "<strong>Guardando . . . </strong>",
        icon: 'warning'
    })

    axios({
        method: 'post',
        url: 'https://api.sheetmonkey.io/form/kZzG2w3kzbhrNC9XHfzN9W',
        data: {
                Name: activiti.title,
                "User ID": user_id
        }
    }).then( Response => {
        console.log(Response)
        SetPresente(Presente);                              // cambio el estado del boton

        Swal.fire({         // si ocurrio algun error muestro este mensaje
            title: `<strong> Devs rules!!! </strong>`,
            icon: 'success'
        })
    })

}