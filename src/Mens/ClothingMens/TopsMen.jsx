import React from "react";
import Image238 from "../../Images/238.jpg";
import Image239 from "../../Images/239.jpg";
import Image240 from "../../Images/240.jpg";
import Image241 from "../../Images/241.jpg";
import Image242 from "../../Images/242.jpg";
import Image243 from "../../Images/243.jpg";
import Image244 from "../../Images/244.jpg";
import Image245 from "../../Images/245.jpg";
import Image246 from "../../Images/246.jpg";
import Image247 from "../../Images/247.jpg";
import Image248 from "../../Images/248.jpg";
import Image249 from "../../Images/249.jpg";
import Image250 from "../../Images/250.jpg";
import Image251 from "../../Images/251.jpg";
import Image252 from "../../Images/252.jpg";
import Image253 from "../../Images/253.jpg";
import ClothingCard from "../ClothingCard";
const ClothingMens = () => {
  const ListComponents = [
    [Image238, "Long Sleeve Jersey Henley Top", "£29.99"],
    [Image239, "90s Terrain Long Sleeve Top", "£34.99"],
    [Image240, "Organic Cotton Essential Long Sleeved Baseball", "£26.99"],
    [Image241, "Tech Long Sleeve Top", "£29.99"],
    [Image242, "Venue Tonal Logo Long Sleeved Top", "£29.99"],
    [Image243, "Long Sleeve Jersey Henley Top", "£29.99"],
    [Image244, "Psych Rock Long Sleeve Top", "£29.99"],
    [Image245, "Organic Cotton Long Sleeve Pocket Top", "£24.99"],
    [Image246, "Organic Cotton Essential Long Sleeved Baseball", "£26.99"],
    [Image247, "Long Sleeve Micro Logo Top", "£29.99"],
    [Image248, "Tech Long Sleeve Top", "£26.99"],
    [Image249, "Organic Cotton Long Sleeve Pocket Top", "£26.99"],
    [Image250, "Vintage Logo American Classic Top", "£29.99"],
    [Image251, "Organic Cotton Vintage Logo Embroidered Top", "£24.99"],
    [Image252, "Merino Crew Neck Henley Knitted Top", "£49.99"],
    [Image253, "Psych Rock Long Sleeve Top", "£29.99"],
  ];
  return (
    <div>
      <div className="content">
        <h2>Men's Tops</h2>
      </div>
      <ClothingCard ClothingCard={ListComponents} />
    </div>
  );
};

export default ClothingMens;
