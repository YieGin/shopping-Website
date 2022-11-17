import React from "react";
import "./ClothingCard.css";
const ClothingCard = ({ ClothingCard }) => {
  return (
    <div className="cards">
      {ClothingCard.map((ListClothing) => (
        <div>
          <div className="card">
            <div className="image-container">
              <img src={ListClothing[0]}></img>
            </div>
            <div className="card-footer">
              <h4>{ListClothing[1]}</h4>
              <h4 className="Price">
                {ListClothing[2]}
                <span>&rarr;</span>
              </h4>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ClothingCard;
