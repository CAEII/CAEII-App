// funcion para cambiar el color de una sala y activar el marcador de ser nesesario
function status_color_flag(sala, sala_resaltada, colores) {
    if (sala_resaltada.salida === sala) {
        return(
            {
                color:  colores.color_sala_partida,
                display: "block"
            }    
        );
    };
    if (sala_resaltada.llegada === sala) {
        return(
            {
                color:  colores.color_sala_llegada,
                display: "none"
            }  
        );
    };
    return(
        {
            color:  colores.color_sala_desactivada,
            display: "none"
        }  
    );
}


// funcion para calcular la asistencia
function Asistencia(dias){          
    let cantida_de_actividades = 0;
    for (let i = 0; i < dias.length; i++) {
        cantida_de_actividades += dias[i].actividades.length
    };

    var asistencia = 0      // decalrao la variable asistencia
    dias.map((dia) => {
       return dia.actividades.map((actividad) => actividad.presente === true ? asistencia += 1 : null)       // recorro las actividades y por cada actividad con una propiedad "presente" que sea igual a "true" aumento en uno la variable asistencia
    })

    asistencia = (asistencia * 100) / cantida_de_actividades            // saco el porcentaje de la asistencia
    asistencia = asistencia.toFixed(2);                                 // limito el numero de deciamles a dos
    
    return asistencia
}


// funcion para convertir el valor del getDay() en un string
function Que_dia_es_hoy(){
    const date = new Date()
    const today = date.getDay()

    if (today === 6) {
        return "Sabado"
    };
    if (today === 5) {
        return "Viernes"
    };
    if (today === 4) {
        return "Jueves"
    };
    // if (today === 3) {
    //     return "Miercoles"
    // };
    // if (today === 2) {
    //     return "Martes"
    // };
    // if (today === 1) {
    //     return "Lunes"
    // };
    if (today === 0) {
        return "Domingo"
    };

    // console.error("Este dia no esta contemplado")
    return "Domingo"
}

// funcion para averiguar en que mapa estan las salas relevantes
function en_que_mapa(sala_salida, sala_llegada, listas_de_salas){
    let mapas = [];

    for (const mapa in listas_de_salas) {

        for (let i = 0; i < listas_de_salas[mapa].length; i++) {

            if (listas_de_salas[mapa][i] === sala_salida) {
                mapas.push(mapa)
            };
            if (listas_de_salas[mapa][i] === sala_llegada) {
                mapas.push(mapa)
            };
        };
    };

    // console.log(mapas)
    return mapas
}



exports.status_color_flag = status_color_flag;
exports.Que_dia_es_hoy = Que_dia_es_hoy;
exports.Asistencia = Asistencia;
exports.en_que_mapa = en_que_mapa;