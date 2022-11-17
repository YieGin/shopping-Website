import React from "react";
import Image426 from "../../Images/426.jpg";
import Image427 from "../../Images/427.jpg";
import Image428 from "../../Images/428.jpg";
import Image429 from "../../Images/429.jpg";
import Image430 from "../../Images/430.jpg";
import Image431 from "../../Images/431.jpg";
import Image432 from "../../Images/432.jpg";
import Image433 from "../../Images/433.jpg";
import Image434 from "../../Images/434.jpg";
import Image435 from "../../Images/435.jpg";
import Image436 from "../../Images/436.jpg";
import Image437 from "../../Images/437.jpg";
import Image438 from "../../Images/438.jpg";
import Image439 from "../../Images/439.jpg";
import Image440 from "../../Images/440.jpg";
import Image441 from "../../Images/441.jpg";
import ClothingCard from "../ClothingCard";
const ClothingMens = () => {
  const ListComponents = [
    [Image426, "Vintage Vegan Basket High Top Trainers", "£74.99"],
    [Image427, "Chunky Vegan Basket Trainers", "£74.99"],
    [Image428, "Vintage Vegan Basket High Top Trainers", "£74.99"],
    [Image429, "Chunky Vegan Basket Trainers", "£74.99"],
    [Image430, "Vegan Basket Sport Low Trainers", "£64.99"],
    [Image431, "Vegan Basket Lux Low Trainers", "£64.99"],
    [Image432, "Vegan Retro Sleek Trainer", "£54.99"],
    [Image433, "Vegan Basket Lux Low Trainers", "£54.99"],
    [Image434, "Vintage Vegan Basket High Top Trainers", "£64.99"],
    [Image435, "Chunky Vegan Basket Trainers", "£74.99"],
    [Image436, "Vegan Basket High Top Sport Trainers", "£74.99"],
    [Image437, "Vegan Basket Low Top Trainers", "£74.99"],
    [Image438, "Vegan Basket Sport Low Trainers", "£64.99"],
    [Image439, "Vegan Retro Sleek Trainer", "£54.99"],
    [Image440, "Vegan Basket Low Top Trainers", "£64.99"],
    [Image441, "Vegan Retro Track Runner Shoes", "£54.99"],
  ];
  return (
    <div>
      <div className="content">
        <h2>Men's Vegan Trainers</h2>
      </div>
      <ClothingCard ClothingCard={ListComponents} />
    </div>
  );
};

export default ClothingMens;
