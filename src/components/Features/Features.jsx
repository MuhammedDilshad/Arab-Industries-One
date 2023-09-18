import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { TiCloudStorageOutline } from "react-icons/ti";
import { AiOutlineMail } from "react-icons/ai";
import { TiTickOutline } from "react-icons/ti";

import "./Features.css";

function Features(props) {
  const {
    Title,
    Price,
    OfferPrice,
    btn,
    User,
    Storages,
    Support,
    buttonColor,
    explore,
  } = props.value;
  return (
    <div className="Features">
      <div>
        {/* {exbtn && (
          <button
            className="feature-ExButton"
            style={{ backgroundColor: buttonColor }}
          >
            {exbtn}
          </button>
        )} */}
        <div className="feature-item">
          <strong>{Title}</strong>
        </div>
        {/* {Content && (
          <div className="feature-item">
            <small>{Content}</small>
          </div>
        )} */}
        {Price && (
          <div className="feature-item">
            <small className="strikethrough">${Price}</small>
          </div>
        )}
        {OfferPrice && (
          <div className="feature-item">
            <strong>${OfferPrice}</strong>
          </div>
        )}

        <div>
          <button
            className="feature-Button"
            style={{ backgroundColor: buttonColor }}
          >
            {btn}
            <BsArrowRight />
          </button>
        </div>
      </div>
      <hr />
      <div>
        <div className="feature-item">
          <small>what you'll get:</small>
        </div>

        <div className="feature-item">
          <AiOutlineUser className="feature-icon" />
          <small>Upto{User}Users</small>
        </div>
        <div className="feature-item">
          <TiCloudStorageOutline className="feature-icon" />
          <small>Upto{Storages}gb Storage</small>
        </div>
        {Support && (
          <div className="feature-item">
            <AiOutlineMail className="feature-icon" /> <small>{Support}</small>
          </div>
        )}

        {/* {Exsupport && (
          <div className="feature-item">
            <TiTickOutline className="feature-icon" />{" "}
            <small>{Exsupport}</small>
          </div>
        )} */}
        {explore && (
          <div className="feature-item">
            <strong>{explore}</strong>
          </div>
        )}
      </div>
    </div>
  );
}

export default Features;
