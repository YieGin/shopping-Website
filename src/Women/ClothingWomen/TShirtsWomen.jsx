import React from "react";
import Image81 from "../../ImagesWomen/81.jpg";
import Image82 from "../../ImagesWomen/82.jpg";
import Image83 from "../../ImagesWomen/83.jpg";
import Image84 from "../../ImagesWomen/84.jpg";
import Image85 from "../../ImagesWomen/85.jpg";
import Image86 from "../../ImagesWomen/86.jpg";
import Image87 from "../../ImagesWomen/87.jpg";
import Image88 from "../../ImagesWomen/88.jpg";
import Image89 from "../../ImagesWomen/89.jpg";
import Image90 from "../../ImagesWomen/90.jpg";
import Image91 from "../../ImagesWomen/91.jpg";
import Image92 from "../../ImagesWomen/92.jpg";
import Image93 from "../../ImagesWomen/93.jpg";
import Image94 from "../../ImagesWomen/94.jpg";
import Image95 from "../../ImagesWomen/95.jpg";
import Image96 from "../../Images/96.jpg";
import ClothingCard from "../ClothingCard";
const ClothingMens = () => {
  const ListComponents = [
    [Image81, "Rhinestone Japanese Graphic T Shirt", "£24.99"],
    [Image82, "Organic Cotton Vintage Logo T-Shirt", "£19.99"],
    [Image83, "Rhinestone Japanese Graphic T Shirt", "£24.99"],
    [Image84, "Embellished Graphic Logo T-Shirt", "£24.99"],
    [Image85, "Rock Graphic Loose Fit Band T Shirt", "£26.99"],
    [Image86, "Sex Pistols Limited Edition Band T-shirt", "£29.99"],
    [Image87, "Embellished Graphic Logo T-Shirt", "£24.99"],
    [Image88, "Sex Pistols Limited Edition Band T-shirt", "£29.99"],
    [Image89, "Slub Jersey V-Neck T-Shirt", "£19.99"],
    [Image90, "College Graphic Cropped T-shirt", "£22.99"],
    [Image91, "90s Logo Patch Loose Fit T-Shirt", "£24.99"],
    [Image92, "Embellished Graphic Logo T-Shirt", "£24.99"],
    [Image93, "Rhinestone Japanese Graphic T Shirt", "£24.99"],
    [Image94, "90s Terrain Graphic T-Shirt", "£24.99"],
    [Image95, "Rock Graphic Loose Fit Band T Shirt", "£26.99"],
    [Image96, "College Graphic Cropped T-shirt", "£22.99"],
  ];
  return (
    <div>
      <div className="content">
        <h2>Women T-Shirts</h2>
      </div>
      <ClothingCard ClothingCard={ListComponents} />
    </div>
  );
};

export default ClothingMens;
