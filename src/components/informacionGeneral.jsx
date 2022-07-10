// react
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
// components
import BaseLayout from "./layout";
// AOS  (animaciones)
import AOS from 'aos';
import "aos/dist/aos.css";
// react-plock (responsive masonry layout)
import { Plock } from "react-plock";
// styles
import "../styles/info/css/info.css"
// imgs
import title from "../styles/info/img/caeii-title.png"
// json
import json from "../informacion.json"


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
            <BaseLayout>
                <main className="info_pag" id="home">
                    <div class="title">
                        <img src={title} alt="Logo caeii"></img>
                    </div>
                    <section className="section_info_general">
                        <div className="sections_navbar">
                            {jsonDataCategory.map((rubro) => {                      // recorros los rubros de la categoria (si los hay) y creo un boton por cada uno
                                let className = "navbutton " + rubro.title
                                return (
                                    // <button className="navbutton" onClick={() => setRubro(rubro.title)}> {rubro.title} </button>
                                    <div className={className}> <p> {rubro.title} </p> <input type="radio" name="kk" className="navbar_radio" id={rubro.title} onClick={() => setRubro(rubro.title)}/> </div>
                                )
                            })}
                        </div>

                        <div className="cards_container">
                            <InfoBody rubro={Rubro} jsonData={jsonDataCategory}/>
                        </div>

                    </section>
                </main>
            </BaseLayout>
        )    
    } else {
        console.error('El parametro "category" de la url de ser: "Estaciones", "Visitas técnicas", "Conferencias magistrales", "Conferencias profesionales", "Talleres", "Hackaton" o "Feria de empleo"');
    }  
}


// function Navbar(params) {
    
// }



function InfoBody(params) {
    useEffect(() => {
        AOS.init({
          duration: 1500, // values from 0 to 3000, with step 50ms
          once: true, // whether animation should happen only once - while scrolling down
        });
    }, []);

    var rubro = params.rubro                // inicializo la variable rubro con el valor pasado por parametros
    if (params.rubro === "default") {       // si el valor pasado por parametros para el rubro es igual a "default" le doy a la variable el titulo del primer rubro en la respectiva categoria del json
        rubro = params.jsonData[0].title
    }

    for (let i = 0; i < params.jsonData.length; i++) {      // recorro el json 
        if (params.jsonData[i].title === rubro) {           // busco un rubro que coinsida con el de los parametros
            var cards = params.jsonData[i].info             // si lo encuentro guardo la data de ese rubro del json en la variable cards
            break                                           // al encontrar la categoria rompo el bucle
        } else {
            continue
        }  
    }

    return cards.map(card => {         // recorro la info del json y por cada item en la lista devuelvo un div class="info_card"
        return (
            // <div class="info_card"  data-aos="zoom-in-up">
            <div class="info_card">
                <div class="info_card_text">
                    
                    <h3> {card.title} </h3>
                    <div class="info_card_circle">
                        <img src={card.img} alt="" />
                    </div>
                    <p> 
                        {card.disertante != "" ? card.disertante : ""}
                        <br/>
                        <br/>
                        {card.desciption} 
                        {/* {info.desciption.replace(";", <br/>)   // intento de agregar saltos de linea } */}  
                    </p>
                </div>
                <Links links={card.links}/>                 
            </div>
        )
    })
}



function Links(params) {
    if (params.links[0].type !== '') {         // reviso si "params.items" existe
        return(
            <ul class="info_links">
                {params.links.map(link => <li> <a href={link.link}> <img src={link.icono} alt={link.type} /> </a> </li>)}
            </ul>
        )
    } 
}