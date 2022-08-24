// Sweet Alert
import Swal from 'sweetalert2';
// cookies
import Cookies from 'universal-cookie';
const cookies = new Cookies();

// esta funcion revisa si el usuario es un admin y revisa si el asistente al evento esta en la sala correcta
export default function check_admin(navigate, Activiti) {
    if (cookies.get('admin') === undefined) {       // si la cookie admin es igual a "undefinded" significa que el usuario no es un admin, por lo tanto lo redirijo al home
        Swal.fire({         // si ocurrio algun error muestro este mensaje
            title: `<strong>Debés seleccionar dónde estás para poder reguistrar la asistencia</strong>`,
            icon: 'error'
        })
        return navigate("/perfil")
    }
    
    if (Activiti.id === null) {
        return ''
    }
    if (cookies.get('admin').includes(Activiti.id)) {
        return true
    }

    return false
}