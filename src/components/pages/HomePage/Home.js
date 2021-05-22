import React from "react";
import HeroSection from "../../HeroSection";
import Pricing from "../../Pricing";
import { homeObjOne, homeObjThree } from "./Data";


function Home() {
    return (
        <>
            <HeroSection {...homeObjOne} />

            <HeroSection {...homeObjThree} />
        </>
    );
}

export default Home;
