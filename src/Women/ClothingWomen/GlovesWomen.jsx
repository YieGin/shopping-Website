import React from "react";
import Image305 from "../../ImagesWomen/305.jpg";
import Image306 from "../../ImagesWomen/306.jpg";
import Image307 from "../../ImagesWomen/307.jpg";
import Image308 from "../../ImagesWomen/308.jpg";
import Image309 from "../../ImagesWomen/309.jpg";
import Image310 from "../../ImagesWomen/310.jpg";
import Image311 from "../../ImagesWomen/311.jpg";
import Image312 from "../../ImagesWomen/312.jpg";
import Image313 from "../../ImagesWomen/313.jpg";
import Image314 from "../../ImagesWomen/314.jpg";
import Image315 from "../../ImagesWomen/315.jpg";
import Image316 from "../../ImagesWomen/316.jpg";
import Image317 from "../../ImagesWomen/317.jpg";
import Image318 from "../../ImagesWomen/318.jpg";
import Image319 from "../../ImagesWomen/319.jpg";
import Image320 from "../../ImagesWomen/320.jpg";
import ClothingCard from "../ClothingCard";
const ClothingMens = () => {
  const ListComponents = [
    [Image305, "Cable Knit Gloves", "£19.99"],
    [Image306, "Unisex Essential Logo Gloves", "£14.99"],
    [Image307, "Cable Knit Gloves", "£19.99"],
    [Image308, "Essential Ribbed Gloves", "£17.99"],
    [Image309, "Wool Blend Radar Gloves", "£17.99"],
    [Image310, "Cable Knit Gloves", "£19.99"],
    [Image311, "Essential Ribbed Gloves", "£19.99"],
    [Image312, "Cable Knit Gloves", "£19.99"],
    [Image313, "Essential Ribbed Gloves", "£17.99"],
    [Image314, "Cable Knit Gloves", "£19.99"],
    [Image315, "Unisex Essential Logo Gloves", "£14.99"],
    [Image316, "Cable Knit Gloves", "£12.99"],
    [Image317, "Wool Blend Radar Gloves", "£17.99"],
    [Image318, "Unisex Essential Logo Gloves", "£17.99"],
    [Image319, "Wool Blend Radar Gloves", "£17.99"],
    [Image320, "Heritage Ribbed Gloves", "£16.99"],
  ];
  return (
    <div>
      <div className="content">
        <h2>Women Gloves & Mittens</h2>
      </div>
      <ClothingCard ClothingCard={ListComponents} />
    </div>
  );
};

export default ClothingMens;
