import React from "react";
import "../styles/perfil/css/fuentes.css";
import "../styles/perfil/css/generales/variables.css";
import "../styles/perfil/css/Perfil.css";
import "../styles/perfil/css/home.css";
import "../styles/perfil/css/generales/generales.css";
import "../styles/perfil/css/generales/desktop.css";
import "../styles/perfil/css/generales/pantallasChicas.css";
import BotonHome from "../styles/perfil/img/home/icono-BotonHome.svg";
import LogoAreii from "../styles/perfil/img/home/logo-aareii-desktop.png";
import Astronauta from "../styles/perfil/img/perfil/astronauta.png";
import QR from "../styles/perfil/img/perfil/qrs/qr.png";
import Taco from "../styles/perfil/img/perfil/taco.png";
import TacoD from "../styles/perfil/img/perfil/taco_dessaturado.png"
import Coffee from "../styles/perfil/img/perfil/coffee.png";
import CoffeeD from "../styles/perfil/img/perfil/coffee_dessaturado.png";
import CaeiiLogo from "../styles/perfil/img/perfil/CAEII LOGO 1.svg";
import BaseLayout from "./layout"

import cohete_2 from "../styles/img/aareii.png";
import {QRCodeSVG} from 'qrcode.react';


export default function Perfil() {

    return (<body>
    <BaseLayout>
    <main>
        <section id="credencial">
            <h2> Tu credencial</h2>
            <div class="top_asistencia">
                <img src={Astronauta} alt="astronauta de caeii" class="astronauta_de_caeii"/>
                <div class="asistencia">
                    <button class="circulo_qr">
                        <QRCodeSVG
                            value={"https://picturesofpeoplescanningqrcodes.tumblr.com/"}
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
                    <h3 id="porcentaje_asistencia"> ASISTENCIA: 98%</h3>
                </div>
            </div>
            <div class="comidas">
                <div class="almuerzos">
                    <h3>Tus almuerzos: </h3>
                    <div class="iconos">
                        <button class="icono" id="taco">
                            <img src={Taco} alt="Taco / qr del primer almuerzo"/>
                        </button>
                        <button class="icono_disabled">
                            <img src={TacoD} alt="Taco / qr del segundo almuerzo"/>
                        </button>
                    </div>
                </div>
                <div class="coffees">
                    <h3> Tus coffees: </h3>
                    <div class="iconos">
                        <button class="icono" id="coffee_1">
                            <img src={Coffee} alt="Taco / qr del coffee"/>
                        </button>
                        <button class="icono" id="coffee_2">
                            <img src={Coffee} alt="Taco / qr del coffee"/>
                        </button>
                        <button class="icono_disabled" id="coffee_3">
                            <img src={CoffeeD} alt="Taco / qr del coffee"/>
                        </button>
                        <button class="icono_disabled" id="coffee_4">
                            <img src={CoffeeD} alt="Taco / qr del coffee"/>
                        </button>
                    </div>
                </div>
                <div id="myModal" class="modal">
                    <div class="modal-content">
                      <div class="modal-header">
                        <span class="close">&times;</span>
                      </div>
                      <div class="modal-body">
                        <img id="qr" src="" alt=""/>
                      </div>
                    </div>
                </div>
            </div>
        </section>
        <section id="cronograma">
            <div class="title_card_perfil title_cronograma">
                <h2> cronograma </h2>
                <label htmlFor="dia" class="title_text">Día: </label>
                <div class="select" id="dia">
                    <select>
                        <option value="Jueves">Jueves</option>
                        <option value="viernes">Viernes</option>
                        <option value="sabado">Sabado</option>
                        <option value="domingo">Domingo</option>
                    </select>
                </div>
                <p class="title_text"> Pilar: </p>
                <p class="title_text" id="pilar"> Odisea Espacial </p>
            </div>
            <table class="content_cronograma">
                <tr class="conLinea" id="L1">
                  <th>HORARIO</th>
                  <th>ACTIVIDAD</th>
                  <th>LUGAR</th>
                </tr>
                {/* <!-- MAÑANA -->  */}

                <tr id="L2">
                    <td class="hora">8:00 - 9:00</td>
                    <td class="actividad"> kk #1 </td>
                    <td class="lugar linea">
                        <a href="">Aula Magna</a>
                        <div class="line_container"/><div class="line"></div>
                    </td>
                </tr>
                <tr id="L3">
                    <td class="hora">9:00 - 10:30</td>
                    <td class="actividad textoLargo"> kk #2 esta es una kk muy especial por que es una kk de varias lineas </td>
                    <td class="lugar linea">
                        <a href="">Aula Magna</a>
                        <div class="line_container"/><div class="line"></div>
                    </td>
                </tr>
                <tr class="conLinea" id="L3">
                    <td class="hora">10:30 - 11:00</td>
                    <td class="actividad"> kk #3 </td>
                    <td class="lugar linea">
                        <a href="">Aula Magna</a>
                        <div class="line_container"/><div class="line"></div>
                    </td>
                </tr>
                <tr class="conLinea resaltado" id="L4">
                    <td class="hora">11:30 - 13:00</td>
                    <td class="actividad"> ALMUERZO </td>
                    <td class="lugar linea">
                        <a href="">Aula Magna</a>
                        <div class="line_container"/><div class="line"></div>
                    </td>
                </tr>

                {/* <!-- TARDE -->  */}

                <tr id="L5">
                    <td class="hora">13:00 - 14:00</td>
                    <td class="actividad"> kk #4 </td>
                    <td class="lugar linea">
                        <a href="">Aula Magna</a>
                        <div class="line_container"/><div class="line"></div>
                    </td>
                </tr>
                <tr id="L6">
                    <td class="hora">14:00 - 15:30</td>
                    <td class="actividad"> kk #5 </td>
                    <td class="lugar linea">
                        <a href="">Aula Magna</a>
                        <div class="line_container"/><div class="line"></div>
                    </td>
                </tr>
                <tr class="conLinea" id="L7">
                    <td class="hora">15:30 - 18:00</td>
                    <td class="actividad"> kk #6 </td>
                    <td class="lugar linea">
                        <a href="">Aula Magna</a>
                        <div class="line_container"/><div class="line"></div>
                    </td>
                </tr>
                <tr class="conLinea resaltado" id="L8">
                    <td class="hora">18:00 - 21:00</td>
                    <td class="actividad"> TIEMPO LIBRE </td>
                    <td class="lugar"></td>
                </tr>

                 {/* <!-- NOCHE --> */}

                 <tr id="L9">
                    <td class="hora">21:00 - 4:00</td>
                    <td class="actividad"> Salida boliche </td>
                    <td class="lugar linea">
                        <a href="">Aula Magna</a>
                        <div class="line_container"/><div class="line"></div>
                    </td>
                </tr>
            </table>
        </section> 
        <section id="mapas">
            <div class="title_card_perfil title_mapas">
                <h2>¿A dónde voy?</h2>
                <label htmlFor="auditorio" class="title_text">Auditorio: </label>
                <div class="select" id="auditorio">
                    <select>
                        <option value="A14">Aula 14</option>
                        <option value="A14">Aula 14</option>
                        <option value="A14">Aula 14</option>
                    </select>
                </div>
                <label htmlFor="otroLugar" class="title_text">Otro lugar: </label>
                <div class="select" id="otroLugar">
                    <select>
                        <option value="NaveCultural">Nave cultural</option>
                        <option value="NaveCultural">Nave cultural</option>
                        <option value="NaveCultural">Nave cultural</option>
                    </select>
                </div>
                <label  htmlFor="EstoyAqui" class="title_text">Estoy aquí: </label>
                <div class="select" id="EstoyAqui">
                    <select>
                        <option value="AMagna">Aula Magna</option>
                        <option value="AMagna">Aula Magna</option>
                        <option value="AMagna">Aula Magna</option>
                    </select>
                </div>
            </div>
            {/* <div class="content_mapas">
                <iframe id="mapasPropios" src="img\PLACE HOLDER cuadrado.png" frameborder="0"></iframe>
                <iframe id="googlemaps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.4246704984653!2d-0.16074438402773236!3d51.52377031732685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761acf33628211%3A0x445d7677a88322e1!2s221B%20Baker%20St%2C%20London%20NW1%206XE%2C%20Reino%20Unido!5e0!3m2!1ses!2sar!4v1652625043434!5m2!1ses!2sar" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div> */}
        </section>
        <section id="logo">
            <img src={CaeiiLogo} alt="logo CAEII"/>
        </section>
    </main>
    </BaseLayout>
    
</body>);

}