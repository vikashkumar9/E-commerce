import React from "react";
import "./information.css";

export const Information = () => {
  return (
    <>
      <div className="info-img">
        <div className="information">
          <p className="para">THIS IS ME</p>
          <h1>VIKASH</h1>
          <h1>TECHNICAL</h1>
          <p className="para">I,m Vikash. A Front-End Web Developer</p>
        </div>
        <div className="picture">
          <img
            src="vikash.jpg"
            height="200px"
            width="200px"
            className="image"
          ></img>
        </div>
      </div>
    </>
  );
};
export default Information;
