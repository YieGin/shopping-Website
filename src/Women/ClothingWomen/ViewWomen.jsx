import React from "react";
import Image257 from "../../ImagesWomen/257.jpg";
import Image258 from "../../ImagesWomen/258.jpg";
import Image259 from "../../ImagesWomen/259.jpg";
import Image260 from "../../ImagesWomen/260.jpg";
import Image261 from "../../ImagesWomen/261.jpg";
import Image262 from "../../ImagesWomen/262.jpg";
import Image263 from "../../ImagesWomen/263.jpg";
import Image264 from "../../ImagesWomen/264.jpg";
import Image265 from "../../ImagesWomen/265.jpg";
import Image266 from "../../ImagesWomen/266.jpg";
import Image267 from "../../ImagesWomen/267.jpg";
import Image268 from "../../ImagesWomen/268.jpg";
import Image269 from "../../ImagesWomen/269.jpg";
import Image270 from "../../ImagesWomen/270.jpg";
import Image271 from "../../ImagesWomen/271.jpg";
import Image272 from "../../ImagesWomen/272.jpg";
import ClothingCard from "../ClothingCard";
const ClothingMens = () => {
  const ListComponents = [
    [Image257, "Cable Knit Scarf", "£34.99"],
    [Image258, "Cable Knit Gloves", "£19.99"],
    [Image259, "Essential Ribbed Beanie", "£19.99"],
    [Image260, "Essential Ribbed Scarf", "£34.99"],
    [Image261, "Rolltop Backpack", "£59.99"],
    [Image262, "Rolltop Backpack", "£45.99"],
    [Image263, "Top Handle Backpack", "£44.99"],
    [Image264, "Graphic Montana Backpack", "£39.99"],
    [Image265, "Unisex Organic Cotton Ankle Sock Pack", "£19.99"],
    [Image266, "Unisex Organic Cotton Ankle Sock Pack", "£19.99"],
    [Image267, "Classic Zip Wallet", "£19.99"],
    [Image268, "Classic Zip Wallet", "£19.99"],
    [Image269, "Cable Knit Bobble Beanie", "£24.99"],
    [Image270, "Cable Knit Scarf", "£34.99"],
    [Image271, "Essential Logo Beanie", "£17.99"],
    [Image272, "Unisex Essential Logo Gloves", "£14.99"],
  ];
  return (
    <div>
      <div className="content">
        <h2>Women Accessories</h2>
      </div>
      <ClothingCard ClothingCard={ListComponents} />
    </div>
  );
};

export default ClothingMens;
