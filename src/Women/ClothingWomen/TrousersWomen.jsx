import React from "react";
import Image129 from "../../ImagesWomen/129.jpg";
import Image130 from "../../ImagesWomen/130.jpg";
import Image131 from "../../ImagesWomen/131.jpg";
import Image132 from "../../ImagesWomen/132.jpg";
import Image133 from "../../ImagesWomen/133.jpg";
import Image134 from "../../ImagesWomen/134.jpg";
import Image135 from "../../ImagesWomen/135.jpg";
import Image136 from "../../ImagesWomen/136.jpg";
import Image137 from "../../ImagesWomen/137.jpg";
import Image138 from "../../ImagesWomen/138.jpg";
import Image139 from "../../ImagesWomen/139.jpg";
import Image140 from "../../ImagesWomen/140.jpg";
import Image141 from "../../ImagesWomen/141.jpg";
import Image142 from "../../ImagesWomen/142.jpg";
import Image143 from "../../ImagesWomen/143.jpg";
import Image144 from "../../ImagesWomen/144.jpg";
import ClothingCard from "../ClothingCard";
const ClothingMens = () => {
  const ListComponents = [
    [Image129, "Vintage Wide Leg Cord Trousers", "£59.99"],
    [Image130, "Organic Cotton Baggy Cargo Pants", "£59.99"],
    [Image131, "Low Rise Velvet Flare Jeans", "£64.99"],
    [Image132, "Organic Cotton Baggy Cargo Pants", "£59.99"],
    [Image133, "Low Rise Velvet Flare Jeans", "£64.99"],
    [Image134, "Wide Leg Carpenter Pants", "£59.99"],
    [Image135, "Low Rise Velvet Flare Jeans", "£64.99"],
    [Image136, "Vintage Wide Leg Cord Trousers", "£59.99"],
    [Image137, "Low Rise Velvet Flare Jeans", "£54.99"],
    [Image138, "Vintage Wide Leg Cord Trousers", "£54.99"],
    [Image139, "Organic Cotton Slim Cargo Pants", "£59.99"],
    [Image140, "Organic Cotton Parachute Grip Pants", "£64.99"],
    [Image141, "Mid Rise Slim Cord Flare Jeans", "£54.99"],
    [Image142, "Wide Leg Carpenter Pants", "£54.99"],
    [Image143, "Mid Rise Slim Cord Flare Jeans", "£59.99"],
    [Image144, "Organic Cotton High Rise Carpenter Pants", "£54.99"],
  ];
  return (
    <div>
      <div className="content">
        <h2>Women Trousers</h2>
      </div>
      <ClothingCard ClothingCard={ListComponents} />
    </div>
  );
};

export default ClothingMens;
