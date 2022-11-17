import React from "react";
import Image16 from "../../ImagesWomen/16.jpg";
import Image17 from "../../ImagesWomen/17.jpg";
import Image18 from "../../ImagesWomen/18.jpg";
import Image19 from "../../ImagesWomen/19.jpg";
import Image20 from "../../ImagesWomen/20.jpg";
import Image21 from "../../ImagesWomen/21.jpg";
import Image22 from "../../ImagesWomen/22.jpg";
import Image23 from "../../ImagesWomen/23.jpg";
import Image24 from "../../ImagesWomen/24.jpg";
import Image25 from "../../ImagesWomen/25.jpg";
import Image26 from "../../ImagesWomen/26.jpg";
import Image27 from "../../ImagesWomen/27.jpg";
import Image28 from "../../ImagesWomen/28.jpg";
import Image29 from "../../ImagesWomen/29.jpg";
import Image30 from "../../ImagesWomen/30.jpg";
import Image31 from "../../ImagesWomen/31.jpg";
import ClothingCard from "../ClothingCard";
const ClothingMens = () => {
  const ListComponents = [
    [Image16, "Ripstop Longline Puffer Jacket", "£89.99"],
    [Image17, "Hooded Longline Puffer Coat", "£89.99"],
    [Image18, "Ripstop Longline Puffer Jacket", "£129.99"],
    [Image19, "Hooded Everest Faux Fur Parka Coat", "£144.99"],
    [Image20, "Faux Fur Hooded Mid Length Puffer Jacket", "£139.99"],
    [Image21, "Hooded Maxi Puffer Coat", "£104.99"],
    [Image22, "Everest Hooded Puffer Bomber Jacket", "£164.99"],
    [Image23, "Hooded Maxi Puffer Coat", "£124.99"],
    [Image24, "Ripstop Longline Puffer Jacket", "£164.99"],
    [Image25, "Hooded Maxi Puffer Coat", "£164.99"],
    [Image26, "Faux Fur Hooded Longline Puffer Coat", "£119.99"],
    [Image27, "Everest Bomber Jacket", "£124.99"],
    [Image28, "Faux Fur Hooded Longline Light Padded ", "£114.99"],
    [Image29, "Hooded Longline Puffer Coat", "£144.99"],
    [Image30, "Faux Fur Hooded Longline Light Padded ", "£114.99"],
    [Image31, "Longline Faux Fur Everest Coat", "£149.99"],
  ];
  return (
    <div>
      <div className="content">
        <h2>Women Jackets & Coats</h2>
      </div>
      <ClothingCard ClothingCard={ListComponents} />
    </div>
  );
};

export default ClothingMens;
