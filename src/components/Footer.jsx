import React from "react";
import { FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa";
import "./Footer.css";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <section id="footer">
      <section className="col">
        <div id="div1" className="grid grid-two-column">
          <div>
            <h3>Ready to get started?</h3>
            <h3>Talk to us today</h3>
          </div>
          <div className="footer-about">
            <NavLink className="complainLink" to="/complaint">
              top
            </NavLink>
          </div>
        </div>

        <div id="div2">
          <div className="footer-social">
            <h3>Follows Us</h3>
            <div className="footer-social--icons">
              <div>
                <FaDiscord className="icons" />
              </div>
              <div>
                <FaInstagram className="icons" />
              </div>
              <div>
                <a href="https://www.youtube.com/watch?v=HtMF973tXIY">
                  <FaYoutube className="icons" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div id="div3">
          <div className="footer-contact">
            <h3>Call Us</h3>
            <h3>+91 12345678978</h3>
          </div>
        </div>

        <div id="div4">
          <div className="footer-bottom--section">
            <div className="container grid grid-two-column">
              <p>@{new Date().getFullYear()} Complain. All Rights Reserved</p>
              <div>
                <p>PRIVACY POLICY</p>
                <p>TERMS & CONDITIONS</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};


export default Footer;
