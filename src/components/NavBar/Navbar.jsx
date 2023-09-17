import React from "react";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { FaPowerOff } from "react-icons/fa";
import khabib from "../../images/khabib.jpg";
import { NavbarDetails } from "../../Assist/Assist";
import "./NavBar.css";

function Navbar() {
  return (
    <div className="ProfileContainer">
      <div className="ProContainer">
        <img src={khabib} alt="" />
        <div className="Content">
          <div className="Name">
            <strong>Ram Mohan</strong>
            <MdOutlineArrowForwardIos />
          </div>
          <small>rammohan2@gmail.com</small>
        </div>
      </div>
      <div className="MapProfileContainer">
        <div className="MapContent">
          {NavbarDetails.map((value) => (
            <div className="NameIcon">
              {value.Navicon}
              <strong>{value.Heading}</strong>
            </div>
          ))}
        </div>
      </div>
      <button className="Logout">
        Logout
        <FaPowerOff />
      </button>
    </div>
  );
}

export default Navbar;
