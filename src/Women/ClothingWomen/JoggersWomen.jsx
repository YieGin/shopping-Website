import React from "react";
import Image113 from "../../ImagesWomen/113.jpg";
import Image114 from "../../ImagesWomen/114.jpg";
import Image115 from "../../ImagesWomen/115.jpg";
import Image116 from "../../ImagesWomen/116.jpg";
import Image117 from "../../ImagesWomen/117.jpg";
import Image118 from "../../ImagesWomen/118.jpg";
import Image119 from "../../ImagesWomen/119.jpg";
import Image120 from "../../ImagesWomen/120.jpg";
import Image121 from "../../ImagesWomen/121.jpg";
import Image122 from "../../ImagesWomen/122.jpg";
import Image123 from "../../ImagesWomen/123.jpg";
import Image124 from "../../ImagesWomen/124.jpg";
import Image125 from "../../ImagesWomen/125.jpg";
import Image126 from "../../ImagesWomen/126.jpg";
import Image127 from "../../ImagesWomen/127.jpg";
import Image128 from "../../ImagesWomen/128.jpg";
import ClothingCard from "../ClothingCard";
const ClothingMens = () => {
  const ListComponents = [
    [Image113, "Organic Cotton Vintage Logo Embroidered", "£44.99"],
    [Image114, "Code Velour Jogger", "£54.99"],
    [Image115, "Organic Cotton Vintage Logo Embroidered", "£44.99"],
    [Image116, "90s Terrain Jogger", "£54.99"],
    [Image117, "Organic Cotton Essential Logo Joggers", "£44.99"],
    [Image118, "Organic Cotton Vintage Logo Embroidered ", "£44.99"],
    [Image119, "Code Velour Jogger", "£54.99"],
    [Image120, "Organic Cotton Vintage Logo Embroidered", "£44.99"],
    [Image121, "Organic Cotton Vintage Logo Embroidered", "£44.99"],
    [Image122, "Heritage Boyfriend Embroidered Joggers", "£49.99"],
    [Image123, "Organic Cotton Essential Logo Joggers", "£44.99"],
    [Image124, "Code Velour Jogger", "£54.99"],
    [Image125, "Vintage Collegiate Joggers", "£49.99"],
    [Image126, "Organic Cotton Vintage Logo Embroidered", "£44.99"],
    [Image127, "Vintage Collegiate Joggers", "£49.99"],
    [Image128, "Organic Cotton Essential Logo Joggers", "£44.99"],
  ];
  return (
    <div>
      <div className="content">
        <h2>Women Joggers</h2>
      </div>
      <ClothingCard ClothingCard={ListComponents} />
    </div>
  );
};

export default ClothingMens;
