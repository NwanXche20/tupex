import React from "react";
import { FaCircleChevronRight } from "react-icons/fa6";

const Button = ({ className }) => {
  return (
    <button className={`btn ${className}`}>
      Get in Touch <FaCircleChevronRight style={{ fontSize: "18px" }} />
    </button>
  );
};

export default Button;
