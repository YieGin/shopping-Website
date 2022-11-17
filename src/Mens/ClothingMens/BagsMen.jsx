import React from "react";
import Image286 from "../../Images/286.jpg";
import Image287 from "../../Images/287.jpg";
import Image288 from "../../Images/288.jpg";
import Image289 from "../../Images/289.jpg";
import Image290 from "../../Images/290.jpg";
import Image291 from "../../Images/291.jpg";
import Image292 from "../../Images/292.jpg";
import Image293 from "../../Images/293.jpg";
import Image294 from "../../Images/294.jpg";
import Image295 from "../../Images/295.jpg";
import Image296 from "../../Images/296.jpg";
import Image297 from "../../Images/297.jpg";
import Image298 from "../../Images/298.jpg";
import Image299 from "../../Images/299.jpg";
import Image300 from "../../Images/300.jpg";
import Image301 from "../../Images/301.jpg";
import ClothingCard from "../ClothingCard";
const ClothingMens = () => {
  const ListComponents = [
    [Image286, "Mountain Tarp Graphic Backpack", "£54.99"],
    [Image287, "Unisex Essential Montana Backpack", "£39.99"],
    [Image288, "Mountain Tarp Graphic Backpack", "£54.99"],
    [Image289, "Graphic Montana Backpack", "£39.99"],
    [Image290, "Top Handle Backpack", "£44.99"],
    [Image291, "Graphic Montana Backpack", "£39.99"],
    [Image292, "Code Tarp Backpack", "£54.99"],
    [Image293, "Unisex Essential Montana Backpack", "£39.99"],
    [Image294, "Rolltop Backpack", "£59.99"],
    [Image295, "Top Handle Backpack", "£44.99"],
    [Image296, "Graphic Montana Backpack", "£49.99"],
    [Image297, "Rolltop Backpack", "£44.99"],
    [Image298, "Code Tarp Backpack", "£54.99"],
    [Image299, "Pure Montana Rucksack", "£44.99"],
    [Image300, "Unisex Essential Montana Backpack", "£39.99"],
    [Image301, "Toploader Backpack", "£44.99"],
  ];
  return (
    <div>
      <div className="content">
        <h2>Men's Bags</h2>
      </div>
      <ClothingCard ClothingCard={ListComponents} />
    </div>
  );
};

export default ClothingMens;
