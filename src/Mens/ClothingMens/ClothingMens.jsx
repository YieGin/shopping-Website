import React from "react";
import Image14 from "../../Images/14.jpg";
import Image15 from "../../Images/15.jpg";
import Image16 from "../../Images/16.jpg";
import Image17 from "../../Images/17.jpg";
import Image18 from "../../Images/18.jpg";
import Image19 from "../../Images/19.jpg";
import Image20 from "../../Images/20.jpg";
import Image21 from "../../Images/21.jpg";
import Image22 from "../../Images/22.jpg";
import Image23 from "../../Images/23.jpg";
import Image24 from "../../Images/24.jpg";
import Image25 from "../../Images/25.jpg";
import Image26 from "../../Images/26.jpg";
import Image27 from "../../Images/27.jpg";
import Image28 from "../../Images/28.jpg";
import Image29 from "../../Images/29.jpg";
import ClothingCard from "../ClothingCard";
const ClothingMens = () => {
  const ListComponents = [
    [Image14, "Organic Cotton Essential Logo T-Shirt", "£19.99"],
    [Image15, "Organic Cotton Essential Micro Logo T-Shirt", "£19.99"],
    [Image16, "Organic Cotton Essential Micro Logo T-Shirt", "£19.99"],
    [Image17, "Organic Cotton Essential Micro Logo T-Shirt", "£19.99"],
    [Image18, "Organic Cotton Essential Micro Logo T-Shirt", "£19.99"],
    [Image19, "Organic Cotton Essential Micro Logo T-Shirt", "£19.99"],
    [Image20, "Organic Cotton Essential Micro Logo T-Shirt", "£19.99"],
    [Image21, "Organic Cotton Essential Logo T-Shirt", "£19.99"],
    [Image22, "Organic Cotton Essential Micro Logo T-Shirt", "£19.99"],
    [Image23, "Organic Cotton Essential Logo T-Shirt", "£19.99"],
    [Image24, "Organic Cotton Essential Micro Logo T-Shirt", "£19.99"],
    [Image25, "Organic Cotton Essential Logo T-Shirt", "£19.99"],
    [Image26, "Organic Cotton Essential Logo T-Shirt", "£19.99"],
    [Image27, "Organic Cotton Essential Micro Logo T-Shirt", "£19.99"],
    [Image28, "Organic Cotton Essential Micro Logo T-Shirt", "£19.99"],
    [Image29, "Organic Cotton Essential Logo T-Shirt", "£19.99"],
  ];
  return (
    <div>
      <div className="content">
        <h2>3 For £50 Men's Organic T-Shirts</h2>
      </div>
      <ClothingCard ClothingCard={ListComponents} />
    </div>
  );
};

export default ClothingMens;
