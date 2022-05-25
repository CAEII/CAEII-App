import { Link } from 'react-router-dom'
import "../styles/home/css/fuentes.css"

import "../styles/home/css/generales/variables.css"
import "../styles/home/css/generales/generales.css"
import "../styles/home/css/home.css"
import "../styles/home/css/generales/pantallasChicas.css"
import "../styles/home/css/generales/desktop.css"
import homeIcon from "../styles/home/img/icono-BotonHome.svg"
import title from "../styles/home/img/caeii-title.svg"
import estacion1 from "../styles/home/img/estaciones/odiseaEstelar.png"
import estacion2 from "../styles/home/img/estaciones/Logística 4.0.png"
import estacion3 from "../styles/home/img/estaciones/Próximo destino.png"
import estacion4 from "../styles/home/img/estaciones/Desarrollo urbano.png"
import placeholder from "../styles/home/img/PLACE HOLDER.png"
import placeholder2 from "../styles/home/img/PLACE HOLDER cuadrado.png"
import logoAareii from "../styles/home/img/logo-aareii-desktop.png"
import cohete from "../styles/home/img/cohete-botones.svg"

function Home() {

    return (<>
        <body id="home">
            <header>
                <nav>
                    <div class="movile_navbar">
                        <div class="nav-container">
                            <input class="checkbox" type="checkbox" name="" id="" />
                            <div class="hamburger-lines">
                                <span class="line line1"></span>
                                <span class="line line2"></span>
                                <span class="line line3"></span>
                            </div>
                            <div class="menu-items">
                                <ul>
                                    <li>
                                        <div>
                                            <Link to="/login">INGRESAR</Link>
                                            <div class="line_container"><div class="line" /></div>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <a href="https://inscripciones.aareii.org.ar/index.php/register">REGISTRARSE</a>
                                            <div class="line_container"><div class="line" /></div>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <a href="">NOSOTROS</a>
                                            <div class="line_container"><div class="line" /></div>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <a href="">AAREII</a>
                                            <div class="line_container"><div class="line" /></div>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <a href="">CONTACTO</a>
                                            <div class="line_container"><div class="line" /></div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="desktop_navbar">
                        <ul>
                            <li>
                                <div>
                                    <Link to="/login">INGRESAR</Link>
                                    <div class="line_container"><div class="line" /></div>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <a href="https://inscripciones.aareii.org.ar/index.php/register">REGISTRARSE</a>
                                    <div class="line_container"><div class="line" /></div>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <a href="">NOSOTROS</a>
                                    <div class="line_container"><div class="line" /></div>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <a href="">CONTACTO</a>
                                    <div class="line_container"><div class="line" /></div>
                                </div>
                            </li>
                            <li>
                                <a href="https://www.aareii.org.ar/">
                                    <img src={logoAareii} alt="logo AArEII" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div class="title">
                    <img src={title}></img>
                </div>
            </header>
            <main>
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
                            <div>
                                <a href="#conferencias_1">Charlas Magistrales</a>
                                <div class="line_container"><div class="line" /></div>
                            </div>
                        </li>
                        <li id="dos">
                            <div>
                                <a href="#visitas">Visitas técnicas</a>
                                <div class="line_container"><div class="line" /></div>
                            </div>
                        </li>
                        <li id="tres">
                            <div>
                                <a href="#talleres">Talleres</a>
                                <div class="line_container"><div class="line" /></div>
                            </div>
                        </li>
                        <li id="cuatro">
                            <div>
                                <a href="#hackaton">Hackaton</a>
                                <div class="line_container"><div class="line" /></div>
                            </div>
                        </li>
                        <li id="cinco">
                            <div>
                                <a href="#conferencias_2">Conferencias profesionales</a>
                                <div class="line_container"><div class="line" /></div>
                            </div>
                        </li>
                        <li id="seis">
                            <div>
                                <a href="#feria">Feria de empleo</a>
                                <div class="line_container"><div class="line" /></div>
                            </div>
                        </li>
                    </ul>
                </section>
                <section id="registrarse">
                    <h1>¿Estás preparado para el despegue?</h1>
                    <div class="button">
                        <a href="https://inscripciones.aareii.org.ar/index.php/register" class="hyperspan">
                            <div class="circle">
                                <div class="rocket_container">
                                    <img src={cohete}></img>
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
                        <h3 class="movile"> Odisea estelar </h3>
                        <h3 class="desktop"> Odisea estelar: poniendo a prueba nuestros límites </h3>
                        <p> En este pilar propone poner en evidencia cómo
                            gracias a la ingeniería se están ampliando los horizontes del conocimiento ...  </p>
                        <div class="img">
                            <div class="imgOrbit">
                                <img src={estacion1} alt="Conferencia 1" />
                            </div>
                        </div>
                    </article>
                    <article id="2" class="derecha">
                        <h3 class="movile"> Logística 4.0 </h3>
                        <h3 class="desktop"> Logística 4.0: Integración digital de los procesos productivos </h3>
                        <p> La logística 4.0, nacida con la llegada de la cuarta
                            revolución industrial, plantea una nueva realidad
                            ...   </p>
                        <div class="img">
                            <div class="imgOrbit">
                                <img src={estacion2} />
                            </div>
                        </div>
                    </article>
                    <article id="3">
                        <h3 class="movile"> Próximo destino </h3>
                        <h3 class="desktop"> Próximo destino: La ingeniería del mañana </h3>
                        <p> La velocidad de transformación tecnológica
                            impacta en todos los ámbitos, y cada profesional
                            debe seguir estas tendencias ...
                        </p>
                        <div class="img">
                            <div class="imgOrbit">
                                <img src={estacion3} alt="Conferencia 1" />
                            </div>
                        </div>
                    </article>
                    <article id="4" class="derecha">
                        <h3 class="movile"> Desarrollo urbano sustentable </h3>
                        <h3 class="desktop"> Desarrollo urbano sustentable </h3>
                        <p> Impartiremos conocimientos sobre cómo las
                            ciudades inteligentes usan la información
                            para mejorar la calidad de vida ...   </p>
                        <div class="img">
                            <div class="imgOrbit">
                                <img src={estacion4} alt="Conferencia 1" />
                            </div>
                        </div>
                    </article>
                    <div class="button leermas">
                        <a href="" class="hyperspan">
                            <div class="circle">
                                <div class="rocket_container">
                                    <img src={cohete}></img>
                                </div>
                                <div class="circle2"></div>
                            </div>
                            <div class="texto"> Leer mas </div>
                        </a>
                    </div>
                </section>
                <section id="conferencias_1">
                    <h2> Conferencias magistrales </h2>
                    <article id="1">
                        <h3> #conferencias_1 #1 </h3>
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque commodo dapibus purus.  </p>
                        <div class="img">
                            <div class="imgOrbit">
                                <img src={placeholder} alt="Conferencia 1" />
                                <div class="planet"></div>
                            </div>
                        </div>
                    </article>
                    <article id="2" class="derecha">
                        <h3> #conferencias_1 #2 </h3>
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque commodo dapibus purus.  </p>
                        <div class="img">
                            <div class="imgOrbit">
                                <img src={placeholder2} alt="Conferencia 2" />
                                <div class="planet"></div>
                            </div>
                        </div>
                    </article>
                    <article id="3">
                        <h3> #conferencias_1 #3 </h3>
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque commodo dapibus purus.  </p>
                        <div class="img">
                            <div class="imgOrbit">
                                <img src={placeholder} alt="Conferencia 3" />
                                <div class="planet"></div>
                            </div>
                        </div>
                    </article>
                    <div class="button leermas">
                        <a href="" class="hyperspan">
                            <div class="circle">
                                <div class="rocket_container">
                                    <img src={cohete}></img>
                                </div>
                                <div class="circle2"></div>
                            </div>
                            <div class="texto"> Leer mas </div>
                        </a>
                    </div>
                </section>
                <section id="visitas">
                    <h2> Visitas técnicas </h2>
                    <article id="1">
                        <h3> #visitas #1 </h3>
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque commodo dapibus purus.  </p>
                        <div class="img">
                            <div class="imgOrbit">
                                <img src={placeholder} alt="visitas 1" />
                                <div class="planet"></div>
                            </div>
                        </div>
                    </article>
                    <article id="2" class="derecha">
                        <h3> #visitas #2 </h3>
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque commodo dapibus purus.  </p>
                        <div class="img">
                            <div class="imgOrbit">
                                <img src={placeholder2} alt="visitas 2" />
                                <div class="planet"></div>
                            </div>
                        </div>
                    </article>
                    <article id="3">
                        <h3> #visitas #3 </h3>
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque commodo dapibus purus.  </p>
                        <div class="img">
                            <div class="imgOrbit">
                                <img src={placeholder} alt="visitas 3" />
                                <div class="planet"></div>
                            </div>
                        </div>
                    </article>
                    <div class="button leermas">
                        <a href="" class="hyperspan">
                            <div class="circle">
                                <div class="rocket_container">
                                    <img src={cohete}></img>
                                </div>
                                <div class="circle2"></div>
                            </div>
                            <div class="texto"> Leer mas </div>
                        </a>
                    </div>
                </section>
                <section id="talleres">
                    <h2> Talleres </h2>
                    <article id="1">
                        <h3> #talleres #1 </h3>
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque commodo dapibus purus.  </p>
                        <div class="img">
                            <div class="imgOrbit">
                                <img src={placeholder} alt="talleres 1" />
                                <div class="planet"></div>
                            </div>
                        </div>
                    </article>
                    <article id="2" class="derecha">
                        <h3> #talleres #2 </h3>
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque commodo dapibus purus.  </p>
                        <div class="img">
                            <div class="imgOrbit">
                                <img src={placeholder2} alt="talleres 2" />
                                <div class="planet"></div>
                            </div>
                        </div>
                    </article>
                    <article id="3">
                        <h3> #talleres #3 </h3>
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque commodo dapibus purus.  </p>
                        <div class="img">
                            <div class="imgOrbit">
                                <img src={placeholder} alt="talleres 3" />
                                <div class="planet"></div>
                            </div>
                        </div>
                    </article>
                    <div class="button leermas">
                        <a href="" class="hyperspan">
                            <div class="circle">
                                <div class="rocket_container">
                                    <img src={cohete}></img>
                                </div>
                                <div class="circle2"></div>
                            </div>
                            <div class="texto"> Leer mas </div>
                        </a>
                    </div>
                </section>
                <section id="hackaton">
                    <h2> Hackaton </h2>
                    <article id="1">
                        <h3> #hackaton #1 </h3>
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque commodo dapibus purus.  </p>
                        <div class="img">
                            <div class="imgOrbit">
                                <img src={placeholder} alt="Hackaton 1" />
                                <div class="planet"></div>
                            </div>
                        </div>
                    </article>
                    <article id="2" class="derecha">
                        <h3> #hackaton #2 </h3>
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque commodo dapibus purus.  </p>
                        <div class="img">
                            <div class="imgOrbit">
                                <img src={placeholder2} alt="Hackaton 2" />
                                <div class="planet"></div>
                            </div>
                        </div>
                    </article>
                    <article id="3">
                        <h3> #hackaton #3 </h3>
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque commodo dapibus purus.  </p>
                        <div class="img">
                            <div class="imgOrbit">
                                <img src={placeholder} alt="Hackaton 3" />
                                <div class="planet"></div>
                            </div>
                        </div>
                    </article>
                    <div class="button leermas">
                        <a href="" class="hyperspan">
                            <div class="circle">
                                <div class="rocket_container">
                                    <img src={cohete}></img>        
                                </div>
                                <div class="circle2"></div>
                            </div>
                            <div class="texto"> Leer mas </div>
                        </a>
                    </div>
                </section>
                <section id="conferencias_2">
                    <h2> Conferencias profesionales </h2>
                    <article id="1">
                        <h3> #conferencias_2 #1 </h3>
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque commodo dapibus purus.  </p>
                        <div class="img">
                            <div class="imgOrbit">
                                <img src={placeholder} alt="Conferencia 1" />
                                <div class="planet"></div>
                            </div>
                        </div>
                    </article>
                    <article id="2" class="derecha">
                        <h3> #conferencias_2 #2 </h3>
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque commodo dapibus purus.  </p>
                        <div class="img">
                            <div class="imgOrbit">
                                <img src={placeholder2} alt="Conferencia 2" />
                                <div class="planet"></div>
                            </div>
                        </div>
                    </article>
                    <article id="3">
                        <h3> #conferencias_2 #3 </h3>
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque commodo dapibus purus.  </p>
                        <div class="img">
                            <div class="imgOrbit">
                                <img src={placeholder} alt="Conferencia 3" />
                                <div class="planet"></div>
                            </div>
                        </div>
                    </article>
                    <div class="button leermas">
                        <a href="" class="hyperspan">
                            <div class="circle">
                                <div class="rocket_container">
                                    <img src={cohete}></img>
                                </div>
                                <div class="circle2"></div>
                            </div>
                            <div class="texto"> Leer mas </div>
                        </a>
                    </div>
                </section>
                <section id="feria">
                    <h2> Feria de empleo </h2>
                    <article id="1">
                        <h3> #feria #1 </h3>
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque commodo dapibus purus.  </p>
                        <div class="img">
                            <div class="imgOrbit">
                                <img src={placeholder} alt="feria 1" />
                                <div class="planet"></div>
                            </div>
                        </div>
                    </article>
                    <article id="2" class="derecha">
                        <h3> #feria #2 </h3>
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque commodo dapibus purus.  </p>
                        <div class="img">
                            <div class="imgOrbit">
                                <img src={placeholder2} alt="feria 2" />
                                <div class="planet"></div>
                            </div>
                        </div>
                    </article>
                    <article id="3">
                        <h3> #feria #3 </h3>
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque commodo dapibus purus.  </p>
                        <div class="img">
                            <div class="imgOrbit">
                                <img src={placeholder} alt="feria 3" />
                                <div class="planet"></div>
                            </div>
                        </div>
                    </article>
                    <div class="button leermas">
                        <a href="" class="hyperspan">
                            <div class="circle">
                                <div class="rocket_container">
                                    <img src={cohete}></img>
                                </div>
                                <div class="circle2"></div>
                            </div>
                            <div class="texto"> Leer mas </div>
                        </a>
                    </div>
                </section>
                <section id="sponsors">
                    <h2> Sponsors </h2>
                    <div class="imgs">
                        <img src={placeholder2} alt="Pan American Energy" />
                        <img src={placeholder} alt="universidad nacional de cuyo" />
                        <img src={placeholder2} alt="Universidad de Mendoza" />
                    </div>
                </section>
            </main>
            <footer>
                <a href="#home">
                    <div class="homecircle">
                        <img src={homeIcon} alt="link al inicio" />
                    </div>
                </a>
            </footer>
        </body>
    </>)

}

export default Home;