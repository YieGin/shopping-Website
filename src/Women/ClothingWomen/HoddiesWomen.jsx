import React from "react";
import Image33 from "../../ImagesWomen/33.jpg";
import Image34 from "../../ImagesWomen/34.jpg";
import Image35 from "../../ImagesWomen/35.jpg";
import Image36 from "../../ImagesWomen/36.jpg";
import Image37 from "../../ImagesWomen/37.jpg";
import Image38 from "../../ImagesWomen/38.jpg";
import Image39 from "../../ImagesWomen/39.jpg";
import Image40 from "../../ImagesWomen/40.jpg";
import Image41 from "../../ImagesWomen/41.jpg";
import Image42 from "../../ImagesWomen/42.jpg";
import Image43 from "../../ImagesWomen/43.jpg";
import Image44 from "../../ImagesWomen/44.jpg";
import Image45 from "../../ImagesWomen/45.jpg";
import Image46 from "../../ImagesWomen/46.jpg";
import Image47 from "../../ImagesWomen/47.jpg";
import Image48 from "../../ImagesWomen/48.jpg";
import ClothingCard from "../ClothingCard";
const ClothingMens = () => {
  const ListComponents = [
    [Image33, "Essential Borg Lined Zip Hoodie", "£64.99"],
    [Image34, "Graphic Logo Sparkle Hoodie", "£54.99"],
    [Image35, "Essential Borg Lined Zip Hoodie", "£64.99"],
    [Image36, "Organic Cotton Essential Logo Zip Hoodie", "£49.99"],
    [Image37, "Essential Borg Lined Zip Hoodie", "£64.99"],
    [Image38, "Code S Logo Heritage Oversized Hoodie", "£54.99"],
    [Image39, "Organic Cotton Vintage Logo Embroidered Zip", "£49.99"],
    [Image40, "Code S Logo Heritage Oversized Hoodie", "£54.99"],
    [Image41, "Essential Borg Lined Zip Hoodie", "£64.99"],
    [Image42, "Soft Lined Henley Borg Sweatshirt", "£59.99"],
    [Image43, "Printed Half Zip Fleece Top", "£59.99"],
    [Image44, "Soft Lined Henley Borg Sweatshirt", "£69.99"],
    [Image45, "Essential Borg Lined Zip Hoodie", "£64.99"],
    [Image46, "Vintage Logo Borough Crew Sweatshirt", "£49.99"],
    [Image47, "Organic Cotton Essential Logo Zip Hoodie", "£49.99"],
    [Image48, "Soft Lined Henley Borg Sweatshirt", "£69.99"],
  ];
  return (
    <div>
      <div className="sqdsqdsq">
        <div className="content">
          <h2>Women Hoodies & Sweatshirts</h2>
        </div>
      </div>
      <ClothingCard ClothingCard={ListComponents} />
    </div>
  );
};

export default ClothingMens;
