import React from "react";
import Image496 from "../../ImagesWomen/496.jpg";
import Image497 from "../../ImagesWomen/497.jpg";
import Image498 from "../../ImagesWomen/498.jpg";
import Image499 from "../../ImagesWomen/499.jpg";
import Image500 from "../../ImagesWomen/500.jpg";
import Image501 from "../../ImagesWomen/501.jpg";
import Image502 from "../../ImagesWomen/502.jpg";
import Image503 from "../../ImagesWomen/503.jpg";
import Image504 from "../../ImagesWomen/504.jpg";
import Image505 from "../../ImagesWomen/505.jpg";
import Image506 from "../../ImagesWomen/506.jpg";
import Image507 from "../../ImagesWomen/507.jpg";
import Image508 from "../../ImagesWomen/508.jpg";
import Image509 from "../../ImagesWomen/509.jpg";
import Image510 from "../../ImagesWomen/510.jpg";
import Image511 from "../../ImagesWomen/511.jpg";
import ClothingCard from "../ClothingCard";
const ClothingMens = () => {
  const ListComponents = [
    [Image496, "Hooded Mid Layer Short Jacket", "£94.99"],
    [Image497, "Crop Fairisle Crew Jumper", "£49.99"],
    [Image498, "Microfibre Expedition Longline Parka Coat", "£154.99"],
    [Image499, "Vintage Chevron Polar Fleece Top", "£54.99"],
    [Image500, "90s Terrain Graphic T-Shirt", "£24.99"],
    [Image501, "Organic Cotton Wide Leg Jeans", "£64.99"],
    [Image502, "Chunky Vegan Basket Trainers", "£74.99"],
    [Image503, "Vegan Basket High Top Trainers", "£74.99"],
    [Image504, "Faux Fur Lined Afghan Coat", "£124.99"],
    [Image505, "Vintage Jacquard Mock Neck Jumper", "£54.99"],
    [Image506, "Faux Fur Hooded Mid Length Puffer Jacket", "£104.99"],
    [Image507, "Cord Western Shirt", "£44.99"],
    [Image508, "Code S Logo Velour Track Top", "£59.99"],
    [Image509, "Code Velour Jogger", "£54 .99"],
    [Image510, "Slub Jersey V-Neck T-Shirt", "£19.99"],
    [Image511, "Check Pleat Mini Skirt", "£26.99"],
  ];
  return (
    <div>
      <div className="sqdsqdsq">
        <div className="content">
          <h2>Women Autumn Edit</h2>
        </div>
      </div>
      <ClothingCard ClothingCard={ListComponents} />
    </div>
  );
};

export default ClothingMens;
