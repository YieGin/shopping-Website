import React from "react";
import Image464 from "../../ImagesWomen/464.jpg";
import Image465 from "../../ImagesWomen/465.jpg";
import Image466 from "../../ImagesWomen/466.jpg";
import Image467 from "../../ImagesWomen/467.jpg";
import Image468 from "../../ImagesWomen/468.jpg";
import Image469 from "../../ImagesWomen/469.jpg";
import Image470 from "../../ImagesWomen/470.jpg";
import Image471 from "../../ImagesWomen/471.jpg";
import Image472 from "../../ImagesWomen/472.jpg";
import Image473 from "../../ImagesWomen/473.jpg";
import Image474 from "../../ImagesWomen/474.jpg";
import Image475 from "../../ImagesWomen/475.jpg";
import Image476 from "../../ImagesWomen/476.jpg";
import Image477 from "../../ImagesWomen/477.jpg";
import Image478 from "../../ImagesWomen/478.jpg";
import Image479 from "../../ImagesWomen/479.jpg";
import ClothingCard from "../ClothingCard";
const ClothingMens = () => {
  const ListComponents = [
    [Image464, "Rhinestone Japanese Graphic T Shirt", "£99.99"],
    [Image465, "Organic Cotton Baggy Cargo Pants", "£89.99"],
    [Image466, "College Graphic Cropped T-shirt", "£119.99"],
    [Image467, "Organic Cotton Baggy Cargo Pants", "£89.99"],
    [Image468, "Faux Fur Lined Longline Afghan Coat", "£74.99"],
    [Image469, "Backless Knitted Midi Dress", "£74.99"],
    [Image470, "Ripstop Longline Puffer Jacket", "£74.99"],
    [Image471, "Essential Borg Lined Zip Hoodie", "£19.99"],
    [Image472, "Chain Velvet Cami Top", "£54.99"],
    [Image473, "Check Pleat Mini Skirt", "£64.99"],
    [Image474, "Satin Cami Top", "£39.99"],
    [Image475, "Check Pleat Mini Skirt", "£54.99"],
    [Image476, "Faux Fur Hooded Mid Length Puffer Jacket", "£174.99"],
    [Image477, "Ripstop Longline Puffer Jacket", "£69.99"],
    [Image478, "Faux Fur Hooded Longline Light Padded ", "£29.99"],
    [Image479, "Hooded Longline Puffer Coat", "£174.99"],
  ];
  return (
    <div>
      <div className="content">
        <h2>Women Most Wanted</h2>
      </div>
      <ClothingCard ClothingCard={ListComponents} />
    </div>
  );
};

export default ClothingMens;
