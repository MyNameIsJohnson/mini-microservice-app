import React, { useState, useEffect } from "react";
import axios from "axios";
import CommentCreate from "./CommentCreate";
import CommentList from "./CommentList";

export default function PostList() {
  const [posts, setPosts] = useState({});

  const fetchPosts = async () => {
    const res = await axios.get("http://localhost:4002/posts");
    setPosts(res.data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  // const renderedPost = Object.values(posts).map((post) => {
  //   return (
  //     <div
  //       key={post.id}
  //       className="card"
  //       style={{ width: "30%", marginBottom: "20px" }}
  //     >
  //       <div className="card-body">
  //         <h3>{post.title}</h3>
  //       </div>
  //     </div>
  //   );
  // });

  // CAN ALSO BE DONE WITH METHOD BELOW
  const postData = Object.values(posts);

  return (
    <div className="d-flex flex-row flex-wrap justify-content-between">
      {postData.map((post) => {
        return (
          <div
            key={post.id}
            className="card"
            style={{ width: "30%", marginBottom: "20px" }}
          >
            <div className="card-body">
              <h3>{post.title}</h3>
            </div>
            <CommentList comments={post.comments} />
            <CommentCreate postId={post.id} />
          </div>
        );
      })}
    </div>
  );
}
