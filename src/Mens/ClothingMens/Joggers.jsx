import React from "react";
import Image126 from "../../Images/126.jpg";
import Image127 from "../../Images/127.jpg";
import Image128 from "../../Images/128.jpg";
import Image129 from "../../Images/129.jpg";
import Image130 from "../../Images/130.jpg";
import Image131 from "../../Images/131.jpg";
import Image132 from "../../Images/132.jpg";
import Image133 from "../../Images/133.jpg";
import Image134 from "../../Images/134.jpg";
import Image135 from "../../Images/135.jpg";
import Image136 from "../../Images/136.jpg";
import Image137 from "../../Images/137.jpg";
import Image138 from "../../Images/138.jpg";
import Image139 from "../../Images/139.jpg";
import Image140 from "../../Images/140.jpg";
import Image141 from "../../Images/141.jpg";
import ClothingCard from "../ClothingCard";
const ClothingMens = () => {
  const ListComponents = [
    [Image126, "Collective Joggers", "£54.99"],
    [Image127, "Vintage 90s Terrain Joggers", "£54.99"],
    [Image128, "Essential Tapered Cuff Joggers", "£54.99"],
    [Image129, "Organic Cotton Vintage Logo Joggers", "£54.99"],
    [Image130, "Vintage Athletic Club Joggers", "£54.99"],
    [Image131, "Tech Tapered Joggers", "£54.99"],
    [Image132, "Stretch Woven Track Pants", "£54.99"],
    [Image133, "Vintage 90s Terrain Joggers", "£54.99"],
    [Image134, "Core Logo Graphic Cuff Joggers", "£54.99"],
    [Image135, "Collective Joggers", "£54.99"],
    [Image136, "Organic Cotton Vintage Logo Joggers", "£54.99"],
    [Image137, "Essential Tapered Cuff Joggers", "£54.99"],
    [Image138, "Vintage Collegiate Joggers", "£54.99"],
    [Image139, "Vintage Logo Collegiate Joggers", "£54.99"],
    [Image140, "Organic Cotton Vintage Logo Joggers", "£54.99"],
    [Image141, "Tech Tapered Joggers", "£49.99"],
  ];
  return (
    <div>
      <div className="content">
        <h2>Men's Joggers</h2>
      </div>
      <ClothingCard ClothingCard={ListComponents} />
    </div>
  );
};

export default ClothingMens;
