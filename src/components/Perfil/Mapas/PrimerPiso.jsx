// react
import { useEffect, useState } from "react"
// funciones
import oscurecer from "./Function_oscurecer"

export default function PrimerPiso({sala_resaltada}) {    
    // const [sala_resaltada, Set_sala_resaltada] = useState(sala);

    // colores salas
    const [sanitario_fill, Set_sanitario_fill] = useState("#f28f2b");
    const [hall_de_expocicion_fill, Set_hall_de_expocicion_fill] = useState("#6abf4b");
    const [uspallata_fill, Set_uspallata_fill] = useState("#63c3d7");
    const [magna_central_fill, Set_magna_central_fill] = useState("#ffe952");
    const [nihuil_fill, Set_nihuil_fill] = useState("#c56dac");
    const [cacheuta_fill, Set_cacheuta_fill] = useState("#cb5271");

    useEffect(() => {
        if (sala_resaltada === "sanitario") {
            Set_sanitario_fill("#f28f2b")
        } else {
            Set_sanitario_fill(oscurecer("#ffd20d"))
        }

        if (sala_resaltada === "hall_de_expocicion") {
            Set_hall_de_expocicion_fill("#6abf4b")
        } else {
            Set_hall_de_expocicion_fill(oscurecer("#6abf4b"))
        }

        if (sala_resaltada === "uspallata") {
            Set_uspallata_fill("#63c3d7")
        } else {
            Set_uspallata_fill(oscurecer("#63c3d7"))
        }

        if (sala_resaltada === "magna_central") {
            Set_magna_central_fill("#ffe952")
        } else {
            Set_magna_central_fill(oscurecer("#ffe952"))
        }

        if (sala_resaltada === "nihuil") {
            Set_nihuil_fill("#c56dac")
        } else {
            Set_nihuil_fill(oscurecer("#c56dac"))
        }

        if (sala_resaltada === "cacheuta") {
            Set_cacheuta_fill("#cb5271")
        } else {
            Set_cacheuta_fill(oscurecer("#cb5271"))
        }
    }, [sala_resaltada])


    return (
        <svg
            id="Primer_piso"
            xmlns="http://www.w3.org/2000/svg"
            x={0}
            y={0}
            viewBox="0 0 1683.8 1190.6"
            style={{
                enableBackground: "new 0 0 1683.8 1190.6",
            }}
            xmlSpace="preserve"
        >
            <style>
                {
                    ".st1{fill:#1a1a18}.st2{font-family:'Montserrat-SemiBold'}.st13{font-size:41.0973px}.st16{font-size:33.8903px}.st19{font-size:32.8359px}.st23{fill:none;stroke:#575656;stroke-width:1.0001;stroke-miterlimit:22.9256}"
                }
            </style>
            <g id="sanitario">
                <path
                    style={{
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        fill: sanitario_fill,
                        stroke: "#1d1d1b",
                        strokeWidth: 6,
                        strokeMiterlimit: 10,
                    }}
                    d="M99.6 898.2H304.7V669.4H99.6z"
                />
                <text
                    transform="translate(126.863 792.679)"
                    className="st1 st2"
                    style={{
                        fontSize: "24.9677px",
                    }}
                >
                    {"SANITARIO"}
                </text>
            </g>
            <g id="asensor">
                <path
                    style={{
                        fill: "#78c8cc",
                        stroke: "#1a1a18",
                        strokeWidth: 6,
                        strokeMiterlimit: 22.9256,
                    }}
                    d="M899.7 912.5h92.2V956l-13.3 13h-63.3l-15.6-12.8z"
                />
                <text
                    transform="translate(904.745 942.979)"
                    className="st1 st2"
                    style={{
                        fontSize: "16.8786px",
                    }}
                >
                    {"Ascensor"}
                </text>
            </g>
            <g id="hall_de_expocicion">
                <path
                    style={{
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        fill: hall_de_expocicion_fill,
                        stroke: "#1d1d1b",
                        strokeWidth: 6,
                        strokeMiterlimit: 10,
                    }}
                    d="M977.3 428.2H202.1v241.2h715.7l.2 243.1h55.7l.6-243.1 1.2-2.7z"
                />
                <text
                    transform="translate(355.582 556.608)"
                    className="st1 st2"
                    style={{
                        fontSize: "34.7933px",
                    }}
                >
                    {" HALL DE EXPOSICI\xD3N"}
                </text>
                <path
                    d="M719.2 429.7h34.7-34.7z"
                    style={{
                        fill: "none",
                        stroke: hall_de_expocicion_fill,
                        strokeWidth: 4,
                        strokeLinejoin: "bevel",
                        strokeMiterlimit: 22.9256,
                    }}
                />
            </g>
            <g id="sala_uspallata">
                <path
                    style={{
                        fill: uspallata_fill,
                        stroke: "#1d1d1b",
                        strokeWidth: 6,
                        strokeMiterlimit: 22.9256,
                    }}
                    d="M304.7 428.2h406.1v-230H304.7z"
                />
                <text
                    transform="translate(349.1 304.355)"
                    className="st1 st2"
                    style={{
                        fontSize: "34.2716px",
                    }}
                >
                    {"SALA USPALLATA"}
                </text>
                <path
                    id="puerta_uspallata"
                    d="M593.3 428.2H628h-34.7z"
                    style={{
                        fill: "none",
                        stroke: uspallata_fill,
                        strokeWidth: 6,
                        strokeMiterlimit: 10,
                    }}
                />
            </g>
            <g id="sala_magna_central">
                <path
                    style={{
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        fill: magna_central_fill,
                        stroke: "#1d1d1b",
                        strokeWidth: 6,
                        strokeMiterlimit: 10,
                    }}
                    d="M976.2 900.2h552v-702H916.9v230.9l60.7-.9-.7 237.3h-.7z"
                />
                <text transform="translate(1209.009 536.652)" className="st1 st2 st13">
                    {"SALA "}
                </text>
                <text transform="translate(1081.669 585.972)" className="st1 st2 st13">
                    {"MAGNA CENTRAL"}
                </text>
                <path
                    id="puerta_sala_magna"
                    style={{
                        fill: "none",
                        stroke: magna_central_fill,
                        strokeWidth: 8,
                        strokeMiterlimit: 22.9256,
                    }}
                    d="M977 477.2V614"
                />
            </g>
            <g id="sala_nihuil">
                <path
                    style={{
                        fill: nihuil_fill,
                        stroke: "#1d1d1b",
                        strokeWidth: 6,
                        strokeMiterlimit: 22.9256,
                    }}
                    d="M712.8 198.2h200.3v227.2H712.8z"
                />
                <text transform="translate(764.35 293.362)" className="st1 st2 st16">
                    {"SALA "}
                </text>
                <text transform="translate(753.44 334.032)" className="st1 st2 st16">
                    {"NIHUIL"}
                </text>
                <path
                    d="M719.2 424.9h34.7-34.7z"
                    style={{
                        fill: "none",
                        stroke: nihuil_fill,
                        strokeWidth: 6,
                        strokeLinejoin: "bevel",
                        strokeMiterlimit: 22.9256,
                    }}
                />
            </g>
            <g id="sala_cacheuta">
                <path
                    style={{
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        fill: cacheuta_fill,
                        stroke: "#1d1d1b",
                        strokeWidth: 6,
                        strokeMiterlimit: 10,
                    }}
                    d="M99.6 615.8H304.7V198.2H99.6z"
                />
                <text transform="translate(154.784 379.164)" className="st1 st2 st19">
                    {"SALA"}
                </text>
                <text transform="translate(103.934 418.564)" className="st1 st2 st19">
                    {"CACHEUTA"}
                </text>
                <path
                    style={{
                        fill: "none",
                        stroke: cacheuta_fill,
                        strokeWidth: 7,
                        strokeMiterlimit: 22.9256,
                    }}
                    d="M304.3 578v34.8"
                />
            </g>
            <g id="puntos_muertos">
                <path
                    style={{
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        fill: "#97a2a4",
                        stroke: "#1d1d1b",
                        strokeMiterlimit: 10,
                    }}
                    d="M97.6 615.8h136.2v49.4H97.6z"
                />
                <path
                    style={{
                        fill: "none",
                        stroke: "#1d1d1b",
                        strokeWidth: 6,
                        strokeMiterlimit: 22.9256,
                    }}
                    d="M99.6 615.8h136.2v49.4H99.6z"
                />
                <path className="st23" d="M914.9 422.1V198.2M916.9 422.1V198.2" />
                <path
                    style={{
                        fill: "#97a2a4",
                        stroke: "#1d1d1b",
                        strokeWidth: 6,
                        strokeMiterlimit: 22.9256,
                    }}
                    d="M914.9 198.2h60.6v227.2h-60.6z"
                />
                <path
                    id="pared_de_enfrente"
                    style={{
                        fill: "none",
                        stroke: "#1d1d1b",
                        strokeWidth: 6,
                        strokeLinejoin: "round",
                        strokeMiterlimit: 22.9256,
                    }}
                    d="M916.9 898.9H307"
                />
            </g>
        </svg>
    )
}