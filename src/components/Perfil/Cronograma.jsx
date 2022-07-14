export default function Cronograma() {
    return (
        <section id="cronograma">
            <div class="title_card_perfil title_cronograma">
                <h2> cronograma </h2>
                <label htmlFor="dia" class="title_text">Día: </label>
                <div class="select" id="dia">
                    <select>
                        <option value="Jueves">Jueves</option>
                        <option value="viernes">Viernes</option>
                        <option value="sabado">Sabado</option>
                        <option value="domingo">Domingo</option>
                    </select>
                </div>
                <p class="title_text"> Pilar: </p>
                <p class="title_text" id="pilar"> Odisea Espacial </p>
            </div>
            <table class="content_cronograma">
                <tr class="conLinea" id="L1">
                    <th>HORARIO</th>
                    <th>ACTIVIDAD</th>
                    <th>LUGAR</th>
                </tr>
                {/* <!-- MAÑANA -->  */}

                <tr id="L2">
                    <td class="hora">8:00 - 9:00</td>
                    <td class="actividad"> kk #1 </td>
                    <td class="lugar linea">
                        <a href="">Aula Magna</a>
                        <div class="line_container" /><div class="line"></div>
                    </td>
                </tr>
                <tr id="L3">
                    <td class="hora">9:00 - 10:30</td>
                    <td class="actividad textoLargo"> kk #2 esta es una kk muy especial por que es una kk de varias lineas </td>
                    <td class="lugar linea">
                        <a href="">Aula Magna</a>
                        <div class="line_container" /><div class="line"></div>
                    </td>
                </tr>
                <tr class="conLinea" id="L3">
                    <td class="hora">10:30 - 11:00</td>
                    <td class="actividad"> kk #3 </td>
                    <td class="lugar linea">
                        <a href="">Aula Magna</a>
                        <div class="line_container" /><div class="line"></div>
                    </td>
                </tr>
                <tr class="conLinea resaltado" id="L4">
                    <td class="hora">11:30 - 13:00</td>
                    <td class="actividad"> ALMUERZO </td>
                    <td class="lugar linea">
                        <a href="">Aula Magna</a>
                        <div class="line_container" /><div class="line"></div>
                    </td>
                </tr>

                {/* <!-- TARDE -->  */}

                <tr id="L5">
                    <td class="hora">13:00 - 14:00</td>
                    <td class="actividad"> kk #4 </td>
                    <td class="lugar linea">
                        <a href="">Aula Magna</a>
                        <div class="line_container" /><div class="line"></div>
                    </td>
                </tr>
                <tr id="L6">
                    <td class="hora">14:00 - 15:30</td>
                    <td class="actividad"> kk #5 </td>
                    <td class="lugar linea">
                        <a href="">Aula Magna</a>
                        <div class="line_container" /><div class="line"></div>
                    </td>
                </tr>
                <tr class="conLinea" id="L7">
                    <td class="hora">15:30 - 18:00</td>
                    <td class="actividad"> kk #6 </td>
                    <td class="lugar linea">
                        <a href="">Aula Magna</a>
                        <div class="line_container" /><div class="line"></div>
                    </td>
                </tr>
                <tr class="conLinea resaltado" id="L8">
                    <td class="hora">18:00 - 21:00</td>
                    <td class="actividad"> TIEMPO LIBRE </td>
                    <td class="lugar"></td>
                </tr>

                {/* <!-- NOCHE --> */}

                <tr id="L9">
                    <td class="hora">21:00 - 4:00</td>
                    <td class="actividad"> Salida boliche </td>
                    <td class="lugar linea">
                        <a href="">Aula Magna</a>
                        <div class="line_container" /><div class="line"></div>
                    </td>
                </tr>
            </table>
        </section>
    )
}