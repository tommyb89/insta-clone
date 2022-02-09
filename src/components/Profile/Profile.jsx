import React from "react";
import av from "../../assets/images/me1.jpg";
import dh from "../../assets/images/dh.jfif";
import dax from "../../assets/images/dax.jpg";

import "./Profile.scss";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { BsChevronDown, BsPersonCheckFill } from "react-icons/bs";
import Stats from "../Stats/Stats";

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

      {/* content */}
      <div className="profile__info">
        <h4 className="profile__title">John Smith</h4>
        <p className="profile__professional">Coder</p>
        <div className="profile__description">
          I love... <br />
          👨‍💻 coding
          <br />
          🚴‍♂️ cycling
          <br />
          📷 photography
        </div>
        <a
          className="profile__link"
          href="https://tommyb89.github.io/portfolio-react/"
        >
          tommyb89.github.io/portfolio-react
        </a>
      </div>

      {/*stories*/}
      <div className="profile__stories">
        <div className="profile__story">
          <img className="profile__story-img" src={dh} alt="" />
          <p className="profile__story-title">Cycle</p>
        </div>
        <div className="profile__story">
          <img className="profile__story-img" src={dax} alt="" />
          <p className="profile__story-title">Dax</p>
        </div>
      </div>

      {/* stats */}
      <div className="profile__stats">
        <Stats count={14} name={"posts"} />
        <Stats count={218} name={"followers"} />
        <Stats count={4632} name={"following"} />
      </div>
    </div>
  );
};

export default Profile;
