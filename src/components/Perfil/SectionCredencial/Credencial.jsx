// React
import {QRCodeSVG} from 'qrcode.react';
// imgs
// import QR from "../../styles/perfil/img/perfil/qrs/qr.png";
import Astronauta from "../../../styles/perfil/img/astronauta.png";
// import Taco from "../../styles/perfil/img/perfil/taco.png";
// import TacoD from "../../styles/perfil/img/perfil/taco_dessaturado.png"
// import Coffee from "../../styles/perfil/img/perfil/coffee.png";
// import CoffeeD from "../../styles/perfil/img/perfil/coffee_dessaturado.png";

export default function Credencial({nombre, asistencia}) {
    let info_qr = nombre    // info para codificar en el qr en caso de usar scaners 
    // let info_qr = "https://www.caeii.com.ar/user/" + json[0].nombre   // info para codificar en el qr en caso de no usar scaners 

    
    return(
        <section id="credencial">
            <h2> {nombre} </h2>
            <div class="top_asistencia">
                <img src={Astronauta} alt="astronauta de caeii" class="astronauta_de_caeii" />
                <div class="asistencia">
                    <button class="circulo_qr">
                        <QRCodeSVG
                            value={info_qr}
                            size={200}
                            bgColor={"#ffffff"}
                            fgColor={"#9400d4"}
                            level={"L"}
                            includeMargin={false}
                            imageSettings={{
                                src: 'http://localhost:3000/favicon.png',
                                x: undefined,
                                y: undefined,
                                height: 60,
                                width: 60,
                                excavate: false,
                            }}
                        />
                    </button>
                    <h3 id="porcentaje_asistencia"> ASISTENCIA: {asistencia}%</h3>
                    <progress id="file" value={asistencia} max="100"></progress>
                </div>
            </div>
            {/* <div class="comidas">
                <div class="almuerzos">
                    <h3>Tus almuerzos: </h3>
                    <div class="iconos">
                        <button class="icono" id="taco">
                            <img src={Taco} alt="Taco / qr del primer almuerzo" />
                        </button>
                        <button class="icono_disabled">
                            <img src={TacoD} alt="Taco / qr del segundo almuerzo" />
                        </button>
                    </div>
                </div>
                <div class="coffees">
                    <h3> Tus coffees: </h3>
                    <div class="iconos">
                        <button class="icono" id="coffee_1">
                            <img src={Coffee} alt="Taco / qr del coffee" />
                        </button>
                        <button class="icono" id="coffee_2">
                            <img src={Coffee} alt="Taco / qr del coffee" />
                        </button>
                        <button class="icono_disabled" id="coffee_3">
                            <img src={CoffeeD} alt="Taco / qr del coffee" />
                        </button>
                        <button class="icono_disabled" id="coffee_4">
                            <img src={CoffeeD} alt="Taco / qr del coffee" />
                        </button>
                    </div>
                </div>
                <div id="myModal" class="modal">
                    <div class="modal-content">
                        <div class="modal-header">
                            <span class="close">&times;</span>
                        </div>
                        <div class="modal-body">
                            <img id="qr" src="" alt="" />
                        </div>
                    </div>
                </div>
            </div> */}
        </section>
    )
}