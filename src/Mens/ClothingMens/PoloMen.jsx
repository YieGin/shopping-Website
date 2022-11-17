import React from "react";
import Image78 from "../../Images/78.jpg";
import Image79 from "../../Images/79.jpg";
import Image80 from "../../Images/80.jpg";
import Image81 from "../../Images/81.jpg";
import Image82 from "../../Images/82.jpg";
import Image83 from "../../Images/83.jpg";
import Image84 from "../../Images/84.jpg";
import Image85 from "../../Images/85.jpg";
import Image86 from "../../Images/86.jpg";
import Image87 from "../../Images/87.jpg";
import Image88 from "../../Images/88.jpg";
import Image89 from "../../Images/89.jpg";
import Image90 from "../../Images/90.jpg";
import Image91 from "../../Images/91.jpg";
import Image92 from "../../Images/92.jpg";
import Image93 from "../../Images/93.jpg";
import ClothingCard from "../ClothingCard";
const ClothingMens = () => {
  const ListComponents = [
    [Image78, "Long Sleeve Cotton Jersey Polo Shirt", "£39.99"],
    [Image79, "Long Sleeve Cotton Jersey Polo Shirt", "£39.99"],
    [Image80, "Organic Cotton Vintage Tipped Polo Shirt", "£39.99"],
    [Image81, "Organic Cotton Vintage Washed Pique Polo Shirt", "£39.99"],
    [Image82, "Organic Cotton Vintage Destroy Polo Shirt", "£39.99"],
    [Image83, "Long Sleeve Cotton Jersey Polo Shirt", "£39.99"],
    [Image84, "Organic Cotton Studios Jersey Polo Shirt", "£39.99"],
    [Image85, "Organic Cotton Vintage Destroy Polo Shirt", "£39.99"],
    [Image86, "Long Sleeve Cotton Jersey Polo Shirt", "£39.99"],
    [Image87, "Classic Pique Polo Shirt", "£39.99"],
    [Image88, "Organic Cotton Vintage Destroy Polo Shirt", "£39.99"],
    [Image89, "Contrast Tipped Slim Fit Polo Shirt", "£39.99"],
    [Image90, "Long Sleeve Cotton Jersey Polo Shirt", "£39.99"],
    [Image91, "Organic Cotton Classic Pique Polo Shirt", "£39.99"],
    [Image92, "Long Sleeve Cotton Jersey Polo Shirt", "£39.99"],
    [Image93, "Studios Organic Cotton Jersey Polo Shirt", "£39.99"],
  ];
  return (
    <div>
      <div className="content">
        <h2>Men's Polo Shirts</h2>
      </div>
      <ClothingCard ClothingCard={ListComponents} />
    </div>
  );
};

export default ClothingMens;
