import React from "react";
import { FaCheck, FaX } from "react-icons/fa6";

const ThankYouPopUp = ({ onClick }) => {
  return (
    <div className="popUp-container">
      <div className="popUp">
        <button onClick={onClick} className="popUp-close">
          <FaX />
        </button>
        <div className="popUp-inner">
          <h1>
            <FaCheck />
          </h1>

          <h2>Thank you for contacting us.</h2>

          <p>We will give you a feedback soon.</p>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPopUp;
