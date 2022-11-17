import React from "react";
import Image174 from "../../Images/174.jpg";
import Image175 from "../../Images/175.jpg";
import Image176 from "../../Images/176.jpg";
import Image177 from "../../Images/177.jpg";
import Image178 from "../../Images/178.jpg";
import Image179 from "../../Images/179.jpg";
import Image180 from "../../Images/180.jpg";
import Image181 from "../../Images/181.jpg";
import Image182 from "../../Images/182.jpg";
import Image183 from "../../Images/183.jpg";
import Image184 from "../../Images/184.jpg";
import Image185 from "../../Images/184.jpg";
import Image186 from "../../Images/185.jpg";
import Image187 from "../../Images/186.jpg";
import Image188 from "../../Images/188.jpg";
import Image189 from "../../Images/189.jpg";
import ClothingCard from "../ClothingCard";
const ClothingMens = () => {
  const ListComponents = [
    [Image174, "Organic Cotton Vintage Core Cargo Shorts", "£39.99"],
    [Image175, "Organic Cotton Vintage Core Cargo Shorts", "£33.99"],
    [Image176, "Organic Cotton Vintage Cargo Shorts", "£31.99"],
    [Image177, "Organic Cotton Vintage Core Cargo Shorts", "£29.99"],
    [Image178, "Run Premium Shorts", "£39.99"],
    [Image179, "Core Relaxed Shorts", "£44.99"],
    [Image180, "Run Premium Layered Shorts", "£49.99"],
    [Image181, "Run Track Shorts", "£35.99"],
    [Image182, "Run Premium Layered Shorts", "£31.99"],
    [Image183, "Code Classic Sweatshorts", "£33.99"],
    [Image184, "Seersucker Drawstring Shorts", "£44.99"],
    [Image185, "Code Classic Sweatshorts", "£34.99"],
    [Image186, "Organic Cotton Vintage Core Cargo Heavy Shorts", "£32.99"],
    [Image187, "Vintage Sunscorched Shorts", "£44.99"],
    [Image188, "Organic Cotton Studios Linen Turn Up Shorts", "£49.99"],
    [Image189, "Organic Cotton Vintage Core Cargo Heavy Shorts", "£39.99"],
  ];
  return (
    <div>
      <div className="content">
        <h2>Men's Shorts</h2>
      </div>
      <ClothingCard ClothingCard={ListComponents} />
    </div>
  );
};

export default ClothingMens;
