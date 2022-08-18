// react
import {useState} from 'react';
import { useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
// cookies
import Cookies from 'universal-cookie';
// axios
import axios from "axios";
// functions
import login from "./login_function"
import kk from "./prueba_axios"
// styles
import "../../styles/login/login.css"
import logoCaeiiDesktop from "../../styles/login/img/logo-caeii-desktop.svg"
import logoAareiiDesktop from "../../styles/login/img/logo-aareii-desktop.svg"
import logoAareii from "../../styles/login/img/aareii.png"
import logoCaeii from "../../styles/login/img/caeii.svg"

// import BaseLayout from "../layout"

export default function Login() {
    const [User, setUser] = useState('');
    const [password, setpassword] = useState('');
    const [autentification, setautentification] = useState(null);
    const [Token, setToken] = useState(null)

    const cookies = new Cookies();
    const navigate = useNavigate();

    // get the token
    useEffect(() => {
        axios.get("https://inscripciones.aareii.org.ar/api/v1/csrf-cookie").then((Response) => {                                             // hago el get al endpoint
            //cookies.set("token",Response.data.token)
            console.log(Response) 
            console.log(cookies.getAll())
        })
    }, [])


    const handleSubmit = event => {
        event.preventDefault(); // 👈️ prevent page refresh

        const isautentificated = login(User, password)

        setautentification(isautentificated)      // reviso si los valores ingresados son correctos
        
        // console.log(isautentificated)
        // console.log(autentification)

        if (isautentificated === true) {                // si los valores osn correctos redirecciono al home
            navigate("/perfil")
        }
    
        // 👇️ clear all input values in the form
        setUser('');
        setpassword('');
    };

    useEffect(() => {
        kk();
    }, [])

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

                    {autentification === false ? <div className="error_msg"><b> usuraio o contraseña incorrectos </b></div> : null}
                    
                    <div className="login-card">
                        <form action="" method="post" onSubmit={handleSubmit}>
                            <h1>BIENVENIDO</h1>
                            <input type="text" name="user" placeholder="Usuario" id="" value={User} onChange={event => setUser(event.target.value)} />
                            <input type="password" name="pass" placeholder="Contraseña" id="" value={password} onChange={event => setpassword(event.target.value)} />

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