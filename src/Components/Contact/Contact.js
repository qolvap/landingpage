import React from 'react';
import "./Contact.css"; 

import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { MdOutlineMap } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { MdOutlineDone } from "react-icons/md";
import { TfiWorld } from "react-icons/tfi";

function Contact() {
  return (
    <>
      <section id="location" className="page__location location">
        <div className="location__container">
          <div className="location__header-block header-block header-block--margin">
            <div className="header-block__label">LOCATION <MdOutlineMap/></div>
            <h2 className="header-block__title">Our Company Works Worldwide <TfiWorld /></h2>
          </div>
          <iframe
            className="location__map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126682.29347657792!2d-34.8815975!3d-7.14660885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ace839019aa3d7%3A0x6e414a9c6d26db34!2sJo%C3%A3o%20Pessoa%2C%20State%20of%20Para%C3%ADba%2C%20Brazil!5e0!3m2!1sen!2sua!4v1708618651521!5m2!1sen!2sua"
            width="600" height="450" style={{ border: 0 }} allowFullScreen loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

      <section id="subscription" className="subscription">
        <div className="subscription__container">
          <div className="subscription__column column">
            <div className="subscription__content">
              <p>Subscription <MdAlternateEmail /></p>
              <ul>
                <li>
                  <p>Subscribe your Email address for latest news & updates</p>
                </li>
                <li className="subscribe__box">
                  <input
                    className="email__input"
                    type="email"
                    placeholder="Please enter your email address"
                  />
                  <button className="email__subscription">Submit <MdOutlineDone /></button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <footer id="contact" className="footer">
        <div className="footer__body">
          <div className="footer__container">
            <div className="footer__item">
              <h4 className="footer__title">Contact Us</h4>
              <a className="footer__link" href="mailto:company@company.com">company@company.com</a>
            </div>
            <div className="footer__item">
              <h4 className="footer__title">Social Media</h4>
              <div className="footer__social social">
                <a href="#" className="social__item">
                  <FaLinkedin className="social__icon"/>
                </a>
                <a href="#" className="social__item">
                  <FaTwitter className="social__icon"/>
                </a>
                <a href="#" className="social__item">
                  <FaInstagram className="social__icon"/>
                </a>
              </div>
            </div>
            <div className="footer__item">
              <h4 className="footer__title">Slogan</h4>
              <a href="#" className="footer__link">Your problems — Our solutions</a>
            </div>
          </div>
        </div>
        <div className="footer__copy">© 2024 All rights reserved.</div>
      </footer>
    </>
  );
}

export default Contact;
