// react
import { useEffect } from "react";
// AOS  (animaciones)
import AOS from 'aos';
import "aos/dist/aos.css";


export default function InfoBody({rubro, jsonData}) {
    useEffect(() => {
        AOS.init({
          duration: 1500, // values from 0 to 3000, with step 50ms
          once: true, // whether animation should happen only once - while scrolling down
        });
    }, []);

    var rubro_interno = rubro                // inicializo la variable rubro con el valor pasado por parametros
    if (rubro === "default") {               // si el valor pasado por parametros para el rubro es igual a "default" le doy a la variable el titulo del primer rubro en la respectiva categoria del json
        rubro_interno = jsonData[0].title
        
        setTimeout(() => {          // pongo un timeout de 100 milisegundos
            document.getElementById(jsonData[0].title).checked = true;
        }, 100);
    }

    for (let i = 0; i < jsonData.length; i++) {              // recorro el json 
        if (jsonData[i].title === rubro_interno) {           // busco un rubro que coinsida con el de los parametros
            var cards = jsonData[i].info                     // si lo encuentro guardo la data de ese rubro del json en la variable cards
            break                                            // al encontrar la categoria rompo el bucle
        } else {
            continue
        }  
    }

    return cards.map((card, cardIndex) => {         // recorro la info del json y por cada item en la lista devuelvo un div class="info_card"
        return (
            // <div class="info_card"  data-aos="zoom-in-up">
            <div className="info_card" id={`info_card_n${cardIndex}`} key={cardIndex}>
                <div className="info_card_title"> <h3> {card.title} </h3> </div>
                <div className="info_card_text">    
                    
                    {card.img !== "" ? <Imgs src={card.img}/> : null}        {/*  si la src de la imagen no esta vacia muestro la imagen     */}
                    <p> 
                        {card.disertante !== "" ? card.disertante : null}
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


function Imgs({src}) {
    return (
        <div className="info_card_circle">
            <img src={src} alt="" />
        </div>
    )  
}
function Links({links}) {
    if (links[0].type !== '') {         // reviso si "params.links" existe
        return(
            <ul className="info_links">
                {links.map((link, linkIndex) => <li key={linkIndex}> <a href={link.link} target="_blank" rel="noreferrer"> <img src={link.icono} alt={link.type} /> </a> </li>)}
            </ul>
        )
    } 
}
function Items({items}){
    return(
        <div className="info_items">
            {/* <ul class="izquierda"> */}
            <ul>
                {items.map((item, itemIndex) => <li key={itemIndex}> {item} </li>)}
            </ul>
        </div>
    )
}