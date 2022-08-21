// react
import {useState} from 'react';
import { useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
// cookies
import Cookies from 'universal-cookie';
// functions
import login from "./login_function"
// styles
import "../../styles/login/login.css"
import logoCaeiiDesktop from "../../styles/login/img/logo-caeii-desktop.svg"
import logoAareiiDesktop from "../../styles/login/img/logo-aareii-desktop.svg"
import logoAareii from "../../styles/login/img/aareii.png"
import logoCaeii from "../../styles/login/img/caeii.svg"

export default function Login() {
    const [User, setUser] = useState('');
    const [password, setpassword] = useState('');

    const cookies = new Cookies();
    const navigate = useNavigate();


    const handleSubmit = event => {
        event.preventDefault(); // 👈️ prevent page refresh

        login(User, password)

        // 👇️ clear all input values in the form
        setUser('');
        setpassword('');

        setTimeout(() => {
            if (cookies.get('session') !== undefined) {
                navigate("/perfil")
            }
        }, 1000);
    };

    useEffect(() => {
        if (cookies.get('session') !== undefined) {
            navigate("/")
        }
    })


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
                        <form action="" method="post" onSubmit={handleSubmit}>
                            <h1>BIENVENIDO</h1>
                            <input type="text" name="user" placeholder="Usuario" value={User} onChange={event => setUser(event.target.value)} />
                            <input type="password" name="pass" placeholder="Contraseña" value={password} onChange={event => setpassword(event.target.value)} />

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