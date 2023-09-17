import React from "react";
import DataOne from "../../Assist/Assist";
import "./MainContent.css";

function MainContent() {
  return (
    <div>
      <div className="MainTitle">
        <div>
          <strong>choose a plan that's just right for you</strong>
        </div>
        <div className="Buttons">
          <button>Monthly</button>
          <button>Annually</button>
        </div>
      </div>
      <div className="Features"></div>
    </div>
  );
}

export default MainContent;
