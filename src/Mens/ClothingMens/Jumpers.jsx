import React from "react";
import Image142 from "../../Images/142.jpg";
import Image143 from "../../Images/143.jpg";
import Image144 from "../../Images/144.jpg";
import Image145 from "../../Images/145.jpg";
import Image146 from "../../Images/146.jpg";
import Image147 from "../../Images/147.jpg";
import Image148 from "../../Images/148.jpg";
import Image149 from "../../Images/149.jpg";
import Image150 from "../../Images/150.jpg";
import Image151 from "../../Images/151.jpg";
import Image152 from "../../Images/152.jpg";
import Image153 from "../../Images/153.jpg";
import Image154 from "../../Images/154.jpg";
import Image155 from "../../Images/155.jpg";
import Image156 from "../../Images/156.jpg";
import Image157 from "../../Images/157.jpg";
import ClothingCard from "../ClothingCard";
const ClothingMens = () => {
  const ListComponents = [
    [Image142, "Merino Half Zip Jumper", "£59.99"],
    [Image143, "Studios Merino Crew Jumper", "£49.99"],
    [Image144, "Academy Dyed Textured Jumper", "£49.99"],
    [Image145, "Jacob Henley Jumper", "£59.99"],
    [Image146, "Studios Merino Roll Neck Jumper", "£54.99"],
    [Image147, "Merino Zip Through Knitted Cardigan", "£69.99"],
    [Image148, "Wool Blend Cable Crew Neck Jumper", "£54.99"],
    [Image149, "Merino Zip Through Knitted Cardigan", "£69.99"],
    [Image150, "Patterned Knitted Shawl Jumper", "£84.99"],
    [Image151, "Merino Half Zip Jumper", "£59.99"],
    [Image152, "Merino Crew Neck Jumper", "£54.99"],
    [Image153, "Alpaca Chunky Roll Neck Jumper", "£79.99"],
    [Image154, "Fairisle Crew Knit Jumper", "£69.99"],
    [Image155, "Essential Organic Cotton Zip Hoodie", "£59.99"],
    [Image156, "Vintage Textured Crew Knit Jumper", "£49.99"],
    [Image157, "Fairisle Crew Knit Jumper", "£69.99"],
  ];
  return (
    <div>
      <div className="content">
        <h2>Men's Jumpers</h2>
      </div>
      <ClothingCard ClothingCard={ListComponents} />
    </div>
  );
};

export default ClothingMens;
