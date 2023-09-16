import React from "react";
import "./information.css";
import { Link } from "react-router-dom";
import { Button } from "../button/Button";
export const Information = ({ about }) => {
  return (
    <>
      <div className="info-img">
        <div className="information">
          <p className="para">THIS IS ME</p>
          <h1>VIKASH</h1>
          <h1>TECHNICAL STORE</h1>
          <p className="para">{about}</p>
          <Button>
            <Link to="/products">SHOP NOW</Link>
          </Button>
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
// I,m Vikash. A Front-End Web Developer
