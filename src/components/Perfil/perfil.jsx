// react
import React from "react";
// components
import BaseLayout from "../layout"
import Credencial from "./Credencial";
import Cronograma from "./Cronograma";
import Mapas from "./Mapas";
//styles
import "../../styles/perfil/css/Perfil.css";
// imgs
import title from "../../styles/home/img/caeii-title.png"
import CaeiiLogo from "../../styles/perfil/img/perfil/CAEII LOGO 1.svg";


export default function Perfil() {
    return (
        <div className="App" id="perfil">
            <BaseLayout>
                <main>
                    <div class="title">
                        <img src={title} alt="Logo caeii"></img>
                    </div>

                    <Credencial/>

                    <Cronograma/>

                    <Mapas/>

                    <section id="logo">
                        <img src={CaeiiLogo} alt="logo CAEII" />
                    </section>
                </main>
            </BaseLayout>
        </div>
    );
}