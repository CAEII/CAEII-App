// cookies
import Cookies from 'universal-cookie';
const cookies = new Cookies();

// esta funcion revisa si el usuario es un admin y revisa si el asistente al evento esta en la sala correcta
export default function check_admin(navigate ,activiti_name, check_location) {
    if (cookies.get('admin') === undefined) {       // si la cookie admin es igual a "undefinded" significa que el usuario no es un admin, por lo tanto lo redirijo al home
        navigate("/")
    }
    if (check_location === false) {         // si "check_location" es igual a false, significa que no es nesesario checkear que el asistente este en el lugar correcto
        return  ""  
    }
    if (cookies.get('admin') === activiti_name.replace("_", " ")) {     // si el valor de la cookie "admin" es igual al nombre de la actividad, significa que el asistente esta en el lugar correcto
        return true
    }
    if (cookies.get('admin') !== activiti_name.replace("_", " ")) {
        return false
    }
}