const axios = require('axios');

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
    asistencia = asistencia.toFixed(0);                                 // limito el numero de deciamles a dos
    
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

// funcion para comparar la hora de una actividad con la hora actual
function comparo_con_la_hora_actual(HoraString){    //  Tomo como argumento "HoraString" un string que deve seguir este formato: (hora1 - hora2) por ejemplo: "08:00 - 09:00"
    const date = new Date()                         //  creo un objeto Date que me debuelve un objeto con la fecha y hora actual
    const TimeNow = date.toLocaleTimeString()       //  le doy a "TimeNow" el valor de la hora actual

    const inicio = HoraString.slice(0, 5)           //  Le doy a "inicio" el valor de la primera mitad del string hora (esto representa el inicio de la actividad)
    const fin = HoraString.slice(8, 13)             //  Le doy a "fin" el valor de la segunda mitad del string hora (esto representa el fin de la actividad)


    //  comparo la hora actual con las horas de la actividad para saver si esta en progreso, termino o todavia no comienza
    if (TimeNow > inicio && TimeNow < fin) {
        return "En_progreso"
    };
    if (TimeNow > fin) {
        return "Terminada"
    };
    if (TimeNow < inicio) {
        return "Por_iniciar"
    };
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

    mapas = mapas.filter((item,index)=>{
        return mapas.indexOf(item) === index;
    })

    // console.log(mapas)
    return mapas
}



function get_user_data(user) {
    const url = "www.kk.com/" + user

    return axios.get("https://dummy.restapiexample.com/api/v1/employees")
}



exports.status_color_flag = status_color_flag;
exports.Que_dia_es_hoy = Que_dia_es_hoy;
exports.Asistencia = Asistencia;
exports.en_que_mapa = en_que_mapa;
exports.comparo_con_la_hora_actual = comparo_con_la_hora_actual;
exports.get_user_data = get_user_data;