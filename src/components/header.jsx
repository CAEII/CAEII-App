// styles
import "../styles/home/css/fuentes.css"
import "../styles/home/css/generales/variables.css"
import "../styles/home/css/generales/generales.css"
import "../styles/home/css/home.css"
import "../styles/home/css/generales/pantallasChicas.css"
import "../styles/home/css/generales/desktop.css"
// imgs
import logoAareii from "../styles/home/img/logo-aareii-desktop.png"



export default function HeaderBar() {
  return (
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
                  <div class="linea">
                    <a href="/">INICIO</a>
                    <div class="line_container"><div class="line" /></div>
                  </div>
                </li>{/*
                <li>
                  <div class="linea">
                     <Link to="/login"> *INGRESAR </Link> 
                    <div class="line_container"><div class="line" /></div>
                  </div>
                </li>*/}
                <li>
                  <div class="linea">
                    <a href="https://bit.ly/3MXGBeJ">REGISTRARSE</a>
                    <div class="line_container"><div class="line" /></div>
                  </div>
                </li>
                <li>
                  <div class="linea">
                    <a href="/nosotros">NOSOTROS</a>
                    <div class="line_container"><div class="line" /></div>
                  </div>
                </li>
                <li>
                  <div class="linea">
                    <a href="https://bit.ly/3OsUra5">AAREII</a>
                    <div class="line_container"><div class="line" /></div>
                  </div>
                </li>
                <li>
                  <div class="linea">
                    <a href="https://bit.ly/3QuVI27">CONTACTO</a>
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
              <div class="linea">
                <a href="/">INICIO</a>
                <div class="line_container"><div class="line" /></div>
              </div>
            </li>{/*
            <li>
              <div class="linea">
                 <Link to="/login"> INGRESAR </Link> 
                <div class="line_container"><div class="line" /></div>
              </div>
            </li>*/}
            <li>
              <div class="linea">
                <a href="https://bit.ly/3MXGBeJ">REGISTRARSE</a>
                <div class="line_container"><div class="line" /></div>
              </div>
            </li>
            <li>
              <div class="linea">
                <a href="/nosotros">NOSOTROS</a>
                <div class="line_container"><div class="line" /></div>
              </div>
            </li>
            <li>
              <div class="linea">
                <a href="https://bit.ly/3QuVI27">CONTACTO</a>
                <div class="line_container"><div class="line" /></div>
              </div>
            </li>
            <li>
              <a href="https://bit.ly/3OsUra5">
                <img src={logoAareii} alt="logo AArEII" />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}