import React from "react";
import HeroSection from "../../HeroSection";
import { homeObjOne, homeObjTwo  } from "./Data";
import Formulario from "./Formulario";
import "./Contactanos.css"

function ContactUs() {
    return (
        <>
        <Formulario/>
        <div className="contactoInfo">
        <HeroSection {...homeObjOne} />
        <HeroSection {...homeObjTwo} />
        </div>
        </>
    );
}

export default ContactUs;
