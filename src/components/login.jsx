// styles
import "../styles/login/login.css"
import logoCaeiiDesktop from "../styles/login/img/logo-caeii-desktop.svg"
import logoAareiiDesktop from "../styles/login/img/logo-aareii-desktop.svg"
import logoAareii from "../styles/login/img/aareii.png"
import logoCaeii from "../styles/login/img/caeii.svg"

import BaseLayout from "./layout"

export default function Login() {
    return (
        // <BaseLayout>
            <div className="App" id="login">
                <header>
                    <div className="title-login">
                        <img src={logoCaeii} alt="Logo caeii" />
                    </div>
                    <img id="logo_caeii_desktop" src={logoCaeiiDesktop} alt="Logo de CAEII XX" />
                </header>
                <main id="main_login">
                    <div className="login-card">
                        <form action="" method="post">
                            <h1>BIENVENIDO</h1>
                            <input type="text" name="user" placeholder="Usuario" id="" />
                            <input type="password" name="pass" placeholder="Contraseña" id="" />
                            <a href="" className="no_contra" >¿olvidaste tu contraseña?</a>
                            <button type="submit">Ingresar</button>
                            <a href="https://inscripciones.aareii.org.ar/index.php/register">Registrate</a>
                        </form>
                    </div>
                </main>
                <footer id="footer-login">
                    <div className="logo">
                        <a href="https://www.aareii.org.ar/"><img src={logoAareii} alt="Logo de AArEII" /></a>
                    </div>
                    <a href="https://www.aareii.org.ar/"><img id="logo_aareii_desktop" src={logoAareiiDesktop} alt="Logo de AArEII" /></a>
                </footer>
            </div>
        // </BaseLayout>
    );
}