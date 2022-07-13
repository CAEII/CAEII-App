// react
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
// components
import BaseLayout from "./layout";
// AOS  (animaciones)
import AOS from 'aos';
import "aos/dist/aos.css";
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
                        
                        <Navbar info={jsonDataCategory} setRubro={setRubro}/>

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


function Navbar(params) {
    if (params.info.length > 1) {           // reviso si la cantidad de rubros es mayor a uno, si lo es devuelvo el navbar, si no lo es devuelvo un "secions_navbar" con la clase "thin"
        return(
            <div className="sections_navbar">             
                {
                    params.info.map((rubro, index) => {                      // recorros los rubros de la categoria (si los hay) y creo un boton por cada uno
                        return (
                            <NavButton title={rubro.title} setRubro={params.setRubro} index={index}/>
                        ) 
                    })
                }
            </div>
        )
    } else {
        return ( <div className="sections_navbar thin"> </div>  )
    }
}

function NavButton(params){
    // const [Ischecked, setIschecked] = useState(`navbar_radio navbar_radio_${params.index}`);
    const className = "navbutton " + params.title
    return (
        <div className={className}> 
            <p className="nav_buttons_title"> {params.title.replace("/", " ")} </p> 
            <input type="radio" name="kk" className="navbar_radio" id={params.title} onClick={() => {params.setRubro(params.title)}}/> 
            <span class="checkmark"></span>          
        </div>
    ) 
}



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
        
        setTimeout(() => {          // pongo un timeout de 100 milisegundos
            document.getElementById(params.jsonData[0].title).checked = true;
        }, 100);
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
                   {card.img !== "" ? <Img src={card.img}/> : null}        {/*  si la src de la imagen no esta vacia muestro la imagen     */}
                    <p> 
                        {card.disertante !== "" ? card.disertante : ""}
                        <br/>
                        <br/>
                        {card.desciption} 
                    </p>
                </div>
                {card.items.length > 0 ? <Items items={card.items}/> : null}         {/*    si el largo de los items es mayor a 0 los muestro     */}
                <Links links={card.links}/>                 
            </div>
        )
    })
}

function Img({src}) {
    return (
        <div class="info_card_circle">
            <img src={src} alt="" />
        </div>
    )  
}


function Links(params) {
    if (params.links[0].type !== '') {         // reviso si "params.links" existe
        return(
            <ul class="info_links">
                {params.links.map(link => <li> <a href={link.link}> <img src={link.icono} alt={link.type} /> </a> </li>)}
            </ul>
        )
    } 
}


function Items({items}){
    return(
        <div class="info_items">
            {/* <ul class="izquierda"> */}
            <ul>
                {items.map(item => <li> {item} </li>)}
            </ul>
        </div>
    )
}