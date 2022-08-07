// components
import BaseLayout from "./layout"
import LeerMas from "./leerMas"
// styles
import "../styles/home/css/home.css"
// IMGS
import feria from "../styles/home/img/feria.jpeg"
import cohete from "../styles/home/img/cohete-botones.svg"
import title from "../styles/home/img/caeii-title.png"
// json
import json from "../informacion.json"
// Sweet Alert
import Swal from 'sweetalert2'; 

function Home() {

  const handleClickRegister = () => {
    Swal.fire({
      icon: 'warning',
      toast: true,
      position: 'center',
      timer: 1500,
      timerProgressBar: true,
      showConfirmButton: false,
      title: `<h3 style='color:#FFFFFF; font-weight: lighter'>Qué mal... Las inscripciones ya cerraron.</h3>`,
      background: 'rgb(70, 64, 153)', 
      iconColor: '#FFFFFF'
    })
  }

  return (
    <div className="App" id="home">
      <BaseLayout>
        <main >
          <div class="title">
            <img src={title} alt="Logo caeii"></img>
          </div>
          <section id="menu">
            <div class="sistema_solar">
              <div class="sol"></div>
              <div class="fondo"></div>
              <div class="orbits orbit_1">
                <div class="planet_container">
                  <div class="planet"></div>
                </div>
              </div>
              <div class="orbits orbit_2">
                <div class="planet_container">
                  <div class="planet"></div>
                </div>
              </div>
              <div class="orbits orbit_3">
                <div class="planet_container">
                  <div class="planet"></div>
                </div>
              </div>
            </div>
            <ul>
              <li id="uno">
                <div class="linea">
                  <a href="#conferencias_1">Conferencias Magistrales</a>
                  <div class="line_container"><div class="line" /></div>
                </div>
              </li>
              <li id="dos">
                <div class="linea">
                  <a href="#visitas">Visitas técnicas</a>
                  <div class="line_container"><div class="line" /></div>
                </div>
              </li>
              <li id="tres">
                <div class="linea">
                  <a href="#talleres">Talleres</a>
                  <div class="line_container"><div class="line" /></div>
                </div>
              </li>
              <li id="cuatro">
                <div class="linea">
                  <a href="#hackaton">Hackaton</a>
                  <div class="line_container"><div class="line" /></div>
                </div>
              </li>
              <li id="cinco">
                <div class="linea">
                  <a href="#conferencias_2">Conferencias profesionales</a>
                  <div class="line_container"><div class="line" /></div>
                </div>
              </li>
              <li id="seis">
                <div class="linea">
                  <a href="#feria">Feria de empleo</a>
                  <div class="line_container"><div class="line" /></div>
                </div>
              </li>
            </ul>
          </section>



          <section id="registrarse" /* onClick={handleClickRegister} */>
            <h1>¿Estás preparado para el despegue?</h1>
            <div class="button">
              <a href="https://inscripciones.aareii.org.ar/index.php/register" class="hyperspan">
                <div class="circle">
                  <div class="rocket_container">
                    <img src={cohete} alt="cohete caeii"></img>
                  </div>
                  <div class="circle2"></div>
                </div>
                <div class="texto"> REGISTRARSE </div>
              </a>
            </div>
          </section>



          <section id="estaciones">
            <h2> Estaciones </h2>
            <article id="1">
              <h3 class="movile"> {json[0].data[0].info[0].mobile} </h3>
              <h3 class="desktop"> {json[0].data[0].info[0].title} </h3>
              <p> {json[0].data[0].info[0].short} </p>
              <div class="img">
                <div class="imgOrbit">
                  <img src={json[0].data[0].info[0].img} alt="Odisea estelar" />
                </div>
              </div>
            </article>
            <article id="2" class="derecha">
              <h3 class="movile"> {json[0].data[0].info[1].mobile} </h3>
              <h3 class="desktop"> {json[0].data[0].info[1].title} </h3>
              <p> {json[0].data[0].info[1].short} </p>
              <div class="img">
                <div class="imgOrbit">
                  <img src={json[0].data[0].info[1].img} alt="Logística 4.0" />
                </div>
              </div>
            </article>
            <article id="3">
              <h3 class="movile"> {json[0].data[0].info[2].mobile} </h3>
              <h3 class="desktop"> {json[0].data[0].info[2].title} </h3>
              <p> {json[0].data[0].info[2].short} </p>
              <div class="img">
                <div class="imgOrbit">
                  <img src={json[0].data[0].info[2].img} alt="Ingeniería del mañana" />
                </div>
              </div>
            </article>
            <article id="4" class="derecha">
              <h3 class="movile"> {json[0].data[0].info[3].mobile} </h3>
              <h3 class="desktop"> {json[0].data[0].info[3].title} </h3>
              <p> {json[0].data[0].info[3].short} </p>
              <div class="img">
                <div class="imgOrbit">
                  <img src={json[0].data[0].info[3].img} alt="Desarrollo urbano sustentable" />
                </div>
              </div>
            </article>
            <LeerMas type="interno" link="Estaciones" className="estaciones_leermas"/>
          </section>



          <section id="conferencias_1">
            <h2> {json[2].category} </h2>
            <article id="1">
              <h3> {json[2].data[0].info[0].title + " " + json[2].data[0].info[0].disertante} </h3>
              <p> {json[2].data[0].info[1].title} </p>
              <div class="img">
                <div class="imgOrbit">
                  <img src={json[2].data[0].info[0].img} alt="Conferencia 1" />
                  <div class="planet"></div>
                </div>
              </div>
            </article>
             <article id="2" class="derecha">
              <h3> {json[2].data[1].info[0].title} </h3>
              <p> {json[2].data[1].info[1].title}  </p>
              <div class="img">
                <div class="imgOrbit">
                  <img src={json[2].data[1].info[0].img} alt="Conferencia 2" />
                  <div class="planet"></div>
                </div>
              </div>
            </article>
            <article id="3">
              <h3> {json[2].data[2].info[0].title} </h3>
              <p> {json[2].data[2].info[1].title}  </p>
              <div class="img">
                <div class="imgOrbit">
                  <img src={json[2].data[2].info[0].img} alt="Conferencia 3" />
                  <div class="planet"></div>
                </div>
              </div>
            </article> 
            <article id="4" class="derecha">
              <h3> {json[2].data[3].info[0].title} </h3>
              <p> {json[2].data[3].info[1].title}  </p>
              <div class="img">
                <div class="imgOrbit">
                  <img src={json[2].data[3].info[0].img} alt="Conferencia 3" />
                  <div class="planet"></div>
                </div>
              </div>
            </article> 
            <LeerMas type="interno" link="Conferencias magistrales" />
          </section>       
           
          <section id="conferencias_2">
            <h2> Conferencias profesionales </h2>
            <article id="1">
              <div className="conferencias_2_text">
                <h3> {json[3].data[1].info[0].title} </h3>
                <p> {json[3].data[1].info[0].disertante} </p>
              </div>
              <div class="img">
                <div class="imgOrbit">
                    <img src={json[3].data[1].info[0].img} alt="Conferencia 1" />
                  <div class="planet"></div>
                </div>
              </div>
            </article>
            <article id="2" className="flex_derecha">
              <div className="conferencias_2_text">
                <h3> {json[3].data[3].info[0].title} </h3>
                <p> {json[3].data[3].info[0].disertante} </p>
              </div>
              <div class="img">
                <div class="imgOrbit">
                    <img src={json[3].data[3].info[0].img} alt="Conferencia 1" />
                  <div class="planet"></div>
                </div>
              </div>
            </article>
            {/* 
            <article id="3">
              <h3> #conferencias_2 #3 </h3>
              <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque commodo dapibus purus.  </p>
              <div class="img">
                <div class="imgOrbit">
                  <img src={placeholder} alt="Conferencia 3" />
                  <div class="planet"></div>
                </div>
              </div>
            </article> */}
            <LeerMas type="interno" link="Conferencias profesionales" />
          </section>

          <section id="visitas">
            <h2> {json[1].category} </h2>
            <article id="1">
              <h3> {json[1].data[0].info[0].title} </h3>
              <p class="movile"> {json[1].data[0].info[0].short} </p>
              <p class="desktop"> {json[1].data[0].info[0].short} </p> {/* Si ocupa toda la pantalla debe ir la descripción entera */}
              <div class="img">
                <div class="imgOrbit">
                  <img src={json[1].data[0].info[0].img} alt="visitas 1" />
                  <div class="planet"></div>
                </div>
              </div>
            </article>
            <article id="2" class="derecha">
              <h3> {json[1].data[1].info[1].title} </h3>
              <p class="movile"> {json[1].data[1].info[1].short} </p>
              <p class="desktop"> {json[1].data[1].info[1].short} </p> {/* Si ocupa toda la pantalla debe ir la descripción entera */}
              <div class="img">
                <div class="imgOrbit">
                  <img src={json[1].data[1].info[1].img} alt="visitas 2" />
                  <div class="planet"></div>
                </div>
              </div>
            </article>
            {/* <article id="3">
              <h3> {json[1].data[3].info[0].title} </h3>
              <p class="movile"> {json[1].data[3].info[0].short} </p>
              <p class="desktop"> {json[1].data[3].info[0].desciption} </p>
              <div class="img">
                <div class="imgOrbit">
                  <img src={json[1].data[3].info[0].img} alt="visitas 3" />
                  <div class="planet"></div>
                </div>
              </div>
            </article> */}
            <LeerMas type="interno" link="Visitas técnicas" />
          </section>

          <section id="hackaton">
            <h2> Hackaton </h2>
            <article id="1">
            <h3> {json[5].data[0].info[0].title} </h3>
              <p> {json[5].data[0].info[0].short} </p>
              <div class="img">
                <div class="imgOrbit">
                  {/* <img src={hackaton} alt="Hackaton 1" /> */}
                  <img src="/imgs/hackaton.png" alt="Hackaton 1" />
                  <div class="planet"></div>
                </div>
              </div>
            </article>
            <LeerMas type="interno" link="Hackaton" />
          </section>

          <section id="feria">
            <h2> Feria de empleo </h2>
            <article id="1">
              <h3> {json[6].data[0].info[0].title} </h3>
              <p> {json[6].data[0].info[0].short} </p>
              <div class="img">
                <div class="imgOrbit">
                  <img src={feria} alt="feria 1" />
                  <div class="planet"></div>
                </div>
              </div>
            </article>
            <LeerMas type="interno" link="Feria de empleo" />
          </section>
        </main>
      </BaseLayout>
    </div>
  )
}

export default Home;