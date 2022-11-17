import React from "react";
import Image62 from "../../Images/62.jpg";
import Image63 from "../../Images/63.jpg";
import Image64 from "../../Images/64.jpg";
import Image65 from "../../Images/65.jpg";
import Image66 from "../../Images/66.jpg";
import Image67 from "../../Images/67.jpg";
import Image68 from "../../Images/68.jpg";
import Image69 from "../../Images/69.jpg";
import Image70 from "../../Images/70.jpg";
import Image71 from "../../Images/71.jpg";
import Image72 from "../../Images/72.jpg";
import Image73 from "../../Images/73.jpg";
import Image74 from "../../Images/74.jpg";
import Image75 from "../../Images/75.jpg";
import Image76 from "../../Images/76.jpg";
import Image77 from "../../Images/77.jpg";
import ClothingCard from "../ClothingCard";
const ClothingMens = () => {
  const ListComponents = [
    [Image62, "Psych Rock T-Shirt", "£26.99"],
    [Image63, "Organic Cotton Pocket T-Shirt", "£22.99"],
    [Image64, "Great Outdoors Graphic T-Shirt", "£26.99"],
    [Image65, "Organic Cotton Pocket T-Shirt", "£22.99"],
    [Image66, "Organic Cotton Essential Logo Baseball T-Shirt", "£22.99"],
    [Image67, "80s Downtown Script Logo T-Shirt", "£26.99"],
    [Image68, "Organic Cotton Stripe Pocket T-Shirt", "£29.99"],
    [Image69, "Ringspun Allstars CG Vintage Re-issue T-Shirt", "£29.99"],
    [Image70, "Metallica Limited Edition Band T-Shirt ", "£34.99"],
    [Image71, "Vintage Logo Heritage T-Shirt", "£26.99"],
    [Image72, "Organic Cotton Essential Logo T-Shirt", "£19.99"],
    [Image73, "Metallica Limited Edition Band T-Shirt", "£34.99"],
    [Image74, "90s Terrain Graphic T-Shirt", "£29.99"],
    [Image75, "Organic Cotton Essential Logo Baseball T-Shirt", "£22.99"],
    [Image76, "Ringspun Allstars KF Vintage Re-issue T-Shirt", "£29.99"],
    [Image77, "Great Outdoors Graphic T-Shirt", "£29.99"],
  ];
  return (
    <div>
      <div className="content">
        <h2>Men's T-Shirts</h2>
      </div>
      <ClothingCard ClothingCard={ListComponents} />
    </div>
  );
};

export default ClothingMens;
