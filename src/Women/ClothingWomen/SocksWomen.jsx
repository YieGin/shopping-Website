import React from "react";
import Image353 from "../../ImagesWomen/353.jpg";
import Image354 from "../../ImagesWomen/354.jpg";
import Image355 from "../../ImagesWomen/355.jpg";
import Image356 from "../../ImagesWomen/356.jpg";
import Image357 from "../../ImagesWomen/357.jpg";
import Image358 from "../../ImagesWomen/358.jpg";
import Image359 from "../../ImagesWomen/359.jpg";
import Image360 from "../../ImagesWomen/360.jpg";
import Image361 from "../../ImagesWomen/361.jpg";
import Image362 from "../../ImagesWomen/362.jpg";
import Image363 from "../../ImagesWomen/363.jpg";
import Image364 from "../../ImagesWomen/364.jpg";
import Image365 from "../../ImagesWomen/365.jpg";
import Image366 from "../../ImagesWomen/366.jpg";
import Image367 from "../../ImagesWomen/367.jpg";
import Image368 from "../../ImagesWomen/368.jpg";
import ClothingCard from "../ClothingCard";
const ClothingMens = () => {
  const ListComponents = [
    [Image353, "Unisex Organic Cotton Twist Sock Pack", "£17.99"],
    [Image354, "Organic Cotton Hiker Sock Pack", "£17.99"],
    [Image355, "Unisex Organic Cotton Ankle Sock Pack", "£19.99"],
    [Image356, "Unisex Organic Cotton Ankle Sock Pack", "£19.99"],
    [Image357, "Organic Cotton Hiker Sock Pack", "£17.99"],
    [Image358, "Unisex Organic Cotton Twist Sock Pack", "£17.99"],
    [Image359, "Coolmax Ankle Socks", "£14.99"],
    [Image360, "Coolmax® No Show Sock", "£14.99"],
    [Image361, "Organic Cotton Sport Socks", "£8.99"],
    [Image362, "Organic Cotton Sport Socks", "£8.99"],
    [Image363, "Unisex Organic Cotton Twist Sock Pack", "£17.99"],
    [Image364, "Unisex Organic Cotton Twist Sock Pack", "£17.99"],
    [Image365, "Coolmax Ankle Socks", "£14.99"],
    [Image366, "Unisex Organic Cotton Trainer Sock Pack", "£14.99"],
    [Image367, "Coolmax Invisible Sock 3 Pack", "£14.99"],
    [Image368, "Coolmax Invisible Sock 3 Pack", "£14.99"],
  ];
  return (
    <div>
      <div className="content">
        <h2>Women Socks</h2>
      </div>
      <ClothingCard ClothingCard={ListComponents} />
    </div>
  );
};

export default ClothingMens;
