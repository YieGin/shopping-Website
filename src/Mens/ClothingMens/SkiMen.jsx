import React from "react";
import Image190 from "../../Images/190.jpg";
import Image191 from "../../Images/191.jpg";
import Image192 from "../../Images/192.jpg";
import Image193 from "../../Images/193.jpg";
import Image194 from "../../Images/194.jpg";
import Image195 from "../../Images/195.jpg";
import Image196 from "../../Images/196.jpg";
import Image197 from "../../Images/197.jpg";
import Image198 from "../../Images/198.jpg";
import Image199 from "../../Images/199.jpg";
import Image200 from "../../Images/200.jpg";
import Image201 from "../../Images/201.jpg";
import Image202 from "../../Images/202.jpg";
import Image203 from "../../Images/203.jpg";
import Image204 from "../../Images/204.jpg";
import Image205 from "../../Images/205.jpg";
import ClothingCard from "../ClothingCard";
const ClothingMens = () => {
  const ListComponents = [
    [Image190, "Half Zip Base Layer Top", "£99.99"],
    [Image191, "Core Snow Pants", "£154.99"],
    [Image192, "Cébé Contest Visor Ultimate Helmet", "£144.99"],
    [Image193, "Cébé Attraction Goggles", "£94.99"],
    [Image194, "Cébé Pow MIPS Helmet", "£179.99"],
    [Image195, "Cébé Icone Goggles", "£39.99"],
    [Image196, "Half Zip Base Layer Top", "£39.99"],
    [Image197, "Base Layer Leggings", "£249.99"],
    [Image198, "Ski Radar Pro Puffer Jacket", "£39.99"],
    [Image199, "Half Zip Base Layer Top", "£39.99"],
    [Image200, "Ultimate Rescue Jacket", "£274.99"],
    [Image201, "Ultimate Mountain Rescue Jacket", "£274.99"],
    [Image202, "Ultimate Rescue Jacket", "£274.99"],
    [Image203, "Ultimate Rescue Pants", "£174.99"],
    [Image204, "Half Zip Base Layer Top", "£39.99"],
    [Image205, "Clean Pro Pants", "£129.99"],
  ];
  return (
    <div>
      <div className="content">
        <h2>Men's Ski & Snowboard Collection</h2>
      </div>
      <ClothingCard ClothingCard={ListComponents} />
    </div>
  );
};

export default ClothingMens;
