import React from "react";
import Image538 from "../../Images/538.jpg";
import Image539 from "../../Images/539.jpg";
import Image540 from "../../Images/540.jpg";
import Image541 from "../../Images/541.jpg";
import Image542 from "../../Images/542.jpg";
import Image543 from "../../Images/543.jpg";
import Image544 from "../../Images/544.jpg";
import Image545 from "../../Images/545.jpg";
import Image546 from "../../Images/546.jpg";
import Image547 from "../../Images/547.jpg";
import Image548 from "../../Images/548.jpg";
import Image549 from "../../Images/549.jpg";
import Image550 from "../../Images/550.jpg";
import Image551 from "../../Images/551.jpg";
import Image552 from "../../Images/552.jpg";
import Image553 from "../../Images/553.jpg";
import ClothingCard from "../ClothingCard";
const ClothingMens = () => {
  const ListComponents = [
    [Image538, "Ringspun Allstars KF Vintage Re-issue T-Shirt", "£29.99"],
    [Image539, "Vintage Sign Writer T-Shirt", "£26.99"],
    [Image540, "Indie T-Shirt", "£26.99"],
    [Image541, "Metallica Limited Edition Band T-Shirt", "£34.99"],
    [Image542, "Achilles Graphic Raglan T-Shirt", "£26.99"],
    [Image543, "Photographic T-Shirt", "£26.99"],
    [Image544, "Surf Souvenir T-Shirt", "£26.99"],
    [Image545, "Metallica Limited Edition Band T-Shirt", "£34.99"],
    [Image546, "Great Outdoors Graphic T-Shirt", "£26.99"],
    [Image547, "Surf Souvenir T-Shirt", "£26.99"],
    [Image548, "Vintage Trade Tab T-Shirt", "£26.99"],
    [Image549, "80s Downtown Script Logo T-Shirt", "£26.99"],
    [Image550, "Great Outdoors Graphic T-Shirt", "£26.99"],
    [Image551, "Metallica Limited Edition Band T-Shirt", "£34.99"],
    [Image552, "Blackout Rock Graphic T-Shirt", "£26.99"],
    [Image553, "Sex Pistols Limited Edition Band T-shirt", "£34.99"],
  ];
  return (
    <div>
      <div className="content">
        <h2>Men’s Graphic Tee Collection</h2>
      </div>
      <ClothingCard ClothingCard={ListComponents} />
    </div>
  );
};

export default ClothingMens;
