import { RegisterBg } from "assets";
import React from "react";
import "./index.scss";
import { useHistory } from "react-router-dom";
import { Link, Gap } from "components";

const DetailBlog = () => {
  const history = useHistory();
  return (
    <div className="detail-blog-wrapper">
      <img className="img-cover" src={RegisterBg} alt="" />
      <p className="blog-title">Title blog</p>
      <p className="blog-author">Author - Date Post</p>
      <p className="blog-body">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam iste
        blanditiis magnam eaque laudantium quidem ad. Consectetur illo atque sed
        saepe vel quo dolores quod.
      </p>
      <Gap height={40} />
      <Link title="Go Back" onClick={() => history.push("/")} />
    </div>
  );
};

export default DetailBlog;
