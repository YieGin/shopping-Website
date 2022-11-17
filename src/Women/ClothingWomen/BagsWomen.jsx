import React from "react";
import Image273 from "../../Images/273.jpg";
import Image274 from "../../Images/274.jpg";
import Image275 from "../../Images/275.jpg";
import Image276 from "../../Images/276.jpg";
import Image277 from "../../Images/277.jpg";
import Image278 from "../../Images/278.jpg";
import Image279 from "../../Images/279.jpg";
import Image280 from "../../Images/280.jpg";
import Image281 from "../../Images/281.jpg";
import Image282 from "../../Images/282.jpg";
import Image283 from "../../Images/283.jpg";
import Image284 from "../../Images/284.jpg";
import Image285 from "../../Images/285.jpg";
import Image286 from "../../Images/286.jpg";
import Image287 from "../../Images/287.jpg";
import Image288 from "../../Images/288.jpg";
import ClothingCard from "../ClothingCard";
const ClothingMens = () => {
  const ListComponents = [
    [Image273, "Classic Montana Rucksack", "£54.99"],
    [Image274, "Rolltop Backpack", "£39.99"],
    [Image275, "Graphic Montana Backpack", "£54.99"],
    [Image276, "Rolltop Backpack", "£39.99"],
    [Image277, "Top Handle Backpack", "£44.99"],
    [Image278, "Graphic Montana Backpack", "£39.99"],
    [Image279, "Top Handle Backpack", "£54.99"],
    [Image280, "Suika Duffle Bag", "£39.99"],
    [Image281, "Graphic Montana Backpack", "£59.99"],
    [Image282, "Top Handle Backpack", "£44.99"],
    [Image283, "Classic Montana Rucksack", "£49.99"],
    [Image284, "Outdoor Tote Bag", "£44.99"],
    [Image285, "Top Handle Backpack", "£54.99"],
    [Image286, "Outdoor Tote Bag", "£44.99"],
    [Image287, "Top Handle Backpack", "£39.99"],
    [Image288, "Rolltop Backpack", "£44.99"],
  ];
  return (
    <div>
      <div className="content">
        <h2>Women Bags</h2>
      </div>
      <ClothingCard ClothingCard={ListComponents} />
    </div>
  );
};

export default ClothingMens;
