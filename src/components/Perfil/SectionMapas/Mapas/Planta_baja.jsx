// react
import { useEffect, useState } from "react"
// functions
import status from "../Function_decidir_color"
// imgs
import astronauta from "./astronauta.png"


export default function PlantaBaja({sala_resaltada, colores}) {
  const [Hall, SetHall] = useState({color: colores.color_sala_desactivada, display: "none"})
  const [Sanitario, SetSanitario] = useState({color: colores.color_sala_desactivada, display: "none"})
  const [Restaurante, SetRestaurante] = useState({color: colores.color_sala_desactivada, display: "none"})

  const Color_sala_no_interactiva = colores.color_sala_desactivada;

  useEffect(() => {
    SetHall(status("Hall", sala_resaltada, colores));
    SetSanitario(status("Sanitario", sala_resaltada, colores));
    SetRestaurante(status("Restaurante", sala_resaltada, colores));
  }, [sala_resaltada, colores]);


  return (
    <svg
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x={0}
      y={0}
      viewBox="0 0 1684 1191"
      style={{
        enableBackground: "new 0 0 1684 1191",
      }}
      xmlSpace="preserve"
    >
      <style>
        {
          ".st1{font-family:'Montserrat-SemiBold'}.st2{font-size:27.0547px}.st4{font-size:19.6316px}.st6{font-size:32.2043px}.st7{fill:none;stroke:#9dc41c;stroke-width:6;stroke-linejoin:bevel;stroke-miterlimit:22.9256}.st11{font-size:27px}.st19{font-size:42.966px}"
        }
      </style>
      <g id="Oficinas">
        <path
          id="Color_oficina"
          style={{
            fillRule: "evenodd",
            clipRule: "evenodd",
            fill: Color_sala_no_interactiva,
            stroke: "#000",
            strokeWidth: 6,
            strokeMiterlimit: 10,
          }}
          d="M115.6 209.6h423.2V519l-213.3-1.8.1 171.3-207.2.4v15.4h-2.8z"
        />
        <text transform="matrix(.995 0 0 1 228.72 370.36)" className="st1 st2">
          {"O"}
        </text>
        <text transform="matrix(.995 0 0 1 251.387 370.36)" className="st1 st2">
          {"FICINAS"}
        </text>
        <text transform="matrix(.995 0 0 1 170.106 397.411)" className="st1 st2">
          {"A"}
        </text>
        <text transform="matrix(.995 0 0 1 190.264 397.411)" className="st1 st2">
          {"DMINISTRACI\xD3N"}
        </text>
      </g>
      <g id="Hall_de_exposici\xF3n">
        <g id="ascensor">
          <g id="color_ascensor">
            <path
              style={{
                fillRule: "evenodd",
                clipRule: "evenodd",
                fill: "#5dc1cd",
              }}
              d="m947.5 954.6-13.5-8.9v-30.6h84.9v30.6l-11.3 8.9z"
            />
            <path d="M1016.4 917.6v26.8l-9.7 7.7h-58.5l-11.8-7.8v-26.7h80m5-5h-89.9V947l15.3 10.1h61.7l12.9-10.3v-34.2z" />
          </g>
          <text
            transform="matrix(.7962 0 0 1 939.23 940.366)"
            className="st1 st4"
          >
            {"A"}
          </text>
          <text
            transform="matrix(.7962 0 0 1 950.934 940.366)"
            className="st1 st4"
          >
            {"scensor"}
          </text>
        </g>
        <path
          id="color_hall"
          style={{
            fillRule: "evenodd",
            clipRule: "evenodd",
            fill: Hall.color,
            stroke: "#000",
            strokeWidth: 6,
            strokeMiterlimit: 22.9256,
          }}
          d="M534.3 209.6h598.9V914l-202 2.2.7 73H319.8l.2-75.2H115.6V683.2l206.3-.3-.1-167.9 212.5 1.8z"
        />
        <text transform="translate(661.016 544.304)" className="st1 st6">
          {"P"}
        </text>
        <text transform="translate(684.396 544.304)" className="st1 st6">
          {"LANTA BAJA"}
        </text>
        <text transform="translate(595.236 576.504)" className="st1 st6">
          {"H"}
        </text>
        <text transform="translate(621.326 576.504)" className="st1 st6">
          {"ALL DE EXPOSICI\xD3N"}
        </text>
        <path
          id="entrada_hall-afuera"
          className="st7"
          d="M692.3 987.1H576.4h115.9z"
        />
        <path
          id="entrada_afuera-hall"
          d="M692.3 993.1H576.4h115.9z"
          style={{
            fill: "none",
            stroke: "#fff",
            strokeWidth: 6,
            strokeLinejoin: "bevel",
            strokeMiterlimit: 22.9256,
          }}
        />
        <path
          id="entrada_hall-ascensor"
          className="st7"
          d="M1016.4 913.1zm-80.2 0h80.1-80.1z"
        />
        <path
          id="entrada_ascensor-hall"
          d="M1016.4 917.5zm-79.8 0h79.7-79.7z"
          style={{
            fill: "none",
            stroke: "#5dc1cd",
            strokeWidth: 3,
            strokeLinejoin: "bevel",
            strokeMiterlimit: 22.9256,
          }}
        />
        <image
          style={{
            overflow: "visible",
            enableBackground: "new",
          }}
          width={525}
          height={475}
          id="escalera_hall"
          xlinkHref="3259BF34.png"
          transform="translate(794.711 657.14) scale(.3113)"
        />
        <image
          display={Hall.display}
          style={{
            overflow: "visible",
          }}
          width={384}
          height={652}
          id="astronauta"
          xlinkHref={astronauta}
          transform="translate(731.711 257.031) scale(.3281)"
        />
      </g>
      <g id="Restaurante">
        <path
          id="color_restaurante"
          style={{
            fillRule: "evenodd",
            clipRule: "evenodd",
            fill: Color_sala_no_interactiva,
            stroke: "#000",
            strokeWidth: 6,
            strokeMiterlimit: 10,
          }}
          d="M1132.9 209.6h409.3v284.8h-409.3z"
        />
        <text
          transform="matrix(1.0097 0 0 1 1239.019 356.494)"
          className="st1 st11"
        >
          {"R"}
        </text>
        <text
          transform="matrix(1.0097 0 0 1 1258.95 356.494)"
          className="st1 st11"
        >
          {"ESTAURANTE"}
        </text>
        <path
          id="entrada_restaurante-afuera"
          d="M1259.5 211.4zm-44.2 0h44.3-44.3z"
          style={{
            fill: "none",
            stroke: "#fcec51",
            strokeWidth: 3,
            strokeLinejoin: "bevel",
            strokeMiterlimit: 22.9256,
          }}
        />
        <path
          id="entrada_afuera-resaturante"
          d="M1259.5 208.1zm-44.2 0h44.3-44.3z"
          style={{
            fill: "none",
            stroke: "#fff",
            strokeWidth: 3.5,
            strokeLinejoin: "bevel",
            strokeMiterlimit: 22.9256,
          }}
        />
      </g>
      <g id="salon_restaurante">
        <path
          id="color_salon"
          style={{
            fillRule: "evenodd",
            clipRule: "evenodd",
            fill: Restaurante.color,
            stroke: "#000",
            strokeWidth: 6,
            strokeMiterlimit: 10,
          }}
          d="M1132.9 494.4h409.3v419.5h-409.3z"
        />
        <text transform="translate(1283.764 692.013)" className="st1 st11">
          {"S"}
        </text>
        <text transform="translate(1300.744 692.013)" className="st1 st11">
          {"AL\xD3N"}
        </text>
        <text transform="translate(1228.374 719.013)" className="st1 st11">
          {"R"}
        </text>
        <text transform="translate(1248.114 719.013)" className="st1 st11">
          {"ESTAURANTE"}
        </text>
        <path
          id="entrada_salon-afuera"
          d="M1283.7 911.7zm-84.1 0h84.1-84.1z"
          style={{
            fill: "none",
            stroke: "#f28d53",
            strokeWidth: 3,
            strokeLinejoin: "bevel",
            strokeMiterlimit: 22.9256,
          }}
        />
        <path
          id="entrada_afuera-salon"
          d="M1283.7 915.2zm-84.1 0h84.1-84.1z"
          style={{
            fill: "none",
            stroke: "#fff",
            strokeWidth: 4,
            strokeLinejoin: "bevel",
            strokeMiterlimit: 22.9256,
          }}
        />
        <path
          id="entrada_salon-hall"
          d="M1134.9 559.7zm0 83.7v-83.7 83.7z"
          style={{
            fillRule: "evenodd",
            clipRule: "evenodd",
            fill: "#c6d300",
            stroke: "#f28d53",
            strokeWidth: 6,
            strokeLinejoin: "bevel",
            strokeMiterlimit: 22.9256,
          }}
        />
        <path
          id="entrada_hall-salon"
          d="M1130.6 559.7zm0 83.7v-83.7 83.7z"
          style={{
            fillRule: "evenodd",
            clipRule: "evenodd",
            fill: "#c6d300",
            stroke: "#9dc41c",
            strokeWidth: 6,
            strokeLinejoin: "bevel",
            strokeMiterlimit: 22.9256,
          }}
        />
      </g>
      <text transform="translate(616.476 145.111)" className="st1 st19">
        {"E"}
      </text>
      <text transform="translate(645.266 145.111)" className="st1 st19">
        {"DIFICIO CENTRAL"}
      </text>
      <g id="Sanitario">
        <path
          id="color_sanitario"
          style={{
            fillRule: "evenodd",
            clipRule: "evenodd",
            fill: Sanitario.color,
            stroke: "#000",
            strokeWidth: 6,
            strokeMiterlimit: 22.9256,
          }}
          d="M115.6 718.8H320v194.9H115.6z"
        />
        <text transform="translate(132.937 816.223)" className="st1 st11">
          {"S"}
        </text>
        <text transform="translate(149.917 816.223)" className="st1 st11">
          {"ANITARIOS"}
        </text>
      </g>
    </svg>
  )
}
