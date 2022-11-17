import React from "react";
import Image350 from "../../Images/350.jpg";
import Image351 from "../../Images/351.jpg";
import Image352 from "../../Images/352.jpg";
import Image353 from "../../Images/353.jpg";
import Image354 from "../../Images/354.jpg";
import Image355 from "../../Images/355.jpg";
import Image356 from "../../Images/356.jpg";
import Image357 from "../../Images/357.jpg";
import Image358 from "../../Images/358.jpg";
import Image359 from "../../Images/359.jpg";
import Image360 from "../../Images/360.jpg";
import Image361 from "../../Images/361.jpg";
import Image362 from "../../Images/362.jpg";
import Image363 from "../../Images/363.jpg";
import Image364 from "../../Images/364.jpg";
import Image365 from "../../Images/365.jpg";
import ClothingCard from "../ClothingCard";
const ClothingMens = () => {
  const ListComponents = [
    [Image350, "Organic Cotton Offset Boxer Double Pack", "£24.99"],
    [Image351, "Organic Cotton Dual Logo Boxers Double Pack", "£24.99"],
    [Image352, "Organic Cotton Boxer Double Pack", "£24.99"],
    [Image353, "Organic Cotton Trunk Triple Pack", "£29.99"],
    [Image354, "Organic Cotton Boxer Multi Triple Pack", "£29.99"],
    [Image355, "Organic Cotton Boxers Triple Pack", "£29.99"],
    [Image356, "Organic Cotton Offset Boxer Double Pack", "£19.99"],
    [Image357, "Organic Cotton Trunk Single Pack", "£26.99"],
    [Image358, "Organic Cotton Trunk Single Pack", "£49.99"],
    [Image359, "Organic Cotton Brief Triple Pack", "£26.99"],
    [Image360, "Organic Cotton Trunk Triple Pack", "£29.99"],
    [Image361, "Organic Cotton Boxers Triple Pack", "£29.99"],
    [Image362, "Organic Cotton Trunk Logo Pack", "£24.99"],
    [Image363, "Organic Cotton Boxer Double Pack", "£29.99"],
    [Image364, "Organic Cotton Brief Triple Pack", "£24.99"],
    [Image365, "Organic Cotton Offset Boxer Double Pack", "£29.99"],
  ];
  return (
    <div>
      <div className="content">
        <h2>Men's Underwear</h2>
      </div>
      <ClothingCard ClothingCard={ListComponents} />
    </div>
  );
};

export default ClothingMens;
