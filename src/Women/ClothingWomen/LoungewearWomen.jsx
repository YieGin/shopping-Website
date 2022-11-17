import React from "react";
import Image177 from "../../ImagesWomen/177.jpg";
import Image178 from "../../ImagesWomen/178.jpg";
import Image179 from "../../ImagesWomen/179.jpg";
import Image180 from "../../ImagesWomen/180.jpg";
import Image181 from "../../ImagesWomen/181.jpg";
import Image182 from "../../ImagesWomen/182.jpg";
import Image183 from "../../ImagesWomen/183.jpg";
import Image184 from "../../ImagesWomen/184.jpg";
import Image185 from "../../ImagesWomen/185.jpg";
import Image186 from "../../ImagesWomen/186.jpg";
import Image187 from "../../ImagesWomen/187.jpg";
import Image188 from "../../ImagesWomen/188.jpg";
import Image189 from "../../ImagesWomen/189.jpg";
import Image190 from "../../ImagesWomen/190.jpg";
import Image191 from "../../ImagesWomen/191.jpg";
import Image192 from "../../ImagesWomen/192.jpg";
import ClothingCard from "../ClothingCard";
const ClothingMens = () => {
  const ListComponents = [
    [Image177, "Satin Sleepwear Long Sleeve Shirt", "£39.99"],
    [Image178, "Satin Sleepwear Pant", "£39.99"],
    [Image179, "Satin Sleepwear Robe", "£59.99"],
    [Image180, "Satin Sleepwear Shorts", "£34.99"],
    [Image181, "Core Sport T-Shirt", "£19.99"],
    [Image182, "Script Graphic Oversized Hoodie", "£54.99"],
    [Image183, "Slub Jersey V-Neck T-Shirt", "£19.99"],
    [Image184, "Essential Borg Lined Zip Hoodie", "£64.99"],
    [Image185, "Modal Soft Hoodie", "£59.99"],
    [Image186, "Modal Soft Joggers", "£54.99"],
    [Image187, "Code S Logo Velour Track Top", "£59.99"],
    [Image188, "Code Velour Jogger", "£54.99"],
    [Image189, "Satin Sleepwear Long Sleeve Shirt", "£39.99"],
    [Image190, "Satin Sleepwear Pant", "£39.99"],
    [Image191, "Satin Sleepwear Short Sleeve Shirt", "£34.99"],
    [Image192, "Satin Sleepwear Shorts", "£24.99"],
  ];
  return (
    <div>
      <div className="content">
        <h2>Women Loungewear & Casualwear</h2>
      </div>
      <ClothingCard ClothingCard={ListComponents} />
    </div>
  );
};

export default ClothingMens;
