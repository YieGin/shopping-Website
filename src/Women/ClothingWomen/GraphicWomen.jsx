import React from "react";
import Image512 from "../../ImagesWomen/512.jpg";
import Image513 from "../../ImagesWomen/513.jpg";
import Image514 from "../../ImagesWomen/514.jpg";
import Image515 from "../../ImagesWomen/515.jpg";
import Image516 from "../../ImagesWomen/516.jpg";
import Image517 from "../../ImagesWomen/517.jpg";
import Image518 from "../../ImagesWomen/518.jpg";
import Image519 from "../../ImagesWomen/519.jpg";
import Image520 from "../../ImagesWomen/520.jpg";
import Image521 from "../../ImagesWomen/521.jpg";
import Image522 from "../../ImagesWomen/522.jpg";
import Image523 from "../../ImagesWomen/523.jpg";
import Image524 from "../../ImagesWomen/524.jpg";
import Image525 from "../../ImagesWomen/525.jpg";
import Image526 from "../../ImagesWomen/526.jpg";
import Image527 from "../../ImagesWomen/527.jpg";
import ClothingCard from "../ClothingCard";
const ClothingMens = () => {
  const ListComponents = [
    [Image512, "Embellished Graphic Logo T-Shirt", "£29.99"],
    [Image513, "90s Logo Patch Loose Fit T-Shirt", "£26.99"],
    [Image514, "Embellished Graphic Logo T-Shirt", "£26.99"],
    [Image515, "Metallica Limited Edition Band T-shirt", "£34.99"],
    [Image516, "College Graphic Cropped T-shirt", "£26.99"],
    [Image517, "Vintage Travel Sticker T-Shirt", "£26.99"],
    [Image518, "College Graphic Cropped T-shirt", "£26.99"],
    [Image519, "Rhinestone Japanese Graphic T Shirt", "£34.99"],
    [Image520, "Vintage Logo Heritage T-Shirt", "£26.99"],
    [Image521, "Vintage Core Logo Rainbow T-Shirt", "£26.99"],
    [Image522, "Vintage Trade Tab T-Shirt", "£26.99"],
    [Image523, "80s Downtown Script Logo T-Shirt", "£26.99"],
    [Image524, "Great Outdoors Graphic T-Shirt", "£26.99"],
    [Image525, "Metallica Limited Edition Band T-Shirt", "£34.99"],
    [Image526, "Blackout Rock Graphic T-Shirt", "£26.99"],
    [Image527, "Sex Pistols Limited Edition Band T-shirt", "£34.99"],
  ];
  return (
    <div>
      <div className="content">
        <h2>Women Graphic Tee Collection</h2>
      </div>
      <ClothingCard ClothingCard={ListComponents} />
    </div>
  );
};

export default ClothingMens;
