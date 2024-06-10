import React from "react";
import ErrorImage from "../assets/oops-image.png";

const Error = () => {
  return (
    <div className="error-container">
      <h1>Oops!!</h1>

      <img src={ErrorImage} alt="sad bear gif" className="error-image" />

      <h3>Unfortunately, something went wrong.</h3>
    </div>
  );
};

export default Error;
