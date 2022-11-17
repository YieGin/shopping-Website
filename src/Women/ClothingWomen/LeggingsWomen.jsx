import React from "react";
import Image161 from "../../ImagesWomen/161.jpg";
import Image162 from "../../ImagesWomen/162.jpg";
import Image163 from "../../ImagesWomen/163.jpg";
import Image164 from "../../ImagesWomen/164.jpg";
import Image165 from "../../ImagesWomen/165.jpg";
import Image166 from "../../ImagesWomen/166.jpg";
import Image167 from "../../ImagesWomen/167.jpg";
import Image168 from "../../ImagesWomen/168.jpg";
import Image169 from "../../ImagesWomen/169.jpg";
import Image170 from "../../ImagesWomen/170.jpg";
import Image171 from "../../ImagesWomen/171.jpg";
import Image172 from "../../ImagesWomen/172.jpg";
import Image173 from "../../ImagesWomen/173.jpg";
import Image174 from "../../ImagesWomen/174.jpg";
import Image175 from "../../ImagesWomen/175.jpg";
import Image176 from "../../ImagesWomen/176.jpg";
import ClothingCard from "../ClothingCard";
const ClothingMens = () => {
  const ListComponents = [
    [Image161, "Tech High Waist Leggings", "£39.99"],
    [Image162, "Essential High Waisted Leggings", "£34.99"],
    [Image163, "Tech High Waist Leggings", "£39.99"],
    [Image164, "Core Elastic Highwaist Leggings", "£34.99"],
    [Image165, "Core Elastic Highwaist Leggings", "£39.99"],
    [Image166, "Elastic Logo Graphic Leggings", "£34.99"],
    [Image167, "Core Elastic Highwaist Leggings", "£39.99"],
    [Image168, "Essential High Waisted Leggings", "£39.99"],
    [Image169, "Core Seamless 7/8 Tights", "£39.99"],
    [Image170, "Core 7/8 Tight Leggings", "£34.99"],
    [Image171, "Core Seamless 7/8 Tights", "£39.99"],
    [Image172, "Run Full Length Thermal Tight Leggings", "£39.99"],
    [Image173, "Train Branded Elastic Legging", "£34.99"],
    [Image174, "Core Full Length Leggings", "£34.99"],
    [Image175, "Train Branded Elastic Legging", "£39.99"],
    [Image176, "Core 7/8 Tight Leggings", "£34.99"],
  ];
  return (
    <div>
      <div className="content">
        <h2>Women Leggings</h2>
      </div>
      <ClothingCard ClothingCard={ListComponents} />
    </div>
  );
};

export default ClothingMens;
