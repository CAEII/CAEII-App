// React
import React from "react";
// Components
import FooterContent from "./footer";
import HeaderBar from "./header";
import Vanidad from "./Componenete_de_la_vanidad";

export default function BaseLayout(props) {
    const { children } = props
    return (
        <React.Fragment>
            <HeaderBar/>
            { children }
            <FooterContent/>
            <Vanidad/>
        </React.Fragment>
    )
}