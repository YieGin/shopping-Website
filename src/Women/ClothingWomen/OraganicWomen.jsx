import React from "react";
import Image528 from "../../ImagesWomen/528.jpg";
import Image529 from "../../ImagesWomen/529.jpg";
import Image530 from "../../ImagesWomen/530.jpg";
import Image531 from "../../ImagesWomen/531.jpg";
import Image532 from "../../ImagesWomen/532.jpg";
import Image533 from "../../ImagesWomen/533.jpg";
import Image534 from "../../ImagesWomen/534.jpg";
import Image535 from "../../ImagesWomen/535.jpg";
import Image536 from "../../ImagesWomen/536.jpg";
import Image537 from "../../ImagesWomen/537.jpg";
import Image538 from "../../ImagesWomen/538.jpg";
import Image539 from "../../ImagesWomen/539.jpg";
import Image540 from "../../ImagesWomen/540.jpg";
import Image541 from "../../ImagesWomen/541.jpg";
import Image542 from "../../ImagesWomen/542.jpg";
import Image543 from "../../ImagesWomen/543.jpg";
import ClothingCard from "../ClothingCard";
const ClothingMens = () => {
  const ListComponents = [
    [Image528, "Organic Cotton Wrap Over Long Sleeve Top", "£19.99"],
    [Image529, "Organic Cotton Essential Logo Hoodie", "£44.99"],
    [Image530, "Organic Cotton Wrap Over Long Sleeve Top", "£19.99"],
    [Image531, "Organic Cotton Carpenter Dungarees", "£84.99"],
    [Image532, "Organic Cotton Essential Logo Zip Hoodie", "£49.99"],
    [Image533, "Organic Cotton Essential Logo Joggers", "£44.99"],
    [Image534, "Organic Cotton Cropped Flannel Check Shirt", "£44.99"],
    [Image535, "Organic Cotton Vintage Carpenter Jeans", "£74.99"],
    [Image536, "Organic Cotton Vintage Logo T-Shirt", "£17.99"],
    [Image537, "Organic Cotton Cali Stripe 2.0 Raglan T-Shirt", "£26.99"],
    [Image538, "Linen Boyfriend Shirt", "£44.99"],
    [Image539, "Organic Cotton Cali Stripe 2.0 Raglan T-Shirt", "£26.99"],
    [Image540, "Organic Cotton Vintage Logo T-Shirt", "£19.99"],
    [Image541, "Organic Cotton Wide Leg Jeans", "£64.99"],
    [Image542, "Organic Cotton Essential Logo Zip Hoodie", "£49.99"],
    [Image543, "Organic Cotton Essential Logo Joggers", "£44.99"],
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
