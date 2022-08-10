// react
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
//  AOS  (animaciones) 
import AOS from 'aos';
import "aos/dist/aos.css";
// components
import BaseLayout from "./layout";
// STYLES
import "../styles/nosotros/css/nosotros.css"
// IMAGENES
import title from "../styles/home/img/caeii-title.png"
import cohete from "../styles/home/img/cohete-botones.svg"
import que_es_caeii from "../styles/nosotros/img/¿Qué es CAEII.jpg"
import Que_incluye from "../styles/nosotros/img/Que_incluye.png"
import que_es_aareii from "../styles/home/img/logo-aareii-desktop-textogrande.png"
import que_son_los_pilares from "../styles/nosotros/img/QUE SON LOS PILARES.jpg"
import cuando_donde from "../styles/nosotros/img/cUANDO Y DONDE.jpg"
import como_participar from "../styles/nosotros/img/Como participar.jpg"
import cual_es_su_objetivo from "../styles/nosotros/img/Objetivos.jpeg"


export default function Nosotros() {
  useEffect(() => {
    AOS.init({
      duration: 1500, // values from 0 to 3000, with step 50ms
      once: true, // whether animation should happen only once - while scrolling down
    });
  }, []);
  return (
    <div className="App" id="nosotros">
      <BaseLayout>
        <main className="nosotros" id="home">
          <div className="title">
            <img src={title} alt="Logo caeii"></img>
            <h1 className="h1_title_desktop" > Orbitando hacia el futuro... </h1>
          </div>
          <h1 className="h1_title_mobile"> Orbitando hacia el futuro... </h1>
          <section id="que_es_caeii" className="nosotros_section reverse">
            <div className="info" data-aos="fade-up">
              <h2> ¿Qué es CAEII? </h2>
              <p>
                El Congreso Argentino de Estudiantes
                de Ingeniería Industrial y carreras afines
                (CAEII) es el evento más importante de AArEII. Tiene
                una duración de cuatro días, donde se disfrutan y
                aprovechan diversas actividades académicas. El
                mismo tiene lugar en el mes de agosto de cada año y
                cuenta con una asistencia de 1500 estudiantes
                aproximadamente.
              </p>
            </div>
            <div className="nosotros_img_conteiner" data-aos="fade-up">
              <img src={que_es_caeii} className="img_representativa" alt="imagen representativa" />
            </div>
          </section>
          <section id="Que_incluye" className="nosotros_section">
            <div className="info" data-aos="fade-up">
              <h2> ¿Qué incluye? </h2>
              <p>
                El evento incluye no solo talleres, visita técnica, charlas, seguro y coffee, sino también cocktail de bienvenida,
                merchandising, cena de gala, sorteos, noches de boliche y mucho más.
                <br /><br />
                <b>*No incluye gastos no especificados en la imagen.</b>
              </p>
            </div>
            <div className="nosotros_img_conteiner" data-aos="fade-up">
              <img src={Que_incluye} className="img_representativa" alt="imagen representativa" />
            </div>

          </section>
          <section id="cual_es_su_objetivo" className="nosotros_section reverse">
            <div className="info" data-aos="fade-up">
              <h2> ¿Cuál es su objetivo? </h2>
              <p>
                En el CAEII se busca promover el crecimiento
                y la formación integral del estudiante, ofreciéndole herramientas para que, en un futuro,
                pueda desenvolverse de la mejor manera al
                afrontar situaciones
                reales del mundo laboral. Entre las
                principales actividades
                que se realizan, se
                pueden destacar conferencias, talleres
                y visitas técnicas,
                entre otras.
              </p>
            </div>
            <div className="nosotros_img_conteiner" data-aos="fade-up">
              <img src={cual_es_su_objetivo} className="img_representativa" alt="imagen representativa" />
            </div>

          </section>

          <section id="que_es_aareii" className="nosotros_section">
            <div className="info" data-aos="fade-up">
              <h2> ¿Qué es AArEII? </h2>
              <p>
                Asociación nacional sin fines de lucro formada e integrada por estudiantes de ingeniería. La
                misma cuenta con presencia en todo el país, en más de
                40 Universidades Activas, las cuales poseen representantes que coordinan cada delegación.
              </p>
              <div className="linea">
                <a href="https://www.aareii.org.ar/">{" Conocé más >"}</a>
                <div className="line_container"><div className="line"></div></div>
              </div>
            </div>
            <div className="nosotros_img_conteiner" data-aos="fade-up">
              <img src={que_es_aareii} className="img_representativa que_es_aareii" alt="imagen representativa" />
            </div>
          </section>

          <section id="que_son_los_pilares" className="nosotros_section reverse">
            <div className="info" data-aos="fade-up">
              <h2> ¿Qué son los pilares? </h2>
              <p>
                Son los ejes temáticos que se abordarán en el evento. Todos los CAEII se centran en 4 pilares diferentes a través de charlas, talleres y conferencias, entre otros. Los pilares de este año son:
              </p>
              <div className="links">
                <div className="link">
                  <div className="linea">
                    <Link to="/info/Estaciones">{" Logística 4.0 >"}</Link>
                    <div className="line_container"><div className="line"></div></div>
                  </div>
                </div>
                <div className="link">
                  <div className="linea">
                    <Link to="/info/Estaciones">{" Odisea Espacial >"}</Link>
                    <div className="line_container"><div className="line"></div></div>
                  </div>
                </div>
                <div className="link">
                  <div className="linea">
                    <Link to="/info/Estaciones">{" Ingeniería del mañana >"}</Link>
                    <div className="line_container"><div className="line"></div></div>
                  </div>
                </div>

                <div className="link">
                  <div className="linea">
                    <Link to="/info/Estaciones">{" Desarrollo sostenible: Smart City >"}</Link>
                    <div className="line_container"><div className="line"></div></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="nosotros_img_conteiner" data-aos="fade-up">
              <img src={que_son_los_pilares} className="img_representativa" alt="imagen representativa" />
            </div>

          </section>
          <section id="cuando_donde" className="nosotros_section">
            <div className="info" data-aos="fade-up">
              <h2> ¿Cuándo y dónde? </h2>
              <p>
                En la ciudad de Mendoza, desde el 25 hasta el 28 de agosto. Todas las charlas y talleres se desarrollarán en el Centro de congresos y exposiciones Emilio Civit, pero también habrá varias actividades en diferentes lugares de la capital.
              </p>
              <br/> 
              <p>
                <strong>¡Ingresá a tu perfil y revisá el mapa!</strong>
              </p>
              {/* <h2> ¿Precio? </h2>
              <p>
                El precio para la tercer fecha de inscripción es de $12.990. El segundo periodo de inscripción será del 29 julio a las 17:00 hs al 03 agosto a las 20:00 hs.
                <br /> <strong> ¡Últimos cupos disponibles! </strong>
              </p>
            </div>
            <div className="nosotros_img_conteiner" data-aos="fade-up">
              <img src={cuando_donde} className="img_representativa" alt="imagen representativa" />
            </div>

          </section>
          <section id="como_participar" className="nosotros_section reverse">
            <div className="info" data-aos="fade-up">
              <h2> ¿Cómo participar? </h2>
              {/* <p>
              <strong>Las inscripciones ya cerraron.</strong>
            </p>
            
              <br />
              <p>
                <strong>Si aún no tenés tu entrada, ¿qué estás esperando?</strong>
              </p>
*/}
              <div className="button despegue">
                <p>
                  <i>Próximamente</i>
                </p>
                <div className="circle">
                  <div class="rocket_container">
                    <img src={cohete} alt="cohete"></img>
                  </div>
                  <div className="circle2"></div>
                </div>
              </div>

              {/* <div className="button">
                <a href="https://inscripciones.aareii.org.ar/index.php/register" className="register_us">
                  <p>
                    Registrate
                  </p>
                  <div className="circle">
                    <div className="rocket_container">
                      <img src={cohete} alt="cohete"></img>
                    </div>
                    <div className="circle2"></div>
                  </div>
                </a>
              </div> */}
            </div>
            <div className="nosotros_img_conteiner" data-aos="fade-up">
              <img src={como_participar} className="img_representativa" alt="imagen representativa" />
            </div>

          </section>
          {/* 
        <section id="saber_mas" className="nosotros_section">
          <div className="info"  data-aos="fade-up">
            <h2> ¿Querés saber más del evento? </h2>
            <p>
              Podés volver a la home y leer todo sobre las actividades que podrás disfrutar durante todo el evento.
            </p>
            <div className="button">
              <Link to="/home" className="hyperspan">  
                <div className="circle">        
                  <div className="rocket_container">
                    <img src={cohete}  alt="cohete"></img>
                  </div>
                  <div className="texto"> volver al home </div>
                </Link>
              </div>
            </div>
            <img src={placeholder} alt="imagen representativa" data-aos="fade-up"/>
          </section>
          <section id="sponsors">
            <h2> Sponsors </h2>
            <div className="imgs">
              <img src="img/home/sponsors/panAmerican.png" alt="Pan American Energy"/>
              <img src="img/home/sponsors/UNCUYO.png" alt="universidad nacional de cuyo"/>
              <img src="img/home/sponsors/UM.png" alt="Universidad de Mendoza"/>
            </div>
          </section> */}
        </main>
      </BaseLayout>
    </div>
  )
}