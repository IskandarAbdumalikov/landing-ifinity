import React, { useState } from "react";
import "./header.scss";
import logo from "../../assets/logo.svg";
import { FaBars } from "react-icons/fa";
import { MdCancel } from "react-icons/md";

const Header = () => {
  let [showList, setShowList] = useState(false);
  return (
    <header className="header">
      <nav className="container header__nav">
        <ul
          className={
            showList ? "header__nav__list show__list" : "header__nav__list"
          }
        >
          <a href="#">Demos</a>
          <a href="#"> Pages </a>
          <a href="#">Support</a>
          <MdCancel className="cancel" onClick={() => setShowList(false)} />
        </ul>
        <FaBars className="bar" onClick={() => setShowList(true)} />
        <div className="header__nav__logo">
          <img src={logo} alt="" />
        </div>
        <button className="header__nav__btn">+ Submit New Job</button>
      </nav>
      {showList ? (
        <div onClick={() => setShowList(false)} className="overlay"></div>
      ) : (
        <></>
      )}
    </header>
  );
};

export default Header;
