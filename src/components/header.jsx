// React
import { useState, useEffect } from 'react';
// cookies
import Cookies from 'universal-cookie';
// styles generales (se aplican a todos los componentes)
import "../styles/fuentes.css"
import "../styles/variables.css"
import "../styles/generales.css"
import "../styles/pantallasChicas.css"
import "../styles/desktop.css"
// imgs
import logoAareii from "../styles/home/img/logo-aareii-desktop.png"

const cookies = new Cookies();

export default function HeaderBar() {
  const [UserLoged, SetUserLoged] = useState(false)
  

  useEffect(() => {
    if (cookies.get('session') !== undefined) {
      SetUserLoged(true)
    } else {
      SetUserLoged(false)
    }
}, [])

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
                </li>

                {/* { UserLoged === true ? <Perfil/> : <Login/> } */}

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
            </li>

            {/* { UserLoged === true ? <Perfil/> : <Login/> } */}

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


function Login(){
  return(
    <li>
      <div class="linea">
        <a href="/login"> INGRESAR </a>
        <div class="line_container"><div class="line" /></div>
      </div>
    </li>
  )
}

function Perfil(){
  return(
    <li>
      <div class="linea">
        <a href="/perfil"> PERFIL </a>
        <div class="line_container"><div class="line" /></div>
      </div>
    </li>
  )
}