import React from "react";
import "./Styles/PhoneWomenCard.css";
import { Link } from "react-router-dom";

const PhoneMen = ({ Test }) => {
  return (
    <div className="PhoneMenListMain">
      {Test.map((PhoneMenList) => (
        <>
          <div className="PhoneListofMen">
            <h1>{PhoneMenList[0]}</h1>
            {PhoneMenList.map((ListContents) => (
              <Link to={ListContents[1]} style={{ color: "white" }}>
                <p className="PhoneMen-Text">{ListContents[2]}</p>
              </Link>
            ))}
          </div>
        </>
      ))}
    </div>
  );
};

export default PhoneMen;
