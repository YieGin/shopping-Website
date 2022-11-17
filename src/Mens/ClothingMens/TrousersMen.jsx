import React from "react";
import Image254 from "../../Images/254.jpg";
import Image255 from "../../Images/255.jpg";
import Image256 from "../../Images/256.jpg";
import Image257 from "../../Images/257.jpg";
import Image258 from "../../Images/258.jpg";
import Image259 from "../../Images/259.jpg";
import Image260 from "../../Images/260.jpg";
import Image261 from "../../Images/261.jpg";
import Image262 from "../../Images/262.jpg";
import Image263 from "../../Images/263.jpg";
import Image264 from "../../Images/264.jpg";
import Image265 from "../../Images/265.jpg";
import Image266 from "../../Images/266.jpg";
import Image267 from "../../Images/267.jpg";
import Image268 from "../../Images/268.jpg";
import Image269 from "../../Images/269.jpg";
import ClothingCard from "../ClothingCard";
const ClothingMens = () => {
  const ListComponents = [
    [Image254, "Organic Cotton Baggy Cargo Pants", "£59.99"],
    [Image255, "Organic Cotton Core Cargo Pants", "£54.99"],
    [Image256, "Vintage Tapered Cargo Pants", "£54.99"],
    [Image257, "Organic Cotton Core Cargo Pants", "£59.99"],
    [Image258, "Officers Slim Chino Trousers", "£49.99"],
    [Image259, "Organic Cotton Core Cargo Pants", "£54.99"],
    [Image260, "Officers Slim Chino Trousers", "£49.99"],
    [Image261, "Organic Cotton Core Cargo Pants", "£59.99"],
    [Image262, "Organic Cotton Studios Chinos", "£54.99"],
    [Image263, "Officers Slim Chino Trousers", "£49.99"],
    [Image264, "Organic Cotton Studios Chinos", "£54.99"],
    [Image265, "Organic Cotton Studios Pleated Chinos", "£49.99"],
    [Image266, "Officers Slim Chino Trousers", "£49.99"],
    [Image267, "Organic Cotton Studios Chinos", "£49.99"],
    [Image268, "Officers Slim Chino Trousers", "£54.99"],
    [Image269, "Organic Cotton Studios Chinos", "£59.99"],
  ];
  return (
    <div>
      <div className="content">
        <h2>Men's Trousers</h2>
      </div>
      <ClothingCard ClothingCard={ListComponents} />
    </div>
  );
};

export default ClothingMens;
