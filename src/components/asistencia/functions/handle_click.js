// functions
import save_asistencia from "./save_asistencia";
// Sweet Alert
import Swal from 'sweetalert2'; 


export default function handle_click(is_here, SetPresente, Presente, user, asistencia){
    if (is_here === false) {
        Swal.fire({
            title: "<strong> Actividad equivocada </strong>",
            icon: 'error'
        })
    } else {
        save_asistencia(user, Presente, asistencia);
        SetPresente(Presente);
    }
}