import React from "react";
import "./styles/landingpage.css";
import Landingcard from "./LandingCard";
import Footer from "../Footer/Footer";
import { Parallax } from "react-parallax";
import { useEffect, useState } from "react";
import Image1 from "../../Images/1.jpg";
import Image2 from "../../Images/2.jpg";
import Image3 from "../../Images/3.jpg";
import Image4 from "../../Images/4.jpg";
import Image5 from "../../Images/5.jpg";
import Image6 from "../../Images/6.jpg";
import Image7 from "../../Images/7.png";
import Image8 from "../../Images/8.jpg";
import Image9 from "../../Images/9.jpg";
import Image10 from "../../Images/10.jpg";
import Image11 from "../../Images/11.jpg";
import Image12 from "../../Images/12.jpg";
import Image13 from "../../Images/13.jpg";
import { useMediaQuery } from "react-responsive";

const LandingPage = () => {
  const LandingCard = [
    [Image1, "LONG COATS", "SHOP MENS", "SHOP WOMENS"],
    [Image2, "PUFFER JACKETS", "SHOP MENS", "SHOP WOMENS"],
    [Image3, "WINDBREAKERS", "SHOP MENS", "SHOP WOMENS"],
    [Image4, "BOMBER JACKETS", "SHOP MENS", "SHOP WOMENS"],
    [Image5, "PARKA JACKETS", "SHOP MENS", "SHOP WOMENS"],
    [Image6, "LEARHER JACKETS", "SHOP MENS", "SHOP WOMENS"],
  ];
  const parallaxProps = {
    bgImageStyle: {
      height: "600px",
      width: "100%",
      position: "absolute",
      backfacevisibility: "hidden",
      filter: "none",
      transform: "scale(0.55)",
    },
  };
  const parallaxImage1 = {
    bgImageStyle: {
      height: "650px",
      width: "80%",
      position: "absolute",
    },
  };
  const parallaxImage2 = {
    bgImageStyle: {
      height: "650px",
      width: "80%",
      position: "absolute",
      backfacevisibility: "hidden",
      filter: "none",
      transform: "scale(0.55)",
    },
  };
  return (
    <div className="herosection">
      <div className="LandingVideo-Text">
        <video
          className="LandingVideo"
          autoPlay
          muted
          loop
          src="https://prometheus-prod-media.s3.eu-west-1.amazonaws.com/2022/10/October_6s_No_Audio_1920x874.mp4"
        ></video>
        <div className="Landing-Text-Jacket">
          <div className="YieShopJackets">
            <h2>YieShop</h2>
            <h2>JACKETS WORTH EXPLORING</h2>
          </div>
          <div className="Shoping">
            <a className="Shoping-a">
              <span className="Shoping-span">SHOP MEN</span>
              <i className="Shoping-i"></i>
            </a>
            <a className="Shoping-a">
              <span className="Shoping-span">SHOP WOMEN</span>
              <i className="Shoping-i"></i>
            </a>
          </div>
          <div className="clearpay">
            <h2>clearpay</h2>
            <h3>Shop now. Pay it in 4. Choose Clearpay.</h3>
          </div>
        </div>
      </div>
      <Landingcard Card={LandingCard} />
      <div className="LandingImage-Text">
        <img className="Image7" src={Image7} alt="" />
        <div className="LandingTextJacket">
          <section className="Hoodies-section">
            <div className="Div-Hoodies">
              <h2 className="Hoodies">
                BECOME OUR MODEL BECOME OUR MODEL BECOME OUR MODEL BECOME OUR
                MODEL BECOME OUR MODEL BECOME OUR MODEL BECOME OUR MODEL BECOME
                OUR MODEL BECOME OUR MODEL BECOME OUR MODEL BECOME OUR MODEL
                BECOME OUR MODEL BECOME OUR MODEL BECOME OUR MODEL BECOME OUR
                MODEL BECOME OUR MODEL BECOME OUR MODEL
              </h2>
            </div>
          </section>
        </div>
      </div>
      <div className="Landing-2-Images">
        <Parallax {...parallaxImage1} strength={300} bgImage={Image8}>
          <section className="Images-2-section">
            <div className="Div-Hoodies"></div>
          </section>
        </Parallax>
        <Parallax {...parallaxImage2} strength={300} bgImage={Image9}>
          <section className="Images-2-section">
            <div className="Div-Hoodies"></div>
          </section>
        </Parallax>
      </div>
      <div className="Landing-YieShop">
        <div class="waviy">
          <span className="WANTED" style={{ float: "--i:2" }}>
            MOST WANTED
          </span>
        </div>
      </div>
      <div className="Most-wanted">
        <img className="Most-wanted-Image" src={Image10}></img>
        <img className="Most-wanted-Image" src={Image11}></img>
        <img className="Most-wanted-Image" src={Image12}></img>
        <img className="Most-wanted-Image" src={Image13}></img>
      </div>
    </div>
  );
};

export default LandingPage;
