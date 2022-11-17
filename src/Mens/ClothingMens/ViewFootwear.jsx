import React from "react";
import Image398 from "../../Images/398.jpg";
import Image399 from "../../Images/399.jpg";
import Image400 from "../../Images/400.jpg";
import Image401 from "../../Images/401.jpg";
import Image402 from "../../Images/402.jpg";
import Image403 from "../../Images/403.jpg";
import Image404 from "../../Images/404.jpg";
import Image405 from "../../Images/405.jpg";
import Image406 from "../../Images/406.jpg";
import Image407 from "../../Images/407.jpg";
import Image408 from "../../Images/408.jpg";
import Image409 from "../../Images/409.jpg";
import Image410 from "../../Images/410.jpg";
import Image411 from "../../Images/411.jpg";
import Image412 from "../../Images/412.jpg";
import Image413 from "../../Images/413.jpg";
import ClothingCard from "../ClothingCard";
const ClothingMens = () => {
  const ListComponents = [
    [Image398, "Chunky Vegan Basket Trainers", "£74.99"],
    [Image399, "Vintage Vegan Basket High Top Trainers", "£74.99"],
    [Image400, "Chunky Vegan Basket Trainers", "£74.99"],
    [Image401, "Vintage Vegan Basket High Top Trainers", "£74.99"],
    [Image402, "Chunky Vegan Basket Trainers", "£74.99"],
    [Image403, "Vintage Vegan Basket High Top Trainers", "£74.99"],
    [Image404, "Vegan Basket Low Top Trainers", "£74.99"],
    [Image405, "Vintage Vegan Basket High Top Trainers", "£74.99"],
    [Image406, "Vegan Basket Low Top Trainers", "£74.99"],
    [Image407, "Chunky Vegan Basket Trainers", "£74.99"],
    [Image408, "Vegan Retro Sleek Trainer", "£74.99"],
    [Image409, "Vegan Basket Low Top Trainers", "£74.99"],
    [Image410, "Vegan Basket Low Top Sport Trainers", "£74.99"],
    [Image411, "Vintage Vegan Basket High Top Trainers", "£74.99"],
    [Image412, "Vegan Basket Low Top Sport Trainers", "£74.99"],
    [Image413, "Vegan Basket High Top Sport Trainers", "£74.99"],
  ];
  return (
    <div>
      <div className="content">
        <h2>Men's Footwear</h2>
      </div>
      <ClothingCard ClothingCard={ListComponents} />
    </div>
  );
};

export default ClothingMens;
