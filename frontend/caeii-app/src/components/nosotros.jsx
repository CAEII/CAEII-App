import BaseLayout from "./layout";
import cohete from "../styles/home/img/cohete-botones.svg"
// agrego el import del svg del titulo, el css de nosotros y imagenes
import title from "../styles/home/img/caeii-title.svg"
import "../styles/nosotros/css/nosotros.css"
import placeholder from "../styles/nosotros/img/PLACE HOLDER gris.png"
import que_es_caeii from "../styles/nosotros/img/¿Qué es CAEII.jpg"
import que_es_aareii from "../styles/nosotros/img/¿que es AArEII.jpg"
import que_son_los_pilares from "../styles/nosotros/img/QUE SON LOS PILARES.png"
import cuando_donde from "../styles/nosotros/img/cUANDO Y DONDE.jpg"
import como_participar from "../styles/nosotros/img/Como participar.jpg"
import cual_es_su_objetivo from "../styles/nosotros/img/Objetivos.jpeg"

export default function Nosotros() {
  return (
    <BaseLayout>
      <main className="nosotros">
        <div class="title">
          <img src={title}></img>
          <h1 className="h1_title_desktop" > Orbitando hacia el futuro... </h1>
        </div>
        <h1 className="h1_title_mobile"> Orbitando hacia el futuro... </h1>
        <section id="que_es_caeii" class="nosotros_section">
          <div class="info" data-aos="fade-up">
            <h2> ¿Qué es CAEII? </h2>
            <p>
              El Congreso Argentino de Estudiantes
              de Ingeniería Industrial y carreras afines,
              o CAEII, es el evento más importante de AArEII. Tiene
              una duración de cuatro días, donde se disfrutan y
              aprovechan diversas actividades académicas. El
              mismo tiene lugar en el mes de agosto de cada año y
              cuenta con una asistencia de 1500 estudiantes
              aproximadamente.
            </p>
          </div>
          <img src={que_es_caeii} alt="imagen representativa" data-aos="fade-up"/>
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
          <img src={cual_es_su_objetivo} alt="imagen representativa" data-aos="fade-up"/>
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
              <a href="">{" Conocé más >"}</a>
              <div class="line_container"><div class="line"></div></div>
            </div>
          </div>
          <img src={que_es_aareii} alt="imagen representativa" data-aos="fade-up"/>
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
                  <a href="">{" Logística 4.0 >"}</a>
                  <div class="line_container"><div class="line"></div></div>
                </div>
              </div>
              <div class="link">
                <div class="linea">
                  <a href="">{" Odisea Espacial >"}</a>
                  <div class="line_container"><div class="line"></div></div>
                </div>
              </div>
              <div class="link">
                <div class="linea">
                  <a href="">{" Ingeniería del mañana >"}</a>
                  <div class="line_container"><div class="line"></div></div>
                </div>
              </div>
              <div class="link">
                <div class="linea">
                  <a href="">{" Desarrollo urbano sustentable >"}</a>
                  <div class="line_container"><div class="line"></div></div>
                </div>
              </div>
            </div>
          </div>
          <img src={que_son_los_pilares} alt="imagen representativa"  data-aos="fade-up"/>
        </section>
        <section id="cuando_donde" class="nosotros_section">
          <div class="info"  data-aos="fade-up">
            <h2> ¿Cuándo y dónde? </h2>
            <p>
              En la ciudad de Mendoza, desde el 25 hasta el 28 de Agosto. Se desarrollarán varias actividades en diferentes lugares de la ciudad.
            </p>
          </div>
          <img src={cuando_donde} alt="imagen representativa"  data-aos="fade-up"/>
        </section>
        <section id="como_participar" class="nosotros_section reverse">
          <div class="info"  data-aos="fade-up">
            <h2> ¿Cómo participar? </h2>
            <p>
              ¡Inscribite ahora y reservá un lugar en el mejor congreso del año!
            </p>
            <div class="button">
              <a href="" class="hyperspan">  
                <div class="circle">        
                  <div class="rocket_container">
                    <img src={cohete}></img>
                  </div>
                  <div class="circle2"></div>
                </div>
                <div class="texto"> REGISTRARSE </div>
              </a>
            </div>
          </div>
          <img src={como_participar} alt="imagen representativa"  data-aos="fade-up"/>
        </section>
        <section id="saber_mas" class="nosotros_section">
          <div class="info"  data-aos="fade-up">
            <h2> ¿Querés saber más del evento? </h2>
            <p>
              Podés volver a la home y leer todo sobre las actividades que podrás disfrutar durante todo el evento.
            </p>
            <div class="button">
              <a href="" class="hyperspan">  
                <div class="circle">        
                  <div class="rocket_container">
                    <img src={cohete}></img>
                  </div>
                  <div class="circle2"></div>
                </div>
                <div class="texto"> volver al home </div>
              </a>
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
        </section>
      </main>
    </BaseLayout>
  )
}