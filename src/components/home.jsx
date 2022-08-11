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
          <div className="title">
            <img src={title} alt="Logo caeii"></img>
          </div>
          <section id="menu">
            <div className="sistema_solar">
              <div className="sol"></div>
              <div className="fondo"></div>
              <div className="orbits orbit_1">
                <div className="planet_container">
                  <div className="planet"></div>
                </div>
              </div>
              <div className="orbits orbit_2">
                <div className="planet_container">
                  <div className="planet"></div>
                </div>
              </div>
              <div className="orbits orbit_3">
                <div className="planet_container">
                  <div className="planet"></div>
                </div>
              </div>
            </div>
            <ul>
              <li id="uno">
                <div className="linea">
                  <a href="#conferencias_1">Conferencias Magistrales</a>
                  <div className="line_container"><div className="line" /></div>
                </div>
              </li>
              <li id="dos">
                <div className="linea">
                  <a href="#visitas">Visitas técnicas</a>
                  <div className="line_container"><div className="line" /></div>
                </div>
              </li>
              {/* <li id="tres">
                <div className="linea">
                  <a href="#talleres">Talleres</a>
                  <div className="line_container"><div className="line" /></div>
                </div>
              </li> */}
              <li id="tres">
                <div className="linea">
                  <a href="#hackaton">Hackaton</a>
                  <div className="line_container"><div className="line" /></div>
                </div>
              </li>
              <li id="cuatro">
                <div className="linea">
                  <a href="#feria">Feria de empleo</a>
                  <div className="line_container"><div className="line" /></div>
                </div>
              </li>
              <li id="cinco">
                <div className="linea">
                  <a href="#conferencias_2">Conferencias profesionales</a>
                  <div className="line_container"><div className="line" /></div>
                </div>
              </li>
              
            </ul>
          </section>



          <section id="registrarse" /* onClick={handleClickRegister} */>
            <h1>¿Estás preparado para el despegue?</h1>
            <div className="button">
              <a href="https://inscripciones.aareii.org.ar/index.php/register" class="hyperspan">
                <div className="circle">
                  <div className="rocket_container">
                    <img src={cohete} alt="cohete caeii"></img>
                  </div>
                  <div className="circle2"></div>
                </div>
                <div className="texto"> REGISTRARSE </div>
              </a>
            </div>
          </section>



          <section id="estaciones">
            <h2> Estaciones </h2>
            <article id="1">
              <h3 className="movile"> {json[0].data[0].info[0].mobile} </h3>
              <h3 className="desktop"> {json[0].data[0].info[0].title} </h3>
              <p> {json[0].data[0].info[0].short} </p>
              <div className="img">
                <div className="imgOrbit">
                  <img src={json[0].data[0].info[0].img} alt="Odisea estelar" />
                </div>
              </div>
            </article>
            <article id="2" className="derecha">
              <h3 className="movile"> {json[0].data[0].info[1].mobile} </h3>
              <h3 className="desktop"> {json[0].data[0].info[1].title} </h3>
              <p> {json[0].data[0].info[1].short} </p>
              <div className="img">
                <div className="imgOrbit">
                  <img src={json[0].data[0].info[1].img} alt="Logística 4.0" />
                </div>
              </div>
            </article>
            <article id="3">
              <h3 className="movile"> {json[0].data[0].info[2].mobile} </h3>
              <h3 className="desktop"> {json[0].data[0].info[2].title} </h3>
              <p> {json[0].data[0].info[2].short} </p>
              <div className="img">
                <div className="imgOrbit">
                  <img src={json[0].data[0].info[2].img} alt="Ingeniería del mañana" />
                </div>
              </div>
            </article>
            <article id="4" className="derecha">
              <h3 className="movile"> {json[0].data[0].info[3].mobile} </h3>
              <h3 className="desktop"> {json[0].data[0].info[3].title} </h3>
              <p> {json[0].data[0].info[3].short} </p>
              <div className="img">
                <div className="imgOrbit">
                  <img src={json[0].data[0].info[3].img} alt="Desarrollo urbano sustentable" />
                </div>
              </div>
            </article>
            <LeerMas type="interno" link="Estaciones" className="estaciones_leermas"/>
          </section>



          <section id="conferencias_1">
            <h2> {json[2].category} </h2>
            <article id="1">
              <h3> {json[2].data[0].info[0].title} </h3>
              <p> {json[2].data[0].info[1].title} </p>
              <div class="img">
                <div class="imgOrbit">
                  <img src={json[2].data[0].info[0].img} alt="Conferencia 1" />
                  <div className="planet"></div>
                </div>
              </div>
            </article>
            <article id="2" className="derecha">
              <h3> {json[2].data[1].info[0].title} </h3>
              <p> {json[2].data[1].info[1].title}  </p>
              <div className="img">
                <div className="imgOrbit">
                  <img src={json[2].data[1].info[0].img} alt="Conferencia 2" />
                  <div className="planet"></div>
                </div>
              </div>
            </article>
            <article id="3">
              <h3> {json[2].data[2].info[0].title} </h3>
              <p> {json[2].data[2].info[1].title} </p>
              <div className="img">
                <div className="imgOrbit">
                  <img src={json[2].data[2].info[0].img} alt="Conferencia 3" />
                  <div className="planet"></div>
                </div>
              </div>
            </article> 
            <article id="4" className="derecha">
              <h3> {json[2].data[3].info[0].title} </h3>
              <p> {json[2].data[3].info[1].title}  </p>
              <div className="img">
                <div className="imgOrbit">
                  <img src={json[2].data[3].info[0].img} alt="Conferencia 2" />
                  <div className="planet"></div>
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
              <div className="img">
                <div className="imgOrbit">
                    <img src={json[3].data[1].info[0].img} alt="Conferencia 1" />
                  <div className="planet"></div>
                </div>
              </div>
            </article>
            <article id="2" className="flex_derecha">
              <div className="conferencias_2_text">
                <h3> {json[3].data[3].info[0].title} </h3>
                <p> {json[3].data[3].info[0].disertante} </p>
              </div>
              <div className="img">
                <div className="imgOrbit">
                    <img src={json[3].data[3].info[0].img} alt="Conferencia 1" />
                  <div className="planet"></div>
                </div>
              </div>
            </article>
            <LeerMas type="interno" link="Conferencias profesionales" />
          </section>

          <section id="visitas">
            <h2> {json[1].category} </h2>

            <article id="1">
              <h3> {json[1].data[0].info[0].title} </h3>
              <p class="movile"> {json[1].data[0].info[0].short} </p>
              <p class="desktop"> {json[1].data[0].info[0].desciption} </p> 
              <div class="img">
                <div class="imgOrbit">
                  <img src={json[1].data[0].info[1].img} alt="visitas 1" />
                  <div className="planet"></div>
                </div>
              </div>
            </article>

            <article id="2" class="derecha">
              <h3> {json[1].data[1].info[0].title} </h3>
              <p className="movile"> {json[1].data[1].info[0].short} </p>
              <p className="desktop"> {json[1].data[1].info[0].desciption} </p> {/* Si ocupa toda la pantalla debe ir la descripción entera */}
              <div className="img">
                <div className="imgOrbit">
                  <img src={json[1].data[1].info[1].img} alt="visitas 2" />
                  <div className="planet"></div>
                </div>
              </div>
            </article>

            <article id="3">
              <h3> {json[1].data[2].info[0].title} </h3>
              <p className="movile"> {json[1].data[2].info[0].short} </p>
              <p className="desktop"> {json[1].data[2].info[0].desciption} </p>
              <div className="img">
                <div className="imgOrbit">
                  <img src={json[1].data[2].info[1].img} alt="visitas 3" />
                  <div className="planet"></div>
                </div>
              </div>
            </article>

            <article id="4" class="derecha">
              <h3> {json[1].data[3].info[0].title} </h3>
              <p className="movile"> {json[1].data[3].info[0].short} </p>
              <p className="desktop"> {json[1].data[3].info[0].desciption} </p> {/* Si ocupa toda la pantalla debe ir la descripción entera */}
              <div className="img">
                <div className="imgOrbit">
                  <img src={json[1].data[3].info[1].img} alt="visitas 2" />
                  <div className="planet"></div>
                </div>
              </div>
            </article>

            <article id="5">
              <h3> {json[1].data[4].info[0].title} </h3>
              <p className="movile"> {json[1].data[4].info[0].short} </p>
              <p className="desktop"> {json[1].data[4].info[0].desciption} </p>
              <div className="img">
                <div className="imgOrbit">
                  <img src={json[1].data[4].info[1].img} alt="visitas 3" />
                  <div className="planet"></div>
                </div>
              </div>
            </article>

            <article id="6" class="derecha">
              <h3> {json[1].data[5].info[0].title} </h3>
              <p className="movile"> {json[1].data[5].info[0].short} </p>
              <p className="desktop"> {json[1].data[5].info[0].desciption} </p> {/* Si ocupa toda la pantalla debe ir la descripción entera */}
              <div className="img">
                <div className="imgOrbit">
                {/* {json[1].data[4].info[1].img} */}
                  <img src="" alt="visitas 2" />
                  <div className="planet"></div>
                </div>
              </div>
            </article>

            <LeerMas type="interno" link="Visitas técnicas" />
          </section>

          <section id="hackaton">
            <h2> Hackaton </h2>
            <article id="1">
            <h3> {json[5].data[0].info[0].title} </h3>
              <p> {json[5].data[0].info[0].short} </p>
              <div className="img">
                <div className="imgOrbit">
                  {/* <img src={hackaton} alt="Hackaton 1" /> */}
                  <img src="/imgs/hackaton.png" alt="Hackaton 1" />
                  <div className="planet"></div>
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
              <div className="img">
                <div className="imgOrbit">
                  <img src={feria} alt="feria 1" />
                  <div className="planet"></div>
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