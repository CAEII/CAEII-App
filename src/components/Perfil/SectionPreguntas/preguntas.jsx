// react
import React, {useState } from "react";
// styles
import "../../../styles/Preguntas/Preguntas.css";

export default function Preguntas() {
    return (
        <section id="preguntas">
            <h2> Preguntas </h2>
            <div className="codigos_container">
                <h4>Sala PAE:</h4>
                <strong> 220826 </strong> 

                <h4>Sala Raizen:</h4>
                <strong> 220827 </strong>

                <h4>Sala LTN:</h4>
                <strong> 220828 </strong>

                <h4>Auditorio Accenture:</h4>
                <strong> 220825 </strong>
            </div>
            <a href="https://onlinequestions.org/"> <button> Click aquí par ir a la web de preguntas </button> </a>
        </section>
    )
}