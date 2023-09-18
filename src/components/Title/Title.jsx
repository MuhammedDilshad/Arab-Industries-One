import React from "react";
import "./Title.css";

function Title() {
  return (
    <div>
      <div className="MainTitle">
        <div>
          <strong className="TitleHeader">
            choose a plan that's just right for you !
          </strong>
        </div>
        <div className="TiButtons">
          <button className="TitleButtons">Monthly</button>
          <button className="TitleButtons">Annually</button>
        </div>
      </div>
    </div>
  );
}

export default Title;
