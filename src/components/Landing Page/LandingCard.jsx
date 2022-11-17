import React from "react";
import "./styles/LandingCard.css";
const LandingCard = ({ Card }) => {
  return (
    <div className="LandingCard">
      {Card.map((cardlanding) => (
        <div className="LandingCard-column">
          <img className="Image-Card" src={cardlanding[0]}></img>
          <h3 className="Card-Text">{cardlanding[1]}</h3>
          <div className="Shop-men-Women-box">
            <a className="Shoping-a-Bigger">
              <span className="Shoping-span">SHOP MENS</span>
              <i className="Shoping-i"></i>
            </a>
            <a className="Shoping-a-Bigger">
              <span className="Shoping-span">SHOP WOMEN</span>
              <i className="Shoping-i"></i>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LandingCard;
