import React from "react";
import Image94 from "../../Images/94.jpg";
import Image95 from "../../Images/95.jpg";
import Image96 from "../../Images/96.jpg";
import Image97 from "../../Images/97.jpg";
import Image98 from "../../Images/98.jpg";
import Image99 from "../../Images/99.jpg";
import Image100 from "../../Images/100.jpg";
import Image101 from "../../Images/101.jpg";
import Image102 from "../../Images/102.jpg";
import Image103 from "../../Images/103.jpg";
import Image104 from "../../Images/104.jpg";
import Image105 from "../../Images/105.jpg";
import Image106 from "../../Images/106.jpg";
import Image107 from "../../Images/107.jpg";
import Image108 from "../../Images/108.jpg";
import Image109 from "../../Images/109.jpg";
import ClothingCard from "../ClothingCard";
const ClothingMens = () => {
  const ListComponents = [
    [Image94, "Wool Zip Borg Lined Check Overshirt", "£74.99"],
    [Image95, "Trailsman Cord Shirt", "£74.99"],
    [Image96, "Cotton Micro Check Shirt", "£44.99"],
    [Image97, "Wool Zip Borg Lined Check Overshirt", "£74.99"],
    [Image98, "Organic Cotton Trailsman Flannel Shirt", "£44.99"],
    [Image99, "Borg Lined Miller Overshirt", "£44.99"],
    [Image100, "Sherpa Lined Miller Wool Overshirt", "£54.99"],
    [Image101, "Casual Linen Long Sleeve Shirt", "£69.99"],
    [Image102, "Organic Cotton Lumberjack Check Shirt", "£74.99"],
    [Image103, "Organic Cotton Micro Check Shirt", "£44.99"],
    [Image104, "Organic Cotton Vintage Lumberjack Shirt", "£44.99"],
    [Image105, "Organic Cotton Trailsman Flannel Shirt", "£74.99"],
    [Image106, "Organic Cotton Vintage Oxford Shirt", "£44.99"],
    [Image107, "Organic Cotton Trailsman Flannel Shirt", "£69.99"],
    [Image108, "Linen Cotton Long Sleeve Shirt", "£74.99"],
    [Image109, "Sherpa Lined Miller Wool Overshirt", "£64.99"],
  ];
  return (
    <div>
      <div className="content">
        <h2>Men's Shirts</h2>
      </div>
      <ClothingCard ClothingCard={ListComponents} />
    </div>
  );
};

export default ClothingMens;
