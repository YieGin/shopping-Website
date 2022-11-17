import React from "react";
import Image30 from "../../Images/30.jpg";
import Image31 from "../../Images/31.jpg";
import Image32 from "../../Images/32.jpg";
import Image33 from "../../Images/33.jpg";
import Image34 from "../../Images/34.jpg";
import Image35 from "../../Images/35.jpg";
import Image36 from "../../Images/36.jpg";
import Image37 from "../../Images/37.jpg";
import Image38 from "../../Images/38.jpg";
import Image39 from "../../Images/39.jpg";
import Image40 from "../../Images/40.jpg";
import Image41 from "../../Images/41.jpg";
import Image42 from "../../Images/42.jpg";
import Image43 from "../../Images/43.jpg";
import Image44 from "../../Images/44.jpg";
import Image45 from "../../Images/45.jpg";
import ClothingCard from "../ClothingCard";
const ClothingMens = () => {
  const ListComponents = [
    [Image30, "Sports Puffer Hooded Jacket", "£89.99"],
    [Image31, "Microfibre Mountain Puffer Jacket", "£89.99"],
    [Image32, "Hooded Classic Puffer Jacket", "£89.99"],
    [Image33, "Sports Puffer Hooded Jacket", "£84.99"],
    [Image34, "Hooded Classic Puffer Jacket", "£89.99"],
    [Image35, "Detachable Lining Wool Town Coat", "£174.99"],
    [Image36, "Microfibre Mountain Puffer Jacket", "£89.99"],
    [Image37, "Ultimate SD Windcheater Jacket", "£94.99"],
    [Image38, "Ripstop Longline Puffer Jacket", "£129.99"],
    [Image39, "Everest Hooded Puffer Gilet", "£89.99"],
    [Image40, "Mountain Puffer Jacket", "£109.99"],
    [Image41, "Everest Hooded Puffer Gilet", "£89.99"],
    [Image42, "Everest Hooded Puffer Jacket", "£99.99"],
    [Image43, "Logo Hooded Longline Coat", "£129.99"],
    [Image44, "Non Hooded Sports Puffer Jacket", "£89.99"],
    [Image45, "Everest Hooded Puffer Jacket", "£99.99"],
  ];
  return (
    <div>
      <div className="content">
        <h2>Men's Jackets & Coats</h2>
      </div>
      <ClothingCard ClothingCard={ListComponents} />
    </div>
  );
};

export default ClothingMens;
