import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
import { FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";

export const Footer = () => {
  return (
    <>
      <div className="contact-short">
        <div>
          <h3>Ready to get started?</h3>
          <h3>Talk to us today</h3>
        </div>
        <div>
          <button>
            <Link to="/contact">Get Started </Link>
          </button>
        </div>
      </div>
      <div className="footer">
        <div className="information">
          <h2>Get you know us</h2>
          <div className="links">
            <ul>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <br></br>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="contacts">
          <h2>Follow us</h2>
          <div className="links">
            <ul>
              <li>
                <a
                  href="https://www.instagram.com/parjapati2924/"
                  className="contact-links"
                >
                  <FaInstagram className="icon1" />
                  <li>Instagram</li>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/vikash-parjapati-a670371b2/"
                  className="contact-links"
                >
                  <FaLinkedin className="icon2" />
                  <li>Linkedin</li>
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/vikash.parjapati.58555941"
                  className="contact-links"
                >
                  <FaFacebook className="icon3" />
                  <li>facebook</li>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="Contact-details">
          <h2>Contact with us</h2>
          <div className="links">
            <ul>
              <li>+919306075344</li>
              <br></br>
              <li>
                <a href="mailto:vikashparjapati59@gmail.com">
                  vikashparjapati59@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>{" "}
    </>
  );
};
export default Footer;
// © Copyright 2022
