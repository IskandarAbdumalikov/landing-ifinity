import React from "react";
import "./footer.scss";
import logo from "../../assets/logo.svg";

const Footer = () => {
  return (
    <footer>
      <div className="footer container">
        <ul>
          <h3>
            <img src={logo} alt="" />
          </h3>
          <p>Finity has a collection of latest 2,500</p>
          <p> jobs to join next companies.</p>
        </ul>
        <ul>
          <h3>Community</h3>
          <p>For Talents</p>
          <p>For Companies</p>
          <p>Facebook Group</p>
          <p>FAQ</p>
        </ul>
        <ul>
          <h3>About us</h3>
          <p>Meet the Team</p>
          <p>Our Story</p>
          <p>Career</p>
        </ul>
        <ul>
          <h3>Useful</h3>
          <p>Free Resume Builder</p>
          <p>Free Graphics</p>
          <p>Career Blog</p>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
