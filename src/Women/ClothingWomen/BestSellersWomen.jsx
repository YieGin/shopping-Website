import React from "react";
import Image448 from "../../ImagesWomen/448.jpg";
import Image449 from "../../ImagesWomen/449.jpg";
import Image450 from "../../ImagesWomen/450.jpg";
import Image451 from "../../ImagesWomen/451.jpg";
import Image452 from "../../ImagesWomen/452.jpg";
import Image453 from "../../ImagesWomen/453.jpg";
import Image454 from "../../ImagesWomen/454.jpg";
import Image455 from "../../ImagesWomen/455.jpg";
import Image456 from "../../ImagesWomen/456.jpg";
import Image457 from "../../ImagesWomen/457.jpg";
import Image458 from "../../ImagesWomen/458.jpg";
import Image459 from "../../ImagesWomen/459.jpg";
import Image460 from "../../ImagesWomen/460.jpg";
import Image461 from "../../ImagesWomen/461.jpg";
import Image462 from "../../ImagesWomen/462.jpg";
import Image463 from "../../ImagesWomen/463.jpg";
import ClothingCard from "../ClothingCard";
const ClothingMens = () => {
  const ListComponents = [
    [Image448, "Hooded Maxi Puffer Coat", "£74.99"],
    [Image449, "Ripstop Longline Puffer Jacket", "£74.99"],
    [Image450, "Faux Fur Hooded Longline Light Padded ", "£74.99"],
    [Image451, "Ripstop Longline Puffer Jacket", "£74.99"],
    [Image452, "Vintage Jacquard Mock Neck Jumper", "£74.99"],
    [Image453, "Essential Borg Lined Zip Hoodie", "£74.99"],
    [Image454, "Cable Knit Polo Neck Jumper", "£74.99"],
    [Image455, "Essential Borg Lined Zip Hoodie", "£74.99"],
    [Image456, "Faux Fur Hooded Mid Length Puffer Jacket", "£74.99"],
    [Image457, "Faux Fur Lined Longline Afghan Coat", "£74.99"],
    [Image458, "Longline Faux Fur Everest Coat", "£74.99"],
    [Image459, "Faux Fur Hooded Longline Light Padded ", "£74.99"],
    [Image460, "Borg Flannel Check Overshirt", "£74.99"],
    [Image461, "Hooded Faux Fur Longline Puffer Gilet", "£124.99"],
    [Image462, "Graphic Logo Sparkle Hoodie", "£54.99"],
    [Image463, "Oversized V Neck Cardigan", "£64.99"],
  ];
  return (
    <div>
      <div className="content">
        <h2>Women Collection Best Sellers</h2>
      </div>
      <ClothingCard ClothingCard={ListComponents} />
    </div>
  );
};

export default ClothingMens;
