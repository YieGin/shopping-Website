import React from "react";
import Image222 from "../../Images/222.jpg";
import Image223 from "../../Images/223.jpg";
import Image224 from "../../Images/224.jpg";
import Image225 from "../../Images/225.jpg";
import Image226 from "../../Images/226.jpg";
import Image227 from "../../Images/227.jpg";
import Image228 from "../../Images/228.jpg";
import Image229 from "../../Images/229.jpg";
import Image230 from "../../Images/230.jpg";
import Image231 from "../../Images/231.jpg";
import Image232 from "../../Images/232.jpg";
import Image233 from "../../Images/233.jpg";
import Image234 from "../../Images/234.jpg";
import Image235 from "../../Images/235.jpg";
import Image236 from "../../Images/236.jpg";
import Image237 from "../../Images/237.jpg";
import ClothingCard from "../ClothingCard";
const ClothingMens = () => {
  const ListComponents = [
    [Image222, "Studios Swim Shorts", "£24.49"],
    [Image223, "Code Applique 19 inch Swim Shorts", "£24.49"],
    [Image224, "Studios Swim Shorts", "£34.49"],
    [Image225, "Studios Swim Shorts", "£39.49"],
    [Image226, "Classic Board Shorts", "£34.49"],
    [Image227, "Code Applique 19 inch Swim Shorts", "£34.49"],
    [Image228, "Vintage Varsity Swim Shorts", "£24.49"],
    [Image229, "Studios Swim Shorts", "£39.49"],
    [Image230, "Vintage Varsity Swim Shorts", "£39.49"],
    [Image231, "Tri Series Swim Shorts", "£24.49"],
    [Image232, "Studios Swim Shorts", "£24.49"],
    [Image233, "Energy Foil Swim Shorts", "£17.49"],
    [Image234, "Studios Swim Shorts", "£24.49"],
    [Image235, "Vintage Hawaiian Swim Shorts", "£24.49"],
    [Image236, "Studios Swim Shorts", "£24.49"],
    [Image237, "Studios Swim Shorts", "£24.49"],
  ];
  return (
    <div>
      <div className="content">
        <h2>Men's Swim Shorts</h2>
      </div>
      <ClothingCard ClothingCard={ListComponents} />
    </div>
  );
};

export default ClothingMens;
