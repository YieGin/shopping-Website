import React from "react";
import Image480 from "../../ImagesWomen/480.jpg";
import Image481 from "../../ImagesWomen/481.jpg";
import Image482 from "../../ImagesWomen/482.jpg";
import Image483 from "../../ImagesWomen/483.jpg";
import Image484 from "../../ImagesWomen/484.jpg";
import Image485 from "../../ImagesWomen/485.jpg";
import Image486 from "../../ImagesWomen/486.jpg";
import Image487 from "../../ImagesWomen/487.jpg";
import Image488 from "../../ImagesWomen/488.jpg";
import Image489 from "../../ImagesWomen/489.jpg";
import Image490 from "../../ImagesWomen/490.jpg";
import Image491 from "../../ImagesWomen/491.jpg";
import Image492 from "../../ImagesWomen/492.jpg";
import Image493 from "../../ImagesWomen/493.jpg";
import Image494 from "../../ImagesWomen/494.jpg";
import Image495 from "../../ImagesWomen/495.jpg";
import ClothingCard from "../ClothingCard";
const ClothingMens = () => {
  const ListComponents = [
    [Image480, "Classic Fuji Puffer Jacket", "£98.99"],
    [Image481, "Fuji Cropped Hooded Jacket", "£94.99"],
    [Image482, "Hooded Spirit Sports Puffer Jacket", "£89.99"],
    [Image483, "Hooded Ultimate SD-Windbreaker", "£94.99"],
    [Image484, "Top Handle Backpack", "£124.99"],
    [Image485, "Outdoor Tote Bag", "£39.99"],
    [Image486, "Classic Montana Rucksack", "£39.99"],
    [Image487, "Outdoor Tote Bag", "£59.99"],
    [Image488, "Heat Sealed Padded Jacket", "£89.99"],
    [Image489, "Hooded Spirit Sports Puffer Jacket", "£85.99"],
    [Image490, "Hooded Ultimate SD-Windbreaker", "£99.99"],
    [Image491, "Hooded Spirit Sports Puffer Jacket", "£94.99"],
    [Image492, "Graphic Montana Backpack", "£38.99"],
    [Image493, "Top Handle Backpack", "£20.99"],
    [Image494, "Graphic Montana Backpack", "£44.99"],
    [Image495, "Classic Montana Rucksack", "£39.99"],
  ];
  return (
    <div>
      <div className="content">
        <h2>Women Back To School</h2>
      </div>
      <ClothingCard ClothingCard={ListComponents} />
    </div>
  );
};

export default ClothingMens;
