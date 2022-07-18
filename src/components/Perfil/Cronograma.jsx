export default function Cronograma() {
    return (
        <section id="cronograma">
            <div className="title_card_perfil title_cronograma">
                <h2> cronograma </h2>
                <label htmlFor="dia" className="title_text">Día: </label>
                <div className="select" id="dia">
                    <select>
                        <option value="Jueves">Jueves</option>
                        <option value="viernes">Viernes</option>
                        <option value="sabado">Sabado</option>
                        <option value="domingo">Domingo</option>
                    </select>
                </div>
                <p className="title_text"> Pilar: </p>
                <p className="title_text" id="pilar"> Odisea Espacial </p>
            </div>
            <table className="content_cronograma">
                <tbody>
                    <tr className="conLinea" id="L1">
                        <th>HORARIO</th>
                        <th>ACTIVIDAD</th>
                        <th>LUGAR</th>
                    </tr>
                    {/* <!-- MAÑANA -->  */}

                    <tr id="L2">
                        <td className="hora">8:00 - 9:00</td>
                        <td className="actividad"> kk #1 </td>
                        <td className="lugar linea">
                            <a href="">Aula Magna</a>
                            <div className="line_container" /><div className="line"></div>
                        </td>
                    </tr>
                    <tr id="L3">
                        <td className="hora">9:00 - 10:30</td>
                        <td className="actividad textoLargo"> kk #2 esta es una kk muy especial por que es una kk de varias lineas </td>
                        <td className="lugar linea">
                            <a href="">Aula Magna</a>
                            <div className="line_container" /><div className="line"></div>
                        </td>
                    </tr>
                    <tr className="conLinea" id="L3">
                        <td className="hora">10:30 - 11:00</td>
                        <td className="actividad"> kk #3 </td>
                        <td className="lugar linea">
                            <a href="">Aula Magna</a>
                            <div className="line_container" /><div className="line"></div>
                        </td>
                    </tr>
                    <tr className="conLinea resaltado" id="L4">
                        <td className="hora">11:30 - 13:00</td>
                        <td className="actividad"> ALMUERZO </td>
                        <td className="lugar linea">
                            <a href="">Aula Magna</a>
                            <div className="line_container" /><div className="line"></div>
                        </td>
                    </tr>

                    {/* <!-- TARDE -->  */}

                    <tr id="L5">
                        <td className="hora">13:00 - 14:00</td>
                        <td className="actividad"> kk #4 </td>
                        <td className="lugar linea">
                            <a href="">Aula Magna</a>
                            <div className="line_container" /><div className="line"></div>
                        </td>
                    </tr>
                    <tr id="L6">
                        <td className="hora">14:00 - 15:30</td>
                        <td className="actividad"> kk #5 </td>
                        <td className="lugar linea">
                            <a href="">Aula Magna</a>
                            <div className="line_container" /><div className="line"></div>
                        </td>
                    </tr>
                    <tr className="conLinea" id="L7">
                        <td className="hora">15:30 - 18:00</td>
                        <td className="actividad"> kk #6 </td>
                        <td className="lugar linea">
                            <a href="">Aula Magna</a>
                            <div className="line_container" /><div className="line"></div>
                        </td>
                    </tr>
                    <tr className="conLinea resaltado" id="L8">
                        <td className="hora">18:00 - 21:00</td>
                        <td className="actividad"> TIEMPO LIBRE </td>
                        <td className="lugar"></td>
                    </tr>

                    {/* <!-- NOCHE --> */}

                    <tr id="L9">
                        <td className="hora">21:00 - 4:00</td>
                        <td className="actividad"> Salida boliche </td>
                        <td className="lugar linea">
                            <a href="">Aula Magna</a>
                            <div className="line_container" /><div className="line"></div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </section>
    )
}