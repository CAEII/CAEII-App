// react
import { useState } from "react";
import { useParams } from "react-router-dom";
// components
import BaseLayout from "../layout";
import Navbar from "./navbar";
import InfoBody from "./InfoBody";
// styles
import "../../styles/info/css/info.css"
// imgs
import title from "../../styles/info/img/caeii-title.png"
// json
import json from "../../informacion.json"


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

    if (jsonDataCategory) {         // si exixte la variable "jsonDataCategory" (significa que la categoria de la url existe dentro del json), devuelvo el componente, si no existe devuelvo un error
        return(
            <div className="App" id="InfoGeneral">
                <BaseLayout>
                    <main className="info_pag" id="home">
                        <div className="title">
                            <img src={title} alt="Logo caeii"></img>
                        </div>
                        <section className="section_info_general">
                            
                            <Navbar info={jsonDataCategory} setRubro={setRubro}/>

                            <div className="cards_container" id={category.replace(" ", "_")}>
                                <InfoBody rubro={Rubro} jsonData={jsonDataCategory}/>
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






