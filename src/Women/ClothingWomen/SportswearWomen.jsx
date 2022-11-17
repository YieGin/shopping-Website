import React from "react";
import Image206 from "../../Images/206.jpg";
import Image207 from "../../Images/207.jpg";
import Image208 from "../../Images/208.jpg";
import Image209 from "../../Images/209.jpg";
import Image210 from "../../Images/210.jpg";
import Image211 from "../../Images/211.jpg";
import Image212 from "../../Images/212.jpg";
import Image213 from "../../Images/213.jpg";
import Image214 from "../../Images/214.jpg";
import Image215 from "../../Images/215.jpg";
import Image216 from "../../Images/216.jpg";
import Image217 from "../../Images/217.jpg";
import Image218 from "../../Images/218.jpg";
import Image219 from "../../Images/219.jpg";
import Image220 from "../../Images/220.jpg";
import Image221 from "../../Images/221.jpg";
import ClothingCard from "../ClothingCard";
const ClothingMens = () => {
  const ListComponents = [
    [Image206, "Waterproof Jacket", "£99.99"],
    [Image207, "Run Premium Shorts", "£44.99"],
    [Image208, "Train Mock Neck Top", "£39.99"],
    [Image209, "Stretch Woven Track Pants", "£59.99"],
    [Image210, "Boxy Puffer Coat", "£149.99"],
    [Image211, "Run Long Sleeve Top", "£44.99"],
    [Image212, "Train Active Logo Short Sleeve T-Shirt", "£22.99"],
    [Image213, "Stretch Woven Track Top", "£69.99"],
    [Image214, "Run Lightweight Waterproof Shell Jacket", "£74.99"],
    [Image215, "Train Mock Neck Logo Top", "£39.99"],
    [Image216, "Run Vest", "£29.99"],
    [Image217, "Train Active Graphic Short Sleeve T-Shirt", "£19.99"],
    [Image218, "Train Premium Short Sleeve T-shirt", "£34.99"],
    [Image219, "Train Hybrid Shorts", "£39.99"],
    [Image220, "Train Mock Neck Top", "£39.99"],
    [Image221, "Boxy Puffer Coat", "£149.99"],
  ];
  return (
    <div>
      <div className="content">
        <h2>Men's Gym Collection</h2>
      </div>
      <ClothingCard ClothingCard={ListComponents} />
    </div>
  );
};

export default ClothingMens;
