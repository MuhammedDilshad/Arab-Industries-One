import React from "react";
import { PiBellRingingFill } from "react-icons/pi";
import { AiOutlinePlusCircle } from "react-icons/ai";

import "./RightNav.css";

function RightNav() {
  return (
    <div className="RightNav">
      <div className="TopSection">
        <PiBellRingingFill className="EachRight" />
      </div>
      <div className="BottomSection">
        <AiOutlinePlusCircle className="EichRight" />
      </div>
    </div>
  );
}

export default RightNav;
