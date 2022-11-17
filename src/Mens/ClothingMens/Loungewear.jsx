import React from "react";
import Image158 from "../../Images/158.jpg";
import Image159 from "../../Images/159.jpg";
import Image160 from "../../Images/160.jpg";
import Image161 from "../../Images/161.jpg";
import Image162 from "../../Images/162.jpg";
import Image163 from "../../Images/163.jpg";
import Image164 from "../../Images/164.jpg";
import Image165 from "../../Images/165.jpg";
import Image166 from "../../Images/166.jpg";
import Image167 from "../../Images/167.jpg";
import Image168 from "../../Images/168.jpg";
import Image169 from "../../Images/169.jpg";
import Image170 from "../../Images/170.jpg";
import Image171 from "../../Images/171.jpg";
import Image172 from "../../Images/172.jpg";
import Image173 from "../../Images/173.jpg";
import ClothingCard from "../ClothingCard";
const ClothingMens = () => {
  const ListComponents = [
    [Image158, "Organic Cotton Essential Logo Hoodie", "£49.99"],
    [Image159, "Recycled Sleepwear Shorts", "£29.99"],
    [Image160, "Essential Borg Lined Zip Hoodie", "£64.99"],
    [Image161, "Organic Cotton Pocket T-Shirt", "£22.99"],
    [Image162, "Organic Cotton Essential Logo Half Zip Sweatshirt", "£49.99"],
    [Image163, "Essential Logo Crew Sweatshirt", "£44.99"],
    [Image164, "Recyled Sleepwear Long Sleeve Top", "£29.99"],
    [Image165, "Recycled Sleepwear Pants", "£39.99"],
    [Image166, "Organic Cotton Essential Logo Baseball T-Shirt", "£22.99"],
    [Image167, "Essential Borg Lined Zip Hoodie", "£64.99"],
    [Image168, "Organic Cotton Long Sleeve Henley Top", "£29.99"],
    [Image169, "Organic Cotton Essential Logo Hoodie", "£49.99"],
    [Image170, "Essential Borg Lined Zip Hoodie", "£64.99"],
    [Image171, "Organic Cotton Long Sleeve Henley Top", "£29.99"],
    [Image172, "Essential Logo Crew Sweatshirt", "£44.99"],
    [Image173, "Organic Cotton Pocket T-Shirt", "£22.99"],
  ];
  return (
    <div>
      <div className="content">
        <h2>Men's Loungewear & Casualwear</h2>
      </div>
      <ClothingCard ClothingCard={ListComponents} />
    </div>
  );
};

export default ClothingMens;
