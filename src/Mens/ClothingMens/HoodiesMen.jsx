import React from "react";
import Image46 from "../../Images/46.jpg";
import Image47 from "../../Images/47.jpg";
import Image48 from "../../Images/48.jpg";
import Image49 from "../../Images/49.jpg";
import Image50 from "../../Images/50.jpg";
import Image51 from "../../Images/51.jpg";
import Image52 from "../../Images/52.jpg";
import Image53 from "../../Images/53.jpg";
import Image54 from "../../Images/54.jpg";
import Image55 from "../../Images/55.jpg";
import Image56 from "../../Images/56.jpg";
import Image57 from "../../Images/57.jpg";
import Image58 from "../../Images/58.jpg";
import Image59 from "../../Images/59.jpg";
import Image60 from "../../Images/60.jpg";
import Image61 from "../../Images/61.jpg";
import ClothingCard from "../ClothingCard";
const ClothingMens = () => {
  const ListComponents = [
    [Image46, "Venue Tonal Hoodie", "£49.99"],
    [Image47, "Essential Borg Lined Zip Hoodie", "£64.99"],
    [Image48, "Embroidered Micro Logo Loose Fit Hoodie", "£49.99"],
    [Image49, "Essential Borg Lined Zip Hoodie", "£64.99"],
    [Image50, "XP-D Graphic Loose Crew Hoodie", "£54.99"],
    [Image51, "Cali Sleeve Stripe Core Logo Hoodie", "£49.99"],
    [Image52, "Classic Graphic Logo Zip Up Hoodie", "£54.99"],
    [Image53, "Essential Borg Lined Zip Hoodie", "£64.99"],
    [Image54, "Essential Borg Lined Zip Hoodie", "£64.99"],
    [Image55, "Vintage Downtown Script Unbrushed Hoodie", "£49.99"],
    [Image56, "Embroidered Micro Logo Loose Fit Hoodie", "£49.99"],
    [Image57, "Essential Borg Lined Zip Hoodie", "£64.99"],
    [Image58, "Essential Hoodie", "£49.99"],
    [Image59, "Organic Cotton Vintage Logo Embroidered", "£49.99"],
    [Image60, "Essential Borg Lined Zip Hoodie", "£64.99"],
    [Image61, "Travel Hoodie", "£49.99"],
  ];
  return (
    <div>
      <div className="content">
        <h2>Men's Hoodies & Sweatshirts</h2>
      </div>
      <ClothingCard ClothingCard={ListComponents} />
    </div>
  );
};

export default ClothingMens;
