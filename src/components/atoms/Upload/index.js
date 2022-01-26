import React from "react";
import "./index.scss";
import { LoginBg } from "assets";

const Upload = () => {
  return (
    <div className="upload">
      <img className="preview" src={LoginBg} alt="preview" />
      <input type="file" />
    </div>
  );
};

export default Upload;
