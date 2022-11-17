import React from "react";
import Image474 from "../../Images/474.jpg";
import Image475 from "../../Images/475.jpg";
import Image476 from "../../Images/476.jpg";
import Image477 from "../../Images/477.jpg";
import Image478 from "../../Images/478.jpg";
import Image479 from "../../Images/479.jpg";
import Image480 from "../../Images/480.jpg";
import Image481 from "../../Images/481.jpg";
import Image482 from "../../Images/482.jpg";
import Image483 from "../../Images/483.jpg";
import Image484 from "../../Images/484.jpg";
import Image485 from "../../Images/485.jpg";
import Image486 from "../../Images/486.jpg";
import Image487 from "../../Images/487.jpg";
import Image488 from "../../Images/488.jpg";
import Image489 from "../../Images/489.jpg";
import ClothingCard from "../ClothingCard";
const ClothingMens = () => {
  const ListComponents = [
    [Image474, "Wool Zip Borg Lined Check Overshirt", "£74.99"],
    [Image475, "College Varsity Patch Bomber Jacket", "£74.99"],
    [Image476, "Essential Borg Lined Zip Hoodie", "£74.99"],
    [Image477, "Long Sleeve Cotton Jersey Polo Shirt", "£74.99"],
    [Image478, "Organic Cotton Long Sleeve Henley Top", "£74.99"],
    [Image479, "Organic Cotton Vintage Lumberjack Shirt", "£74.99"],
    [Image480, "Hooded Classic Puffer Jacket", "£74.99"],
    [Image481, "Organic Cotton Long Sleeve Henley Top", "£74.99"],
    [Image482, "Check Flannel Shirt", "£74.99"],
    [Image483, "Long Sleeve Cotton Jersey Polo Shirt", "£74.99"],
    [Image484, "Essential Borg Lined Zip Hoodie", "£74.99"],
    [Image485, "Non Hooded Sports Puffer Gilet", "£74.99"],
    [Image486, "Wool Zip Borg Lined Check Overshirt", "£74.99"],
    [Image487, "Organic Cotton Slim Jeans", "£74.99"],
    [Image488, "Wool Zip Borg Lined Check Overshirt", "£74.99"],
    [Image489, "Leather Biker Jacket", "£74.99"],
  ];
  return (
    <div>
      <div className="content">
        <h2>Men's Best Sellers</h2>
      </div>
      <ClothingCard ClothingCard={ListComponents} />
    </div>
  );
};

export default ClothingMens;
