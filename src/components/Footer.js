import React from "react";
import { Link } from "react-router-dom";

const NavItem = ({ children, to }) => {
  return (
    <li className="nav-item">
      <Link to={to} className="nav-link">
        {children}
      </Link>
    </li>
  );
};

const Footer = () => {
  return (
    <div>
      <div className="footer container">
        <div className="footer-copyright">
          <span style={{ fontWeight: 800, fontSize: "20px" }}>
            T<sub>u</sub>p<sup>e</sup>x
          </span>{" "}
          &copy; 2024. Developed by NwanXche{" "}
        </div>

        <div className="footer-links">
          <ul className="nav-lists">
            <NavItem to="/">Home</NavItem>
            <NavItem to="/photos">photos</NavItem>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
