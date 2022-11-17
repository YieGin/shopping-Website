import React from "react";
import Image1 from "../../ImagesWomen/1.jpg";
import Image2 from "../../ImagesWomen/2.jpg";
import Image3 from "../../ImagesWomen/3.jpg";
import Image4 from "../../ImagesWomen/4.jpg";
import Image5 from "../../ImagesWomen/5.jpg";
import Image6 from "../../ImagesWomen/6.jpg";
import Image7 from "../../ImagesWomen/7.jpg";
import Image8 from "../../ImagesWomen/8.jpg";
import Image9 from "../../ImagesWomen/9.jpg";
import Image10 from "../../ImagesWomen/10.jpg";
import Image11 from "../../ImagesWomen/11.jpg";
import Image12 from "../../ImagesWomen/12.jpg";
import Image13 from "../../ImagesWomen/13.jpg";
import Image14 from "../../ImagesWomen/14.jpg";
import Image15 from "../../ImagesWomen/15.jpg";
import Image16 from "../../ImagesWomen/16.jpg";
import ClothingCard from "../ClothingCard";
const ClothingMens = () => {
  const ListComponents = [
    [Image1, "70s Print Long Sleeve Shirt", "£59.99"],
    [Image2, "Faux Fur Lined Longline Afghan Coat", "£114.99"],
    [Image3, "Code S Logo Velour Oversized Crew", "£54.99"],
    [Image4, "Hooded Everest Faux Fur Parka Coat", "£139.99"],
    [Image5, "Folk Embroidered Graphic T-Shirt", "£24.99"],
    [Image6, "Organic Cotton Baggy Cargo Pants", "£59.99"],
    [Image7, "Rhinestone Japanese Graphic T Shirt", "£24.99"],
    [Image8, "Cord Dungarees", "£84.99"],
    [Image9, "Vintage Logo Heritage Hoodie", "£44.99"],
    [Image10, "Brushed Stripe Crew Neck Jumper", "£59.99"],
    [Image11, "Longline Faux Fur Everest Coat", "£149.99"],
    [Image12, "Hooded Spirit Sports Puffer Jacket", "£89.99"],
    [Image13, "College Graphic Cropped T-shirt", "£22.99"],
    [Image14, "Organic Cotton Baggy Cargo Pants", "£59.99"],
    [Image15, "Vintage Relaxed Long Sleeve Shirt", "£59.99"],
    [Image16, "Check Pleat Mini Skirt", "£34.99"],
  ];
  return (
    <div>
      <div className="content">
        <h2>Women New In</h2>
      </div>
      <ClothingCard ClothingCard={ListComponents} />
    </div>
  );
};

export default ClothingMens;
