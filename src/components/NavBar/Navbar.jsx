import React from "react";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import khabib from "../../images/khabib.jpg";
import "./NavBar.css";

function Navbar() {
  return (
    <div>
      <div className="ProfileContainer">
        <img src={khabib} alt="" />
        <div className="Content">
          <div className="Name">
            <strong>Ram Mohan</strong>
            <MdOutlineArrowForwardIos />
          </div>
          <small>rammohan2@gmail.com</small>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
