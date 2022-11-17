import React from "react";
import Image522 from "../../Images/522.jpg";
import Image523 from "../../Images/523.jpg";
import Image524 from "../../Images/524.jpg";
import Image525 from "../../Images/525.jpg";
import Image526 from "../../Images/526.jpg";
import Image527 from "../../Images/527.jpg";
import Image528 from "../../Images/528.jpg";
import Image529 from "../../Images/529.jpg";
import Image530 from "../../Images/530.jpg";
import Image531 from "../../Images/531.jpg";
import Image532 from "../../Images/532.jpg";
import Image533 from "../../Images/533.jpg";
import Image534 from "../../Images/534.jpg";
import Image535 from "../../Images/535.jpg";
import Image536 from "../../Images/536.jpg";
import Image537 from "../../Images/537.jpg";
import ClothingCard from "../ClothingCard";
const ClothingMens = () => {
  const ListComponents = [
    [Image522, "Everest Parka Coat", "£139.99"],
    [Image523, "Ultimate SD Windcheater Jacket", "£94.99"],
    [Image524, "Hooded Classic Puffer Jacket", "£89.99"],
    [Image525, "Heat Sealed Padded Jacket", "£99.99"],
    [Image526, "Sherpa Lined Miller Wool Overshirt", "£74.99"],
    [Image527, "Organic Cotton Slim Jeans", "£74.99"],
    [Image528, "Vintage 90s Terrain Hoodie", "£59.99"],
    [Image529, "Organic Cotton Slim Jeans", "£74.99"],
    [Image530, "Merino Half Zip Jumper", "£59.99"],
    [Image531, "Organic Cotton Vintage Lumberjack Shirt", "£44.99"],
    [Image532, "Essential Borg Lined Zip Hoodie", "£64.99"],
    [Image533, "Vintage Logo Seasonal T-Shirt", "£26.99"],
    [Image534, "Sherpa Lined Miller Wool Overshirt", "£74.99"],
    [Image535, "Embroidered Micro Logo Loose Fit Hoodie", "£49.99"],
    [Image536, "Sherpa Lined Miller Wool Overshirt", "£74.99"],
    [Image537, "Code Micro Logo T-Shirt", "£26.99"],
  ];
  return (
    <div>
      <div className="sqdsqdsq">
        <div className="content">
          <h2>Men's Autumn Edit</h2>
        </div>
      </div>
      <ClothingCard ClothingCard={ListComponents} />
    </div>
  );
};

export default ClothingMens;
