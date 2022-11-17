import React from "react";
import Image334 from "../../Images/334.jpg";
import Image335 from "../../Images/335.jpg";
import Image336 from "../../Images/336.jpg";
import Image337 from "../../Images/337.jpg";
import Image338 from "../../Images/338.jpg";
import Image339 from "../../Images/339.jpg";
import Image340 from "../../Images/340.jpg";
import Image341 from "../../Images/341.jpg";
import Image342 from "../../Images/342.jpg";
import Image343 from "../../Images/343.jpg";
import Image344 from "../../Images/344.jpg";
import Image345 from "../../Images/345.jpg";
import Image346 from "../../Images/346.jpg";
import Image347 from "../../Images/347.jpg";
import Image348 from "../../Images/348.jpg";
import Image349 from "../../Images/349.jpg";
import ClothingCard from "../ClothingCard";
const ClothingMens = () => {
  const ListComponents = [
    [Image334, "Studios Premium Ribbed Scarf", "£39.99"],
    [Image335, "Studios Premium Ribbed Scarf", "£39.99"],
    [Image336, "Vintage Logo Classic Scarf", "£19.99"],
    [Image337, "Vintage Logo Classic Scarf", "£19.99"],
    [Image338, "Trawler Cable Scarf", "£19.99"],
    [Image339, "Trawler Cable Scarf", "£29.99"],
    [Image340, "Vintage Logo Classic Scarf", "£29.99"],
    [Image341, "Vintage Logo Classic Scarf", "£19.99"],
    [Image342, "Studio Scarf", "£19.99"],
    [Image343, "Studio Scarf", "£59.99"],
    [Image344, "Vintage Logo Scarf", "£59.99"],
    [Image345, "Vintage Logo Classic Scarf", "£19.99"],
    [Image346, "Orange Label Scarf", "£19.99"],
    [Image347, "Orange Label Scarf", "£19.99"],
    [Image348, "Vintage Logo Scarf", "£19.99"],
    [Image349, "Vintage Logo Classic Scarf", "£19.99"],
  ];
  return (
    <div>
      <div className="content">
        <h2>Men's Scarves</h2>
      </div>
      <ClothingCard ClothingCard={ListComponents} />
    </div>
  );
};

export default ClothingMens;
