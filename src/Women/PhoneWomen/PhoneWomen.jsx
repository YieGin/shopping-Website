import React from "react";
import PhoneWomenCard from "./PhoneWomenCard";
const PhoneMen = () => {
  const ListofMen = [
    [
      ["Clothing"],
      [, "/NewWomen", "New In"],
      [, "/JacketsWomen", "Jackets & Coats"],
      [, "/HoddiesWomen", "Hoodies & Sweatshirts"],
      [, "/DressesWomen", "Dresses"],
      [, "/TopsWomen", "Tops & Shirts"],
      [, "/TShirtsWomen", "T-Shirts"],
      [, "/JeansWomen", "Jeans"],
      [, "/JoggersWomen", "Joggers"],
      [, "/TrousersWomen", "Trousers & Chinos"],
      [, "/JumpersWomen", "Jumpers & Cardigans"],
      [, "/LeggingsWomen", "Leggings"],
      [, "/LoungewearWomen", "Loungewear"],
      [, "/PlaysutsWomen", "Playsuits & Jumpsuits"],
      [, "/ShortsWomen", "Shorts"],
      [, "/SkirtsWomen", "Skirts"],
      [, "/SwimwearWomen", "Swimwear"],
    ],
    [
      ["Bags & Accessories"],
      [, "/ViewWomen", "View All"],
      [, "/BagsWomen", "Bags & Backpacks"],
      [, "/HatsWomen", "Hats & Caps"],
      [, "/GlovesWomen", "Gloves"],
      [, "/ScarvesWomen", "Scarves"],
      [, "/UnderwearWomen", "Underwear"],
      [, "/SocksWomen", "Socks"],
      [, "/ReusableWomen", "Reusable Water Bottles"],
    ],
    [
      ["Footwear"],
      [, "/ViewFootwearWomen", "View All"],
      [, "/TrainersWomen", "Trainers"],
      [, "/VeganWomen", "Vegan Trainers"],
      [, "/SlidersWomen", "Sliders"],
      [, "/FlipFlopsWomen", "Flip Flops"],
    ],
    [
      ["Trending"],
      [, "/BestsellersWomen", "Best Sellers"],
      [, "/MostWantedWomen", "Most Wanted"],
      [, "/SchoolWomen", "Back To School"],
      [, "/AutumnWomen", "Autumn Edit"],
      [, "/GraphicWomen", "Graphic T-Shirts"],
      [, "/OraganicWomen", "Organic Essentials"],
    ],
  ];
  return (
    <div>
      <PhoneWomenCard Test={ListofMen} />
    </div>
  );
};

export default PhoneMen;
