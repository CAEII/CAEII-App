// react
import { useEffect, useState } from "react"
// funciones
import oscurecer from "./Function_oscurecer"

export default function SvgComponent2({sala_resaltada}) {    
    const [Sala_1_fill, SetSala_1_fill] = useState("#ffd20d");
    const [Sala_2_fill, SetSala_2_fill] = useState("#ff6510");


    useEffect(() => {
        if (sala_resaltada === "sala_2") {
            SetSala_1_fill(oscurecer("#ffd20d"))
        } else {
            SetSala_1_fill("#ffd20d")
        }
        if (sala_resaltada === "sala_1") {
            SetSala_2_fill(oscurecer("#ff6510"))
        } else{
            SetSala_2_fill("#ff6510")
        }
    }, [sala_resaltada, Sala_1_fill, Sala_2_fill])

    // console.log(Sala_1_fill.length)
    // hexToHSL("#ffd20d")

    return (
        <svg
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            x={0}
            y={0}
            viewBox="0 0 720 366"
            style={{
                enableBackground: "new 0 0 720 366",
            }}
            xmlSpace="preserve"
        >
            <style>{".st1{font-family:'ArialMT'}.st2{font-size:50.37px}"}</style>
            <g id="sala_1">
                <path
                    id="fondo_sala_1"
                    style={{
                        fill: Sala_1_fill,
                    }}
                    d="M364.4 366H0V0h360.1z"
                />
                <path d="M356 10v346H10V10h346m10-10H0v366h366V0z" id="contorno_sala_2" />
                <text transform="translate(65 194.75)" className="st1 st2">
                    {"SALA UNO"}
                </text>
            </g>
            <g id="sala_2">
                <path
                    id="fondo_sala_2"
                    style={{
                        fill: Sala_2_fill,
                    }}
                    d="M364 0h356v366H364z"
                />
                <path
                    d="M710 10v346H364V10h346m10-10H354v366h366V0z"
                    id="contorno_sala_1"
                />
                <text transform="translate(437 194.75)" className="st1 st2">
                    {"SALA DOS"}
                </text>
            </g>
        </svg>
    )
}