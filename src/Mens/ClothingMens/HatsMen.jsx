import React from "react";
import Image302 from "../../Images/302.jpg";
import Image303 from "../../Images/303.jpg";
import Image304 from "../../Images/304.jpg";
import Image305 from "../../Images/305.jpg";
import Image306 from "../../Images/306.jpg";
import Image307 from "../../Images/307.jpg";
import Image308 from "../../Images/308.jpg";
import Image309 from "../../Images/309.jpg";
import Image310 from "../../Images/310.jpg";
import Image311 from "../../Images/311.jpg";
import Image312 from "../../Images/312.jpg";
import Image313 from "../../Images/313.jpg";
import Image314 from "../../Images/314.jpg";
import Image315 from "../../Images/315.jpg";
import Image316 from "../../Images/316.jpg";
import Image317 from "../../Images/317.jpg";
import ClothingCard from "../ClothingCard";
const ClothingMens = () => {
  const ListComponents = [
    [Image302, "Trawler Cable Beanie", "£19.99"],
    [Image303, "Trawler Cable Beanie", "£19.99"],
    [Image304, "Unisex Worker Beanie", "£16.99"],
    [Image305, "Unisex Worker Beanie", "£16.99"],
    [Image306, "Radar Beanie", "£19.99"],
    [Image307, "Radar Beanie", "£19.99"],
    [Image308, "Logo Beanie", "£19.99"],
    [Image309, "Logo Beanie", "£19.99"],
    [Image310, "Graphic Trucker Cap", "£22.99"],
    [Image311, "Marker Trucker Cap", "£22.99"],
    [Image312, "Vintage Embroidered Cap", "£22.99"],
    [Image313, "Graphic Trucker Cap", "£22.99"],
    [Image314, "Everest Beanie", "£19.99"],
    [Image315, "Everest Beanie", "£19.99"],
    [Image316, "Unisex Worker Beanie", "£16.99"],
    [Image317, "Essential Logo Beanie", "£17.99"],
  ];
  return (
    <div>
      <div className="content">
        <h2>Men's Hats</h2>
      </div>
      <ClothingCard ClothingCard={ListComponents} />
    </div>
  );
};

export default ClothingMens;
