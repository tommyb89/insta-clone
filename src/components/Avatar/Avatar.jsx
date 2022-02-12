import React from "react";
import "./Avatar.scss";

const Avatar = (props) => {
  const { className, avatarSrc } = props;

  return <img className={className} src={avatarSrc} alt="avatar" />;
};

export default Avatar;
