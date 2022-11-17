import React from "react";
import Image65 from "../../ImagesWomen/65.jpg";
import Image66 from "../../ImagesWomen/66.jpg";
import Image67 from "../../ImagesWomen/67.jpg";
import Image68 from "../../ImagesWomen/68.jpg";
import Image69 from "../../ImagesWomen/69.jpg";
import Image70 from "../../ImagesWomen/70.jpg";
import Image71 from "../../ImagesWomen/71.jpg";
import Image72 from "../../ImagesWomen/72.jpg";
import Image73 from "../../ImagesWomen/73.jpg";
import Image74 from "../../ImagesWomen/74.jpg";
import Image75 from "../../ImagesWomen/75.jpg";
import Image76 from "../../ImagesWomen/76.jpg";
import Image77 from "../../ImagesWomen/77.jpg";
import Image78 from "../../ImagesWomen/78.jpg";
import Image79 from "../../ImagesWomen/79.jpg";
import Image80 from "../../ImagesWomen/80.jpg";
import ClothingCard from "../ClothingCard";
const ClothingMens = () => {
  const ListComponents = [
    [Image65, "Organic Cotton Wrap Over Long Sleeve Top", "£19.99"],
    [Image66, "Vintage Oversized Check Shirt", "£44.99"],
    [Image67, "Organic Cotton Wrap Over Long Sleeve Top", "£19.99"],
    [Image68, "Lace Satin Cami Top", "£29.99"],
    [Image69, "Borg Flannel Check Overshirt", "£74.99"],
    [Image70, "Cord Western Shirt", "£44.99"],
    [Image71, "Organic Cotton Vintage Logo Embroidered", "£22.99"],
    [Image72, "Vintage Mini Rib Lace Cami Top", "£14.99"],
    [Image73, "Penny Collar Shirt Blouse", "£44.99"],
    [Image74, "Ringspun Allstars AW Vintage Re-issue Vest", "£26.99"],
    [Image75, "Organic Cotton Vintage Logo Embroidered", "£22.99"],
    [Image76, "Vintage Mini Rib Lace Cami Top", "£14.99"],
    [Image77, "Organic Cotton Cropped Flannel Check Shirt", "£44.99"],
    [Image78, "Organic Cotton Vintage Logo Embroidered", "£22.99"],
    [Image79, "Organic Cotton Vintage Baseball Long Sleeve", "£24.99"],
    [Image80, "Smocked Long Sleeve Woven Top", "£39.99"],
  ];
  return (
    <div>
      <div className="content">
        <h2>Women Tops</h2>
      </div>
      <ClothingCard ClothingCard={ListComponents} />
    </div>
  );
};

export default ClothingMens;
