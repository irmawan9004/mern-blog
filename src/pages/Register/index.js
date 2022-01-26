import React from "react";
import { RegisterBg } from "../../assets";
import "./register.scss";
import { Input, Button, Gap, Link } from "../../components";
import { useHistory } from "react-router-dom";
const Register = () => {
  const history = useHistory();
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
        <Button title="Register" onClick={() => history.push("/login")} />
        <Gap height={100} />
        <Link
          title="Have an account? Login"
          onClick={() => history.push("/login")}
        />
      </div>
    </div>
  );
};

export default Register;
