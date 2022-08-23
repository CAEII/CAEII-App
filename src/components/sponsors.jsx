// inports de react
import { useState, useEffect } from "react";
// styles
import "../styles/sponsors/sponsors.css"
// imagenes (PLACE HOLDRES)
import PanAmerican from "../styles/sponsors/img/panAmerican.png"
import UM from "../styles/sponsors/img/UM.png"
import UNCUYO from "../styles/sponsors/img/UNCUYO.png"
import bottino1 from "../styles/sponsors/img/bottino.png"
import bottino2 from "../styles/sponsors/img/ebottino.png"
import pizarras from "../styles/sponsors/img/pizarras"


import Accenture from "../styles/sponsors/img/accenture.png"
import GrupoLTN from "../styles/sponsors/img/grupo_ltn.png"
import PAE from "../styles/sponsors/img/panAmerican.png"
import NeuralSoft from "../styles/sponsors/img/neuralsoft.png"
import Raizen from "../styles/sponsors/img/raizen.png"
import Guaymallen from "../styles/sponsors/img/guaymallen.png"
import Techint from "../styles/sponsors/img/techint.png"
import Coope from "../styles/sponsors/img/coope.png"
import Invap from "../styles/sponsors/img/invap.png"
import GrupoPeñaflor from "../styles/sponsors/img/Grupo-Peñaflor.png"

// componenete sponsors (
//                          <Sponsors type="exclusive"/>
//                          <Sponsors type="premium"/>
//                          <Sponsors type="gold"/>
//                      )
export default function Sponsors(props) {
    return(
        // uso props.type para completar el id, luego para completar el h2 y eleguir el tipo de carrucel
        <section id={"Sponsors_" + props.type}>
            <h2> Sponsors {props.type} </h2>
            <SponsorsBody type={props.type}/>
        </section>
    )
}

