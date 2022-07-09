// react
import { useEffect } from "react";
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

        var columns = 2                 // inicializo la variable "columns" con valor 2
        if (jsonData.length < 2) {      // reviso si la cantidad de rubros es menor que 2
            columns = 1                 // si lo es le doy el valor 1 a la variable "columns"
        }

        const breakpoints = [                       // breackpoints para el "masonry layout"  (cantidad de columnas por resolucion)
            { size: 640, columns: 1 },
            { size: 1024, columns: columns },
            { size: 1280, columns: columns },
        ];
            
        return (        
            <BaseLayout>
                <main className="info_pag" id="home">
                    <div class="title">
                        <img src={title} alt="Logo caeii"></img>
                    </div>
                   <Plock  breakpoints={breakpoints} debounce={0} gap="5vw" className="an-happy-class">       {/*componente del masonry layout, PARAMETROS: breackpoints=cunatas columnas hay segun la resolucion, debounce=tiempo en ms para actualizar, gao=espacio entre columnas */}

                        { jsonData.map((rubro) => {                      // recorros los rubros de la categoria (si los hay) y creo una section por cada uno
                            let id = "info_general_" + rubro.title       // inicialiso la variable id con "info_general_" y el titulo del rubro
                            return (
                                <section id={id}> 
                                    <h2> {rubro.title} </h2>  
                                    <div className="cards_container">
                                        <InfoBody params={rubro.info}/> 
                                    </div>               
                                </section> 
                            )
                        })}

                    </Plock>     
                </main>
            </BaseLayout>
        )
    } else {
        console.error('El parametro "category" de la url de ser: "Estaciones", "Visitas técnicas", "Conferencias magistrales", "Conferencias profesionales", "Talleres", "Hackaton" o "Feria de empleo"');
    }
}



function InfoBody(params) {
    useEffect(() => {
        AOS.init({
          duration: 1500, // values from 0 to 3000, with step 50ms
          once: true, // whether animation should happen only once - while scrolling down
        });
      }, []);


    return(
        params.params.map(info => {         // recorro la info del json y por cada item en la lista devuelvo un div class="info_card"
            return (
                // <div class="info_card"  data-aos="zoom-in-up">
                <div class="info_card">
                    <div class="info_card_text">
                        
                        <h3> {info.title} </h3>
                        <div class="info_card_circle">
                            <img src={info.img} alt="" />
                        </div>
                        <p> 
                            {info.desciption} 
                            {/* {info.desciption.replace(";", <br/>)   // intento de agregar saltos de linea } */}  
                        </p>
                    </div>
                    <Links links={info.links}/>                 
                </div>
            )
        })
    )
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