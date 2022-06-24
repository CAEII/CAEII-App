import React from "react";
// import "../styles/perfil/css/fuentes.css";
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
                        <img src={QR} alt="'link del QR'"/>
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
        </section>
        <section id="logo">
            <img src={CaeiiLogo} alt="logo CAEII"/>
        </section>
    </main>
    </BaseLayout>
    
</body>);

}