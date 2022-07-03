// react
import { useParams } from "react-router-dom";
// components
import BaseLayout from "./layout";
// styles
import "../styles/info/css/info.css"
// imgs
import title from "../styles/info/img/caeii-title.png"
// json
import json from "../informacion.json"

// componente informacion general
export default function Info_general() {
    const { category } = useParams()            // guardo en una constante la categoria del url 

    for (let i = 0; i < json.length; i++) {     // recorro el json 
        if (json[i].category === category) {    // busco una categoria que coinsida con la de la url
            var jsonData = json[i].data         // si la encuentro guardo la data de esa categoria del json en la variable jsonData
            break                               // al encontrar la categoria rompo el bucle
        } else {
            continue
        }  
    }

    if (jsonData) {         // si exixte la variable jsonData (significa que la categoria de la url existe dentro del json), devuelvo el componente, si no existe devuelvo un error
        return (        
            <BaseLayout>
                <main className="info_pag" id="home">
                    <div class="title">
                        <img src={title} alt="Logo caeii"></img>
                    </div>
                    <section id="info_general"> 
                        <h2> {category} </h2>         
                        <InfoBody params={jsonData}/>         
                    </section>   
                </main>
            </BaseLayout>
        )
    } else {
        console.error('El parametro "category" de la url de ser: "Estaciones", "Visitas técnicas", "Conferencias magistrales", "Conferencias profesionales", "Talleres", "Hackaton" o "Feria de empleo"');
    }
}



function InfoBody(params) {
    return(
        params.params.map(info => {         // recorro la info del json y por cada item en la lista devuelvo un div class="info_card"
            return (
                <div class="info_card">
                    <div class="info_card_text">
                        <div class="info_card_circle">
                            <img src={info.img} alt="" />      {/*la ruta de las imagenes no funciona, no se porque */}
                        </div>
                        <h3> {info.title} </h3>
                        <p> {info.desciption} </p>
                    </div>
    
                    <Lists items={info.items}/>
                    
                </div>
            )
        })
    )
}

function Lists(params){
    if (params.items) {         // reviso si "params.items" existe
        var mitad;              // declaro la variable "mitad"

        if (params.items.length % 2 === 0) {                    // le doy a "mitad" el valor de la mitad del largo de "params.items" si es par
            mitad = Math.floor(params.items.length / 2);
        } else {
            mitad = (Math.floor(params.items.length / 2))+1;    // si no es par le doy el varlor de la mitad mas uno del largo de "params.items"
        }

        const inicio = params.items.slice(0, mitad);            // declaro la constante "inicio" como un array con la primer mitad de "params.items"
        const final = params.items.slice(mitad);                // declaro la constante "final" como un array con la segunda mitad de "params.items"

        return(
            <div class="info_items">
                <ul class="izquierda">
                    {inicio.map(item => <li> {item} </li>)}
                </ul>
                <ul class="derecha">
                    {final.map(item => <li> {item} </li>)}
                </ul>
            </div>
        )
    } 
}