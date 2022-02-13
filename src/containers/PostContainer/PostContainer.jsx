import React, { useState, useEffect } from "react";
import "./PostContainer.scss";
import Post from "../../components/Post/Post";
import { db } from "../../firebase.js";
import { collection, getDocs, onSnapshot } from "@firebase/firestore";

const PostContainer = () => {
  const [posts, setPosts] = useState([]);
  const postsCollectionRef = collection(db, "posts");

  useEffect(() => {
    onSnapshot(postsCollectionRef, (snapshot) => {
      setPosts(snapshot.docs.map((doc) => ({ id: doc.id, post: doc.data() })));
    });
  }, []);

  return (
    <section className="postContainer">
      {/* mapping over posts */}
      {posts.map(({ post, id }) => (
        <Post
          key={id}
          userName={post.username}
          avatarSrc={post.avatarSrc}
          caption={post.caption}
          imageUrl={post.imageUrl}
        />
      ))}
    </section>
  );
};

export default PostContainer;
