import React from "react";
import Image442 from "../../Images/442.jpg";
import Image443 from "../../Images/443.jpg";
import Image444 from "../../Images/444.jpg";
import Image445 from "../../Images/445.jpg";
import Image446 from "../../Images/446.jpg";
import Image447 from "../../Images/447.jpg";
import Image448 from "../../Images/448.jpg";
import Image449 from "../../Images/449.jpg";
import Image450 from "../../Images/450.jpg";
import Image451 from "../../Images/451.jpg";
import Image452 from "../../Images/452.jpg";
import Image453 from "../../Images/453.jpg";
import Image454 from "../../Images/454.jpg";
import Image455 from "../../Images/455.jpg";
import Image456 from "../../Images/456.jpg";
import Image457 from "../../Images/457.jpg";
import ClothingCard from "../ClothingCard";
const ClothingMens = () => {
  const ListComponents = [
    [Image442, "Core Pool Sliders", "£13.99"],
    [Image443, "Core Pool Sliders", "£13.99"],
    [Image444, "Core Pool Sliders", "£13.99"],
    [Image445, "Code Essential Pool Sliders", "£13.99"],
    [Image446, "Code Printed Pool Sliders", "£13.99"],
    [Image447, "Magic Camo Beach Sliders", "£13.99"],
    [Image448, "Code Essential Pool Sliders", "£13.99"],
    [Image449, "Core Pool Sliders", "£13.99"],
    [Image450, "Core Pool Sliders", "£16.99"],
    [Image451, "Core Pool Sliders", "£13.99"],
    [Image452, "Code Essential Pool Sliders", "£13.99"],
    [Image453, "Core Pool Sliders", "£13.99"],
    [Image454, "Swim Sport Sliders", "£13.99"],
    [Image455, "Printed Pool Sliders", "£16.99"],
    [Image456, "Code Printed Pool Sliders", "£13.99"],
    [Image457, "Core Pool Sliders", "£13.99"],
  ];
  return (
    <div>
      <div className="content">
        <h2>Men's Sliders</h2>
      </div>
      <ClothingCard ClothingCard={ListComponents} />
    </div>
  );
};

export default ClothingMens;
