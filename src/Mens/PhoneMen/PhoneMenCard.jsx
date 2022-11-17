import React from "react";
import "./Styles/PhoneMenCard.css";
import { Link } from "react-router-dom";

const PhoneMen = ({ Test }) => {
  return (
    <div className="PhoneMenListMain">
      {Test.map((PhoneMenList) => (
        <>
          <div className="PhoneListofMen">
            <h1>{PhoneMenList[0]}</h1>
            {PhoneMenList.map((PhoneMenList) => (
              <>
                <Link to={PhoneMenList[1]} style={{ color: "white" }}>
                  <p className="PhoneMen-Text">{PhoneMenList[2]}</p>
                </Link>
              </>
            ))}
          </div>
        </>
      ))}
    </div>
  );
};

export default PhoneMen;
