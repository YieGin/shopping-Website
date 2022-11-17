import React from "react";
import Image289 from "../../ImagesWomen/289.jpg";
import Image290 from "../../ImagesWomen/290.jpg";
import Image291 from "../../ImagesWomen/291.jpg";
import Image292 from "../../ImagesWomen/292.jpg";
import Image293 from "../../ImagesWomen/293.jpg";
import Image294 from "../../ImagesWomen/294.jpg";
import Image295 from "../../ImagesWomen/295.jpg";
import Image296 from "../../ImagesWomen/296.jpg";
import Image297 from "../../ImagesWomen/297.jpg";
import Image298 from "../../ImagesWomen/298.jpg";
import Image299 from "../../ImagesWomen/299.jpg";
import Image300 from "../../ImagesWomen/300.jpg";
import Image301 from "../../ImagesWomen/301.jpg";
import Image302 from "../../ImagesWomen/302.jpg";
import Image303 from "../../ImagesWomen/303.jpg";
import Image304 from "../../ImagesWomen/304.jpg";
import ClothingCard from "../ClothingCard";
const ClothingMens = () => {
  const ListComponents = [
    [Image289, "Cable Knit Bobble Beanie", "£24.99"],
    [Image290, "Essential Logo Beanie", "£19.99"],
    [Image291, "Cable Knit Bobble Beanie", "£24.99"],
    [Image292, "Essential Ribbed Beanie", "£16.99"],
    [Image293, "Essential Ribbed Beanie", "£19.99"],
    [Image294, "Cable Knit Bobble Beanie", "£24.99"],
    [Image295, "Essential Ribbed Beanie", "£19.99"],
    [Image296, "Wool Blend Radar Beanie", "£22.99"],
    [Image297, "Essential Logo Beanie", "£12.99"],
    [Image298, "Cable Knit Bobble Beanie", "£24.99"],
    [Image299, "Essential Logo Beanie", "£17.99"],
    [Image300, "Cable Knit Bobble Beanie", "£22.99"],
    [Image301, "Essential Logo Beanie", "£19.99"],
    [Image302, "Essential Ribbed Beanie", "£19.99"],
    [Image303, "Essential Logo Beanie", "£16.99"],
    [Image304, "Cable Knit Bobble Beanie", "£27.99"],
  ];
  return (
    <div>
      <div className="content">
        <h2>Women Hats</h2>
      </div>
      <ClothingCard ClothingCard={ListComponents} />
    </div>
  );
};

export default ClothingMens;
