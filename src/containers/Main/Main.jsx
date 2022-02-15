import React from "react";
import "./Main.scss";
import PostContainer from "../PostContainer/PostContainer";
import Profile from "../../components/Profile/Profile";
import { userData } from "../../data/data";
import Login from "../../components/Login/Login";

const Main = () => {
  return (
    <main className="main">
      <Profile user={userData} />
      <Login />
      <PostContainer />
    </main>
  );
};

export default Main;
