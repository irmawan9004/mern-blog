import React from "react";
import { RegisterBg } from "../../assets";
import "./register.scss";

const Register = () => {
  return (
    <div className="main-page">
      <div className="left">
        <img className="bg-image" src={RegisterBg} alt="" />
      </div>
      <div className="right">
        <p>Form Register</p>
      </div>
    </div>
  );
};

export default Register;
