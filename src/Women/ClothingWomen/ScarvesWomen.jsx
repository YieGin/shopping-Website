import React from "react";
import Image321 from "../../ImagesWomen/321.jpg";
import Image322 from "../../ImagesWomen/322.jpg";
import Image323 from "../../ImagesWomen/323.jpg";
import Image324 from "../../ImagesWomen/324.jpg";
import Image325 from "../../ImagesWomen/325.jpg";
import Image326 from "../../ImagesWomen/326.jpg";
import Image327 from "../../ImagesWomen/327.jpg";
import Image328 from "../../ImagesWomen/328.jpg";
import Image329 from "../../ImagesWomen/329.jpg";
import Image330 from "../../ImagesWomen/330.jpg";
import Image331 from "../../ImagesWomen/331.jpg";
import Image332 from "../../ImagesWomen/332.jpg";
import Image333 from "../../ImagesWomen/333.jpg";
import Image334 from "../../ImagesWomen/334.jpg";
import Image335 from "../../ImagesWomen/335.jpg";
import Image336 from "../../ImagesWomen/336.jpg";
import ClothingCard from "../ClothingCard";
const ClothingMens = () => {
  const ListComponents = [
    [Image321, "Essential Ribbed Scarf", "£39.99"],
    [Image322, "Cable Knit Scarf", "£39.99"],
    [Image323, "Wool Blend Radar Scarf", "£19.99"],
    [Image324, "Cable Knit Scarf", "£19.99"],
    [Image325, "Wool Blend Radar Scarf", "£19.99"],
    [Image326, "Cable Knit Scarf", "£29.99"],
    [Image327, "Wool Blend Radar Scarf", "£29.99"],
    [Image328, "Essential Ribbed Scarf", "£19.99"],
    [Image329, "Cable Knit Scarf", "£19.99"],
    [Image330, "Essential Ribbed Scarf", "£59.99"],
    [Image331, "Printed Square Silk Scarf", "£59.99"],
    [Image332, "Printed Square Silk Scarf", "£19.99"],
    [Image333, "Cable Knit Scarf", "£19.99"],
    [Image334, "Essential Ribbed Scarf", "£19.99"],
    [Image335, "Cable Knit Scarf", "£19.99"],
    [Image336, "Wool Blend Radar Scarf", "£19.99"],
  ];
  return (
    <div>
      <div className="content">
        <h2>Women Scarves And Snoods</h2>
      </div>
      <ClothingCard ClothingCard={ListComponents} />
    </div>
  );
};

export default ClothingMens;
