import React from "react";
import Image369 from "../../ImagesWomen/369.jpg";
import Image370 from "../../ImagesWomen/370.jpg";
import Image371 from "../../ImagesWomen/371.jpg";
import Image372 from "../../ImagesWomen/372.jpg";
import Image373 from "../../ImagesWomen/373.jpg";
import Image374 from "../../ImagesWomen/374.jpg";
import Image375 from "../../ImagesWomen/375.jpg";
import Image376 from "../../ImagesWomen/376.jpg";
import Image377 from "../../ImagesWomen/377.jpg";
import Image378 from "../../ImagesWomen/378.jpg";
import Image379 from "../../ImagesWomen/379.jpg";
import Image380 from "../../ImagesWomen/380.jpg";
import ClothingCard from "../ClothingCard";
const ClothingMens = () => {
  const ListComponents = [
    [Image369, "Passenger Bottle", "£19.99"],
    [Image370, "Training Steel Bottle", "£19.99"],
    [Image371, "Passenger Bottle", "£19.99"],
    [Image372, "Passenger Bottle", "£19.99"],
    [Image373, "Passenger Bottle", "£19.99"],
    [Image374, "Passenger Bottle", "£19.99"],
    [Image375, "Training Steel Bottle", "£19.99"],
    [Image376, "Passenger Bottle", "£19.99"],
    [Image377, "Training Steel Bottle", "£19.99"],
    [Image378, "Passenger Bottle", "£19.99"],
    [Image379, "Passenger Bottle", "£19.99"],
    [Image380, "Training Steel Bottle", "£19.99"],
  ];
  return (
    <div>
      <div className="content">
        <h2>Women Reusable Water Bottles</h2>
      </div>
      <ClothingCard ClothingCard={ListComponents} />
    </div>
  );
};

export default ClothingMens;
