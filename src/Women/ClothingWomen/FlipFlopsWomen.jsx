import React from "react";
import Image432 from "../../ImagesWomen/432.jpg";
import Image433 from "../../ImagesWomen/433.jpg";
import Image434 from "../../ImagesWomen/434.jpg";
import Image435 from "../../ImagesWomen/435.jpg";
import Image436 from "../../ImagesWomen/436.jpg";
import Image437 from "../../ImagesWomen/437.jpg";
import Image438 from "../../ImagesWomen/438.jpg";
import Image439 from "../../ImagesWomen/439.jpg";
import Image440 from "../../ImagesWomen/440.jpg";
import Image441 from "../../ImagesWomen/441.jpg";
import Image442 from "../../ImagesWomen/442.jpg";
import Image443 from "../../ImagesWomen/443.jpg";
import Image444 from "../../ImagesWomen/444.jpg";
import Image445 from "../../ImagesWomen/445.jpg";
import Image446 from "../../ImagesWomen/446.jpg";
import Image447 from "../../ImagesWomen/447.jpg";
import ClothingCard from "../ClothingCard";
const ClothingMens = () => {
  const ListComponents = [
    [Image432, "Code Tie Dye Flip Flops", "£19.99"],
    [Image433, "Code Dip Dye Flip Flops", "£19.99"],
    [Image434, "Code Tie Dye Flip Flops", "£19.99"],
    [Image435, "Code Dip Dye Flip Flops", "£19.99"],
    [Image436, "Code Essential Flip Flops", "£19.99"],
    [Image437, "Classic Flip Flop", "£19.99"],
    [Image438, "Code Essential Flip Flops", "£19.99"],
    [Image439, "Vintage Classic Flip Flops", "£19.99"],
    [Image440, "Classic Vintage Flip Flops", "£19.99"],
    [Image441, "Vintage Classic Flip Flops", "£19.99"],
    [Image442, "Cork Flip Flop", "£19.99"],
    [Image443, "Vintage Classic Flip Flops", "£19.99"],
    [Image444, "Code Tie Dye Flip Flops", "£19.99"],
    [Image445, "Code Essential Flip Flops", "£19.99"],
    [Image446, "Vintage Classic Flip Flops", "£19.99"],
    [Image447, "Code Essential Flip Flops", "£19.99"],
  ];
  return (
    <div>
      <div className="content">
        <h2>Women Flip Flops</h2>
      </div>
      <ClothingCard ClothingCard={ListComponents} />
    </div>
  );
};

export default ClothingMens;
