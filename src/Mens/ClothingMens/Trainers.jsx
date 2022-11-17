import React from "react";
import Image411 from "../../Images/411.jpg";
import Image398 from "../../Images/398.jpg";
import Image406 from "../../Images/406.jpg";
import Image402 from "../../Images/402.jpg";
import Image413 from "../../Images/413.jpg";
import Image414 from "../../Images/414.jpg";
import Image415 from "../../Images/415.jpg";
import Image416 from "../../Images/416.jpg";
import Image417 from "../../Images/417.jpg";
import Image418 from "../../Images/418.jpg";
import Image419 from "../../Images/419.jpg";
import Image420 from "../../Images/420.jpg";
import Image421 from "../../Images/421.jpg";
import Image422 from "../../Images/422.jpg";
import Image423 from "../../Images/423.jpg";
import Image424 from "../../Images/424.jpg";
import ClothingCard from "../ClothingCard";
const ClothingMens = () => {
  const ListComponents = [
    [Image411, "Vintage Vegan Basket High Top Trainers", "£74.99"],
    [Image398, "Chunky Vegan Basket Trainers", "£74.99"],
    [Image406, "Vegan Vintage Basket Low Trainers", "£64.99"],
    [Image402, "Chunky Vegan Basket Trainers", "£74.99"],
    [Image413, "Low Pro Classic Sneakers", "£74.99"],
    [Image414, "Vintage Premium Vegan Basket High Trainers", "£24.99"],
    [Image415, "Low Pro Classic Sneakers", "£74.99"],
    [Image416, "Vegan Basket Lux Trainers", "£64.99"],
    [Image417, "Vegan Retro Sleek Trainers", "£44.99"],
    [Image418, "Vegan Retro Sleek Trainers", "£54.99"],
    [Image419, "Vegan Court Tennis Trainers", "£54.99"],
    [Image420, "Vegan Basket Low Trainers", "£54.99"],
    [Image421, "Vintage Vegan Basket Low Top Trainers", "£74.99"],
    [Image422, "Chunky Vegan Basket Trainers", "£79.99"],
    [Image423, "Vegan Vintage Basket Low Trainers", "£64.99"],
    [Image424, "Chunky Vegan Basket Trainers", "£74.99"],
  ];
  return (
    <div>
      <div className="content">
        <h2>Women's Trainers</h2>
      </div>
      <ClothingCard ClothingCard={ListComponents} />
    </div>
  );
};

export default ClothingMens;
