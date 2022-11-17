import React from "react";
import Image225 from "../../ImagesWomen/225.jpg";
import Image226 from "../../ImagesWomen/226.jpg";
import Image227 from "../../ImagesWomen/227.jpg";
import Image228 from "../../ImagesWomen/228.jpg";
import Image229 from "../../ImagesWomen/229.jpg";
import Image230 from "../../ImagesWomen/230.jpg";
import Image231 from "../../ImagesWomen/231.jpg";
import Image232 from "../../ImagesWomen/232.jpg";
import Image233 from "../../ImagesWomen/233.jpg";
import Image234 from "../../ImagesWomen/234.jpg";
import Image235 from "../../ImagesWomen/235.jpg";
import Image236 from "../../ImagesWomen/236.jpg";
import Image237 from "../../ImagesWomen/237.jpg";
import Image238 from "../../ImagesWomen/238.jpg";
import Image239 from "../../ImagesWomen/239.jpg";
import Image240 from "../../ImagesWomen/240.jpg";
import ClothingCard from "../ClothingCard";
const ClothingMens = () => {
  const ListComponents = [
    [Image225, "Check Mini Skirt", "£34.99"],
    [Image226, "Check Pleated Mini Skirt", "£34.99"],
    [Image227, "Vintage Tweed Pleat Mini Skirt", "£34.99"],
    [Image228, "Check Pleated Mini Skirt", "£34.99"],
    [Image229, "Check Pleat Mini Skirt", "£44.99"],
    [Image230, "Vintage Tweed Pleat Mini Skirt", "£34.99"],
    [Image231, "Check Pleat Mini Skirt", "£34.99"],
    [Image232, "Vintage Pleated Mini Skirt", "£34.99"],
    [Image233, "Vintage Pleated Mini Skirt", "£34.99"],
    [Image234, "Vintage Tweed Pleat Mini Skirt", "£34.99"],
    [Image235, "Vintage Pleated Mini Skirt", "£34.99"],
    [Image236, "Vintage Cord Pleated Mini Skirt", "£34.99"],
    [Image237, "Vintage Denim Pleat Mini Skirt", "£34.99"],
    [Image238, "Check Mini Skirt", "£34.99"],
    [Image239, "Code Essential Tennis Skirt", "£39.99"],
    [Image240, "Cord Mini Skirt", "£44.99"],
  ];
  return (
    <div>
      <div className="content">
        <h2>Women Skirts</h2>
      </div>
      <ClothingCard ClothingCard={ListComponents} />
    </div>
  );
};

export default ClothingMens;
