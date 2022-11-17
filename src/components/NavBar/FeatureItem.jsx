import React from "react";
import "./styles/featureitem.css";

const FeatureItem = ({ text, svg, dark }) => {
  return (
    <div className="featureitem">
      <div
        className={
          dark ? "featureitem-icon fill-dark" : "featureitem-icon fill-white"
        }
      >
        {svg}
      </div>
      <div className="featureitem-text">{text}</div>
    </div>
  );
};

export default FeatureItem;
