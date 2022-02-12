import React from "react";
import Avatar from "../Avatar/Avatar";
import "./Post.scss";

const Post = () => {
  return (
    <article className="post">
      {/* header -> avatar + username */}
      <div className="post__header">
        <Avatar className={"avatar"} />
        <div className="post__info">
          <h3 className="post__userName">Username</h3>
          <a className="post__location" href="">
            Vienna
          </a>
        </div>
      </div>

      {/* image */}
      <img
        className="post__image"
        src="https://cdn.theatlantic.com/thumbor/vDZCdxF7pRXmZIc5vpB4pFrWHKs=/559x0:2259x1700/1080x1080/media/img/mt/2017/06/shutterstock_319985324/original.jpg"
        alt="asdas"
      />
      {/* username + caption */}
      <div className="post__caption">
        <Avatar className={"avatar--small"} />
        <h4 className="post__name">Username: caption</h4>
      </div>
    </article>
  );
};

export default Post;
