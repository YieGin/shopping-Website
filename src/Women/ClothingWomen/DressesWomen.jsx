import React from "react";
import Image49 from "../../ImagesWomen/49.jpg";
import Image50 from "../../ImagesWomen/50.jpg";
import Image51 from "../../ImagesWomen/51.jpg";
import Image52 from "../../ImagesWomen/52.jpg";
import Image53 from "../../ImagesWomen/53.jpg";
import Image54 from "../../ImagesWomen/54.jpg";
import Image55 from "../../ImagesWomen/55.jpg";
import Image56 from "../../ImagesWomen/56.jpg";
import Image57 from "../../ImagesWomen/57.jpg";
import Image58 from "../../ImagesWomen/58.jpg";
import Image59 from "../../ImagesWomen/59.jpg";
import Image60 from "../../ImagesWomen/60.jpg";
import Image61 from "../../ImagesWomen/61.jpg";
import Image62 from "../../ImagesWomen/62.jpg";
import Image63 from "../../ImagesWomen/63.jpg";
import Image64 from "../../ImagesWomen/64.jpg";
import ClothingCard from "../ClothingCard";
const ClothingMens = () => {
  const ListComponents = [
    [Image49, "Mountain Tarp Graphic Backpack", "£54.99"],
    [Image50, "Unisex Essential Montana Backpack", "£39.99"],
    [Image51, "Mountain Tarp Graphic Backpack", "£54.99"],
    [Image52, "Graphic Montana Backpack", "£39.99"],
    [Image53, "Top Handle Backpack", "£44.99"],
    [Image54, "Graphic Montana Backpack", "£39.99"],
    [Image55, "Code Tarp Backpack", "£54.99"],
    [Image56, "Unisex Essential Montana Backpack", "£39.99"],
    [Image57, "Rolltop Backpack", "£59.99"],
    [Image58, "Top Handle Backpack", "£44.99"],
    [Image59, "Graphic Montana Backpack", "£49.99"],
    [Image60, "Rolltop Backpack", "£44.99"],
    [Image61, "Code Tarp Backpack", "£54.99"],
    [Image62, "Pure Montana Rucksack", "£44.99"],
    [Image63, "Unisex Essential Montana Backpack", "£39.99"],
    [Image64, "Toploader Backpack", "£44.99"],
  ];
  return (
    <div>
      <div className="content">
        <h2>Women Dresses</h2>
      </div>
      <ClothingCard ClothingCard={ListComponents} />
    </div>
  );
};

export default ClothingMens;
