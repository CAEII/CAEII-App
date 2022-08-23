// react
import { useState } from "react";
import { useParams } from "react-router-dom";
// components
import BaseLayout from "../layout";
import Navbar from "./navbar";
import InfoBody from "./InfoBody";
// cookies
import Cookies from 'universal-cookie';
// Sweet Alert
import Swal from 'sweetalert2';
// styles
import "../../styles/info/css/info.css"
// imgs
import title from "../../styles/info/img/caeii-title.png"
// json
import json from "../../informacion.json"

const cookies = new Cookies();
const codigos_empresas = [
    "Ab0N3S$$9ro6", "!ut8vZ4t9Q@1", "evO6J76H43!q", "evO6J76H73!q", "g9&Bh555MoH2", "jB098mQg2HOp", "439hkqZor918", "CmMFXw4037Ym", "Ee1X20xMi1DA", "w0cxMp8cx1Wm",
    "Yp0a134WS106", "LNbPKi9Rh354", "DfP3d10ki1qc", "a7o45GcX7NWR", "rWEI56NM4LOy", "Ts8PxwN6o5eB", "hTaPY4Jw75zk", "z79vESY8bvO4", "Te20z453RnIl"
]

// componente informacion general
export default function Info_general() {
    const { category } = useParams()                // guardo en una constante la categoria del url 
    const [Rubro, setRubro] = useState("default")   // inicializo el hook "Rubro" como "default"

    for (let i = 0; i < json.length; i++) {         // recorro el json 
        if (json[i].category === category) {        // busco una categoria que coinsida con la de la url
            var jsonDataCategory = json[i].data     // si la encuentro guardo la data de esa categoria del json en la variable "jsonDataCategory"
            break                                   // al encontrar la categoria rompo el bucle
        } else {
            continue
        }
    }

    let Swal_title = ''         //  inicializo la variable "Swal_title" como un string basio, en esta variable guardo el texto que se mostrara en la alerta
    let Swal_icono = ''         //  inicializo la variable "Swal_icono" como un string basio, en esta variable guardo el tipo de icono que se mostrara en la alerta

    if (codigos_empresas.includes(category)) {                                  // Reviso si el valor de "category" esta dentro del array "codigos_empresas"
        var lista_insignias = []

        if (cookies.get("insignias") && cookies.get("insignias") !== undefined) {                                         // si existe la cookie "insignias":
            lista_insignias = cookies.get("insignias")                          // le doy el valor de la cookie a la variable "lista_insignias"

            if (lista_insignias.includes(jsonDataCategory[0].info[0].img)) {    // si la lista de insignias contiene el valor de la ruta de la insignia:
                //console.log(lista_insignias)
                Swal_title = `oh no, parese que ya tenes esta insignia`         // cambio el valor de la variable "Swal_title" por el del texto
                Swal_icono = 'error'                                            // cambio el icono de la alera, el icono de error

            } else {            // si la insignia no esta en la lista de la cookie:
                //console.log(lista_insignias)
                lista_insignias.push(jsonDataCategory[0].info[0].img)           // Agrego la insignia a la lista de insignias que se guarda en la cookie

                // actualizo los valores de la alerta
                Swal_title = `Genial!, conseguiste la insignia de ${jsonDataCategory[0].title}`
                Swal_icono = 'success'
            }
        } else {        // si la cookie no existe o es igual a "undefined":
            // le doy el valor de la insignia a la variable "lista_insignias"
            lista_insignias = [jsonDataCategory[0].info[0].img]
            // actualizo los valores de la alerta
            Swal_title = `Conseguiste tu primer insignia!!`
            Swal_icono = 'success'
        }

        let timerInterval
        // lanzo la aleta
        Swal.fire({
            title: Swal_title,
            icon: Swal_icono,
            timer: 2000,
            timerProgressBar: true,
            didOpen: () => {
                Swal.showLoading()
            },
            willClose: () => {
                clearInterval(timerInterval)
            }
        })
    }

    // seteo un timeout de 100 milisegundos
    setTimeout(() => {
        // seteo la cookie "insignias" con el value igual a la lista de insignias
        cookies.set('insignias', lista_insignias, { path: '/', maxAge: 5184000 });
    }, 100);

    if (jsonDataCategory) {         // si exixte la variable "jsonDataCategory" (significa que la categoria de la url existe dentro del json), devuelvo el componente, si no existe devuelvo un error
        return (
            <div className="App" id="InfoGeneral">
                <BaseLayout>
                    <main className="info_pag" id="home">
                        <div className="title">
                            <img src={title} alt="Logo caeii"></img>
                        </div>
                        <section className="section_info_general">

                            <Navbar info={jsonDataCategory} setRubro={setRubro} />

                            <div className="cards_container" id={category.replace(" ", "_")}>
                                <InfoBody rubro={Rubro} jsonData={jsonDataCategory} />
                            </div>
                        </section>
                    </main>
                </BaseLayout>
            </div>
        )
    } else {
        // console.error('El parametro "category" de la url de ser: "Estaciones", "Visitas técnicas", "Conferencias magistrales", "Conferencias profesionales", "Talleres", "Hackaton" o "Feria de empleo"');
    }
}






