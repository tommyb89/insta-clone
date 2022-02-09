import React from "react";
import "./Profile.scss";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { BsChevronDown, BsPersonCheckFill } from "react-icons/bs";
import Stats from "../Stats/Stats";
import Highlights from "../Highlights/Highlights";

const Profile = (props) => {
  const { user } = props;

  return (
    <div className="profile">
      <div className="profile__header">
        <div className="profile__img-container">
          <img
            className="profile__img"
            src={user[0].avatarSrc}
            alt="Profile Pic"
          />
        </div>
        <div className="profile__actions">
          <div className="profile__top">
            <h2 className="profile__name">{user[0].instagramName}</h2>
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
        <h4 className="profile__title">{user[0].userName}</h4>
        <p className="profile__professional">{user[0].profession}</p>
        <div className="profile__description">{user[0].description}</div>
        <a
          className="profile__link"
          href="https://tommyb89.github.io/portfolio-react/"
        >
          {user[0].website}
        </a>
      </div>

      {/*stories*/}
      <div className="profile__highlights">
        <Highlights highlights={user[0].stories} />
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
