import React from "react";
import "./Header.scss";
import insta from "../../assets/images/instagram.svg";
import { IoPaperPlaneOutline, IoHeartOutline } from "react-icons/io5";
import { CgAddR } from "react-icons/cg";

const Header = () => {
  return (
    <div className="header">
      {/* left */}
      <img className="header__img" src={insta} alt="Instagram logo" />

      {/* right */}
      <div className="header__icons">
        <CgAddR className="header__icon" />
        <IoHeartOutline className="header__icon" />
        <IoPaperPlaneOutline className="header__icon" />
      </div>
    </div>
  );
};

export default Header;
