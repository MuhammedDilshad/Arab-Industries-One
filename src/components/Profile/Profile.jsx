import React from "react";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import khabib from "../../images/khabib.jpg";
import "./Profile.css";

function Profile() {
  return (
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
  );
}

export default Profile;
