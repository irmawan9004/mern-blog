import React from "react";
import { LoginBg, RegisterBg } from "../../assets";
import { Input, Button, Gap, Link } from "../../components";

const Login = () => {
  return (
    <div className="main-page">
      <div className="left">
        <img className="bg-image" src={LoginBg} alt="imageBg" />
      </div>
      <div className="right">
        <p className="title">Form Login</p>
        <Input label="Email" placeholder="Enter Email Here..." />
        <Gap height={18} />
        <Input label="Password" placeholder="Enter Password Here..." />
        <Gap height={20} />
        <Button title="Login" />
        <Gap height={100} />
        <Link title="Sign In" />
      </div>
    </div>
  );
};

export default Login;
