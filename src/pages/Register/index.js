import React from "react";
import { RegisterBg, LoginBg } from "../../assets";
import "./register.scss";
import { Input, Button, Gap, Link } from "../../components";

const Register = () => {
  return (
    <div className="main-page">
      <div className="left">
        <img className="bg-image" src={RegisterBg} alt="imageBg" />
      </div>
      <div className="right">
        <p className="title">Form Register</p>
        <Input label="Full Name" placeholder="Enter Name Here..." />
        <Gap height={18} />
        <Input label="Email" placeholder="Enter Email Here..." />
        <Gap height={18} />
        <Input label="Password" placeholder="Enter Password Here..." />
        <Gap height={20} />
        <Button title="Register" />
        <Gap height={100} />
        <Link title="Kembali ke Login" />
      </div>
    </div>
  );
};

export default Register;
