import React from "react";
import Image385 from "../../ImagesWomen/385.jpg";
import Image386 from "../../ImagesWomen/386.jpg";
import Image387 from "../../ImagesWomen/387.jpg";
import Image388 from "../../ImagesWomen/388.jpg";
import Image389 from "../../ImagesWomen/389.jpg";
import Image390 from "../../ImagesWomen/390.jpg";
import Image391 from "../../ImagesWomen/391.jpg";
import Image392 from "../../ImagesWomen/392.jpg";
import Image393 from "../../ImagesWomen/393.jpg";
import Image394 from "../../ImagesWomen/394.jpg";
import Image395 from "../../ImagesWomen/395.jpg";
import Image396 from "../../ImagesWomen/396.jpg";
import Image397 from "../../ImagesWomen/397.jpg";
import Image398 from "../../ImagesWomen/398.jpg";
import Image399 from "../../ImagesWomen/399.jpg";
import Image400 from "../../ImagesWomen/400.jpg";
import ClothingCard from "../ClothingCard";
const ClothingMens = () => {
  const ListComponents = [
    [Image385, "Vegan Basket Low Trainers", "£64.99"],
    [Image386, "Vintage Premium Vegan Basket High Trainers", "£64.99"],
    [Image387, "Chunky Vegan Basket Trainers", "£74.99"],
    [Image388, "Vintage Vegan Basket Low Top Trainers", "£64.99"],
    [Image389, "Vegan Basket Lux Trainers", "£74.99"],
    [Image390, "Vegan Retro Sleek Trainers", "£54.99"],
    [Image391, "Chunky Vegan Basket Trainers", "£74.99"],
    [Image392, "Vintage Vegan Basket High Top Trainers", "£74.99"],
    [Image393, "Chunky Vegan Basket Trainers", "£74.99"],
    [Image394, "Vegan Vintage Basket Low Trainers", "£64.99"],
    [Image395, "Vegan Basket Lux Trainers", "£74.99"],
    [Image396, "Vegan Retro Sleek Trainers", "£54.99"],
    [Image397, "Vintage Vegan Basket High Top Trainers", "£74.99"],
    [Image398, "Chunky Vegan Basket Trainers", "£74.99"],
    [Image399, "Vegan Retro Track Runner Shoes", "£54.99"],
    [Image400, "Vegan Retro Sleek Trainers", "£54.99"],
  ];
  return (
    <div>
      <div className="content">
        <h2>Women Trainers</h2>
      </div>
      <ClothingCard ClothingCard={ListComponents} />
    </div>
  );
};

export default ClothingMens;
