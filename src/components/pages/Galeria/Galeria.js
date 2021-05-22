import React from "react";
import Layout from "./Layout/Layout";
import { SRLWrapper } from "simple-react-lightbox";
import "./Galeria.css"

import img01 from "./Images/1.jpg";
import img02 from "./Images/2.jpg";
import img03 from "./Images/3.jpg";
import img04 from "./Images/4.jpg";
import img05 from "./Images/5.jpg";

import { fadeIn, fadeInRight,fadeInLeft } from 'react-animations';
import Radium, {StyleRoot} from 'radium';

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

const options = {
  buttons: {
    backgroundColor: "black",
    iconColor: "white"
  },
  settings: {
    overlayColor: "#ffbc00",
    transitionSpeed: 1000,
    transitionTimingFunction: "linear"
  },
  thumbnails: {
    thumbnailsSize: ["120px", "100px"],
    thumbnailsOpacity: 0.4
  },
  caption: {
    captionColor: "rgba(241, 191, 152, 1)"
  },
  progressBar: {
    size: "4px",
    backgroundColor: "rgba(255, 237, 225, 1)",
    fillColor: "#AF9AB2"
  }
};

const GalleryWithThumbnails = () => {

  return (
    <StyleRoot>
    <Layout>
      
      <SRLWrapper options={options}>
        <div id="gallery-with-links" className="content" >
          <div className="row">
            <div className="col-md-4 col-6 col-image-with-link imgGaleria" >
              <a href={img01} >
                <img
                  src={img01}
                  alt=""
                />
              </a>
            </div>
            <div className="col-md-4 col-6 col-image-with-link imgGaleria">
              <a href={img02} style={styles.fadeInRight}>
                <img
                  src={img02}
                  alt=""
                />
              </a>
            </div>
            <div className="col-md-4 col-6 col-image-with-link imgGaleria">
              <a href={img03}>
                <img
                  src={img03}
                  alt=""
                />
              </a>
            </div>
            <div className="col-md-4 col-6 col-image-with-link imgGaleria">
              <a href={img04}>
                <img
                  src={img04}
                  alt=""
                />
              </a>
            </div>
            <div className="col-md-4 col-6 col-image-with-link imgGaleria">
              <a href={img05}>
                <img
                  src={img05}
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </SRLWrapper>
    </Layout>
    </StyleRoot>
  );
};

export default GalleryWithThumbnails;
