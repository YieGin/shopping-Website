import React from "react";
import Image110 from "../../Images/110.jpg";
import Image111 from "../../Images/111.jpg";
import Image112 from "../../Images/112.jpg";
import Image113 from "../../Images/113.jpg";
import Image114 from "../../Images/114.jpg";
import Image115 from "../../Images/115.jpg";
import Image116 from "../../Images/116.jpg";
import Image117 from "../../Images/117.jpg";
import Image118 from "../../Images/118.jpg";
import Image119 from "../../Images/119.jpg";
import Image120 from "../../Images/120.jpg";
import Image121 from "../../Images/121.jpg";
import Image122 from "../../Images/122.jpg";
import Image123 from "../../Images/123.jpg";
import Image124 from "../../Images/124.jpg";
import Image125 from "../../Images/125.jpg";
import ClothingCard from "../ClothingCard";
const ClothingMens = () => {
  const ListComponents = [
    [Image110, "Organic Cotton Slim Jeans", "£74.99"],
    [Image111, "Organic Cotton Skinny Jeans", "£74.99"],
    [Image112, "Organic Cotton Slim Jeans", "£74.99"],
    [Image113, "Organic Cotton Skinny Jeans", "£74.99"],
    [Image114, "Organic Cotton Slim Straight Jeans", "£74.99"],
    [Image115, "Organic Cotton Slim Jeans", "£74.99"],
    [Image116, "Organic Cotton Skinny Jeans", "£74.99"],
    [Image117, "Organic Cotton Slim Jeans", "£74.99"],
    [Image118, "Organic Cotton Carpenter Jeans", "£74.99"],
    [Image119, "Slim Fit Jeans", "£74.99"],
    [Image120, "Organic Cotton Slim Jeans", "£74.99"],
    [Image121, "Organic Cotton Skinny Jeans", "£74.99"],
    [Image122, "Organic Cotton Slim Straight Jeans", "£74.99"],
    [Image123, "Organic Cotton Slim Jeans", "£74.99"],
    [Image124, "Organic Cotton Skinny Jeans", "£74.99"],
    [Image125, "Organic Cotton Slim Jeans", "£74.99"],
  ];
  return (
    <div>
      <div className="content">
        <h2>Men's Organic Denim Jeans</h2>
      </div>
      <ClothingCard ClothingCard={ListComponents} />
    </div>
  );
};

export default ClothingMens;
