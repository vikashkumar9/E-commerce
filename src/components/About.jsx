import React from "react";
import "./about.css";
import Information from "./Information";
import { FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";
// import { useGlobalContext } from "../context/ProductContext";

const About = () => {
  // const { myname } = useGlobalContext(); // Call the hook to get the context value
  return (
    <>
      <div>
        <Information />
      </div>
      <div className="icons">
        <a href="https://www.instagram.com/parjapati2924/">
          <FaInstagram className="icon1" />
        </a>
        <a href="https://www.linkedin.com/in/vikash-parjapati-a670371b2/">
          <FaLinkedin className="icon2" />
        </a>
        <a href="https://www.facebook.com/vikash.parjapati.58555941">
          <FaFacebook className="icon3" />
        </a>
      </div>
    </>
  );
};

export default About;
