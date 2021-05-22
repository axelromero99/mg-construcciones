import React from "react";
import HeroSection from "../../HeroSection";
import Pricing from "../../Pricing";
import { homeObjOne, homeObjThree  } from "./Data";


function QuienesSomos() {
    return (
        <>

            <HeroSection {...homeObjThree} />
            <HeroSection {...homeObjOne} />

        </>
    );
}

export default QuienesSomos;
