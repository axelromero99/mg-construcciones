import React from "react";
import HeroSection from "../../HeroSection";
import { homeObjOne, homeObjTwo, homeObjThree  } from "./Data";
import "./ComoTrabajamos.css"

function ComoTrabajamos() {
    return (
        <>
        
        <HeroSection {...homeObjOne}/>
        <HeroSection {...homeObjTwo}/>
        <HeroSection {...homeObjThree}/>
        </>
    );
}

export default ComoTrabajamos;
