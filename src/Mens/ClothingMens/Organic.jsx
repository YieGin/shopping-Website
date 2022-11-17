import React from "react";
import Image554 from "../../Images/554.jpg";
import Image555 from "../../Images/555.jpg";
import Image556 from "../../Images/556.jpg";
import Image557 from "../../Images/557.jpg";
import Image558 from "../../Images/558.jpg";
import Image559 from "../../Images/559.jpg";
import Image560 from "../../Images/560.jpg";
import Image561 from "../../Images/561.jpg";
import Image562 from "../../Images/562.jpg";
import Image563 from "../../Images/563.jpg";
import Image564 from "../../Images/564.jpg";
import Image565 from "../../Images/565.jpg";
import Image566 from "../../Images/566.jpg";
import Image567 from "../../Images/567.jpg";
import Image568 from "../../Images/568.jpg";
import Image569 from "../../Images/569.jpg";
import ClothingCard from "../ClothingCard";
const ClothingMens = () => {
  const ListComponents = [
    [Image554, "Organic Cotton Vintage Lumberjack Shirt", "£44.99"],
    [Image555, "Organic Cotton Pocket T-Shirt", "£22.99"],
    [Image556, "Organic Cotton Essential Logo Crew Sweatshirt", "£44.99"],
    [Image557, "Organic Cotton Essential Logo Hoodie", "£49.99"],
    [Image558, "Organic Cotton Long Sleeve Pocket Top", "£24.99"],
    [Image559, "Organic Cotton Slim Straight Jeans", "£74.99"],
    [Image560, "Organic Cotton Pocket T-Shirt", "£22.99"],
    [Image561, "Organic Cotton Essential Logo Hoodie", "£49.99"],
    [Image562, "Organic Cotton Trailsman Flannel Shirt", "£44.99"],
    [Image563, "Organic Cotton Long Sleeve Pocket Top", "£24.99"],
    [Image564, "Organic Cotton Essential Logo Baseball T-Shirt", "£22.99"],
    [Image565, "Organic Cotton Slim Straight Jeans", "£74.99"],
    [Image566, "Organic Cotton Essential Logo Crew Sweatshirt", "£24.99"],
    [Image567, "Organic Cotton Essential Logo Ringer T-Shirt", "£22.99"],
    [Image568, "Organic Cotton Long Sleeve Henley Top", "£29.99"],
    [Image569, "Organic Cotton Embroidered Henley Sweatshirt", "£49.99"],
  ];
  return (
    <div>
      <div className="content">
        <h2>Men's Organic Cotton Clothing</h2>
      </div>
      <ClothingCard ClothingCard={ListComponents} />
    </div>
  );
};

export default ClothingMens;
