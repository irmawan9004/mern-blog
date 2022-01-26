import { RegisterBg } from "assets";
import React from "react";
import "./index.scss";
import { useHistory } from "react-router-dom";
import { Button } from "components";

const BlogItem = () => {
  const history = useHistory();
  return (
    <div className="blog-item">
      <img className="image-thumb" src={RegisterBg} alt="post" />
      <div className="content-detail">
        <p className="title">Title Blog</p>
        <p className="author">Author - Date Post</p>
        <p className="body">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          aliquid ut ad iste, voluptates vero architecto maiores provident
          dolores, porro ratione blanditiis deleniti quam id repellendus? Qui,
          molestias sapiente voluptatum error totam dolorem? Sunt culpa nam
          obcaecati iste excepturi architecto.
        </p>
      </div>
      <Button
        title="View Detail"
        onClick={() => history.push("/detail-blog")}
      />
    </div>
  );
};

export default BlogItem;
