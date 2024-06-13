import React from "react";
import { useNavigate } from "react-router-dom";
import { FaCircleChevronRight } from "react-icons/fa6";

const Button = ({ className }) => {
  const navigate = useNavigate();

  return (
    <button className={`btn ${className}`} onClick={() => navigate("/contact")}>
      Get in Touch <FaCircleChevronRight style={{ fontSize: "18px" }} />
    </button>
  );
};

export default Button;
