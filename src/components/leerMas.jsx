// style
import "../styles/leerMas/leermas.css"
// imgs
import cohete from "../styles/home/img/cohete-botones.svg"

// boton leer mas:  los posibles links son: "Estaciones", "Visitas técnicas", "Conferencias magistrales", "Conferencias profesionales", "Talleres", "Hackaton" o "Feria de empleo"
export default function LeerMas(params) {
    var link;           // declaro la varialbe link
    if (params.type === 'interno') {            // si el tipo de link es "interno" le doy el valor "/info/(nombre de la categoria)"
        link = "/info/" + params.link
    } else if (params.type === 'externo') {     // si el tipo de link es "externo" le doy el valor del link ingresado como parametro
        link = params.link
    } else {            // si no hay parametro type muestro un error
        console.error('el valor del parametro "type" deve ser "interno" si es un link interno por ejemplo "../info/Estaciones" o "externo" si es un link externo por ejemplo "https://www.youtube.com/"');
    }
    
    return (
        <div class="button leermas">
            <a href={link} class="hyperspan">
                <div class="circle">
                    <div class="rocket_container">
                      <img src={cohete} alt="cohete caeii" class="cohete_leer_mas"></img>
                    </div>
                    <div class="circle2"></div>
                </div>
                <div class="texto"> Leer mas </div>
            </a>
        </div>
  )
}