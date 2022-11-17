import React from "react";
import Image145 from "../../ImagesWomen/145.jpg";
import Image146 from "../../ImagesWomen/146.jpg";
import Image147 from "../../ImagesWomen/147.jpg";
import Image148 from "../../ImagesWomen/148.jpg";
import Image149 from "../../ImagesWomen/149.jpg";
import Image150 from "../../ImagesWomen/150.jpg";
import Image151 from "../../ImagesWomen/151.jpg";
import Image152 from "../../ImagesWomen/152.jpg";
import Image153 from "../../ImagesWomen/153.jpg";
import Image154 from "../../ImagesWomen/154.jpg";
import Image155 from "../../ImagesWomen/155.jpg";
import Image156 from "../../ImagesWomen/156.jpg";
import Image157 from "../../ImagesWomen/157.jpg";
import Image158 from "../../ImagesWomen/158.jpg";
import Image159 from "../../ImagesWomen/159.jpg";
import Image160 from "../../ImagesWomen/160.jpg";
import ClothingCard from "../ClothingCard";
const ClothingMens = () => {
  const ListComponents = [
    [Image145, "Cable Knit Polo Neck Jumper", "£59.99"],
    [Image146, "Cropped Classic Crew Jumper", "£49.99"],
    [Image147, "Cable Knit Polo Neck Jumper", "£44.99"],
    [Image148, "Drop Shoulder Cable Roll Neck Jumper", "£44.99"],
    [Image149, "Drop Shoulder Cable Roll Neck Jumper", "£54.99"],
    [Image150, "Tweed Ribbed Crew Neck Jumper", "£49.99"],
    [Image151, "Vintage Essential Mock Neck Jumper", "£49.99"],
    [Image152, "Essential Super Soft Cardigan", "£69.99"],
    [Image153, "Pointelle Cable Knit Jumper", "£44.99"],
    [Image154, "Cable Knit Polo Neck Jumper", "£59.99"],
    [Image155, "Cropped Classic Crew Jumper", "£49.99"],
    [Image156, "Cable Knit Polo Neck Jumper", "£59.99"],
    [Image157, "Vintage Essential Mock Neck Jumper", "£49.99"],
    [Image158, "Dropped Shoulder Cable Knit Crew Neck", "£49.99"],
    [Image159, "Oversized V Neck Cardigan", "£69.99"],
    [Image160, "Slouchy Stitch Roll Neck Knit Jumper", "£49.99"],
  ];
  return (
    <div>
      <div className="content">
        <h2>Women Jumpers</h2>
      </div>
      <ClothingCard ClothingCard={ListComponents} />
    </div>
  );
};

export default ClothingMens;
