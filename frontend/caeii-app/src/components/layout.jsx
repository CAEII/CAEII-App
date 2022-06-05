import React from "react";
import FooterContent from "./footer";
import HeaderBar from "./header";

export default function BaseLayout(props) {
    const { children } = props
    return (
        <React.Fragment>
            <HeaderBar/>
            { children }
            <FooterContent/>
        </React.Fragment>
    )
}