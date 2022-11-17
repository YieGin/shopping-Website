import React from "react";
import "./styles/item.css";

const Item = ({ image, text, link }) => {
  return (
    <a href={link} target="_blank">
      <div className="item">
        <img className="item-image" src={image} />
        <div className="item-text">{text}</div>
      </div>
    </a>
  );
};

export default Item;
