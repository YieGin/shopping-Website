import React from "react";
import Image270 from "../../Images/270.jpg";
import Image271 from "../../Images/271.jpg";
import Image272 from "../../Images/272.jpg";
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
import ClothingCard from "../ClothingCard";
const ClothingMens = () => {
  const ListComponents = [
    [Image270, "Mountain Tarp Graphic Backpack", "£54.99"],
    [Image271, "Mountain Tarp Graphic Backpack", "£54.99"],
    [Image272, "Everest Beanie", "£19.99"],
    [Image273, "Everest Beanie", "£19.99"],
    [Image274, "SDR V Generation Sunglasses", "£34.99"],
    [Image275, "Harrison Sunglasses", "£49.99"],
    [Image276, "Leather Belt Gift Box", "£26.99"],
    [Image277, "Leather Belt Gift Box", "£26.99"],
    [Image278, "Mountain Knitted Hat", "£17.99"],
    [Image279, "Unisex Essential Logo Gloves", "£14.99"],
    [Image280, "Radar Beanie", "£19.99"],
    [Image281, "Wool Blend Radar Gloves", "£17.99"],
    [Image282, "Organic Cotton Boxer Dual Logo Double Pack", "£24.99"],
    [Image283, "Organic Cotton Boxers Triple Pack", "£29.99"],
    [Image284, "Coolmax Ankle Socks", "£14.99"],
    [Image285, "Coolmax Ankle Socks", "£14.99"],
  ];
  return (
    <div>
      <div className="content">
        <h2>Men's Accessories</h2>
      </div>
      <ClothingCard ClothingCard={ListComponents} />
    </div>
  );
};

export default ClothingMens;
