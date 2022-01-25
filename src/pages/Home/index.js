import { BlogItem, Button } from "components";
import React from "react";
import "./index.scss";

const Home = () => {
  return (
    <div className="home-page-wrapper">
      <div className="create-wrapper">
        <Button title="Create Blog" />
      </div>
      <BlogItem />
      <BlogItem />
      <BlogItem />
      <BlogItem />
    </div>
  );
};

export default Home;
