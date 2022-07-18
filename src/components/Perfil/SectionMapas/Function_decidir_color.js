export default function color_sala(sala, sala_resaltada, colores) {
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