import React from "react";
import "./PostContainer.scss";
import Post from "../../components/Post/Post";

const PostContainer = () => {
  return (
    <section className="postContainer">
      <Post />
      <Post />
    </section>
  );
};

export default PostContainer;
