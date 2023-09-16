import React from "react";
import { Link } from "react-router-dom";
import "./error.css";
import { Button } from "../button/Button";

export const Error = () => {
  return (
    <>
      <div className="error-contant">
        <h1>404</h1>
        <h2>UH OH! You are lost.</h2>
        <p>
          The page you are looking for does not exist. How you got here is a
          mistery But you can click on the button for go homepage.
        </p>
        <Button>
          <Link to="/">Go back</Link>
        </Button>
      </div>
    </>
  );
};
export default Error;
