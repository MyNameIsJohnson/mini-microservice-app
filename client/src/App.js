import "./App.css";
import React, { useState } from "react";
import PostCreate from "./PostCreate";
import PostList from "./PostList";

function App() {
  const [content, setContent] = useState("");
  const getPosts = (req, res) => {
    fetch("http://localhost:4000/posts")
      .then((response) => response.json())
      .then((data) => {
        console.log("get posts", data);
        setContent(data);
        //res.send({message:'success'});
      });
  };
  return (
    <div className="container">
      <h1>Create Post</h1>
      <PostCreate />
      <hr />
      <h1>Posts</h1>
      <PostList />
    </div>
  );
}

export default App;
