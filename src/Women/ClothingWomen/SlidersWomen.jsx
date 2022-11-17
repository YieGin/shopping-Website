import React from "react";
import Image417 from "../../ImagesWomen/417.jpg";
import Image418 from "../../ImagesWomen/418.jpg";
import Image419 from "../../ImagesWomen/419.jpg";
import Image420 from "../../ImagesWomen/420.jpg";
import Image421 from "../../ImagesWomen/421.jpg";
import Image422 from "../../ImagesWomen/422.jpg";
import Image423 from "../../ImagesWomen/423.jpg";
import Image424 from "../../ImagesWomen/424.jpg";
import Image425 from "../../ImagesWomen/425.jpg";
import Image426 from "../../ImagesWomen/426.jpg";
import Image427 from "../../ImagesWomen/427.jpg";
import Image428 from "../../ImagesWomen/428.jpg";
import Image429 from "../../ImagesWomen/429.jpg";
import Image430 from "../../ImagesWomen/430.jpg";
import Image431 from "../../ImagesWomen/431.jpg";
import Image457 from "../../Images/457.jpg";
import ClothingCard from "../ClothingCard";
const ClothingMens = () => {
  const ListComponents = [
    [Image417, "Code Essential Pool Sliders", "£13.99"],
    [Image418, "Code Printed Pool Sliders", "£10.99"],
    [Image419, "Code Essential Pool Sliders", "£13.99"],
    [Image420, "Core Pool Sliders", "£13.99"],
    [Image421, "Core Pool Sliders", "£16.99"],
    [Image422, "Premium Slim 2 Strap Sliders", "£13.99"],
    [Image423, "Core Pool Sliders", "£10.99"],
    [Image424, "Code Essential Pool Sliders", "£13.99"],
    [Image425, "Core Pool Sliders", "£13.99"],
    [Image426, "Graphic Moulded Pool Sliders", "£13.99"],
    [Image427, "Core Pool Sliders", "£10.99"],
    [Image428, "Core Pool Sliders", "£13.99"],
    [Image429, "Swim Sport Sliders", "£10.99"],
    [Image430, "Core Pool Sliders", "£16.99"],
    [Image431, "Swim Sport Sliders", "£13.99"],
    [Image457, "Core Pool Sliders", "£13.99"],
  ];
  return (
    <div>
      <div className="content">
        <h2>Women Sliders</h2>
      </div>
      <ClothingCard ClothingCard={ListComponents} />
    </div>
  );
};

export default ClothingMens;
