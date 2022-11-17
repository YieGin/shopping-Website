import React from "react";
import Image401 from "../../ImagesWomen/401.jpg";
import Image402 from "../../ImagesWomen/402.jpg";
import Image403 from "../../ImagesWomen/403.jpg";
import Image404 from "../../ImagesWomen/404.jpg";
import Image405 from "../../ImagesWomen/405.jpg";
import Image406 from "../../ImagesWomen/406.jpg";
import Image407 from "../../ImagesWomen/407.jpg";
import Image408 from "../../ImagesWomen/408.jpg";
import Image409 from "../../ImagesWomen/409.jpg";
import Image410 from "../../ImagesWomen/410.jpg";
import Image411 from "../../ImagesWomen/411.jpg";
import Image412 from "../../ImagesWomen/412.jpg";
import Image413 from "../../ImagesWomen/413.jpg";
import Image414 from "../../ImagesWomen/414.jpg";
import Image415 from "../../ImagesWomen/415.jpg";
import Image416 from "../../ImagesWomen/416.jpg";
import ClothingCard from "../ClothingCard";
const ClothingMens = () => {
  const ListComponents = [
    [Image401, "Chunky Vegan Basket Trainers", "£64.99"],
    [Image402, "Vintage Vegan Basket Low Top Trainers", "£64.99"],
    [Image403, "Chunky Vegan Basket Trainers", "£74.99"],
    [Image404, "Vintage Vegan Basket High Top Trainers", "£74.99"],
    [Image405, "Vintage Vegan Basket High Top Trainers", "£74.99"],
    [Image406, "Chunky Vegan Basket Trainers", "£74.99"],
    [Image407, "Vegan Vintage Basket Low Trainers", "£64.99"],
    [Image408, "Chunky Vegan Basket Trainers", "£74.99"],
    [Image409, "Chunky Vegan Basket Trainers", "£74.99"],
    [Image410, "Vintage Vegan Basket Low Top Trainers", "£64.99"],
    [Image411, "Vintage Vegan Basket Low Top Trainers", "£64.99"],
    [Image412, "Vegan Basket High Top Trainers", "£74.99"],
    [Image413, "Vintage Vegan Basket High Top Trainers", "£74.99"],
    [Image414, "Vegan Basket Low Trainers", "£64.99"],
    [Image415, "Vegan Retro Sleek Trainers", "£54.99"],
    [Image416, "Vegan Retro Sleek Trainers", "£54.99"],
  ];
  return (
    <div>
      <div className="content">
        <h2>Women Vegan Trainers</h2>
      </div>
      <ClothingCard ClothingCard={ListComponents} />
    </div>
  );
};

export default ClothingMens;
