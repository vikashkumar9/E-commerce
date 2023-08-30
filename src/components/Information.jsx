import React from "react";
import "./information.css";
import { Link } from "react-router-dom";

export const Information = () => {
  return (
    <>
      <div className="info-img">
        <div className="information">
          <p className="para">THIS IS ME</p>
          <h1>VIKASH</h1>
          <h1>TECHNICAL</h1>
          <p className="para">I,m Vikash. A Front-End Web Developer</p>
          <button className="info_btn">
            <Link to="/product">SHOP NOW</Link>
          </button>
        </div>
        <div className="picture">
          <div className="emp_box"></div>

          <img
            src="hero.jpg"
            className="image"
            alt="heroimg"
            height="300px"
            width="400px"
          ></img>
        </div>
      </div>
    </>
  );
};
export default Information;
