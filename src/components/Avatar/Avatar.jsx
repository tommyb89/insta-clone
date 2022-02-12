import React from "react";
import "./Avatar.scss";

const Avatar = (props) => {
  return (
    <img
      className={props.className}
      src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      alt="avatar"
    />
  );
};

export default Avatar;
