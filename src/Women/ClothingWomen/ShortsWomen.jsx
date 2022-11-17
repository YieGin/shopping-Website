import React from "react";
import Image209 from "../../ImagesWomen/209.jpg";
import Image210 from "../../ImagesWomen/210.jpg";
import Image211 from "../../ImagesWomen/211.jpg";
import Image212 from "../../ImagesWomen/212.jpg";
import Image213 from "../../ImagesWomen/213.jpg";
import Image214 from "../../ImagesWomen/214.jpg";
import Image215 from "../../ImagesWomen/215.jpg";
import Image216 from "../../ImagesWomen/216.jpg";
import Image217 from "../../ImagesWomen/217.jpg";
import Image218 from "../../ImagesWomen/218.jpg";
import Image219 from "../../ImagesWomen/219.jpg";
import Image220 from "../../ImagesWomen/220.jpg";
import Image221 from "../../ImagesWomen/221.jpg";
import Image222 from "../../ImagesWomen/222.jpg";
import Image223 from "../../ImagesWomen/223.jpg";
import Image224 from "../../ImagesWomen/224.jpg";
import ClothingCard from "../ClothingCard";
const ClothingMens = () => {
  const ListComponents = [
    [Image209, "Studios Linen Shorts", "£44.99"],
    [Image210, "Organic Cotton Vintage Logo Jersey Shorts", "£29.99"],
    [Image211, "Cupro Shorts", "£44.99"],
    [Image212, "Organic Cotton Vintage Logo Jersey Shorts", "£29.99"],
    [Image213, "Organic Cotton Vintage Logo Jersey Shorts", "£29.99"],
    [Image214, "Cupro Shorts", "£39.99"],
    [Image215, "Organic Cotton Vintage Logo Jersey Shorts", "£29.99"],
    [Image216, "Mid Rise Slim Shorts", "£44.99"],
    [Image217, "Organic Cotton Vintage Logo Jersey Shorts", "£29.99"],
    [Image218, "Mid Rise Slim Shorts", "£44.99"],
    [Image219, "Organic Cotton Vintage Logo Jersey Shorts", "£29.99"],
    [Image220, "Studios Linen Shorts", "£34.99"],
    [Image221, "Organic Cotton Vintage Logo Jersey Shorts", "£39.99"],
    [Image222, "Organic Cotton Studios High Rise Shorts", "£34.99"],
    [Image223, "Organic Cotton Vintage Logo Jersey Shorts", "£26.99"],
    [Image224, "Vintage Beach Printed Shorts", "£34.99"],
  ];
  return (
    <div>
      <div className="content">
        <h2>Women Shorts</h2>
      </div>
      <ClothingCard ClothingCard={ListComponents} />
    </div>
  );
};

export default ClothingMens;
