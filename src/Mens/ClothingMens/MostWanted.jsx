import React from "react";
import Image490 from "../../Images/490.jpg";
import Image491 from "../../Images/491.jpg";
import Image492 from "../../Images/492.jpg";
import Image493 from "../../Images/493.jpg";
import Image494 from "../../Images/494.jpg";
import Image495 from "../../Images/495.jpg";
import Image496 from "../../Images/496.jpg";
import Image497 from "../../Images/497.jpg";
import Image498 from "../../Images/498.jpg";
import Image499 from "../../Images/499.jpg";
import Image500 from "../../Images/500.jpg";
import Image501 from "../../Images/501.jpg";
import Image502 from "../../Images/502.jpg";
import Image503 from "../../Images/503.jpg";
import Image504 from "../../Images/504.jpg";
import Image505 from "../../Images/505.jpg";
import ClothingCard from "../ClothingCard";
const ClothingMens = () => {
  const ListComponents = [
    [Image490, "Everest Hooded Puffer Jacket", "£99.99"],
    [Image491, "Hooded Classic Puffer Jacket", "£89.99"],
    [Image492, "Everest Bomber Jacket", "£119.99"],
    [Image493, "Everest Hooded Puffer Gilet", "£89.99"],
    [Image494, "Wool Zip Borg Lined Check Overshirt", "£74.99"],
    [Image495, "Organic Cotton Carpenter Jeans", "£74.99"],
    [Image496, "Wool Zip Borg Lined Check Overshirt", "£74.99"],
    [Image497, "Organic Cotton Skinny Jeans", "£19.99"],
    [Image498, "Wool Blend Cable Crew Neck Jumper", "£54.99"],
    [Image499, "Essential Borg Lined Zip Hoodie", "£64.99"],
    [Image500, "Long Sleeve Cotton Jersey Polo Shirt", "£39.99"],
    [Image501, "Vintage Logo Narrative Hoodie", "£54.99"],
    [Image502, "Detachable Lining Wool Town Coat", "£174.99"],
    [Image503, "Borg Lined Miller Overshirt", "£69.99"],
    [Image504, "Organic Cotton Long Sleeve Henley Top", "£29.99"],
    [Image505, "Detachable Lining Wool Town Coat", "£174.99"],
  ];
  return (
    <div>
      <div className="content">
        <h2>Men's Most Wanted</h2>
      </div>
      <ClothingCard ClothingCard={ListComponents} />
    </div>
  );
};

export default ClothingMens;
