import BaseLayout from "./layout";
// STYLES
import "../styles/nosotros/css/nosotros.css"
//  IMAGENES
import title from "../styles/home/img/caeii-title.png"
import cohete from "../styles/home/img/cohete-botones.svg"
import que_es_caeii from "../styles/nosotros/img/¿Qué es CAEII.jpg"
import Que_incluye from "../styles/nosotros/img/Que_incluye.png"
import que_es_aareii from "../styles/home/img/logo-aareii-desktop-textogrande.png"
import que_son_los_pilares from "../styles/nosotros/img/QUE SON LOS PILARES.jpg"
import cuando_donde from "../styles/nosotros/img/cUANDO Y DONDE.jpg"
import como_participar from "../styles/nosotros/img/Como participar.jpg"
import cual_es_su_objetivo from "../styles/nosotros/img/Objetivos.jpeg"
//  AOS  (animaciones) 
import AOS from 'aos';
import "aos/dist/aos.css";
import React, { useEffect } from "react";

import { Link } from "react-router-dom";


export default function Nosotros() {
  useEffect(() => {
    AOS.init({
      duration: 1500, // values from 0 to 3000, with step 50ms
      once: true, // whether animation should happen only once - while scrolling down
    });
  }, []);
  return (
    <BaseLayout>
      <main className="nosotros" id="home">
        <div class="title">
          <img src={title} alt="Logo caeii"></img>
          <h1 className="h1_title_desktop" > Orbitando hacia el futuro... </h1>
        </div>
        <h1 className="h1_title_mobile"> Orbitando hacia el futuro... </h1>
        <section id="que_es_caeii" class="nosotros_section reverse">
          <div class="info" data-aos="fade-up">
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
          <img src={que_es_caeii} className="img_representativa" alt="imagen representativa" data-aos="fade-up"/>
        </section>
        <section id="Que_incluye" class="nosotros_section">
          <div class="info" data-aos="fade-up">
            <h2> ¿Qué incluye? </h2>
            <p>
              El evento incluye no solo talleres, visita técnica, charlas, seguro y coffee, sino también cocktail de bienvenida,
              merchandising, cena de gala, sorteos, noches de boliche y mucho más.
              <br/><br/>
              <b>*No incluye gastos no especificados en la imagen.</b>
            </p>
          </div>
          <img src={Que_incluye} className="img_representativa" alt="imagen representativa" data-aos="fade-up"/>
        </section>
        <section id="cual_es_su_objetivo" class="nosotros_section reverse">
          <div class="info" data-aos="fade-up">
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
          <img src={cual_es_su_objetivo} className="img_representativa" alt="imagen representativa" data-aos="fade-up"/>
        </section>
        <section id="que_es_aareii" class="nosotros_section">
          <div class="info" data-aos="fade-up">
            <h2> ¿Qué es AArEII? </h2>
            <p>
              Asociación nacional sin fines de lucro formada e integrada por estudiantes de ingeniería. La
              misma cuenta con presencia en todo el país, en más de
              40 Universidades Activas, las cuales poseen representantes que coordinan cada delegación.
            </p>
            <div class="linea">
              <a href="https://www.aareii.org.ar/">{" Conocé más >"}</a>
              <div class="line_container"><div class="line"></div></div>
            </div>
          </div>
          <img src={que_es_aareii} className="img_representativa" alt="imagen representativa" data-aos="fade-up"/>
        </section>
        <section id="que_son_los_pilares" class="nosotros_section reverse">
          <div class="info"  data-aos="fade-up">
            <h2> ¿Qué son los pilares? </h2>
            <p>
              Son los ejes temáticos que se abordarán en el evento. Todos los CAEII se centran en 4 pilares diferentes a través de charlas, talleres y conferencias, entre otros. Los pilares de este año son:
            </p>
            <div class="links">
              <div class="link">
                <div class="linea">
                  <Link to="/home/#estaciones">{" Logística 4.0 >"}</Link>
                  <div class="line_container"><div class="line"></div></div>
                </div>
              </div>
              <div class="link">
                <div class="linea">
                  <Link to="/home/#estaciones">{" Odisea Espacial >"}</Link>
                  <div class="line_container"><div class="line"></div></div>
                </div>
              </div>
              <div class="link">
                <div class="linea">
                  <Link to="/home/#estaciones">{" Ingeniería del mañana >"}</Link>
                  <div class="line_container"><div class="line"></div></div>
                </div>
              </div>
              <div class="link">
                <div class="linea">
                  <Link to="/home/#estaciones">{" Desarrollo urbano sustentable >"}</Link>
                  <div class="line_container"><div class="line"></div></div>
                </div>
              </div>
            </div>
          </div>
          <img src={que_son_los_pilares} className="img_representativa" alt="imagen representativa"  data-aos="fade-up"/>
        </section>
        <section id="cuando_donde" class="nosotros_section">
          <div class="info"  data-aos="fade-up">
            <h2> ¿Cuándo y dónde? </h2>
            <p>
              En la ciudad de Mendoza, desde el 25 hasta el 28 de agosto. Se desarrollarán varias actividades en diferentes lugares de la ciudad.
            </p>
            <h2> ¿Precio? </h2>
            <p>
              El precio para la primer fecha de inscripción es de $9990. El periodo de inscripción será del 7 al 15 de junio. <strong>Próximamente abrimos el segundo periodo de inscripción.</strong>
            </p>
          </div>
          <img src={cuando_donde} className="img_representativa" alt="imagen representativa"  data-aos="fade-up"/>
        </section>
        <section id="como_participar" class="nosotros_section reverse">
          <div class="info"  data-aos="fade-up">
            <h2> ¿Cómo participar? </h2>
            <p>
              ¡Inscribite ahora y reservá un lugar en el mejor congreso del año!
            </p>
            <div class="button">
              <a href="https://inscripciones.aareii.org.ar/index.php/register" class="hyperspan">  
                <div class="circle">        
                  <div class="rocket_container">
                    <img src={cohete} alt="cohete"></img>
                  </div>
                  <div class="circle2"></div>
                </div>
                <div class="texto"> REGISTRARSE </div>
              </a>
            </div>
          </div>
          <img src={como_participar} className="img_representativa" alt="imagen representativa"  data-aos="fade-up"/>
        </section>
        {/* 
        <section id="saber_mas" class="nosotros_section">
          <div class="info"  data-aos="fade-up">
            <h2> ¿Querés saber más del evento? </h2>
            <p>
              Podés volver a la home y leer todo sobre las actividades que podrás disfrutar durante todo el evento.
            </p>
            <div class="button">
              <Link to="/home" class="hyperspan">  
                <div class="circle">        
                  <div class="rocket_container">
                    <img src={cohete}  alt="cohete"></img>
                  </div>
                  <div class="circle2"></div>
                </div>
                <div class="texto"> volver al home </div>
              </Link>
            </div>
          </div>
          <img src={placeholder} alt="imagen representativa" data-aos="fade-up"/>
        </section>
        <section id="sponsors">
          <h2> Sponsors </h2>
          <div class="imgs">
            <img src="img/home/sponsors/panAmerican.png" alt="Pan American Energy"/>
            <img src="img/home/sponsors/UNCUYO.png" alt="universidad nacional de cuyo"/>
            <img src="img/home/sponsors/UM.png" alt="Universidad de Mendoza"/>
          </div>
        </section> */}
      </main>
    </BaseLayout>
  )
}