// inports de react
import { useState, useEffect } from "react";
// styles
import "../styles/sponsors/sponsors.css"
// imagenes (PLACE HOLDRES)
import PanAmerican from "../styles/sponsors/img/panAmerican.png"
import UM from "../styles/sponsors/img/UM.png"
import UNCUYO from "../styles/sponsors/img/UNCUYO.png"

// componenete sponsors (
//                          <Sponsors type="exclusive"/>
//                          <Sponsors type="premium"/>
//                          <Sponsors type="gold"/>
//                      )
export default function Sponsors(props) {
    return(
        // uso ptop.type para completar el id, luego para completar el h2 y eleguir el tipo de carrucel
        <section id={"Sponsors_" + props.type}>
            <h2> Sponsors {props.type} </h2>
            <SponsorsBody type={props.type}/>
        </section>
    )
}

// cuerpo de sponsors, si es gold muestra las imagenes si es de otro tipo muestra la seccion de los radio buttons del carrucel
function SponsorsBody(props) {
    const [cuenta, setcuenta] = useState(0)                 // defino "cuenta" como use state para contar de 0 a 4
    const [cuentaStop, setcuentaStop] = useState(false)     // defino "cuentaStop" para guardar una variable que indique si ejecuta el loop de la cuenta

    const [radio1, setradio1] = useState(false)     // estado de radio button 1
    const [radio2, setradio2] = useState(false)     // estado de radio button 2
    const [radio3, setradio3] = useState(false)     // estado de radio button 3
    const [radio4, setradio4] = useState(false)     // estado de radio button 4
    const [radio5, setradio5] = useState(false)     // estado de radio button 5

    useEffect(() => {   
        if (cuentaStop === false) {     // si el contador no esta parado, ejecuto lo siguiente:
            setTimeout(() => {          // pongo un timeout de 5 segundos
                setcuenta(cuenta + 1)   // aumente la cuenta en 1
                if (cuenta === 4) {     // reviso si la cuenta a alcanzado el valor 4
                    setcuenta(0)        // regreso la cuenta a 0
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
        } else {                        // si la cuenta esta detenida (cuentaStop === true)
            setTimeout(() => {          // pongo un timeout de 10 segundos
                setcuentaStop(false)    // cambio el estado de "cuentaStop" a false para re iniciar el contador
            }, 10000);
        }
    },[cuenta, cuentaStop])

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
                <input type="radio" name="position" id="exclusive_1" checked={radio1} onClick={()=>{    // al hacer click en un radio button:
                    setcuentaStop(true);       // detengo el contador
                    setradio1(true);           // seteo el radio buton 1 en true    (checked=true en el html)
                    setradio2(false);          // seteo el radio buton 2 en false   (checked=false en el html)
                    setradio3(false);          // seteo el radio buton 3 en false   (checked=false en el html)
                    setradio4(false);          // seteo el radio buton 4 en false   (checked=false en el html)
                    setradio5(false);          // seteo el radio buton 5 en false   (checked=false en el html)
                    }}
                />
                <span class="checkmark"></span>
                <input type="radio" name="position" id="exclusive_2" checked={radio2} onClick={()=>{setcuentaStop(true);setradio1(false);setradio2(true);setradio3(false);setradio4(false);setradio5(false)}}/>
                <span class="checkmark"></span>
                <input type="radio" name="position" id="exclusive_3" checked={radio3} onClick={()=>{setcuentaStop(true);setradio1(false);setradio2(false);setradio3(true);setradio4(false);setradio5(false)}}/>
                <span class="checkmark"></span>
                <input type="radio" name="position" id="exclusive_4" checked={radio4} onClick={()=>{setcuentaStop(true);setradio1(false);setradio2(false);setradio3(false);setradio4(true);setradio5(false)}}/>
                <span class="checkmark"></span>
                <input type="radio" name="position" id="exclusive_5" checked={radio5} onClick={()=>{setcuentaStop(true);setradio1(false);setradio2(false);setradio3(false);setradio4(false);setradio5(true)}}/>
                <span class="checkmark"></span>

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

