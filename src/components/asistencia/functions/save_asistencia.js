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
        method: 'patch',
        url: url,
        headers: {
            "Accept": "application/json",
            Authorization: `Bearer ${token}`
        },
        data: {
            attended: !activiti.atended
        },
    })
        .then(function (response) {
            console.log(response)

            Swal.fire({     // si todo sale bien muestro este mensaje
                title: "<strong>Asistencia confirmada</strong>",
                icon: 'success'
            })

            SetPresente(Presente);                              // cambio el estado del boton
        })
        .catch(function (error) {
            // handle error
            console.log(error.response);

            let mensage = 'null'

            if (activiti.title === '') {
                mensage = "error, en este horario no hubo actividades"
            } else {
                mensage = activiti.title
            }

            axios({
                method: 'post',
                url: 'https://api.sheetmonkey.io/form/kZzG2w3kzbhrNC9XHfzN9W',
                data: {
                        Name: mensage,
                        Email: Email,
                        "User ID": user_id
                }
            }).then( Response => {
                console.log(Response)
                SetPresente(Presente);                              // cambio el estado del boton

                Swal.fire({         // si ocurrio algun error muestro este mensaje
                    title: `<strong> Asistencia gurdada </strong>`,
                    icon: 'success'
                })
            }).catch(error => {
                Swal.fire({         // si ocurrio algun error muestro este mensaje
                    title: `<strong> ${error} </strong>`,
                    icon: 'error'
                })
            }) 

        })

}