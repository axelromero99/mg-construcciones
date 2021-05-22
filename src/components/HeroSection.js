import React from "react";
import "./HeroSection.css";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import { fadeIn, fadeInRight,fadeInLeft } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import "animate.css/animate.min.css";

import "aos/dist/aos.css"


const styles = {
    fadeIn: {
    animation: 'x 2s',
    animationName: Radium.keyframes(fadeIn, 'fadeIn')
    },
    fadeInRight:{
        animation: 'x 1s',
    animationName: Radium.keyframes(fadeInRight, 'fadeInRight')
    },
    fadeInLeft:{
        animation: 'x 1s',
    animationName: Radium.keyframes(fadeInLeft, 'fadeInLeft')
    }
}

function HeroSection({
    lightBg,
    topLine,
    lightText,
    lightTextDesc,
    headline,
    description,
    buttonLabel,
    img,
    alt,
    imgStart,
    buttonUrl,
}) {
    
    // For loading the image and then fade in
    const [didLoad, setLoad] = React.useState(false);
    const imageDidLoadStyle = didLoad ? {style: styles.fadeIn} : {visibility: 'hidden'};


    return (
        <>
        <StyleRoot  >
            <div
                className={lightBg ? "home__hero-section" : "home__hero-section darkBg"}
            >
                <div className="container">
                    <div
                        className="row home__hero-row"
                        style={{
                            display: "flex",
                            flexDirection: imgStart === "start" ? "row-reverse" : "row",
                        }}
                    >
                        <div className="col" style={styles.fadeIn}>
                            <div className="home__hero-text-wrapper">
                                <div className="top-line">{topLine}</div>
                                <h1 className={lightText ? "heading" : "heading dark"}>
                                    {headline}
                                </h1>
                                <p
                                    className={
                                        lightTextDesc
                                            ? "home__hero-subtitle"
                                            : "home__hero-subtitle dark"
                                    }
                                    
                                >
                                    {description}
                                </p>
                                <Link to={buttonUrl} className={buttonLabel ? "" : "invisible"}>
                                    <Button buttonSize="btn--wide" buttonColor="orange" >
                                        {buttonLabel}
                                    </Button>
                                </Link>
                            </div>
                        </div>
                        <div className="col" >
                            <div className="home__hero-img-wrapper" style={imgStart === "start" ? styles.fadeInLeft : styles.fadeInRight} >
                                <img src={img} alt={alt} onLoad={() => setLoad(true)} className={img ? "home__hero-img" : "invisible"} style={imageDidLoadStyle}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </StyleRoot>
        </>
    );
}



export default HeroSection;
