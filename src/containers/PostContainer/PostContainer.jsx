import React from "react";
import "./PostContainer.scss";
import Post from "../../components/Post/Post";

const PostContainer = () => {
  return (
    <section className="postContainer">
      <Post
        userName="john_smith"
        avatarSrc="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        caption="I got a new cat! Isn't he cute?😍"
        imageUrl="https://cdn.theatlantic.com/thumbor/vDZCdxF7pRXmZIc5vpB4pFrWHKs=/559x0:2259x1700/1080x1080/media/img/mt/2017/06/shutterstock_319985324/original.jpg"
      />
      <Post
        userName="tom_holland"
        avatarSrc="https://www.biography.com/.image/t_share/MTQ4MTUwOTQyMDE1OTU2Nzk4/tom-holland-photo-jason-kempin-getty-images-801510482-profile.jpg"
        caption="OMG! I  just jumped out of a plane!!!"
        imageUrl="https://pixfeeds.com/images/adventure/skydiving/1280-507711236-skydiving-photo.jpg"
      />
    </section>
  );
};

export default PostContainer;
