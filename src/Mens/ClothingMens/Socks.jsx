import React from "react";
import Image366 from "../../Images/366.jpg";
import Image367 from "../../Images/367.jpg";
import Image368 from "../../Images/368.jpg";
import Image369 from "../../Images/369.jpg";
import Image370 from "../../Images/370.jpg";
import Image371 from "../../Images/371.jpg";
import Image372 from "../../Images/372.jpg";
import Image373 from "../../Images/373.jpg";
import Image374 from "../../Images/374.jpg";
import Image375 from "../../Images/375.jpg";
import Image376 from "../../Images/376.jpg";
import Image377 from "../../Images/377.jpg";
import Image378 from "../../Images/378.jpg";
import Image379 from "../../Images/379.jpg";
import Image380 from "../../Images/380.jpg";
import Image381 from "../../Images/381.jpg";
import ClothingCard from "../ClothingCard";
const ClothingMens = () => {
  const ListComponents = [
    [Image366, "Unisex Organic Cotton Ankle Sock Pack", "£19.99"],
    [Image367, "Unisex Organic Cotton Ankle Sock Pack", "£19.99"],
    [Image368, "Coolmax Ankle Socks", "£14.99"],
    [Image369, "Coolmax Ankle Socks", "£14.99"],
    [Image370, "Organic Cotton Sport Socks", "£8.99"],
    [Image371, "Unisex Core Nep Socks", "£8.99"],
    [Image372, "Unisex Organic Cotton Core Rib Socks", "£8.99"],
    [Image373, "Lowell Neps Socks", "£7.99"],
    [Image374, "Unisex Organic Cotton Twist Sock Pack", "£8.99"],
    [Image375, "Unisex Organic Cotton Twist Sock Pack", "£18.99"],
    [Image376, "Coolmax Crew Socks", "£17.99"],
    [Image377, "Coolmax Crew Socks", "£17.99"],
    [Image378, "Organic Cotton Sport Socks", "£9.99"],
    [Image379, "Unisex Core Nep Socks", "£9.99"],
    [Image380, "Unisex Organic Cotton Core Rib Socks", "£8.99"],
    [Image381, "Lowell Neps Socks", "£9.99"],
  ];
  return (
    <div>
      <div className="content">
        <h2>Men's Socks</h2>
      </div>
      <ClothingCard ClothingCard={ListComponents} />
    </div>
  );
};

export default ClothingMens;
