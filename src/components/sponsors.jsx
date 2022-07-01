// styles
import "../styles/sponsors/sponsors.css"
// imagenes (PLACE HOLDRES)
import PanAmerican from "../styles/sponsors/img/panAmerican.png"
import UM from "../styles/sponsors/img/UM.png"
import UNCUYO from "../styles/sponsors/img/UNCUYO.png"


export default function Sponsors(props) {
    return(
        // uso ptop.type para completar el id, luego para completar el h2 y eleguir el tipo de carrucel
        <section id={"Sponsors_" + props.type}>
            <h2> Sponsors {props.type} </h2>
            <SponsorsBody type={props.type}/>
        </section>
    )
}


function SponsorsBody(props) {
    if (props.type === "gold"){
        // si el Props.type es igual a "gold" no paso ningun carrusel si no el img_container
        return (
            <div class="img_container">
                <img src={PanAmerican} alt="Pan American Energy"></img>
                <img src={UNCUYO} alt="universidad nacional de cuyo"></img>
                <img src={UM} alt="Universidad de Mendoza"></img>

                <img src={PanAmerican} alt="Pan American Energy"></img>
                <img src={UNCUYO} alt="universidad nacional de cuyo"></img>
                <img src={UM} alt="Universidad de Mendoza"></img>

                <img src={PanAmerican} alt="Pan American Energy"></img>
                <img src={UNCUYO} alt="universidad nacional de cuyo"></img>
                <img src={UM} alt="Universidad de Mendoza"></img>
            </div>
        )
    } else if (props.type === "premium" || props.type === "exclusive") {
        // si el Props.type es igual a "premium" o "exclusive" regreso el sponsors_card_body correspondiente
        return(
            <form action="">
            <div class="Sponsors_card_body">
                <input type="radio" name="position" id="exclusive_1" />
                <span class="checkmark"></span>
                <input type="radio" name="position" id="exclusive_2" />
                <span class="checkmark"></span>
                <input type="radio" name="position" id="exclusive_3" />
                <span class="checkmark"></span>
                <input type="radio" name="position" id="exclusive_4" />
                <span class="checkmark"></span>
                <input type="radio" name="position" id="exclusive_5" />
                <span class="checkmark"></span>

                <Carrucel type={props.type} />
            </div>
        </form>
        )
    } else {
        console.error('el type de sponsors de ser: gold o premium o exlusive');
    }
}


function Carrucel(props) {
    if (props.type === "premium"){
        // si el type es premium envio dos imagesnes por item
        return (
            <div id="carousel">
                <div class="item" >
                    <img src={PanAmerican} alt="Pan American Energy"></img>
                    <img src={UNCUYO} alt="universidad nacional de cuyo"></img>
                </div>
                <div class="item" >
                    <img src={PanAmerican} alt="Pan American Energy"></img>
                    <img src={UNCUYO} alt="universidad nacional de cuyo"></img>
                </div>
                <div class="item">
                    <img src={PanAmerican} alt="Pan American Energy"></img>
                    <img src={UNCUYO} alt="universidad nacional de cuyo"></img>
                </div>
                <div class="item">
                    <img src={PanAmerican} alt="Pan American Energy"></img>
                    <img src={UNCUYO} alt="universidad nacional de cuyo"></img>
                </div>
                <div class="item">
                    <img src={PanAmerican} alt="Pan American Energy"></img>
                    <img src={UNCUYO} alt="universidad nacional de cuyo"></img>
                </div>
            </div>
        )
    }
    if (props.type === "exclusive"){
        // si el type es premium envio una imagesnes por item
        return(
            <div id="carousel">
                <div class="item" id="item_1">
                    <img src={PanAmerican} alt="Pan American Energy"></img>
                </div>
                <div class="item" id="item_2">
                    <img src={UNCUYO} alt="universidad nacional de cuyo"></img>
                </div>
                <div class="item" id="item_3">
                    <img src={UM} alt="Universidad de Mendoza"></img>
                </div>
                <div class="item" id="item_4">
                    <img src={PanAmerican} alt="Pan American Energy"></img>
                </div>
                <div class="item" id="item_5">
                    <img src={UNCUYO} alt="universidad nacional de cuyo"></img>
                </div>
            </div>
        )   
    }
}

