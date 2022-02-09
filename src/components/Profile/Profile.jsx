import React from "react";
import av from "../../assets/images/me1.jpg";
import "./Profile.scss";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { BsChevronDown, BsPersonCheckFill } from "react-icons/bs";

const Profile = () => {
  return (
    <div className="profile">
      <div className="profile__header">
        <div className="profile__img-container">
          <img className="profile__img" src={av} alt="Profile Pic" />
        </div>

        <div className="profile__actions">
          <div className="profile__top">
            <h2 className="profile__name">coding is cool</h2>
            <div className="profile__setting-icon">
              <BiDotsHorizontalRounded className="profile__options" />
            </div>
          </div>
          <div className="profile__bottom">
            <button className="profile__message-btn">Message</button>
            <BsPersonCheckFill className="profile__icon" />
            <BsChevronDown className="profile__icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
