import React from "react";
import { iInstagram, iFacebook, iGithub } from "assets";
import "./index.scss";
const Icon = ({ img }) => {
  return (
    <div className="icon-wrapper">
      <img className="icon-medsos" src={img} alt="icon" />
    </div>
  );
};
const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div>
          <p className="logo-footer">Mern Blog</p>
        </div>
        <div className="social-wrapper">
          <Icon img={iInstagram} />
          <Icon img={iFacebook} />
          <Icon img={iGithub} />
        </div>
      </div>
      <div className="copyright">
        <p>Copyright</p>
      </div>
    </div>
  );
};

export default Footer;
