// React
import { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
// components
import Modal from "./Modals";
// lottie (animacion)
import Lottie from 'react-lottie';
import animationData from './7893-confetti-cannons.json';
// css
import "../../../styles/perfil/css/credencial.css"
// imgs
import Astronauta from "../../../styles/perfil/img/astronauta.png";

export default function Credencial({ nombre, asistencia, id}) {
    
    const info_qr = `https://caeii.com.ar/user/${id}` ;                         // info para codificar en el qr (url de la pag + user/:id, el id es dinamico)

    const [QR_modal_IsOpen, Set_QR_modal_IsOpen] = useState(false)              // estado del modal que contiene el qr
    const [info_modal_IsOpen, Set_info_modal_IsOpen] = useState(false)          // estado del modal que tiene info sobre el certificado


    // reviso si la asistencia del asistente es mayor o igual al 80%
    let asistente_certificado
    if (asistencia >= 80) {
        asistente_certificado = "asistente_certificado"
    } else {
        asistente_certificado = null
    }

    // opciones de la animacion de confeti (lottie)
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        <section id="credencial" className={asistente_certificado}>

            {/* si la asistencia es igual o mayor a 80 muestro la animacion, si no lo es, no mustro nada */}
            {asistencia >= 80 ? <div className="lottie_container"><Lottie options={defaultOptions} height={400} width={400} /></div> : null}

            <Modal id="QR_modal" IsOpen={QR_modal_IsOpen} SetIsOpen={Set_QR_modal_IsOpen}>
               <QR info_qr={info_qr}/>
            </Modal>

            <Modal id="info_modal" IsOpen={info_modal_IsOpen} SetIsOpen={Set_info_modal_IsOpen}>
               <span> <br/><br/> CERTIFICADO OBTENIDO </span>
               <p> Felicitaciones, as llegado al {asistencia}%. pasado un tiempo te enviaremos un E-mail con tu sertificado de asistencia </p>
            </Modal>

            <div className="Credencial_title">
                <h2> {nombre}  </h2>
            </div>

            <div className="top_asistencia">
                <img src={Astronauta} alt="astronauta de caeii" className="astronauta_de_caeii" />
                <div className="asistencia">

                    <button className="circulo_qr" onClick={() => {Set_QR_modal_IsOpen(!QR_modal_IsOpen)}}>
                        <QR info_qr={info_qr}/>
                    </button>

                    <h3 id="porcentaje_asistencia"> ASISTENCIA: <b className={asistente_certificado} >{asistencia}</b>% </h3>
                    <progress id="file" value={asistencia} max="100"></progress>

                </div>
            </div>

            {/* si la asistencia es igual o mayor a 80 muestro el cartel del certificado, si no lo es, no muestro nada */}
            {asistencia >= 80 ? <div className="congratulations_smg_container"><span> ¡MUCHAS GRACIAS POR ASISTIR! </span></div> : null}
        </section>
    )
}


function QR({info_qr}) {
    return(
        <QRCodeSVG
            value={info_qr}
            size={200}
            bgColor={"#ffffff"}
            fgColor={"#9400d4"}
            level={"H"}
            includeMargin={false}
            imageSettings={{
                src: 'https://www.caeii.com.ar/favicon.ico?',
                x: undefined,
                y: undefined,
                height: 60,
                width: 60,
                excavate: false,
            }}
        />
    )
}