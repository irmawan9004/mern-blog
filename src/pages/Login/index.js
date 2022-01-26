import React from "react";
import { LoginBg, RegisterBg } from "../../assets";
import { Input, Button, Gap, Link } from "../../components";
import { useHistory } from "react-router-dom";

const Login = () => {
  const history = useHistory();
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
        <Button title="Login" onClick={() => history.push("/")} />
        <Gap height={100} />
        <Link
          title="Don't have account? Sign In"
          onClick={() => history.push("/register")}
        />
      </div>
    </div>
  );
};

export default Login;
