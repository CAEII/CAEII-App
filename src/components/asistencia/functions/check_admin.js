// cookies
import Cookies from 'universal-cookie';
const cookies = new Cookies();

// esta funcion revisa si el usuario es un admin y revisa si el asistente al evento esta en la sala correcta
export default function check_admin(navigate, Activiti) {
    if (cookies.get('admin') === undefined) {       // si la cookie admin es igual a "undefinded" significa que el usuario no es un admin, por lo tanto lo redirijo al home
        navigate("/")
    }

    if (Activiti.id === null) {
        return ''
    }
    if (cookies.get('admin').includes(Activiti.id)) {
        return true
    }

    return false
}