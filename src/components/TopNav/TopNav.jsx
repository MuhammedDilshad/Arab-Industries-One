import React from "react";
import fkik from "../../images/62-.png";
import { MdKeyboardArrowDown } from "react-icons/md";
import "./TopNav.css";

function TopNav() {
  return (
    <div className="TopNav">
      <div className="Logo">
        <img src={fkik} alt="" className="Logoi" />
      </div>
      <div className="TopNavContent">
        <strong className="TopNavEach">XYZ Enterprises Pvt.ltd</strong>
        <MdKeyboardArrowDown className="TopNavEach" />
      </div>
    </div>
  );
}

export default TopNav;
