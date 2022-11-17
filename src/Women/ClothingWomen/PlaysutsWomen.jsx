import React from "react";
import Image193 from "../../ImagesWomen/193.jpg";
import Image194 from "../../ImagesWomen/194.jpg";
import Image195 from "../../ImagesWomen/195.jpg";
import Image196 from "../../ImagesWomen/196.jpg";
import Image197 from "../../ImagesWomen/197.jpg";
import Image198 from "../../ImagesWomen/198.jpg";
import Image199 from "../../ImagesWomen/199.jpg";
import Image200 from "../../ImagesWomen/200.jpg";
import Image201 from "../../ImagesWomen/201.jpg";
import Image202 from "../../ImagesWomen/202.jpg";
import Image203 from "../../ImagesWomen/203.jpg";
import Image204 from "../../ImagesWomen/204.jpg";
import Image205 from "../../ImagesWomen/205.jpg";
import Image206 from "../../ImagesWomen/206.jpg";
import Image207 from "../../ImagesWomen/207.jpg";
import Image208 from "../../ImagesWomen/208.jpg";
import ClothingCard from "../ClothingCard";
const ClothingMens = () => {
  const ListComponents = [
    [Image193, "Cord Dungarees", "£84.99"],
    [Image194, "Cord Dungarees", "£84.99"],
    [Image195, "Organic Cotton Carpenter Dungarees", "£84.99"],
    [Image196, "Cord Dungarees", "£84.99"],
    [Image197, "Vintage Halter Towel Playsuit", "£44.99"],
    [Image198, "Utility Dungaree shorts", "£59.99"],
    [Image199, "Vintage Halter Towel Playsuit", "£44.99"],
    [Image200, "Utility Dungaree shorts", "£59.99"],
    [Image201, "Utility Dungaree shorts", "£59.99"],
    [Image202, "Tencel Playsuit", "£79.99"],
    [Image203, "Slim Taper Dungarees", "£52.99"],
    [Image204, "Vintage Short Sleeve Twill Boiler Suit", "£45.99"],
    [Image205, "Vintage Short Sleeve Twill Boiler Suit", "£49.99"],
    [Image206, "Cupro Long Sleeved Shirt Jumpsuit", "£49.99"],
    [Image207, "Slim Taper Dungarees", "£42.99"],
    [Image208, "Cupro Long Sleeved Shirt Jumpsuit", "£44.99"],
  ];
  return (
    <div>
      <div className="content">
        <h2>Women Playsuits & Jumpsuits</h2>
      </div>
      <ClothingCard ClothingCard={ListComponents} />
    </div>
  );
};

export default ClothingMens;
