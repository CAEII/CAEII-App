// functions
import save_asistencia from "./save_asistencia";
// Sweet Alert
import Swal from 'sweetalert2'; 

// esta funcion se encarca de decidir si guardar la asistencia o indicar que el asistente esta en la actividad equivocada
export default function handle_click(is_here, SetPresente, Presente, user, asistencia){
    if (is_here === false) {        // si "is_here" es igual a "false" significa que el asistente esta en la actividad equivocada
        Swal.fire({         // muestro una alerta que indica que el asistente esta en la actividad equivocada
            title: "<strong> Actividad equivocada </strong>",
            icon: 'error'
        })
    } else {        // si el asistente esta en la actividad correcta o la actividad es igual para todos los asistentes
        save_asistencia(user, Presente, asistencia);        // guardo la asistencia
        SetPresente(Presente);                              // cambio el estado del boton
    }
}