import React from "react";
import Image382 from "../../Images/382.jpg";
import Image383 from "../../Images/383.jpg";
import Image384 from "../../Images/384.jpg";
import Image385 from "../../Images/385.jpg";
import Image386 from "../../Images/386.jpg";
import Image387 from "../../Images/387.jpg";
import Image388 from "../../Images/388.jpg";
import Image389 from "../../Images/389.jpg";
import Image390 from "../../Images/390.jpg";
import Image391 from "../../Images/391.jpg";
import Image392 from "../../Images/392.jpg";
import Image393 from "../../Images/393.jpg";
import Image394 from "../../Images/394.jpg";
import Image395 from "../../Images/395.jpg";
import Image396 from "../../Images/396.jpg";
import Image397 from "../../Images/397.jpg";
import ClothingCard from "../ClothingCard";
const ClothingMens = () => {
  const ListComponents = [
    [Image382, "Passenger Bottle", "£19.99"],
    [Image383, "Sportstyle Water Bottle", "£19.99"],
    [Image384, "Training Steel Bottle", "£19.99"],
    [Image385, "Sportstyle Water Bottle", "£19.99"],
    [Image386, "Passenger Bottle", "£19.99"],
    [Image387, "Sportstyle Water Bottle", "£19.99"],
    [Image388, "Training Steel Bottle", "£19.99"],
    [Image389, "Passenger Bottle", "£19.99"],
    [Image390, "Sportstyle Water Bottle", "£19.99"],
    [Image391, "Training Steel Bottle", "£19.99"],
    [Image392, "Passenger Bottle", "£19.99"],
    [Image393, "Sportstyle Water Bottle", "£19.99"],
    [Image394, "Sportstyle Water Bottle", "£19.99"],
    [Image395, "Passenger Bottle", "£19.99"],
    [Image396, "Passenger Bottle", "£19.99"],
    [Image397, "Passenger Bottle", "£19.99"],
  ];
  return (
    <div>
      <div className="content">
        <h2>Men's Reusable Water Bottles</h2>
      </div>
      <ClothingCard ClothingCard={ListComponents} />
    </div>
  );
};

export default ClothingMens;
