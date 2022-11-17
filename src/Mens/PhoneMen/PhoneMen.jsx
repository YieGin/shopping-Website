import React from "react";
import PhoneMenCard from "./PhoneMenCard";
const PhoneMen = () => {
  const ListofMen = [
    [
      ["Clothing"],
      [, "/$50", "3 for $50 T-Shirts"],
      [, "/Jackets", "Jackets & Coats"],
      [, "/Hoodies", "Hoodies & Sweatshirts"],
      [, "/TShirts", "T-Shirts"],
      [, "/Polo", "Polo Shirts"],
      [, "/Shirts", "Shirts"],
      [, "/Jeans", "Jeans"],
      [, "/Joggers", "Joggers"],
      [, "/Jumpers", "Jumpers"],
      [, "/Loungewear", "Loungewear"],
      [, "/Shorts", "Shorts"],
      [, "/Ski", "Ski & Snowboard"],
      [, "/SportswearMen", "Sportswear"],
      [, "/SwimwearMen", "Swimwear"],
      [, "/TopsMen", "Tops"],
      [, "/TrousersMen", "Trousers & Chinos"],
    ],
    [
      ["Bags & Accessories"],
      [, "/ViewMen", "View All"],
      [, "BagsMen", "Bags & Backpacks"],
      [, "/HatsMen", "Hats & Caps"],
      [, "/GlovesMen", "Gloves"],
      [, "/Scarves", "Scarves"],
      [, "/Underwear", "Underwear"],
      [, "/Socks", "Socks"],
      [, "/ReusableMen", "Reusable Water Bottles"],
    ],
    [
      ["Footwear"],
      [, "/ViewFootwear", "View All"],
      [, "/Trainers", "Trainers"],
      [, "/Vegan", "Vegan Trainers"],
      [, "/Sliders", "Sliders"],
      [, "/FlipFlops", "Flip Flops"],
    ],
    [
      ["Trending"],
      [, "/BestSellers", "Best Sellers"],
      [, "/MostWanted", "Most Wanted"],
      [, "/School", "Back To School"],
      [, "/Autumn", "Autumn Edit"],
      [, "/Graphic", "Graphic T-Shirts"],
      [, "/Organic", "Organic Essentials"],
    ],
  ];
  return (
    <div>
      <PhoneMenCard Test={ListofMen} />
    </div>
  );
};

export default PhoneMen;
