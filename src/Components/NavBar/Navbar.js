import React from "react";
import "./Navbar.css"; 
import { FaTruckFast } from "react-icons/fa6";

function Navbar() {
  return (
    <header id="header" className="header">
      <div className="header__container">
        <a href="#hero" className="header__logo"> 
          <FaTruckFast className="header__logo" />
        </a>
        <nav className="header__menu menu">
          <ul className="menu__list">
            <li className="menu__item">
              <a href="#features" className="menu__link">Features</a> 
            </li>
            <li className="menu__item">
              <a href="#services" className="menu__link">Services</a> 
            </li>
            <li className="menu__item">
              <a href="#contact" className="menu__link">Contact</a> 
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;



