import React from "react";
import Image337 from "../../ImagesWomen/337.jpg";
import Image338 from "../../ImagesWomen/338.jpg";
import Image339 from "../../ImagesWomen/339.jpg";
import Image340 from "../../ImagesWomen/340.jpg";
import Image341 from "../../ImagesWomen/341.jpg";
import Image342 from "../../ImagesWomen/342.jpg";
import Image343 from "../../ImagesWomen/343.jpg";
import Image344 from "../../ImagesWomen/344.jpg";
import Image345 from "../../ImagesWomen/345.jpg";
import Image346 from "../../ImagesWomen/346.jpg";
import Image347 from "../../ImagesWomen/347.jpg";
import Image348 from "../../ImagesWomen/348.jpg";
import Image349 from "../../ImagesWomen/349.jpg";
import Image350 from "../../ImagesWomen/350.jpg";
import Image351 from "../../ImagesWomen/351.jpg";
import Image352 from "../../ImagesWomen/352.jpg";
import ClothingCard from "../ClothingCard";
const ClothingMens = () => {
  const ListComponents = [
    [Image337, "Satin Sleepwear Long Sleeve Shirt", "£39.99"],
    [Image338, "Satin Sleepwear Pant", "£39.99"],
    [Image339, "Satin Sleepwear Long Sleeve Shirt", "£39.99"],
    [Image340, "Satin Sleepwear Pant", "£39.99"],
    [Image341, "Organic Cotton Ribbed Tri Bralette", "£19.99"],
    [Image342, "Organic Cotton Thong", "£8.99"],
    [Image343, "Organic Cotton Ribbed Tri Bralette", "£19.99"],
    [Image344, "Organic Cotton Ribbed Bikini Brief", "£9.99"],
    [Image345, "Satin Sleepwear Long Sleeve Shirt", "£39.99"],
    [Image346, "Satin Sleepwear Pant", "£39.99"],
    [Image347, "Satin Sleepwear Robe", "£59.99"],
    [Image348, "Satin Sleepwear Shorts", "£34.99"],
    [Image349, "Satin Sleepwear Short Sleeve Shirt", "£34.99"],
    [Image350, "Satin Sleepwear Shorts", "£34.99"],
    [Image351, "Satin Sleepwear Robe", "£59.99"],
    [Image352, "Satin Sleepwear Shorts", "£34.99"],
  ];
  return (
    <div>
      <div className="content">
        <h2>Women Underwear</h2>
      </div>
      <ClothingCard ClothingCard={ListComponents} />
    </div>
  );
};

export default ClothingMens;
