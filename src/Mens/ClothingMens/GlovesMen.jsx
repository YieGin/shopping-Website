import React from "react";
import Image318 from "../../Images/318.jpg";
import Image319 from "../../Images/319.jpg";
import Image320 from "../../Images/320.jpg";
import Image321 from "../../Images/321.jpg";
import Image322 from "../../Images/322.jpg";
import Image323 from "../../Images/323.jpg";
import Image324 from "../../Images/324.jpg";
import Image325 from "../../Images/325.jpg";
import Image326 from "../../Images/326.jpg";
import Image327 from "../../Images/327.jpg";
import Image328 from "../../Images/328.jpg";
import Image329 from "../../Images/329.jpg";
import Image330 from "../../Images/330.jpg";
import Image331 from "../../Images/331.jpg";
import Image332 from "../../Images/332.jpg";
import Image333 from "../../Images/333.jpg";
import ClothingCard from "../ClothingCard";
const ClothingMens = () => {
  const ListComponents = [
    [Image318, "Wool Blend Radar Gloves", "£12.99"],
    [Image319, "Wool Blend Radar Gloves", "£12.99"],
    [Image320, "Unisex Essential Logo Gloves", "£12.99"],
    [Image321, "Unisex Essential Logo Gloves", "£12.99"],
    [Image322, "Radar Gloves", "£12.99"],
    [Image323, "Radar Gloves", "£12.99"],
    [Image324, "Unisex Essential Logo Gloves", "£12.99"],
    [Image325, "Unisex Essential Logo Gloves", "£12.99"],
    [Image326, "Wool Blend Radar Gloves", "£12.99"],
    [Image327, "Wool Blend Radar Gloves", "£12.99"],
    [Image328, "Essential Plain Gloves", "£12.99"],
    [Image329, "Essential Plain Gloves", "£12.99"],
    [Image330, "Essential Plain Gloves", "£12.99"],
    [Image331, "Essential Plain Gloves", "£12.99"],
    [Image332, "Vintage Logo Classic Gloves", "£12.99"],
    [Image333, "Vintage Logo Classic Gloves", "£12.99"],
  ];
  return (
    <div>
      <div className="content">
        <h2>3 For £50 Men's Organic T-Shirts</h2>
      </div>
      <ClothingCard ClothingCard={ListComponents} />
    </div>
  );
};

export default ClothingMens;
