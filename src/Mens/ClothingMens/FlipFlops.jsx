import React from "react";
import Image458 from "../../Images/458.jpg";
import Image459 from "../../Images/459.jpg";
import Image460 from "../../Images/460.jpg";
import Image461 from "../../Images/461.jpg";
import Image462 from "../../Images/462.jpg";
import Image463 from "../../Images/463.jpg";
import Image464 from "../../Images/464.jpg";
import Image465 from "../../Images/465.jpg";
import Image466 from "../../Images/466.jpg";
import Image467 from "../../Images/467.jpg";
import Image468 from "../../Images/468.jpg";
import Image469 from "../../Images/469.jpg";
import Image470 from "../../Images/470.jpg";
import Image471 from "../../Images/471.jpg";
import Image472 from "../../Images/472.jpg";
import Image473 from "../../Images/473.jpg";
import ClothingCard from "../ClothingCard";
const ClothingMens = () => {
  const ListComponents = [
    [Image458, "Vintage Vegan Classic Flip Flops", "£19.99"],
    [Image459, "Vintage Vegan Classic Flip Flops", "£19.99"],
    [Image460, "Essential Plain Flip Flops", "£19.99"],
    [Image461, "Essential Plain Flip Flops", "£19.99"],
    [Image462, "Code Essential Flip Flops", "£19.99"],
    [Image463, "Code Essential Flip Flops", "£19.99"],
    [Image464, "Vintage Classic Flip Flops", "£19.99"],
    [Image465, "Vintage Classic Flip Flops", "£19.99"],
    [Image466, "Vintage Vegan Classic Flip Flops", "£19.99"],
    [Image467, "Vintage Vegan Classic Flip Flops", "£19.99"],
    [Image468, "Code Essential Flip Flops", "£19.99"],
    [Image469, "Code Essential Flip Flops", "£19.99"],
    [Image470, "Vintage Classic Flip Flops", "£19.99"],
    [Image471, "Vintage Classic Flip Flop", "£19.99"],
    [Image472, "Vintage Vegan Classic Flip Flops", "£19.99"],
    [Image473, "Vintage Vegan Classic Flip Flops", "£19.99"],
  ];
  return (
    <div>
      <div className="content">
        <h2>Men's Flip Flops</h2>
      </div>
      <ClothingCard ClothingCard={ListComponents} />
    </div>
  );
};

export default ClothingMens;
