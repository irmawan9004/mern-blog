import { RegisterBg } from "assets";
import React from "react";

const BlogItem = () => {
  return (
    <div>
      <img src={RegisterBg} alt="post" />
      <div>
        <p className="title">Title Blog</p>
        <p className="author">Author - Date Post</p>
        <p className="body">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum
          provident modi repellat velit odio iure quia veritatis expedita omnis
          earum?
        </p>
      </div>
    </div>
  );
};

export default BlogItem;
