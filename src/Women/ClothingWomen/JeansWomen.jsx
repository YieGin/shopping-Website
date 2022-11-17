import React from "react";
import Image97 from "../../ImagesWomen/97.jpg";
import Image98 from "../../ImagesWomen/98.jpg";
import Image99 from "../../ImagesWomen/99.jpg";
import Image100 from "../../ImagesWomen/100.jpg";
import Image101 from "../../ImagesWomen/101.jpg";
import Image102 from "../../ImagesWomen/102.jpg";
import Image103 from "../../ImagesWomen/103.jpg";
import Image104 from "../../ImagesWomen/104.jpg";
import Image105 from "../../ImagesWomen/105.jpg";
import Image106 from "../../ImagesWomen/106.jpg";
import Image107 from "../../ImagesWomen/107.jpg";
import Image108 from "../../ImagesWomen/108.jpg";
import Image109 from "../../ImagesWomen/109.jpg";
import Image110 from "../../ImagesWomen/110.jpg";
import Image111 from "../../ImagesWomen/111.jpg";
import Image112 from "../../ImagesWomen/112.jpg";
import ClothingCard from "../ClothingCard";
const ClothingMens = () => {
  const ListComponents = [
    [Image97, "Organic Cotton Wide Leg Jeans", "£64.99"],
    [Image98, "Organic Cotton Mid Rise Slim Flare Jeans", "£64.99"],
    [Image99, "Organic Cotton Wide Leg Jeans", "£64.99"],
    [Image100, "Organic Cotton Vintage Carpenter Jeans", "£74.99"],
    [Image101, "Organic Cotton Wide Leg Jeans", "£64.99"],
    [Image102, "Organic Cotton High Rise Skinny Denim Jeans", "£64.99"],
    [Image103, "Organic Cotton Wide Leg Jeans", "£64.99"],
    [Image104, "Organic Cotton Vintage Mid Rise Skinny Jeans", "£64.99"],
    [Image105, "Organic Cotton Vintage Carpenter Jeans", "£74.99"],
    [Image106, "Organic Cotton Vintage Mid Rise Skinny Jeans", "£64.99"],
    [Image107, "Organic Cotton Mid Rise Slim Flare Jeans", "£64.99"],
    [Image108, "Organic Cotton High Rise Skinny Denim Jeans", "£64.99"],
    [Image109, "Organic Cotton High Rise Skinny Denim Jeans", "£64.99"],
    [Image110, "Organic Cotton Vintage Mid Rise Skinny Jeans", "£64.99"],
    [Image111, "Organic Cotton High Rise Skinny Denim Jeans", "£64.99"],
    [Image112, "Organic Cotton Mid Rise Slim Flare Jeans", "£64.99"],
  ];
  return (
    <div>
      <div className="content">
        <h2>Women Jeans</h2>
      </div>
      <ClothingCard ClothingCard={ListComponents} />
    </div>
  );
};

export default ClothingMens;
