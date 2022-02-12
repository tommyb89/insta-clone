import React from "react";
import Avatar from "../Avatar/Avatar";
import "./Post.scss";

const Post = (props) => {
  const { imageUrl, userName, avatarSrc, caption } = props;

  return (
    <article className="post">
      {/* header -> avatar + username */}
      <div className="post__header">
        <Avatar className={"avatar"} avatarSrc={avatarSrc} />
        <div className="post__info">
          <h3 className="post__userName">{userName}</h3>
          <a className="post__location" href="">
            Vienna
          </a>
        </div>
      </div>

      {/* image */}
      <img className="post__image" src={imageUrl} alt="asdas" />
      {/* username + caption */}
      <div className="post__caption">
        <h4 className="post__name">{userName}</h4>
        <p className="post__text">{caption}</p>
      </div>
    </article>
  );
};

export default Post;
