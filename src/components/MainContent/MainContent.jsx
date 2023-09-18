import React from "react";
import { DataOne, DataTwo } from "../../Assist/Assist";
import "./MainContent.css";
import Features from "../Features/Features";
import Title from "../Title/Title";
import SecondFeature from "../SecondFeature/SecondFeature";

function MainContent() {
  return (
    <div className="MainContent">
      <Title />
      <div className="MainFeatures">
        {DataOne.map((value) => (
          <Features value={value} key={value.User} />
        ))}
      </div>
      <div className="MainSecondFeatures">
        {DataTwo.map((data) => (
          <SecondFeature data={data} />
        ))}
      </div>
    </div>
  );
}

export default MainContent;
