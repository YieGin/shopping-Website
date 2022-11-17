import React from "react";
import Image241 from "../../ImagesWomen/241.jpg";
import Image242 from "../../ImagesWomen/242.jpg";
import Image243 from "../../ImagesWomen/243.jpg";
import Image244 from "../../ImagesWomen/244.jpg";
import Image245 from "../../ImagesWomen/245.jpg";
import Image246 from "../../ImagesWomen/246.jpg";
import Image247 from "../../ImagesWomen/247.jpg";
import Image248 from "../../ImagesWomen/248.jpg";
import Image249 from "../../ImagesWomen/249.jpg";
import Image250 from "../../ImagesWomen/250.jpg";
import Image251 from "../../ImagesWomen/251.jpg";
import Image252 from "../../ImagesWomen/252.jpg";
import Image253 from "../../ImagesWomen/253.jpg";
import Image254 from "../../ImagesWomen/254.jpg";
import Image255 from "../../ImagesWomen/255.jpg";
import Image256 from "../../ImagesWomen/256.jpg";
import ClothingCard from "../ClothingCard";
const ClothingMens = () => {
  const ListComponents = [
    [Image241, "Essential Bikini Top", "£29.49"],
    [Image242, "Essential Bikini Briefs", "£22.49"],
    [Image243, "Micro Logo Elastic Triangle Bikini Top", "£24.49"],
    [Image244, "Micro Elastic Bikini Briefs", "£22.49"],
    [Image245, "Micro Elastic Bikini Top", "£24.49"],
    [Image246, "Micro Elastic Bikini Briefs", "£34.49"],
    [Image247, "Essential Bikini Top", "£29.49"],
    [Image248, "Essential Bikini Briefs", "£22.49"],
    [Image249, "Essential Tape Swimsuit", "£44.49"],
    [Image250, "Essential Tape Swimsuit", "£44.49"],
    [Image251, "Code Elastic Bikini Top", "£24.49"],
    [Image252, "Micro Elastic Bikini Top", "£17.49"],
    [Image253, "Twist Bandeau Bikini Top", "£24.49"],
    [Image254, "Classic Bikini Brief", "£24.49"],
    [Image255, "T Back Fixed Tri Bikini Top", "£24.49"],
    [Image256, "High Waist Bikini Briefs", "£24.49"],
  ];
  return (
    <div>
      <div className="content">
        <h2>Women Swimwear</h2>
      </div>
      <ClothingCard ClothingCard={ListComponents} />
    </div>
  );
};

export default ClothingMens;
