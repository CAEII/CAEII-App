import { useEffect } from "react";
import { useState } from "react";
import Sponsors from "./sponsors";

export default function Prueba() {
    return(
        <div>
            <Sponsors type="exclusive"/>
            <Sponsors type="premium"/>
            <Sponsors type="gold"/>
        </div>
    )
}