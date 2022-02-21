import React, { useState } from "react";
import "./Header.scss";
import insta from "../../assets/images/instagram.svg";
import { IoPaperPlaneOutline, IoHeartOutline } from "react-icons/io5";
import { CgAddR } from "react-icons/cg";
import { ImCompass2 } from "react-icons/im";
import { GrHomeRounded } from "react-icons/gr";
import av from "../../assets/images/me1.jpg";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="header">
      {/* left */}
      <img className="header__img" src={insta} alt="Instagram logo" />
      {/* right */}

      <div className="header__icons">
        <GrHomeRounded className="header__icon" />
        <IoPaperPlaneOutline className="header__icon" />
        <CgAddR className="header__icon" />
        <ImCompass2 className="header__icon" />
        <IoHeartOutline className="header__icon" />
        <img src={av} alt="Profile Avatar" className="header__avatar" />
      </div>
    </div>
  );
};

export default Header;