// cuerpo de sponsors, si es gold muestra las imagenes si es de otro tipo muestra la seccion de los radio buttons del carrucel
function SponsorsBody(props) {
    const [cuenta, setcuenta] = useState(0)                 // defino "cuenta" como use state para contar de 0 a 6
    const [cuentaStop, setcuentaStop] = useState(false)     // defino "cuentaStop" para guardar una variable que indique si ejecuta el loop de la cuenta

    const [radio1, setradio1] = useState(false)     // estado de radio button 1
    const [radio2, setradio2] = useState(false)     // estado de radio button 2
    const [radio3, setradio3] = useState(false)     // estado de radio button 3
    const [radio4, setradio4] = useState(false)     // estado de radio button 4
    const [radio5, setradio5] = useState(false)     // estado de radio button 5
    const [radio6, setradio6] = useState(false)     // estado de radio button 6

    useEffect(() => {

        if (cuentaStop === false) {     // si el contador no esta parado, ejecuto lo siguiente:
            setTimeout(() => {
                          // pongo un timeout de 5 segundos
                setcuenta(cuenta + 1)   // aumente la cuenta en 1
                if (props.type === "premium") {
                    if (cuenta === 1) {     // reviso si la cuenta a alcanzado el valor 6
                        setcuenta(0)        // regreso la cuenta a 0
                    }
                } else {
                    if (cuenta === 5) {     // reviso si la cuenta a alcanzado el valor 6
                        setcuenta(0)        // regreso la cuenta a 0
                    }
                }
                
            }, 5000);
            if (cuenta === 0) {     // si la cuenta esta en 0:
                setradio1(true)     // pongo el estado del radio button 1 en true (esto seria igual a checked=true en el html)
            } else {
                setradio1(false)    // si la cuenta esta en cualquier otro valor pongo el estado de radio button 1 en false (esto seria igual a checked=false en el html)
            }
            if (cuenta === 1) {
                setradio2(true)
            } else {
                setradio2(false)
            }
            if (cuenta === 2) {
                setradio3(true)
            } else {
                setradio3(false)
            }
            if (cuenta === 3) {
                setradio4(true)
            } else {
                setradio4(false)
            }
            if (cuenta === 4) {
                setradio5(true)
            } else {
                setradio5(false)
            } 
            if (cuenta === 5) {
                setradio6(true)
            } else {
                setradio6(false)
            }  
        } else {                        // si la cuenta esta detenida (cuentaStop === true)
            setTimeout(() => {          // pongo un timeout de 10 segundos
                setcuentaStop(false)    // cambio el estado de "cuentaStop" a false para re iniciar el contador
            }, 10000);
        }
    },[cuenta, cuentaStop])

    if (props.type === "gold"){
        // si el Props.type es igual a "gold" no paso ningun carrusel si no el img_container
        return (
            <div className="img_container">
                <img src={pizarras} alt="Pizarras Blancas"></img>
                <img src={bottino1} alt="Bottino HNOS S.A."></img>
                <img src={bottino2} alt="Electromecánica Bottino HNOS S.A."></img>
            </div>
        )
    } else if (props.type === "exclusive") {
        // si el Props.type es igual a "premium" o "exclusive" regreso el sponsors_card_body correspondiente
        return(
            <form action="">
            <div className="Sponsors_card_body">
                <input type="radio" name="position" id="exclusive_1" checked={radio1} onClick={()=>{    // al hacer click en un radio button:
                    setcuentaStop(true);       // detengo el contador
                    setradio1(true);           // seteo el radio buton 1 en true    (checked=true en el html)
                    setradio2(false);          // seteo el radio buton 2 en false   (checked=false en el html)
                    setradio3(false);          // seteo el radio buton 3 en false   (checked=false en el html)
                    setradio4(false);          // seteo el radio buton 4 en false   (checked=false en el html)
                    setradio5(false);          // seteo el radio buton 5 en false   (checked=false en el html)
                    setradio6(false);          // seteo el radio buton 6 en false   (checked=false en el html)
                    }}
                />
                <span class="checkmark"></span>
                <input type="radio" name="position" id="exclusive_2" checked={radio2} onClick={()=>{setcuentaStop(true);setradio1(false);setradio2(true);setradio3(false);setradio4(false);setradio5(false);setradio6(false)}}/>
                <span class="checkmark"></span>
                <input type="radio" name="position" id="exclusive_3" checked={radio3} onClick={()=>{setcuentaStop(true);setradio1(false);setradio2(false);setradio3(true);setradio4(false);setradio5(false);setradio6(false)}}/>
                <span class="checkmark"></span>
                <input type="radio" name="position" id="exclusive_4" checked={radio4} onClick={()=>{setcuentaStop(true);setradio1(false);setradio2(false);setradio3(false);setradio4(true);setradio5(false);setradio6(false)}}/>
                <span class="checkmark"></span>
                <input type="radio" name="position" id="exclusive_5" checked={radio5} onClick={()=>{setcuentaStop(true);setradio1(false);setradio2(false);setradio3(false);setradio4(false);setradio5(true);setradio6(false)}}/>
                <span class="checkmark"></span>
                <input type="radio" name="position" id="exclusive_6" checked={radio6} onClick={()=>{setcuentaStop(true);setradio1(false);setradio2(false);setradio3(false);setradio4(false);setradio5(false);setradio6(true)}}/>
                <span class="checkmark"></span>

                <Carrucel type={props.type} />
            </div>
        </form>
        )
    } else if (props.type === "premium") {
        // si el Props.type es igual a "premium" o "exclusive" regreso el sponsors_card_body correspondiente
        return(
            <form action="">
            <div class="Sponsors_card_body dots">
                <input type="radio" name="position" id="exclusive_1" checked={radio1} onClick={()=>{    // al hacer click en un radio button:
                    setcuentaStop(true);       // detengo el contador
                    setradio1(true);           // seteo el radio buton 1 en true    (checked=true en el html)
                    setradio2(false);          // seteo el radio buton 2 en false   (checked=false en el html)
                    /* setradio3(false);          // seteo el radio buton 3 en false   (checked=false en el html)
                    setradio4(false);  */         // seteo el radio buton 4 en false   (checked=false en el html)
                    /* setradio5(false); */          // seteo el radio buton 5 en false   (checked=false en el html)
                    }}
                />
                <span class="checkmark"></span>
                <input type="radio" name="position" id="exclusive_2" checked={radio2} onClick={()=>{setcuentaStop(true);setradio1(false);setradio2(true);/* setradio3(false);setradio4(false);setradio5(false) */}}/>
                <span class="checkmark"></span>
                <input type="radio" name="position" id="exclusive_3" checked={radio3} onClick={()=>{setcuentaStop(true);setradio1(false);setradio2(false);setradio3(true);setradio4(false);setradio5(false)}}/>
                <span class="checkmark"></span>
                <input type="radio" name="position" id="exclusive_4" checked={radio4} onClick={()=>{setcuentaStop(true);setradio1(false);setradio2(false);setradio3(false);setradio4(true);setradio5(false)}}/>
                <span className="checkmark"></span>
                <input type="radio" name="position" id="exclusive_5" checked={radio5} onClick={()=>{setcuentaStop(true);setradio1(false);setradio2(false);setradio3(false);setradio4(false);setradio5(true)}}/>
                <span className="checkmark"></span>

                <Carrucel type={props.type} />
            </div>
        </form>
        )
    } else {
        console.error('sponsors requiere una propiedad "type" que deve ser igual a: "exclusive", "premium" o "gold"');      // si no hay una propiedad type o esta no es igual a ninguno de los postibles tipos, muestro un error por consola
    }
}

// parte del carrucel de sponsors, segun el tipo de sponsor muestra una o dos miagenes por item de carrucel
function Carrucel(props) {
    if (props.type === "premium"){
        // si el type es premium envio dos imagesnes por item
        return (
            <div id="carousel">
                <div class="item" >
                    <img src={Techint} alt="Techint" className="premiumSize"></img>
                    <img src={GrupoPeñaflor} alt="GrupoPeñaflor" className="premiumSize"></img>
                </div>
                <div class="item" >
                    <img src={Invap} alt="Invap" className="premiumSize"></img>
                    <img src={Coope} alt="Coope" className="premiumSize"></img>
                </div>
            </div>
        )
    }
    if (props.type === "exclusive"){
        // si el type es premium envio una imagesnes por item
        return(
            <div id="carousel">
                <div class="item" id="item_1">
                    <img src={Accenture} alt="Accenture"></img>
                </div>
                <div class="item" id="item_1">
                    <img src={GrupoLTN} alt="Grupo LTE"></img>
                </div>
                <div class="item" id="item_1">
                    <img src={PAE} alt="Panamerican Energy"></img>
                </div>
                <div class="item" id="item_1">
                    <img src={NeuralSoft} alt="NeuralSoft"></img>
                </div>
                <div class="item" id="item_1">
                    <img src={Raizen} alt="Raizen"></img>
                </div>
                <div class="item" id="item_1">
                    <img src={Guaymallen} alt="Guaymallen"></img>
                </div>
            </div>
        )   
    }
}