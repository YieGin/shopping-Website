import React from "react";
import Image506 from "../../Images/506.jpg";
import Image507 from "../../Images/507.jpg";
import Image508 from "../../Images/508.jpg";
import Image509 from "../../Images/509.jpg";
import Image510 from "../../Images/510.jpg";
import Image511 from "../../Images/511.jpg";
import Image512 from "../../Images/512.jpg";
import Image513 from "../../Images/513.jpg";
import Image514 from "../../Images/514.jpg";
import Image515 from "../../Images/515.jpg";
import Image516 from "../../Images/516.jpg";
import Image517 from "../../Images/517.jpg";
import Image518 from "../../Images/518.jpg";
import Image519 from "../../Images/519.jpg";
import Image520 from "../../Images/520.jpg";
import Image521 from "../../Images/521.jpg";
import ClothingCard from "../ClothingCard";
const ClothingMens = () => {
  const ListComponents = [
    [Image506, "Faux Fur Hooded Everest Parka Jacket", "£139.99"],
    [Image507, "X Surplus Jacquard Jacket", "£55.99"],
    [Image508, "Sports Puffer Hooded Jacket", "£89.99"],
    [Image509, "Mountain SD Windcheater Jacket", "£84.99"],
    [Image510, "Everest Bomber Jacket", "£124.99"],
    [Image511, "Unisex Essential Montana Backpack", "£39.99"],
    [Image512, "Graphic Montana Backpack", "£39.99"],
    [Image513, "Rolltop Backpack", "£59.99"],
    [Image514, "Hooded Everest Faux Fur Parka", "£139.99"],
    [Image515, "Code Sport Lightweight Jacket", "£45.99"],
    [Image516, "Heat Sealed Padded Jacket", "£99.99"],
    [Image517, "Ultimate SD Windcheater Jacket", "£94.99"],
    [Image518, "Classic Tarp Rucksack", "£38.99"],
    [Image519, "Unisex Essential Montana Backpack", "£20.99"],
    [Image520, "Top Handle Backpack", "£44.99"],
    [Image521, "Ripstop Longline Puffer Jacket", "£129.99"],
  ];
  return (
    <div>
      <div className="content">
        <h2>Men's Back To School</h2>
      </div>
      <ClothingCard ClothingCard={ListComponents} />
    </div>
  );
};

export default ClothingMens;
