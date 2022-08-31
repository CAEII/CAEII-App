// Sweet Alert
import Swal from 'sweetalert2';
// cookies
import Cookies from 'universal-cookie';
const cookies = new Cookies();

// esta funcion revisa si el usuario es un admin y revisa si el asistente al evento esta en la sala correcta
export default function check_admin(navigate, Activiti) {
    if (cookies.get('admin') === undefined) {       // si la cookie admin es igual a "undefinded" significa que el usuario no es un admin, por lo tanto lo redirijo al home
        Swal.fire({                                 // si ocurrio algun error muestro este mensaje
            title: `<strong>Debés seleccionar dónde estás para poder reguistrar la asistencia</strong>`,
            icon: 'error'
        })
        return navigate("/perfil")
    }
    if (Activiti.id === null) {                             // si la id de la actividad es "null":
        return ''                                           // regreso un string basio
    }
    if (cookies.get('admin').includes(Activiti.id)) {       // si la lista de ids de la cookie contiene el id de la actividad:
        return true                                         // regreso un "true"
    }
    return false                                            // si la id de la actividad no es null, ni esta en la lista de la cookie, regreso un "false"
}