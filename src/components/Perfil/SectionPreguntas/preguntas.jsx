//react
import React, {useState } from "react";
// style
//styles
import "../../../styles/Preguntas/Preguntas.css";
// functions
import { Que_dia_es_hoy } from "../Suport_functions";

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