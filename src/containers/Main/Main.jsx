import React from "react";
import "./Main.scss";
import PostContainer from "../PostContainer/PostContainer";
import Profile from "../../components/Profile/Profile";
import { userData } from "../../data/data";

const Main = () => {
  return (
    <main className="main">
      <Profile user={userData} />
      <PostContainer />
    </main>
  );
};

export default Main;
