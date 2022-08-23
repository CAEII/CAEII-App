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
  const [UserLoged, SetUserLoged] = useState(true)
  

  useEffect(() => {
    if (cookies.get('session') === undefined) {
      SetUserLoged(false)
    }
}, [])

  return (
    <header>
      <nav>
      <div className="logo">
        <img src="/CAEII-App/imgs/aareii logo chico.png" alt="" />
      </div>
        <div className="movile_navbar">
          <div className="nav-container">
            <input className="checkbox" type="checkbox" name="" id="" />
            <div className="hamburger-lines">
              <span className="line line1"></span>
              <span className="line line2"></span>
              <span className="line line3"></span>
            </div>
            <div className="menu-items">
              <ul>
                <li className="logo_aareii_nav_movile_li">
                  <a href="https://bit.ly/3OsUra5">
                    <img src={logoAareii} alt="logo AArEII" className="logo_aareii_nav_movile" />
                  </a>
                </li>
                <li>
                  <div className="linea">
                    <a href="/">INICIO</a>
                    <div className="line_container"><div className="line" /></div>
                  </div>
                </li>

                { UserLoged === true ? <Perfil/> : <Login/> }


                {/* <li>
                  <div className="linea">
                    <a href="https://bit.ly/3MXGBeJ">REGISTRARSE</a>
                    <div className="line_container"><div className="line" /></div>
                  </div>
                </li> */}
                <li>
                  <div className="linea">
                    <a href="/nosotros">NOSOTROS</a>
                    <div className="line_container"><div className="line" /></div>
                  </div>
                </li>
                <li>
                  <div className="linea">
                    <a href="https://bit.ly/3OsUra5">AAREII</a>
                    <div className="line_container"><div className="line" /></div>
                  </div>
                </li>
                <li>
                  <div className="linea">
                    <a href="https://bit.ly/3QuVI27">CONTACTO</a>
                    <div className="line_container"><div className="line" /></div>
                  </div>
                </li>

                { UserLoged === true ? <Logout/> : null }

              </ul>
            </div>
          </div>
        </div>
        <div className="desktop_navbar">
          <ul>
            <li>
              <div className="linea">
                <a href="/">INICIO</a>
                <div className="line_container"><div className="line" /></div>
              </div>
            </li>

            { UserLoged === true ? <Perfil/> : <Login/> }

           {/*  <li>
              <div className="linea">
                <a href="https://bit.ly/3MXGBeJ">REGISTRARSE</a>
                <div className="line_container"><div className="line" /></div>
              </div>
            </li> */}
            <li>
              <div className="linea">
                <a href="/nosotros">NOSOTROS</a>
                <div className="line_container"><div className="line" /></div>
              </div>
            </li>
            <li>
              <div className="linea">
                <a href="https://bit.ly/3QuVI27">CONTACTO</a>
                <div className="line_container"><div className="line" /></div>
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
      <div className="linea">
        <a href="/login"> INGRESAR </a>
        <div className="line_container"><div className="line" /></div>
      </div>
    </li>
  )
}

function Perfil(){
  return(
    <li>
      <div className="linea">
        <a href="/perfil"> PERFIL </a>
        <div className="line_container"><div className="line" /></div>
      </div>
    </li>
  )
}

function Logout() {
  return(
    <li>
      <div className="linea">
        <a href="" onClick={() => cookies.remove('session')}> LOG OUT </a>
        <div className="line_container"><div className="line" /></div>
      </div>
    </li>
  )
}